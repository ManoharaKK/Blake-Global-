import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import productsData from '../../data/product.json';
import ProductCarousel, { Product } from '../../components/ui/product';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const products: Product[] = productsData as Product[];
  const product = products.find(p => p.slug === slug || p.id === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50/50 py-12 pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-[#5B6E3F] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/#products" className="hover:text-[#5B6E3F] transition-colors">Products</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate">{product.name}</span>
        </nav>

        {/* Main Product Details Container */}
        <div className="bg-white rounded-none border border-gray-200 shadow-xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
            
            {/* Left: Product Visual Showcase */}
            <div className="lg:col-span-5 bg-slate-50 rounded-none p-8 border border-gray-100 flex flex-col items-center justify-center relative min-h-[380px]">
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.bestSeller && (
                  <span className="px-3 py-1 bg-[#5B6E3F] text-white text-xs font-bold rounded-none uppercase tracking-wider shadow-sm">
                    Best Seller
                  </span>
                )}
                {product.newArrival && (
                  <span className="px-3 py-1 bg-black text-white text-xs font-bold rounded-none uppercase tracking-wider shadow-sm">
                    New Arrival
                  </span>
                )}
              </div>

              {/* Product Image */}
              <div className="relative w-full h-80 sm:h-96 rounded-none overflow-hidden my-4 shadow-md">
                {product.images && product.images[0] ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-none"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <div className="w-40 h-60 bg-white rounded-none border-4 border-gray-200 shadow-2xl flex flex-col items-center justify-between p-3 relative overflow-hidden">
                      <div className="w-24 h-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-none border-b border-gray-700"></div>
                      <div className="w-full flex-1 rounded-none bg-[#5B6E3F] my-2 p-3 flex flex-col justify-between text-white text-center shadow-inner">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Blake Global UK</span>
                        <div>
                          <div className="text-xs font-black leading-tight">{product.name}</div>
                          <div className="text-[9px] mt-1 opacity-90">{product.specifications.quantity}</div>
                        </div>
                        <span className="text-[9px] font-bold bg-white/20 rounded-none py-1 uppercase tracking-wider">Certified UK Formula</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Certifications Badges Bar */}
              <div className="w-full flex flex-wrap justify-center gap-2 mt-4">
                {product.certifications.map((cert, i) => (
                  <span key={i} className="px-3 py-1 rounded-none text-xs font-semibold bg-white text-[#5B6E3F] border border-[#5B6E3F]/20 shadow-2xs">
                    ✓ {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Product Info & Actions */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#5B6E3F]">
                      {product.brand} • {product.category}
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                      {product.name}
                    </h1>
                    <span className="text-xs text-gray-500 font-mono mt-1 block">SKU: {product.sku}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-none text-xs font-bold ${
                    product.stock.status === 'In Stock'
                      ? 'bg-[#5B6E3F]/10 text-[#5B6E3F] border border-[#5B6E3F]/20'
                      : 'bg-black text-white'
                  }`}>
                    {product.stock.status}
                  </span>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-black text-gray-900">
                    ${product.discountPrice ?? product.price} {product.currency}
                  </span>
                  {product.discountPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      ${product.price}
                    </span>
                  )}
                  {product.discountPrice && (
                    <span className="px-2 py-0.5 text-xs font-bold text-[#5B6E3F] bg-[#5B6E3F]/10 rounded-none">
                      Save ${(product.price - product.discountPrice).toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Key Benefits */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-3">Key Benefits</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.keyBenefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-700 bg-slate-50 p-2.5 rounded-none border border-gray-100">
                        <span className="text-[#5B6E3F] font-bold">✓</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ingredients Breakdown */}
                {product.ingredients && product.ingredients.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-3">Active Ingredients</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.ingredients.map((ing, i) => (
                        <span key={i} className="px-3 py-1.5 bg-[#5B6E3F]/10 text-[#5B6E3F] rounded-none text-xs font-semibold border border-[#5B6E3F]/20">
                          {ing.name}: <strong className="text-[#5B6E3F]">{ing.amount}</strong>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Specifications & Dosage */}
                <div className="bg-slate-50 p-5 rounded-none border border-gray-200/80 mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-gray-500 uppercase block font-semibold">Form & Size</span>
                    <span className="text-gray-900 font-bold mt-0.5 block">{product.specifications.quantity} ({product.specifications.form})</span>
                  </div>
                  <div>
                    <span className="text-gray-500 uppercase block font-semibold">Origin</span>
                    <span className="text-gray-900 font-bold mt-0.5 block">{product.specifications.countryOfOrigin}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 uppercase block font-semibold">Dosage</span>
                    <span className="text-gray-900 font-bold mt-0.5 block">{product.usage.dosage}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                <Link
                  href="/#contact"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-none font-bold text-white bg-[#5B6E3F] hover:bg-black shadow-lg shadow-[#5B6E3F]/20 transition-all text-center uppercase tracking-wider text-sm"
                >
                  Inquire / Order Now
                </Link>
                <Link
                  href="/#products"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-none font-bold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-all text-center uppercase tracking-wider text-sm"
                >
                  Back to All Products
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Other Products Carousel Section */}
        <div className="pt-8 border-t border-gray-200">
          <ProductCarousel />
        </div>

      </div>
    </main>
  );
}
