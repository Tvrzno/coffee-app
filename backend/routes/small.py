from flask import Blueprint

small_bp = Blueprint('small', __name__)

@small_bp.route('/small')

def small():
    return "Hello, Coffee SMALL BIGass!"
