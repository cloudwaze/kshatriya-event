import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#732424] text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Left Section - Location */}
        <div>
          <h3 className="text-lg font-bold mb-3">Event Location</h3>
          <div className="bg-[#5a1c1c] rounded-lg p-4">
            <h4 className="text-lg font-bold mb-3">Embassy Suites by Hilton Dallas-Frisco Hotel and Convention Center</h4>
            <div className="space-y-2">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#FDB347]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                7600 John Q. Hammons Drive, Frisco, Texas, 75034, USA
              </p>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.3645662278154!2d-96.82033502356438!3d33.0994981735305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c94124ed5c5%3A0x3143ea9fd634e948!2sEmbassy%20Suites%20by%20Hilton%20Dallas%20Frisco%20Hotel%20%26%20Convention%20Center!5e0!3m2!1sen!2sus!4v1744862239311!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        {/* Middle Section - Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact Us</h3>
          <div className="bg-[#5a1c1c] rounded-lg p-4">
            <div className="space-y-2">
              <a href="tel:+11234567890" className="flex items-center group">
                <svg className="w-4 h-4 mr-2 text-[#FDB347]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="group-hover:text-[#FDB347] transition-colors">Event Office: (123) 456-7890</span>
              </a>
              <a href="tel:+19876543210" className="flex items-center group">
                <svg className="w-4 h-4 mr-2 text-[#FDB347]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="group-hover:text-[#FDB347] transition-colors">Event Coordinator: (987) 654-3210</span>
              </a>
              <a href="mailto:events@thekshatriyas.org" className="flex items-center group">
                <svg className="w-4 h-4 mr-2 text-[#FDB347]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="group-hover:text-[#FDB347] transition-colors">events@thekshatriyas.org</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Right Section - Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <div className="flex flex-col space-y-2">
            <Link href="/schedule" className="hover:text-[#FDB347] transition-colors">Event Schedule</Link>
            <Link href="/sponsors" className="hover:text-[#FDB347] transition-colors">Packages</Link>
            <Link href="/register" className="hover:text-[#FDB347] transition-colors">Event Tickets</Link>
            <Link href="/participation-forms" className="hover:text-[#FDB347] transition-colors">Participation Forms</Link>
            <Link href="/support" className="hover:text-[#FDB347] transition-colors">Support & FAQ</Link>
          </div>
        </div>
      </div>
      <hr className="mt-6 border-gray-500" />
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-300">Copyright © TheKshatriyas 2025</p>
      </div>
    </footer>
  );
}