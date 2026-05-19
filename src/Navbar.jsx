import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 h-20 flex items-center transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-xl shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 w-full flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-headline-md text-2xl tracking-tight text-white">
            ELITE<span className="text-accent font-light italic">MOVERS</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-10">
          <a className="text-white/80 font-label-md tracking-wider hover:text-accent transition-colors text-xs" href="#services">SERVICES</a>
          <a className="text-white/80 font-label-md tracking-wider hover:text-accent transition-colors text-xs" href="#process">PROCESS</a>
          <a className="text-white/80 font-label-md tracking-wider hover:text-accent transition-colors text-xs" href="#why-choose-us">EXPERTISE</a>
          <a className="text-white/80 font-label-md tracking-wider hover:text-accent transition-colors text-xs" href="#testimonials">REVIEWS</a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="#contact" className="bg-accent text-primary px-7 py-3 rounded-sm font-label-md hover:bg-accent/90 transition-all active:scale-95 text-xs uppercase tracking-wider shadow-lg shadow-accent/20">
            CONTACT US
          </a>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-primary/98 backdrop-blur-xl border-b border-white/5 md:hidden">
          <nav className="flex flex-col items-center py-6 space-y-5">
            <a className="text-white/80 font-label-md tracking-wider hover:text-accent transition-colors text-xs" href="#services" onClick={() => setMobileMenuOpen(false)}>SERVICES</a>
            <a className="text-white/80 font-label-md tracking-wider hover:text-accent transition-colors text-xs" href="#process" onClick={() => setMobileMenuOpen(false)}>PROCESS</a>
            <a className="text-white/80 font-label-md tracking-wider hover:text-accent transition-colors text-xs" href="#why-choose-us" onClick={() => setMobileMenuOpen(false)}>EXPERTISE</a>
            <a className="text-white/80 font-label-md tracking-wider hover:text-accent transition-colors text-xs" href="#testimonials" onClick={() => setMobileMenuOpen(false)}>REVIEWS</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
