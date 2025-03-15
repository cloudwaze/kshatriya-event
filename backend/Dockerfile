FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements file
COPY requirements.txt .

# Install Python dependencies with explicit upgrade of pip
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Create necessary directories
RUN mkdir -p /app/alembic/versions && \
    chmod 777 /app/alembic/versions

# Copy application code
COPY . .

# Make scripts executable
RUN chmod +x /app/prestart.sh

# Set environment variables
ENV PYTHONPATH=/app
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Expose the port
EXPOSE 8000

# Command to run the application with prestart script
CMD ["/bin/bash", "-c", "/app/prestart.sh && uvicorn app.main:app --host 0.0.0.0 --port 8000"] 