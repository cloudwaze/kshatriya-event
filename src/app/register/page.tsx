import Link from 'next/link';

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

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300">
            ← Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8 text-center">Available Events</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all"
            >
              <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
              <div className="space-y-2 text-gray-300">
                <p>📅 {event.date}</p>
                <p>⏰ {event.time}</p>
                <p>📍 {event.location}</p>
                <p>👥 Capacity: {event.capacity}</p>
                <p>💰 Price: {event.price}</p>
              </div>
              <Link
                href={`/register/${event.id}`}
                className="mt-6 block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Register Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 