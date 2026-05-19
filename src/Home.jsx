import React from "react";

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Premium Logistics Fleet"
          className="w-full h-full object-cover object-center"
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-16 w-full py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 py-2 px-4 bg-accent/10 border border-accent/20 rounded-sm mb-8 backdrop-blur-sm">
            <span className="material-symbols-outlined text-accent text-sm filled-icon">local_shipping</span>
            <span className="text-accent font-label-md text-xs uppercase tracking-[0.2em]">
              Excellence in Motion
            </span>
          </div>

          <h1 className="font-headline-xl text-[52px] md:text-[64px] leading-[1.05] text-white mb-6 tracking-tight">
            Moving Made<br />
            <span className="text-accent">Simple, Safe</span><br />
            & Stress-Free
          </h1>

          <p className="font-body-lg text-body-lg text-white/70 mb-10 max-w-lg leading-relaxed">
            Professional packing and white-glove relocation services for luxury
            homes, corporate offices, and prestige vehicles. Experience the
            elite standard of care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-accent text-primary px-10 py-4 rounded-sm font-label-md hover:bg-accent/90 transition-all uppercase tracking-widest text-sm shadow-lg shadow-accent/20"
            >
              <span className="material-symbols-outlined text-lg">arrow_downward</span>
              Explore Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-10 py-4 rounded-sm font-label-md hover:bg-white/10 hover:border-white/50 transition-all uppercase tracking-widest text-sm backdrop-blur-sm"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              Call Our Team
            </a>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-y-4 gap-x-10 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-accent text-xl filled-icon">grade</span>
              <span className="text-sm font-semibold tracking-tight text-white">4.9 RATING</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-accent/60 text-xl">check_circle</span>
              <span className="text-sm text-white/60">5,000+ Moves Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-accent/60 text-xl">verified_user</span>
              <span className="text-sm text-white/60">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Home;
