from fastapi import APIRouter

from app.api.api_v1.endpoints import sponsors, auth

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["authentication"])
api_router.include_router(sponsors.router, prefix="/sponsors", tags=["sponsors"]) 