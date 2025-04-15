'use client';

import Link from 'next/link';
import Image from 'next/image';
import RotatingSponsors from '../components/RotatingSponsors';
import { PageLayout } from '../components/ui/PageLayout';

export default function Home() {
  return (
    <PageLayout maxWidth="full">
      {/* Hero Section - Modern Design */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#732424]/10 to-white">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#732424]/10 blur-3xl"></div>
        <div className="absolute top-40 left-10 w-72 h-72 rounded-full bg-[#E47D30]/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Content */}
            <div className="w-full md:w-1/2 text-center md:text-left z-10 mb-10 md:mb-0">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#732424]">
                Kshatriya <span className="text-[#E47D30]">Event</span> 
                <span className="block mt-2">2025</span>
              </h1>
              
              <div className="flex items-center justify-center md:justify-start mb-8">
                <div className="w-10 h-1 bg-[#732424]"></div>
                <p className="ml-4 text-lg font-medium text-gray-700">15 - 17 March</p>
                <div className="w-10 h-1 bg-[#E47D30] ml-4"></div>
              </div>
              
              <p className="text-xl text-gray-700 mb-10 max-w-md mx-auto md:mx-0">
                A celebration of culture, heritage, and community. Join us for an unforgettable experience of connection and tradition.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/register" className="px-8 py-4 bg-[#732424] text-white font-bold rounded-lg shadow-lg hover:bg-[#5a1c1c] transition-all transform hover:-translate-y-1">
                  Register Now
                </Link>
                <Link href="/schedule" className="px-8 py-4 border-2 border-[#732424] text-[#732424] font-bold rounded-lg shadow-md hover:bg-[#732424] hover:text-white transition-all transform hover:-translate-y-1">
                  View Schedule
                </Link>
              </div>
            </div>
            
            {/* Right: Visual Elements */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-300">
                <Image 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/main-event.jpg`}
                  alt="Kshatriya Event Celebration"
                  width={600}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#732424]/40 to-transparent"></div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-1/2 -left-10 w-full h-full border-8 border-[#E47D30]/30 rounded-2xl -z-10 transform -translate-y-1/2 -rotate-3"></div>
              
              {/* Event highlights */}
              <div className="absolute -right-10 -bottom-10 bg-white p-4 rounded-lg shadow-xl z-20 transform rotate-3 hover:rotate-0 transition-all duration-300">
                <p className="font-bold text-[#732424]">3 Days</p>
                <p className="text-sm text-gray-600">Cultural Celebration</p>
              </div>
              
              <div className="absolute left-10 -bottom-5 bg-white p-4 rounded-lg shadow-xl z-20 transform -rotate-2 hover:rotate-0 transition-all duration-300">
                <p className="font-bold text-[#E47D30]">Community</p>
                <p className="text-sm text-gray-600">Leadership & Heritage</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Info Bar */}
        <div className="bg-[#732424] text-white py-4 mt-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Conference: 15 March</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Venue: Grand Central Hall</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Workshops: 16-17 March</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-black">Sponsors</h2>
          <h3 className="text-xl font-semibold text-black">Our Sponsors</h3>
          <div className="w-16 h-1 bg-[#E47D30] mx-auto mb-6"></div>
          
          {/* Rotating sponsors carousel */}
          <RotatingSponsors />

          {/* Become a sponsor button */}
          <div className="mt-10">
            <Link href="/sponsors" className="inline-block px-6 py-3 border-2 border-[#732424] text-[#732424] font-semibold rounded-lg hover:bg-[#732424] hover:text-white transition-colors">
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">About Us</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto hover:scale-105">
            {/* Left Side: Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/AboutusImage.png`}
                alt="About Us"
                width={400}
                height={300}
                className="rounded-lg shadow-lg object-cover"
                style={{ height: 'auto' }}
              />
            </div>

            {/* Right Side: Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-lg text-gray-800 mb-4">
                The Kshatriya Event 2025 is a grand gathering that celebrates culture, heritage, and leadership.
                Our mission is to unite people from various backgrounds, foster community connections, and promote knowledge-sharing.
              </p>
              <p className="text-lg text-gray-800 mb-6">
                Join us for insightful discussions, networking opportunities, and unforgettable experiences.
              </p>
              <Link href="/about" className="inline-block px-6 py-3 border-4 border-[#6B1313] bg-[#FAF7F2] text-black font-bold text-lg uppercase tracking-wide rounded-full shadow-md hover:bg-[#EAE0D5] transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-black">Ready to Join Us?</h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Don&apos;t miss out on this incredible gathering of our community. Register now to secure your spot!
          </p>
          <Link href="/register" className="inline-block px-8 py-3 border-4 border-[#6B1313] bg-[#FAF7F2] text-black font-bold text-lg uppercase tracking-wide rounded-full shadow-md hover:bg-[#EAE0D5] transition-all">
            Register Now
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}