'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Event, getEvents } from '../../lib/api';
import { Card, CardHeader, CardContent, CardFooter } from '../../components/ui/Card';
import { LinkButton } from '../../components/ui/Button';
import { LoadingCard } from '../../components/ui/LoadingSpinner';
import { formatErrorMessage, formatPrice } from '../../lib/utils';
import { ErrorMessage } from '../../components/ui/ErrorMessage';
import { PageLayout } from '../../components/ui/PageLayout';

// Default event details for missing fields
const DEFAULT_DATE = 'March 15, 2025';
const DEFAULT_TIME = '10:00 AM - 2:00 PM';
const DEFAULT_LOCATION = 'Main Hall';
const DEFAULT_CAPACITY = 200;

export default function RegisterPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch events data when component mounts
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        const data = await getEvents();
        setEvents(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch events:', err);
        setError(formatErrorMessage(err));
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Show loading state
  if (isLoading) {
    return <LoadingCard />;
  }

  // Show error state
  if (error) {
    return (
      <PageLayout>
        <ErrorMessage 
          message={error} 
          actionLabel="Try Again" 
          onAction={() => window.location.reload()} 
        />
      </PageLayout>
    );
  }

  // Show events list
  return (
    <PageLayout maxWidth="lg">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-[#732424]">Upcoming Events</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.event_id} hover>
              <CardHeader>
                <h2 className="text-2xl font-bold text-[#732424]">{event.name}</h2>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p>📅 {DEFAULT_DATE}</p>
                <p>⏰ {DEFAULT_TIME}</p>
                <p>📍 {DEFAULT_LOCATION}</p>
                <p>👥 Capacity: {DEFAULT_CAPACITY}</p>
                <p>💰 Price: {formatPrice(event.price)}</p>
              </CardContent>
              <CardFooter>
                <LinkButton
                  href={`/register/${event.event_id}`}
                  className="w-full text-center"
                >
                  Register Now
                </LinkButton>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
} 