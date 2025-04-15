import Link from 'next/link';
import RotatingSponsorsPage from '../../components/RotatingSponsorsPage';
import { PageLayout } from '../../components/ui/PageLayout';

// Sponsorship packages
const sponsorshipTiers = [
  {
    name: 'Platinum Sponsor',
    price: '₹50,000',
    color: '#732424',
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
    color: '#9E3030',
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
    color: '#4B5563',
    benefits: [
      'Logo placement on event website',
      'VIP access for 2 representatives',
      'Quarter-page advertisement in event brochure',
    ],
  },
  {
    name: 'Bronze Sponsor',
    price: '₹5,000',
    color: '#CD7F32',
    benefits: [
      'Logo placement on event website',
      'VIP access for 1 representative',
      'Mention in event brochure',
    ],
  },
];

export default function SponsorsPage() {
  return (
    <PageLayout maxWidth="full">
      {/* Hero section with background image and overlay */}
      <div className="relative bg-[#732424] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#732424] to-[#9E3030] opacity-90"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        
        <div className="relative container mx-auto px-4 py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">Partner With Us</h1>
            <p className="text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-red-50 text-[#732424] rounded-full text-sm font-medium mb-3">Our Sponsors</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Organizations That Support Us</h2>
            <div className="w-24 h-1 bg-[#732424] mx-auto"></div>
          </div>
          
          <RotatingSponsorsPage />
        </div>
      </section>

      {/* Separator with decorative elements */}
      <div className="relative py-16 bg-gray-50">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <div className="w-32 h-1 bg-[#732424]"></div>
        </div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Why Become a Sponsor?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your sponsorship helps make our event possible while providing your brand with visibility to our engaged community.
          </p>
        </div>
        
        {/* Benefits of sponsorship */}
        <div className="container mx-auto px-4 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#732424]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
              <p className="text-gray-600">Connect with a dedicated community of attendees and build lasting relationships.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#732424]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Brand Visibility</h3>
              <p className="text-gray-600">Showcase your brand across our event materials, website, and social media channels.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#732424]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cultural Support</h3>
              <p className="text-gray-600">Demonstrate your commitment to cultural events and community development.</p>
            </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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