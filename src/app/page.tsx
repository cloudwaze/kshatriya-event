import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-4">Kshatriya Event 2024</h1>
              <p className="text-xl text-gray-300 mb-8">Join us for an unforgettable experience</p>
              <p className="text-2xl text-purple-400 font-semibold">March 15-17, 2024 • Hyderabad</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Link href="/register" 
                    className="group bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-8 transition-transform hover:scale-105">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Register for Events</h2>
                  <p className="text-gray-200">Browse and register for upcoming events</p>
                </div>
              </Link>

              <Link href="/retrieve-pass"
                    className="group bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-8 transition-transform hover:scale-105">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Retrieve Pass</h2>
                  <p className="text-gray-200">Get a copy of your event pass</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Key Dates Section */}
        <section className="py-16 bg-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Dates</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-purple-400 text-xl font-bold mb-2">March 15</div>
                <h3 className="text-xl font-semibold mb-2">Annual General Meeting</h3>
                <p className="text-gray-300">Opening ceremony and keynote speeches</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-purple-400 text-xl font-bold mb-2">March 16</div>
                <h3 className="text-xl font-semibold mb-2">Cultural Night</h3>
                <p className="text-gray-300">Evening of cultural performances</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-purple-400 text-xl font-bold mb-2">March 17</div>
                <h3 className="text-xl font-semibold mb-2">Youth Conference</h3>
                <p className="text-gray-300">Workshops and networking</p>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Event Highlights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Keynote Speakers', count: '5+' },
                { title: 'Cultural Performances', count: '10+' },
                { title: 'Workshop Sessions', count: '8+' },
                { title: 'Expected Attendees', count: '500+' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">{item.count}</div>
                  <div className="text-xl text-gray-300">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Join Us?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Don&apos;t miss out on this incredible gathering of our community. Register now to secure your spot!
            </p>
            <Link href="/register"
                  className="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Register Now
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
