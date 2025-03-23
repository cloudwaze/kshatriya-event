from datetime import datetime, timedelta
from typing import Any, Optional, Union

from jose import jwt
from passlib.context import CryptContext

from app.core.config import settings

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def create_access_token(
    subject: Union[str, Any], expires_delta: Optional[timedelta] = None
) -> str:
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(
            minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES
        )
    to_encode = {"exp": expire, "sub": str(subject)}
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm="HS256")
    return encoded_jwt


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)


def create_registration_token(registration_id: int, event_id: int) -> str:
    """
    Create a JWT token for registration QR codes.
    
    Args:
        registration_id: The ID of the registration.
        event_id: The ID of the event.
        
    Returns:
        A JWT token string.
    """
    expire = datetime.utcnow() + timedelta(days=365)  # Long expiration for registration tokens
    to_encode = {
        "exp": expire,
        "reg_id": registration_id,
        "event_id": event_id,
        "token_type": "registration"
    }
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm="HS256")
    return encoded_jwt


def verify_registration_token(token: str) -> dict:
    """
    Verify a registration JWT token.
    
    Args:
        token: The JWT token string.
        
    Returns:
        The decoded token payload.
    """
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])
        if payload.get("token_type") != "registration":
            raise ValueError("Invalid token type")
        return payload
    except jwt.JWTError:
        raise ValueError("Invalid token") 