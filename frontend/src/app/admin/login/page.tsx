'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { login, isAuthenticated } from '../../../lib/auth';
import Image from 'next/image';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Add a delay to prevent rapid redirect cycles
    const timer = setTimeout(() => {
      // Skip if we've already checked auth or if we're server-side
      if (authChecked || typeof window === 'undefined') {
        return;
      }

      try {
        // Check if already authenticated
        console.log('Checking authentication status on login page');
        const authenticated = isAuthenticated();
        console.log('Authentication status on login page:', authenticated);
        
        if (authenticated) {
          console.log('User is already authenticated, redirecting to admin dashboard');
          router.push('/admin');
        }
      } catch (error) {
        console.error('Error checking authentication on login page:', error);
        // Don't redirect if there's an error checking auth
      } finally {
        setAuthChecked(true);
      }
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [router, authChecked]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');
    
    console.log('Login attempt with username:', username);
    
    try {
      // Log API base URL to debug connection issues
      console.log('API base URL:', process.env.NEXT_PUBLIC_API_URL || 'http://backend:8000');
      
      const success = await login(username, password);
      console.log('Login result:', success);
      
      if (success) {
        console.log('Login successful, redirecting to admin dashboard');
        // Add a slight delay before redirect to allow state to settle
        setTimeout(() => {
          router.push('/admin');
        }, 300);
      } else {
        console.log('Login failed: Invalid credentials');
        setLoginError('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('An error occurred during login. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  // Force development login for local Docker development to avoid API issues
  const handleDevLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    setUsername('admin');
    setPassword('kshatriya2025');
    console.log('Using development credentials');
    // Submit the form with dev credentials
    handleLogin(e as unknown as React.FormEvent);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f5]">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Image 
              src="/logo.svg" 
              alt="Kshatriya Association Logo" 
              width={80} 
              height={80} 
              className="mx-auto"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Administrator Access
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Secure login for authorized personnel only
          </p>
        </div>
        
        {loginError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{loginError}</span>
          </div>
        )}
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#732424] focus:border-[#732424] sm:text-sm"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#732424] focus:border-[#732424] sm:text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#732424] hover:bg-[#5a1c1c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#732424] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Authenticating...
                </>
              ) : 'Sign in'}
            </button>
            
            {process.env.NODE_ENV !== 'production' && (
              <button
                onClick={handleDevLogin}
                disabled={isLoading}
                className="text-sm text-[#732424] hover:text-[#5a1c1c] focus:outline-none font-medium"
              >
                Use Development Login (Docker)
              </button>
            )}
          </div>
          
          <div className="text-center text-xs text-gray-500 mt-3">
            <p>This is a secure area. Unauthorized access is prohibited.</p>
          </div>
        </form>
      </div>
      
      <div className="mt-6 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Kshatriya Association</p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
} 