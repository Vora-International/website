import React from 'react';
import PageHeader from '../components/PageHeader';
import {
  Heart, Clock, ShieldCheck, FileText, Users, FileCheck,
  BarChart3, Award
} from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Health first',
      desc: "Every decision starts with people's wellbeing.",
      icon: Heart
    },
    {
      title: 'Reliability',
      desc: 'We deliver when we say we will.',
      icon: Clock
    },
    {
      title: 'Quality',
      desc: 'Only certified products from verified suppliers.',
      icon: ShieldCheck
    },
    {
      title: 'Accountability',
      desc: 'We report results, including where we fall short.',
      icon: FileText
    },
    {
      title: 'Respect',
      desc: 'Every person and community is treated with dignity.',
      icon: Users
    }
  ];

  const leaders = [
    {
      name: 'Dr. Kennedy Ochieng',
      role: 'Managing Director',
      desc: 'Strategy and partnerships',
      img: '/team-1.jpg'
    },
    {
      name: 'Aminat Wanjiku',
      role: 'Finance and HR Lead',
      desc: 'Cash flow and compliance',
      img: '/team-2.jpg'
    },
    {
      name: 'Samuel Kiprop',
      role: 'Operations and Supply Chain Lead',
      desc: 'Sourcing, quality and installation',
      img: '/team-3.jpg'
    },
    {
      name: 'Grace Muthoni',
      role: 'Marketing Lead',
      desc: 'Sales and outreach',
      img: '/team-4.jpg'
    },
    {
      name: 'David Mutua',
      role: 'Design and Brand Lead',
      desc: 'Brand and customer experience',
      img: '/team-5.jpg'
    }
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <PageHeader
        title="A Kenyan company built around public health."
        subtitle="Five co-founders. One commitment to healthier institutions."
        bgImage="/header-about.jpg"
        breadcrumb="About"
      />

      {/* 1. OUR STORY (white, 2 columns) */}
      <section className="py-28 md:py-36 bg-white border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl md:text-5xl font-serif text-ink mb-6">
              Why we started Vora.
            </h2>
            <p className="text-slate text-lg leading-relaxed">
              We saw schools, clinics and workplaces struggling with scattered suppliers, broken facilities and no practical support. We founded Vora to be the dependable WASH partner they were missing, built as a sustainable business that protects health for the long term.
            </p>
          </div>

          <div className="lg:col-span-6 overflow-hidden rounded">
            <img
              src="/delivery.jpg"
              alt="Vora Operations in Kenya"
              className="w-full h-auto aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. VISION AND MISSION (Stone, 2 columns) */}
      <section className="py-28 md:py-36 bg-stone border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 divide-y md:divide-y-0 md:divide-x divide-line">
          <div className="pr-0 md:pr-12 pt-6 md:pt-0">
            <h3 className="text-xl font-sans text-slate uppercase tracking-wider mb-4 font-medium">
              Vision
            </h3>
            <p className="text-2xl md:text-3xl font-serif text-ink leading-relaxed">
              Healthy institutions and communities across Kenya, with reliable access to safe water, sanitation and hygiene.
            </p>
          </div>

          <div className="pl-0 md:pl-12 pt-12 md:pt-0">
            <h3 className="text-xl font-sans text-slate uppercase tracking-wider mb-4 font-medium">
              Mission
            </h3>
            <p className="text-2xl md:text-3xl font-serif text-ink leading-relaxed">
              To protect public health by providing institutions and communities with quality, certified water, sanitation and hygiene products and services, delivered reliably and backed by practical WASH expertise.
            </p>
          </div>
        </div>
      </section>

      {/* 3. VALUES (white) */}
      <section className="py-28 md:py-36 bg-white border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16">
          <h2 className="text-3xl md:text-5xl font-serif text-ink mb-16">
            What guides us.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((v, idx) => {
              const IconComp = v.icon;
              return (
                <div key={idx} className="card-vorastyle flex flex-col justify-between">
                  <div>
                    <IconComp className="w-8 h-8 text-deep-green mb-6" strokeWidth={1.25} />
                    <h3 className="text-xl font-serif text-ink mb-3">{v.title}</h3>
                    <p className="text-slate text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP (Stone) */}
      <section className="py-28 md:py-36 bg-stone border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16">
          <h2 className="text-3xl md:text-5xl font-serif text-ink mb-16">
            Leadership.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {leaders.map((leader, idx) => (
              <div key={idx} className="card-vorastyle bg-white p-0 overflow-hidden group">
                <div className="overflow-hidden aspect-[3/4] bg-ink">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-serif text-ink mb-1">{leader.name}</h3>
                  <p className="text-xs font-medium text-deep-green mb-2">{leader.role}</p>
                  <p className="text-xs text-slate">{leader.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GOVERNANCE (white) */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16">
          <h2 className="text-3xl md:text-5xl font-serif text-ink mb-16">
            Governance & compliance.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-vorastyle flex items-center gap-5 p-8">
              <FileCheck className="w-8 h-8 text-deep-green shrink-0" strokeWidth={1.25} />
              <span className="text-lg font-serif text-ink">Founders' agreement</span>
            </div>

            <div className="card-vorastyle flex items-center gap-5 p-8">
              <BarChart3 className="w-8 h-8 text-deep-green shrink-0" strokeWidth={1.25} />
              <span className="text-lg font-serif text-ink">Monthly management accounts</span>
            </div>

            <div className="card-vorastyle flex items-center gap-5 p-8">
              <Award className="w-8 h-8 text-deep-green shrink-0" strokeWidth={1.25} />
              <span className="text-lg font-serif text-ink">Independent foundation board</span>
            </div>

            <div className="card-vorastyle flex items-center gap-5 p-8">
              <ShieldCheck className="w-8 h-8 text-deep-green shrink-0" strokeWidth={1.25} />
              <span className="text-lg font-serif text-ink">Safeguarding and data protection policies</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
