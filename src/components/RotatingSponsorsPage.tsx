'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sponsor tier configuration
const sponsorTiers = [
  {
    level: 'Platinum',
    color: '#732424',
    bgColor: 'rgba(115, 36, 36, 0.1)',
    textClass: 'text-[#732424]',
    bgClass: 'bg-[rgba(115,36,36,0.1)]',
    buttonClass: 'bg-[#732424]',
    count: 2,
  },
  {
    level: 'Gold',
    color: '#9E3030',
    bgColor: 'rgba(253, 179, 71, 0.2)',
    textClass: 'text-[#9E3030]',
    bgClass: 'bg-[rgba(253,179,71,0.2)]',
    buttonClass: 'bg-[#9E3030]',
    count: 3,
  },
  {
    level: 'Silver',
    color: '#4B5563',
    bgColor: '#E5E7EB',
    textClass: 'text-gray-600',
    bgClass: 'bg-gray-200',
    buttonClass: 'bg-gray-600',
    count: 4,
  },
  {
    level: 'Bronze',
    color: '#CD7F32',
    bgColor: 'rgba(205, 127, 50, 0.2)',
    textClass: 'text-[#CD7F32]',
    bgClass: 'bg-[rgba(205,127,50,0.2)]',
    buttonClass: 'bg-[#CD7F32]',
    count: 4,
  },
];

export default function RotatingSponsorsPage() {
  const [activeTab, setActiveTab] = useState(0);

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
              {tier.level}
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
              {sponsorTiers[activeTab].level} Sponsors
            </h2>

            {/* Grid of sponsors for the active tier */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {Array.from({ length: sponsorTiers[activeTab].count }).map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center h-40 hover:scale-105 transition-all"
                >
                  <div className={`${sponsorTiers[activeTab].bgClass} w-full h-20 flex items-center justify-center rounded-md mb-2`}>
                    <span className={`font-bold ${sponsorTiers[activeTab].textClass}`}>
                      {sponsorTiers[activeTab].level.toUpperCase()} SPONSOR
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">Your logo here</p>
                </div>
              ))}
            </div>

            {/* Call to become a sponsor */}
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Interested in becoming a {sponsorTiers[activeTab].level} sponsor?
              </p>
              <button className={`px-6 py-2 ${sponsorTiers[activeTab].buttonClass} text-white rounded-lg hover:opacity-90 transition-opacity`}>
                Apply as {sponsorTiers[activeTab].level} Sponsor
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
} 