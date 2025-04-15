'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sponsor } from '../lib/sponsors';
import sponsorsData from '../data/sponsors.json';

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
  
  // Use static sponsors data
  const sponsors = sponsorsData as Sponsor[];

  // Filter sponsors by the active tier
  const activeTierSponsors = sponsors.filter(
    sponsor => sponsor.tier === sponsorTiers[activeTab].level
  );

  return (
    <div className="container mx-auto px-4">
      {/* Tabs Navigation */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap justify-center gap-2 sm:inline-flex sm:rounded-md sm:shadow-sm" role="group">
          {sponsorTiers.map((tier, index) => (
            <button
              key={index}
              type="button"
              className={`px-4 py-2 text-sm font-medium border transition-all ${
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
      <div className="min-h-[400px] mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h2 className={`text-2xl md:text-3xl font-bold text-center mb-8 ${sponsorTiers[activeTab].textClass}`}>
              {sponsorTiers[activeTab].displayName} Sponsors
            </h2>

            {activeTierSponsors.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg">No {sponsorTiers[activeTab].displayName} sponsors yet.</p>
                <p className="mt-2">Would you like to be the first?</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {activeTierSponsors.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center aspect-square hover:shadow-xl transition-all"
                  >
                    <div className={`${sponsorTiers[activeTab].bgClass} w-full h-3/4 flex items-center justify-center rounded-md mb-4`}>
                      <span className={`text-lg font-bold ${sponsorTiers[activeTab].textClass} text-center px-2`}>
                        {sponsor.name}
                      </span>
                    </div>
                    {sponsor.website ? (
                      <a 
                        href={sponsor.website.startsWith('http') ? sponsor.website : `https://${sponsor.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 text-sm hover:text-[#732424] transition-colors truncate max-w-full"
                      >
                        {sponsor.website.replace(/^https?:\/\/(www\.)?/, '')}
                      </a>
                    ) : (
                      <p className="text-gray-500 text-sm italic">No website provided</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Call to become a sponsor */}
            <div className="text-center mt-16 bg-gray-50 py-8 px-4 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4 text-lg">
                Interested in becoming a {sponsorTiers[activeTab].displayName} sponsor?
              </p>
              <Link 
                href="/contact-us" 
                className={`inline-block px-8 py-3 ${sponsorTiers[activeTab].buttonClass} text-white rounded-lg hover:opacity-90 transition-opacity font-medium`}
              >
                Apply as {sponsorTiers[activeTab].displayName} Sponsor
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
} 