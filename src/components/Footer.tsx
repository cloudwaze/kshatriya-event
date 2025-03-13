import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#732424] text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Left Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Connect With Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" className="w-10 h-10 bg-[#732424] border-2 border-white/60 hover:border-white rounded-full flex items-center justify-center transition-all hover:-translate-y-1">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-[#732424] border-2 border-white/60 hover:border-white rounded-full flex items-center justify-center transition-all hover:-translate-y-1">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.032 10.032 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.996 13.996 0 007.557 2.209c9.054 0 14-7.497 14-13.987 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59l-.047-.02z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-[#732424] border-2 border-white/60 hover:border-white rounded-full flex items-center justify-center transition-all hover:-translate-y-1">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-[#732424] border-2 border-white/60 hover:border-white rounded-full flex items-center justify-center transition-all hover:-translate-y-1">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
          </div>
          
          <div className="mt-6 bg-[#5a1c1c] rounded-lg p-4">
            <h4 className="text-lg font-bold flex items-center mb-3">
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Emergency Contact
            </h4>
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
              <a href="mailto:emergency@kshatriyaevent.org" className="flex items-center group">
                <svg className="w-4 h-4 mr-2 text-[#FDB347]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="group-hover:text-[#FDB347] transition-colors">emergency@kshatriyaevent.org</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Past Events</h3>
          <div className="grid grid-cols-2 gap-2">
            <Link href="#" className="hover:text-[#FDB347] transition-colors">2022</Link>
            <Link href="#" className="hover:text-[#FDB347] transition-colors">2020</Link>
            <Link href="#" className="hover:text-[#FDB347] transition-colors">2019</Link>
            <Link href="#" className="hover:text-[#FDB347] transition-colors">2017</Link>
          </div>
        </div>
        
        {/* Right Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <div className="flex flex-col space-y-2">
            <Link href="/schedule" className="hover:text-[#FDB347] transition-colors">Event Schedule</Link>
            <Link href="/sponsors" className="hover:text-[#FDB347] transition-colors">Our Sponsors</Link>
            <Link href="/register" className="hover:text-[#FDB347] transition-colors">Registration</Link>
            <Link href="/support" className="hover:text-[#FDB347] transition-colors">Support & FAQ</Link>
          </div>
        </div>
      </div>
      <hr className="mt-6 border-gray-500" />
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-300 mb-2 md:mb-0">Copyright © 2025 Kshatriya Event</p>
        <div className="flex space-x-4">
          <Link href="/privacy" className="text-gray-300 hover:text-[#FDB347] text-sm">Privacy Policy</Link>
          <Link href="/terms" className="text-gray-300 hover:text-[#FDB347] text-sm">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
} 