import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import {
  FileCheck, FileText, Settings, Truck, RefreshCw, Plus, Minus,
  Droplets, Database, Sparkles, Shield, Trash2, Brush, MessageSquare
} from 'lucide-react';

export default function HowItWorks({ onRequestWashCheck }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const steps = [
    {
      num: '01',
      title: 'WASH check',
      desc: 'We visit and assess your water, sanitation and hygiene facilities. You see exactly where the risks are.',
      icon: FileCheck,
      image: '/header-how-it-works.jpg'
    },
    {
      num: '02',
      title: 'Recommendation',
      desc: 'You receive a written action report with clear priorities and costs. No obligation.',
      icon: FileText,
      image: null
    },
    {
      num: '03',
      title: 'Installation',
      desc: 'We install and commission what you need, then show your staff how to use it.',
      icon: Settings,
      image: '/installation.jpg'
    },
    {
      num: '04',
      title: 'Resupply and maintenance',
      desc: 'Fixed-day deliveries and scheduled servicing keep everything working.',
      icon: Truck,
      image: '/delivery.jpg'
    },
    {
      num: '05',
      title: 'Re-check',
      desc: 'We return to confirm facilities are working and share a short report.',
      icon: RefreshCw,
      image: null
    }
  ];

  const assessments = [
    { label: 'Drinking water safety', icon: Droplets },
    { label: 'Water storage', icon: Database },
    { label: 'Washroom condition and supplies', icon: Sparkles },
    { label: 'Hygiene stations, soap and water', icon: Shield },
    { label: 'Waste and sanitary disposal', icon: Trash2 },
    { label: 'Cleaning and disinfection', icon: Brush }
  ];

  const faqs = [
    {
      q: 'What is a WASH check?',
      a: 'A visit where we assess your water, sanitation and hygiene facilities and give you a written report with recommendations.'
    },
    {
      q: 'Are your products certified?',
      a: 'Yes. We supply only KEBS-certified products from verified suppliers.'
    },
    {
      q: 'How often do you deliver?',
      a: 'Monthly or termly, on a fixed day agreed in your supply agreement.'
    },
    {
      q: 'Do you maintain what you install?',
      a: 'Yes, through a maintenance agreement.'
    },
    {
      q: 'How do we pay?',
      a: 'By bank transfer or M-Pesa, with formal invoices and receipts.'
    }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <PageHeader
        title="Simple to start. Built to last."
        subtitle="A clear process from first visit to lasting results."
        bgImage="/header-how-it-works.jpg"
        breadcrumb="How it works"
      />

      {/* 1. PROCESS (white) */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16">
          <div className="divide-y divide-line border-t border-b border-line">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Step Number */}
                  <div className="lg:col-span-2">
                    <span className="font-serif text-5xl md:text-6xl text-deep-green font-normal">
                      {step.num}
                    </span>
                  </div>

                  {/* Middle Content */}
                  <div className={`lg:col-span-${step.image ? '6' : '10'} flex flex-col justify-center`}>
                    <div className="flex items-center gap-3 mb-3">
                      <IconComp className="w-6 h-6 text-deep-green" strokeWidth={1.25} />
                      <h3 className="text-2xl md:text-3xl font-serif text-ink">{step.title}</h3>
                    </div>
                    <p className="text-slate text-base md:text-lg leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Right Image (if present) */}
                  {step.image && (
                    <div className="lg:col-span-4 overflow-hidden rounded">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-40 md:h-48 object-cover"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. WHAT A WASH CHECK COVERS (Stone) */}
      <section className="py-28 md:py-36 bg-stone">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16">
          <h2 className="text-3xl md:text-5xl font-serif text-ink mb-16">
            What we assess.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {assessments.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="card-vorastyle flex items-center gap-5 p-8 bg-white">
                  <div className="p-3 rounded bg-stone text-deep-green shrink-0">
                    <IconComponent className="w-7 h-7 text-deep-green" strokeWidth={1.25} />
                  </div>
                  <span className="text-lg font-serif text-ink">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. QUESTIONS / FAQ (white) */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif text-ink mb-16 text-center">
            Common questions.
          </h2>

          <div className="divide-y divide-line border-t border-b border-line">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-6">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left py-2 focus:outline-none group"
                >
                  <span className="text-xl md:text-2xl font-serif text-ink group-hover:text-deep-green transition-colors">
                    {faq.q}
                  </span>
                  <div className="p-2 text-deep-green shrink-0">
                    {openFaq === idx ? (
                      <Minus className="w-6 h-6" />
                    ) : (
                      <Plus className="w-6 h-6" />
                    )}
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="pt-4 pb-2 pr-12">
                    <p className="text-slate text-base md:text-lg leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
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
