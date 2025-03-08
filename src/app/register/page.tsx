import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

// Mock data for events - in a real app, this would come from an API or CMS
const events = [
  {
    id: 1,
    title: 'Annual General Meeting',
    date: 'March 15, 2024',
    time: '10:00 AM - 2:00 PM',
    location: 'Main Hall',
    capacity: 200,
    price: 'Free',
  },
  {
    id: 2,
    title: 'Cultural Night',
    date: 'March 16, 2024',
    time: '6:00 PM - 10:00 PM',
    location: 'Community Center',
    capacity: 150,
    price: '₹500',
  },
  {
    id: 3,
    title: 'Youth Conference',
    date: 'March 17, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Conference Hall',
    capacity: 100,
    price: '₹300',
  },
];

export default function Register() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#FFEBEE] to-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#FF5252]/20">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#D32F2F]">Register for Kshatriya Event 2025</h1>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#D32F2F]">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-[#FFEBEE] border border-[#FF5252]/20 rounded-lg focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-[#D32F2F]">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-[#FFEBEE] border border-[#FF5252]/20 rounded-lg focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-[#D32F2F]">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-[#FFEBEE] border border-[#FF5252]/20 rounded-lg focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-[#D32F2F]">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-[#FFEBEE] border border-[#FF5252]/20 rounded-lg focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-[#D32F2F]">Event Type</label>
                  <select
                    className="w-full px-4 py-3 bg-[#FFEBEE] border border-[#FF5252]/20 rounded-lg focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select event type</option>
                    <option value="conference">Conference Only (March 15)</option>
                    <option value="workshop">Workshop Only (March 16-17)</option>
                    <option value="both">Full Event (March 15-17)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-[#D32F2F]">Special Requirements</label>
                  <textarea
                    className="w-full px-4 py-3 bg-[#FFEBEE] border border-[#FF5252]/20 rounded-lg focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all duration-300"
                    rows={4}
                    placeholder="Any dietary requirements or accessibility needs?"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-[#FF5252]/20 text-[#D32F2F] focus:ring-[#D32F2F]"
                  />
                  <label className="ml-2 text-sm text-gray-600">
                    I agree to the terms and conditions
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#D32F2F] text-white font-bold rounded-full hover:bg-[#FF5252] transform hover:scale-105 transition-all duration-300"
                >
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 