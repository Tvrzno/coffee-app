import os
from flask import Flask
from flask_cors import CORS
from models import db
from routes.home import home_bp
from routes.small import small_bp
from routes.api import api_bp

app = Flask(__name__)
CORS(app) 

db_url = os.environ.get("DATABASE_URL")
if not db_url:
    raise RuntimeError("DATABASE_URL is not set")

app.config['SQLALCHEMY_DATABASE_URI'] = db_url
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

app.register_blueprint(home_bp)
app.register_blueprint(small_bp)
app.register_blueprint(api_bp)



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
