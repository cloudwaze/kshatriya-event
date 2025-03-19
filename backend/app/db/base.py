# Import all the models to ensure Alembic can detect them
from app.db.base_class import Base  # noqa
from app.models.sponsor import Sponsor  # noqa
from app.models.user import User as AdminUser  # noqa
from app.models.event import Event  # noqa
from app.models.registration import Registration  # noqa
from app.models.attendee import Attendee  # noqa 