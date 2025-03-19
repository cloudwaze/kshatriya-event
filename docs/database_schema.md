# Database Schema Documentation

This document outlines the database schema for the Kshatriya Event Management System.

## Tables Overview

### 1. Admin User Table (`user`)
Used for system administrators and staff authentication.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | String | Primary Key, Index | Unique identifier for admin user |
| email | String | Unique, Index, Not Null | Admin's email address |
| hashed_password | String | Not Null | Encrypted password |
| username | String | Unique, Index, Not Null | Admin's username |
| full_name | String | Index | Admin's full name |
| is_active | Boolean | Default: True | Account status |
| is_superuser | Boolean | Default: False | Superuser privileges |

### 2. Event Table (`events`)
Stores information about events.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| event_id | Integer | Primary Key, Auto-increment | Unique identifier for event |
| name | String(255) | Not Null | Event name |
| price | Numeric(10,2) | Not Null | Event price |

### 3. Attendee Table (`users`)
Stores information about event attendees.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| user_id | Integer | Primary Key, Auto-increment | Unique identifier for attendee |
| first_name | String(100) | Not Null | Attendee's first name |
| last_name | String(100) | Not Null | Attendee's last name |
| email | String(255) | Unique, Index, Not Null | Attendee's email address |
| phone | String(20) | | Attendee's phone number |
| created_at | DateTime | Default: Current Timestamp | Record creation timestamp |

### 4. Registration Table (`registrations`)
Manages event registrations.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| registration_id | Integer | Primary Key, Auto-increment | Unique identifier for registration |
| user_id | Integer | Foreign Key, Not Null | Reference to attendee (users.user_id) |
| event_id | Integer | Foreign Key, Not Null | Reference to event (events.event_id) |
| registration_date | DateTime | Default: Current Timestamp | Registration timestamp |
| qr_code_uuid | UUID | Unique, Not Null | QR code identifier |
| ticket_number | String(50) | Unique, Not Null | Unique ticket number |

## Relationships

1. **Event ↔ Registration**
   - One-to-Many relationship
   - One event can have multiple registrations
   - Each registration belongs to one event
   - Cascade delete: If an event is deleted, all its registrations are deleted

2. **Attendee ↔ Registration**
   - One-to-Many relationship
   - One attendee can have multiple registrations
   - Each registration belongs to one attendee
   - Cascade delete: If an attendee is deleted, all their registrations are deleted

## Indexes

1. **Event Table**
   - Primary Key index on `event_id`

2. **Attendee Table**
   - Primary Key index on `user_id`
   - Unique index on `email`
   - Index on `email` for faster lookups

3. **Registration Table**
   - Primary Key index on `registration_id`
   - Foreign Key indexes on `user_id` and `event_id`
   - Unique index on `qr_code_uuid`
   - Unique index on `ticket_number`
   - Unique composite index on `(user_id, event_id)` to prevent duplicate registrations

## Constraints

1. **Unique Constraints**
   - Admin user email must be unique
   - Admin user username must be unique
   - Attendee email must be unique
   - Registration QR code UUID must be unique
   - Registration ticket number must be unique
   - One attendee cannot register for the same event multiple times

2. **Foreign Key Constraints**
   - Registration.user_id references users.user_id (CASCADE DELETE)
   - Registration.event_id references events.event_id (CASCADE DELETE)

3. **Not Null Constraints**
   - All primary keys
   - Event name and price
   - Attendee first name, last name, and email
   - Registration user_id, event_id, qr_code_uuid, and ticket_number

## Usage Notes

1. **Admin User Management**
   - Used for system authentication and authorization
   - Separate from attendee users
   - Managed through admin interface

2. **Event Management**
   - Events can be created, updated, and deleted
   - Price is stored with 2 decimal places
   - Events can have multiple registrations

3. **Attendee Management**
   - Attendees can register for multiple events
   - Email addresses must be unique
   - Phone numbers are optional

4. **Registration Process**
   - Each registration generates a unique QR code UUID
   - Ticket numbers are unique across all events
   - Registration date is automatically set
   - Prevents duplicate registrations for same event/attendee

## Database Migration

To apply the latest database changes:

```bash
# Pull latest changes
git pull origin main

# Apply migrations
docker compose exec backend alembic upgrade head

# Restart backend service
docker compose restart backend
```

## Verification

To verify the database structure:

```bash
# Connect to database
docker compose exec db psql -U postgres -d kshatriya

# List all tables
\dt

# Describe specific table
\d table_name
``` 