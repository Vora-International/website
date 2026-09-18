import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, Wrench, Calendar, ArrowRight, Droplets, Sparkles, Shield,
  FileCheck, Settings, Truck, RefreshCw, GraduationCap, Activity, Building,
  Briefcase, Bed, Utensils, MessageSquare, ChevronDown
} from 'lucide-react';

export default function Home({ onRequestWashCheck }) {
  return (
    <div className="w-full">
      {/* 1. CINEMATIC HERO */}
      <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-between bg-ink overflow-hidden">
        {/* Background Image / Poster */}
        <img
          src="/hero-main.jpg"
          alt="Complete WASH Solutions Kenya"
          className="absolute inset-0 w-full h-full object-cover scale-[1.03] transition-transform duration-[2500ms] ease-out"
        />
        {/* Ink Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-ink/90 via-ink/60 to-ink/20" />

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-[1240px] w-full mx-auto px-6 md:px-16 pt-36 md:pt-48 pb-12 flex-1 flex flex-col justify-end">
          <div className="max-w-[640px]">
            <h1 className="text-white text-5xl md:text-7xl font-serif leading-[1.08] mb-6">
              Complete WASH for healthier lives.
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed mb-8">
              Certified water, sanitation and hygiene solutions for Kenya's schools, clinics and workplaces. Installed, maintained and delivered on schedule.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <button onClick={onRequestWashCheck} className="btn-primary text-base py-4 px-8">
                Request a WASH check
              </button>
              <Link to="/solutions" className="btn-secondary text-white text-base">
                <span>Explore solutions</span>
                <ArrowRight className="w-5 h-5 arrow-icon" />
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Bottom Bar */}
        <div className="relative z-10 border-t border-white/15 bg-ink/40 backdrop-blur-sm py-5">
          <div className="max-w-[1240px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4 text-white/90 text-sm font-medium">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-fresh-green shrink-0" />
              <span>KEBS-certified products</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-3">
              <Wrench className="w-5 h-5 text-fresh-green shrink-0" />
              <span>Installation and maintenance</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-fresh-green shrink-0" />
              <span>Fixed delivery days</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 hidden lg:block animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* 2. STATEMENT (white) */}
      <section className="py-28 md:py-36 bg-white border-b border-line">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <p className="text-3xl md:text-4xl font-serif text-ink leading-snug">
            "Preventable diseases linked to unsafe water, poor sanitation and poor hygiene still affect millions of Kenyans. The places where people gather every day carry much of that risk."
          </p>
        </div>
      </section>

      {/* 3. EVIDENCE (Stone) */}
      <section className="py-28 md:py-36 bg-stone">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16">
          <h2 className="text-3xl md:text-5xl font-serif text-ink mb-16 text-center md:text-left">
            The cost of poor WASH in Kenya.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-line">
            <div className="md:px-8 first:pl-0 flex flex-col justify-between pt-6 md:pt-0">
              <div>
                <span className="stat-number block mb-3">14%</span>
                <p className="text-slate text-sm leading-relaxed mb-4">
                  of children under five had diarrhoea in the past two weeks
                </p>
              </div>
              <span className="text-xs text-slate/60 font-medium">KDHS 2022</span>
            </div>

            <div className="md:px-8 flex flex-col justify-between pt-6 md:pt-0">
              <div>
                <span className="stat-number block mb-3">29%</span>
                <p className="text-slate text-sm leading-relaxed mb-4">
                  of Kenyans have basic sanitation
                </p>
              </div>
              <span className="text-xs text-slate/60 font-medium">UNICEF Kenya</span>
            </div>

            <div className="md:px-8 flex flex-col justify-between pt-6 md:pt-0">
              <div>
                <span className="stat-number block mb-3">KSh 27B</span>
                <p className="text-slate text-sm leading-relaxed mb-4">
                  lost every year to poor sanitation
                </p>
              </div>
              <span className="text-xs text-slate/60 font-medium">World Bank WSP</span>
            </div>

            <div className="md:px-8 last:pr-0 flex flex-col justify-between pt-6 md:pt-0">
              <div>
                <span className="stat-number block mb-3">12,120</span>
                <p className="text-slate text-sm leading-relaxed mb-4">
                  cholera cases across 27 counties, October 2022 to October 2023
                </p>
              </div>
              <span className="text-xs text-slate/60 font-medium">WHO</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS PREVIEW (white) */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-ink mb-4">
              One partner for all of WASH.
            </h2>
            <p className="text-slate text-lg">
              Everything on one account, one invoice and one reliable delivery day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Water Card */}
            <div className="card-vorastyle flex flex-col justify-between group">
              <div>
                <div className="overflow-hidden rounded mb-6 aspect-[4/3] bg-stone">
                  <img src="/water.jpg" alt="Water Solutions" className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Droplets className="w-7 h-7 text-deep-green" strokeWidth={1.25} />
                  <h3 className="text-2xl font-serif text-ink">Water</h3>
                </div>
                <p className="text-slate text-sm leading-relaxed mb-6">
                  Drinking water, dispensers, treatment, filters and storage.
                </p>
              </div>
              <Link to="/solutions" className="btn-secondary text-deep-green">
                <span>Learn about water</span>
                <ArrowRight className="w-4 h-4 arrow-icon" />
              </Link>
            </div>

            {/* Sanitation Card */}
            <div className="card-vorastyle flex flex-col justify-between group">
              <div>
                <div className="overflow-hidden rounded mb-6 aspect-[4/3] bg-stone">
                  <img src="/sanitation.jpg" alt="Sanitation Solutions" className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-7 h-7 text-deep-green" strokeWidth={1.25} />
                  <h3 className="text-2xl font-serif text-ink">Sanitation</h3>
                </div>
                <p className="text-slate text-sm leading-relaxed mb-6">
                  Washroom supplies, sanitary bins, cleaning and disinfection.
                </p>
              </div>
              <Link to="/solutions" className="btn-secondary text-deep-green">
                <span>Learn about sanitation</span>
                <ArrowRight className="w-4 h-4 arrow-icon" />
              </Link>
            </div>

            {/* Hygiene Card */}
            <div className="card-vorastyle flex flex-col justify-between group">
              <div>
                <div className="overflow-hidden rounded mb-6 aspect-[4/3] bg-stone">
                  <img src="/hygiene.jpg" alt="Hygiene Solutions" className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-7 h-7 text-deep-green" strokeWidth={1.25} />
                  <h3 className="text-2xl font-serif text-ink">Hygiene</h3>
                </div>
                <p className="text-slate text-sm leading-relaxed mb-6">
                  Hygiene stations, soap, sanitiser and menstrual products.
                </p>
              </div>
              <Link to="/solutions" className="btn-secondary text-deep-green">
                <span>Learn about hygiene</span>
                <ArrowRight className="w-4 h-4 arrow-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SPLIT FEATURE (Ink background) */}
      <section className="bg-ink text-white">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
          {/* Left Image */}
          <div className="lg:col-span-6 relative min-h-[350px] lg:min-h-full">
            <img
              src="/installation.jpg"
              alt="Installation and maintenance"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 p-8 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
              Installed, maintained and checked.
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              We do not just deliver products. We install facilities, service them on schedule and confirm they work.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 py-3 border-b border-white/15">
                <FileCheck className="w-6 h-6 text-fresh-green shrink-0" strokeWidth={1.25} />
                <span className="text-base text-white/90">WASH checks with written action reports</span>
              </div>
              <div className="flex items-center gap-4 py-3 border-b border-white/15">
                <Settings className="w-6 h-6 text-fresh-green shrink-0" strokeWidth={1.25} />
                <span className="text-base text-white/90">Installation and commissioning</span>
              </div>
              <div className="flex items-center gap-4 py-3 border-b border-white/15">
                <Truck className="w-6 h-6 text-fresh-green shrink-0" strokeWidth={1.25} />
                <span className="text-base text-white/90">Scheduled resupply on fixed days</span>
              </div>
              <div className="flex items-center gap-4 py-3 border-b border-white/15">
                <RefreshCw className="w-6 h-6 text-fresh-green shrink-0" strokeWidth={1.25} />
                <span className="text-base text-white/90">Maintenance and re-checks</span>
              </div>
            </div>

            <Link to="/how-it-works" className="btn-secondary text-white self-start">
              <span>See how it works</span>
              <ArrowRight className="w-5 h-5 arrow-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. SECTORS (white) */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16">
          <h2 className="text-3xl md:text-5xl font-serif text-ink mb-16">
            Built for places where people gather.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="sector-tile group">
              <img src="/sector-schools.jpg" alt="Schools" />
              <div className="overlay" />
              <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3 text-white">
                <GraduationCap className="w-7 h-7 text-fresh-green" strokeWidth={1.25} />
                <span className="text-xl font-serif">Schools</span>
              </div>
            </div>

            <div className="sector-tile group">
              <img src="/sector-health.jpg" alt="Health facilities" />
              <div className="overlay" />
              <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3 text-white">
                <Activity className="w-7 h-7 text-fresh-green" strokeWidth={1.25} />
                <span className="text-xl font-serif">Health facilities</span>
              </div>
            </div>

            <div className="sector-tile group">
              <img src="/sector-churches.jpg" alt="Churches" />
              <div className="overlay" />
              <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3 text-white">
                <Building className="w-7 h-7 text-fresh-green" strokeWidth={1.25} />
                <span className="text-xl font-serif">Churches</span>
              </div>
            </div>

            <div className="sector-tile group">
              <img src="/sector-offices.jpg" alt="Offices" />
              <div className="overlay" />
              <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3 text-white">
                <Briefcase className="w-7 h-7 text-fresh-green" strokeWidth={1.25} />
                <span className="text-xl font-serif">Offices</span>
              </div>
            </div>

            <div className="sector-tile group">
              <img src="/sector-hotels.jpg" alt="Hotels" />
              <div className="overlay" />
              <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3 text-white">
                <Bed className="w-7 h-7 text-fresh-green" strokeWidth={1.25} />
                <span className="text-xl font-serif">Hotels</span>
              </div>
            </div>

            <div className="sector-tile group">
              <img src="/sector-food.jpg" alt="Food businesses" />
              <div className="overlay" />
              <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3 text-white">
                <Utensils className="w-7 h-7 text-fresh-green" strokeWidth={1.25} />
                <span className="text-xl font-serif">Food businesses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOUNDATION FEATURE (Stone) */}
      <section className="py-28 md:py-36 bg-stone">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 overflow-hidden rounded">
            <img
              src="/header-foundation.jpg"
              alt="Vora Foundation WASH Education"
              className="w-full h-auto aspect-[16/10] object-cover"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-serif text-ink mb-6">
              Facilities work when people know how to use them.
            </h2>
            <p className="text-slate text-base md:text-lg leading-relaxed mb-8">
              Vora Foundation delivers WASH education, menstrual health education and school WASH clubs, with special attention to girls and rural schools.
            </p>
            <Link to="/foundation" className="btn-secondary text-deep-green self-start">
              <span>Explore the Foundation</span>
              <ArrowRight className="w-5 h-5 arrow-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CLOSING CALL TO ACTION (full-width image section) */}
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
