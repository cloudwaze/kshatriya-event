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
      {/* Additional Registration Forms */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Additional Registration Forms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sports Registration */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Sports Registration</h3>
            <p className="text-gray-700 text-center mb-4">Register for various sports events and competitions.</p>
            <a href="#" className="px-6 py-3 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors flex items-center gap-2">
              <span>Registration Link</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Cultural Registration */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Cultural Registration</h3>
            <p className="text-gray-700 text-center mb-4">Sign up for cultural performances and activities.</p>
            <a href="#" className="px-6 py-3 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors flex items-center gap-2">
              <span>Registration Link</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Booth Registration */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Booth Registration</h3>
            <p className="text-gray-700 text-center mb-4">Register for exhibition and vendor booths.</p>
            <a href="#" className="px-6 py-3 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors flex items-center gap-2">
              <span>Registration Link</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 