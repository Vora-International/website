import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Navbar({ onRequestWashCheck }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isLightText = isHomePage && !scrolled && !mobileMenuOpen;

  const navLinks = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'How it works', path: '/how-it-works' },
    { name: 'Foundation', path: '/foundation' },
    { name: 'About', path: '/about' },
    { name: 'Partners', path: '/partners' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white text-ink border-b border-line py-4 shadow-sm'
            : isHomePage
            ? 'bg-transparent text-white py-6'
            : 'bg-white text-ink border-b border-line py-4'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-6 md:px-16 flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={isLightText ? '/logo-white.svg' : '/logo.svg'}
              alt="Vora International"
              className="h-10 w-auto"
            />
          </Link>

          {/* Centre: Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[15px] font-medium transition-colors relative py-1 ${
                    isLightText
                      ? 'text-white hover:text-fresh-green'
                      : 'text-ink hover:text-deep-green'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-fresh-green rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Contact & Button */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/contact"
              className={`text-[15px] font-medium transition-colors ${
                isLightText ? 'text-white hover:text-fresh-green' : 'text-ink hover:text-deep-green'
              } ${location.pathname === '/contact' ? 'underline underline-offset-4 decoration-fresh-green' : ''}`}
            >
              Contact
            </Link>

            <button
              onClick={onRequestWashCheck}
              className="btn-primary"
            >
              Request a WASH check
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <Menu className={`w-7 h-7 ${isLightText ? 'text-white' : 'text-ink'}`} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Full Screen Menu (Ink Background) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-ink text-white flex flex-col justify-between p-8 pt-24 md:hidden">
          <div className="flex flex-col gap-6">
            <Link
              to="/"
              className={`text-3xl font-serif py-2 border-b border-white/10 ${
                location.pathname === '/' ? 'text-fresh-green' : 'text-white'
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-3xl font-serif py-2 border-b border-white/10 ${
                  location.pathname === link.path ? 'text-fresh-green' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`text-3xl font-serif py-2 border-b border-white/10 ${
                location.pathname === '/contact' ? 'text-fresh-green' : 'text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestWashCheck();
              }}
              className="btn-primary w-full py-4 text-center justify-center text-base"
            >
              Request a WASH check
            </button>
            <p className="text-xs text-slate/60 text-center">
              Complete WASH for healthier lives. • Nairobi, Kenya
            </p>
          </div>
        </div>
      )}
    </>
  );
}
