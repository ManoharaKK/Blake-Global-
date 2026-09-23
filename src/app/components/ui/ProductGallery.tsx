'use client';

import React, { useState } from 'react';

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
  // Ensure we have 5 images for display as requested
  const displayImages = React.useMemo(() => {
    if (!images || images.length === 0) return [];
    let list = [...images];
    while (list.length < 5) {
      list.push(images[0]);
    }
    return list.slice(0, 5);
  }, [images]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeImage = displayImages[selectedIndex];

  return (
    <div className="w-full flex flex-col">
      {/* Main Showcase Image Container - Large Prominent Display (520px height) */}
      <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] rounded-none overflow-hidden flex items-center justify-center bg-white border border-gray-200 shadow-md group">
        {activeImage ? (
          <img
            src={activeImage}
            alt={`${productName} - View ${selectedIndex + 1}`}
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

      {/* 5 Thumbnails Gallery Row - Larger & Bold */}
      {displayImages.length > 0 && (
        <div className="w-full grid grid-cols-5 gap-2.5 mt-3">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              aria-label={`View image ${idx + 1}`}
              className={`relative h-20 sm:h-24 w-full bg-white border transition-all duration-200 overflow-hidden flex items-center justify-center rounded-none cursor-pointer ${
                selectedIndex === idx
                  ? 'border-[#4174D6] ring-2 ring-[#4174D6]/50 shadow-md scale-102'
                  : 'border-gray-200 opacity-70 hover:opacity-100 hover:border-gray-400'
              }`}
            >
              <img
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1 right-1 text-[9px] font-bold text-gray-800 bg-white/95 px-1.5 py-0.5 border border-gray-300">
                {idx + 1}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
