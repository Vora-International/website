import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import {
  BookOpen, Heart, Users, GraduationCap, ShieldCheck, TrendingUp,
  CalendarCheck, Shield, ArrowRight
} from 'lucide-react';

export default function Foundation({ onRequestWashCheck }) {
  return (
    <div className="w-full">
      {/* Page Header */}
      <PageHeader
        title="Learning today for healthier communities tomorrow."
        subtitle="WASH education in schools and communities, with special attention to girls and rural areas."
        bgImage="/header-foundation.jpg"
        breadcrumb="Foundation"
      />

      {/* 1. VISION AND MISSION (white) */}
      <section className="py-28 md:py-36 bg-white border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 divide-y md:divide-y-0 md:divide-x divide-line">
          <div className="pr-0 md:pr-12 pt-6 md:pt-0">
            <h3 className="text-xl font-sans text-slate uppercase tracking-wider mb-4 font-medium">
              Our vision
            </h3>
            <p className="text-2xl md:text-3xl font-serif text-ink leading-relaxed">
              Communities where every child grows up healthy through good water, sanitation and hygiene practices, and no girl is held back from learning.
            </p>
          </div>

          <div className="pl-0 md:pl-12 pt-12 md:pt-0">
            <h3 className="text-xl font-sans text-slate uppercase tracking-wider mb-4 font-medium">
              Our mission
            </h3>
            <p className="text-2xl md:text-3xl font-serif text-ink leading-relaxed">
              To promote health, dignity and learning through WASH education in schools and communities, with special attention to girls and rural areas.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHY EDUCATION MATTERS (Ink background, white text) */}
      <section className="py-28 md:py-36 bg-ink text-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Stat */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/15 pb-10 lg:pb-0 lg:pr-12">
            <span className="stat-number !text-fresh-green text-7xl md:text-8xl block mb-4">
              65%
            </span>
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed mb-4">
              of Kenyan women and girls cannot afford sanitary pads
            </p>
            <span className="text-xs text-slate/60 font-medium">World Bank and GWSP</span>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-7 lg:pl-8">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
              Products alone are not enough.
            </h2>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              Research in Western Kenya shows that lasting change needs water, sanitation, privacy and education working together. That is why every programme is measured.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PROGRAMMES (white) */}
      <section className="py-28 md:py-36 bg-white border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16">
          <h2 className="text-3xl md:text-5xl font-serif text-ink mb-16">
            Our programmes.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Programme 1 */}
            <div className="card-vorastyle flex flex-col justify-between p-0 overflow-hidden">
              <div className="h-44 bg-stone overflow-hidden">
                <img src="/sector-schools.jpg" alt="WASH education" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <BookOpen className="w-8 h-8 text-deep-green mb-4" strokeWidth={1.25} />
                <h3 className="text-xl font-serif text-ink mb-3">WASH education</h3>
                <p className="text-slate text-sm leading-relaxed">
                  Lessons on safe water, sanitation and personal hygiene.
                </p>
              </div>
            </div>

            {/* Programme 2 */}
            <div className="card-vorastyle flex flex-col justify-between p-0 overflow-hidden">
              <div className="h-44 bg-stone overflow-hidden">
                <img src="/hygiene.jpg" alt="Menstrual health education" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <Heart className="w-8 h-8 text-deep-green mb-4" strokeWidth={1.25} />
                <h3 className="text-xl font-serif text-ink mb-3">Menstrual health education</h3>
                <p className="text-slate text-sm leading-relaxed">
                  Sessions for girls, and awareness for boys, teachers and parents.
                </p>
              </div>
            </div>

            {/* Programme 3 */}
            <div className="card-vorastyle flex flex-col justify-between p-0 overflow-hidden">
              <div className="h-44 bg-stone overflow-hidden">
                <img src="/water.jpg" alt="School WASH clubs" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <Users className="w-8 h-8 text-deep-green mb-4" strokeWidth={1.25} />
                <h3 className="text-xl font-serif text-ink mb-3">School WASH clubs</h3>
                <p className="text-slate text-sm leading-relaxed">
                  Pupil-led clubs that keep standards high.
                </p>
              </div>
            </div>

            {/* Programme 4 */}
            <div className="card-vorastyle flex flex-col justify-between p-0 overflow-hidden">
              <div className="h-44 bg-stone overflow-hidden">
                <img src="/installation.jpg" alt="Teacher training" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <GraduationCap className="w-8 h-8 text-deep-green mb-4" strokeWidth={1.25} />
                <h3 className="text-xl font-serif text-ink mb-3">Teacher training</h3>
                <p className="text-slate text-sm leading-relaxed">
                  Equipping teachers to continue the lessons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW WE MEASURE RESULTS (Stone) */}
      <section className="py-28 md:py-36 bg-stone border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16">
          <h2 className="text-3xl md:text-5xl font-serif text-ink mb-16">
            How we measure results.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-vorastyle bg-white flex items-center gap-5 p-8">
              <Users className="w-8 h-8 text-deep-green shrink-0" strokeWidth={1.25} />
              <span className="text-lg font-serif text-ink">Pupils and teachers reached</span>
            </div>

            <div className="card-vorastyle bg-white flex items-center gap-5 p-8">
              <ShieldCheck className="w-8 h-8 text-deep-green shrink-0" strokeWidth={1.25} />
              <span className="text-lg font-serif text-ink">Active WASH clubs</span>
            </div>

            <div className="card-vorastyle bg-white flex items-center gap-5 p-8">
              <TrendingUp className="w-8 h-8 text-deep-green shrink-0" strokeWidth={1.25} />
              <span className="text-lg font-serif text-ink">Change in observed practices</span>
            </div>

            <div className="card-vorastyle bg-white flex items-center gap-5 p-8">
              <CalendarCheck className="w-8 h-8 text-deep-green shrink-0" strokeWidth={1.25} />
              <span className="text-lg font-serif text-ink">Illness-related absence</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SAFEGUARDING (white) */}
      <section className="py-16 bg-white border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16 flex items-center gap-4">
          <Shield className="w-7 h-7 text-deep-green shrink-0" strokeWidth={1.25} />
          <p className="text-slate text-base md:text-lg">
            Every activity follows our child safeguarding policy, with written consent and trained, vetted facilitators.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative w-full h-[65vh] min-h-[480px] flex items-center justify-center bg-ink overflow-hidden">
        <img
          src="/header-foundation.jpg"
          alt="Partner with Vora Foundation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/65" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
            Partner with Vora Foundation.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/contact" className="btn-primary py-4 px-8 text-base">
              Become a partner
            </Link>

            <Link to="/contact" className="px-8 py-4 rounded text-white border border-white/30 hover:bg-white/10 transition-colors text-base font-medium">
              Contact the Foundation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
