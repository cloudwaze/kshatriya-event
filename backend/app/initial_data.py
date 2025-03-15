import logging
from uuid import uuid4

from sqlalchemy.orm import Session

from app.db.session import SessionLocal
from app.core.security import get_password_hash
from app.models.user import User

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def init_db() -> None:
    db = SessionLocal()
    try:
        # Check if we already have users
        user = db.query(User).first()
        if not user:
            logger.info("Creating initial admin user")
            admin_user = User(
                id=str(uuid4()),
                email="admin@kshatriyaevent.com",
                hashed_password=get_password_hash("kshatriya2025"),
                username="admin",
                full_name="Admin User",
                is_superuser=True,
            )
            db.add(admin_user)
            db.commit()
            logger.info("Initial admin user created")
        else:
            logger.info("Admin user already exists")
    finally:
        db.close()


def main() -> None:
    logger.info("Creating initial data")
    init_db()
    logger.info("Initial data created")


if __name__ == "__main__":
    main() 