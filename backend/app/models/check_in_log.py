from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Text
from sqlalchemy.sql import func

from app.db.base_class import Base

class CheckInLog(Base):
    __tablename__ = 'check_in_logs'
    
    log_id = Column(Integer, primary_key=True, autoincrement=True)
    registration_id = Column(Integer, ForeignKey('registrations.registration_id', ondelete='CASCADE'), nullable=False)
    previous_status = Column(String(20), nullable=False)
    new_status = Column(String(20), nullable=False)
    timestamp = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    admin_user_id = Column(Integer, ForeignKey('user.id', ondelete='SET NULL'), nullable=True)
    ip_address = Column(String(50), nullable=True)
    device_info = Column(Text, nullable=True)
    notes = Column(Text, nullable=True) 