import React from 'react';

export default function Mission() {
  return (
    <section id="mission" className="py-24 bg-slate-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider text-[#4174D6] uppercase">
            Purpose & Values
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Our Mission & Vision
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Guiding Blake Global toward elevating Sri Lankan health standards through UK-manufactured excellence.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Featured Image Column */}
          <div className="lg:col-span-5 relative min-h-[360px] sm:min-h-[440px] bg-gray-900 border border-gray-200 shadow-sm overflow-hidden rounded-none">
            <img
              src="/images/products/VitaBlake Omega 3.JPG"
              alt="VitaBlake Omega 3 - Blake Global Mission & Vision"
              className="w-full h-full object-cover rounded-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-[#4174D6] text-white border border-[#4174D6] rounded-none inline-block mb-2">
                Blake Global UK & Sri Lanka
              </span>
              <h3 className="text-xl font-bold">World-Class UK Nutrition</h3>
            </div>
          </div>

          {/* Mission & Vision Cards Column */}
          <div className="lg:col-span-7 flex flex-col gap-8 justify-between">
            
            {/* Mission Card */}
            <div className="bg-white p-8 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#4174D6] transition-all duration-200 rounded-none flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  To deliver safe, high‑quality, UK‑manufactured vitamins and wellness supplements to Sri Lankan families through trusted sourcing, transparent processes, and science‑driven formulations. We aim to make world‑class nutrition accessible, reliable, and affordable across Sri Lanka.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#4174D6] uppercase tracking-wider">
                <span>Quality</span> • <span>Integrity</span> • <span>Accessibility</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#4174D6] transition-all duration-200 rounded-none flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  To become Sri Lanka’s most trusted importer and distributor of premium health supplements, recognised for quality, integrity, and customer wellbeing building a healthier nation with UK‑standard nutrition.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-gray-900 uppercase tracking-wider">
                <span>Trust</span> • <span>Wellbeing</span> • <span>Healthier Nation</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
