import React from 'react';

interface HeroBannerProps {
  category: 'Gaming' | 'Photography' | 'Outdoor' | 'Entertainment';
  currentCity: string;
  onSelectSubcategory?: (subcat: any) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ category, currentCity, onSelectSubcategory }) => {
  if (category === 'Photography') {
    return (
      <section
        className="mb-6 rounded-2xl overflow-hidden relative shadow-lg bg-[#e53935] text-white p-6 sm:p-8 md:p-9 flex flex-col md:flex-row items-center justify-between gap-6"
        data-purpose="photography-banner"
      >
        {/* Subtle radial lighting / gradient finish */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#d32f2f] via-[#e53935] to-[#f44336] opacity-95" />
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />

        {/* Left Column: Heading, Subtitle & Brand Logos */}
        <div className="z-10 max-w-xl text-center md:text-left flex-1">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-white mb-3 border border-white/20 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#bef264] animate-pulse" />
            Instant Delivery in {currentCity}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2 leading-none">
            Cameras
          </h1>
          <p className="text-white/95 text-xs sm:text-sm md:text-base leading-relaxed mb-5 max-w-md">
            Rent cameras &amp; accessories from <span className="font-bold text-white underline decoration-[#bef264] decoration-2">SharePal</span>: DSLR, Mirrorless, GoPro, Insta-360, DJI on rent.
          </p>

          {/* Authentic Brand Logos Strip */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3 text-white">
            <span className="bg-white/20 backdrop-blur-xs px-3 py-1 rounded-md border border-white/30 font-serif font-black tracking-widest text-[11px] sm:text-xs shadow-xs">
              NIKON
            </span>
            <span className="bg-white/20 backdrop-blur-xs px-3 py-1 rounded-md border border-white/30 font-sans font-black tracking-widest text-[11px] sm:text-xs shadow-xs">
              CANON
            </span>
            <span className="bg-white/20 backdrop-blur-xs px-3 py-1 rounded-md border border-white/30 font-mono font-black tracking-widest text-[11px] sm:text-xs shadow-xs">
              SONY
            </span>
            <span className="bg-white/20 backdrop-blur-xs px-3 py-1 rounded-md border border-white/30 font-sans font-black tracking-wider text-[11px] sm:text-xs shadow-xs">
              GOPRO
            </span>
            <span className="bg-white/20 backdrop-blur-xs px-3 py-1 rounded-md border border-white/30 font-sans font-black tracking-widest text-[11px] sm:text-xs shadow-xs">
              DJI
            </span>
          </div>
        </div>

        {/* Right Column: Photographer Imagery & Real Camera Gear Assets */}
        <div className="z-10 flex items-center justify-center gap-3 sm:gap-4 shrink-0 mt-2 md:mt-0">
          {/* Photographer Imagery */}
          <div className="relative group">
            <div className="w-28 h-32 sm:w-36 sm:h-40 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-white/40 shadow-xl bg-black/20">
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=400&q=80"
                alt="Professional Photographer shooting"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2">
                <span className="text-[10px] sm:text-xs font-bold text-white bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-xs">
                  Pro Cameras
                </span>
              </div>
            </div>
          </div>

          {/* Featured Real Gear Cards from SharePal CDN */}
          <div className="flex flex-col gap-2.5">
            {/* Real DSLR Camera Card */}
            <div className="w-24 sm:w-32 bg-white rounded-xl p-2 shadow-lg border border-white/40 flex flex-col items-center text-center transform hover:-translate-y-0.5 transition-transform">
              <img
                src="https://images.sharepal.in/sub-category-card/dslr-cameras-on-rent-sharepal.webp"
                alt="DSLR Cameras"
                className="h-12 sm:h-14 w-full object-contain mix-blend-multiply"
              />
              <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-800 mt-1 line-clamp-1">
                DSLR Cameras
              </span>
              <span className="text-[9px] font-bold text-red-600">Zero Deposit</span>
            </div>

            {/* Real DJI Drone Card */}
            <div className="w-24 sm:w-32 bg-white rounded-xl p-2 shadow-lg border border-white/40 flex flex-col items-center text-center transform hover:-translate-y-0.5 transition-transform">
              <img
                src="https://images.sharepal.in/sub-category-card/DJI-Mini-4-Pro-RC2-drone.webp"
                alt="DJI 4K Drones"
                className="h-12 sm:h-14 w-full object-contain mix-blend-multiply"
              />
              <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-800 mt-1 line-clamp-1">
                DJI 4K Drones
              </span>
              <span className="text-[9px] font-bold text-red-600">Fly More</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (category === 'Outdoor') {
    return (
      <section
        className="mb-6 rounded-2xl overflow-hidden relative shadow-md bg-gradient-to-r from-[#14532d] via-[#166534] to-[#15803d] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        data-purpose="outdoor-banner"
      >
        <div className="z-10 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-emerald-200 mb-3 border border-white/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Instant Delivery in {currentCity}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
            Outdoor Gear
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed mb-4">
            Rent Trekking, riding, &amp; camping gear from <span className="font-bold text-white">SharePal</span>: Jackets, shoes, boots, backpacks, tents on rent.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 opacity-90 text-xs tracking-wider uppercase font-extrabold text-white">
            <span>RYNOX</span>
            <span className="text-white/40">|</span>
            <span>AXOR</span>
            <span className="text-white/40">|</span>
            <span>DECATHLON</span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20 flex flex-col items-center justify-center text-center shadow-lg">
            <span className="text-3xl">⛺</span>
            <span className="text-xs font-bold mt-1 text-white">Camping Tents</span>
            <span className="text-[10px] text-emerald-200">Waterproof</span>
          </div>
          <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20 flex flex-col items-center justify-center text-center shadow-lg">
            <span className="text-3xl">🏍️</span>
            <span className="text-xs font-bold mt-1 text-white">Riding Armor</span>
            <span className="text-[10px] text-emerald-200">CE Level 2</span>
          </div>
        </div>
      </section>
    );
  }

  if (category === 'Entertainment') {
    return (
      <section
        className="mb-6 rounded-2xl overflow-hidden relative shadow-md bg-gradient-to-r from-[#831843] via-[#9d174d] to-[#be185d] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        data-purpose="entertainment-banner"
      >
        <div className="z-10 max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-pink-200 mb-3 border border-white/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Instant Delivery in {currentCity}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
            Entertainment Gear
          </h1>
          <p className="text-pink-100 text-sm sm:text-base leading-relaxed mb-4">
            Rent Audio visual equipments from <span className="font-bold text-white">SharePal</span>: Speakers, projectors, microphones on rent.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 opacity-90 text-xs tracking-wider uppercase font-extrabold text-white">
            <span>JBL</span>
            <span className="text-white/40">|</span>
            <span>RODE</span>
            <span className="text-white/40">|</span>
            <span>SONY</span>
            <span className="text-white/40">|</span>
            <span>EPSON</span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20 flex flex-col items-center justify-center text-center shadow-lg">
            <span className="text-3xl">🔊</span>
            <span className="text-xs font-bold mt-1 text-white">Party Speakers</span>
            <span className="text-[10px] text-pink-200">High Bass</span>
          </div>
          <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20 flex flex-col items-center justify-center text-center shadow-lg">
            <span className="text-3xl">📽️</span>
            <span className="text-xs font-bold mt-1 text-white">120" Projectors</span>
            <span className="text-[10px] text-pink-200">Full HD</span>
          </div>
        </div>
      </section>
    );
  }

  // Default: GAMING CONSOLES
  return (
    <section
      className="mb-6 rounded-2xl overflow-hidden relative shadow-md bg-gradient-to-r from-[#2e0854] via-[#4c1d95] to-[#701a75] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
      data-purpose="gaming-banner"
    >
      <div className="z-10 max-w-xl text-center md:text-left">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-pink-200 mb-3 border border-white/10 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Instant Delivery in {currentCity}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
          Gaming Consoles
        </h1>
        <p className="text-purple-100 text-sm sm:text-base leading-relaxed mb-4">
          Rent the latest gaming gadgets from <span className="font-bold text-white">SharePal</span>: PS5, Xbox Series X, Oculus VR, Racing Wheels, and 100+ Games on flexible daily &amp; weekly rent.
        </p>

        {/* Brand Logos Strip */}
        <div className="flex items-center justify-center md:justify-start gap-5 opacity-90 text-xs tracking-wider uppercase font-semibold">
          <div
            onClick={() => onSelectSubcategory && onSelectSubcategory('Xbox Console')}
            className="flex items-center gap-1.5 hover:text-green-300 transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M4.198 3.126a11.96 11.96 0 0 0-2.029 3.036c1.782 1.936 4.675 3.994 6.784 4.885-1.92-2.738-3.79-6.398-4.755-7.921zm15.604 0c-.965 1.523-2.835 5.183-4.755 7.92 2.11-.89 5.002-2.948 6.784-4.884a11.96 11.96 0 0 0-2.029-3.036zM12 7.766C9.914 5.378 6.84 2.19 5.86.995A11.94 11.94 0 0 1 12 0c2.176 0 4.225.58 6.14 1.595-.98 1.195-4.054 4.383-6.14 6.171zM.583 8.358A11.935 11.935 0 0 0 0 12c0 5.485 3.69 10.106 8.72 11.536-1.583-2.316-2.91-5.69-3.418-8.583-1.636-1.572-3.805-4.52-4.72-6.595zm22.834 0c-.914 2.075-3.083 5.023-4.72 6.595-.507 2.893-1.834 6.267-3.417 8.583C20.31 22.106 24 17.485 24 12c0-1.267-.2-2.488-.583-3.642z"></path>
            </svg>
            <span>XBOX</span>
          </div>
          <span className="text-white/40">|</span>
          <div
            onClick={() => onSelectSubcategory && onSelectSubcategory('PS5 Console')}
            className="flex items-center gap-1.5 hover:text-blue-300 transition-colors cursor-pointer"
          >
            <span className="font-bold tracking-tighter text-sm">PS5</span>
            <span>PlayStation</span>
          </div>
          <span className="text-white/40">|</span>
          <div
            onClick={() => onSelectSubcategory && onSelectSubcategory('VR')}
            className="flex items-center gap-1.5 hover:text-pink-300 transition-colors cursor-pointer"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 3C6.477 3 2 7.477 2 13s4.477 10 10 10 10-4.477 10-10S17.523 3 12 3zm4.5 13.5h-9v-2h9v2zm0-4.5h-9v-2h9v2z"></path>
            </svg>
            <span>Meta Quest</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20 flex flex-col items-center justify-center text-center shadow-lg">
          <span className="text-3xl">🎮</span>
          <span className="text-xs font-bold mt-1 text-white">4K Gaming</span>
          <span className="text-[10px] text-purple-200">60/120 FPS</span>
        </div>
        <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20 flex flex-col items-center justify-center text-center shadow-lg">
          <span className="text-3xl">🕹️</span>
          <span className="text-xs font-bold mt-1 text-white">100+ Games</span>
          <span className="text-[10px] text-pink-200">Pre-installed</span>
        </div>
      </div>
    </section>
  );
};
