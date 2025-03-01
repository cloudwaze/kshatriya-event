import Navbar from "@/components/Navbar";

const schedule = [
  {
    date: "March 15, 2024",
    title: "Banquet Hall - An Evening of Elegance & Celebration",
    description: `Step into an exquisite evening of culture, camaraderie, and celebration at the Banquet Hall. 
    This elegant gathering marks the commencement of the Kshatriya Event 2025, bringing together esteemed leaders, 
    professionals, and community members for an unforgettable experience.

    Enjoy a night filled with fine dining, insightful conversations, and cultural performances that honor our rich 
    heritage and leadership values. The Banquet is not just an event—it’s a space to build meaningful connections, 
    exchange ideas, and embrace the spirit of unity.

    🔹 Highlights:
    ✔️ Networking with influential leaders & community members
    ✔️ A luxurious dining experience with traditional flavors
    ✔️ Inspiring speeches on leadership & heritage
    ✔️ A sophisticated atmosphere celebrating excellence`,
    image: "/images/banquet-hall.jpg",
    events: [
      {
        time: "09:00 - 10:00",
        title: "Registration & Breakfast",
        location: "Main Hall",
      },
      {
        time: "10:00 - 11:30",
        title: "Opening Ceremony",
        location: "Main Hall",
      },
      {
        time: "11:30 - 12:30",
        title: "Keynote Speech: Community Leadership",
        location: "Main Hall",
      },
    ],
  },
  {
    date: "March 16, 2024",
    title: "Main Event - A Grand Celebration of Culture & Knowledge",
    description: `The Main Event is the heart of the Kshatriya Event 2025, designed to inspire, educate, 
    and connect people from diverse backgrounds. This day is packed with cultural workshops, interactive 
    sessions, and thought-provoking discussions that celebrate leadership, heritage, and progress.

    From engaging panel discussions to immersive cultural showcases, the Main Event provides an unparalleled 
    opportunity to explore the depth of our traditions while fostering modern leadership and innovation.

    🔹 Highlights:
    ✔️ Cultural Workshops – Explore traditional arts, music, and heritage
    ✔️ Leadership Talks – Learn from industry experts and community leaders
    ✔️ Interactive Sessions – Engage in thought-provoking discussions on culture and progress
    ✔️ Grand Cultural Night & Dinner – A spectacular finale with performances and cuisine`,
    image: "/images/main-event.jpg",
    events: [
      {
        time: "09:30 - 10:30",
        title: "Breakfast & Networking",
        location: "Dining Area",
      },
      {
        time: "10:30 - 12:00",
        title: "Cultural Workshop Sessions",
        location: "Various Rooms",
      },
      {
        time: "18:00 - 22:00",
        title: "Cultural Night & Dinner",
        location: "Community Center",
      },
    ],
  },
];

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F9F5F0] text-[#42210B] pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-16 text-[#42210B]">
            Event Schedule
          </h1>

          <div className="max-w-5xl mx-auto space-y-16">
            {schedule.map((day, dayIndex) => (
              <div key={dayIndex} className="pb-10 border-b-2 border-[#B04E2A]">
                {/* Event Title with Date */}
                <h2 className="text-2xl font-bold text-[#7A2E1A] mb-2">
                  {day.title} - <span className="text-[#B04E2A]">{day.date}</span>
                </h2>

                {/* Description */}
                <p className="text-gray-700 italic mb-4 whitespace-pre-line">{day.description}</p>

                {/* Image Section */}
                <img
                  src={day.image}
                  alt={day.title}
                  className="w-full rounded-lg shadow-lg mb-6"
                />

                <div className="space-y-6">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="flex justify-between items-center bg-[#FFF8F2] shadow-lg rounded-lg p-6 border-l-4 border-[#7A2E1A]"
                    >
                      {/* Left Section: Event Title & Location */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{event.title}</h3>
                        <p className="text-gray-600">{event.location}</p>
                      </div>

                      {/* Right Section: Time & Button */}
                      <div className="flex flex-col items-end">
                        <div className="text-[#7A2E1A] font-mono font-semibold">{event.time}</div>
                        <button className="mt-2 px-4 py-2 border-2 border-[#7A2E1A] text-[#7A2E1A] font-bold rounded-full hover:bg-[#7A2E1A] hover:text-white transition">
                          BOOK SLOT
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Register for All Events Button (separate for each event) */}
                <div className="text-center mt-10">
                  <button className="px-6 py-3 bg-[#7A2E1A] text-white text-lg font-bold rounded-full hover:bg-[#B04E2A] transition">
                    Register for All Events
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
