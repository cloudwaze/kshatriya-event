from sqlalchemy import Column, Integer, String, Numeric
from sqlalchemy.orm import relationship

from app.db.base_class import Base

class Event(Base):
    event_id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(255), nullable=False)
    price = Column(Numeric(10, 2), nullable=False)
    registrations = relationship("Registration", back_populates="event") 