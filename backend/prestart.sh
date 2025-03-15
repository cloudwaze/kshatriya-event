#!/bin/bash

echo "Running prestart script..."

# Wait for database to be ready with improved error handling
echo "Waiting for database..."
python -c "
import time
import sys
import psycopg2
import os

host = os.environ.get('POSTGRES_SERVER', 'db')
user = os.environ.get('POSTGRES_USER', 'postgres')
password = os.environ.get('POSTGRES_PASSWORD', 'postgres')
dbname = os.environ.get('POSTGRES_DB', 'kshatriya')

conn_string = f'postgresql://{user}:{password}@{host}/{dbname}'

max_retries = 30
retry_interval = 2

for i in range(max_retries):
    try:
        print(f'Attempt {i+1}/{max_retries} to connect to {host}...')
        conn = psycopg2.connect(conn_string)
        conn.close()
        print('Database connection successful!')
        break
    except psycopg2.OperationalError as e:
        print(f'Connection failed: {e}')
        if i < max_retries - 1:
            print(f'Retrying in {retry_interval} seconds...')
            time.sleep(retry_interval)
        else:
            print('Max retries reached. Could not connect to database.')
            sys.exit(1)
"
echo "Database is ready!"

# Create versions directory if it doesn't exist
mkdir -p /app/alembic/versions

# Check if we have any migrations
if [ -z "$(ls -A /app/alembic/versions)" ]; then
    echo "No migrations found. Creating initial migration..."
    alembic revision --autogenerate -m "Initial tables"
fi

# Run migrations
echo "Running migrations..."
alembic upgrade head

# Create initial data
echo "Creating initial data..."
python -m app.initial_data

echo "Prestart script completed successfully" 