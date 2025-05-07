'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  // Function to determine if a link is active
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  // Function to close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
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
      {/* Placeholder div to prevent content from jumping when navbar becomes fixed */}
      <div className="h-20"></div>
      
      <nav 
        className={`fixed top-0 left-0 right-0 bg-[#732424] text-white z-50 transition-all duration-300 ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || '/kshatriya-event'}/images/logo.png`}
                  alt="Kshatriya Logo"
                  width={60}
                  height={60}
                  className="text-[#FDB347]"
                  priority
                />
              </Link>
            </div>

            {/* Main Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-grow">
              <div className="flex space-x-8">
                <Link 
                  href="/" 
                  className={`font-semibold text-lg transition-colors ${isActive('/') ? 'text-[#FDB347]' : 'text-white hover:text-[#FDB347]/80'}`}
                >
                  HOME
                </Link>
                <Link 
                  href="/schedule" 
                  className={`font-semibold text-lg transition-colors ${isActive('/schedule') ? 'text-[#FDB347]' : 'text-white hover:text-[#FDB347]/80'}`}
                >
                  Event Schedule
                </Link>
                <Link 
                  href="/sponsors" 
                  className={`font-semibold text-lg transition-colors ${isActive('/sponsors') ? 'text-[#FDB347]' : 'text-white hover:text-[#FDB347]/80'}`}
                >
                  Packages
                </Link>
                <Link 
                  href="/register" 
                  className={`font-semibold text-lg transition-colors ${isActive('/register') ? 'text-[#FDB347]' : 'text-white hover:text-[#FDB347]/80'}`}
                >
                  Event Tickets
                </Link>
                <Link 
                  href="/participation-forms" 
                  className={`font-semibold text-lg transition-colors ${isActive('/participation-forms') ? 'text-[#FDB347]' : 'text-white hover:text-[#FDB347]/80'}`}
                >
                  Participation Forms
                </Link>
              </div>
            </div>

            {/* Right Side Icon */}
            <div className="flex items-center">
              <Link 
                href="/support" 
                className={`flex flex-col items-center transition-colors ${isActive('/support') ? 'text-[#FDB347]' : 'text-white hover:text-[#FDB347]/80'}`}
              >
                <svg 
                  className="w-6 h-6 transition duration-300"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 11c0-3.866-3.582-7-8-7s-8 3.134-8 7v4a2 2 0 002 2h1a2 2 0 002-2v-3m10 0v3a2 2 0 002 2h1a2 2 0 002-2v-4a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs mt-1">Support</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-[#FDB347]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4">
              <div className="space-y-2">
                <Link 
                  href="/" 
                  onClick={closeMenu}
                  className={`block px-4 py-2 font-semibold ${isActive('/') ? 'text-[#FDB347]' : 'text-white hover:text-[#FDB347]/80'}`}
                >
                  HOME
                </Link>
                <Link 
                  href="/schedule" 
                  onClick={closeMenu}
                  className={`block px-4 py-2 font-semibold ${isActive('/schedule') ? 'text-[#FDB347]' : 'text-white hover:text-[#FDB347]/80'}`}
                >
                  Event Schedule
                </Link>
                <Link 
                  href="/sponsors" 
                  onClick={closeMenu}
                  className={`block px-4 py-2 font-semibold ${isActive('/sponsors') ? 'text-[#FDB347]' : 'text-white hover:text-[#FDB347]/80'}`}
                >
                  Packages
                </Link>
                <Link 
                  href="/register" 
                  onClick={closeMenu}
                  className={`block px-4 py-2 font-semibold ${isActive('/register') ? 'text-[#FDB347]' : 'text-white hover:text-[#FDB347]/80'}`}
                >
                  Event Tickets
                </Link>
                <Link 
                  href="/participation-forms" 
                  onClick={closeMenu}
                  className={`block px-4 py-2 font-semibold ${isActive('/participation-forms') ? 'text-[#FDB347]' : 'text-white hover:text-[#FDB347]/80'}`}
                >
                  Participation Forms
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}