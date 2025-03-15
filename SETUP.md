# Kshatriya Event Setup Guide

This guide provides instructions for setting up and troubleshooting the Kshatriya Event full-stack application.

## Quick Start

```bash
# Create environment file
cp .env.example .env

# Start the application
docker compose up -d

# Check status
docker compose ps

# View logs
docker compose logs -f
```

The application will be available at:
- Frontend: http://localhost:3010
- API Documentation: http://localhost:8010/docs (only available from localhost)

## Architecture

This application consists of three main services:

1. **Frontend** (Next.js)
   - User-facing application
   - Admin interface
   - Public website

2. **Backend** (FastAPI)
   - RESTful API
   - Admin authentication
   - Database interactions

3. **Database** (PostgreSQL)
   - Persistent data storage

## Common Issues & Troubleshooting

### Database Connection Issues

If you see errors like:
```
backend-1  | Connection failed: could not connect to server: Connection refused
```

**Solution**: The database might still be initializing. Check the database logs:
```bash
docker compose logs db
```

### API Connectivity Issues

If the frontend can't connect to the API:

1. Ensure the backend is running:
   ```bash
   docker compose ps backend
   ```

2. Check backend logs:
   ```bash
   docker compose logs backend
   ```

3. Verify the Next.js API proxy in `frontend/next.config.js`

### Dependency Issues

If you see errors about missing dependencies:

1. Rebuild the container:
   ```bash
   docker compose build --no-cache backend
   ```

2. Check if you need to add dependencies to `requirements.txt`

### Clearing Docker State

If you need a clean start:

```bash
# Stop everything
docker compose down

# Remove volumes (CAUTION: This deletes all data)
docker compose down -v

# Rebuild everything
docker compose up -d --build
```

## Production Deployment

For production, use the production Docker Compose file:

```bash
docker compose -f docker-compose.prod.yml up -d
```

Production settings include:
- Resource limits
- Health checks
- Automatic restarts
- Reduced exposed ports

## Debugging Tools

Access Docker container shells:

```bash
# Frontend
docker compose exec frontend /bin/sh

# Backend
docker compose exec backend /bin/bash

# Database
docker compose exec db psql -U postgres -d kshatriya
```

## Reset Admin User

If you need to reset the admin user:

```bash
docker compose exec backend python -c "
from app.core.security import get_password_hash
from app.db.session import SessionLocal
from app.models.user import User

db = SessionLocal()
user = db.query(User).filter(User.username == 'admin').first()
if user:
    user.hashed_password = get_password_hash('kshatriya2025')
    db.add(user)
    db.commit()
    print('Admin password reset to kshatriya2025')
else:
    print('Admin user not found')
db.close()
"
```

## Security Notes

- The backend and database are not directly exposed to the internet (localhost only)
- All API requests are proxied through the frontend
- Database credentials should be changed for production 