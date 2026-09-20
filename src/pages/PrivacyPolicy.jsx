import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="bg-stone py-20 border-b border-line">
        <div className="max-w-[720px] mx-auto px-6">
          <span className="text-xs font-medium text-slate uppercase tracking-wider block mb-2">Legal</span>
          <h1 className="text-4xl md:text-5xl font-serif text-ink mb-4">
            Privacy policy
          </h1>
          <p className="text-slate text-base">
            Aligned with the Kenya Data Protection Act, 2019. Last updated September 2026.
          </p>
        </div>
      </div>

      {/* Reading Body */}
      <div className="max-w-[720px] mx-auto px-6 py-20 text-slate space-y-10 leading-relaxed text-base">
        <section>
          <h2 className="text-2xl font-serif text-ink mb-4">1. Data collection</h2>
          <p className="mb-4">
            Vora International Limited collects personal and institutional information when you submit a request for a WASH check, fill out our contact form or subscribe to our communications.
          </p>
          <p>
            Information collected includes your name, institutional name, phone number, email address, physical location and details related to your facility requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-ink mb-4">2. Purpose of processing</h2>
          <p className="mb-4">
            We process your personal data solely for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Scheduling and conducting institutional WASH assessments and action reports.</li>
            <li>Fulfilling orders for water, sanitation and hygiene products and maintenance services.</li>
            <li>Communicating regarding service updates, delivery schedules and invoice processing.</li>
            <li>Complying with statutory obligations under Kenyan law.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-ink mb-4">3. Data protection rights</h2>
          <p className="mb-4">
            Under the Kenya Data Protection Act, 2019, you have the right to request access to your personal data, request corrections, object to processing or request deletion of your records.
          </p>
          <p>
            To exercise any of these rights, contact our Data Protection Officer at info@vorawash.co.ke.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-ink mb-4">4. Security and retention</h2>
          <p>
            We implement strict technical and organizational safeguards to prevent unauthorized access, loss or alteration of your data. We retain records only as long as necessary to provide service and fulfill legal requirements.
          </p>
        </section>
      </div>
    </div>
  );
}
