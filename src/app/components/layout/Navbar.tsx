import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-white/70 backdrop-blur-xl border-b border-gray-200/60 shadow-lg shadow-black/5 transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-xl font-bold text-gray-900 tracking-tight">BlakeGlobal</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-semibold text-gray-700">
          <Link href="/#home" className="hover:text-[#5B6E3F] transition-colors">Home</Link>
          <Link href="/#products" className="hover:text-[#5B6E3F] transition-colors">Products</Link>
          <Link href="/#why" className="hover:text-[#5B6E3F] transition-colors">Why Us</Link>
          <Link href="/#mission" className="hover:text-[#5B6E3F] transition-colors">Mission</Link>
          <Link href="/#about" className="hover:text-[#5B6E3F] transition-colors">About</Link>
          <Link href="/#contact" className="hover:text-[#5B6E3F] transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar


