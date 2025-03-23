from typing import Optional, Dict, Any
from pydantic import BaseModel
from datetime import datetime
from uuid import UUID
from .attendee import AttendeeCreate, AttendeeResponse
from .event import EventResponse


class RegistrationBase(BaseModel):
    """Base Registration schema with common attributes"""
    event_id: int


class RegistrationCreate(RegistrationBase):
    """Registration schema for creation requests - combines event selection with attendee info"""
    # Attendee information embedded in registration request
    first_name: str
    last_name: str
    email: str
    phone: Optional[str] = None


class RegistrationInDB(RegistrationBase):
    """Registration schema for database representation"""
    registration_id: int
    user_id: int
    registration_date: datetime
    qr_code_uuid: UUID
    ticket_number: str
    status: str
    
    class Config:
        from_attributes = True  # Allow ORM model -> Pydantic model conversion


class RegistrationWithRelations(RegistrationInDB):
    """Registration schema with expanded relationships for internal use"""
    attendee: AttendeeResponse
    event: EventResponse


class RegistrationResponse(BaseModel):
    """Registration schema for API responses - includes all relevant information"""
    registration_id: int
    ticket_number: str
    event_id: int
    event_name: str
    attendee_name: str
    registration_date: datetime
    status: str
    qr_code: Optional[str] = None  # Base64 encoded QR code image
    
    class Config:
        from_attributes = True  # Allow ORM model -> Pydantic model conversion 