from sqlalchemy import Column, String, Float, DateTime, Enum
from sqlalchemy.sql import func
import enum

from app.db.base_class import Base


class PaymentStatus(str, enum.Enum):
    pending = "pending"
    partial = "partial"
    paid = "paid"


class SponsorTier(str, enum.Enum):
    platinum = "platinum"
    gold = "gold"
    silver = "silver"
    bronze = "bronze"


class Sponsor(Base):
    id = Column(String, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False)
    tier = Column(Enum(SponsorTier), index=True, nullable=False)
    logo = Column(String, nullable=True)
    website = Column(String, nullable=True)
    description = Column(String, nullable=True)
    
    # Contact information
    contact_name = Column(String, nullable=True)
    contact_email = Column(String, nullable=True)
    contact_phone = Column(String, nullable=True)
    
    # Payment tracking
    amount_paid = Column(Float, default=0.0)
    payment_status = Column(Enum(PaymentStatus), default=PaymentStatus.pending)
    
    # Timestamps
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now()) 