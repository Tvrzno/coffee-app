from models import db
from sqlalchemy.orm import relationship

class Grinder(db.Model):
    __tablename__ = 'grinder'
    grinder_pk = db.Column(db.Integer, primary_key=True)
    model = db.Column(db.String(100), nullable=False)
    grinder_type = db.Column(db.String(100))

    brews = relationship("Brew", back_populates="grinder")

    def to_dict(self):
        return{
            'grinder_pk': self.grinder_pk,
            'model': self.model,
            'grinder_type': self.grinder_type
        }