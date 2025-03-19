from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.base_class import Base

class Attendee(Base):
    __tablename__ = 'users'  # Explicitly set table name to avoid conflict with admin user table
    user_id = Column(Integer, primary_key=True, autoincrement=True)
    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    email = Column(String(255), nullable=False, unique=True, index=True)
    phone = Column(String(20))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    registrations = relationship("Registration", back_populates="attendee") 