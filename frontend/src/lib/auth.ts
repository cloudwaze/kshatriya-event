// Types
interface AuthToken {
  access_token: string;
  token_type: string;
}

// Storage keys
const TOKEN_STORAGE_KEY = 'auth-token';
const AUTH_STATE_KEY = 'admin-auth';

// Development credentials for fallback
const DEV_USERNAME = 'admin';
const DEV_PASSWORD = 'kshatriya2025';

/**
 * Login with username and password
 * Uses the backend API for authentication with a fallback for development
 */
export async function login(username: string, password: string): Promise<boolean> {
  try {
    console.log('Attempting login with username:', username);
    
    try {
      // Prepare request to the API
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      // Check if request was successful
      if (response.ok) {
        // Parse token from response
        const data = await response.json();
        
        // Store auth token
        console.log('Login successful, storing token');
        localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(data));
        localStorage.setItem(AUTH_STATE_KEY, 'true');
        
        return true;
      }
      
      console.log('Login failed: Server returned', response.status);
    } catch (error) {
      console.error('API login error, trying fallback:', error);
    }
    
    // Fallback for development: Check hardcoded credentials
    console.log('Using development login fallback');
    if (username === DEV_USERNAME && password === DEV_PASSWORD) {
      console.log('Development login successful');
      
      // Set auth state to true
      localStorage.setItem(AUTH_STATE_KEY, 'true');
      
      // Set a mock token
      const mockToken = {
        access_token: 'dev_mock_token',
        token_type: 'bearer'
      };
      localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(mockToken));
      
      return true;
    }
    
    console.log('Login failed: Invalid credentials');
    return false;
  } catch (error) {
    console.error('Login failed:', error);
    return false;
  }
}

/**
 * Logout the current user
 */
export function logout(): void {
  console.log('Logging out');
  localStorage.removeItem(TOKEN_STORAGE_KEY);
  localStorage.removeItem(AUTH_STATE_KEY);
}

/**
 * Check if the user is authenticated
 */
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') {
    console.log('isAuthenticated: window is undefined (server-side)');
    return false;
  }
  const isAuth = localStorage.getItem(AUTH_STATE_KEY) === 'true';
  console.log('isAuthenticated:', isAuth);
  return isAuth;
}

/**
 * Get the current auth token
 */
export function getAuthToken(): AuthToken | null {
  if (typeof window === 'undefined') {
    console.log('getAuthToken: window is undefined (server-side)');
    return null;
  }
  
  const tokenStr = localStorage.getItem(TOKEN_STORAGE_KEY);
  if (!tokenStr) {
    console.log('getAuthToken: No token found');
    return null;
  }
  
  try {
    const token = JSON.parse(tokenStr) as AuthToken;
    console.log('getAuthToken: Token found');
    return token;
  } catch (error) {
    console.error('Error parsing auth token:', error);
    return null;
  }
}

/**
 * Get auth headers for API requests
 */
export function getAuthHeaders(): HeadersInit {
  const token = getAuthToken();
  if (!token) {
    console.log('getAuthHeaders: No token available');
    return {};
  }
  
  console.log('getAuthHeaders: Adding auth header');
  return {
    Authorization: `${token.token_type} ${token.access_token}`
  };
} 