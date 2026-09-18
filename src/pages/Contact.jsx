import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import {
  MessageSquare, Phone, Mail, MapPin, Clock, CheckCircle2,
  Droplets, Sparkles, Shield, Wrench, Settings, Truck, Tag, FileCheck
} from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    institutionName: '',
    institutionType: 'School',
    location: '',
    phone: '',
    email: '',
    message: '',
    consent: false
  });

  const [selectedNeeds, setSelectedNeeds] = useState(['WASH check']);

  const needsOptions = [
    { label: 'WASH check', icon: FileCheck },
    { label: 'Water', icon: Droplets },
    { label: 'Sanitation', icon: Sparkles },
    { label: 'Hygiene', icon: Shield },
    { label: 'Installation', icon: Settings },
    { label: 'Resupply', icon: Truck },
    { label: 'Branded products', icon: Tag }
  ];

  const toggleNeed = (label) => {
    if (selectedNeeds.includes(label)) {
      setSelectedNeeds(selectedNeeds.filter((item) => item !== label));
    } else {
      setSelectedNeeds([...selectedNeeds, label]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <PageHeader
        title="Request a WASH check."
        subtitle="Tell us about your institution and we will be in touch within one working day."
        bgImage="/header-contact.jpg"
        breadcrumb="Contact"
      />

      {/* Two Columns (white) */}
      <section className="py-28 md:py-36 bg-white border-b border-line">
        <div className="max-w-[1240px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-ink mb-8">
                Talk to us.
              </h2>

              <div className="space-y-6">
                <a
                  href="https://wa.me/?text=Hello%20Vora,%20I%20would%20like%20to%20know%20more%20about%20your%20WASH%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-slate hover:text-deep-green transition-colors group"
                >
                  <MessageSquare className="w-6 h-6 text-deep-green shrink-0 mt-1" strokeWidth={1.25} />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate/60 mb-1">WhatsApp</span>
                    <span className="text-base text-ink font-medium group-hover:text-deep-green">+254 (0) 700 000 000</span>
                  </div>
                </a>

                <a
                  href="tel:+254700000000"
                  className="flex items-start gap-4 text-slate hover:text-deep-green transition-colors group"
                >
                  <Phone className="w-6 h-6 text-deep-green shrink-0 mt-1" strokeWidth={1.25} />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate/60 mb-1">Phone</span>
                    <span className="text-base text-ink font-medium group-hover:text-deep-green">+254 (0) 700 000 000</span>
                  </div>
                </a>

                <a
                  href="mailto:info@vorawash.co.ke"
                  className="flex items-start gap-4 text-slate hover:text-deep-green transition-colors group"
                >
                  <Mail className="w-6 h-6 text-deep-green shrink-0 mt-1" strokeWidth={1.25} />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate/60 mb-1">Email</span>
                    <span className="text-base text-ink font-medium group-hover:text-deep-green">info@vorawash.co.ke</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-slate">
                  <MapPin className="w-6 h-6 text-deep-green shrink-0 mt-1" strokeWidth={1.25} />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate/60 mb-1">Nairobi Office</span>
                    <span className="text-base text-ink font-medium">Vora International HQ, Kilimani, Nairobi, Kenya</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-slate">
                  <Clock className="w-6 h-6 text-deep-green shrink-0 mt-1" strokeWidth={1.25} />
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-slate/60 mb-1">Hours</span>
                    <span className="text-base text-ink font-medium">Monday to Friday 8am to 5pm, Saturday 9am to 1pm.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 columns) */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-stone p-12 rounded border border-line text-center flex flex-col items-center justify-center gap-6 my-8">
                <CheckCircle2 className="w-16 h-16 text-deep-green" />
                <h3 className="text-3xl font-serif text-ink">Thank you.</h3>
                <p className="text-slate text-lg max-w-md">
                  We will contact you within one working day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-medium text-slate uppercase tracking-wider mb-2">
                      Full name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-deep-green focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate uppercase tracking-wider mb-2">
                      Institution name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.institutionName}
                      onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                      placeholder="School, clinic or office name"
                      className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-deep-green focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-medium text-slate uppercase tracking-wider mb-2">
                      Institution type
                    </label>
                    <select
                      value={formData.institutionType}
                      onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                      className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-deep-green focus:outline-none"
                    >
                      <option value="School">School</option>
                      <option value="Health facility">Health facility</option>
                      <option value="Church">Church</option>
                      <option value="Office">Office</option>
                      <option value="Hotel">Hotel</option>
                      <option value="Food business">Food business</option>
                      <option value="NGO">NGO</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate uppercase tracking-wider mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="County or sub-county"
                      className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-deep-green focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-medium text-slate uppercase tracking-wider mb-2">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+254 700 000 000"
                      className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-deep-green focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate uppercase tracking-wider mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@institution.co.ke"
                      className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-deep-green focus:outline-none"
                    />
                  </div>
                </div>

                {/* What do you need? Checkbox chips */}
                <div>
                  <label className="block text-xs font-medium text-slate uppercase tracking-wider mb-4">
                    What do you need?
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {needsOptions.map((opt, idx) => {
                      const IconComp = opt.icon;
                      const isSelected = selectedNeeds.includes(opt.label);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => toggleNeed(opt.label)}
                          className={`px-4 py-2 rounded text-sm flex items-center gap-2 border transition-all ${
                            isSelected
                              ? 'bg-deep-green text-white border-deep-green'
                              : 'bg-stone text-ink border-line hover:border-deep-green'
                          }`}
                        >
                          <IconComp className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-deep-green'}`} />
                          <span>{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate uppercase tracking-wider mb-2">
                    Message (optional)
                  </label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide additional details..."
                    className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-deep-green focus:outline-none resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent-contact"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 accent-deep-green w-4 h-4"
                  />
                  <label htmlFor="consent-contact" className="text-xs text-slate">
                    I agree to be contacted by Vora about this request.
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full py-4 text-center justify-center">
                  Request my WASH check
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Styled Nairobi Map Section */}
      <section className="w-full h-[420px] bg-stone relative overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 420">
          <rect width="1200" height="420" fill="#F5F4EF" />
          {/* Roads & Grid lines */}
          <path d="M0,210 Q400,180 800,240 T1200,200" fill="none" stroke="#E3E1D9" strokeWidth="12" />
          <path d="M450,0 L450,420" fill="none" stroke="#E3E1D9" strokeWidth="8" />
          <path d="M750,0 L750,420" fill="none" stroke="#E3E1D9" strokeWidth="6" />
          <path d="M200,100 L1000,320" fill="none" stroke="#E3E1D9" strokeWidth="4" />
          
          {/* Pin for Vora HQ Kilimani */}
          <g transform="translate(600, 210)">
            <circle cx="0" cy="0" r="32" fill="#145C43" opacity="0.2" />
            <circle cx="0" cy="0" r="16" fill="#145C43" />
            <circle cx="0" cy="0" r="6" fill="#FFFFFF" />
            <rect x="-80" y="-60" width="160" height="36" rx="4" fill="#0E1A16" />
            <text x="0" y="-38" font-family="Inter, sans-serif" font-size="12" font-weight="600" fill="#FFFFFF" text-anchor="middle">Vora International HQ</text>
          </g>
        </svg>
      </section>
    </div>
  );
}
