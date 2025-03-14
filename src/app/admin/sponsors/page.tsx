'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getSponsors, deleteSponsor, Sponsor } from '@/lib/sponsors';

export default function SponsorsManagementPage() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // Load sponsors
  useEffect(() => {
    const loadSponsors = async () => {
      try {
        setIsLoading(true);
        const data = await getSponsors();
        setSponsors(data);
        setError(null);
      } catch (err) {
        setError('Failed to load sponsors. Please try again.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadSponsors();
  }, []);

  // Filter sponsors based on search term and selected tier
  const filteredSponsors = sponsors.filter(sponsor => {
    const matchesSearch = sponsor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          sponsor.contactName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = selectedTier === 'all' || sponsor.tier === selectedTier;
    return matchesSearch && matchesTier;
  });

  // Handle sponsor deletion
  const handleDelete = async (id: string) => {
    if (isDeleting) return;

    try {
      setIsDeleting(true);
      setDeleteId(id);
      
      const success = await deleteSponsor(id);
      
      if (success) {
        setSponsors(prevSponsors => prevSponsors.filter(sponsor => sponsor.id !== id));
      } else {
        setError('Failed to delete sponsor. Please try again.');
      }
    } catch (err) {
      setError('An error occurred while deleting the sponsor.');
      console.error(err);
    } finally {
      setIsDeleting(false);
      setDeleteId(null);
    }
  };

  // Get payment status class
  const getPaymentStatusClass = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'partial':
        return 'bg-yellow-100 text-yellow-800';
      case 'pending':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with add button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Sponsor Management</h1>
        <Link 
          href="/admin/sponsors/new" 
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#732424] hover:bg-[#5a1c1c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#732424]"
        >
          <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add New Sponsor
        </Link>
      </div>

      {/* Filters and search */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="focus:ring-[#732424] focus:border-[#732424] block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="Search by name or contact"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full md:w-48">
            <label htmlFor="tier" className="sr-only">Filter by Tier</label>
            <select
              id="tier"
              name="tier"
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#732424] focus:border-[#732424] sm:text-sm rounded-md"
              value={selectedTier}
              onChange={(e) => setSelectedTier(e.target.value)}
            >
              <option value="all">All Tiers</option>
              <option value="platinum">Platinum</option>
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
              <option value="bronze">Bronze</option>
            </select>
          </div>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Sponsors table */}
      <div className="bg-white shadow overflow-hidden rounded-lg">
        {isLoading ? (
          <div className="p-10 text-center">
            <div className="inline-block w-8 h-8 border-4 border-[#732424] border-t-[#FDB347] rounded-full animate-spin"></div>
            <p className="mt-2 text-gray-500">Loading sponsors...</p>
          </div>
        ) : filteredSponsors.length === 0 ? (
          <div className="p-10 text-center">
            {searchTerm || selectedTier !== 'all' ? (
              <p className="text-gray-500">No sponsors match your search criteria.</p>
            ) : (
              <div className="space-y-3">
                <p className="text-gray-500">No sponsors have been added yet.</p>
                <Link 
                  href="/admin/sponsors/new" 
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#732424] hover:bg-[#5a1c1c]"
                >
                  Add Your First Sponsor
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sponsor
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tier
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSponsors.map((sponsor) => (
                  <tr key={sponsor.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                          {sponsor.logo ? (
                            <img className="h-10 w-10 rounded-full" src={sponsor.logo} alt={sponsor.name} />
                          ) : (
                            <span className="text-xs font-medium text-gray-500">{sponsor.name.substring(0, 2).toUpperCase()}</span>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{sponsor.name}</div>
                          <div className="text-sm text-gray-500">{sponsor.website}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${sponsor.tier === 'platinum' ? 'bg-purple-100 text-purple-800' : 
                          sponsor.tier === 'gold' ? 'bg-yellow-100 text-yellow-800' : 
                          sponsor.tier === 'silver' ? 'bg-gray-100 text-gray-800' : 
                          'bg-amber-100 text-amber-800'}">
                        {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{sponsor.contactName}</div>
                      <div className="text-sm text-gray-500">{sponsor.contactEmail}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">₹{sponsor.amountPaid.toLocaleString()}</div>
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPaymentStatusClass(sponsor.paymentStatus)}`}>
                        {sponsor.paymentStatus.charAt(0).toUpperCase() + sponsor.paymentStatus.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <Link 
                          href={`/admin/sponsors/${sponsor.id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(sponsor.id)}
                          disabled={isDeleting && deleteId === sponsor.id}
                          className={`text-red-600 hover:text-red-900 ${isDeleting && deleteId === sponsor.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          {isDeleting && deleteId === sponsor.id ? 'Deleting...' : 'Delete'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
} 