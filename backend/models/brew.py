from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
from models import db

class Brew(db.Model):
    __tablename__ = 'brew'

    brew_pk = db.Column(db.Integer, primary_key=True, autoincrement=True)
    grind_setting = db.Column(db.Integer, nullable=False)
    coffee_weight = db.Column(db.Float, nullable=False)
    output_weight = db.Column(db.Float, nullable=False)
    extraction_time = db.Column(db.Time, nullable=True)
    note = db.Column(db.String(100), nullable=True)
    creation_timestamp = db.Column(db.DateTime, nullable=False)

    # Cizí klíče
    brew_type_pk = db.Column(db.Integer, ForeignKey('brew_type.brew_type_pk'), nullable=False)
    coffee_pk = db.Column(db.Integer, ForeignKey('coffee.coffee_pk'), nullable=False)
    grinder_pk = db.Column(db.Integer, ForeignKey('grinder.grinder_pk'), nullable=False)

    # Relace
    brew_type = relationship("Brew_type", back_populates="brews")
    coffee = relationship("Coffee", back_populates="brews")
    grinder = relationship("Grinder", back_populates="brews")

    def to_dict(self):
        return {
            "brew_pk": self.brew_pk,
            "grind_setting": self.grind_setting,
            "coffee_weight": self.coffee_weight,
            "output_weight": self.output_weight,
            "extraction_time": self.extraction_time.strftime('%H:%M:%S') if self.extraction_time else None,
            "note": self.note,
            "brew_type_pk": self.brew_type_pk,
            "coffee_pk": self.coffee_pk,
            "grinder_pk": self.grinder_pk,
            "datetime" : self.creation_timestamp
        }
