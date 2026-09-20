import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';


export default function Footer({ onRequestWashCheck }) {
  return (
    <footer className="bg-ink text-white pt-24 pb-12 border-t border-line/10">
      <div className="max-w-[1240px] mx-auto px-6 md:px-16">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-16 border-b border-white/10 gap-8">
          <h2 className="text-3xl md:text-5xl font-serif text-white max-w-2xl leading-tight">
            Complete WASH for healthier lives.
          </h2>
          <div>
            <button
              onClick={onRequestWashCheck}
              className="btn-primary py-4 px-8 text-base"
            >
              Request a WASH check
            </button>
          </div>
        </div>

        {/* Four Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16 border-b border-white/10">
          {/* Column 1: Logo & Location */}
          <div className="flex flex-col gap-4">
            <img src="/logo-white.svg" alt="Vora International" className="h-10 w-auto self-start" />
            <div className="flex items-center gap-2 text-slate/80 text-sm mt-2">
              <MapPin className="w-4 h-4 text-fresh-green shrink-0" />
              <span>Nairobi, Kenya</span>
            </div>
            <p className="text-xs text-slate/60 mt-2 leading-relaxed">
              Certified water, sanitation and hygiene solutions for Kenya's schools, clinics and workplaces.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-medium text-slate/60 tracking-wider uppercase mb-2">Company</h4>
            <Link to="/solutions" className="text-sm text-slate/90 hover:text-fresh-green transition-colors">
              Solutions
            </Link>
            <Link to="/how-it-works" className="text-sm text-slate/90 hover:text-fresh-green transition-colors">
              How it works
            </Link>
            <Link to="/about" className="text-sm text-slate/90 hover:text-fresh-green transition-colors">
              About
            </Link>
            <Link to="/partners" className="text-sm text-slate/90 hover:text-fresh-green transition-colors">
              Partners
            </Link>
          </div>

          {/* Column 3: Foundation */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-medium text-slate/60 tracking-wider uppercase mb-2">Foundation</h4>
            <Link to="/foundation" className="text-sm text-slate/90 hover:text-fresh-green transition-colors">
              Programmes
            </Link>
            <Link to="/foundation" className="text-sm text-slate/90 hover:text-fresh-green transition-colors">
              Partner with the Foundation
            </Link>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-medium text-slate/60 tracking-wider uppercase mb-2">Contact</h4>
            <a
              href="https://wa.me/?text=Hello%20Vora,%20I%20would%20like%20to%20know%20more%20about%20your%20WASH%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate/90 hover:text-fresh-green transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-deep-green" />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:info@vorawash.co.ke"
              className="flex items-center gap-2 text-sm text-slate/90 hover:text-fresh-green transition-colors"
            >
              <Mail className="w-4 h-4 text-deep-green" />
              <span>info@vorawash.co.ke</span>
            </a>
            <a
              href="tel:+254700000000"
              className="flex items-center gap-2 text-sm text-slate/90 hover:text-fresh-green transition-colors"
            >
              <Phone className="w-4 h-4 text-deep-green" />
              <span>+254 (0) 700 000 000</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate/90 hover:text-fresh-green transition-colors"
            >
              <svg className="w-4 h-4 fill-deep-green" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>

              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 text-xs text-slate/60 gap-4">
          <p>© {new Date().getFullYear()} Vora International Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/safeguarding" className="hover:text-white transition-colors">
              Safeguarding statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
