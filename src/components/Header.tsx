import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-[#732424] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Kshatriya Logo"
              width={48}
              height={48}
              className="text-[#FDB347]" // Sunburst logo color
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#FFB347] hover:text-[#FFB347]/80 font-semibold">
              HOME
            </Link>
            <Link href="/services" className="text-white hover:text-[#FDB347]/80 font-semibold">
              OUR SERVICES
            </Link>
            <Link href="/story" className="text-white hover:text-[#FDB347]/80 font-semibold">
              OUR STORY
            </Link>
            <Link href="/work" className="text-white hover:text-[#FDB347]/80 font-semibold">
              WORK WITH US
            </Link>
            <Link href="/resources" className="text-white hover:text-[#FDB347]/80 font-semibold">
              RESOURCES
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-6">
            <Link href="/login" className="flex items-center text-white hover:text-[#FDB347]/80">
              <div className="flex items-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="ml-2 text-sm">Log in</span>
              </div>
            </Link>
            <Link href="/support" className="flex items-center text-white hover:text-[#FDB347]/80">
              <div className="flex items-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className="ml-2 text-sm">Support</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 