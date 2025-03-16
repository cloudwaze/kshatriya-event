'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  getSponsorById as getAPISponsorById, 
  createSponsor as createAPISponsor, 
  updateSponsor as updateAPISponsor
} from '@/lib/api';
import { 
  backendSponsorToFrontend, 
  frontendSponsorToBackendCreate, 
  frontendSponsorToBackendUpdate 
} from '@/lib/adapters';
import { Sponsor as SponsorType } from '@/lib/sponsors';

// Form initial state
const emptySponsor: Omit<SponsorType, 'id' | 'createdAt' | 'updatedAt'> = {
  name: '',
  tier: 'bronze',
  logo: '/sponsors/placeholder-logo.svg',
  website: '',
  description: '',
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  amountPaid: 0,
  paymentStatus: 'pending',
};

export default function SponsorFormPage() {
  const router = useRouter();
  const params = useParams();
  const sponsorId = params.id as string;
  const isNewSponsor = sponsorId === 'new';

  // Form state
  const [formData, setFormData] = useState<Omit<SponsorType, 'id' | 'createdAt' | 'updatedAt'>>(emptySponsor);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(!isNewSponsor);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Load sponsor data if editing
  useEffect(() => {
    const loadSponsor = async () => {
      if (isNewSponsor) {
        setIsLoading(false);
        return;
      }

      try {
        const backendSponsor = await getAPISponsorById(sponsorId);
        
        if (backendSponsor) {
          // Convert backend sponsor to frontend format
          const frontendSponsor = backendSponsorToFrontend(backendSponsor);
          
          // Extract what we need while ignoring id, createdAt, and updatedAt
          const { name, tier, logo, website, description, contactName, contactEmail, contactPhone, amountPaid, paymentStatus } = frontendSponsor;
          
          setFormData({
            name,
            tier,
            logo,
            website,
            description,
            contactName,
            contactEmail,
            contactPhone,
            amountPaid,
            paymentStatus
          });
          
          setLoadError(null);
        } else {
          setLoadError('Sponsor not found');
        }
      } catch (error) {
        setLoadError('Failed to load sponsor. Please try again.');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSponsor();
  }, [sponsorId, isNewSponsor]);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    // Handle number fields
    if (type === 'number') {
      setFormData({
        ...formData,
        [name]: value === '' ? 0 : Number(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Clear error for the field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.website.trim()) {
      newErrors.website = 'Website is required';
    } else if (!/^https?:\/\//.test(formData.website)) {
      newErrors.website = 'Website must start with http:// or https://';
    }
    
    if (!formData.contactName.trim()) {
      newErrors.contactName = 'Contact name is required';
    }
    
    if (!formData.contactEmail.trim()) {
      newErrors.contactEmail = 'Contact email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Please enter a valid email';
    }
    
    if (!formData.contactPhone.trim()) {
      newErrors.contactPhone = 'Contact phone is required';
    }
    
    if (formData.amountPaid < 0) {
      newErrors.amountPaid = 'Amount paid cannot be negative';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm() || isSubmitting) {
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      if (isNewSponsor) {
        // Convert frontend data to backend format and create
        const backendData = frontendSponsorToBackendCreate(formData);
        await createAPISponsor(backendData);
      } else {
        // Convert frontend data to backend format and update
        const backendData = frontendSponsorToBackendUpdate(formData);
        await updateAPISponsor(sponsorId, backendData);
      }
      
      // Navigate back to sponsors list
      router.push('/admin/sponsors');
    } catch (error) {
      console.error('Error saving sponsor:', error);
      setErrors({
        submit: 'Failed to save sponsor. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="inline-block w-8 h-8 border-4 border-[#732424] border-t-[#FDB347] rounded-full animate-spin"></div>
        <p className="ml-2 text-gray-600">Loading sponsor data...</p>
      </div>
    );
  }

  // Show error if sponsor not found
  if (loadError) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">{loadError}</p>
            <div className="mt-2">
              <Link
                href="/admin/sponsors"
                className="text-sm text-red-700 underline hover:text-red-800"
              >
                Return to sponsors list
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {isNewSponsor ? 'Add New Sponsor' : 'Edit Sponsor'}
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              {isNewSponsor 
                ? 'Fill in the details to add a new sponsor to the event.'
                : 'Update the sponsor information for your event.'}
            </p>

            {/* Tips */}
            <div className="mt-6 bg-blue-50 p-4 rounded-md">
              <h4 className="text-sm font-medium text-blue-800">Tips:</h4>
              <ul className="mt-2 text-sm text-blue-700 space-y-1 list-disc list-inside">
                <li>All sponsors will appear on the sponsors page</li>
                <li>Higher tier sponsors get more prominent placement</li>
                <li>Enter contact information for follow-ups</li>
                <li>Track payment status for your records</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                {/* General error message */}
                {errors.submit && (
                  <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-md">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700">{errors.submit}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-6 gap-6">
                  {/* Sponsor Name */}
                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Sponsor Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`mt-1 focus:ring-[#732424] focus:border-[#732424] block w-full shadow-sm sm:text-sm ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      } rounded-md`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Sponsor Tier */}
                  <div className="col-span-6 sm:col-span-2">
                    <label htmlFor="tier" className="block text-sm font-medium text-gray-700">
                      Tier
                    </label>
                    <select
                      id="tier"
                      name="tier"
                      value={formData.tier}
                      onChange={handleChange}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#732424] focus:border-[#732424] sm:text-sm"
                    >
                      <option value="platinum">Platinum</option>
                      <option value="gold">Gold</option>
                      <option value="silver">Silver</option>
                      <option value="bronze">Bronze</option>
                    </select>
                  </div>

                  {/* Website */}
                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                      Website
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="website"
                        id="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://example.com"
                        className={`focus:ring-[#732424] focus:border-[#732424] flex-1 block w-full rounded-md sm:text-sm ${
                          errors.website ? 'border-red-300' : 'border-gray-300'
                        }`}
                      />
                    </div>
                    {errors.website && (
                      <p className="mt-1 text-sm text-red-600">{errors.website}</p>
                    )}
                  </div>

                  {/* Logo URL */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="logo" className="block text-sm font-medium text-gray-700">
                      Logo URL
                    </label>
                    <input
                      type="text"
                      name="logo"
                      id="logo"
                      value={formData.logo}
                      onChange={handleChange}
                      className="mt-1 focus:ring-[#732424] focus:border-[#732424] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Leave as default if no logo available
                    </p>
                  </div>

                  {/* Description */}
                  <div className="col-span-6">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      value={formData.description}
                      onChange={handleChange}
                      className="mt-1 focus:ring-[#732424] focus:border-[#732424] block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6">
                    <h4 className="text-sm font-medium text-gray-700 pb-1 border-b border-gray-200">
                      Contact Information
                    </h4>
                  </div>

                  {/* Contact Name */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      id="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      className={`mt-1 focus:ring-[#732424] focus:border-[#732424] block w-full shadow-sm sm:text-sm ${
                        errors.contactName ? 'border-red-300' : 'border-gray-300'
                      } rounded-md`}
                    />
                    {errors.contactName && (
                      <p className="mt-1 text-sm text-red-600">{errors.contactName}</p>
                    )}
                  </div>

                  {/* Contact Email */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      id="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      className={`mt-1 focus:ring-[#732424] focus:border-[#732424] block w-full shadow-sm sm:text-sm ${
                        errors.contactEmail ? 'border-red-300' : 'border-gray-300'
                      } rounded-md`}
                    />
                    {errors.contactEmail && (
                      <p className="mt-1 text-sm text-red-600">{errors.contactEmail}</p>
                    )}
                  </div>

                  {/* Contact Phone */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700">
                      Contact Phone
                    </label>
                    <input
                      type="text"
                      name="contactPhone"
                      id="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      className={`mt-1 focus:ring-[#732424] focus:border-[#732424] block w-full shadow-sm sm:text-sm ${
                        errors.contactPhone ? 'border-red-300' : 'border-gray-300'
                      } rounded-md`}
                    />
                    {errors.contactPhone && (
                      <p className="mt-1 text-sm text-red-600">{errors.contactPhone}</p>
                    )}
                  </div>

                  {/* Payment Fields */}
                  <div className="col-span-6">
                    <h4 className="text-sm font-medium text-gray-700 pb-1 border-b border-gray-200">
                      Payment Details
                    </h4>
                  </div>

                  {/* Amount Paid */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="amountPaid" className="block text-sm font-medium text-gray-700">
                      Amount Paid (₹)
                    </label>
                    <input
                      type="number"
                      name="amountPaid"
                      id="amountPaid"
                      value={formData.amountPaid}
                      onChange={handleChange}
                      className={`mt-1 focus:ring-[#732424] focus:border-[#732424] block w-full shadow-sm sm:text-sm ${
                        errors.amountPaid ? 'border-red-300' : 'border-gray-300'
                      } rounded-md`}
                    />
                    {errors.amountPaid && (
                      <p className="mt-1 text-sm text-red-600">{errors.amountPaid}</p>
                    )}
                  </div>

                  {/* Payment Status */}
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="paymentStatus" className="block text-sm font-medium text-gray-700">
                      Payment Status
                    </label>
                    <select
                      id="paymentStatus"
                      name="paymentStatus"
                      value={formData.paymentStatus}
                      onChange={handleChange}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#732424] focus:border-[#732424] sm:text-sm"
                    >
                      <option value="pending">Pending</option>
                      <option value="partial">Partial</option>
                      <option value="paid">Paid</option>
                    </select>
                  </div>

                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-between">
                <Link
                  href="/admin/sponsors"
                  className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#732424]"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#732424] hover:bg-[#5a1c1c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#732424] ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Saving...' : isNewSponsor ? 'Create Sponsor' : 'Update Sponsor'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 