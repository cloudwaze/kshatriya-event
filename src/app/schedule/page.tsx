'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Schedule data with enhanced structure
const schedule = [
  {
    date: "March 15, 2025",
    day: "Day 1",
    title: "Banquet Hall - An Evening of Elegance & Celebration",
    themeColor: "#732424",
    accentColor: "#9E3030",
    icon: "🍽️",
    description: `Step into an exquisite evening of culture, camaraderie, and celebration at the Banquet Hall. 
    This elegant gathering marks the commencement of the Kshatriya Event 2025, bringing together esteemed leaders, 
    professionals, and community members for an unforgettable experience.`,
    highlights: [
      "Networking with influential leaders & community members",
      "A luxurious dining experience with traditional flavors",
      "Inspiring speeches on leadership & heritage",
      "A sophisticated atmosphere celebrating excellence"
    ],
    events: [
      {
        time: "09:00 - 10:00",
        title: "Registration & Breakfast",
        location: "Main Hall",
        description: "Start your day with a nutritious breakfast while connecting with fellow attendees.",
        isKeyEvent: false
      },
      {
        time: "10:00 - 11:30",
        title: "Opening Ceremony",
        location: "Main Hall",
        description: "Join us for the official commencement of the Kshatriya Event 2025 with special addresses from community leaders.",
        isKeyEvent: true
      },
      {
        time: "11:30 - 12:30",
        title: "Keynote Speech: Community Leadership",
        location: "Main Hall",
        description: "An inspiring talk on the importance of leadership within our community and beyond.",
        isKeyEvent: true
      },
      {
        time: "12:30 - 14:00",
        title: "Networking Lunch",
        location: "Dining Area",
        description: "Enjoy a sumptuous lunch while networking with peers and speakers.",
        isKeyEvent: false
      },
      {
        time: "14:00 - 16:00",
        title: "Panel Discussion: Heritage Preservation",
        location: "Conference Room A",
        description: "Experts discuss strategies for preserving our cultural heritage for future generations.",
        isKeyEvent: false
      },
      {
        time: "18:00 - 22:00",
        title: "Banquet Dinner & Cultural Performances",
        location: "Grand Banquet Hall",
        description: "An evening of fine dining, cultural performances, and celebration.",
        isKeyEvent: true
      },
    ],
  },
  {
    date: "March 16, 2025",
    day: "Day 2",
    title: "Main Event - A Grand Celebration of Culture & Knowledge",
    themeColor: "#9E3030",
    accentColor: "#E47D30",
    icon: "🎭",
    description: `The Main Event is the heart of the Kshatriya Event 2025, designed to inspire, educate, 
    and connect people from diverse backgrounds. This day is packed with cultural workshops, interactive 
    sessions, and thought-provoking discussions that celebrate leadership, heritage, and progress.`,
    highlights: [
      "Cultural Workshops – Explore traditional arts, music, and heritage",
      "Leadership Talks – Learn from industry experts and community leaders",
      "Interactive Sessions – Engage in thought-provoking discussions",
      "Grand Cultural Night & Dinner – A spectacular finale with performances"
    ],
    events: [
      {
        time: "09:30 - 10:30",
        title: "Breakfast & Networking",
        location: "Dining Area",
        description: "Begin your day with breakfast and meaningful conversations.",
        isKeyEvent: false
      },
      {
        time: "10:30 - 12:00",
        title: "Cultural Workshop Sessions",
        location: "Various Rooms",
        description: "Participate in hands-on workshops focused on traditional arts and crafts.",
        isKeyEvent: true
      },
      {
        time: "12:00 - 13:30",
        title: "Lunch Break",
        location: "Main Hall",
        description: "Refuel with a delicious lunch featuring traditional cuisine.",
        isKeyEvent: false
      },
      {
        time: "13:30 - 15:30",
        title: "Leadership Development Workshop",
        location: "Conference Room B",
        description: "Interactive session on developing leadership skills within the community context.",
        isKeyEvent: true
      },
      {
        time: "16:00 - 17:30",
        title: "Youth Forum: Future Leaders",
        location: "Auditorium",
        description: "Young leaders share their vision for the community's future.",
        isKeyEvent: false
      },
      {
        time: "18:00 - 22:00",
        title: "Cultural Night & Dinner",
        location: "Community Center",
        description: "A spectacular evening featuring cultural performances, music, and cuisine.",
        isKeyEvent: true
      },
    ],
  },
  {
    date: "March 17, 2025",
    day: "Day 3",
    title: "Workshops & Conclusion - Building Skills & Connections",
    themeColor: "#E47D30",
    accentColor: "#732424",
    icon: "🤝",
    description: `The final day focuses on skill-building workshops, networking opportunities, and collaborative 
    sessions that empower attendees to apply what they've learned throughout the event. The day concludes with 
    a special closing ceremony that celebrates our shared experiences.`,
    highlights: [
      "Professional development workshops tailored to community needs",
      "Networking sessions with industry professionals",
      "Collaborative problem-solving activities",
      "Closing ceremony with recognition of contributors"
    ],
    events: [
      {
        time: "09:00 - 10:00",
        title: "Breakfast & Reflection Session",
        location: "Dining Area",
        description: "Share your experiences and insights from the previous days over breakfast.",
        isKeyEvent: false
      },
      {
        time: "10:00 - 12:00",
        title: "Professional Development Workshops",
        location: "Various Rooms",
        description: "Choose from multiple workshops focused on career advancement and skill building.",
        isKeyEvent: true
      },
      {
        time: "12:00 - 13:30",
        title: "Networking Lunch",
        location: "Main Hall",
        description: "Final opportunity to connect with peers and speakers over lunch.",
        isKeyEvent: false
      },
      {
        time: "13:30 - 15:00",
        title: "Community Action Planning",
        location: "Conference Room A",
        description: "Collaborative session to develop actionable plans for community initiatives.",
        isKeyEvent: true
      },
      {
        time: "15:30 - 17:00",
        title: "Closing Ceremony & Awards",
        location: "Main Auditorium",
        description: "Celebrate the conclusion of the event with special recognitions and final remarks.",
        isKeyEvent: true
      },
    ],
  },
];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#732424] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E47D30] rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Event Schedule
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Plan your experience at the Kshatriya Event 2025 with our comprehensive schedule of activities, workshops, and ceremonies.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 bg-white shadow-md z-30">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-2">
            {schedule.map((day, index) => (
              <button
                key={index}
                onClick={() => setActiveDay(index)}
                className={`flex-shrink-0 px-6 py-3 font-semibold rounded-lg mx-2 transition-all ${
                  activeDay === index
                    ? 'text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                style={
                  activeDay === index 
                    ? { backgroundColor: day.themeColor }
                    : {}
                }
              >
                <span className="block text-sm">{day.date}</span>
                <span className="block text-lg">{day.day}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            {/* Day Overview */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
              <div className="md:flex">
                {/* Placeholder design instead of image */}
                <div className="md:w-1/2 h-64 md:h-auto relative">
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${schedule[activeDay].themeColor}, ${schedule[activeDay].accentColor})`,
                    }}
                  >
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-full h-full">
                        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                          <defs>
                            <pattern id={`grid-${activeDay}`} width="8" height="8" patternUnits="userSpaceOnUse">
                              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                          </defs>
                          <rect width="100" height="100" fill={`url(#grid-${activeDay})`} />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border-4 border-white"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full border-2 border-white"></div>
                    </div>
                    
                    {/* Event icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-8xl opacity-40">{schedule[activeDay].icon}</span>
                    </div>
                    
                    {/* Day info */}
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h2 className="text-3xl font-bold mb-2">{schedule[activeDay].day}</h2>
                      <p className="text-lg">{schedule[activeDay].date}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: schedule[activeDay].themeColor }}>
                    {schedule[activeDay].title}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {schedule[activeDay].description}
                  </p>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-white mr-2" style={{ backgroundColor: schedule[activeDay].accentColor }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      Highlights
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {schedule[activeDay].highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: schedule[activeDay].accentColor }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2" style={{ backgroundColor: `${schedule[activeDay].themeColor}20` }}></div>
              
              {schedule[activeDay].events.map((event, eventIndex) => (
                <div key={eventIndex} className="mb-8 relative">
                  {/* Timeline dot */}
                  <div 
                    className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-md" 
                    style={{ backgroundColor: event.isKeyEvent ? schedule[activeDay].accentColor : schedule[activeDay].themeColor }}
                  ></div>
                  
                  {/* Event card */}
                  <div 
                    className={`
                      md:w-5/12 
                      ${eventIndex % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} 
                      bg-white rounded-xl shadow-lg hover:shadow-xl
                      transition-all duration-300
                      ${expandedEvent === eventIndex ? 'transform scale-[1.02] md:scale-[1.03]' : ''}
                    `}
                    style={{ borderLeft: `4px solid ${event.isKeyEvent ? schedule[activeDay].accentColor : schedule[activeDay].themeColor}` }}
                  >
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => setExpandedEvent(expandedEvent === eventIndex ? null : eventIndex)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                        {event.isKeyEvent && (
                          <span className="text-white text-xs px-2 py-1 rounded-full uppercase" style={{ backgroundColor: schedule[activeDay].accentColor }}>
                            Key Event
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-mono">{event.time}</span>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                      
                      <AnimatePresence>
                        {expandedEvent === eventIndex && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <p className="text-gray-600 mb-4">{event.description}</p>
                            <button 
                              className="px-4 py-2 text-white rounded-lg transition-colors hover:opacity-90" 
                              style={{ backgroundColor: schedule[activeDay].themeColor }}
                            >
                              Reserve Your Spot
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {expandedEvent !== eventIndex && (
                        <div className="flex justify-between items-center">
                          <p className="text-gray-500 text-sm">Click for details</p>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Register CTA */}
            <div className="mt-16 text-center">
              <div className="rounded-lg p-8 shadow-xl" style={{ background: `linear-gradient(135deg, ${schedule[activeDay].themeColor}, ${schedule[activeDay].accentColor})` }}>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Ready to Join Us?
                </h3>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Secure your spot at all {schedule[activeDay].day} events and unlock exclusive networking opportunities with our community leaders.
                </p>
                <Link 
                  href="/register" 
                  className="inline-block px-8 py-4 bg-white text-lg font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1"
                  style={{ color: schedule[activeDay].themeColor }}
                >
                  Register for All Events
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
