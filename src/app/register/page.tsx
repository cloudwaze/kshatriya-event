'use client';

import Link from 'next/link';
import Image from 'next/image';

const zeffyLinks = {
  mainEvent: 'https://zeffy.com/main-event-placeholder',
  banquet: 'https://zeffy.com/banquet-placeholder',
  matrimony: 'https://zeffy.com/matrimony-placeholder',
  booth: 'https://zeffy.com/booth-placeholder',
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      {/* Hero/Intro */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Register for Kshatriya (KANA) National Event 2025</h1>
        <p className="text-lg text-foreground mb-4">
          We use <span className="font-semibold text-secondary">Zeffy</span> for secure, low-fee nonprofit payments. Click below to pay for your chosen event(s).
        </p>
        <div className="flex justify-center items-center gap-2 mb-2">
          <div className="bg-primary rounded-lg p-2 flex items-center">
            <Image
              src="https://cdn.prod.website-files.com/60af7f6d21134db12548f5b9/62a23ee189b58ad0dd096db0_Zeffy-Logo-White.svg"
              alt="Zeffy Logo"
              width={120}
              height={32}
              style={{ background: 'transparent' }}
            />
          </div>
          <span className="text-sm text-gray-500">Payments powered by Zeffy</span>
        </div>
      </div>
      {/* Event Packages Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Main Event */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-primary mb-2">Main Event</h2>
          <p className="text-2xl font-bold text-secondary mb-2">$50 <span className="text-base font-normal">/person</span></p>
          <p className="text-gray-700 mb-4">Access to all main sessions. <span className="font-semibold text-green-700">Children under 10: Free</span></p>
          <a href={zeffyLinks.mainEvent} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">Pay via Zeffy</a>
        </div>
        {/* Banquet */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-primary mb-2">Banquet</h2>
          <p className="text-2xl font-bold text-secondary mb-2">$200</p>
          <p className="text-gray-700 mb-4">Evening banquet with dinner, entertainment, and networking.</p>
          <a href={zeffyLinks.banquet} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">Pay via Zeffy</a>
        </div>
        {/* Matrimony */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-primary mb-2">Matrimony</h2>
          <p className="text-2xl font-bold text-secondary mb-2">$250 <span className="text-base font-normal">/family</span></p>
          <p className="text-gray-700 mb-4">Participate in the exclusive matrimonial event for families.</p>
          <a href={zeffyLinks.matrimony} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">Pay via Zeffy</a>
        </div>
        {/* Booth */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-primary mb-2">Booth</h2>
          <p className="text-2xl font-bold text-secondary mb-2">$250</p>
          <p className="text-gray-700 mb-4">Includes one table and two chairs. Bring your own materials.</p>
          <a href={zeffyLinks.booth} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">Pay via Zeffy</a>
        </div>
      </div>
    </div>
  );
} 