import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & About Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-white tracking-tight">BlakeGlobal</span>
              <span className="text-xs font-semibold px-2.5 py-1 bg-[#5B6E3F] text-white border border-[#5B6E3F] rounded-none">
                UK & Sri Lanka
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Blake Global (PVT) LTD is the official Sri Lankan branch of Blake Global Holdings Ltd (UK), dedicated to bringing world-class UK-manufactured vitamins and nutraceutical supplements to Sri Lanka with complete transparency, safety, and trust.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-gray-400 font-medium">
              <span className="w-2 h-2 bg-[#5B6E3F]"></span>
              <span>UK Free Sales Certified • EU Standard Production</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#5B6E3F] pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#5B6E3F] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-[#5B6E3F] transition-colors">Products</Link>
              </li>
              <li>
                <Link href="/#why" className="hover:text-[#5B6E3F] transition-colors">Why Us</Link>
              </li>
              <li>
                <Link href="/#mission" className="hover:text-[#5B6E3F] transition-colors">Mission & Vision</Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#5B6E3F] transition-colors">Mother Company</Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#5B6E3F] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Policies Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#5B6E3F] pl-3">
              Legal & Policies
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/terms" className="hover:text-[#5B6E3F] transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-[#5B6E3F] transition-colors">Refund & Returns Policy</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#5B6E3F] transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact & HQ Column */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#5B6E3F] pl-3">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div>
                <span className="text-xs uppercase text-gray-500 font-bold block">Blake Global Sri Lanka</span>
                <p className="text-gray-300 mt-0.5">Official Importer & Distributor</p>
              </div>
              <div>
                <span className="text-xs uppercase text-gray-500 font-bold block">Direct Support</span>
                <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="text-[#5B6E3F] font-semibold hover:underline block mt-0.5">
                  💬 WhatsApp: +94 77 123 4567
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="mailto:info@blakegloballtd.com"
                  className="inline-flex items-center justify-center px-4 py-2 bg-[#5B6E3F] hover:bg-white hover:text-black text-white text-xs font-bold uppercase tracking-wider transition-all border border-[#5B6E3F] rounded-none"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Line */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Blake Global (PVT) LTD. All rights reserved.</p>
          <div className="flex items-center gap-4 text-gray-400">
            <Link href="/terms" className="hover:text-[#5B6E3F]">Terms</Link>
            <span>•</span>
            <Link href="/refund-policy" className="hover:text-[#5B6E3F]">Refunds</Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-[#5B6E3F]">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
