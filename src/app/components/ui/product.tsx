'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import productsData from '../../data/product.json';

export interface Ingredient {
  name: string;
  amount: string;
}

export interface PackSize {
  count: number;
  unit: string;
}

export interface Supply {
  label: string;
  minDays: number;
  maxDays: number;
}

export interface IngredientGroup {
  group: string;
  items: string[];
}

export interface ProductSection {
  heading: string;
  body: string;
}

export interface DosageByAge {
  age: string;
  dose: string;
  supplyDays: number;
}

export interface Product {
  id: string;
  sku?: string;
  slug: string;
  title?: string;
  name?: string;
  subtitle?: string;
  tagline?: string | null;
  brand?: string;
  category: string;
  packSize?: PackSize;
  supply?: Supply;
  price?: number | null;
  discountPrice?: number;
  currency?: string;
  stock?: {
    quantity: number;
    status: string;
  };
  featured?: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
  images?: string[];
  summary?: string;
  shortDescription?: string;
  description?: string | string[];
  suitableFor?: string[];
  keyIngredients?: string[];
  ingredientGroups?: IngredientGroup[];
  benefits?: string[];
  keyBenefits?: string[];
  sections?: ProductSection[];
  directions?: string;
  dosageByAge?: DosageByAge[];
  productAdvice?: string;
  warnings?: string[];
  allergens?: string[];
  certifications?: string[];
  specifications?: {
    form?: string;
    quantity?: string;
    countryOfOrigin?: string;
  };
  usage?: {
    dosage?: string;
  };
  _verify?: string[];
}

export default function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const products: Product[] = Array.isArray(productsData)
    ? (productsData as Product[])
    : (productsData.products as Product[]);

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 bg-[#4174D6]/10 text-[#4174D6] border border-[#4174D6]/20 rounded-none">
              UK Formulated Portfolio
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Featured VitaBlake Products
            </h2>
            <p className="mt-2 text-base text-gray-600 max-w-xl">
              Explore our range of UK manufactured vitamins and nutraceutical supplements brought directly to Sri Lanka.
            </p>
          </div>

          {/* Navigation Controls & Filter Tabs */}
          <div className="flex items-center gap-4 self-start md:self-auto">
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                aria-label="Previous products"
                className="w-11 h-11 bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-[#4174D6] hover:text-white hover:border-[#4174D6] transition-all duration-200 rounded-none"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll('right')}
                aria-label="Next products"
                className="w-11 h-11 bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-[#4174D6] hover:text-white hover:border-[#4174D6] transition-all duration-200 rounded-none"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap rounded-none ${
                activeCategory === cat
                  ? 'bg-[#4174D6] text-white shadow-md shadow-[#4174D6]/20'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory scrollbar-none scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredProducts.map((product) => {
            const productName = product.title || product.name || '';
            const productDesc = product.summary || product.shortDescription || (Array.isArray(product.description) ? product.description[0] : product.description) || '';
            const stockStatus = product.stock?.status || 'Available in Sri Lanka';
            const packLabel = product.packSize ? `${product.packSize.count} ${product.packSize.unit}` : product.specifications?.quantity || '';
            const certs = product.certifications || ["UK Manufactured", "GMP Certified"];

            return (
              <div
                key={product.id}
                className="snap-start shrink-0 w-[290px] sm:w-[340px] group bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#4174D6] transition-all duration-300 flex flex-col overflow-hidden rounded-none"
              >
                {/* Image Card Header (Full Size Image Space) */}
                <Link href={`/product/${product.slug}`} className="relative h-72 sm:h-80 w-full bg-white overflow-hidden border-b border-gray-100 rounded-none block">

                  {/* Product Image */}
                  {product.images && product.images[0] ? (
                    <img
                      src={product.images[0]}
                      alt={productName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none bg-white"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <div className="w-24 h-36 bg-white border-2 border-gray-200 shadow-md flex flex-col items-center justify-between p-2 relative overflow-hidden rounded-none">
                        <div className="w-14 h-4 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700"></div>
                        <div className={`w-full flex-1 bg-[#4174D6] my-1 p-2 flex flex-col justify-between text-white text-center shadow-inner`}>
                          <span className="text-[8px] font-bold uppercase opacity-80">{product.brand || 'VitaBlake'}</span>
                          <div>
                            <div className="text-[10px] font-extrabold leading-tight line-clamp-2">{productName}</div>
                            {packLabel && <div className="text-[7px] mt-0.5 opacity-90">{packLabel}</div>}
                          </div>
                          <span className="text-[7px] font-semibold bg-white/20 py-0.5">UK FORMULA</span>
                        </div>
                      </div>
                    </div>
                  )}
                </Link>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                      <span className="font-semibold text-[#4174D6]">{product.category}</span>
                      {product.sku && <span>SKU: {product.sku}</span>}
                    </div>

                    <Link href={`/product/${product.slug}`}>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#4174D6] transition-colors line-clamp-1">
                        {productName}
                      </h3>
                      {product.subtitle && (
                        <span className="text-xs text-gray-500 font-medium block mt-0.5">{product.subtitle}</span>
                      )}
                    </Link>

                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                      {productDesc}
                    </p>

                    {/* Certifications preview */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {certs.slice(0, 2).map((cert, idx) => (
                        <span key={idx} className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-none">
                          ✓ {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      {product.price ? (
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-extrabold text-gray-900">
                            {product.price} {product.currency || 'LKR'}
                          </span>
                        </div>
                      ) : (
                        <span className="text-sm font-extrabold text-gray-900">Inquire for Price</span>
                      )}
                      {packLabel && <span className="text-[10px] text-gray-500 block">{packLabel}</span>}
                    </div>

                    <Link
                      href={`/product/${product.slug}`}
                      className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-[#4174D6] hover:bg-black shadow-md shadow-[#4174D6]/20 transition-all duration-200 group-hover:px-5 rounded-none"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}