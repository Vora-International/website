import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function WashCheckModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-line rounded p-8 md:p-12 shadow-2xl my-8">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate hover:text-ink transition-colors p-2"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center justify-center gap-6">
            <div className="w-16 h-16 rounded-full bg-deep-green/10 text-deep-green flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-deep-green" />
            </div>
            <h2 className="text-3xl font-serif text-ink">Thank you.</h2>
            <p className="text-slate text-base max-w-md">
              We will contact you within one working day to confirm your institutional WASH check.
            </p>
            <button onClick={handleReset} className="btn-primary mt-4">
              Close window
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-serif text-ink mb-2">Request a WASH check</h2>
            <p className="text-slate text-sm mb-8">
              Tell us about your institution and we will be in touch within one working day.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-deep-green focus:outline-none transition-colors"
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
                    className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-deep-green focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-slate uppercase tracking-wider mb-2">
                    Institution type
                  </label>
                  <select
                    value={formData.institutionType}
                    onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                    className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-deep-green focus:outline-none transition-colors"
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
                    className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-deep-green focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-deep-green focus:outline-none transition-colors"
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
                    className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-deep-green focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate uppercase tracking-wider mb-2">
                  Additional details (optional)
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your current WASH setup..."
                  className="w-full bg-transparent border-b border-line py-3 text-ink focus:border-deep-green focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="consent-modal"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 accent-deep-green w-4 h-4"
                />
                <label htmlFor="consent-modal" className="text-xs text-slate">
                  I agree to be contacted by Vora about this request.
                </label>
              </div>

              <button type="submit" className="btn-primary w-full py-4 text-center justify-center">
                Request my WASH check
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
