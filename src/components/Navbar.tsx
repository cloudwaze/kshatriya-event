'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-white border-b-4 border-white pb-1' : 'text-white/80 hover:text-white hover:border-b-4 hover:border-white/50 pb-1 transition-all duration-300';
  };

  return (
    <nav className="bg-[#D32F2F] text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={60}
                height={60}
                className="text-[#FFEBEE]"
              />
            </Link>
          </div>

          {/* Main Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-grow">
            <div className="flex space-x-8">
              <Link href="/" className={`${isActive('/')} font-semibold text-lg`}>
                HOME
              </Link>
              <Link href="/schedule" className={`${isActive('/schedule')} font-semibold text-lg`}>
                Schedule
              </Link>
              <Link href="/speakers" className={`${isActive('/speakers')} font-semibold text-lg`}>
                Speakers
              </Link>
              <Link href="/sponsors" className={`${isActive('/sponsors')} font-semibold text-lg`}>
                Sponsors
              </Link>
              <Link href="/register" className={`${isActive('/register')} font-semibold text-lg`}>
                Register
              </Link>
            </div>
          </div>

          {/* Right Side Icon */}
          <Link href="/support" className="flex flex-col items-center text-white hover:text-[#FFEBEE]">
            <svg 
              className="w-6 h-6 text-white hover:text-[#FFEBEE] transition duration-300"
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
          className="lg:hidden text-white hover:text-[#FFEBEE]"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="space-y-2">
              <Link href="/" className={`block px-4 py-2 ${isActive('/')} font-semibold`}>
                HOME
              </Link>
              <Link href="/schedule" className={`block px-4 py-2 ${isActive('/schedule')} font-semibold`}>
                Schedule
              </Link>
              <Link href="/speakers" className={`block px-4 py-2 ${isActive('/speakers')} font-semibold`}>
                Speakers
              </Link>
              <Link href="/sponsors" className={`block px-4 py-2 ${isActive('/sponsors')} font-semibold`}>
                Sponsors
              </Link>
              <Link href="/register" className={`block px-4 py-2 ${isActive('/register')} font-semibold`}>
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}