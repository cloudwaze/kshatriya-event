'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PageLayout } from '../../components/ui/PageLayout';

const zeffyLinks = {
  mainEvent: 'https://zeffy.com/main-event-placeholder',
  banquet: 'https://zeffy.com/banquet-placeholder',
  matrimony: 'https://zeffy.com/matrimony-placeholder',
  booth: 'https://zeffy.com/booth-placeholder',
  donate: 'https://zeffy.com/donate-placeholder',
};

export default function RegisterPage() {
  return (
    <PageLayout maxWidth="full">
      {/* Hero section */}
      <div className="relative bg-[#732424] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#732424] to-[#9E3030] opacity-90"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Event Tickets</h1>
            <p className="text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Purchase your tickets for the Kshatriya (KANA) National Event 2025.
              We offer various options including the main event, banquet, and matrimony event.
              All payments are processed securely through Zeffy, our trusted payment partner for nonprofit events.
            </p>
          </div>
        </div>
        
        {/* Decorative wave divider */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white fill-current">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </div>

      <div className="py-12 px-4 bg-background">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Purchase Tickets via Zeffy</h2>
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
            <a href={zeffyLinks.mainEvent} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">Buy</a>
          </div>
          {/* Banquet */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold text-primary mb-2">Banquet</h2>
            <p className="text-2xl font-bold text-secondary mb-2">$150</p>
            <p className="text-gray-700 mb-4">Evening banquet with dinner, entertainment, and networking. <span className="font-semibold text-green-700">Age 21 and above</span></p>
            <a href={zeffyLinks.banquet} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">Buy</a>
          </div>
          {/* Matrimony */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold text-primary mb-2">Matrimony</h2>
            <p className="text-2xl font-bold text-secondary mb-2">$250 <span className="text-base font-normal">/family</span></p>
            <p className="text-gray-700 mb-4">Participate in the exclusive matrimonial event for families.</p>
            <a href={zeffyLinks.matrimony} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">Buy</a>
          </div>
          {/* Booth */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold text-primary mb-2">Booth</h2>
            <p className="text-2xl font-bold text-secondary mb-2">$250</p>
            <p className="text-gray-700 mb-4">Includes one table and two chairs. Bring your own materials.</p>
            <a href={zeffyLinks.booth} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">Buy</a>
          </div>
        </div>
        
        {/* Donation Section */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl font-bold text-primary mb-3">Support Our Event</h2>
              <p className="text-gray-700 mb-6">
                Your generous donation helps us create an unforgettable experience for our community and supports our cultural initiatives. All contributions are tax-deductible and greatly appreciated.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a 
                  href={zeffyLinks.donate} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>Donate Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Link to Participation Forms */}
        <div className="max-w-5xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Looking for Activity Registration?</h2>
          <p className="text-gray-700 mb-6">Register for sports, cultural activities, and booths on our dedicated forms page.</p>
          <Link href="/participation-forms" className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">
            Go to Participation Forms
          </Link>
        </div>
      </div>
    </PageLayout>
  );
} 