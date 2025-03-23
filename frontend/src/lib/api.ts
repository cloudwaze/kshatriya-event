// API utility functions for communicating with the backend
import { getAuthHeaders } from './auth';

// Backend API URL configuration
const API_URL = 'http://localhost:8010/api/v1';

/**
 * Custom API error class with additional context
 */
export class APIError extends Error {
  status: number;
  
  constructor(message: string, status: number) {
    super(message);
    this.name = 'APIError';
    this.status = status;
  }
}

/**
 * Generic fetch function with error handling and retry logic
 * @param endpoint - API endpoint path
 * @param options - Fetch options
 * @param retries - Number of retry attempts
 * @returns Promise with the response data
 */
async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {},
  retries = 3
): Promise<T> {
  // Normalize the endpoint
  const normalizedEndpoint = endpoint.startsWith('/')
    ? endpoint
    : `/${endpoint}`;
    
  const url = `${API_URL}${normalizedEndpoint}`;
  
  // Prepare headers
  const headers = {
    'Content-Type': 'application/json',
    ...getAuthHeaders(),
    ...options.headers,
  };
  
  let lastError;
  
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });
      
      if (!response.ok) {
        // Try to parse error message from response
        try {
          const errorData = await response.json();
          throw new APIError(
            errorData.detail || `API error: ${response.status}`, 
            response.status
          );
        } catch (parseError) {
          // If parsing fails, throw a generic error
          throw new APIError(`API error: ${response.status}`, response.status);
        }
      }
      
      // For 204 No Content responses
      if (response.status === 204) {
        return {} as T;
      }
      
      return await response.json();
    } catch (error) {
      // Store the last error
      lastError = error;
      
      // Don't retry on final attempt
      if (attempt < retries - 1) {
        // Exponential backoff: 200ms, 400ms, 800ms, etc.
        const backoff = Math.min(200 * Math.pow(2, attempt), 3000);
        await new Promise(resolve => setTimeout(resolve, backoff));
      }
    }
  }
  
  // If we've exhausted all retries, throw the last error
  throw lastError;
}

// Sponsor API functions

/**
 * Sponsor entity interface
 */
export interface Sponsor {
  id: string;
  name: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  logo?: string;
  logo_url?: string;
  website?: string;
  website_url?: string;
  description: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  amount_paid: number;
  payment_status: 'pending' | 'partial' | 'paid';
  created_at: string;
  updated_at: string;
}

export type SponsorCreate = Omit<Sponsor, 'id' | 'created_at' | 'updated_at'>;
export type SponsorUpdate = Partial<SponsorCreate>;

// Get all sponsors
export const getSponsors = async (): Promise<Sponsor[]> => {
  return fetchAPI<Sponsor[]>('/sponsors');
};

// Get a single sponsor by ID
export const getSponsorById = async (id: string): Promise<Sponsor> => {
  return fetchAPI<Sponsor>(`/sponsors/${id}`);
};

// Create a new sponsor
export const createSponsor = async (sponsorData: SponsorCreate): Promise<Sponsor> => {
  return fetchAPI<Sponsor>('/sponsors', {
    method: 'POST',
    body: JSON.stringify(sponsorData),
  });
};

// Update an existing sponsor
export const updateSponsor = async (id: string, sponsorData: SponsorUpdate): Promise<Sponsor> => {
  return fetchAPI<Sponsor>(`/sponsors/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(sponsorData),
  });
};

// Delete a sponsor
export const deleteSponsor = async (id: string): Promise<void> => {
  return fetchAPI<void>(`/sponsors/${id}`, {
    method: 'DELETE',
  });
};

// Authentication API functions

export interface LoginRequest {
  username: string;
  password: string;
}

export interface Token {
  access_token: string;
  token_type: string;
}

export const login = async (credentials: LoginRequest): Promise<Token> => {
  return fetchAPI<Token>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
};

// Helper to get auth header with token
export const getAuthHeader = (): HeadersInit => {
  if (typeof window === 'undefined') {
    return {};
  }
  
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Event API functions
export interface Event {
  event_id: number;
  name: string;
  price: number;
  created_at?: string;
}

export const getEvents = async (): Promise<Event[]> => {
  return fetchAPI<Event[]>('/events/');
};

// Registration API functions
export interface RegistrationRequest {
  event_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

export interface Registration {
  registration_id: number;
  ticket_number: string;
  event_id: number;
  event_name: string;
  attendee_name: string;
  registration_date: string;
  status: string;
  qr_code: string;
}

export const createRegistration = async (registrationData: RegistrationRequest): Promise<Registration> => {
  return fetchAPI<Registration>('/registrations/', {
    method: 'POST',
    body: JSON.stringify(registrationData),
  });
};

export const getRegistration = async (id: number): Promise<Registration> => {
  return fetchAPI<Registration>(`/registrations/${id}`);
};

// Token verification API functions
export interface TokenVerificationResponse {
  valid: boolean;
  registration_id: number;
  event_id: number;
}

export const verifyRegistrationToken = async (token: string): Promise<TokenVerificationResponse> => {
  return fetchAPI<TokenVerificationResponse>('/auth/verify-registration-token', {
    method: 'POST',
    body: JSON.stringify({ token }),
  });
};

// Check-in API functions
export interface CheckInRequest {
  admin_note?: string;
}

export interface CheckInResponse {
  registration_id: number;
  ticket_number: string;
  event_name: string;
  attendee_name: string;
  check_in_timestamp: string;
  checked_in_by: number;
  status: string;
  admin_note?: string;
}

export const checkInRegistration = async (registrationId: number, adminNote?: string): Promise<CheckInResponse> => {
  const data: CheckInRequest = {};
  
  if (adminNote) {
    data.admin_note = adminNote;
  }
  
  return fetchAPI<CheckInResponse>(`/registrations/${registrationId}/check-in`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}; 