import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Sponsors() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#FFEBEE] to-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-[#D32F2F] to-[#FF5252] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sponsors</h1>
              <p className="text-xl mb-8">
                Meet the organizations that make Kshatriya Event possible through their generous support.
              </p>
              <a
                href="#become-sponsor"
                className="inline-block px-8 py-4 bg-white text-[#D32F2F] font-bold rounded-full hover:bg-[#FFEBEE] transform hover:scale-105 transition-all duration-300"
              >
                Become a Sponsor
              </a>
            </div>
          </div>
        </section>

        {/* Current Sponsors */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Platinum Sponsors */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-4 text-[#D32F2F]">Platinum Sponsors</h2>
              <div className="w-24 h-1 bg-[#FF5252] mx-auto mb-12"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((sponsor) => (
                  <div
                    key={sponsor}
                    className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="aspect-video relative mb-4">
                      <Image
                        src={`/images/sponser${sponsor}Image.jpg`}
                        alt={`Platinum Sponsor ${sponsor}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-[#D32F2F] mb-2">Sponsor Name</h3>
                      <p className="text-gray-600">Premium Technology Solutions</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gold Sponsors */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-4 text-[#D32F2F]">Gold Sponsors</h2>
              <div className="w-24 h-1 bg-[#FF5252] mx-auto mb-12"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((sponsor) => (
                  <div
                    key={sponsor}
                    className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="aspect-video relative">
                      <Image
                        src={`/images/sponser${sponsor}Image.jpg`}
                        alt={`Gold Sponsor ${sponsor}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Become a Sponsor */}
            <div id="become-sponsor" className="max-w-4xl mx-auto text-center bg-gradient-to-r from-[#D32F2F] to-[#FF5252] rounded-3xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Become a Sponsor</h2>
              <p className="text-lg mb-8">
                Join us in supporting the Kshatriya Event 2025. Download our sponsorship prospectus to learn more about the benefits and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#"
                  className="px-8 py-4 bg-white text-[#D32F2F] font-bold rounded-full hover:bg-[#FFEBEE] transform hover:scale-105 transition-all duration-300"
                >
                  Download Prospectus
                </a>
                <a
                  href="mailto:sponsors@kshatriyaevent.com"
                  className="px-8 py-4 bg-[#FFEBEE] text-[#D32F2F] font-bold rounded-full hover:bg-white transform hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 