import Navbar from '@/components/Navbar';

const schedule = [
  {
    date: 'March 15, 2024',
    events: [
      { time: '09:00 - 10:00', title: 'Registration & Breakfast', location: 'Main Hall' },
      { time: '10:00 - 11:30', title: 'Opening Ceremony', location: 'Main Hall' },
      { time: '11:30 - 12:30', title: 'Keynote Speech: Community Leadership', location: 'Main Hall' },
      { time: '12:30 - 13:30', title: 'Lunch Break', location: 'Dining Area' },
      { time: '13:30 - 15:00', title: 'Annual General Meeting', location: 'Conference Room A' },
      { time: '15:00 - 15:30', title: 'Tea Break', location: 'Lobby' },
      { time: '15:30 - 17:00', title: 'Panel Discussion: Future Initiatives', location: 'Main Hall' },
    ],
  },
  {
    date: 'March 16, 2024',
    events: [
      { time: '09:30 - 10:30', title: 'Breakfast & Networking', location: 'Dining Area' },
      { time: '10:30 - 12:00', title: 'Cultural Workshop Sessions', location: 'Various Rooms' },
      { time: '12:00 - 13:00', title: 'Lunch Break', location: 'Dining Area' },
      { time: '13:00 - 15:00', title: 'Cultural Performances Rehearsal', location: 'Community Center' },
      { time: '15:00 - 15:30', title: 'Break', location: 'Lobby' },
      { time: '18:00 - 22:00', title: 'Cultural Night & Dinner', location: 'Community Center' },
    ],
  },
  {
    date: 'March 17, 2024',
    events: [
      { time: '09:00 - 10:00', title: 'Youth Conference Registration', location: 'Conference Hall' },
      { time: '10:00 - 11:30', title: 'Youth Leadership Workshop', location: 'Workshop Room 1' },
      { time: '11:30 - 12:30', title: 'Career Guidance Session', location: 'Workshop Room 2' },
      { time: '12:30 - 13:30', title: 'Lunch Break', location: 'Dining Area' },
      { time: '13:30 - 15:00', title: 'Networking Session', location: 'Main Hall' },
      { time: '15:00 - 16:00', title: 'Closing Ceremony', location: 'Main Hall' },
    ],
  },
];

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-16">Event Schedule</h1>
          
          <div className="max-w-5xl mx-auto">
            {schedule.map((day, dayIndex) => (
              <div key={dayIndex} className="mb-16">
                <h2 className="text-2xl font-bold text-purple-400 mb-8">{day.date}</h2>
                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700"
                    >
                      <div className="md:flex justify-between items-start">
                        <div className="mb-4 md:mb-0">
                          <div className="text-lg font-semibold">{event.title}</div>
                          <div className="text-gray-400">{event.location}</div>
                        </div>
                        <div className="text-purple-400 font-mono">{event.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
} 