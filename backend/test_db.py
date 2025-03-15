import psycopg2
from app.core.config import settings

def test_db_connection():
    try:
        conn = psycopg2.connect(
            host=settings.POSTGRES_SERVER,
            database=settings.POSTGRES_DB,
            user=settings.POSTGRES_USER,
            password=settings.POSTGRES_PASSWORD
        )
        print("Database connection successful!")
        conn.close()
        return True
    except Exception as e:
        print(f"Database connection failed: {e}")
        return False

if __name__ == "__main__":
    test_db_connection() 