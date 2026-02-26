'use client';

import { useState } from 'react';

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    propertyName: '',
    propertyType: '',
    rooms: '',
    currentSystem: '',
    interests: [],
    message: '',
    budget: '',
  });

  const industries = [
    { value: 'hotel', label: 'Hotel' },
    { value: 'resort', label: 'Resort' },
    { value: 'travel-agency', label: 'Travel Agency' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'event-planner', label: 'Event Planner' },
    { value: 'tour-operator', label: 'Tour Operator' },
    { value: 'other', label: 'Other' },
  ];

  const interestOptions = [
    { value: 'ai-chat', label: 'AI Chat Widget' },
    { value: 'whatsapp', label: 'WhatsApp Integration' },
    { value: 'crm', label: 'Lead CRM' },
    { value: 'analytics', label: 'Analytics' },
    { value: 'tour-management', label: 'Tour Management' },
    { value: 'destination-marketing', label: 'Destination Marketing' },
  ];

  const budgetRanges = [
    { value: 'starter', label: 'Up to $500/month' },
    { value: 'growth', label: '$500 - $2,000/month' },
    { value: 'enterprise', label: '$2,000+/month' },
    { value: 'custom', label: 'Custom/Enterprise' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (value) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter(i => i !== value)
        : [...prev.interests, value]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  if (isSubmitted) {
    return (
      <div className="card-base card-light dark:card-dark text-center py-12">
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
        <p className="text-silver-600 dark:text-silver-400 mb-6">
          Your inquiry has been submitted successfully. Our team will contact you within 24 hours.
        </p>
        <a
          href="https://wa.me/919953739262?text=Hi%20IS2%20Team%2C%20I%20just%20submitted%20a%20form%20and%20would%20like%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Connect on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className="card-base card-light dark:card-dark">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
              step >= s ? 'bg-gold-500 text-black' : 'bg-silver-200 dark:bg-zinc-800 text-silver-600 dark:text-silver-400'
            }`}>
              {s}
            </div>
            {s < 4 && (
              <div className={`w-16 md:w-24 h-1 mx-2 rounded transition-colors ${
                step > s ? 'bg-gold-500' : 'bg-silver-200 dark:bg-zinc-800'
              }`} />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl font-bold mb-6">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="input-base input-light dark:input-dark"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="input-base input-light dark:input-dark"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="input-base input-light dark:input-dark"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="input-base input-light dark:input-dark"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>
        )}

        {/* Step 2: Organization */}
        {step === 2 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl font-bold mb-6">Organization Details</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Company/Organization Name *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="input-base input-light dark:input-dark"
                placeholder="Your Company Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Industry *</label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                required
                className="input-base input-light dark:input-dark"
              >
                <option value="">Select your industry</option>
                {industries.map((ind) => (
                  <option key={ind.value} value={ind.value}>{ind.label}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Step 3: Specific Details */}
        {step === 3 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl font-bold mb-6">Property/Business Details</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Property/Business Name</label>
              <input
                type="text"
                name="propertyName"
                value={formData.propertyName}
                onChange={handleInputChange}
                className="input-base input-light dark:input-dark"
                placeholder="Property or Business Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Type/Category</label>
              <input
                type="text"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleInputChange}
                className="input-base input-light dark:input-dark"
                placeholder="e.g., Luxury Hotel, Boutique Resort, Tour Operator"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Current Booking/CRM System</label>
              <input
                type="text"
                name="currentSystem"
                value={formData.currentSystem}
                onChange={handleInputChange}
                className="input-base input-light dark:input-dark"
                placeholder="e.g., Manual, Spreadsheets, Other Software"
              />
            </div>
          </div>
        )}

        {/* Step 4: Interest & Message */}
        {step === 4 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl font-bold mb-6">Your Interests</h3>
            <div>
              <label className="block text-sm font-medium mb-3">What are you interested in?</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interestOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleInterestChange(option.value)}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                      formData.interests.includes(option.value)
                        ? 'bg-gold-500/20 border-gold-500 text-gold-500'
                        : 'bg-silver-100 dark:bg-zinc-800 border-silver-300 dark:border-zinc-700 hover:border-gold-500/50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Budget Range</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="input-base input-light dark:input-dark"
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Additional Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="input-base input-light dark:input-dark resize-none"
                placeholder="Tell us more about your requirements..."
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-silver-200 dark:border-zinc-800">
          {step > 1 ? (
            <button type="button" onClick={prevStep} className="btn-ghost">
              ← Back
            </button>
          ) : (
            <div />
          )}
          
          {step < 4 ? (
            <button type="button" onClick={nextStep} className="btn-primary">
              Next →
            </button>
          ) : (
            <button type="submit" disabled={isSubmitting} className="btn-primary">
              {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          )}
        </div>
      </form>

      {/* WhatsApp Quick Contact */}
      <div className="mt-8 pt-6 border-t border-zinc-800 text-center">
        <p className="text-silver-400 text-sm mb-3">Need immediate assistance?</p>
        <a
          href="https://wa.me/919953739262?text=Hi%20IS2%20Team%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-green-500 font-medium hover:text-green-400 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Contact via WhatsApp
        </a>
      </div>
    </div>
  );
}
