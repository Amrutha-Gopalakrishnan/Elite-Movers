import React from "react";
import { motion } from "framer-motion";

const features = [
  { icon: "security", title: "Safe Packing", description: "Multi-layered cushioning and custom wood crating for delicate heirlooms." },
  { icon: "engineering", title: "Expert Team", description: "Background-checked professionals trained in high-value asset handling." },
  { icon: "payments", title: "Clear Pricing", description: "Transparent quotes with no hidden surcharges or peak-season surprises." },
  { icon: "schedule", title: "Punctuality", description: "We respect your schedule as much as your property. Guaranteed arrival times." },
  { icon: "policy", title: "Full Coverage", description: "Comprehensive transit insurance coverage for complete peace of mind." },
  { icon: "verified", title: "Elite Accreditation", description: "Certified members of international logistics associations." },
];

const WhyChooseUs = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-surface-container" 
      id="why-choose-us"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-accent font-label-md text-xs uppercase tracking-[0.3em] block mb-4">
              Our Philosophy
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary mb-6 leading-tight">
              Built on Precision and Trust
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-10 leading-relaxed">
              We don&apos;t just move boxes; we transition lives. Every item is treated with the meticulous respect it deserves.
            </p>
            <div className="bg-primary p-10 rounded-sm text-on-primary shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-[80px]">support_agent</span>
              </div>
              <div className="font-headline-md text-xl mb-4 text-accent">24/7 Concierge Care</div>
              <p className="text-body-sm opacity-70 leading-relaxed">
                Our dedicated move managers are always available to track your cargo or handle urgent requests with absolute discretion.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-5">
                <div className="flex-shrink-0 text-accent">
                  <span className="material-symbols-outlined text-[32px]">{feature.icon}</span>
                </div>
                <div>
                  <h4 className="font-headline-md text-lg text-primary mb-2">{feature.title}</h4>
                  <p className="text-body-md text-on-surface-variant text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
