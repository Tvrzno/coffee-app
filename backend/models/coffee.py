from models import db

# Definice modelu Coffee
class Coffee(db.Model):
    __tablename__ = 'coffee'
    coffee_pk = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    origin = db.Column(db.String(100))
    roast_date = db.Column(db.Date, nullable=False)
    process_method = db.Column(db.String(100))
    weight = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable=False)
    photo = db.Column(db.LargeBinary)
    seller = db.Column(db.String(100))
    url = db.Column(db.String(100))

    def to_dict(self):
        return {
            'coffee_pk': self.coffee_pk,
            'name': self.name,
            'origin': self.origin,
            'roast_date': self.roast_date.strftime('%Y-%m-%d') if self.roast_date else None,
            'process_method': self.process_method,
            'weight': self.weight,
            'price': self.price,
            'seller': self.seller,
            'url': self.url
        }