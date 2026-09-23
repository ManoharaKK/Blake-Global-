import React from 'react'

export default function Hero() {
  return (
    <section
      id="home"
      className="sticky top-0 z-0 w-full h-screen min-h-screen flex items-end justify-center text-white pb-24 sm:pb-28 lg:pb-36 overflow-hidden relative"
    >
      {/* Background video container */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        <source src="/images/home/HeroVideo.mp4" type="video/mp4" />
      </video>

      {/* Bottom to Top Dark Gradient Shadow Overlay */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-black/20 to-black/0 pointer-events-none"
      />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="m-0 font-bold text-4xl uppercase sm:text-6xl lg:text-7xl tracking-tight leading-none drop-shadow-lg">
          BlackeGlobal
        </h1>
        <p className="mt-3 text-lg sm:text-xl lg:text-2xl opacity-95 max-w-2xl mx-auto drop-shadow-md">
          Official Sri Lankan distributor of premium UK-manufactured vitamins and supplements, delivering trusted wellness products backed by quality, safety, and science.
        </p>
        <div className="mt-6">
          <a
            href="#products"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#4174D6] hover:bg-black text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-200 shadow-xl border border-[#4174D6] hover:border-black rounded-none"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  )
}
