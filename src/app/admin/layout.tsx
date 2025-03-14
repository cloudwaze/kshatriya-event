'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const pathname = usePathname();

  // Check if user is authenticated on component mount
  useEffect(() => {
    // In a real app, this would verify with an API
    // For now, just check localStorage
    const checkAuth = () => {
      const auth = localStorage.getItem('admin-auth');
      setIsAuthenticated(auth === 'true');
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  // Handle login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    // This is a placeholder authentication
    // In production, you would validate against your backend API
    if (username === 'admin' && password === 'kshatriya2025') {
      localStorage.setItem('admin-auth', 'true');
      setIsAuthenticated(true);
    } else {
      setLoginError('Invalid username or password');
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    setIsAuthenticated(false);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#732424] border-t-[#FDB347] rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Kshatriya Event Logo"
                width={80}
                height={80}
                className="mx-auto"
              />
            </Link>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Login
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleLogin}>
              {loginError && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                  <p className="text-red-700">{loginError}</p>
                </div>
              )}
              
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#732424] focus:border-[#732424] sm:text-sm"
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
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#732424] focus:border-[#732424] sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#732424] hover:bg-[#5a1c1c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#732424]"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Admin interface with sidebar
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
              className={`flex items-center px-4 py-2 text-sm ${pathname === '/admin' ? 'bg-[#5a1c1c] text-white' : 'text-gray-300 hover:bg-[#5a1c1c] hover:text-white'}`}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard
            </Link>
            <Link 
              href="/admin/sponsors"
              className={`flex items-center px-4 py-2 text-sm ${pathname === '/admin/sponsors' || pathname.startsWith('/admin/sponsors/') ? 'bg-[#5a1c1c] text-white' : 'text-gray-300 hover:bg-[#5a1c1c] hover:text-white'}`}
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
                {pathname === '/admin' && 'Dashboard'}
                {pathname === '/admin/sponsors' && 'Sponsor Management'}
                {/* Add more title mappings as needed */}
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