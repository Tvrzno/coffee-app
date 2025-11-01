import os
from flask import Flask
from flask_cors import CORS
from models import db
from routes.home import home_bp
from routes.small import small_bp
from routes.api import api_bp
from config import Settings

app = Flask(__name__)
CORS(app) 

def create_app():
    app = Flask(__name__)
    app.config.from_object(Settings)

    db.init_app(app)

    @app.route("/health")
    def health():
        return {"db": "ok"}

    return app

app = create_app()

app.register_blueprint(home_bp)
app.register_blueprint(small_bp)
app.register_blueprint(api_bp)



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
