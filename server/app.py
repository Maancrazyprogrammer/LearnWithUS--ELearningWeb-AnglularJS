# Endpoints of user 
from flask import Flask
from modelscode.user_models import user_model
from flask_jwt_extended import JWTManager
from flask_cors import CORS
app=Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'
jwt = JWTManager(app)

# CORS(app)
# CORS(app, resources={r"/signup": {"origins": "http://localhost:4200"}})
CORS(app, resources={r"/*": {"origins": "http://localhost:4200"}})  # Enable CORS for all routes
  
if __name__ == '__main__':
    app.run(debug=True)




































# import controllercode.user
# import controllercode.product

from controllercode import *
from modelscode import *

