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
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            ← Back to Home
          </Link>
        </div>

        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Retrieve Your Pass</h1>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm border border-gray-700">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
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
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              {status === 'loading' ? 'Retrieving...' : 'Get Pass'}
            </button>

            {status === 'success' && (
              <div className="text-green-400 text-center">
                Success! Check your email for the pass.
              </div>
            )}

            {status === 'error' && (
              <div className="text-red-400 text-center">
                Error retrieving pass. Please check your details and try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
} 