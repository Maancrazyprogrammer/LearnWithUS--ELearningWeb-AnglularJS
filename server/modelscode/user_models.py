import mysql.connector
import json
from flask import request, jsonify
from flask_jwt_extended import JWTManager, create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
import re
import random
import string
import time
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
class user_model():
    def __init__(self):
        try:
            self.conn=mysql.connector.connect(host='localhost',user='root',password='',database='e_learning_platform')
            self.conn.autocommit=True
            self.cur=self.conn.cursor(dictionary=True)
            print('Connection Eastablished Successfully!')
        except:
            print('Connection Unsucessfull!')
        
    def generate_verification_code(self):
        return ''.join(random.choices(string.digits, k=6))

    def store_verification_code(self, email, code):
        expiry_time = int(time.time()) + 300  # Code expires in 5 minutes
        self.cur.execute("UPDATE users SET verification_code = %s, code_expiry = %s WHERE email = %s", (code, expiry_time, email))

    def verify_code(self, email, code):
        current_time = int(time.time())
        self.cur.execute("SELECT verification_code, code_expiry FROM users WHERE email = %s", (email,))
        result = self.cur.fetchone()
        if result:
            if result['verification_code'] == code and result['code_expiry'] > current_time:
                self.cur.execute("UPDATE users SET is_verified = TRUE, verification_code = NULL, code_expiry = NULL WHERE email = %s", (email,))
                return True
        return False
    
    # def generate_verification_code(self):
    #     return str(random.randint(100000, 999999))

    def send_verification_email(self, email, code):
        sender_email = "muhammadnoumankhokhar52@gmail.com"
        sender_password = "nvfs iobc yyxq vnto"
        subject = "Email Verification Code"
        body = f"Your verification code is {code}."

        message = MIMEMultipart()
        message["From"] = sender_email
        message["To"] = email
        message["Subject"] = subject

        message.attach(MIMEText(body, "plain"))

        try:
            server = smtplib.SMTP("smtp.gmail.com", 587)
            server.starttls()
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, email, message.as_string())
            server.quit()
        except Exception as e:
            print(f"Error sending email: {e}")


    def resend_verification_code(self, data):
        email = data['email']

        self.cur.execute("SELECT * FROM users WHERE email = %s", (email,))
        user = self.cur.fetchone()

        if not user:
            return jsonify({"msg": "Email not found"}), 404

        if user['is_verified']:
            return jsonify({"msg": "Email already verified"}), 400

        verification_code = self.generate_verification_code()
        code_expiry = int(time.time()) + 300  # Code expires in 5 minutes
        self.store_verification_code(email, verification_code)
        self.send_verification_email(email, verification_code)

        return jsonify({"msg": "Verification code resent successfully."}), 200
    
    
    def signup(self, data):
        full_name = data['full_name']
        dob = data['dob']
        whatsapp_number = data['whatsapp_number']
        email = data['email']
        password = data['password']
        confirm_password = data['confirm_password']

        if not (full_name and dob and whatsapp_number and email and password and confirm_password):
            return jsonify({"msg": "All fields are required"}), 400

        if not is_valid_email(email):
            return jsonify({"msg": "Invalid email address"}), 400

        if not is_valid_whatsapp_number(whatsapp_number):
            return jsonify({"msg": "Invalid WhatsApp number"}), 400

        if password != confirm_password:
            return jsonify({"msg": "Passwords do not match"}), 400

         # Check if email or WhatsApp number already exists
        self.cur.execute("SELECT * FROM users WHERE email = %s OR whatsapp_number = %s", (email, whatsapp_number))
        user = self.cur.fetchone()
        if user:
            if user['email'] == email:
                return jsonify({"msg": "Email already exists"}), 400
            if user['whatsapp_number'] == whatsapp_number:
                return jsonify({"msg": "WhatsApp number already exists"}), 400

        hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
        verification_code = self.generate_verification_code()
        self.cur.execute(
            "INSERT INTO users (full_name, dob, whatsapp_number, email, password, verification_code, code_expiry) VALUES (%s, %s, %s, %s, %s, %s, %s)",
            (full_name, dob, whatsapp_number, email, hashed_password, verification_code, int(time.time()) + 300)
        )

        self.send_verification_email(email, verification_code)

        return jsonify({"msg": "User registered successfully. Please check your email for the verification code."}), 201
    
    
    def verify_email(self, data):
        email = data['email']
        verification_code = data['verification_code']

        if self.verify_code(email, verification_code):
            return jsonify({"msg": "Email verified successfully."}), 200
        else:
            return jsonify({"msg": "Invalid or expired verification code."}), 400

    def login(self, data):
        email = data['email']
        password = data['password']

        if not (email and password):
            return jsonify({"msg": "Email and password are required"}), 400

        self.cur.execute("SELECT * FROM users WHERE email = %s", (email,))
        user = self.cur.fetchone()

        if not user or not check_password_hash(user['password'], password):
            return jsonify({"msg": "Invalid credentials"}), 401

        if not user['is_verified']:
            return jsonify({"msg": "Email not verified"}), 401

        access_token = create_access_token(identity=email)
        return jsonify(access_token=access_token), 200




def is_valid_email(email):
    regex = r'^\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    return re.match(regex, email)

def is_valid_whatsapp_number(number):
    regex = r'^\+92\d{10}$'  # Ensure the number starts with +92 and is followed by 10 digits
    return re.match(regex, number)