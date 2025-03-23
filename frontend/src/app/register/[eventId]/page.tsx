'use client';

import { useState, useCallback, useEffect, FormEvent, ChangeEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Event, getEvents, createRegistration, RegistrationRequest } from '../../../lib/api';
import { Card, CardHeader, CardContent, CardFooter } from '../../../components/ui/Card';
import { Button, LinkButton } from '../../../components/ui/Button';
import { LoadingState } from '../../../components/ui/LoadingSpinner';
import { formatErrorMessage, formatPrice, isValidEmail } from '../../../lib/utils';
import { InputField } from '../../../components/ui/InputField';
import { ErrorMessage } from '../../../components/ui/ErrorMessage';
import { PageLayout } from '../../../components/ui/PageLayout';

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

interface ValidationErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
}

export default function EventRegistrationPage() {
  const router = useRouter();
  const params = useParams();
  const eventId = Number(params.eventId);

  const [event, setEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  });
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Load event details
  useEffect(() => {
    const fetchEventDetails = async () => {
      if (!eventId) return;
      
      try {
        setIsLoading(true);
        const events = await getEvents();
        const foundEvent = events.find(e => e.event_id === eventId);
        
        if (foundEvent) {
          setEvent(foundEvent);
          setError(null);
        } else {
          setError('Event not found');
        }
      } catch (err) {
        console.error('Error fetching event:', err);
        setError(formatErrorMessage(err));
      } finally {
        setIsLoading(false);
      }
    };

    fetchEventDetails();
  }, [eventId]);

  // Handle form input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear validation error when user types
    if (validationErrors[name as keyof ValidationErrors]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Validate form data
  const validateForm = (): boolean => {
    const errors: ValidationErrors = {};
    
    if (!formData.first_name.trim()) {
      errors.first_name = 'First name is required';
    }
    
    if (!formData.last_name.trim()) {
      errors.last_name = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      const registrationData: RegistrationRequest = {
        event_id: eventId,
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone,
      };
      
      const response = await createRegistration(registrationData);
      
      // Redirect to confirmation page with registration ID
      router.push(`/register/confirmation/${response.registration_id}`);
    } catch (err) {
      console.error('Registration error:', err);
      setError(formatErrorMessage(err));
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <LoadingState />;
  }

  if (error || !event) {
    return (
      <PageLayout>
        <ErrorMessage
          message={error || 'Event not found'}
          actionLabel="Back to Events"
          actionLink="/register"
        />
      </PageLayout>
    );
  }

  return (
    <PageLayout backLink="/register" backLabel="Back to Events">
      <Card>
        <CardHeader>
          <h1 className="text-3xl font-bold text-[#732424]">Register for {event.name}</h1>
        </CardHeader>
        
        <CardContent>
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700"><strong>Event:</strong> {event.name}</p>
            <p className="text-gray-700"><strong>Price:</strong> {formatPrice(event.price)}</p>
            <p className="text-gray-700"><strong>Date:</strong> March 15, 2025</p>
            <p className="text-gray-700"><strong>Time:</strong> 10:00 AM - 2:00 PM</p>
            <p className="text-gray-700"><strong>Location:</strong> Main Hall</p>
          </div>
          
          {error && (
            <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <InputField
              label="First Name"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              error={validationErrors.first_name}
              placeholder="Enter your first name"
              required
            />
            
            <InputField
              label="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              error={validationErrors.last_name}
              placeholder="Enter your last name"
              required
            />
            
            <InputField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={validationErrors.email}
              placeholder="Enter your email address"
              required
            />
            
            <InputField
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              error={validationErrors.phone}
              placeholder="Enter your phone number"
              required
              containerClassName="mb-6"
            />
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
              <p>By registering, you agree to our <a href="/terms" className="text-[#732424] hover:underline">Terms and Conditions</a> and <a href="/privacy" className="text-[#732424] hover:underline">Privacy Policy</a>.</p>
            </div>
            
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
              isLoading={isSubmitting}
            >
              Complete Registration
            </Button>
          </form>
        </CardContent>
      </Card>
    </PageLayout>
  );
} 