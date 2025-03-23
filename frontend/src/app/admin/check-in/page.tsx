"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/Card";
import { LoadingState } from "@/components/ui/LoadingSpinner";
import { verifyRegistrationToken, getRegistration, checkInRegistration } from "@/lib/api";
import { isAuthenticated } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function CheckInPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [registration, setRegistration] = useState<any>(null);
  const [checkedIn, setCheckedIn] = useState(false);
  const [adminNote, setAdminNote] = useState("");
  
  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated()) {
      router.push("/admin/login?returnUrl=/admin/check-in" + (token ? `?token=${token}` : ""));
      return;
    }
    
    async function verifyToken() {
      if (!token) {
        setError("No token provided. Please scan a valid QR code.");
        setIsLoading(false);
        return;
      }
      
      try {
        setIsLoading(true);
        // Verify the token
        const tokenResponse = await verifyRegistrationToken(token);
        
        if (tokenResponse.valid) {
          // Get registration details
          const registrationData = await getRegistration(tokenResponse.registration_id);
          setRegistration(registrationData);
          
          // Check if already checked in
          if (registrationData.status === "checked-in") {
            setCheckedIn(true);
          }
        } else {
          setError("Invalid or expired token. Please scan a valid QR code.");
        }
      } catch (err) {
        console.error("Error verifying token:", err);
        setError("Error verifying the QR code. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
    
    verifyToken();
  }, [token, router]);
  
  const handleCheckIn = async () => {
    if (!registration) return;
    
    try {
      setIsLoading(true);
      const response = await checkInRegistration(registration.registration_id, adminNote);
      
      if (response) {
        setCheckedIn(true);
        setRegistration({
          ...registration,
          status: "checked-in",
          check_in_timestamp: new Date().toISOString(),
        });
      }
    } catch (err) {
      console.error("Error checking in:", err);
      setError("Error checking in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  if (isLoading) {
    return <LoadingState message="Processing registration..." />;
  }
  
  if (error) {
    return (
      <Card className="max-w-md mx-auto mt-8">
        <CardHeader>
          <h2 className="text-xl font-bold text-red-500">Error</h2>
        </CardHeader>
        <CardContent>
          <p>{error}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => router.push("/admin")}>Return to Admin Dashboard</Button>
        </CardFooter>
      </Card>
    );
  }
  
  if (!registration) {
    return (
      <Card className="max-w-md mx-auto mt-8">
        <CardHeader>
          <h2 className="text-xl font-bold">No Registration Found</h2>
        </CardHeader>
        <CardContent>
          <p>Registration data could not be loaded.</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => router.push("/admin")}>Return to Admin Dashboard</Button>
        </CardFooter>
      </Card>
    );
  }
  
  return (
    <Card className="max-w-md mx-auto mt-8">
      <CardHeader>
        <h2 className="text-xl font-bold">{checkedIn ? "Already Checked In" : "Registration Check-In"}</h2>
        <p className="text-sm text-gray-500">
          {checkedIn 
            ? "This attendee has already been checked in." 
            : "Verify attendee details and check them in."}
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Ticket</h3>
            <p className="text-sm text-gray-500">{registration.ticket_number}</p>
          </div>
          <div>
            <h3 className="font-medium">Event</h3>
            <p className="text-sm text-gray-500">{registration.event_name}</p>
          </div>
          <div>
            <h3 className="font-medium">Attendee</h3>
            <p className="text-sm text-gray-500">{registration.attendee_name}</p>
          </div>
          <div>
            <h3 className="font-medium">Registration Date</h3>
            <p className="text-sm text-gray-500">
              {new Date(registration.registration_date).toLocaleDateString()}
            </p>
          </div>
          {checkedIn && (
            <div>
              <h3 className="font-medium">Checked In At</h3>
              <p className="text-sm text-gray-500">
                {new Date(registration.check_in_timestamp).toLocaleString()}
              </p>
            </div>
          )}
          {!checkedIn && (
            <div>
              <h3 className="font-medium">Admin Notes</h3>
              <textarea
                placeholder="Optional notes about this check-in"
                value={adminNote}
                onChange={(e) => setAdminNote(e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => router.push("/admin")}>
          Back to Dashboard
        </Button>
        {!checkedIn && (
          <Button onClick={handleCheckIn}>
            Check In Attendee
          </Button>
        )}
      </CardFooter>
    </Card>
  );
} 