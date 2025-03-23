from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy.orm import Session
from datetime import datetime

from app.db.session import get_db
from app.models.registration import Registration
from app.models.event import Event
from app.models.attendee import Attendee
from app.schemas.registration import RegistrationCreate, RegistrationResponse
from app.core.qr_code import create_qr_data, get_qr_code_as_base64

router = APIRouter()


@router.post("/", response_model=RegistrationResponse)
def create_registration(
    *,
    db: Session = Depends(get_db),
    registration_in: RegistrationCreate
) -> Any:
    """
    Create new registration for an event.
    """
    # Check if event exists
    event = db.query(Event).filter(Event.event_id == registration_in.event_id).first()
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")
    
    # Check if attendee exists or create new one
    attendee = db.query(Attendee).filter(Attendee.email == registration_in.email).first()
    if not attendee:
        attendee = Attendee(
            first_name=registration_in.first_name,
            last_name=registration_in.last_name,
            email=registration_in.email,
            phone=registration_in.phone
        )
        db.add(attendee)
        db.flush()  # Flush to get the attendee ID
    
    # Check if already registered
    existing_registration = db.query(Registration).filter(
        Registration.user_id == attendee.user_id,
        Registration.event_id == event.event_id
    ).first()
    
    if existing_registration:
        raise HTTPException(status_code=400, detail="Already registered for this event")
    
    # Create ticket number (format: EVENT_ID-TIMESTAMP-USER_ID)
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    ticket_number = f"KSH{event.event_id}-{timestamp}-{attendee.user_id}"
    
    # Create registration
    registration = Registration(
        user_id=attendee.user_id,
        event_id=event.event_id,
        ticket_number=ticket_number,
        status="registered"
    )
    
    db.add(registration)
    db.commit()
    db.refresh(registration)
    
    # Create registration data for QR code
    registration_data = {
        "registration_id": registration.registration_id,
        "ticket_number": registration.ticket_number,
        "event_id": event.event_id,
        "event_name": event.name,
        "attendee_name": f"{attendee.first_name} {attendee.last_name}",
        "registration_date": registration.registration_date
    }
    
    # Generate QR code data string
    qr_data = create_qr_data(registration_data)
    
    # Generate QR code as base64 and include in response
    qr_code_base64 = get_qr_code_as_base64(qr_data)
    
    # Create response with registration details and QR code
    response = {
        "registration_id": registration.registration_id,
        "ticket_number": registration.ticket_number,
        "event_id": event.event_id,
        "event_name": event.name,
        "attendee_name": f"{attendee.first_name} {attendee.last_name}",
        "registration_date": registration.registration_date,
        "status": registration.status,
        "qr_code": qr_code_base64
    }
    
    return response


@router.get("/{registration_id}", response_model=RegistrationResponse)
def get_registration(
    *,
    db: Session = Depends(get_db),
    registration_id: int
) -> Any:
    """
    Get registration details by ID.
    """
    registration = db.query(Registration).filter(Registration.registration_id == registration_id).first()
    if not registration:
        raise HTTPException(status_code=404, detail="Registration not found")
    
    attendee = registration.attendee
    event = registration.event
    
    # Create registration data for QR code
    registration_data = {
        "registration_id": registration.registration_id,
        "ticket_number": registration.ticket_number,
        "event_id": event.event_id,
        "event_name": event.name,
        "attendee_name": f"{attendee.first_name} {attendee.last_name}",
        "registration_date": registration.registration_date
    }
    
    # Generate QR code
    qr_data = create_qr_data(registration_data)
    qr_code_base64 = get_qr_code_as_base64(qr_data)
    
    # Create response
    response = {
        "registration_id": registration.registration_id,
        "ticket_number": registration.ticket_number,
        "event_id": event.event_id,
        "event_name": event.name,
        "attendee_name": f"{attendee.first_name} {attendee.last_name}",
        "registration_date": registration.registration_date,
        "status": registration.status,
        "qr_code": qr_code_base64
    }
    
    return response 