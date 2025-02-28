import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black">
        {/* First Hero Image Section */}
        <div className="w-full flex justify-center py-6">
          <Image
            src="/kshatriya-hero.jpg"
            alt="Kshatriya Hero Image"
            width={900}
            height={300}
            className="object-cover rounded-lg"
            priority
          />
        </div>  
      
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4 text-black">Kshatriya Event 2025</h1>
            <h2 className="text-black text-4xl font-bold mb-6">📅 15 March - 17 March</h2>
            
            {/* Venue Information */}
            <p className="text-gray-800 text-xl mb-4">
              Conference: 15 March | Venue: <a href="#" className="underline">Venue Name</a>
            </p>
            <p className="text-gray-800 text-xl">
              Workshop: 16-17 March | Venue: <a href="#" className="underline">Workshop Venue</a>
            </p>
            
            {/* Buttons */}
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-12">
              <Link href="/register" className="inline-flex items-center justify-center px-6 py-3 border-4 border-[#6B1313] bg-[#FAF7F2] text-black font-bold text-lg uppercase tracking-wide rounded-full shadow-md hover:bg-[#EAE0D5] transition-all">
                Register for Events
              </Link>
              <Link href="/retrieve-pass" className="inline-flex items-center justify-center px-6 py-3 border-4 border-[#6B1313] bg-[#FAF7F2] text-black font-bold text-lg uppercase tracking-wide rounded-full shadow-md hover:bg-[#EAE0D5] transition-all">
                Retrieve Pass
              </Link>
            </div>
          </div>
        </section>

        {/* Keynote Speakers Section */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-black">Keynote Speakers</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Speaker 1 */}
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-105">
                <Image
                  src="/speaker1.jpg"
                  alt="Anthony Shaw"
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-bold mt-4 text-black">Anthony Shaw</h3>
                <p className="text-gray-700">Python Advocacy Lead</p>
                <div className="flex space-x-3 mt-4">
                  <div className="w-8 h-8 bg-gray-500 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-500 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-500 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-500 rounded-md"></div>
                </div>
              </div>
              {/* Speaker 2 */}
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-105">
                <Image
                  src="/speaker2.jpg"
                  alt="Bowrna Prabhakaran"
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
                <h3 className="text-xl font-bold mt-4 text-black">Bowrna Prabhakaran</h3>
                <p className="text-gray-700">Software Developer</p>
                <div className="flex space-x-3 mt-4">
                  <div className="w-8 h-8 bg-gray-500 rounded-md"></div>
                  <div className="w-8 h-8 bg-gray-500 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-black">Sponsors</h2>
            <h3 className="text-xl font-semibold text-black">Our Sponsors</h3>
            <div className="w-16 h-1 bg-[#E47D30] mx-auto mb-6"></div>
            <div className="flex justify-center gap-3">
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex items-center justify-center w-56 h-36 hover:scale-105">
                <Image
                  src="/langdb-logo.png"
                  alt="LangDB Logo"
                  width={130}
                  height={70}
                  className="object-contain"
                />
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex items-center justify-center w-56 h-36 hover:scale-105">
                <Image
                  src="/cognida-logo.png"
                  alt="Cognida.ai Logo"
                  width={130}
                  height={70}
                  className="object-contain"
                />
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex items-center justify-center w-56 h-36 hover:scale-105">
                <Image
                  src="/storable-logo.png"
                  alt="Storable Logo"
                  width={130}
                  height={70}
                  className="object-contain"
                />
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 flex items-center justify-center w-56 h-36 hover:scale-105">
                <Image
                  src="/tiger-analytics-logo.png"
                  alt="Tiger Analytics Logo"
                  width={130}
                  height={70}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Call to Action */}
        <section className="py-16 bg-gray-100 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-black">Ready to Join Us?</h2>
            <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
              Don&apos;t miss out on this incredible gathering of our community. Register now to secure your spot!
            </p>
            <Link href="/register" className="inline-block px-8 py-3 border-4 border-[#6B1313] bg-[#FAF7F2] text-black font-bold text-lg uppercase tracking-wide rounded-full shadow-md hover:bg-[#EAE0D5] transition-all">
              Register Now
            </Link>
          </div>
        </section>
        
        {/* Footer Section */}
        <footer className="bg-[#732424] text-white py-6">
          <div className="container mx-auto px-4 grid grid-cols-3 gap-6 text-center md:text-left">
            {/* Left Section */}
            <div>
              <h3 className="text-lg font-bold">Contact Us On</h3>
              <div className="flex space-x-4 mt-2">
                <div className="w-8 h-8 bg-gray-500 rounded-md"></div>
                <div className="w-8 h-8 bg-gray-500 rounded-md"></div>
                <div className="w-8 h-8 bg-gray-500 rounded-md"></div>
                <div className="w-8 h-8 bg-gray-500 rounded-md"></div>
              </div>
              <h4 className="mt-4 text-lg font-bold">Emergency Contact</h4>
              <p className="mt-1">• T-Hub: 040-66396639, 09581474545</p>
            </div>
            
            {/* Middle Section */}
            <div>
              <h3 className="text-lg font-bold">Past Editions</h3>
              <p className="mt-2">2022</p>
              <p>2020</p>
              <p>2019</p>
              <p>2017</p>
            </div>
            
            {/* Right Section */}
            <div>
              <h3 className="text-lg font-bold">PyCon India Editions: A Collective Effort Led by HydPy</h3>
              <p className="mt-2">2023</p>
              <p>2018</p>
            </div>
          </div>
          <hr className="mt-6 border-gray-500" />
          <p className="text-center text-gray-300 mt-4">Copyright @ 2025 PyConf Hyderabad</p>
        </footer>
      </main>
    </>
  );
}