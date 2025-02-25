import Navbar from '@/components/Navbar';
import Image from 'next/image';

const speakers = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Community Leader',
    topic: 'Future of Community Leadership',
    image: '/speakers/placeholder.png',
    bio: 'Dr. Kumar has been leading community initiatives for over 15 years and has been instrumental in various social development projects.',
  },
  {
    name: 'Mrs. Priya Sharma',
    role: 'Cultural Expert',
    topic: 'Preserving Cultural Heritage',
    image: '/speakers/placeholder.png',
    bio: 'An expert in cultural studies with extensive experience in organizing cultural events and workshops.',
  },
  {
    name: 'Mr. Arun Verma',
    role: 'Youth Mentor',
    topic: 'Youth Empowerment',
    image: '/speakers/placeholder.png',
    bio: 'A passionate youth mentor who has guided numerous young individuals in their career and personal development.',
  },
  {
    name: 'Dr. Meena Reddy',
    role: 'Education Advocate',
    topic: 'Education in Modern Times',
    image: '/speakers/placeholder.png',
    bio: 'An education advocate working towards making quality education accessible to all community members.',
  },
  {
    name: 'Mr. Suresh Patel',
    role: 'Business Leader',
    topic: 'Entrepreneurship in Community',
    image: '/speakers/placeholder.png',
    bio: 'A successful entrepreneur who actively supports community business initiatives and mentors young entrepreneurs.',
  },
];

export default function SpeakersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-16">Our Speakers</h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all"
              >
                <div className="aspect-square relative bg-gray-700">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{speaker.name}</h2>
                  <p className="text-purple-400 mb-2">{speaker.role}</p>
                  <p className="text-gray-300 mb-4">Topic: {speaker.topic}</p>
                  <p className="text-gray-400 text-sm">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
} 