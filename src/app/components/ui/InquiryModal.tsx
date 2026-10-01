'use client';

import React, { useState, useEffect } from 'react';
import productsData from '../../data/product.json';

export interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialSku?: string;
}

export default function InquiryModal({
  isOpen,
  onClose,
  initialProduct = '',
  initialSku = '',
}: InquiryModalProps) {
  const products = Array.isArray(productsData)
    ? productsData
    : (productsData as any).products || [];

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(initialProduct || (products[0]?.name || 'VitaBlake DailyMax Multivitamin'));
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setSelectedProduct(initialProduct);
    } else if (products.length > 0 && !selectedProduct) {
      setSelectedProduct(products[0].title || products[0].name);
    }
  }, [initialProduct, isOpen]);

  if (!isOpen) return null;

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
      address,
      message,
      submittedAt: new Date().toISOString(),
    };

    try {
      await fetch('/api/inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const subject = encodeURIComponent(`Product Inquiry: ${selectedProduct} (${quantity} unit/s) - ${fullName}`);
      const body = encodeURIComponent(
        `Dear Blake Global Sales Team,\n\n` +
        `I would like to inquire / order the following product:\n\n` +
        `Product: ${selectedProduct}\n` +
        `Quantity: ${quantity}\n\n` +
        `Customer Details:\n` +
        `Name: ${fullName}\n` +
        `Email: ${email}\n` +
        `Phone/WhatsApp: ${phone}\n` +
        `Delivery Address/City: ${address || 'N/A'}\n\n` +
        `Message/Notes:\n${message || 'None'}\n\n` +
        `Thank you,\n${fullName}`
      );
      
      const mailtoUrl = `mailto:sales@blakegloballtd.com?subject=${subject}&body=${body}`;

      setIsSubmitting(false);
      setSubmitted(true);

      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 600);

    } catch (err: any) {
      console.error('Inquiry submission error:', err);
      setIsSubmitting(false);
      const subject = encodeURIComponent(`Product Inquiry: ${selectedProduct} - ${fullName}`);
      const body = encodeURIComponent(`Product: ${selectedProduct}\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);
      window.location.href = `mailto:sales@blakegloballtd.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-white border border-gray-200 shadow-2xl overflow-hidden rounded-none my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar with BG Logo */}
        <div className="bg-[#4174D6] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/home/Logo.png"
              alt="BlakeGlobal Logo"
              className="w-10 h-10 object-contain rounded-full border border-white/40 shadow-sm"
            />
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded-none block w-fit mb-0.5">
                Official Product Inquiry & Order Form
              </span>
              <h2 className="text-xl font-bold tracking-tight">
                Inquire / Order VitaBlake Now
              </h2>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            aria-label="Close inquiry modal"
            className="w-9 h-9 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all rounded-none"
          >
            ✕
          </button>
        </div>

        {/* Admin Recipient Notice Bar */}
        <div className="bg-slate-100 border-b border-gray-200 px-6 py-2.5 flex items-center justify-between text-xs text-gray-700">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Direct Recipient: <strong className="text-gray-900 font-bold">sales@blakegloballtd.com</strong>
          </span>
          <span className="text-gray-500 hidden sm:inline">Official Sri Lanka & UK Support</span>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Inquiry Submitted!
              </h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-gray-900">{fullName}</strong>. Your inquiry for{' '}
                <strong className="text-[#4174D6]">{selectedProduct}</strong> has been prepared and sent to{' '}
                <strong className="text-gray-900">sales@blakegloballtd.com</strong>.
              </p>
              <div className="p-4 bg-slate-50 border border-gray-200 text-xs text-gray-700 max-w-md mx-auto text-left space-y-1">
                <div><strong>Product:</strong> {selectedProduct} ({quantity} pack/s)</div>
                <div><strong>Phone / WhatsApp:</strong> {phone}</div>
                <div><strong>Email:</strong> {email}</div>
                <div><strong>Status:</strong> Sent to sales@blakegloballtd.com</div>
              </div>
              <p className="text-xs text-gray-500">
                Our sales team will get in touch with you shortly to confirm pricing, delivery, and payment options.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 bg-[#4174D6] text-white font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors rounded-none"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1">
                  Select Product *
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-[#4174D6] rounded-none font-semibold"
                  required
                >
                  {products.map((p: any) => {
                    const name = p.title || p.name;
                    const priceStr = p.price ? ` - Rs. ${p.price.toLocaleString('en-US')}.00` : '';
                    return (
                      <option key={p.id || p.slug} value={name}>
                        {name} {priceStr} ({p.sku})
                      </option>
                    );
                  })}
                  <option value="All VitaBlake Products / Bulk Inquiry">All VitaBlake Products / General Portfolio</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1">
                    Quantity (Packs/Bottles) *
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-full px-3 py-2 text-sm bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-[#4174D6] rounded-none font-bold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +94 77 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-[#4174D6] rounded-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-[#4174D6] rounded-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-[#4174D6] rounded-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1">
                  Delivery Address / City (Sri Lanka)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Colombo 03 / Kandy / Galle"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-[#4174D6] rounded-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-1">
                  Additional Notes / Questions (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Any specific questions regarding dosage, delivery, or bulk orders?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-[#4174D6] rounded-none"
                />
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors uppercase tracking-wider rounded-none"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-[#4174D6] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-black transition-colors shadow-md shadow-[#4174D6]/20 disabled:opacity-50 rounded-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Inquiry to sales@blakegloballtd.com</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
