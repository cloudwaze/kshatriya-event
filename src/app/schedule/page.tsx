import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const schedule = [
  {
    date: "March 15, 2024",
    title: "Banquet Hall - An Evening of Elegance & Celebration",
    description: `Step into an exquisite evening of culture, camaraderie, and celebration at the Banquet Hall. 
    This elegant gathering marks the commencement of the Kshatriya Event 2025, bringing together esteemed leaders, 
    professionals, and community members for an unforgettable experience.

    Enjoy a night filled with fine dining, insightful conversations, and cultural performances that honor our rich 
    heritage and leadership values. The Banquet is not just an event—it's a space to build meaningful connections, 
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
      <main className="min-h-screen bg-gradient-to-b from-[#FFF8F3] to-white text-[#42210B]">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Event Schedule</h1>
          
          <div className="max-w-4xl mx-auto space-y-12">
            {schedule.map((day, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#B04E2A]/20"
              >
                <h2 className="text-3xl font-bold mb-2">{day.title}</h2>
                <p className="text-[#B04E2A] mb-6">{day.date}</p>
                
                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div 
                      key={eventIndex}
                      className="flex flex-col md:flex-row md:items-center p-4 rounded-lg bg-[#FFF8F3] hover:bg-[#FFF8F3]/80 transition-all duration-300"
                    >
                      <div className="md:w-48 font-mono text-[#732424]">
                        {event.time}
                      </div>
                      <div className="md:flex-1">
                        {event.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
