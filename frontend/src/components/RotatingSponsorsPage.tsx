'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getSponsors } from '@/lib/api';
import { backendSponsorToFrontend } from '@/lib/adapters';
import { Sponsor } from '@/lib/sponsors';

// Sponsor tier configuration
const sponsorTiers = [
  {
    level: 'platinum',
    displayName: 'Platinum',
    color: '#732424',
    bgColor: 'rgba(115, 36, 36, 0.1)',
    textClass: 'text-[#732424]',
    bgClass: 'bg-[rgba(115,36,36,0.1)]',
    buttonClass: 'bg-[#732424]',
  },
  {
    level: 'gold',
    displayName: 'Gold',
    color: '#9E3030',
    bgColor: 'rgba(253, 179, 71, 0.2)',
    textClass: 'text-[#9E3030]',
    bgClass: 'bg-[rgba(253,179,71,0.2)]',
    buttonClass: 'bg-[#9E3030]',
  },
  {
    level: 'silver',
    displayName: 'Silver',
    color: '#4B5563',
    bgColor: '#E5E7EB',
    textClass: 'text-gray-600',
    bgClass: 'bg-gray-200',
    buttonClass: 'bg-gray-600',
  },
  {
    level: 'bronze',
    displayName: 'Bronze',
    color: '#CD7F32',
    bgColor: 'rgba(205, 127, 50, 0.2)',
    textClass: 'text-[#CD7F32]',
    bgClass: 'bg-[rgba(205,127,50,0.2)]',
    buttonClass: 'bg-[#CD7F32]',
  },
];

export default function RotatingSponsorsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch sponsors from API
  useEffect(() => {
    async function fetchSponsors() {
      try {
        setIsLoading(true);
        const backendSponsors = await getSponsors();
        const frontendSponsors = backendSponsors.map(backendSponsorToFrontend);
        setSponsors(frontendSponsors);
        setError(null);
      } catch (err) {
        console.error('Error fetching sponsors:', err);
        setError('Failed to load sponsors');
      } finally {
        setIsLoading(false);
      }
    }

    fetchSponsors();
  }, []);

  // Filter sponsors by the active tier
  const activeTierSponsors = sponsors.filter(
    sponsor => sponsor.tier === sponsorTiers[activeTab].level
  );

  return (
    <div className="mx-auto max-w-6xl">
      {/* Tabs Navigation */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {sponsorTiers.map((tier, index) => (
            <button
              key={index}
              type="button"
              className={`px-4 py-2 text-sm font-medium border ${
                activeTab === index
                  ? `${tier.buttonClass} text-white border-${tier.buttonClass}`
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
              } ${index === 0 ? 'rounded-l-lg' : ''} ${
                index === sponsorTiers.length - 1 ? 'rounded-r-lg' : ''
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tier.displayName}
            </button>
          ))}
        </div>
      </div>

      {/* Sponsor Content with Animation */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className={`text-2xl font-bold text-center mb-8 ${sponsorTiers[activeTab].textClass}`}>
              {sponsorTiers[activeTab].displayName} Sponsors
            </h2>

            {isLoading ? (
              <div className="flex justify-center items-center h-40">
                <div className="w-12 h-12 border-4 border-[#732424] border-t-[#FDB347] rounded-full animate-spin"></div>
              </div>
            ) : error ? (
              <div className="text-center py-8 text-red-500">
                <p>{error}</p>
              </div>
            ) : activeTierSponsors.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No {sponsorTiers[activeTab].displayName} sponsors yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {activeTierSponsors.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center h-40 hover:scale-105 transition-all"
                  >
                    <div className={`${sponsorTiers[activeTab].bgClass} w-full h-20 flex items-center justify-center rounded-md mb-2`}>
                      <span className={`font-bold ${sponsorTiers[activeTab].textClass}`}>
                        {sponsor.name}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm truncate max-w-full">
                      {sponsor.website || "No website provided"}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Call to become a sponsor */}
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Interested in becoming a {sponsorTiers[activeTab].displayName} sponsor?
              </p>
              <button className={`px-6 py-2 ${sponsorTiers[activeTab].buttonClass} text-white rounded-lg hover:opacity-90 transition-opacity`}>
                Apply as {sponsorTiers[activeTab].displayName} Sponsor
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
} 