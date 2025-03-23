from typing import Optional
from pydantic import BaseModel
from decimal import Decimal


class EventBase(BaseModel):
    """Base Event schema with common attributes"""
    name: str
    price: Decimal


class EventInDB(EventBase):
    """Event schema for database representation"""
    event_id: int

    class Config:
        from_attributes = True  # Allow ORM model -> Pydantic model conversion


class EventResponse(EventInDB):
    """Event schema for API responses"""
    pass 