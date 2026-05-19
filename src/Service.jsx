import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "home",
    title: "Home Shifting",
    tagline: "Seamless Residential Moves",
    description:
      "Our dedicated home shifting service ensures your belongings are moved with the utmost care and precision. From initial consultation to final placement, our trained professionals handle every aspect of your residential relocation.",
    features: [
      "Dedicated floor & wall protection systems",
      "Full furniture disassembly and reassembly",
      "Climate-controlled transit for sensitive items",
      "GPS-tracked fleet with real-time updates",
    ],
    image: "/images/home-shifting.png",
  },
  {
    icon: "apartment",
    title: "Office Relocation",
    tagline: "Zero Downtime Corporate Moves",
    description:
      "We specialize in minimizing business disruption during corporate relocations. Our systematic approach includes equipment tagging, IT infrastructure handling, and weekend execution to ensure you're operational by Monday morning.",
    features: [
      "Systematic equipment tagging & inventory",
      "IT infrastructure safe disconnect & reconnect",
      "Weekend & after-hours execution options",
      "Dedicated project manager assigned",
    ],
    image: "/images/office-relocation.png",
  },
  {
    icon: "directions_car",
    title: "Vehicle Transport",
    tagline: "Premium Auto Logistics",
    description:
      "Whether it's a classic collector's piece or a modern luxury sedan, our enclosed and open-air carriers ensure scratch-free delivery. Every vehicle is secured with soft-tie systems and fully insured throughout transit.",
    features: [
      "Enclosed & open-air carrier options",
      "Soft-tie securing systems for paint protection",
      "Comprehensive transit insurance included",
      "Door-to-door delivery nationwide",
    ],
    image: "/images/vehicle-transport.png",
  },
  {
    icon: "inventory_2",
    title: "Packing & Unpacking",
    tagline: "White-Glove Material Care",
    description:
      "Our white-glove packing specialists use premium sustainable materials and custom crating solutions. Each item is inventoried, carefully wrapped, and organized for efficient unpacking at your new location.",
    features: [
      "Premium sustainable packing materials",
      "Custom wooden crating for valuables",
      "Detailed inventory & labeling system",
      "Full unpacking & debris removal",
    ],
    image: "/images/packing-unpacking.png",
  },
];

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-28 bg-surface" 
      id="services"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-accent font-label-md text-xs uppercase tracking-[0.3em] block mb-4">
            What we do
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            Our Relocation Services
          </h2>
          <div className="h-[1px] w-16 bg-accent mx-auto"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 items-start">
          {/* Left Side - Service Accordion */}
          <div className="lg:col-span-5">
            <div className="flex flex-col">
              {services.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`service-accordion-item text-left w-full px-6 py-5 border-l-[3px] transition-all duration-300 cursor-pointer group ${
                      isActive
                        ? "active border-l-accent bg-accent/5"
                        : "border-l-transparent hover:border-l-accent/30"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isActive
                            ? "bg-primary text-accent"
                            : "bg-surface-container text-primary group-hover:bg-primary/5"
                        }`}
                      >
                        <span className="material-symbols-outlined text-[24px]">
                          {service.icon}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`font-headline-md text-lg mb-0.5 transition-colors ${
                            isActive
                              ? "text-primary"
                              : "text-primary/70 group-hover:text-primary"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p
                          className={`text-xs transition-colors ${
                            isActive
                              ? "text-accent"
                              : "text-on-surface-variant/60"
                          }`}
                        >
                          {service.tagline}
                        </p>
                      </div>
                      <span
                        className={`material-symbols-outlined text-lg transition-all duration-300 ${
                          isActive
                            ? "text-accent rotate-90"
                            : "text-primary/20 group-hover:text-primary/40"
                        }`}
                      >
                        chevron_right
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side - Service Image */}
          <div className="lg:col-span-7 mt-8 lg:mt-0">
            <div key={activeIndex} className="service-detail-enter">
              <div className="service-image-wrapper relative rounded-sm overflow-hidden aspect-[16/10]">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-flex items-center gap-2 bg-accent/90 text-primary px-4 py-2 rounded-sm backdrop-blur-sm">
                    <span className="material-symbols-outlined text-sm">
                      {activeService.icon}
                    </span>
                    <span className="font-label-md text-xs uppercase tracking-widest">
                      {activeService.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Service Description Below */}
        <div key={activeIndex} className="service-detail-enter mt-12">
          <h3 className="font-headline-md text-headline-md text-primary mb-4">
            {activeService.tagline}
          </h3>
          <p className="text-body-md text-on-surface-variant leading-relaxed mb-8">
            {activeService.description}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {activeService.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-surface-container/60 rounded-sm"
              >
                <span className="material-symbols-outlined text-accent text-lg flex-shrink-0 mt-0.5">
                  check_circle
                </span>
                <span className="text-sm text-primary/80 leading-snug">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-sm font-label-md hover:bg-primary-container transition-all uppercase tracking-widest text-sm shadow-lg"
          >
            Request This Service
            <span className="material-symbols-outlined text-lg">
              east
            </span>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Service;
