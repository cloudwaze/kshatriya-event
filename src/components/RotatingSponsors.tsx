'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sponsor tiers for rotation
const sponsorTiers = [
  {
    level: 'Platinum',
    color: '#732424',
    bgColor: 'rgba(115, 36, 36, 0.1)',
    textClass: 'text-[#732424]',
    bgClass: 'bg-[rgba(115,36,36,0.1)]',
  },
  {
    level: 'Gold',
    color: '#9E3030',
    bgColor: 'rgba(253, 179, 71, 0.2)',
    textClass: 'text-[#9E3030]',
    bgClass: 'bg-[rgba(253,179,71,0.2)]',
  },
  {
    level: 'Silver',
    color: '#4B5563',
    bgColor: '#E5E7EB',
    textClass: 'text-gray-600',
    bgClass: 'bg-gray-200',
  },
  {
    level: 'Bronze',
    color: '#CD7F32',
    bgColor: 'rgba(205, 127, 50, 0.2)',
    textClass: 'text-[#CD7F32]',
    bgClass: 'bg-[rgba(205,127,50,0.2)]',
  },
];

export default function RotatingSponsors() {
  const [currentTier, setCurrentTier] = useState(0);

  // Auto-rotate sponsors every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTier((prev) => (prev + 1) % sponsorTiers.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-4">
        <h4 className={`text-xl font-bold ${sponsorTiers[currentTier].textClass}`}>
          {sponsorTiers[currentTier].level} Sponsors
        </h4>
      </div>
      
      <div className="relative h-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTier}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {/* Display 2 sponsors for the current tier */}
            {[0, 1].map((index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center w-56 h-36 hover:scale-105 transition-all"
              >
                <div className={`${sponsorTiers[currentTier].bgClass} w-full h-16 flex items-center justify-center rounded-md mb-2`}>
                  <span className={`font-bold ${sponsorTiers[currentTier].textClass}`}>
                    {sponsorTiers[currentTier].level.toUpperCase()} SPONSOR
                  </span>
                </div>
                <p className="text-gray-600 text-sm">Your logo here</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {sponsorTiers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTier(index)}
            className={`w-3 h-3 rounded-full ${
              currentTier === index ? 'bg-[#732424]' : 'bg-gray-300'
            }`}
            aria-label={`View ${sponsorTiers[index].level} sponsors`}
          />
        ))}
      </div>
    </div>
  );
} 