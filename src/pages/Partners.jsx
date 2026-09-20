import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import {
  TrendingUp, Award, Handshake, CheckCircle2, ArrowRight,
  Droplets, Heart, BookOpen, UserCheck, Briefcase
} from 'lucide-react';

export default function Partners() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [partnerType, setPartnerType] = useState('Investor');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <PageHeader
        title="Build healthier institutions with us."
        subtitle="Opportunities for investors, grant makers and corporate partners."
        bgImage="/header-partners.jpg"
        breadcrumb="Partners"
      />

      {/* 1. PARTNER TYPES (white) */}
      <section className="py-28 md:py-36 bg-white border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Investors */}
            <div className="card-vorastyle flex flex-col justify-between">
              <div>
                <TrendingUp className="w-8 h-8 text-deep-green mb-6" strokeWidth={1.25} />
                <h3 className="text-2xl font-serif text-ink mb-4">Investors</h3>
                <p className="text-slate text-base leading-relaxed mb-8">
                  A recurring, low-capital WASH business with break-even at about 40 accounts.
                </p>
              </div>
              <a href="#request-docs" onClick={() => setPartnerType('Investor')} className="btn-secondary text-deep-green">
                <span>Request the investor deck</span>
                <ArrowRight className="w-4 h-4 arrow-icon" />
              </a>
            </div>

            {/* Card 2: Grant Makers */}
            <div className="card-vorastyle flex flex-col justify-between">
              <div>
                <Award className="w-8 h-8 text-deep-green mb-6" strokeWidth={1.25} />
                <h3 className="text-2xl font-serif text-ink mb-4">Grant makers</h3>
                <p className="text-slate text-base leading-relaxed mb-8">
                  Measurable WASH education results in schools and communities.
                </p>
              </div>
              <a href="#request-docs" onClick={() => setPartnerType('Grant maker')} className="btn-secondary text-deep-green">
                <span>Request the concept note</span>
                <ArrowRight className="w-4 h-4 arrow-icon" />
              </a>
            </div>

            {/* Card 3: Corporate Partners */}
            <div className="card-vorastyle flex flex-col justify-between">
              <div>
                <Handshake className="w-8 h-8 text-deep-green mb-6" strokeWidth={1.25} />
                <h3 className="text-2xl font-serif text-ink mb-4">Corporate partners</h3>
                <p className="text-slate text-base leading-relaxed mb-8">
                  Sponsor school WASH facilities and education with transparent reporting.
                </p>
              </div>
              <a href="#request-docs" onClick={() => setPartnerType('Corporate partner')} className="btn-secondary text-deep-green">
                <span>Discuss a partnership</span>
                <ArrowRight className="w-4 h-4 arrow-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE OPPORTUNITY (Ink background, white text) */}
      <section className="py-28 md:py-36 bg-ink text-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-16 text-center md:text-left">
            A large, recurring market.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/15">
            <div className="md:pr-12 first:pl-0 flex flex-col justify-between pt-6 md:pt-0">
              <div>
                <span className="stat-number !text-fresh-green block mb-4">1,243</span>
                <p className="text-white/90 text-lg leading-relaxed mb-4">
                  health facilities in Nairobi
                </p>
              </div>
              <span className="text-xs text-slate/60 font-medium">Kenya Master Health Facility List</span>
            </div>

            <div className="md:px-12 flex flex-col justify-between pt-6 md:pt-0">
              <div>
                <span className="stat-number !text-fresh-green block mb-4">307</span>
                <p className="text-white/90 text-lg leading-relaxed mb-4">
                  secondary schools in Nairobi
                </p>
              </div>
              <span className="text-xs text-slate/60 font-medium">Ministry of Education</span>
            </div>

            <div className="md:pl-12 last:pr-0 flex flex-col justify-between pt-6 md:pt-0">
              <div>
                <span className="stat-number !text-fresh-green block mb-4">KSh 27B</span>
                <p className="text-white/90 text-lg leading-relaxed mb-4">
                  annual cost of poor sanitation in Kenya
                </p>
              </div>
              <span className="text-xs text-slate/60 font-medium">World Bank WSP</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GLOBAL GOALS (white) */}
      <section className="py-28 md:py-36 bg-white border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16">
          <h2 className="text-3xl md:text-5xl font-serif text-ink mb-16">
            Aligned with the Sustainable Development Goals.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* SDG 6 (Larger) */}
            <div className="lg:col-span-1 card-vorastyle border-2 border-deep-green p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-deep-green text-white font-bold rounded flex items-center justify-center text-xl mb-4">
                  6
                </div>
                <h3 className="text-lg font-serif text-ink mb-2">Clean Water & Sanitation</h3>
                <p className="text-xs text-slate leading-relaxed">
                  Primary focus across all institutional WASH installations.
                </p>
              </div>
            </div>

            {/* SDG 3 (Larger) */}
            <div className="lg:col-span-1 card-vorastyle border-2 border-deep-green p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-deep-green text-white font-bold rounded flex items-center justify-center text-xl mb-4">
                  3
                </div>
                <h3 className="text-lg font-serif text-ink mb-2">Good Health & Well-being</h3>
                <p className="text-xs text-slate leading-relaxed">
                  Preventing disease transmission in high-density gathering places.
                </p>
              </div>
            </div>

            {/* SDG 4 */}
            <div className="card-vorastyle p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-stone text-deep-green font-bold rounded flex items-center justify-center text-lg mb-4">
                  4
                </div>
                <h3 className="text-base font-serif text-ink mb-2">Quality Education</h3>
                <p className="text-xs text-slate leading-relaxed">
                  Reducing school absenteeism caused by WASH illness.
                </p>
              </div>
            </div>

            {/* SDG 5 */}
            <div className="card-vorastyle p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-stone text-deep-green font-bold rounded flex items-center justify-center text-lg mb-4">
                  5
                </div>
                <h3 className="text-base font-serif text-ink mb-2">Gender Equality</h3>
                <p className="text-xs text-slate leading-relaxed">
                  Supporting girls through menstrual health education and privacy.
                </p>
              </div>
            </div>

            {/* SDG 8 */}
            <div className="card-vorastyle p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-stone text-deep-green font-bold rounded flex items-center justify-center text-lg mb-4">
                  8
                </div>
                <h3 className="text-base font-serif text-ink mb-2">Decent Work</h3>
                <p className="text-xs text-slate leading-relaxed">
                  Creating local green jobs and installer employment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REQUEST DOCUMENTS (Stone) */}
      <section id="request-docs" className="py-28 md:py-36 bg-stone">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif text-ink mb-12 text-center">
            Request our documents.
          </h2>

          {formSubmitted ? (
            <div className="bg-white p-12 rounded border border-line text-center flex flex-col items-center gap-6">
              <CheckCircle2 className="w-12 h-12 text-deep-green" />
              <h3 className="text-2xl font-serif text-ink">Request sent successfully.</h3>
              <p className="text-slate text-base">
                Thank you for your interest. Our executive team will share the requested materials within one working day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded border border-line space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-medium text-slate uppercase tracking-wider mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-deep-green focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate uppercase tracking-wider mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Company, foundation or fund name"
                    className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-deep-green focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-medium text-slate uppercase tracking-wider mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@organisation.com"
                    className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-deep-green focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate uppercase tracking-wider mb-2">
                    Partner type
                  </label>
                  <select
                    value={partnerType}
                    onChange={(e) => setPartnerType(e.target.value)}
                    className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-deep-green focus:outline-none"
                  >
                    <option value="Investor">Investor</option>
                    <option value="Grant maker">Grant maker</option>
                    <option value="Corporate partner">Corporate partner</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows="3"
                  placeholder="Share any specific notes or questions..."
                  className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-deep-green focus:outline-none resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full py-4 text-center justify-center">
                Send request
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
