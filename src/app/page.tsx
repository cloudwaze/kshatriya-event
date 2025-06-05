'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import { PageLayout } from '../components/ui/PageLayout';

const zeffyLinks = {
  mainEvent: 'https://www.zeffy.com/ticketing/cultural-event-tickets-national-event--2025',
  banquet: 'https://www.zeffy.com/ticketing/banquet-tickets-national-event--2025',
  sponsorshipPackages: 'https://www.zeffy.com/ticketing/sponsorship-packages-6',
  donate: 'https://www.zeffy.com/fundraising/donate-to-make-a-difference-15110',
};

export default function Home() {
  // Event date - December 20, 2025
  const eventDate = new Date('2025-12-20T00:00:00');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is in view, play it
            video.play().catch((error) => {
              console.log('Autoplay failed:', error);
            });
          } else {
            // Video is out of view, pause it
            video.pause();
          }
        });
      },
      {
        threshold: 0.3, // Play when 30% of video is visible
      }
    );

    observer.observe(video);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <PageLayout maxWidth="full">
      {/* Hero Section - Enhanced Design */}
      <div className="relative min-h-[80vh] flex items-center bg-[rgb(87,4,4)]">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(87,4,4)] to-[rgb(105,4,4)] opacity-100"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        
        {/* Hero Content */}
        <div className="container relative mx-auto px-4 py-20 flex flex-col items-center justify-center text-center z-10">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
            The Kshatriyas National Event
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl font-semibold text-[#FDB347] mb-10 max-w-2xl mx-auto drop-shadow-md whitespace-nowrap">
            Connect Generations<span className="mx-2">,</span> Celebrate Heritage<span className="mx-2">,</span> Contribute Growth
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
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Get Your Tickets
            </Link>
            <a 
              href="https://www.hilton.com/en/attend-my-event/thekshatriyasnationalevent-dallas2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Book Your Hotel
            </a>
            <Link 
              href="/sponsors" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Sponsorship Packages
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

      {/* Hotel Information - Moved to top */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Image Section */}
                <div className="relative h-[400px] md:h-auto">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || '/kshatriya-event'}/images/hotel.jpg`}
                    alt="Frisco Embassy Suites Hotel"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Content Section */}
                <div className="p-8 md:p-12">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-[#732424] mb-4">Book Your Stay</h2>
                    <div className="w-24 h-1 bg-[#732424] mb-6"></div>
                    <p className="text-lg text-gray-600">
                      Reserve your room at our event hotel
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Frisco Embassy Suites Hotel</h3>
                    <p className="text-gray-600 mb-6">
                      Special event rates available for attendees.
                    </p>
                    
                    {/* Sponsorship Call-out Box */}
                    <div className="bg-gradient-to-r from-[#732424]/10 to-[#FDB347]/10 border-l-4 border-[#732424] rounded-lg p-4 mb-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-3">
                          <svg className="w-6 h-6 text-[#732424]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-[#732424] font-semibold text-lg mb-1">Sponsorship Packages Available!</p>
                          <p className="text-gray-700">
                            Support our Community with a sponsorship donation to our{' '}
                            <Link 
                              href="/sponsors" 
                              className="text-[#732424] hover:text-[#5a1c1c] underline font-bold transition-colors"
                            >
                              Sponsorship Packages
                            </Link>
                            {' '}and earn <span className="font-bold text-[#732424]">free Hotel Stays</span> based on the level of Sponsorship.
                          </p>
                        </div>
                      </div>
                    </div>

                    <a 
                      href="https://www.hilton.com/en/attend-my-event/thekshatriyasnationalevent-dallas2025/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-4 bg-[#732424] text-white font-semibold rounded-lg hover:bg-[#5a1c1c] transition-colors flex items-center justify-center gap-2 w-full md:w-auto"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      Book Your Stay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gradient-to-br from-[#732424]/5 via-white to-[#732424]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-red-50 text-[#732424] rounded-full text-sm font-medium mb-3">Experience Our Event</span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 whitespace-nowrap">Here's a glimpse to know about The Kshatriyas National Event</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get a glimpse of what makes our community special and discover the rich traditions we celebrate together
              </p>
              <div className="w-24 h-1 bg-[#FDB347] mx-auto mt-8"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-4">
                <div className="relative rounded-xl overflow-hidden bg-gray-900">
                  <video 
                    className="w-full h-auto max-h-[500px] object-cover"
                    controls
                    muted
                    loop
                    playsInline
                    poster={`${process.env.NEXT_PUBLIC_BASE_PATH || '/kshatriya-event'}/images/main-event.jpg`}
                    preload="metadata"
                    ref={videoRef}
                  >
                    <source 
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || '/kshatriya-event'}/images/home_video.mp4`} 
                      type="video/mp4" 
                    />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Overlay for styling */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FDB347] rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#732424] rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 bg-gradient-to-r from-[#732424]/5 to-[#732424]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-28 h-28 bg-gradient-to-br from-[#732424]/10 to-[#732424]/20 rounded-full flex items-center justify-center">
                      <svg className="w-14 h-14 text-[#732424]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4 text-center md:text-left">
                    <span className="inline-block px-3 py-1 bg-red-50 text-[#732424] rounded-full text-sm font-medium mb-2">Support Our Community</span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Make a Donation</h2>
                    <p className="text-lg text-gray-700 mb-6">
                      Support our Community with a donation of any amount. Your contribution helps us create a memorable experience for the Kshatriya community and supports our cultural initiatives.
                    </p>
                    
                    <div className="bg-green-50 rounded-lg p-4 mb-6">
                      <div className="flex items-center mb-2">
                        <svg className="h-5 w-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-green-800 font-semibold">Tax Deductible</span>
                      </div>
                      <p className="text-green-700 text-sm">
                        All donations are tax-deductible under Section 501(c)(3) of the Internal Revenue Code. You will receive a tax receipt.
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                      <a 
                        href={zeffyLinks.donate} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block px-8 py-3 bg-[#732424] text-white rounded-lg font-semibold hover:bg-[#9E3030] transition-colors flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>Donate Now</span>
                      </a>
                      <Link 
                        href="/contact-us" 
                        className="inline-block px-8 py-3 border-2 border-[#732424] text-[#732424] rounded-lg font-semibold hover:bg-[#732424]/5 transition-colors"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                Support our Community with a ticket purchase for you and your family to enjoy everything our national event has to offer.
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
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || '/kshatriya-event'}/images/cultutral_event.jpg`}
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
                Support our Community with a ticket purchase for you and your family to enjoy everything our national event has to offer.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <a 
                    href={zeffyLinks.mainEvent}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 text-center bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors"
                  >
                    Buy
                  </a>
                </div>
              </div>
              
              {/* Banquet Package */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ring-2 ring-[#FDB347] ring-opacity-50">
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
                  <a 
                    href={zeffyLinks.banquet}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 text-center bg-[#FDB347] text-white font-semibold rounded-lg hover:bg-[#FDB347]/90 transition-colors"
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/register" 
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
              Support our Community with a sponsorship partnership and gain recognition while supporting our cultural heritage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Bronze Package */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B4513]/5 to-[#8B4513]/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden h-full border border-gray-100 transform group-hover:scale-105 transition-transform duration-300">
                <div className="px-6 pt-8 pb-6">
                  <h3 className="text-2xl font-bold mb-1 text-[#8B4513]">Bronze Sponsor</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-extrabold text-gray-900">$1,000</span>
                    <span className="ml-2 text-sm text-gray-500">Value: $250</span>
                  </div>
                  <div className="pt-2 pb-4">
                    <ul className="space-y-3">
                      <li className="flex">
                        <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">1 Banquet Ticket ($150)</span>
                      </li>
                      <li className="flex">
                        <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">2 Event Tickets ($100)</span>
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
                  <a 
                    href={zeffyLinks.sponsorshipPackages}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 px-4 rounded-lg text-white font-medium transition-colors bg-[#8B4513]"
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>

            {/* Silver Package */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#71797E]/5 to-[#71797E]/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden h-full border border-gray-100 transform group-hover:scale-105 transition-transform duration-300">
                <div className="px-6 pt-8 pb-6">
                  <h3 className="text-2xl font-bold mb-1 text-[#71797E]">Silver Sponsor</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-extrabold text-gray-900">$2,500</span>
                    <span className="ml-2 text-sm text-gray-500">Value: $700</span>
                  </div>
                  <div className="pt-2 pb-4">
                    <ul className="space-y-3">
                      <li className="flex">
                        <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">2 Banquet Tickets ($300)</span>
                      </li>
                      <li className="flex">
                        <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">4 Event Tickets ($200)</span>
                      </li>
                      <li className="flex">
                        <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">1 Hotel Room for 1 Night ($200)</span>
                      </li>
                      <li className="flex">
                        <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Quarter Page Ad in Souvenir</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="px-6 pb-8 mt-auto">
                  <a 
                    href={zeffyLinks.sponsorshipPackages}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 px-4 rounded-lg text-white font-medium transition-colors bg-[#71797E]"
                  >
                    Buy
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/sponsors" 
              className="inline-block px-6 py-4 bg-[#732424] text-white font-semibold rounded-lg hover:bg-[#5a1c1c] transition-colors"
            >
              View Sponsorship Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Things to Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-red-50 text-[#732424] rounded-full text-sm font-medium mb-3">Travel & Explore</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Travel Information & Things to Do</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Plan your visit to the Kshatriya National Event with our comprehensive travel guide and discover the best of Dallas-Fort Worth
            </p>
            <div className="w-24 h-1 bg-[#FDB347] mx-auto mt-8"></div>
          </div>

          {/* Travel Information */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#732424] mb-6">Getting Here</h3>
              
              {/* Airports */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Nearest Airports</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-[#FDB347] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h5 className="font-semibold text-gray-900">Dallas Fort Worth International (DFW)</h5>
                      <p className="text-gray-600">~25 miles (~30-35 mins drive)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-[#FDB347] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h5 className="font-semibold text-gray-900">Dallas Love Field (DAL)</h5>
                      <p className="text-gray-600">~22 miles (~30-35 mins drive)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transportation */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Transportation Options</h4>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Uber</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Lyft</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Rental Cars</span>
                  <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Local Shuttles</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Nearby Attractions */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#732424]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-[#732424]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#732424] mb-4 text-center">Nearby Attractions</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#FDB347] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Legacy West (Plano)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#FDB347] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  PGA Frisco
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#FDB347] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Grandscape
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#FDB347] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Universal Kids Resort (Coming Soon)
                </li>
              </ul>
            </div>

            {/* Dallas Attractions */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#732424]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-[#732424]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#732424] mb-4 text-center">Dallas Attractions</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#FDB347] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  The Sixth Floor Museum
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#FDB347] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Dallas Museum of Art
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#FDB347] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Perot Museum
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#FDB347] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Deep Ellum
                </li>
              </ul>
            </div>

            {/* Fort Worth Attractions */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#732424]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-[#732424]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#732424] mb-4 text-center">Fort Worth Attractions</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#FDB347] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fort Worth Stockyards
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#FDB347] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sundance Square
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#FDB347] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Fort Worth Zoo
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#FDB347] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Modern Art Museum
                </li>
              </ul>
            </div>
          </div>

          {/* Tourism Resources */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              For more information about attractions and activities in the Dallas-Fort Worth area, visit the official tourism websites:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.visitdallas.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-[#732424] text-white font-semibold rounded-lg hover:bg-[#5a1c1c] transition-colors"
              >
                Dallas Tourism
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a 
                href="https://www.fortworth.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 border-2 border-[#732424] text-[#732424] font-semibold rounded-lg hover:bg-[#732424]/5 transition-colors"
              >
                Fort Worth Tourism
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us at the Kshatriya National Event</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Be part of this historic gathering. Register now to secure your spot and join us in celebrating our heritage, culture, and community.
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
              <a 
                href={zeffyLinks.donate}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#FDB347] text-white font-bold rounded-lg shadow-md hover:bg-[#FDB347]/90 transition-all transform hover:-translate-y-1"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}