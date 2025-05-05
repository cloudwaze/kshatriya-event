'use client';

import Link from 'next/link';
import Image from 'next/image';
import CountdownTimer from '../components/CountdownTimer';
import { PageLayout } from '../components/ui/PageLayout';

export default function Home() {
  // Event date - December 20, 2025
  const eventDate = new Date('2025-12-20T00:00:00');
  
  return (
    <PageLayout maxWidth="full">
      {/* Hero Section - Enhanced Design */}
      <div className="relative min-h-[80vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#732424]/90 mix-blend-multiply"></div>
          <Image 
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || '/kshatriya-event'}/images/cowboy-theme-placeholder.png`} 
            alt="Event Background" 
            fill 
            style={{ 
              objectFit: 'cover', 
              objectPosition: 'center 100%',
              transform: 'translateY(-11%)' 
            }}
            priority
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <div className="container relative mx-auto px-4 py-20 flex flex-col items-center justify-center text-center z-10">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
            Kshatriya (KANA) National Event
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl font-semibold text-[#FDB347] mb-10 max-w-2xl mx-auto drop-shadow-md">
            Celebrating Our Heritage, Building Our Future
          </p>
          
          {/* Event Date & Location */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-10">
            <div className="flex items-center text-white">
              <svg className="w-6 h-6 mr-2 text-[#FDB347]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-lg font-medium">December 20-21, 2025</span>
            </div>
            <div className="hidden md:block w-1 h-6 bg-white/30 rounded-full"></div>
            <div className="flex items-center text-white">
              <svg className="w-6 h-6 mr-2 text-[#FDB347]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-lg font-medium">Dallas, Texas</span>
            </div>
          </div>
          
          {/* Countdown Timer */}
          <div className="mb-12 w-full max-w-3xl mx-auto">
            <h2 className="text-white text-xl mb-4">Event Starts In:</h2>
            <CountdownTimer targetDate={eventDate} />
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold rounded-lg shadow-lg hover:bg-white/30 transition-all transform hover:-translate-y-1"
            >
              Get Your Tickets
            </Link>
            <Link 
              href="/sponsors" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-lg shadow-md hover:bg-white/20 transition-all transform hover:-translate-y-1"
            >
              View Premium Packages
            </Link>
          </div>
        </div>
        
        {/* Decorative wave divider */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white fill-current">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </div>

      {/* Why Attend Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Attend</h2>
              <div className="w-24 h-1 bg-[#FDB347] mx-auto mb-8"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Experience the best of our cultural traditions while creating new memories with fellow community members from across the country.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Reason 1 */}
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 text-center">Connect & Network</h3>
                <p className="text-gray-700 text-center">
                  Build meaningful relationships with community members from different regions, fostering unity and collaboration.
                </p>
              </div>
              
              {/* Reason 2 */}
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 text-center">Cultural Immersion</h3>
                <p className="text-gray-700 text-center">
                  Experience authentic traditions, ceremonies, and performances that celebrate our rich cultural heritage.
                </p>
              </div>
              
              {/* Reason 3 */}
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 text-center">Family Experience</h3>
                <p className="text-gray-700 text-center">
                  Create lasting memories with activities designed for all ages, from children's programs to matrimonial events.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/register" 
                className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors"
              >
                Secure Your Spot Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Event Highlights</h2>
              <div className="w-24 h-1 bg-[#FDB347] mx-auto mb-8"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our 2025 event features a variety of special activities and opportunities designed to engage, entertain, and inspire attendees of all ages.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Highlight 1: Banquet */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg mb-6">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || '/kshatriya-event'}/images/banquet.jpg`}
                    alt="Gala Banquet"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: "center 40%" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-xl font-bold">Gala Banquet</h3>
                  </div>
                </div>
                <p className="text-gray-700">
                  Our glamorous evening banquet features exquisite dining, cultural performances, and an opportunity to connect with community leaders and fellow attendees. An elegant night you won't want to miss!
                </p>
              </div>
              
              {/* Highlight 2: Matrimony */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg mb-6">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || '/kshatriya-event'}/images/matrimony.jpg`}
                    alt="Matrimony Event"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: "center 15%" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-xl font-bold">Matrimony Event</h3>
                  </div>
                </div>
                <p className="text-gray-700">
                  Our exclusive matrimonial event provides families with a dignified platform to meet potential matches in a traditional yet comfortable setting, facilitating meaningful connections.
                </p>
              </div>
              
              {/* Highlight 3: Cultural Activities */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg mb-6">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || '/kshatriya-event'}/images/main-event.jpg`}
                    alt="Cultural Activities"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: "center center" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-xl font-bold">Cultural Activities</h3>
                  </div>
                </div>
                <p className="text-gray-700">
                  Immerse yourself in a rich tapestry of cultural experiences including traditional dance performances, musical showcases, and authentic Kshatriya ceremonies celebrating our heritage.
                </p>
              </div>
              
              {/* Highlight 4: Networking */}
              <div className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg mb-6">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || '/kshatriya-event'}/images/entrepreneurship.jpg`}
                    alt="Networking Opportunities"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: "center 35%" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white text-xl font-bold">Networking Opportunities</h3>
                  </div>
                </div>
                <p className="text-gray-700">
                  Connect with professionals, entrepreneurs, and community leaders from across the country in structured networking sessions designed to foster collaboration and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tickets Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Featured Tickets</h2>
              <div className="w-24 h-1 bg-[#FDB347] mx-auto mb-8"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Select the perfect tickets for you and your family to enjoy everything our national event has to offer.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main Event Package */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="bg-primary/10 p-6 text-center">
                  <h3 className="text-xl font-bold text-primary">Main Event</h3>
                  <div className="text-3xl font-bold text-secondary mt-2">$50</div>
                  <div className="text-gray-500 text-sm">per person</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#FDB347] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Access to all main sessions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#FDB347] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Cultural performances</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#FDB347] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Networking opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-green-700 font-medium">Children under 10: Free</span>
                    </li>
                  </ul>
                  <Link 
                    href="/register" 
                    className="block w-full py-3 text-center bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors"
                  >
                    Buy
                  </Link>
                </div>
              </div>
              
              {/* Banquet Package */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ring-2 ring-[#FDB347] ring-opacity-50">
                <div className="absolute top-0 right-0">
                  <div className="bg-[#FDB347] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                </div>
                <div className="bg-primary p-6 text-center">
                  <h3 className="text-xl font-bold text-white">Banquet</h3>
                  <div className="text-3xl font-bold text-white mt-2">$150</div>
                  <div className="text-white/80 text-sm">per person</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#FDB347] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Exclusive evening banquet</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#FDB347] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Gourmet dining experience</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#FDB347] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Entertainment and dancing</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#FDB347] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">VIP networking opportunities</span>
                    </li>
                  </ul>
                  <Link 
                    href="/register" 
                    className="block w-full py-3 text-center bg-[#FDB347] text-white font-semibold rounded-lg hover:bg-[#FDB347]/90 transition-colors"
                  >
                    Buy
                  </Link>
                </div>
              </div>
              
              {/* Matrimony Package */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="bg-primary/10 p-6 text-center">
                  <h3 className="text-xl font-bold text-primary">Matrimony</h3>
                  <div className="text-3xl font-bold text-secondary mt-2">$250</div>
                  <div className="text-gray-500 text-sm">per family</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#FDB347] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Exclusive matrimonial event access</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#FDB347] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Bio-data inclusion in directory</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#FDB347] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Facilitated introductions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[#FDB347] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Private meeting spaces</span>
                    </li>
                  </ul>
                  <Link 
                    href="/register" 
                    className="block w-full py-3 text-center bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors"
                  >
                    Buy
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/sponsors" 
                className="inline-block px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
              >
                View All Ticket Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Packages Section (Renamed from Premium Partnerships) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-red-50 text-[#732424] rounded-full text-sm font-medium mb-3">Premium Packages</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Support Our Cultural Celebration</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our community partners and gain recognition while supporting our cultural heritage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Bronze Package */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B4513]/5 to-[#8B4513]/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden h-full border border-gray-100 transform group-hover:scale-105 transition-transform duration-300">
                <div className="px-6 pt-8 pb-6">
                  <h3 className="text-2xl font-bold mb-1 text-[#8B4513]">Bronze</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-extrabold text-gray-900">$1,000</span>
                  </div>
                  <div className="pt-2 pb-4">
                    <ul className="space-y-3">
                      <li className="flex">
                        <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">4 Event Tickets</span>
                      </li>
                      <li className="flex">
                        <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Name listed in Souvenir</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="px-6 pb-8 mt-auto">
                  <Link 
                    href="/sponsors" 
                    className="block w-full text-center py-3 px-4 rounded-lg text-white font-medium transition-colors bg-[#8B4513]"
                  >
                    Buy
                  </Link>
                </div>
              </div>
            </div>

            {/* Bronze Plus Package */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#A0522D]/5 to-[#A0522D]/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden h-full border border-gray-100 transform group-hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 right-0">
                  <div className="bg-[#A0522D] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                </div>
                <div className="px-6 pt-8 pb-6">
                  <h3 className="text-2xl font-bold mb-1 text-[#A0522D]">Bronze Plus</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-extrabold text-gray-900">$1,000</span>
                  </div>
                  <div className="pt-2 pb-4">
                    <ul className="space-y-3">
                      <li className="flex">
                        <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">1 Banquet Ticket</span>
                      </li>
                      <li className="flex">
                        <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">1 Event Ticket</span>
                      </li>
                      <li className="flex">
                        <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Name listed in Souvenir</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="px-6 pb-8 mt-auto">
                  <Link 
                    href="/sponsors" 
                    className="block w-full text-center py-3 px-4 rounded-lg text-white font-medium transition-colors bg-[#A0522D]"
                  >
                    Buy
                  </Link>
                </div>
              </div>
            </div>

            {/* Silver Package */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#71797E]/5 to-[#71797E]/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden h-full border border-gray-100 transform group-hover:scale-105 transition-transform duration-300">
                <div className="px-6 pt-8 pb-6">
                  <h3 className="text-2xl font-bold mb-1 text-[#71797E]">Silver</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-extrabold text-gray-900">$2,500</span>
                  </div>
                  <div className="pt-2 pb-4">
                    <ul className="space-y-3">
                      <li className="flex">
                        <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">2 Banquet Tickets</span>
                      </li>
                      <li className="flex">
                        <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">4 Event Tickets</span>
                      </li>
                      <li className="flex">
                        <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Name listed in Souvenir</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="px-6 pb-8 mt-auto">
                  <Link 
                    href="/sponsors" 
                    className="block w-full text-center py-3 px-4 rounded-lg text-white font-medium transition-colors bg-[#71797E]"
                  >
                    Buy
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/sponsors" 
              className="inline-block px-6 py-4 bg-[#732424] text-white font-semibold rounded-lg hover:bg-[#5a1c1c] transition-colors"
            >
              View All Ticket Options
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us for This Unforgettable Event</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Celebrate our culture, connect with our community, and create lasting memories at the Kshatriya (KANA) National Event 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/register" 
                className="px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1"
              >
                Get Your Tickets
              </Link>
              <Link 
                href="/schedule" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg shadow-md hover:bg-white/10 transition-all transform hover:-translate-y-1"
              >
                View Full Schedule
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}