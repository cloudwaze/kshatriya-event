# Kshatriya Event Website 2025 - Full Stack

A modern, full-stack event website built with Next.js frontend and FastAPI backend for the Kshatriya Event 2025. The application combines a responsive frontend with a powerful Python backend and PostgreSQL database.

## Architecture Overview

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Next.js        │────▶│  FastAPI        │────▶│  PostgreSQL     │
│  Frontend       │◀────│  Backend        │◀────│  Database       │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

## Features

- **Modern, Responsive Frontend**: Built with Next.js and Tailwind CSS
- **RESTful API Backend**: FastAPI provides efficient and type-safe endpoints
- **Database Integration**: PostgreSQL for reliable data persistence
- **Docker Containerization**: Easy deployment with Docker Compose
- **Event Registration System**: Allow attendees to register for the event
- **Multi-Event Registration**: Register for multiple events with a single form and QR code
- **Sponsor Management**: Full CRUD operations for managing event sponsors
- **Admin Dashboard**: Secure admin panel for site management
- **Dynamic Content**: Rotating sponsor carousel, interactive schedules
- **SEO Optimized**: Frontend built with best practices for search engine visibility

## Project Structure

```
kshatriya-event/                # Root project directory
├── frontend/                   # Next.js frontend
│   ├── public/                 # Static files
│   ├── src/                    # Source code
│   │   ├── app/                # Next.js app directory
│   │   ├── components/         # React components
│   │   └── lib/                # Frontend utilities (client-side)
│   ├── package.json            # Frontend dependencies
│   └── Dockerfile              # Frontend Docker configuration
├── backend/                    # FastAPI backend
│   ├── app/                    # Application code
│   │   ├── api/                # API routes
│   │   ├── core/               # Core functionality
│   │   ├── db/                 # Database models and migrations
│   │   └── services/           # Business logic
│   ├── tests/                  # Backend tests
│   ├── requirements.txt        # Python dependencies
│   └── Dockerfile              # Backend Docker configuration
├── docker-compose.yml          # Docker Compose configuration
├── .env.example                # Example environment variables
└── README.md                   # Project documentation
```

## Getting Started

### Prerequisites

- Docker and Docker Compose
- Git

### Running with Docker

1. Clone the repository:
```bash
git clone https://github.com/yourusername/kshatriya-event.git
cd kshatriya-event
```

2. Create a .env file based on .env.example:
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. Start the application with Docker Compose:
```bash
docker-compose up
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs

### Development Setup (Without Docker)

#### Frontend

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`.

#### Backend

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Start the FastAPI server:
```bash
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`.

## API Documentation

FastAPI automatically generates interactive API documentation:

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Database

The application uses PostgreSQL for data storage:

- **Development**: The Docker setup includes a PostgreSQL container
- **Production**: Configure connection to your production database

Database migrations are managed with Alembic.

## Authentication

The application uses JWT-based authentication for the admin panel:

- Admin credentials are stored securely in the database
- Tokens are used for API authorization

## Deployment

### Docker Deployment

The application includes Docker Compose configuration for easy deployment:

```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Manual Deployment

#### Frontend

Build the Next.js frontend:

```bash
cd frontend
npm run build
```

#### Backend

Deploy the FastAPI application with a production ASGI server like Uvicorn or Gunicorn:

```bash
cd backend
gunicorn -k uvicorn.workers.UvicornWorker app.main:app
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
