'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Function to determine if a link is active
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  // Listen for scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 bg-[rgb(87,4,4)] text-white z-50 transition-all duration-300 ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Main Navigation - Full Width */}
            <div className="flex items-center justify-center flex-grow">
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 lg:gap-8">
                <Link 
                  href="/" 
                  className={`font-semibold text-sm md:text-base lg:text-lg transition-colors ${isActive('/') ? 'text-[#FDB347]' : 'text-white hover:text-[#FDB347]/80'}`}
                >
                  Event2025
                </Link>
                <Link 
                  href="/schedule" 
                  className={`font-semibold text-sm md:text-base lg:text-lg transition-colors ${isActive('/schedule') ? 'text-[#FDB347]' : 'text-white hover:text-[#FDB347]/80'}`}
                >
                  Schedule
                </Link>
                <Link 
                  href="/sponsors" 
                  className={`font-semibold text-sm md:text-base lg:text-lg transition-colors ${isActive('/sponsors') ? 'text-[#FDB347]' : 'text-white hover:text-[#FDB347]/80'}`}
                >
                  Sponsor
                </Link>
                <Link 
                  href="/register" 
                  className={`font-semibold text-sm md:text-base lg:text-lg transition-colors ${isActive('/register') ? 'text-[#FDB347]' : 'text-white hover:text-[#FDB347]/80'}`}
                >
                  Tickets
                </Link>
                <Link 
                  href="/participation-forms" 
                  className={`font-semibold text-sm md:text-base lg:text-lg transition-colors ${isActive('/participation-forms') ? 'text-[#FDB347]' : 'text-white hover:text-[#FDB347]/80'}`}
                >
                  Sign-up
                </Link>
                <Link 
                  href="/support" 
                  className={`flex flex-col items-center transition-colors ${isActive('/support') ? 'text-[#FDB347]' : 'text-white hover:text-[#FDB347]/80'}`}
                >
                  <svg 
                    className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 transition duration-300"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 11c0-3.866-3.582-7-8-7s-8 3.134-8 7v4a2 2 0 002 2h1a2 2 0 002-2v-3m10 0v3a2 2 0 002 2h1a2 2 0 002-2v-4a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-xs md:text-sm lg:text-base font-semibold mt-1">Support</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
