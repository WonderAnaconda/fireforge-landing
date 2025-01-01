'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 relative">
          {/* Home Icon */}
          <Link href="/" className="text-white hover:text-blue-400 transition-colors absolute left-4">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center space-x-8 w-full">
            <Link href="/tools" className="text-white hover:text-blue-400 transition-colors">
              Tools
            </Link>
            <Link href="/academy" className="text-white hover:text-blue-400 transition-colors">
              Academy
            </Link>
            <Link href="/faq" className="text-white hover:text-blue-400 transition-colors">
              FAQ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/tools"
              className="block px-3 py-2 text-white hover:text-blue-400 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Tools
            </Link>
            <Link
              href="/academy"
              className="block px-3 py-2 text-white hover:text-blue-400 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Academy
            </Link>
            <Link
              href="/faq"
              className="block px-3 py-2 text-white hover:text-blue-400 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 