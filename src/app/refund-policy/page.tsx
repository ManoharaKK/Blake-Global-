import React from 'react';
import Link from 'next/link';

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 pt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#5B6E3F] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Refund & Returns Policy</span>
        </nav>

        {/* Article Container */}
        <div className="bg-white p-8 sm:p-12 border border-gray-200 shadow-sm rounded-none">
          <span className="text-xs font-bold uppercase tracking-widest text-[#5B6E3F]">
            Blake Global (PVT) LTD
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-8 tracking-tight border-b border-gray-100 pb-4">
            Refund & Returns Policy
          </h1>

          <div className="space-y-8 text-gray-700 leading-relaxed text-base">
            
            {/* General Policy */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#5B6E3F] pl-3">
                General Policy
              </h2>
              <p>
                Due to the nature of vitamins, supplements, and wellness products, we follow strict return and refund guidelines to ensure product safety and hygiene.
              </p>
            </section>

            {/* Return Eligibility */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#5B6E3F] pl-3">
                Return Eligibility
              </h2>
              <p className="mb-2">A return will only be accepted if:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
                <li>The product is unopened, unused, and sealed</li>
                <li>The request is made within 7 days of receiving the order</li>
                <li>The product is in its original packaging</li>
                <li>Proof of purchase is provided</li>
              </ul>
            </section>

            {/* Non-Returnable Items */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#5B6E3F] pl-3">
                Non‑Returnable Items
              </h2>
              <p className="mb-2">We cannot accept returns for:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
                <li>Opened or unsealed products</li>
                <li>Products damaged after delivery</li>
                <li>Items purchased during promotions or clearance</li>
                <li>Products mixed with other items after delivery</li>
              </ul>
            </section>

            {/* Defective or Incorrect Items */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#5B6E3F] pl-3">
                Defective or Incorrect Items
              </h2>
              <p className="mb-2">If you receive a defective, damaged, or incorrect product:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
                <li>Email us within 48 hours</li>
                <li>Provide order number + photos</li>
                <li>We will replace the item or issue a refund after verification</li>
              </ul>
            </section>

            {/* Refund Process */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#5B6E3F] pl-3">
                Refund Process
              </h2>
              <p className="mb-2">If your return is approved:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
                <li>Refunds are issued within 14 business days</li>
                <li>Refunds are processed to the original payment method</li>
                <li>Delivery charges, courier fees, and promotional discounts are non‑refundable</li>
              </ul>
            </section>

            {/* Cancellations */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#5B6E3F] pl-3">
                Cancellations
              </h2>
              <p>
                Orders may only be cancelled before dispatch. Once shipped, the return policy applies.
              </p>
            </section>

            {/* Contact for Returns */}
            <section className="pt-6 border-t border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#5B6E3F] pl-3">
                Contact for Returns
              </h2>
              <p className="mb-4">To initiate a return or inquire about an order:</p>
              <div className="bg-slate-50 p-6 border border-gray-200 rounded-none space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-900">📧 Email:</span>
                  <a href="mailto:returns@blakegloballtd.com" className="text-[#5B6E3F] font-semibold hover:underline">
                    returns@blakegloballtd.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-900">💬 WhatsApp:</span>
                  <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="text-[#5B6E3F] font-semibold hover:underline">
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
