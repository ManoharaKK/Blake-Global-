import React from 'react';

export default function Why() {
  const points = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.594 15.12a2 2 0 00-1.022.547l-1.096 1.096A2 2 0 004 20.192h16a2 2 0 001.524-3.418l-2.096-2.096zM12 2v10m-3-6l3-3 3 3" />
        </svg>
      ),
      title: "Premium UK‑Manufactured Quality",
      description: "All our supplements are produced in the United Kingdom under strict manufacturing and safety standards, giving Sri Lankan customers access to world‑class nutrition they can trust."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Certified & Safe Products",
      description: "Every product is backed by UK Free Sales Certification and manufactured in certified facilities, ensuring purity, safety, and compliance with international regulations."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.594 15.12a2 2 0 00-1.022.547l-1.096 1.096A2 2 0 004 20.192h16a2 2 0 001.524-3.418l-2.096-2.096zM12 2v10m-3-6l3-3 3 3" />
        </svg>
      ),
      title: "Science‑Driven Formulations",
      description: "Our vitamins and wellness products are developed using advanced research, high‑grade ingredients, and proven nutritional science for maximum effectiveness."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V7.05M12 20a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      ),
      title: "Trusted Importer & Distributor",
      description: "Blake Global (PVT) LTD is the official Sri Lankan branch of Blake Global Holdings Ltd (UK), ensuring transparent sourcing, reliable import processes, and consistent product quality."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Wide Range of Wellness Solutions",
      description: "From multivitamins and liver support to beauty supplements, omega‑3, kids’ nutrition, and immunity boosters we offer complete wellness for the whole family."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Commitment to Customer Wellbeing",
      description: "Our mission is to improve everyday health in Sri Lanka through honest communication, reliable service, and products that genuinely support long‑term wellness."
    }
  ];

  return (
    <section id="why" className="py-24 bg-slate-50/50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider text-[#5B6E3F] uppercase">Why Choose Us</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Why Blake Global?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Dedicated to bringing world-class UK health, wellness, and nutraceutical products to Sri Lankan consumers with complete transparency and trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 bg-[#5B6E3F] text-white flex items-center justify-center font-bold mb-6 shadow-md group-hover:scale-105 transition-transform">
                  {pt.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5B6E3F] transition-colors">
                  {pt.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
