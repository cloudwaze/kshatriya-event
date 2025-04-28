'use client';

import Image from 'next/image';

const donorPackages = [
  {
    name: 'Bronze',
    price: 100,
    description: 'Support our mission with a Bronze level donation.',
    zeffy: 'https://zeffy.com/bronze-donation-placeholder',
  },
  {
    name: 'Silver',
    price: 250,
    description: 'Make a bigger impact with a Silver level donation.',
    zeffy: 'https://zeffy.com/silver-donation-placeholder',
  },
  {
    name: 'Gold',
    price: 500,
    description: 'Help us reach new heights with a Gold level donation.',
    zeffy: 'https://zeffy.com/gold-donation-placeholder',
  },
  {
    name: 'Platinum',
    price: 1000,
    description: 'Become a top supporter with a Platinum level donation.',
    zeffy: 'https://zeffy.com/platinum-donation-placeholder',
  },
];

const customDonationLink = 'https://zeffy.com/custom-donation-placeholder';

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF7F2] via-[#fff7e6] to-[#fbeee0] py-12 px-4">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Support Our Mission</h1>
        <p className="text-lg text-foreground mb-4">
          Choose a donor package or donate any amount to help us make the Kshatriya (KANA) National Event a success. All contributions are processed securely via <span className="font-semibold text-secondary">Zeffy</span>.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {donorPackages.map((pkg) => (
          <div key={pkg.name} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold text-primary mb-2">{pkg.name}</h2>
            <p className="text-2xl font-bold text-secondary mb-2">${pkg.price}</p>
            <p className="text-gray-700 mb-4 text-center">{pkg.description}</p>
            <a href={pkg.zeffy} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">Contribute</a>
          </div>
        ))}
        {/* Custom Donation Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center border-2 border-dashed border-secondary">
          <h2 className="text-xl font-semibold text-secondary mb-2">Donate Your Own Amount</h2>
          <p className="text-gray-700 mb-4 text-center">Choose any amount to support our cause. Every contribution helps!</p>
          <a href={customDonationLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-secondary text-white rounded-lg font-semibold hover:bg-primary transition">Donate</a>
        </div>
      </div>
    </div>
  );
} 