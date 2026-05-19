import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Contact Section */}
      <section className="py-24 bg-surface-container" id="contact">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="bg-white rounded-sm premium-shadow overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            {/* Form Left */}
            <div className="p-10 md:p-16">
              <h2 className="font-headline-lg text-primary mb-4">Request a Consultation</h2>
              <p className="text-body-md text-on-surface-variant mb-10">
                Our concierge team will reach out within 60 minutes to discuss your relocation requirements.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-primary/60">Full Name</label>
                    <input
                      className="p-4 bg-surface-container border-none rounded-sm focus:ring-1 focus:ring-accent outline-none text-primary"
                      placeholder="e.g. Ramesh"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-primary/60">Phone Number</label>
                    <input
                      className="p-4 bg-surface-container border-none rounded-sm focus:ring-1 focus:ring-accent outline-none text-primary"
                      placeholder="+91 1234567896"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-primary/60">Service Category</label>
                  <select className="p-4 bg-surface-container border-none rounded-sm focus:ring-1 focus:ring-accent outline-none text-primary">
                    <option>Residential Moving</option>
                    <option>Office Relocation</option>
                    <option>Vehicle Logistics</option>
                    <option>White-Glove Packing</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-primary/60">Details (Optional)</label>
                  <textarea
                    className="p-4 bg-surface-container border-none rounded-sm focus:ring-1 focus:ring-accent outline-none text-primary"
                    placeholder="Describe any special requirements..."
                    rows="3"
                  ></textarea>
                </div>
                <button
                  className="w-full bg-primary text-on-primary font-label-md py-5 rounded-sm hover:bg-primary-container transition-all uppercase tracking-widest text-sm"
                  type="submit"
                >
                  Request Quote
                </button>
              </form>
            </div>
            {/* Info Right */}
            <div className="bg-primary text-on-primary p-10 md:p-16 flex flex-col justify-between relative">
              <div className="relative z-10">
                <h3 className="font-headline-md text-xl text-accent mb-12">Direct Assistance</h3>
                <div className="space-y-10">
                  <div className="flex gap-5">
                    <span className="material-symbols-outlined text-accent">call</span>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-1">Inquiries</div>
                      <div className="text-2xl font-headline-md">+91 9876543210</div>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <span className="material-symbols-outlined text-accent">chat</span>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-1">WhatsApp Booking</div>
                      <div className="text-2xl font-headline-md">+91 9876543210</div>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <span className="material-symbols-outlined text-accent">schedule</span>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-1">Operational Hours</div>
                      <div className="text-body-md font-semibold">
                        Mon - Sat: 8:00 AM - 9:00 PM<br />
                        <span className="text-sm font-normal opacity-60">Sunday: By appointment only</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 p-8 border border-white/10 bg-white/5 relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-outlined text-accent filled-icon">verified</span>
                  <span className="font-bold text-sm uppercase tracking-wider">Fully Insured &amp; Bonded</span>
                </div>
                <p className="text-xs opacity-60 leading-relaxed">
                  Your property is protected with comprehensive valuation coverage up to $2,000,000 for total peace of mind during your transition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge CTA Banner */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 mb-24">
        <div className="relative w-full py-20 bg-primary overflow-hidden flex items-center justify-center text-center px-12 border-b-4 border-accent">
          <div className="absolute inset-0 opacity-20">
            <img
              alt="Concierge service"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="text-accent font-label-md text-xs uppercase tracking-[0.4em] mb-4 block">VIP Service</span>
            <h2 className="font-headline-lg text-headline-lg text-white mb-6">Request Your Personal Move Manager</h2>
            <p className="text-body-lg text-on-primary/70 mb-10">
              Enjoy a single point of contact for your entire relocation. Discretion and precision guaranteed.
            </p>
            <button className="bg-accent hover:bg-accent/90 text-primary px-12 py-4 rounded-sm font-label-md uppercase tracking-[0.2em] text-sm transition-all shadow-xl shadow-accent/20">
              Start VIP Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
