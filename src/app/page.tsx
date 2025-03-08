import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#FFEBEE] to-white text-black">
        {/* Hero Section with Image */}
        <div className="relative w-full h-[95vh] md:h-screen overflow-hidden bg-white">
          <div className="absolute inset-0 flex items-center">
            {/* Left Side Image */}
            <div className="w-1/2 h-full relative p-8">
              <div className="absolute inset-0 m-8">
                <Image
                  src="/images/Picture1.jpg"
                  alt="Hero Image"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="w-1/2 h-full flex items-center justify-center px-12">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#D32F2F]">
                  Kshatriya Event 2025
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800">
                  15 March - 17 March
                </h2>
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl mb-4 text-gray-700">
                    Conference: 15 March | <span className="text-[#D32F2F]">Venue Name</span>
                  </p>
                  <p className="text-xl md:text-2xl text-gray-700">
                    Workshop: 16-17 March | <span className="text-[#D32F2F]">Workshop Venue</span>
                  </p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-8 md:mt-12">
                  <Link 
                    href="/register" 
                    className="px-8 py-4 bg-[#D32F2F] text-white font-bold text-lg rounded-full shadow-lg hover:bg-[#FF5252] transform hover:scale-105 transition-all duration-300"
                  >
                    Register Now
                  </Link>
                  <Link 
                    href="/retrieve-pass" 
                    className="px-8 py-4 bg-white text-[#D32F2F] font-bold text-lg rounded-full shadow-lg border-2 border-[#D32F2F] hover:bg-[#FFEBEE] transform hover:scale-105 transition-all duration-300"
                  >
                    Retrieve Pass
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Keynote Speakers Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFEBEE] to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#D32F2F]">
              Meet Our Keynote Speakers
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Speaker 1 */}
              <div className="group bg-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-[#FF5252]/10">
                <div className="relative mb-4">
                  <div className="aspect-square relative overflow-hidden rounded-xl max-w-[280px] mx-auto">
                    <Image
                      src="/images/Antonyshawimage.jpg"
                      alt="Anthony Shaw"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white">
                    <h3 className="text-xl font-bold">Anthony Shaw</h3>
                    <p className="text-white/90">Python Advocacy Lead</p>
                  </div>
                </div>
                <div className="flex justify-center space-x-4">
                  {/* Social Icons */}
                  <a href="#" className="w-10 h-10 rounded-full bg-[#D32F2F] text-white flex items-center justify-center hover:bg-[#FF5252] transition-colors">
                    <span className="sr-only">Twitter</span>
                    🌐
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#D32F2F] text-white flex items-center justify-center hover:bg-[#FF5252] transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    💼
                  </a>
                </div>
              </div>

              {/* Speaker 2 */}
              <div className="group bg-white rounded-xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-[#FF5252]/10">
                <div className="relative mb-4">
                  <div className="aspect-square relative overflow-hidden rounded-xl max-w-[280px] mx-auto">
                    <Image
                      src="/images/PrabhakaranImage.jpg"
                      alt="Bowrna Prabhakaran"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white">
                    <h3 className="text-xl font-bold">Bowrna Prabhakaran</h3>
                    <p className="text-white/90">Software Developer</p>
                  </div>
                </div>
                <div className="flex justify-center space-x-4">
                  {/* Social Icons */}
                  <a href="#" className="w-10 h-10 rounded-full bg-[#D32F2F] text-white flex items-center justify-center hover:bg-[#FF5252] transition-colors">
                    <span className="sr-only">Twitter</span>
                    🌐
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#D32F2F] text-white flex items-center justify-center hover:bg-[#FF5252] transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    💼
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#D32F2F]">Our Sponsors</h2>
            <div className="w-24 h-1 bg-[#FF5252] mx-auto mb-16"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { src: '/images/sponser1Image.jpg', alt: 'LangDB' },
                { src: '/images/Sponser2Image.JPG', alt: 'Cognida.ai' },
                { src: '/images/sponsers2Image.JPG', alt: 'Storable' },
                { src: '/images/sponser4Image.JPG', alt: 'Tiger Analytics' },
              ].map((sponsor, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="aspect-video relative">
                    <Image
                      src={sponsor.src}
                      alt={sponsor.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-24 bg-gradient-to-b from-white to-[#FFEBEE]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/AboutusImage.png"
                    alt="About Us"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold text-[#D32F2F]">About Us</h2>
                <div className="w-20 h-1 bg-[#FF5252]"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Kshatriya Event 2025 is a grand gathering that celebrates culture, heritage, and leadership.
                  Our mission is to unite people from various backgrounds, foster community connections, and promote knowledge-sharing.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Join us for insightful discussions, networking opportunities, and unforgettable experiences.
                </p>
                <Link 
                  href="/about"
                  className="inline-block px-8 py-4 bg-[#D32F2F] text-white font-bold rounded-full shadow-lg hover:bg-[#FF5252] transform hover:scale-105 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-br from-[#D32F2F] to-[#FF5252] text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/Kshtriyaeventimage.JPG"
              alt="Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Join Us?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Don't miss out on this incredible gathering of our community. Register now to secure your spot!
            </p>
            <Link 
              href="/register"
              className="inline-block px-12 py-5 bg-white text-[#D32F2F] font-bold text-lg rounded-full shadow-lg hover:bg-[#FFEBEE] transform hover:scale-105 transition-all duration-300"
            >
              Register Now
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#D32F2F] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Us</h3>
                <div className="flex space-x-4 mb-6">
                  {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 rounded-full bg-[#FF5252] flex items-center justify-center hover:bg-[#FFEBEE] hover:text-[#D32F2F] transition-all duration-300"
                    >
                      <span className="sr-only">{social}</span>
                      🌐
                    </a>
                  ))}
                </div>
                <div className="text-[#FFEBEE]">
                  <h4 className="font-bold mb-2">Emergency Contact</h4>
                  <p>T-Hub: 040-66396639</p>
                  <p>Mobile: 09581474545</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">Past Editions</h3>
                <ul className="space-y-2">
                  {['2022', '2020', '2019', '2017'].map((year) => (
                    <li key={year} className="hover:text-[#FFEBEE] transition-colors">
                      <Link href="#">{year}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6">PyCon India Editions</h3>
                <p className="text-sm mb-4">A Collective Effort Led by HydPy</p>
                <ul className="space-y-2">
                  {['2023', '2018'].map((year) => (
                    <li key={year} className="hover:text-[#FFEBEE] transition-colors">
                      <Link href="#">{year}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/20 text-center">
              <p className="text-[#FFEBEE]">Copyright © 2025 PyConf Hyderabad</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}