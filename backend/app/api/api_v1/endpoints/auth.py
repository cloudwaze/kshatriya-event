from datetime import timedelta
from typing import Any, Dict

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from pydantic import BaseModel

from app import schemas
from app.core.config import settings
from app.core.security import create_access_token, verify_password, verify_registration_token
from app.db.session import get_db
from app.models.user import User

router = APIRouter()


@router.post("/login", response_model=schemas.Token)
def login_access_token(
    db: Session = Depends(get_db),
    form_data: OAuth2PasswordRequestForm = Depends(),
) -> Any:
    """
    OAuth2 compatible token login, get an access token for future requests.
    """
    user = db.query(User).filter(User.username == form_data.username).first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    return {
        "access_token": create_access_token(
            subject=user.id, expires_delta=access_token_expires
        ),
        "token_type": "bearer",
    } 


class TokenRequest(BaseModel):
    token: str


class TokenVerificationResponse(BaseModel):
    valid: bool
    registration_id: int = None
    event_id: int = None


@router.post("/verify-registration-token", response_model=TokenVerificationResponse)
def verify_token(token_request: TokenRequest) -> Any:
    """
    Verify a registration token from a QR code.
    Returns validation status and extracted registration/event IDs if valid.
    """
    try:
        # Verify token and get payload
        payload = verify_registration_token(token_request.token)
        
        # Return success with registration and event IDs
        return {
            "valid": True,
            "registration_id": payload.get("reg_id"),
            "event_id": payload.get("event_id")
        }
    except ValueError:
        # Return invalid response for any validation errors
        return {
            "valid": False,
            "registration_id": None,
            "event_id": None
        } 