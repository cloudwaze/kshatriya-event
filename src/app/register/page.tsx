'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PageLayout } from '../../components/ui/PageLayout';

const zeffyLinks = {
  mainEvent: 'https://www.zeffy.com/ticketing/cultural-event-tickets-national-event--2025',
  banquet: 'https://www.zeffy.com/en-US/ticketing/banquet-tickets-national-event--2025',
  matrimony: 'https://zeffy.com/matrimony-placeholder',
  booth: 'https://zeffy.com/booth-placeholder',
  donate: 'https://www.zeffy.com/en-US/fundraising/donate-to-make-a-difference-15110',
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
              Purchase your tickets for the Kshatriya National Event 2025.
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
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <p className="text-gray-700 mb-4">Evening banquet. <span className="font-semibold text-green-700">Age 21 and above</span>. Includes gourmet dinner.</p>
            <a href={zeffyLinks.banquet} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">Buy</a>
        </div>
        {/* Matrimony */}
        {/* <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-primary mb-2">Matrimony</h2>
          <p className="text-2xl font-bold text-secondary mb-2">$250 <span className="text-base font-normal">/family</span></p>
          <p className="text-gray-700 mb-4">Participate in the exclusive matrimonial event for families.</p>
            <div className="px-6 py-2 bg-gray-100 text-gray-600 rounded-lg font-medium text-center">
              Registrations will open after summer
            </div>
        </div> */}
        {/* Booth */}
        {/* <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-primary mb-2">Booth</h2>
          <p className="text-2xl font-bold text-secondary mb-2">$250</p>
          <p className="text-gray-700 mb-4">Includes one table and two chairs. Bring your own materials.</p>
            <a href={zeffyLinks.booth} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">Buy</a>
          </div> */}
        </div>
        
        {/* Hotel Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Official Event Hotel</h3>
            
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Frisco Embassy Suites Hotel</h4>
                  <p className="text-gray-600 mb-4">
                    Enjoy a comfortable stay at our official event hotel, featuring spacious suites and complimentary breakfast.
                  </p>
                  <div className="bg-[#732424]/5 rounded-lg p-4 mb-6">
                    <p className="text-[#732424] font-semibold">Special discount available for event attendees</p>
                    <p className="text-gray-600 text-sm">Contact hotel for rates and availability</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="https://www.hilton.com/en/attend-my-event/thekshatriyasnationalevent-dallas2025/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors"
                    >
                      Book Your Hotel
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Make a Donation Section - Same as Home Page */}
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