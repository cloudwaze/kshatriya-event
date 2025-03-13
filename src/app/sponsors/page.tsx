import Link from 'next/link';
import RotatingSponsorsPage from '@/components/RotatingSponsorsPage';

// Sponsorship packages
const sponsorshipTiers = [
  {
    name: 'Platinum Sponsor',
    price: '₹50,000',
    benefits: [
      'Premium logo placement on all event materials',
      'VIP access for 5 representatives',
      'Speaking opportunity at main event',
      'Exhibition booth in prime location',
      'Full-page advertisement in event brochure',
    ],
  },
  {
    name: 'Gold Sponsor',
    price: '₹30,000',
    benefits: [
      'Logo placement on event materials',
      'VIP access for 3 representatives',
      'Exhibition booth',
      'Half-page advertisement in event brochure',
    ],
  },
  {
    name: 'Silver Sponsor',
    price: '₹15,000',
    benefits: [
      'Logo placement on event website',
      'VIP access for 2 representatives',
      'Quarter-page advertisement in event brochure',
    ],
  },
  {
    name: 'Bronze Sponsor',
    price: '₹5,000',
    benefits: [
      'Logo placement on event website',
      'VIP access for 1 representative',
      'Mention in event brochure',
    ],
  },
];

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-white text-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16">Our Sponsors</h1>
        
        {/* Add the RotatingSponsorsPage component */}
        <RotatingSponsorsPage />
        
        {/* Sponsorship Opportunities */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Sponsorship Opportunities</h2>
          
          {/* Sponsorship Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <div 
                key={index}
                className="border rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
              >
                <div className="bg-[#732424] text-white p-4 text-center">
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                  <p className="text-2xl font-bold mt-2">{tier.price}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-[#732424] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href="/contact-us" className="block w-full text-center bg-[#732424] hover:bg-[#5a1c1c] text-white font-semibold py-2 px-4 rounded transition-colors">
                      Become a Sponsor
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Call to action */}
        <div className="mt-16 bg-gray-100 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Interested in becoming a sponsor?</h3>
          <p className="mb-6 max-w-2xl mx-auto">Join us in making the Kshatriya Event 2025 a memorable occasion. Your support helps us create a stronger community and provides you with excellent exposure.</p>
          <Link href="/contact-us" className="inline-block bg-[#732424] hover:bg-[#5a1c1c] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
} 