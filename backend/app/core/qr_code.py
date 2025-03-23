import qrcode
import json
import io
import base64
from typing import Dict, Any
from app.core.security import create_registration_token


def create_qr_data(registration_data: Dict[str, Any]) -> str:
    """
    Create QR data for registration using JWT tokens for security.
    
    Args:
        registration_data: Dictionary containing registration details
    
    Returns:
        A URL string containing a JWT token that can be used for check-in.
    """
    # Extract required information for the token
    registration_id = registration_data["registration_id"]
    event_id = registration_data["event_id"]
    
    # Create JWT token for this registration
    token = create_registration_token(registration_id, event_id)
    
    # Use localhost for development
    # In production, this would be replaced with the actual domain
    frontend_url = "http://localhost:3010"
    
    # Create URL with token for check-in
    check_in_url = f"{frontend_url}/admin/check-in?token={token}"
    
    return check_in_url


def create_legacy_qr_data(registration_data: Dict[str, Any]) -> str:
    """
    Create a JSON string with registration data to encode in QR code
    (Legacy method, kept for reference)
    """
    qr_data = {
        "registration_id": str(registration_data["registration_id"]),
        "ticket_number": registration_data["ticket_number"],
        "event_id": str(registration_data["event_id"]),
        "event_name": registration_data["event_name"],
        "attendee_name": registration_data["attendee_name"],
        "registration_date": registration_data["registration_date"].isoformat()
    }
    return json.dumps(qr_data)


def generate_qr_code(data: str) -> bytes:
    """
    Generate a QR code image from data string
    Returns the QR code as bytes
    """
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)
    
    # Create an image from the QR Code
    img = qr.make_image(fill_color="black", back_color="white")
    
    # Convert the image to bytes
    img_byte_arr = io.BytesIO()
    img.save(img_byte_arr, format='PNG')
    img_byte_arr.seek(0)
    return img_byte_arr.getvalue()


def get_qr_code_as_base64(data: str) -> str:
    """
    Generate a QR code and return it as a base64 encoded string
    that can be directly embedded in HTML
    """
    qr_bytes = generate_qr_code(data)
    base64_encoded = base64.b64encode(qr_bytes).decode('utf-8')
    return f"data:image/png;base64,{base64_encoded}" 