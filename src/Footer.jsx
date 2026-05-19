import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-on-primary py-20 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="flex flex-col gap-8">
          <div className="font-headline-md text-2xl tracking-tight text-white">
            ELITE<span className="text-accent font-light italic">MOVERS</span>
          </div>
          <p className="text-sm text-on-primary/50 leading-relaxed max-w-xs">
            High-touch relocation services for corporate executives and private families since 2008.
          </p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-accent/60 cursor-pointer hover:text-accent transition-colors">public</span>
            <span className="material-symbols-outlined text-accent/60 cursor-pointer hover:text-accent transition-colors">mail</span>
            <span className="material-symbols-outlined text-accent/60 cursor-pointer hover:text-accent transition-colors">share</span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Our Services</h4>
          <div className="flex flex-col gap-4 text-sm text-on-primary/60">
            <a className="hover:text-accent transition-colors" href="#">Residential Relocation</a>
            <a className="hover:text-accent transition-colors" href="#">Corporate Office Moves</a>
            <a className="hover:text-accent transition-colors" href="#">Luxury Vehicle Logistics</a>
            <a className="hover:text-accent transition-colors" href="#">White-Glove Packing</a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Company</h4>
          <div className="flex flex-col gap-4 text-sm text-on-primary/60">
            <a className="hover:text-accent transition-colors" href="#">About Our Legacy</a>
            <a className="hover:text-accent transition-colors" href="#">Career Opportunities</a>
            <a className="hover:text-accent transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-accent transition-colors" href="#">Terms of Engagement</a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">The Dispatch</h4>
          <p className="text-xs text-on-primary/50 leading-relaxed">
            Stay updated on international moving regulations and luxury home tips.
          </p>
          <div className="flex h-12 bg-white/5 border border-white/10 p-1">
            <input
              className="bg-transparent border-none px-4 w-full focus:ring-0 text-sm text-white placeholder:text-white/20 outline-none"
              placeholder="Email Address"
              type="email"
            />
            <button className="bg-accent text-primary px-5 rounded-sm hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined text-xl">east</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-widest text-on-primary/30">
          © 2024 ELITE MOVERS. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-on-primary/30">
          <a className="hover:text-accent transition-colors" href="#">LICENSING</a>
          <a className="hover:text-accent transition-colors" href="#">SITEMAP</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;