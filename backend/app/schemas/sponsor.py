from datetime import datetime
from typing import Optional
from enum import Enum

from pydantic import BaseModel, EmailStr, HttpUrl


class SponsorTier(str, Enum):
    platinum = "platinum"
    gold = "gold"
    silver = "silver"
    bronze = "bronze"


class PaymentStatus(str, Enum):
    pending = "pending"
    partial = "partial"
    paid = "paid"


# Shared properties
class SponsorBase(BaseModel):
    name: Optional[str] = None
    tier: Optional[SponsorTier] = None
    logo: Optional[str] = None
    website: Optional[str] = None
    description: Optional[str] = None
    contact_name: Optional[str] = None
    contact_email: Optional[EmailStr] = None
    contact_phone: Optional[str] = None
    amount_paid: Optional[float] = 0.0
    payment_status: Optional[PaymentStatus] = PaymentStatus.pending


# Properties to receive on sponsor creation
class SponsorCreate(SponsorBase):
    name: str
    tier: SponsorTier


# Properties to receive on sponsor update
class SponsorUpdate(SponsorBase):
    pass


# Properties shared by models stored in DB
class SponsorInDBBase(SponsorBase):
    id: str
    name: str
    tier: SponsorTier
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        orm_mode = True


# Properties to return to client
class Sponsor(SponsorInDBBase):
    pass


# Properties stored in DB
class SponsorInDB(SponsorInDBBase):
    pass 