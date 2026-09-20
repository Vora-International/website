import React from 'react';

export default function Terms() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="bg-stone py-20 border-b border-line">
        <div className="max-w-[720px] mx-auto px-6">
          <span className="text-xs font-medium text-slate uppercase tracking-wider block mb-2">Legal</span>
          <h1 className="text-4xl md:text-5xl font-serif text-ink mb-4">
            Terms of use
          </h1>
          <p className="text-slate text-base">
            Standard terms governing service agreements and website use.
          </p>
        </div>
      </div>

      {/* Reading Body */}
      <div className="max-w-[720px] mx-auto px-6 py-20 text-slate space-y-10 leading-relaxed text-base">
        <section>
          <h2 className="text-2xl font-serif text-ink mb-4">1. Agreement to terms</h2>
          <p>
            By accessing this website or engaging Vora International Limited for WASH services, you agree to comply with these terms of use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-ink mb-4">2. Product certifications</h2>
          <p>
            All products supplied by Vora International Limited are certified by the Kenya Bureau of Standards (KEBS) or sourced from accredited partners meeting national health standards.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-ink mb-4">3. Service agreements and supply schedules</h2>
          <p>
            Scheduled resupply and maintenance services are governed by individual institutional agreements. Deliveries are made on fixed, agreed dates each month or term.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-ink mb-4">4. Payment terms</h2>
          <p>
            Invoices are payable by bank transfer or official M-Pesa business channels within the agreed payment window specified on the invoice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-ink mb-4">5. Governing law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the Republic of Kenya.
          </p>
        </section>
      </div>
    </div>
  );
}
