import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import productsData from '../../data/product.json';
import ProductCarousel, { Product } from '../../components/ui/product';
import ProductGallery from '../../components/ui/ProductGallery';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  
  const rawData: any = productsData;
  const products: Product[] = Array.isArray(rawData) ? rawData : rawData.products;
  const brandData = Array.isArray(rawData) ? null : rawData.brand;
  
  const product = products.find(p => p.slug === slug || p.id === slug);

  if (!product) {
    notFound();
  }

  const productName = product.title || product.name || '';
  const descriptions = Array.isArray(product.description)
    ? product.description
    : product.description ? [product.description] : [];

  const benefitsList = product.benefits || product.keyBenefits || [];
  const certsList = product.certifications || [
    "MHRA Certified",
    "FSSC 22000",
    "GMP Certified",
    "UK Manufactured"
  ];

  const packLabel = product.packSize
    ? `${product.packSize.count} ${product.packSize.unit}`
    : product.specifications?.quantity || '';

  const supplyLabel = product.supply?.label || '';

  return (
    <main className="min-h-screen bg-slate-50/50 py-12 pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 overflow-x-auto">
          <Link href="/" className="hover:text-[#4174D6] transition-colors whitespace-nowrap">Home</Link>
          <span>/</span>
          <Link href="/#products" className="hover:text-[#4174D6] transition-colors whitespace-nowrap">Products</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate">{productName}</span>
        </nav>

        {/* Main Product Details Container */}
        <div className="bg-white rounded-none border border-gray-200 shadow-xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-start">
            
            {/* Left: Product Visual Showcase (50% width) */}
            <div className="lg:col-span-6 bg-slate-50/70 rounded-none p-4 sm:p-6 border border-gray-200/80 flex flex-col justify-start relative lg:sticky lg:top-28 self-start">


              {/* Interactive 5-Image Gallery */}
              <ProductGallery
                images={product.images}
                productName={productName}
                brand={product.brand}
                subtitle={product.subtitle}
                packLabel={packLabel}
              />

              {/* Certifications Badges Bar */}
              <div className="w-full flex flex-wrap justify-center gap-2 mt-4 pt-4 border-t border-gray-200/60">
                {certsList.map((cert, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-none text-xs font-semibold bg-white text-[#4174D6] border border-[#4174D6]/20 shadow-2xs">
                    ✓ {cert}
                  </span>
                ))}
              </div>

              {/* Quick Product Specs Box */}
              <div className="w-full mt-4 p-4 bg-white border border-gray-200/80 space-y-2.5 text-xs shadow-xs">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100 font-semibold text-gray-900">
                  <span className="text-gray-500 uppercase">Origin</span>
                  <span className="text-[#4174D6] font-bold">United Kingdom (UK)</span>
                </div>
                {packLabel && (
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100 font-semibold">
                    <span className="text-gray-500 uppercase">Pack Size</span>
                    <span className="text-gray-900">{packLabel}</span>
                  </div>
                )}
                {supplyLabel && (
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100 font-semibold">
                    <span className="text-gray-500 uppercase">Supply Length</span>
                    <span className="text-[#4174D6] font-bold">{supplyLabel}</span>
                  </div>
                )}
                {product.directions && (
                  <div className="pt-1">
                    <span className="text-gray-500 uppercase block font-semibold mb-1">Recommended Usage</span>
                    <span className="text-gray-800 leading-snug block bg-slate-50 p-2 border border-gray-100">{product.directions}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Product Info & Main Actions (50% width) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="border-b border-gray-100 pb-4 mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4174D6]">
                      {product.brand || 'VitaBlake'} • {product.category}
                    </span>
                    {product.sku && <span className="text-xs text-gray-500 font-mono">SKU: {product.sku}</span>}
                  </div>
                  
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                    {productName}
                  </h1>
                  
                  {product.subtitle && (
                    <h2 className="text-base sm:text-lg font-semibold text-gray-600 mt-0.5">
                      {product.subtitle}
                    </h2>
                  )}

                  {product.tagline && (
                    <div className="mt-2 inline-block px-3 py-1 bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
                      "{product.tagline}"
                    </div>
                  )}
                </div>

                {/* Supply & Pack Details Banner */}
                <div className="flex flex-wrap items-center gap-4 p-4 bg-slate-50 border border-gray-200 mb-6">
                  {packLabel && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 uppercase font-semibold">Pack Size:</span>
                      <span className="text-xs font-bold text-gray-900 bg-white px-2.5 py-1 border border-gray-200">{packLabel}</span>
                    </div>
                  )}
                  {supplyLabel && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 uppercase font-semibold">Supply:</span>
                      <span className="text-xs font-bold text-[#4174D6] bg-white px-2.5 py-1 border border-[#4174D6]/30">{supplyLabel}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 uppercase font-semibold">Price:</span>
                    <span className="text-xs font-bold text-gray-900 bg-white px-2.5 py-1 border border-gray-200">
                      {product.price ? `${product.price} ${product.currency || 'LKR'}` : 'Inquire for Pricing'}
                    </span>
                  </div>
                </div>

                {/* Summary / Lead Text */}
                {product.summary && (
                  <p className="text-base font-medium text-gray-800 leading-relaxed mb-6 bg-slate-50/80 p-4 border-l-4 border-[#4174D6]">
                    {product.summary}
                  </p>
                )}

                {/* Description Paragraphs */}
                <div className="space-y-4 text-sm text-gray-700 leading-relaxed mb-6">
                  {descriptions.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Suitable For */}
                {product.suitableFor && product.suitableFor.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">Suitable For</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.suitableFor.map((target, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium border border-gray-200">
                          🎯 {target}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Benefits */}
                {benefitsList.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">Key Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {benefitsList.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-gray-800 bg-slate-50 p-3 border border-gray-100">
                          <span className="text-[#4174D6] font-bold text-sm">✓</span>
                          <span className="leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100 mt-6">
                <Link
                  href="/#contact"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-none font-bold text-white bg-[#4174D6] hover:bg-black shadow-lg shadow-[#4174D6]/20 transition-all text-center uppercase tracking-wider text-sm"
                >
                  Inquire / Order VitaBlake Now
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

        {/* Detailed Sections: Ingredients & Groupings */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Active Ingredients Card */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-gray-200 shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#4174D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.594 15.12a2 2 0 00-1.022.547l-1.096 1.096A2 2 0 004 20.192h16a2 2 0 001.524-3.418l-2.096-2.096zM12 2v10m-3-6l3-3 3 3" />
              </svg>
              Key Active Ingredients
            </h3>

            {/* Ingredient Groups if available */}
            {product.ingredientGroups && product.ingredientGroups.length > 0 ? (
              <div className="space-y-4">
                {product.ingredientGroups.map((group, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 border border-gray-100">
                    <span className="text-xs font-bold text-[#4174D6] uppercase tracking-wider block mb-2">{group.group}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item, itemIdx) => (
                        <span key={itemIdx} className="px-2.5 py-1 bg-white text-gray-800 text-xs font-semibold border border-gray-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : product.keyIngredients && product.keyIngredients.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {product.keyIngredients.map((ing, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-[#4174D6]/10 text-[#4174D6] border border-[#4174D6]/20 text-xs font-semibold">
                    🌿 {ing}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-xs text-gray-500">Premium UK formulated quality ingredients.</p>
            )}

            {/* Directions & Storage */}
            {product.directions && (
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-1">Directions for Use</h4>
                <p className="text-xs text-gray-700 bg-slate-50 p-3 border border-gray-100">{product.directions}</p>
              </div>
            )}
          </div>

          {/* Product Advice & Safety Notices */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 border border-gray-200 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#4174D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Safety & Product Advice
              </h3>

              {product.productAdvice && (
                <div className="mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Product Advice</h4>
                  <p className="text-xs text-gray-600 bg-amber-50/50 p-3 border border-amber-200/60 leading-relaxed">
                    {product.productAdvice}
                  </p>
                </div>
              )}

              {product.warnings && product.warnings.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-1">Important Warnings</h4>
                  <div className="space-y-1.5">
                    {product.warnings.map((warn, idx) => (
                      <div key={idx} className="text-xs text-rose-900 bg-rose-50 p-3 border border-rose-200 font-medium">
                        ⚠️ {warn}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.allergens && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Allergens</h4>
                  {product.allergens.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {product.allergens.map((allergen, idx) => (
                        <span key={idx} className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
                          Contains: {allergen}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-xs text-gray-500">No major common allergens specified on label.</span>
                  )}
                </div>
              )}
            </div>

            {/* Dosage By Age if available (e.g. Smart Kids) */}
            {product.dosageByAge && product.dosageByAge.length > 0 && (
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">Dosage Guide By Age</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left text-gray-700 border border-gray-200">
                    <thead className="bg-slate-100 text-gray-900 font-bold uppercase">
                      <tr>
                        <th className="p-2 border-b border-r">Age Group</th>
                        <th className="p-2 border-b border-r">Recommended Dose</th>
                        <th className="p-2 border-b">Supply Days</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.dosageByAge.map((row, idx) => (
                        <tr key={idx} className="border-b last:border-b-0 hover:bg-slate-50">
                          <td className="p-2 border-r font-semibold">{row.age}</td>
                          <td className="p-2 border-r">{row.dose}</td>
                          <td className="p-2 font-bold text-[#4174D6]">{row.supplyDays} days</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Deep Dive Sections (e.g. "What is Collagen?", "What Does DailyMax Do?", etc.) */}
        {product.sections && product.sections.length > 0 && (
          <div className="bg-white p-6 sm:p-10 border border-gray-200 shadow-lg mb-16">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              Detailed Product Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.sections.map((sec, idx) => (
                <div key={idx} className="bg-slate-50/70 p-6 border border-gray-100">
                  <h4 className="text-base font-bold text-[#4174D6] mb-2">{sec.heading}</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{sec.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Manufacturing Quality Assurance Standards Section */}
        {brandData?.qualityAssurance && (
          <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white p-8 sm:p-12 mb-16 shadow-2xl">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#8FA36C]">
                {brandData.name} Standard of Excellence
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-2 tracking-tight">
                {brandData.qualityAssurance.heading}
              </h3>
              <p className="text-sm text-gray-300 mt-2">
                All VitaBlake products are manufactured in the UK under stringent quality certifications distributed across Europe and now available in Sri Lanka.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {brandData.qualityAssurance.standards.map((std: any, idx: number) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md p-4 border border-white/10">
                  <div className="flex items-center gap-2 text-[#8FA36C] font-bold text-sm mb-1">
                    <span>🛡️</span>
                    <span>{std.name}</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {std.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Carousel of Other VitaBlake Products */}
        <div className="pt-8 border-t border-gray-200">
          <ProductCarousel />
        </div>

      </div>
    </main>
  );
}

