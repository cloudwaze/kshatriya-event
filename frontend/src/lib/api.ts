// API utility functions for communicating with the backend
import { getAuthHeaders } from './auth';

// Use relative URLs to leverage Next.js API routes
// No trailing slash to work with our simplified API routes
const API_URL = '/api';

/**
 * Generic fetch function with error handling and retry logic
 */
async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {},
  retries = 3
): Promise<T> {
  const url = `${API_URL}${endpoint}`;
  
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
          throw new Error(errorData.detail || `API error: ${response.status}`);
        } catch {
          // If parsing fails, throw a generic error
          throw new Error(`API error: ${response.status}`);
        }
      }
      
      // For 204 No Content responses
      if (response.status === 204) {
        return {} as T;
      }
      
      return await response.json();
    } catch (error) {
      console.error(`API request failed (attempt ${attempt + 1}/${retries}):`, error);
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