from fastapi import APIRouter

from app.api.api_v1.endpoints import sponsors, auth, events, registrations

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["authentication"])
api_router.include_router(sponsors.router, prefix="/sponsors", tags=["sponsors"])
api_router.include_router(events.router, prefix="/events", tags=["events"])
api_router.include_router(registrations.router, prefix="/registrations", tags=["registrations"]) 