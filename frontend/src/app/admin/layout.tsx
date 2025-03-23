'use client';

import React, { useEffect, useState } from 'react';
import { redirect, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { isAuthenticated, logout } from '../../lib/auth';
import Image from 'next/image';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [redirectAttempts, setRedirectAttempts] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  
  // Check if we're on the login page to prevent redirection loops
  const isLoginPage = pathname === '/admin/login';

  useEffect(() => {
    // Only run client-side
    if (typeof window === 'undefined') {
      return;
    }
    
    // Don't check auth on login page to prevent loops
    if (isLoginPage) {
      setLoading(false);
      return;
    }

    // Add a delay to prevent rapid redirect cycles
    const timer = setTimeout(() => {
      // Prevent too many redirect attempts
      if (redirectAttempts > 2) {
        console.error('Too many redirect attempts, stopping redirect loop');
        setLoading(false);
        return;
      }
      
      // Check authentication on component mount
      console.log('Checking authentication status in admin layout');
      try {
        const authStatus = isAuthenticated();
        console.log('Authentication status in admin layout:', authStatus);
        
        setAuthenticated(authStatus);
        
        if (!authStatus) {
          console.log('User is not authenticated, redirecting to login page');
          setRedirectAttempts(prev => prev + 1);
          router.push('/admin/login');
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        // In case of error, redirect to login
        router.push('/admin/login');
      } finally {
        setLoading(false);
      }
    }, 300); // Short delay

    return () => clearTimeout(timer);
  }, [router, isLoginPage, pathname, redirectAttempts]);

  const handleLogout = () => {
    console.log('Logging out user');
    logout();
    console.log('User logged out, redirecting to login page');
    router.push('/admin/login');
  };

  // If on login page, just render children
  if (isLoginPage) {
    return children;
  }

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <div className="w-16 h-16 border-4 border-[#732424] border-t-[#FDB347] rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
          <p className="mt-2 text-xs text-gray-500">Please wait while we verify your credentials</p>
        </div>
      </div>
    );
  }

  // If not authenticated, don't render anything (will redirect in useEffect)
  if (!authenticated) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <div className="w-16 h-16 border-4 border-[#732424] border-t-[#FDB347] rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Redirecting to login...</p>
          <p className="mt-2 text-xs text-gray-500">You must be authenticated to access this area</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-[#732424] text-white min-h-screen">
          <div className="p-4">
            <Link href="/admin" className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="Kshatriya Event Logo"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold">Admin Panel</span>
            </Link>
          </div>
          
          <nav className="mt-8">
            <div className="px-4 mb-3 text-sm font-medium text-gray-300">MANAGEMENT</div>
            <Link 
              href="/admin"
              className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-[#5a1c1c] hover:text-white"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </Link>
            <Link 
              href="/admin/sponsors"
              className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-[#5a1c1c] hover:text-white"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Sponsors
            </Link>
            {/* Additional menu items would go here */}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1">
          {/* Top header */}
          <header className="bg-white shadow">
            <div className="flex justify-between items-center px-4 py-4 sm:px-6 lg:px-8">
              <h1 className="text-xl font-semibold text-gray-900">
                Admin Dashboard
              </h1>
              <div className="flex items-center">
                <span className="mr-4 text-sm text-gray-600">Welcome, Admin</span>
                <button 
                  onClick={handleLogout}
                  className="px-3 py-1 text-sm text-white bg-[#732424] rounded hover:bg-[#5a1c1c]"
                >
                  Logout
                </button>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
} 