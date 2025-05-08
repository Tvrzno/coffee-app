from flask import Flask
from models import db
from routes.home import home_bp
from routes.small import small_bp
from routes.api import api_bp

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://mates:REDACTED@192.168.88.222:3306/coffee_app'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

app.register_blueprint(home_bp)
app.register_blueprint(small_bp)
app.register_blueprint(api_bp)



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
