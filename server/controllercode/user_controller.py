#user module endpoints
from app import app
from flask import request
from modelscode.user_models import user_model



  # This will enable CORS for all routes


b1=user_model()

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    return b1.signup(data)
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    return b1.login(data)


@app.route('/verify_email', methods=['POST'])
def verify_email():
    data = request.get_json()
    return b1.verify_email(data)

@app.route('/resend-verification-code', methods=['POST'])
def resend_verification_code():
    data = request.get_json()
    return b1.resend_verification_code(data)