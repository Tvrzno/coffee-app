from flask import Blueprint, request, jsonify
from models.coffee import Coffee
from models.grinder import Grinder
from models.brew_type import Brew_type
from models.brew import Brew
from models import db

api_bp = Blueprint('api', __name__)

@api_bp.route('/api/coffees', methods=['GET'])
def get_coffees():
    coffees = Coffee.query.all()
    return jsonify([coffee.to_dict() for coffee in coffees])

@api_bp.route('/api/coffees', methods=['POST'])
def add_coffee():
    try:
        data = request.get_json()

        # Validace požadovaných polí
        required_fields = ['name', 'roast_date', 'weight', 'price']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Field {field} is required'}), 400

        # Vytvoření nové kávy
        new_coffee = Coffee(
            name=data['name'],
            origin=data.get('origin'),
            roast_date=data['roast_date'],
            process_method=data.get('process_method'),
            weight=data['weight'],
            price=data['price'],
            photo=data.get('photo'),  # Musí být base64, pokud je použito
            seller=data.get('seller'),
            url=data.get('url')
        )

        # Přidání do databáze
        db.session.add(new_coffee)
        db.session.commit()

        return jsonify({'message': 'Coffee added successfully', 'coffee': new_coffee.to_dict()}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@api_bp.route('/api/grinders', methods=['GET'])
def get_grinders():
    grinders = Grinder.query.all()
    return jsonify([grinder.to_dict() for grinder in grinders])

@api_bp.route('/api/grinders', methods=['POST'])
def add_grinder():
    try:
        data = request.get_json()

        # Validace požadovaných polí
        required_fields = ['model']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Field {field} is required'}), 400

        # Vytvoření nové kávy
        new_grinder = Grinder(
            model=data.get('model'),
            grinder_type=data.get('grinder_type')
        )

        # Přidání do databáze
        db.session.add(new_grinder)
        db.session.commit()

        return jsonify({'message': 'Grinder added successfully', 'grinder': new_grinder.to_dict()}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@api_bp.route('/api/brew_types', methods=['GET'])
def get_brew_types():
    brew_types = Brew_type.query.all()
    return jsonify([brew_type.to_dict() for brew_type in brew_types])

@api_bp.route('/api/brew_types', methods=['POST'])
def add_brew_type():
    try:
        data = request.get_json()

        # Validace požadovaných polí
        required_fields = ['name']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Field {field} is required'}), 400

        # Vytvoření nové kávy
        new_brew_type = Brew_type(
            name=data.get('name'),
        )

        # Přidání do databáze
        db.session.add(new_brew_type)
        db.session.commit()

        return jsonify({'message': 'Brew type added successfully', 'brew_type': new_brew_type.to_dict()}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@api_bp.route('/api/brews', methods=['GET'])
def get_brews():
    brews = Brew.query.all()
    return jsonify([brew.to_dict() for brew in brews])

# Endpoint pro přidání nového záznamu Brew
@api_bp.route('/api/brews', methods=['POST'])
def add_brew():
    try:
        data = request.get_json()

        # Validace požadovaných polí
        required_fields = ['grind_setting', 'coffee_weight', 'output_weight', 'brew_type_pk', 'coffee_pk', 'grinder_pk']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Field {field} is required'}), 400

        # Vytvoření nového Brew
        new_brew = Brew(
            grind_setting=data['grind_setting'],
            coffee_weight=data['coffee_weight'],
            output_weight=data['output_weight'],
            extraction_time=data.get('extraction_time'),
            note=data.get('note'),
            brew_type_pk=data['brew_type_pk'],
            coffee_pk=data['coffee_pk'],
            grinder_pk=data['grinder_pk']
        )

        # Přidání do databáze
        db.session.add(new_brew)
        db.session.commit()

        return jsonify({'message': 'Brew added successfully', 'brew': new_brew.to_dict()}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500