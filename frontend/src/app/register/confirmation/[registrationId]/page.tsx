'use client';

import { useState, useEffect, MouseEvent } from 'react';
import { useParams } from 'next/navigation';
import { getRegistration, Registration } from '../../../../lib/api';
import { Card, CardHeader, CardContent, CardFooter } from '../../../../components/ui/Card';
import { Button, LinkButton } from '../../../../components/ui/Button';
import { LoadingState } from '../../../../components/ui/LoadingSpinner';
import { formatDate, formatErrorMessage } from '../../../../lib/utils';
import { ErrorMessage } from '../../../../components/ui/ErrorMessage';
import { PageLayout } from '../../../../components/ui/PageLayout';

export default function ConfirmationPage() {
  const params = useParams();
  const registrationId = Number(params.registrationId);

  const [registration, setRegistration] = useState<Registration | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRegistrationDetails = async () => {
      try {
        setIsLoading(true);
        const data = await getRegistration(registrationId);
        console.log('Registration data:', data);
        console.log('QR code data length:', data.qr_code ? data.qr_code.length : 'No QR code data');
        console.log('QR code data sample:', data.qr_code ? data.qr_code.substring(0, 50) + '...' : 'No QR code data');
        console.log('QR code starts with "data:":', data.qr_code ? data.qr_code.startsWith('data:') : 'No QR code data');
        setRegistration(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch registration details:', err);
        setError(formatErrorMessage(err));
      } finally {
        setIsLoading(false);
      }
    };

    if (registrationId) {
      fetchRegistrationDetails();
    }
  }, [registrationId]);

  const downloadQRCode = (e: MouseEvent<HTMLButtonElement>) => {
    if (!registration) return;
    
    // If QR code is not available, generate one using the external service
    if (!registration.qr_code) {
      const qrData = JSON.stringify({
        ticket: registration.ticket_number,
        event: registration.event_name,
        attendee: registration.attendee_name
      });
      
      // Open the QR code in a new tab for download
      window.open(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrData)}`, '_blank');
      return;
    }
    
    // Create a link to download the QR code image
    const link = document.createElement('a');
    // Check if the QR code already starts with the data prefix
    link.href = registration.qr_code.startsWith('data:') ? registration.qr_code : `data:image/png;base64,${registration.qr_code}`;
    link.download = `ticket-${registration.ticket_number}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return <LoadingState />;
  }

  if (error || !registration) {
    return (
      <PageLayout>
        <ErrorMessage
          message={error || 'Registration not found'}
          actionLabel="Back to Events"
          actionLink="/register"
        />
      </PageLayout>
    );
  }

  return (
    <PageLayout backLink="/register" backLabel="Back to Events" maxWidth="md">
      <Card>
        <CardHeader>
          <h1 className="text-3xl font-bold text-center text-[#732424]">Registration Confirmed!</h1>
        </CardHeader>
        
        {/* QR Code section */}
        <CardContent>
          <div className="mb-8 flex flex-col items-center">
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 inline-block">
              {registration.qr_code ? (
                <img
                  src={registration.qr_code.startsWith('data:') ? registration.qr_code : `data:image/png;base64,${registration.qr_code}`}
                  alt="QR Code"
                  width={200}
                  height={200}
                  className="mx-auto"
                  onError={(e) => {
                    console.error('QR Code image failed to load');
                    // Fallback to a simple QR code from external source
                    e.currentTarget.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + 
                      encodeURIComponent(JSON.stringify({
                        ticket: registration.ticket_number,
                        event: registration.event_name
                      }));
                  }}
                />
              ) : (
                <div className="border border-gray-300 rounded p-4 text-gray-500 text-center w-[200px] h-[200px] flex items-center justify-center">
                  QR Code not available
                </div>
              )}
            </div>
            
            <div className="mt-4 text-center text-sm text-gray-500">
              {registration.qr_code ? 'QR Code loaded from API' : 'No QR code data available'}
            </div>
            
            <Button
              onClick={downloadQRCode}
              className="mt-4"
            >
              Download QR Code
            </Button>
          </div>
          
          {/* Registration details */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h2 className="font-bold text-xl mb-3 text-[#732424]">Registration Details</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-gray-600">Ticket Number:</div>
              <div className="font-semibold">{registration.ticket_number}</div>
              
              <div className="text-gray-600">Name:</div>
              <div className="font-semibold">{registration.attendee_name}</div>
              
              <div className="text-gray-600">Event:</div>
              <div className="font-semibold">{registration.event_name}</div>
              
              <div className="text-gray-600">Date:</div>
              <div className="font-semibold">March 15, 2025</div>
              
              <div className="text-gray-600">Time:</div>
              <div className="font-semibold">10:00 AM - 2:00 PM</div>
              
              <div className="text-gray-600">Location:</div>
              <div className="font-semibold">Main Hall</div>
              
              <div className="text-gray-600">Registration Date:</div>
              <div className="font-semibold">{formatDate(registration.registration_date)}</div>
              
              <div className="text-gray-600">Status:</div>
              <div className="font-semibold">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {registration.status}
                </span>
              </div>
            </div>
          </div>
          
          {/* Instructions */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="font-bold text-xl mb-3 text-[#732424]">Important Information</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Please bring this QR code to the event for check-in.</li>
              <li>You can either show the digital version or print it out.</li>
              <li>Arrive at least 15 minutes before the event starts.</li>
              <li>For any questions, please contact us at support@kshatriyaevent.com</li>
            </ul>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-center">
          <LinkButton href="/">
            Return to Home
          </LinkButton>
        </CardFooter>
      </Card>
    </PageLayout>
  );
} 