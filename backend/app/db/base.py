# Import all the models to ensure Alembic can detect them
from app.db.base_class import Base  # noqa
from app.models.sponsor import Sponsor  # noqa
from app.models.user import User  # noqa 