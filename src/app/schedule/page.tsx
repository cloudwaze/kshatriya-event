'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Schedule data with enhanced structure
const schedule = [
  {
    date: "December 20, 2025",
    day: "Day 1",
    title: "Cultural & Networking Events",
    themeColor: "#732424",
    accentColor: "#9E3030",
    icon: "🍽️",
    description: `Join us for a rich day of matrimonial connections, youth empowerment, entrepreneurial insights, and an elegant evening banquet. 
    Each carefully designed event brings together our community to celebrate culture, build relationships, and foster personal and professional growth.`,
    highlights: [
      "Matrimonial event for community connections",
      "Youth empowerment sessions and activities",
      "Entrepreneurial networking and knowledge sharing",
      "Grand Banquet dinner and cultural celebration"
    ],
    events: [
      {
        time: "Morning",
        title: "Matrimonial Event",
        location: "Main Hall",
        description: "Saturday Morning, December 20, 2025 - A thoughtfully organized event to build meaningful connections within our community.",
        isKeyEvent: true
      },
      {
        time: "Afternoon",
        title: "Empower Youth Event",
        location: "Youth Center",
        description: "Saturday Afternoon, December 20, 2025 - Inspiring the next generation through mentorship, activities, and engaging discussions.",
        isKeyEvent: true
      },
      {
        time: "Afternoon",
        title: "Entrepreneurship",
        location: "Conference Room A",
        description: "Saturday Afternoon, December 20, 2025 - Connect with successful entrepreneurs and gain valuable insights for your business journey.",
        isKeyEvent: true
      },
      {
        time: "Evening",
        title: "Banquet",
        location: "Grand Banquet Hall",
        description: "Saturday Evening, December 20, 2025 - An elegant dinner with cultural performances and community celebration.",
        isKeyEvent: true
      }
    ],
  },
  {
    date: "December 21, 2025",
    day: "Day 2",
    title: "National Event",
    themeColor: "#9E3030",
    accentColor: "#E47D30",
    icon: "🎭",
    description: `The National Event brings together our entire community for a full day of celebration, 
    connecting with heritage, sharing knowledge, and building stronger bonds. This day-long gathering 
    is the centerpiece of our Kshatriya Event 2025.`,
    highlights: [
      "National gathering of community members",
      "Cultural performances and ceremonies",
      "Knowledge sharing and educational sessions",
      "Networking opportunities with community leaders"
    ],
    events: [
      {
        time: "All Day",
        title: "National Event",
        location: "Main Convention Center",
        description: "All Day Sunday, December 21, 2025 - A comprehensive national gathering with multiple activities, performances, and sessions throughout the day.",
        isKeyEvent: true
      }
    ],
  }
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
              {/* Timeline line - always visible for both days */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2" style={{ backgroundColor: `${schedule[activeDay].themeColor}20` }}></div>
              
              {activeDay === 0 ? (
                // Day 1 - Multiple events
                schedule[activeDay].events.map((event, eventIndex) => (
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
                ))
              ) : (
                // Day 2 - Single national event, but maintain timeline style
                <div className="mb-8 relative">
                  {/* Timeline dot - REMOVED */}
                  
                  {/* Event card - centered for single event */}
                  <div 
                    className="md:w-8/12 mx-auto bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ borderLeft: `4px solid ${schedule[1].accentColor}` }}
                  >
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => setExpandedEvent(expandedEvent === 0 ? null : 0)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{schedule[1].events[0].title}</h3>
                        <span className="text-white text-xs px-2 py-1 rounded-full uppercase" style={{ backgroundColor: schedule[1].accentColor }}>
                          Key Event
                        </span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-mono">{schedule[1].events[0].time}</span>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{schedule[1].events[0].location}</span>
                      </div>
                      
                      <AnimatePresence>
                        {expandedEvent === 0 && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <p className="text-gray-600">{schedule[1].events[0].description}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {expandedEvent !== 0 && (
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
              )}
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
