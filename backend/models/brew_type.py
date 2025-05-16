from models import db
from sqlalchemy.orm import relationship

class Brew_type(db.Model):
    __tablename__ = 'brew_type'
    brew_type_pk = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

        # Back-reference to Brew
    brews = relationship("Brew", back_populates="brew_type")

    def to_dict(self):
        return{
            'brew_type_pk': self.brew_type_pk,
            'name': self.name
        }