from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from app.db.base import Base
from app.db.session import engine

from app.api.api_v1.api import api_router
from app.core.config import settings

# Create tables at startup (development mode)
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Kshatriya Event API",
    description="Backend API for Kshatriya Event website",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# Determine allowed origins
frontend_url = os.getenv("FRONTEND_URL", "http://frontend:3000")
allowed_origins = [frontend_url]
if "BACKEND_CORS_ORIGINS" in os.environ:
    origins_raw = os.environ.get("BACKEND_CORS_ORIGINS", "")
    allowed_origins.extend(origins_raw.split(","))

# Add localhost origins for development
allowed_origins.extend([
    "http://localhost:3000",
    "http://localhost:3010",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3010",
])

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api/v1")


@app.get("/")
async def root():
    return {
        "message": "Welcome to Kshatriya Event API",
        "documentation": "/docs",
        "version": "1.0.0",
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy"} 