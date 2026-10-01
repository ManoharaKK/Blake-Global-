'use client';

import React, { useState } from 'react';
import productsData from '../../data/product.json';

export default function ContactSection() {
  const products = Array.isArray(productsData)
    ? productsData
    : (productsData as any).products || [];

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(products[0]?.name || 'VitaBlake DailyMax Multivitamin');
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      adminEmail: 'sales@blakegloballtd.com',
      fullName,
      email,
      phone,
      productName: selectedProduct,
      quantity,
      message,
      submittedAt: new Date().toISOString(),
    };

    try {
      await fetch('/api/inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const subject = encodeURIComponent(`Inquiry for ${selectedProduct} - ${fullName}`);
      const body = encodeURIComponent(
        `Dear Sales Team,\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nProduct: ${selectedProduct} (Qty: ${quantity})\nMessage: ${message}\n\nThank you!`
      );
      const mailtoUrl = `mailto:sales@blakegloballtd.com?subject=${subject}&body=${body}`;

      setIsSubmitting(false);
      setSubmitted(true);

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 500);

    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Information & Admin Mail Note */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 bg-[#4174D6]/10 text-[#4174D6] border border-[#4174D6]/20 rounded-none inline-block mb-3">
              Direct Contact & Orders
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Get in Touch with Blake Global
            </h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Have a question about VitaBlake vitamins, bulk distribution in Sri Lanka, or placing a direct order? Complete the form to send an inquiry directly to our sales team.
            </p>

            <div className="mt-8 space-y-4">
              {/* Direct Mail Box */}
              <div className="p-4 bg-white border border-gray-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 bg-[#4174D6] text-white flex items-center justify-center font-bold text-lg shrink-0">
                  ✉️
                </div>
                <div>
                  <span className="text-xs uppercase text-gray-500 font-bold block">Official Admin Email</span>
                  <a
                    href="mailto:sales@blakegloballtd.com"
                    className="text-base font-bold text-[#4174D6] hover:underline"
                  >
                    sales@blakegloballtd.com
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">All inquiries are dispatched directly to this email.</p>
                </div>
              </div>

              {/* WhatsApp Box */}
              <div className="p-4 bg-white border border-gray-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
                  💬
                </div>
                <div>
                  <span className="text-xs uppercase text-gray-500 font-bold block">Sri Lanka WhatsApp Support</span>
                  <a
                    href="https://wa.me/94771234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-emerald-700 hover:underline"
                  >
                    +94 77 123 4567
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">Instant assistance available during business hours.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 border border-gray-200 shadow-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Send Product Inquiry / Order Request
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              Fill out the form below. Your request will be sent directly to <strong className="text-gray-800">sales@blakegloballtd.com</strong>.
            </p>

            {submitted ? (
              <div className="p-6 bg-slate-50 border border-emerald-300 text-center space-y-3">
                <div className="text-3xl text-emerald-600 font-bold">✓</div>
                <h4 className="text-lg font-bold text-gray-900">Inquiry Sent Successfully!</h4>
                <p className="text-sm text-gray-600">
                  Thank you, <strong>{fullName}</strong>. Your message regarding <strong>{selectedProduct}</strong> has been routed to <strong>sales@blakegloballtd.com</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-[#4174D6] text-white text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors rounded-none mt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-none focus:outline-none focus:border-[#4174D6]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-none focus:outline-none focus:border-[#4174D6]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      placeholder="+94 77 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-none focus:outline-none focus:border-[#4174D6]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Select Product *
                    </label>
                    <select
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-none focus:outline-none focus:border-[#4174D6] font-semibold"
                    >
                      {products.map((p: any) => (
                        <option key={p.id || p.slug} value={p.title || p.name}>
                          {p.title || p.name}
                        </option>
                      ))}
                      <option value="General Inquiry">General / Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Your Message / Order Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide any specific details or questions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-none focus:outline-none focus:border-[#4174D6]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#4174D6] hover:bg-black text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg transition-colors disabled:opacity-50 rounded-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry to sales@blakegloballtd.com'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
