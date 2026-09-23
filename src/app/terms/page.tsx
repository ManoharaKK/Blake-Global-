import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 pt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#4174D6] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Terms of Service</span>
        </nav>

        {/* Article Container */}
        <div className="bg-white p-8 sm:p-12 border border-gray-200 shadow-sm rounded-none">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4174D6]">
            Blake Global (PVT) LTD
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-8 tracking-tight border-b border-gray-100 pb-4">
            Terms of Service
          </h1>

          <div className="space-y-8 text-gray-700 leading-relaxed text-base">
            
            {/* Overview */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#4174D6] pl-3">
                Overview
              </h2>
              <p>
                Welcome to Blake Global (PVT) LTD. By accessing or using our website, purchasing our products, or engaging with our services, you agree to be bound by these Terms of Service. If you do not agree, please discontinue use of our website.
              </p>
              <p className="mt-3">
                We reserve the right to update or modify these Terms at any time. Continued use of our website constitutes acceptance of any changes.
              </p>
            </section>

            {/* Online Store Terms */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#4174D6] pl-3">
                Online Store Terms
              </h2>
              <p>
                By using our website, you confirm that you are at least 18 years old or have legal parental/guardian consent. You agree not to use our products for any illegal or unauthorized purpose.
              </p>
            </section>

            {/* General Conditions */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#4174D6] pl-3">
                General Conditions
              </h2>
              <p>
                Your content (excluding payment information) may be transferred unencrypted across networks. Payment information is always encrypted and processed securely by third‑party payment gateways.
              </p>
            </section>

            {/* Accuracy of Information */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#4174D6] pl-3">
                Accuracy of Information
              </h2>
              <p>
                We strive to provide accurate and updated information. However, we are not responsible for inaccuracies, outdated content, or omissions. Product descriptions, pricing, and availability may change without notice.
              </p>
            </section>

            {/* Products & Services */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#4174D6] pl-3">
                Products & Services
              </h2>
              <p>
                All supplements sold by Blake Global are manufactured in the United Kingdom under strict quality standards. We reserve the right to limit quantities, discontinue products, or refuse service at our discretion.
              </p>
            </section>

            {/* Billing & Account Information */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#4174D6] pl-3">
                Billing & Account Information
              </h2>
              <p>
                You agree to provide accurate billing and contact information. We may refuse or cancel orders if fraudulent or suspicious activity is detected.
              </p>
            </section>

            {/* Third-Party Tools & Links */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#4174D6] pl-3">
                Third‑Party Tools & Links
              </h2>
              <p>
                Our website may contain links to third‑party services. We are not responsible for their content, policies, or actions.
              </p>
            </section>

            {/* Prohibited Uses */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#4174D6] pl-3">
                Prohibited Uses
              </h2>
              <p className="mb-2">You may not use our website for:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Fraudulent activity</li>
                <li>Violating laws or regulations</li>
                <li>Uploading harmful code</li>
                <li>Collecting personal data without consent</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#4174D6] pl-3">
                Limitation of Liability
              </h2>
              <p>
                We are not liable for any damages arising from the use of our website or products, except where required by Sri Lankan law.
              </p>
            </section>

            {/* Contact Information */}
            <section className="pt-6 border-t border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#4174D6] pl-3">
                Contact Information
              </h2>
              <p className="mb-4">For questions regarding these Terms, please reach out to us:</p>
              <div className="bg-slate-50 p-6 border border-gray-200 rounded-none space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-900">📧 Email:</span>
                  <a href="mailto:info@blakegloballtd.com" className="text-[#4174D6] font-semibold hover:underline">
                    info@blakegloballtd.com
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
