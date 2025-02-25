import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

const sponsors = {
  platinum: [
    { name: 'Company A', logo: '/sponsors/placeholder.png', website: '#' },
    { name: 'Company B', logo: '/sponsors/placeholder.png', website: '#' },
  ],
  gold: [
    { name: 'Company C', logo: '/sponsors/placeholder.png', website: '#' },
    { name: 'Company D', logo: '/sponsors/placeholder.png', website: '#' },
    { name: 'Company E', logo: '/sponsors/placeholder.png', website: '#' },
  ],
  silver: [
    { name: 'Company F', logo: '/sponsors/placeholder.png', website: '#' },
    { name: 'Company G', logo: '/sponsors/placeholder.png', website: '#' },
    { name: 'Company H', logo: '/sponsors/placeholder.png', website: '#' },
    { name: 'Company I', logo: '/sponsors/placeholder.png', website: '#' },
  ],
};

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
];

export default function SponsorsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-16">Our Sponsors</h1>

          {/* Current Sponsors */}
          <section className="mb-20">
            <div className="space-y-16">
              <div>
                <h2 className="text-2xl font-bold text-center mb-8 text-purple-300">Platinum Sponsors</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {sponsors.platinum.map((sponsor, index) => (
                    <Link
                      key={index}
                      href={sponsor.website}
                      className="bg-white/10 rounded-lg p-8 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={200}
                        height={100}
                        className="object-contain"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-center mb-8 text-yellow-300">Gold Sponsors</h2>
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {sponsors.gold.map((sponsor, index) => (
                    <Link
                      key={index}
                      href={sponsor.website}
                      className="bg-white/10 rounded-lg p-6 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={150}
                        height={75}
                        className="object-contain"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-center mb-8 text-gray-300">Silver Sponsors</h2>
                <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {sponsors.silver.map((sponsor, index) => (
                    <Link
                      key={index}
                      href={sponsor.website}
                      className="bg-white/10 rounded-lg p-4 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        width={100}
                        height={50}
                        className="object-contain"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Sponsorship Opportunities */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12">Sponsorship Opportunities</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {sponsorshipTiers.map((tier, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700"
                >
                  <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                  <div className="text-3xl font-bold text-purple-400 mb-6">{tier.price}</div>
                  <ul className="space-y-3 text-gray-300">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <span className="text-purple-400 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-8 block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    Become a Sponsor
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
} 