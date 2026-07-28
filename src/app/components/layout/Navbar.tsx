'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-white/70 backdrop-blur-xl border-b border-gray-200/60 shadow-lg shadow-black/5 transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
          <span className="text-xl font-bold text-gray-900 tracking-tight">BlakeGlobal</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
          <Link href="/#home" className="hover:text-[#5B6E3F] transition-colors">Home</Link>
          <Link href="/#products" className="hover:text-[#5B6E3F] transition-colors">Products</Link>
          <Link href="/#why" className="hover:text-[#5B6E3F] transition-colors">Why Us</Link>
          <Link href="/#mission" className="hover:text-[#5B6E3F] transition-colors">Mission</Link>
          <Link href="/#about" className="hover:text-[#5B6E3F] transition-colors">About</Link>
          <Link href="/#contact" className="hover:text-[#5B6E3F] transition-colors">Contact</Link>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="p-2 text-gray-700 hover:text-[#5B6E3F] hover:bg-gray-100/50 transition-colors rounded-none focus:outline-none"
          >
            {isOpen ? (
              /* Close (X) Icon */
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-gray-200/80 shadow-xl px-4 pt-3 pb-6 space-y-2">
          <Link
            href="/#home"
            onClick={closeMenu}
            className="block px-3 py-2 text-base font-semibold text-gray-800 hover:text-white hover:bg-[#5B6E3F] transition-all rounded-none"
          >
            Home
          </Link>
          <Link
            href="/#products"
            onClick={closeMenu}
            className="block px-3 py-2 text-base font-semibold text-gray-800 hover:text-white hover:bg-[#5B6E3F] transition-all rounded-none"
          >
            Products
          </Link>
          <Link
            href="/#why"
            onClick={closeMenu}
            className="block px-3 py-2 text-base font-semibold text-gray-800 hover:text-white hover:bg-[#5B6E3F] transition-all rounded-none"
          >
            Why Us
          </Link>
          <Link
            href="/#mission"
            onClick={closeMenu}
            className="block px-3 py-2 text-base font-semibold text-gray-800 hover:text-white hover:bg-[#5B6E3F] transition-all rounded-none"
          >
            Mission
          </Link>
          <Link
            href="/#about"
            onClick={closeMenu}
            className="block px-3 py-2 text-base font-semibold text-gray-800 hover:text-white hover:bg-[#5B6E3F] transition-all rounded-none"
          >
            About
          </Link>
          <Link
            href="/#contact"
            onClick={closeMenu}
            className="block px-3 py-2 text-base font-semibold text-gray-800 hover:text-white hover:bg-[#5B6E3F] transition-all rounded-none"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
