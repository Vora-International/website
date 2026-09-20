import React from 'react';
import PageHeader from '../components/PageHeader';
import { Droplets, Sparkles, Shield, Wrench, Check, FileCheck, Settings, Truck, Tag, MessageSquare } from 'lucide-react';

export default function Solutions({ onRequestWashCheck }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <PageHeader
        title="Solutions for safe, healthy institutions."
        subtitle="Water, sanitation and hygiene, supplied and supported by one partner."
        bgImage="/header-solutions.jpg"
        breadcrumb="Solutions"
      />

      {/* Sticky Sub-navigation */}
      <div className="sticky top-[73px] z-30 bg-white border-b border-line shadow-sm py-4">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16 flex items-center justify-center md:justify-start gap-6 md:gap-12 text-sm font-medium">
          <button
            onClick={() => scrollToSection('section-water')}
            className="flex items-center gap-2 text-ink hover:text-deep-green transition-colors py-1"
          >
            <Droplets className="w-4 h-4 text-deep-green" />
            <span>Water</span>
          </button>
          <button
            onClick={() => scrollToSection('section-sanitation')}
            className="flex items-center gap-2 text-ink hover:text-deep-green transition-colors py-1"
          >
            <Sparkles className="w-4 h-4 text-deep-green" />
            <span>Sanitation</span>
          </button>
          <button
            onClick={() => scrollToSection('section-hygiene')}
            className="flex items-center gap-2 text-ink hover:text-deep-green transition-colors py-1"
          >
            <Shield className="w-4 h-4 text-deep-green" />
            <span>Hygiene</span>
          </button>
          <button
            onClick={() => scrollToSection('section-services')}
            className="flex items-center gap-2 text-ink hover:text-deep-green transition-colors py-1"
          >
            <Wrench className="w-4 h-4 text-deep-green" />
            <span>Services</span>
          </button>
        </div>
      </div>

      {/* 1. WATER (Image Left) */}
      <section id="section-water" className="py-24 md:py-36 bg-white border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 overflow-hidden rounded">
            <img
              src="/water.jpg"
              alt="Water Solutions"
              className="w-full h-auto aspect-[4/3] object-cover"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <Droplets className="w-8 h-8 text-deep-green" strokeWidth={1.25} />
              <h2 className="text-3xl md:text-5xl font-serif text-ink">Water</h2>
            </div>

            <p className="text-slate text-lg leading-relaxed mb-8">
              Safe drinking water is the foundation of a healthy institution. We supply and install reliable water solutions sized to your needs.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                'Bottled and refill drinking water',
                'Water dispensers',
                'Water treatment solutions and tablets',
                'Filters and purification units',
                'Storage tanks and containers'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-ink text-base">
                  <Check className="w-5 h-5 text-fresh-green shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button onClick={onRequestWashCheck} className="btn-primary self-start">
              Request a quote
            </button>
          </div>
        </div>
      </section>

      {/* 2. SANITATION (Image Right) */}
      <section id="section-sanitation" className="py-24 md:py-36 bg-stone border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 lg:order-2 overflow-hidden rounded">
            <img
              src="/sanitation.jpg"
              alt="Sanitation Solutions"
              className="w-full h-auto aspect-[4/3] object-cover"
            />
          </div>

          <div className="lg:col-span-6 lg:order-1 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-deep-green" strokeWidth={1.25} />
              <h2 className="text-3xl md:text-5xl font-serif text-ink">Sanitation</h2>
            </div>

            <p className="text-slate text-lg leading-relaxed mb-8">
              Clean, well-supplied washrooms prevent the spread of disease. We keep your facilities stocked and hygienic.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                'Washroom hygiene supplies',
                'Sanitary disposal bins',
                'Waste bins',
                'Cleaning and disinfection products',
                'Protective items for cleaning staff'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-ink text-base">
                  <Check className="w-5 h-5 text-fresh-green shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button onClick={onRequestWashCheck} className="btn-primary self-start">
              Request a quote
            </button>
          </div>
        </div>
      </section>

      {/* 3. HYGIENE (Image Left) */}
      <section id="section-hygiene" className="py-24 md:py-36 bg-white border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 overflow-hidden rounded">
            <img
              src="/hygiene.jpg"
              alt="Hygiene Solutions"
              className="w-full h-auto aspect-[4/3] object-cover"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-deep-green" strokeWidth={1.25} />
              <h2 className="text-3xl md:text-5xl font-serif text-ink">Hygiene</h2>
            </div>

            <p className="text-slate text-lg leading-relaxed mb-8">
              Hygiene facilities only protect health when they are always ready to use. We install them and keep them supplied.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                'Hygiene stations',
                'Liquid and bar soap',
                'Hand sanitiser and dispensers',
                'Tissue and hand towels',
                'Menstrual hygiene products'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-ink text-base">
                  <Check className="w-5 h-5 text-fresh-green shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button onClick={onRequestWashCheck} className="btn-primary self-start">
              Request a quote
            </button>
          </div>
        </div>
      </section>

      {/* 4. SERVICES (Stone Background) */}
      <section id="section-services" className="py-28 md:py-36 bg-stone">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16">
          <h2 className="text-3xl md:text-5xl font-serif text-ink mb-16">
            Services that keep everything working.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-vorastyle flex flex-col justify-between">
              <div>
                <FileCheck className="w-8 h-8 text-deep-green mb-6" strokeWidth={1.25} />
                <h3 className="text-xl font-serif text-ink mb-3">WASH checks</h3>
                <p className="text-slate text-sm leading-relaxed">
                  An on-site assessment with a written action report.
                </p>
              </div>
            </div>

            <div className="card-vorastyle flex flex-col justify-between">
              <div>
                <Settings className="w-8 h-8 text-deep-green mb-6" strokeWidth={1.25} />
                <h3 className="text-xl font-serif text-ink mb-3">Installation and maintenance</h3>
                <p className="text-slate text-sm leading-relaxed">
                  Set-up and servicing of stations, dispensers, tanks and filters.
                </p>
              </div>
            </div>

            <div className="card-vorastyle flex flex-col justify-between">
              <div>
                <Truck className="w-8 h-8 text-deep-green mb-6" strokeWidth={1.25} />
                <h3 className="text-xl font-serif text-ink mb-3">Scheduled resupply</h3>
                <p className="text-slate text-sm leading-relaxed">
                  Monthly or termly deliveries on a fixed day.
                </p>
              </div>
            </div>

            <div className="card-vorastyle flex flex-col justify-between">
              <div>
                <Tag className="w-8 h-8 text-deep-green mb-6" strokeWidth={1.25} />
                <h3 className="text-xl font-serif text-ink mb-3">Branded products</h3>
                <p className="text-slate text-sm leading-relaxed">
                  Your institution's name and logo on selected products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Call to Action */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center bg-ink overflow-hidden">
        <img
          src="/delivery.jpg"
          alt="Book a WASH check"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Is your institution WASH-ready?
          </h2>
          <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-xl mx-auto">
            Book a WASH check and receive a clear action report for your school, clinic or workplace.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <button onClick={onRequestWashCheck} className="btn-primary py-4 px-8 text-base">
              Request a WASH check
            </button>

            <a
              href="https://wa.me/?text=Hello%20Vora,%20I%20would%20like%20to%20know%20more%20about%20your%20WASH%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded text-white border border-white/30 hover:bg-white/10 transition-colors flex items-center gap-3 text-base font-medium"
            >
              <MessageSquare className="w-5 h-5 text-fresh-green" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
