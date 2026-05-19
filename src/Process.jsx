import React from "react";

const steps = [
  { number: "01", title: "Consultation", description: "Virtual or in-home survey to assess your unique requirements." },
  { number: "02", title: "Packing", description: "Fragile items are inventoried and packed with high-precision materials." },
  { number: "03", title: "Transit", description: "Real-time GPS tracking of our climate-controlled elite fleet." },
  { number: "04", title: "Setup", description: "Final placement and white-glove setup in your new space." },
];

const Process = () => {
  return (
    <section className="py-24 bg-white" id="process">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center mb-20">
          <span className="text-accent font-label-md text-xs uppercase tracking-[0.3em] block mb-4">
            The Methodology
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">The Premium Journey</h2>
          <div className="h-[1px] w-16 bg-accent mx-auto"></div>
        </div>
        <div className="relative">
          <div className="absolute top-10 left-0 w-full h-[1px] bg-outline-variant hidden lg:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white border border-outline-variant rounded-full flex items-center justify-center mb-8 z-10 group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/10 transition-all">
                  <span className="text-accent font-headline-md text-xl">{step.number}</span>
                </div>
                <h4 className="font-headline-md text-lg text-primary mb-3">{step.title}</h4>
                <p className="text-body-sm text-on-surface-variant px-4">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
