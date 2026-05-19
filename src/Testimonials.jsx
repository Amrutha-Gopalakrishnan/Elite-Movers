import React from "react";

const testimonials = [
  {
    initials: "JS",
    name: "Julian Sterling",
    role: "Estate Owner, CT",
    quote:
      "The level of care for my antique collection was astounding. They used custom wooden crates and handled everything with white gloves. Truly an elite service.",
  },
  {
    initials: "SJ",
    name: "Sarah Jenkins",
    role: "COO, FinTech Solutions",
    quote:
      "Office relocation is usually a nightmare. Elite Movers completed our 3-floor move over a weekend, and we were operational by Monday morning. Incredible efficiency.",
  },
  {
    initials: "MR",
    name: "Marcus Reed",
    role: "Private Client",
    quote:
      "Transparent pricing from the start. No hidden fees, even with the tricky narrow stairs in my new brownstone. I wouldn't trust anyone else with my high-value assets.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-primary text-on-primary" id="testimonials">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center mb-16">
          <span className="text-accent font-label-md text-xs uppercase tracking-[0.3em] block mb-4">
            Client Voices
          </span>
          <h2 className="font-headline-lg text-headline-lg mb-6">Trusted by Executives</h2>
          <div className="h-[1px] w-16 bg-accent/50 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-primary-container p-10 border border-white/5 relative hover:border-accent/20 transition-colors">
              <span className="material-symbols-outlined text-accent/20 absolute top-8 right-8 text-6xl">
                format_quote
              </span>
              <p className="text-body-md italic mb-10 leading-relaxed text-on-primary/80">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-sm">{testimonial.name}</div>
                  <div className="text-xs uppercase tracking-wider text-accent">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
