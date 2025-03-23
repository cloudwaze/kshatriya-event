'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { deleteSponsor, getSponsors } from '../../../lib/api';
import { backendSponsorToFrontend } from '../../../lib/adapters';
import { Sponsor as SponsorType } from '../../../lib/sponsors';

// Sponsor list page component
export default function SponsorsPage() {
  const [sponsors, setSponsors] = useState<SponsorType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load sponsors when the component mounts
  useEffect(() => {
    async function loadSponsors() {
      try {
        console.log('Loading sponsors...');
        setError(null);
        setIsLoading(true);
        
        // Get sponsors from API
        console.log('Fetching sponsors from API...');
        const backendSponsors = await getSponsors();
        console.log('Received sponsors from API:', backendSponsors);
        
        // Convert to frontend format
        console.log('Converting sponsors to frontend format...');
        const frontendSponsors = backendSponsors.map(backendSponsorToFrontend);
        console.log('Converted sponsors:', frontendSponsors);
        
        setSponsors(frontendSponsors);
      } catch (err) {
        console.error('Error loading sponsors:', err);
        setError('Failed to load sponsors. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }

    loadSponsors();
  }, []);

  // Handle sponsor deletion
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this sponsor?')) {
      return;
    }

    try {
      setError(null);
      
      // Delete from API
      await deleteSponsor(id);
      
      // Update local state
      setSponsors(sponsors.filter(sponsor => sponsor.id !== id));
    } catch (err) {
      console.error('Error deleting sponsor:', err);
      setError('Failed to delete sponsor. Please try again.');
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-900"></div>
        <p className="ml-3">Loading sponsors...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Manage Sponsors</h1>
        <Link 
          href="/admin/sponsors/new" 
          className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md font-medium"
        >
          Add Sponsor
        </Link>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {sponsors.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>No sponsors found. Add your first sponsor to get started.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tier
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sponsors.map((sponsor) => (
                <tr key={sponsor.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{sponsor.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      sponsor.tier === 'platinum' ? 'bg-purple-100 text-purple-800' :
                      sponsor.tier === 'gold' ? 'bg-yellow-100 text-yellow-800' :
                      sponsor.tier === 'silver' ? 'bg-gray-100 text-gray-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      sponsor.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' :
                      sponsor.paymentStatus === 'partial' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {sponsor.paymentStatus.charAt(0).toUpperCase() + sponsor.paymentStatus.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link 
                      href={`/admin/sponsors/${sponsor.id}`}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(sponsor.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 