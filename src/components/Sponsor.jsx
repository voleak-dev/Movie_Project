import React from 'react';

const Sponsor = () => {
  const partners = [
    { id: 1, name: "Cellcard", logo: "/img/mk.jpg" },
    { id: 2, name: "Smart", logo: "/img/google.avif" },
    { id: 3, name: "ABA Bank", logo: "/img/mk.jpg" },
    { id: 4, name: "Legend Cinema", logo: "/img/mk.jpg" },
    
  ];

  return (
    <section className="bg-gray-950 py-12 border-t border-white/5 font-khmer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ចំណងជើងតូច */}
        <div className="text-center mb-10">
          <p className="text-gray-500 text-sm uppercase tracking-[0.2em]">ដៃគូសហការឧបត្ថម្ភ</p>
          <div className="h-0.5 w-12 bg-red-600 mx-auto mt-2"></div>
        </div>

        {/* Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
          {partners.map((brand) => (
            <div key={brand.id} className="grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer transform hover:scale-110">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-8 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sponsor;