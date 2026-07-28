import Image from "next/image";
import Hero from "./components/ui/hero";
import ProductCarousel from "./components/ui/product";
import Why from "./components/ui/Why";
import Mission from "./components/ui/Mission";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="relative z-10 bg-white shadow-2xl">
        <ProductCarousel />
        <Why />
        <Mission />

        {/* About Section */}
        <section id="about" className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="text-sm font-semibold tracking-wider text-[#5B6E3F] uppercase">Mother Company</span>
                  <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                    About Blake Global Holdings Ltd (UK)
                  </h2>
                  
                  <div className="mt-6 space-y-4 text-gray-600 leading-relaxed text-base sm:text-lg">
                    <p>
                      <strong className="text-gray-900 font-semibold">Blake Global Holdings Ltd</strong> is a UK‑based health and wellness company specialising in the development, manufacturing, and export of premium vitamins, dietary supplements, and nutraceutical products. Established with a commitment to quality, safety, and scientific innovation, the company operates under strict UK and EU regulatory standards, ensuring every product meets internationally recognised manufacturing and testing requirements.
                    </p>
                    <p>
                      Our formulations are created using high‑grade ingredients, advanced research, and modern production technology. Each product is manufactured in certified UK facilities and supported by Free Sales Certification, giving global partners full confidence in safety, purity, and compliance.
                    </p>
                    <p>
                      Blake Global Holdings Ltd supplies a wide range of wellness products including multivitamins, liver support formulas, beauty supplements, omega‑3 fish oil, kids’ nutrition, and immunity boosters to international markets through trusted distribution partners.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-[#5B6E3F]/10 border-l-4 border-[#5B6E3F] rounded-none text-gray-800 font-medium">
                  As the parent company of Blake Global (PVT) LTD Sri Lanka, we are proud to bring world‑class UK nutrition to Sri Lankan consumers through reliable import channels, transparent quality assurance, and a shared mission to improve everyday health.
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col">
                {/* Main Card Container (Light Theme, Full Height) */}
                <div className="h-full flex flex-col justify-between bg-slate-50 rounded-none p-7 border border-gray-200 shadow-sm">
                  <div>
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none text-xs font-semibold bg-[#5B6E3F]/10 text-[#5B6E3F] border border-[#5B6E3F]/20 mb-2">
                          <span className="w-2 h-2 rounded-none bg-[#5B6E3F] animate-pulse"></span>
                          UK & EU STANDARDS
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                          Global Quality & Standards
                        </h3>
                      </div>
                    </div>

                    {/* Feature Items List */}
                    <div className="space-y-3.5">
                      {/* Card 1 */}
                      <div className="group/item flex items-start gap-4 p-4 rounded-none bg-white/90 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5B6E3F] transition-all duration-200">
                        <div className="w-11 h-11 rounded-none bg-[#5B6E3F] text-white flex items-center justify-center font-bold shrink-0 shadow-md shadow-[#5B6E3F]/20 group-hover/item:scale-105 transition-transform">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 group-hover/item:text-[#5B6E3F] transition-colors">UK Certified Facilities</h4>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                            Manufactured under strict UK and EU regulatory guidelines ensuring international compliance.
                          </p>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="group/item flex items-start gap-4 p-4 rounded-none bg-white/90 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5B6E3F] transition-all duration-200">
                        <div className="w-11 h-11 rounded-none bg-[#5B6E3F] text-white flex items-center justify-center font-bold shrink-0 shadow-md shadow-[#5B6E3F]/20 group-hover/item:scale-105 transition-transform">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 group-hover/item:text-[#5B6E3F] transition-colors">Free Sales Certification</h4>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                            Supported by official certification for complete safety, purity, and global export confidence.
                          </p>
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div className="group/item flex items-start gap-4 p-4 rounded-none bg-white/90 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5B6E3F] transition-all duration-200">
                        <div className="w-11 h-11 rounded-none bg-[#5B6E3F] text-white flex items-center justify-center font-bold shrink-0 shadow-md shadow-[#5B6E3F]/20 group-hover/item:scale-105 transition-transform">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.594 15.12a2 2 0 00-1.022.547l-1.096 1.096A2 2 0 004 20.192h16a2 2 0 001.524-3.418l-2.096-2.096zM12 2v10m-3-6l3-3 3 3" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 group-hover/item:text-[#5B6E3F] transition-colors">Scientific Nutraceutical Formulations</h4>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                            Formulated with high-grade ingredients and modern production technology for maximum purity.
                          </p>
                        </div>
                      </div>

                      {/* Card 4 */}
                      <div className="group/item flex items-start gap-4 p-4 rounded-none bg-white/90 border border-gray-200 shadow-sm hover:shadow-md hover:border-[#5B6E3F] transition-all duration-200">
                        <div className="w-11 h-11 rounded-none bg-[#5B6E3F] text-white flex items-center justify-center font-bold shrink-0 shadow-md shadow-[#5B6E3F]/20 group-hover/item:scale-105 transition-transform">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V7.05M12 20a8 8 0 100-16 8 8 0 000 16z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 group-hover/item:text-[#5B6E3F] transition-colors">Blake Global Sri Lanka Connection</h4>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                            Bringing premium UK nutrition directly to Sri Lankan consumers through reliable import channels.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Get in Touch</h2>
              <p className="mt-4 text-lg text-gray-600">
                Ready to start your next project? Contact us today to learn how we can help.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <a
                  href="mailto:contact@blackeglobal.com"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-none shadow-sm text-white bg-[#5B6E3F] hover:bg-black transition-colors"
                >
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
