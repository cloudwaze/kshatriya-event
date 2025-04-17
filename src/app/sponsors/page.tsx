'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { PageLayout } from '../../components/ui/PageLayout';

// Sponsorship packages
const sponsorshipTiers = [
  {
    id: 'diamond',
    name: 'Diamond Sponsor',
    price: '$15,000',
    color: '#1F52A4', // Deep blue
    valueIncluded: '$2,500',
    benefits: [
      'Includes 3 hotel rooms for 2 nights',
      '6 Banquet Tickets and 6 Event Tickets',
      'Full page in Brochure for business',
      'Call on stage and facilitated with shawl',
      'Premium logo placement on all event materials',
      'Speaking opportunity at main event',
      'Exhibition booth in prime location'
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum Sponsor',
    price: '$10,000',
    color: '#732424', // Maroon
    valueIncluded: '$2,000',
    benefits: [
      'Includes 2 hotel rooms for 2 nights',
      '4 Banquet Tickets and 4 Event Tickets',
      'Full page in Brochure for business',
      'Call on stage and facilitated with shawl',
      'Premium logo placement on event materials',
      'Exhibition booth in prime location'
    ],
  },
  {
    id: 'gold',
    name: 'Gold Sponsor',
    price: '$7,500',
    color: '#9E3030', // Lighter maroon
    valueIncluded: '$1,500',
    benefits: [
      'Includes 1 hotel room for 2 nights',
      '4 Banquet Tickets and 4 Event Tickets',
      'Half a page in Brochure for their business',
      'Call on stage and facilitated with shawl',
      'Logo placement on event materials',
      'Exhibition booth'
    ],
  },
  {
    id: 'silver',
    name: 'Silver Sponsor',
    price: '$5,000',
    color: '#4B5563', // Gray
    valueIncluded: '$1,200',
    benefits: [
      'Includes 1 hotel room for 2 nights',
      '4 Banquet Tickets and 4 Event Tickets',
      'Quarter page ad or picture in Brochure',
      'Logo placement on event website',
      'Recognition during the event'
    ],
  },
  {
    id: 'bronze',
    name: 'Bronze Sponsor',
    price: '$2,500',
    color: '#CD7F32', // Bronze
    valueIncluded: '$500',
    benefits: [
      'Includes 2 Banquet Tickets and 4 Event Tickets',
      'Name will be listed in the Brochure',
      'Logo placement on event website',
      'Recognition during the event'
    ],
  },
  {
    id: 'basic',
    name: 'Basic Sponsor',
    price: '$1,000',
    color: '#6B7280', // Light gray
    valueIncluded: '$350',
    benefits: [
      'Includes 1 Banquet Ticket and 4 Event Tickets',
      'Name will be listed in the Brochure',
      'Logo placement on event website'
    ],
  },
];

// Sample sponsorship categories for the UI display
const sponsorCategories = ['diamond', 'platinum', 'gold', 'silver', 'bronze', 'basic'];

// Dummy sponsors data
const dummySponsors = {
  diamond: [
    // Diamond sponsors will appear here
  ],
  platinum: [
    { id: 1, name: 'TechCorp Industries', logo: '/placeholder.jpg', website: 'example.com' }
  ],
  gold: [
    // Gold sponsors will appear here
  ],
  silver: [
    // Silver sponsors will appear here
  ],
  bronze: [
    // Bronze sponsors will appear here
  ],
  basic: [
    // Basic sponsors will appear here
  ]
};

export default function SponsorsPage() {
  const [activeTier, setActiveTier] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('platinum');

  const handleTierClick = (tierId: string) => {
    setActiveTier(tierId === activeTier ? null : tierId);
  };

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

      {/* Current sponsors section */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <span className="text-sm text-[#732424] font-medium">Our Sponsors</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-1 mb-8">Organizations That Support Us</h2>
          </div>
          
          {/* Sponsor category tabs */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex overflow-hidden border border-gray-200 rounded-lg">
              {sponsorCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-4 py-2 text-sm font-medium capitalize ${
                    activeTab === category 
                      ? 'bg-[#732424] text-white' 
                      : 'bg-white text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Sponsor category title */}
          <h3 className="text-xl font-bold text-center mb-8 text-[#732424] capitalize">
            {activeTab} Sponsors
          </h3>
          
          {/* Sponsors grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {dummySponsors[activeTab as keyof typeof dummySponsors]?.map((sponsor) => (
              <div key={sponsor.id} className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                <div className="p-6 flex items-center justify-center">
                  {/* Placeholder for sponsor logo */}
                  <div className="w-full h-32 bg-gray-100 flex items-center justify-center">
                    {sponsor.logo ? (
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[#732424] font-medium">{sponsor.name}</span>
                        </div>
                      </div>
                    ) : (
                      <span className="text-gray-400">{sponsor.name}</span>
                    )}
                  </div>
                </div>
                {sponsor.website && (
                  <div className="p-2 text-center text-sm text-gray-500">
                    {sponsor.website}
                  </div>
                )}
              </div>
            ))}
            
            {/* Show message if no sponsors in category */}
            {(!dummySponsors[activeTab as keyof typeof dummySponsors] || 
              dummySponsors[activeTab as keyof typeof dummySponsors].length === 0) && (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500">No {activeTab} sponsors yet.</p>
              </div>
            )}
          </div>
          
          {/* Apply as sponsor CTA */}
          <div className="mt-10 max-w-4xl mx-auto bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-gray-600 mb-4">Interested in becoming a {activeTab} sponsor?</p>
            <button 
              onClick={() => handleTierClick(activeTab)}
              className="px-6 py-2 bg-[#732424] text-white font-medium rounded-lg hover:bg-[#5a1c1c] transition-colors"
            >
              Apply as {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Sponsor
            </button>
          </div>
        </div>
      </section>

      {/* Why become a sponsor section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="w-24 h-1 bg-[#732424] mx-auto mb-6"></div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Become a {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Sponsor?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Your sponsorship helps make our event possible while providing your brand with visibility to our engaged community.
            </p>
          </div>
          
          {/* Specific sponsorship tier details */}
          {sponsorshipTiers.filter(tier => tier.id === activeTab).map((tier) => (
            <div key={tier.id} className="max-w-3xl mx-auto mb-16 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{tier.name} - {tier.price}</h3>
                  <p className="text-sm text-gray-500 mt-1">Total Value Included: {tier.valueIncluded}</p>
                </div>
                
                <div className="space-y-3 mt-4">
                  {tier.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start">
                      <svg className="h-5 w-5 text-[#732424] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <button
                    className="px-5 py-2 bg-[#732424] text-white font-medium rounded-lg hover:bg-[#5a1c1c] transition-colors"
                  >
                    Become a {tier.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-[#732424]/5 to-[#732424]/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden h-full border border-gray-100 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="px-6 pt-8 pb-6">
                    <h3 className="text-2xl font-bold mb-1" style={{ color: tier.color }}>{tier.name}</h3>
                    <div className="flex items-baseline mb-6">
                      <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
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
                    <Link 
                      href="/contact-us" 
                      className="block w-full text-center py-3 px-4 rounded-lg text-white font-medium transition-colors"
                      style={{ backgroundColor: tier.color }}
                    >
                      Become a Sponsor
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
            <svg className="text-gray-200 fill-current w-16 h-16 absolute top-6 left-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <div className="text-center pt-10">
              <p className="text-xl text-gray-600 italic mb-8 relative z-10">
                &quot;Sponsoring the Kshatriya Event was one of our best marketing decisions. Not only did we connect with many new customers, but we also formed valuable relationships within the community.&quot;
              </p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-[#732424] rounded-full flex items-center justify-center text-white font-bold text-xl">P</div>
                <div className="ml-4 text-left">
                  <p className="font-semibold">Priya Sharma</p>
                  <p className="text-sm text-gray-500">Marketing Director, Previous Sponsor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-gradient-to-r from-[#732424] to-[#9E3030] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Support Our Event?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Contact us today to secure your sponsorship package and make a meaningful impact on our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact-us" 
              className="px-8 py-4 bg-white text-[#732424] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="mailto:sponsors@kshatriya-event.org" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 