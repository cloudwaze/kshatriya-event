from typing import Optional
from pydantic import BaseModel, EmailStr
from datetime import datetime


class AttendeeBase(BaseModel):
    """Base Attendee schema with common attributes"""
    first_name: str
    last_name: str
    email: EmailStr
    phone: Optional[str] = None


class AttendeeCreate(AttendeeBase):
    """Attendee schema for creation requests"""
    pass


class AttendeeInDB(AttendeeBase):
    """Attendee schema for database representation"""
    user_id: int
    created_at: datetime
    
    class Config:
        from_attributes = True  # Allow ORM model -> Pydantic model conversion


class AttendeeResponse(AttendeeInDB):
    """Attendee schema for API responses"""
    pass 