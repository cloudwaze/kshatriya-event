from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.base_class import Base

class Registration(Base):
    __tablename__ = 'registrations'
    registration_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.user_id', ondelete='CASCADE'))
    event_id = Column(Integer, ForeignKey('events.event_id', ondelete='CASCADE'))
    registration_date = Column(DateTime(timezone=True), server_default=func.now())
    qr_code_uuid = Column(UUID, nullable=False, server_default=func.gen_random_uuid(), unique=True)
    ticket_number = Column(String(50), nullable=False, unique=True)
    status = Column(String(20), nullable=False, server_default="registered")
    # Check-in related fields
    check_in_timestamp = Column(DateTime(timezone=True), nullable=True)
    checked_in_by = Column(Integer, ForeignKey('user.id', ondelete='SET NULL'), nullable=True)
    attendee = relationship("Attendee", back_populates="registrations")
    event = relationship("Event", back_populates="registrations") 