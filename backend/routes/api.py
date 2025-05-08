from flask import Blueprint, jsonify
from models.coffee import Coffee

api_bp = Blueprint('api', __name__)

@api_bp.route('/api/coffees', methods=['GET'])
def get_coffees():
    coffees = Coffee.query.all()
    return jsonify([coffee.to_dict() for coffee in coffees])