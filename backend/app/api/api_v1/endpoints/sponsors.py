from typing import Any, List
from uuid import uuid4

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import schemas
from app.db.session import get_db
from app.models.sponsor import Sponsor, SponsorTier, PaymentStatus

router = APIRouter()


@router.get("/", response_model=List[schemas.Sponsor])
def read_sponsors(
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
) -> Any:
    """
    Retrieve sponsors.
    """
    sponsors = db.query(Sponsor).offset(skip).limit(limit).all()
    return sponsors


@router.post("/", response_model=schemas.Sponsor)
def create_sponsor(
    *,
    db: Session = Depends(get_db),
    sponsor_in: schemas.SponsorCreate,
) -> Any:
    """
    Create new sponsor.
    """
    sponsor = Sponsor(
        id=str(uuid4()),
        name=sponsor_in.name,
        tier=sponsor_in.tier,
        logo=sponsor_in.logo,
        website=sponsor_in.website,
        description=sponsor_in.description,
        contact_name=sponsor_in.contact_name,
        contact_email=sponsor_in.contact_email,
        contact_phone=sponsor_in.contact_phone,
        amount_paid=sponsor_in.amount_paid,
        payment_status=sponsor_in.payment_status,
    )
    db.add(sponsor)
    db.commit()
    db.refresh(sponsor)
    return sponsor


@router.get("/{sponsor_id}", response_model=schemas.Sponsor)
def read_sponsor(
    *,
    db: Session = Depends(get_db),
    sponsor_id: str,
) -> Any:
    """
    Get sponsor by ID.
    """
    sponsor = db.query(Sponsor).filter(Sponsor.id == sponsor_id).first()
    if not sponsor:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Sponsor not found",
        )
    return sponsor


@router.patch("/{sponsor_id}", response_model=schemas.Sponsor)
def update_sponsor(
    *,
    db: Session = Depends(get_db),
    sponsor_id: str,
    sponsor_in: schemas.SponsorUpdate,
) -> Any:
    """
    Update a sponsor.
    """
    sponsor = db.query(Sponsor).filter(Sponsor.id == sponsor_id).first()
    if not sponsor:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Sponsor not found",
        )
    
    update_data = sponsor_in.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(sponsor, field, value)
    
    db.add(sponsor)
    db.commit()
    db.refresh(sponsor)
    return sponsor


@router.delete("/{sponsor_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_sponsor(
    *,
    db: Session = Depends(get_db),
    sponsor_id: str,
) -> None:
    """
    Delete a sponsor.
    """
    sponsor = db.query(Sponsor).filter(Sponsor.id == sponsor_id).first()
    if not sponsor:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Sponsor not found",
        )
    
    db.delete(sponsor)
    db.commit() 