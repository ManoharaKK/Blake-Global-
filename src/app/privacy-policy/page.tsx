import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 pt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#4174D6] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Privacy Policy</span>
        </nav>

        {/* Article Container */}
        <div className="bg-white p-8 sm:p-12 border border-gray-200 shadow-sm rounded-none">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4174D6]">
            Blake Global (PVT) LTD
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-8 tracking-tight border-b border-gray-100 pb-4">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-gray-700 leading-relaxed text-base">
            
            {/* Introduction */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#4174D6] pl-3">
                Introduction
              </h2>
              <p>
                This Privacy Policy explains how Blake Global (PVT) LTD collects, uses, and protects your personal information when you interact with our website or services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#4174D6] pl-3">
                Information We Collect
              </h2>
              <p className="mb-2">We may collect:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
                <li>Name, address, email, phone number</li>
                <li>Order history and purchase details</li>
                <li>Payment information (processed securely by third‑party gateways)</li>
                <li>Device and browser data</li>
                <li>Website usage analytics</li>
                <li>Communication records (emails, inquiries, feedback)</li>
              </ul>
              <p className="mt-3 font-semibold text-gray-900">
                We do not store credit card numbers or sensitive payment data.
              </p>
            </section>

            {/* How We Collect Information */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#4174D6] pl-3">
                How We Collect Information
              </h2>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
                <li>Directly from you (orders, forms, inquiries)</li>
                <li>Automatically via cookies and analytics</li>
                <li>From trusted third‑party partners (payment gateways, logistics providers)</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#4174D6] pl-3">
                How We Use Your Information
              </h2>
              <p className="mb-2">We use your data to:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
                <li>Process orders</li>
                <li>Deliver products</li>
                <li>Improve website performance</li>
                <li>Provide customer support</li>
                <li>Send updates or promotional messages (only with consent)</li>
                <li>Ensure legal compliance and fraud prevention</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#4174D6] pl-3">
                Data Protection
              </h2>
              <p>
                We follow strict data protection standards. Your information is never sold or shared with unauthorized parties.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#4174D6] pl-3">
                Cookies
              </h2>
              <p>
                Our website uses cookies to improve user experience and analyze traffic. You may disable cookies through your browser settings.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#4174D6] pl-3">
                Third‑Party Services
              </h2>
              <p className="mb-2">We work with secure partners such as:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
                <li>Payment processors</li>
                <li>Courier services</li>
                <li>Analytics platforms</li>
              </ul>
              <p className="mt-2 text-sm text-gray-500">These partners follow their own privacy policies.</p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#4174D6] pl-3">
                Your Rights
              </h2>
              <p className="mb-2">You may request:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
                <li>Access to your data</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your data (where legally allowed)</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="pt-6 border-t border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#4174D6] pl-3">
                Contact Information
              </h2>
              <p className="mb-4">For privacy inquiries or data requests, please contact us:</p>
              <div className="bg-slate-50 p-6 border border-gray-200 rounded-none space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-900">📧 Email:</span>
                  <a href="mailto:privacy@blakegloballtd.com" className="text-[#4174D6] font-semibold hover:underline">
                    privacy@blakegloballtd.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-900">💬 WhatsApp:</span>
                  <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="text-[#4174D6] font-semibold hover:underline">
                    +94 77 123 4567
                  </a>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
