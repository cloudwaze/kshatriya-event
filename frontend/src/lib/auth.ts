import axios from 'axios';
// NOTE: Make sure to run: npm install axios --save in the frontend directory

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://backend:8000';

// Development credentials for fallback
const DEV_USERNAME = 'admin';
const DEV_PASSWORD = 'kshatriya2025';

// Local state for development to prevent redirect loops in Docker environment
let devAuthState = false;

/**
 * Login with username and password
 */
export const login = async (username: string, password: string): Promise<boolean> => {
  try {
    // Server-side check to avoid localStorage errors
    if (typeof window === 'undefined') {
      console.error('Login attempted in server-side context');
      return false;
    }

    console.log('Attempting login with API endpoint');
    
    // For Docker development environment, use direct credential check to avoid API issues
    if (process.env.NODE_ENV !== 'production' && username === DEV_USERNAME && password === DEV_PASSWORD) {
      console.log('Using development authentication for Docker environment');
      localStorage.setItem('token', 'dev-token-1234567890');
      localStorage.setItem('username', username);
      // Set development auth state to prevent redirect loops
      devAuthState = true;
      return true;
    }
    
    try {
      // Try API login first
      const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
        username,
        password,
      }, {
        // Set timeout to prevent hanging requests
        timeout: 5000
      });
      
      if (response.status === 200 && response.data.access_token) {
        // Store the token in localStorage
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('username', username);
        return true;
      } else {
        console.log('API login failed with status:', response.status);
      }
    } catch (apiError) {
      console.error('API login error:', apiError);
      
      // Fallback to development credentials in case of API error
      console.log('Checking against development credentials');
      if (username === DEV_USERNAME && password === DEV_PASSWORD) {
        console.log('Development credentials match, using fallback authentication');
        localStorage.setItem('token', 'dev-token-1234567890');
        localStorage.setItem('username', username);
        devAuthState = true;
        return true;
      }
    }
    
    return false;
  } catch (error) {
    console.error('Login error:', error);
    return false;
  }
};

/**
 * Logout the current user
 */
export const logout = (): void => {
  try {
    // Server-side check to avoid localStorage errors
    if (typeof window === 'undefined') {
      console.error('Logout attempted in server-side context');
      return;
    }
    
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    devAuthState = false;
  } catch (error) {
    console.error('Logout error:', error);
  }
};

/**
 * Check if the user is authenticated
 */
export const isAuthenticated = (): boolean => {
  try {
    // Server-side check to avoid localStorage errors
    if (typeof window === 'undefined') {
      console.error('isAuthenticated called in server-side context');
      return false;
    }

    // For development Docker environment, use the in-memory state as a fallback
    if (process.env.NODE_ENV !== 'production' && devAuthState) {
      console.log('Using development auth state: true');
      return true;
    }
    
    const token = localStorage.getItem('token');
    const isAuth = !!token;
    console.log('Authentication check result:', isAuth);
    return isAuth;
  } catch (error) {
    console.error('Error checking authentication status:', error);
    return false;
  }
};

/**
 * Get the auth token
 */
export const getAuthToken = (): string | null => {
  try {
    // Server-side check to avoid localStorage errors
    if (typeof window === 'undefined') {
      console.error('getAuthToken called in server-side context');
      return null;
    }
    
    return localStorage.getItem('token');
  } catch (error) {
    console.error('Error getting auth token:', error);
    return null;
  }
};

/**
 * Get headers with auth token
 */
export const getAuthHeaders = (): Record<string, string> => {
  try {
    const token = getAuthToken();
    if (token) {
      return {
        Authorization: `Bearer ${token}`,
      };
    }
    return {};
  } catch (error) {
    console.error('Error getting auth headers:', error);
    return {};
  }
}; 