'use client';

import Link from 'next/link';
import Image from 'next/image';
import RotatingSponsors from '../components/RotatingSponsors';
import { PageLayout } from '../components/ui/PageLayout';

export default function Home() {
  return (
    <PageLayout maxWidth="full">
      {/* Hero Section - Modern Design */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || '/kshatriya-event'}/images/logo.png`} alt="KANA Logo" width={120} height={120} className="mx-auto" />
          </div>
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
            Kshatriya (KANA) National Event - 2025
          </h1>
          {/* Cowboy Theme Visual */}
          <div className="my-8 flex justify-center">
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || '/kshatriya-event'}/images/cowboy-theme-placeholder.png`} alt="Cowboy Theme" width={320} height={180} className="mx-auto rounded-xl shadow-lg" />
          </div>
          <p className="text-xl text-foreground mb-10 max-w-2xl mx-auto">
            A celebration of culture, heritage, and community. Join us for an unforgettable experience of connection and tradition in Dallas, Texas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-secondary transition-all transform hover:-translate-y-1">
              Register Now
            </Link>
            <Link href="/schedule" className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg shadow-md hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
              View Schedule
            </Link>
          </div>
        </div>
      </div>

      {/* Event Packages Section */}
      <section className="py-16 text-center bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary">Event Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Banquet */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-primary mb-2">Banquet</h3>
              <p className="text-2xl font-bold text-secondary mb-2">$200</p>
              <p className="text-gray-700 mb-4">Evening banquet with dinner, entertainment, and networking.</p>
              <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">Buy</button>
            </div>
            {/* Main Event */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-primary mb-2">Main Event</h3>
              <p className="text-2xl font-bold text-secondary mb-2">$50 <span className="text-base font-normal">/person</span></p>
              <p className="text-gray-700 mb-4">Access to all main sessions. <span className="font-semibold text-green-700">Children under 10: Free</span></p>
              <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">Buy</button>
            </div>
            {/* Matrimony */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-primary mb-2">Matrimony</h3>
              <p className="text-2xl font-bold text-secondary mb-2">$250 <span className="text-base font-normal">/family</span></p>
              <p className="text-gray-700 mb-4">Participate in the exclusive matrimonial event for families.</p>
              <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">Contribute</button>
            </div>
            {/* Booth */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-primary mb-2">Booth</h3>
              <p className="text-2xl font-bold text-secondary mb-2">$250</p>
              <p className="text-gray-700 mb-4">Includes one table and two chairs. Bring your own materials.</p>
              <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">Buy</button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}