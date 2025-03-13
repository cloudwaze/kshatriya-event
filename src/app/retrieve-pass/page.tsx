'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RetrievePassPage() {
  const [email, setEmail] = useState('');
  const [registrationId, setRegistrationId] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      // In a real application, this would be an actual API call
      if (email && registrationId) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-[#732424] hover:text-[#9E3030]">
            ← Back to Home
          </Link>
        </div>

        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Retrieve Your Pass</h1>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:border-[#732424] focus:ring-1 focus:ring-[#732424] outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="registrationId" className="block text-sm font-medium mb-2">
                Registration ID
              </label>
              <input
                type="text"
                id="registrationId"
                value={registrationId}
                onChange={(e) => setRegistrationId(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:border-[#732424] focus:ring-1 focus:ring-[#732424] outline-none transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-[#732424] hover:bg-[#9E3030] disabled:bg-[#732424]/70 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              {status === 'loading' ? 'Retrieving...' : 'Get Pass'}
            </button>

            {status === 'success' && (
              <div className="text-green-600 text-center">
                Success! Check your email for the pass.
              </div>
            )}

            {status === 'error' && (
              <div className="text-red-600 text-center">
                Error retrieving pass. Please check your details and try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
} 