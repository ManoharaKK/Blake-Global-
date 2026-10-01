'use client';

import React from 'react';

interface ProductGalleryProps {
  images?: string[];
  productName: string;
  brand?: string;
  subtitle?: string;
  packLabel?: string;
}

export default function ProductGallery({
  images = [],
  productName,
  brand = 'VitaBlake UK',
  subtitle,
  packLabel,
}: ProductGalleryProps) {
  const activeImage = images && images.length > 0 ? images[0] : null;

  return (
    <div className="w-full flex flex-col">
      {/* Main Showcase Image Container - Single Image Display */}
      <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] rounded-none overflow-hidden flex items-center justify-center bg-white border border-gray-200 shadow-md group">
        {activeImage ? (
          <img
            src={activeImage}
            alt={productName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-4 bg-white">
            <div className="w-56 h-80 bg-white rounded-none border-4 border-gray-200 shadow-2xl flex flex-col items-center justify-between p-4 relative overflow-hidden">
              <div className="w-32 h-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-none border-b border-gray-700"></div>
              <div className="w-full flex-1 rounded-none bg-[#4174D6] my-3 p-4 flex flex-col justify-between text-white text-center shadow-inner">
                <span className="text-xs font-extrabold uppercase tracking-widest opacity-90">{brand}</span>
                <div>
                  <div className="text-base font-black leading-tight">{productName}</div>
                  {subtitle && <div className="text-xs opacity-80 mt-1">{subtitle}</div>}
                  {packLabel && <div className="text-xs mt-1 font-bold opacity-90">{packLabel}</div>}
                </div>
                <span className="text-xs font-bold bg-white/20 rounded-none py-1 uppercase tracking-wider">Certified UK Formula</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
