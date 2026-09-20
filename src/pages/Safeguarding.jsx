import React from 'react';

export default function Safeguarding() {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="bg-stone py-20 border-b border-line">
        <div className="max-w-[720px] mx-auto px-6">
          <span className="text-xs font-medium text-slate uppercase tracking-wider block mb-2">Legal</span>
          <h1 className="text-4xl md:text-5xl font-serif text-ink mb-4">
            Safeguarding statement
          </h1>
          <p className="text-slate text-base">
            Our commitment to child protection and ethical community engagement.
          </p>
        </div>
      </div>

      {/* Reading Body */}
      <div className="max-w-[720px] mx-auto px-6 py-20 text-slate space-y-10 leading-relaxed text-base">
        <section>
          <h2 className="text-2xl font-serif text-ink mb-4">1. Zero tolerance commitment</h2>
          <p>
            Vora International Limited and Vora Foundation operate a strict zero tolerance policy towards child abuse, exploitation, harassment and harm in all our educational, community and institutional activities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-ink mb-4">2. Facilitator vetting and training</h2>
          <p>
            Every facilitator, technician and team member entering a school or community facility undergoes background checks, formal vetting and mandatory safeguarding training before conducting any programme.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-ink mb-4">3. Informed consent</h2>
          <p>
            All school WASH clubs, educational workshops and research evaluations are conducted strictly with written institutional consent and parental authorization where required.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-ink mb-4">4. Reporting mechanisms</h2>
          <p>
            If you have a safeguarding concern or wish to report an incident regarding any Vora activity, please email safeguarding@vorawash.co.ke or contact our confidential helpline.
          </p>
        </section>
      </div>
    </div>
  );
}
