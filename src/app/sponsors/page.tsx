'use client';

import Link from 'next/link';
import { PageLayout } from '../../components/ui/PageLayout';

// Sponsorship packages
const sponsorshipTiers = [
  {
    id: 'bronze',
    name: 'Bronze Sponsor',
    price: '$1,000',
    color: '#8B4513', // Rich bronze color
    valueIncluded: '$250',
    benefits: [
      '1 Banquet Ticket ($150)',
      '2 Event Tickets ($100)',
      'Name will be listed in the Souvenir'
    ],
  },
  {
    id: 'silver',
    name: 'Silver Sponsor',
    price: '$2,500',
    color: '#71797E', // Elegant silver
    valueIncluded: '$700',
    benefits: [
      '2 Banquet Tickets ($300)',
      '4 Event Tickets ($200)',
      '1 Hotel Room for 1 Night ($200)',
      'Quarter Page Ad or Photo in the Souvenir'
    ],
  },
  {
    id: 'gold',
    name: 'Gold Sponsor',
    price: '$5,000',
    color: '#B8860B', // Classic gold
    valueIncluded: '$1,000',
    benefits: [
      '2 Banquet Tickets ($300)',
      '6 Event Tickets ($300)',
      '1 Hotel Room for 2 Nights ($400)',
      'Half-Page Ad or Photo in the Souvenir',
      'Business featured on venue TVs/monitors',
      '10-second ad spots played repeatedly'
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum Sponsor',
    price: '$10,000',
    color: '#6A5ACD', // Sophisticated platinum
    valueIncluded: '$2,000',
    benefits: [
      '6 Banquet Tickets ($900)',
      '6 Event Tickets ($300)',
      '2 Hotel Rooms for 2 Nights ($800)',
      'Full-Page Ad or Photo in the Souvenir',
      'Business featured on venue TVs/monitors',
      '20-second ad spots played repeatedly'
    ],
  },
];

const zeffyLinks = {
  sponsorshipPackages: 'https://www.zeffy.com/ticketing/sponsorship-packages-6',
  banquetTickets: 'https://www.zeffy.com/ticketing/banquet-tickets-national-event--2025',
  eventTickets: 'https://www.zeffy.com/ticketing/cultural-event-tickets-national-event--2025',
  donate: 'https://www.zeffy.com/fundraising/donate-to-make-a-difference-15110',
};

export default function SponsorsPage() {
  return (
    <PageLayout maxWidth="full">
      {/* Hero section with background image and overlay */}
      <div className="relative bg-[#732424] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#732424] to-[#9E3030] opacity-90"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Partner With Us</h1>
            <p className="text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              Join our community of sponsors and gain valuable brand exposure while supporting our cultural celebration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="#packages" 
                className="px-8 py-3 bg-white text-[#732424] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                View Packages
              </Link>
              <Link 
                href="/contact-us" 
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative wave divider */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white fill-current">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </div>

      {/* Tax Exemption Information */}
      <div className="bg-green-50 py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center mb-3">
              <svg className="h-6 w-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-xl font-bold text-green-800">Tax Exemption Information</h2>
            </div>
            <p className="text-green-700">
              All sponsorship contributions are tax-deductible under Section 501(c)(3) of the Internal Revenue Code. 
              You will receive a tax receipt for your donation.
            </p>
          </div>
                    </div>
                </div>

      {/* Sponsorship packages section */}
      <section id="packages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-red-50 text-[#732424] rounded-full text-sm font-medium mb-3">Sponsorship Packages</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Level of Partnership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the sponsorship tier that aligns with your organization&apos;s goals and budget
            </p>
          </div>
          
          <div>
            {/* Sponsorship packages - 2x2 grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {sponsorshipTiers.map((tier, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#732424]/5 to-[#732424]/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden h-full border border-gray-100 transform group-hover:scale-105 transition-transform duration-300">
                    <div className="px-6 pt-8 pb-6">
                      <h3 className="text-2xl font-bold mb-1" style={{ color: tier.color }}>{tier.name}</h3>
                      <div className="flex items-baseline mb-6">
                        <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                        <span className="ml-2 text-sm text-gray-500">Included Value: {tier.valueIncluded}</span>
                      </div>
                      <div className="pt-2 pb-4">
                        <ul className="space-y-3">
                          {tier.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex">
                              <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="px-6 pb-8 mt-auto">
                      <a 
                        href={zeffyLinks.sponsorshipPackages}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center py-3 px-4 rounded-lg text-white font-medium transition-colors"
                        style={{ backgroundColor: tier.color }}
                      >
                        Buy
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Custom Donation Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#732424]/10 to-[#732424]/20 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transform group-hover:scale-[1.02] transition-transform duration-300">
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
                      <span className="inline-block px-3 py-1 bg-red-50 text-[#732424] rounded-full text-sm font-medium mb-2">Custom Support</span>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">Make a Donation</h2>
                      <p className="text-lg text-gray-700 mb-8">
                        Support our cultural event with a donation of any amount. Your contribution helps us create a memorable experience for the Kshatriya community and supports our cultural initiatives. All donations are tax-deductible under our 501(c)(3) status.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-2">
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
                      
                      <p className="text-sm text-gray-500 mt-4">
                        For questions about donations or to discuss custom sponsorship opportunities, please contact our sponsorship team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 