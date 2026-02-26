'use client';

import { useTheme } from '../../lib/themeContext';
import ServiceCard from '../../components/ServiceCard';
import FeatureCard from '../../components/FeatureCard';
import BenefitCard from '../../components/BenefitCard';
import TestimonialCard from '../../components/TestimonialCard';
import FAQCard from '../../components/FAQCard';
import LeadForm from '../../components/LeadForm';
import ShivAiBadge from '../../components/ShivAiBadge';
import { useState } from 'react';

const hospitalitySegments = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Luxury Hotels & Resorts',
    description: 'Elevate your 5-star service with AI-powered concierge, personalized guest experiences, and predictive service delivery.',
    features: ['VIP Guest Recognition', 'Personalized Recommendations', 'Smart Room Controls', 'Predictive Service'],
    link: '#contact'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Boutique Hotels',
    description: 'Stand out with unique guest experiences powered by AI that understands your brand personality.',
    features: ['Brand Voice AI', 'Local Recommendations', 'Guest Preferences', 'Unique Experiences'],
    link: '#contact'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
    title: 'Restaurants & Dining',
    description: 'Smart reservation management, menu recommendations based on dietary preferences, and loyalty programs.',
    features: ['Smart Reservations', 'Menu AI', 'Dietary Tracking', 'Loyalty System'],
    link: '#contact'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
      </svg>
    ),
    title: 'Event & Conference Venues',
    description: 'Automate event inquiries, manage attendee communication, and streamline venue booking.',
    features: ['Event Booking AI', 'Attendee Management', 'Catering Coordination', 'Post-Event Follow-up'],
    link: '#contact'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Spa & Wellness',
    description: 'Appointment scheduling, treatment recommendations, and wellness journey tracking.',
    features: ['Appointment AI', 'Treatment Matching', 'Wellness Tracking', 'Membership Management'],
    link: '#contact'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Hotel Chains',
    description: 'Multi-property management with unified AI, cross-property guest recognition, and centralized analytics.',
    features: ['Multi-Property AI', 'Guest Recognition', 'Centralized Dashboard', 'Chain-wide Reports'],
    link: '#contact'
  }
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: '24/7 AI Concierge',
    description: 'Intelligent chatbot answers guest questions instantly, any time of day or night.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'WhatsApp Check-in',
    description: 'Guests can check-in, request services, and get information via WhatsApp.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Review Management',
    description: 'Automated review requests and real-time sentiment analysis to improve guest satisfaction.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Room Service Bot',
    description: 'Guests order food, amenities, and services through AI-powered conversations.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Guest Analytics',
    description: 'Deep insights into guest preferences, behavior patterns, and satisfaction scores.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Guest CRM',
    description: 'Complete guest profiles with stay history, preferences, and communication records.'
  }
];

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Increase Direct Bookings',
    description: 'AI-powered chat captures and converts website visitors into direct bookings.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Enhance Guest Satisfaction',
    description: 'Instant, personalized responses delight guests and improve review scores.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Reduce Staff Workload',
    description: 'Automate routine inquiries so staff can focus on high-touch guest interactions.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Boost Upsell Revenue',
    description: 'Smart recommendations drive room upgrades, dining, and spa bookings.'
  }
];

const testimonials = [
  {
    quote: "IS2 has revolutionized how we interact with guests. Our concierge staff now focuses on VIP experiences while AI handles routine inquiries perfectly.",
    author: 'Ananya Reddy',
    role: 'General Manager',
    company: 'The Grand Heritage Hotel',
    rating: 5,
    image: '/images/testimonial-hotel-1.jpg'
  },
  {
    quote: "The WhatsApp integration alone has transformed our guest communication. Booking confirmations, check-in details, and room service - all automated.",
    author: 'David Chen',
    role: 'Operations Director',
    company: 'Pacific Luxury Resorts',
    rating: 5,
    image: '/images/testimonial-hotel-2.jpg'
  }
];

const faqs = [
  {
    question: 'How does IS2 integrate with my existing Property Management System?',
    answer: 'IS2 offers seamless integration with major PMS platforms including Opera, Cloudbeds, Protel, and many others. Our API-first approach ensures data flows smoothly between systems, keeping guest information synchronized.'
  },
  {
    question: 'Can the AI handle complex guest requests?',
    answer: 'Our AI is trained to handle a wide range of queries. For complex or sensitive requests, it seamlessly escalates to human staff with full context, ensuring guests always receive appropriate assistance.'
  },
  {
    question: 'Is customer data secure?',
    answer: 'Absolutely. We follow enterprise-grade security standards including end-to-end encryption, secure API connections, and GDPR compliance. Your guest data is protected with multiple layers of security.'
  },
  {
    question: 'How long does implementation take?',
    answer: 'Basic implementation can be completed in 1-2 weeks. Full integration with existing systems and custom AI training typically takes 4-6 weeks depending on your specific requirements.'
  }
];

export default function HospitalityPage() {
  const { isDark } = useTheme();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ShivAiBadge className="mx-auto mb-6" />
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-4 block">Hospitality Solutions</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI for <span className="text-gradient-gold">Hotels & Hospitality</span>
            </h1>
            <p className={`text-lg md:text-xl mb-8 ${isDark ? 'text-silver-300' : 'text-silver-600'}`}>
              Transform your guest experience with intelligent automation. From luxury resorts to boutique hotels, 
              IS2 delivers AI-powered solutions that enhance service quality while reducing operational costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary text-lg px-8 py-4">
                Get Started
              </a>
              <a href="#segments" className="btn-secondary text-lg px-8 py-4">
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section id="segments" className={`py-20 ${isDark ? 'bg-zinc-900/50' : 'bg-silver-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Hospitality Segments</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Solutions for Every <span className="text-gradient-gold">Property Type</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              Whether you run a luxury resort or a cozy boutique hotel, IS2 adapts to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitalitySegments.map((segment, index) => (
              <ServiceCard key={index} {...segment} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Features</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Hospitality-Specific <span className="text-gradient-gold">Features</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              Tools designed specifically for hotels and hospitality businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`py-20 ${isDark ? 'bg-zinc-900/50' : 'bg-silver-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Benefits</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Real <span className="text-gradient-gold">Results</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Trusted by <span className="text-gradient-gold">Hoteliers</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 ${isDark ? 'bg-zinc-900/50' : 'bg-silver-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Common <span className="text-gradient-gold">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQCard 
                key={index} 
                {...faq} 
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Get Started</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Transform Your <span className="text-gradient-gold">Hotel</span> Today
              </h2>
              <p className={`text-lg mb-6 ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
                Ready to enhance your guest experience with AI? Fill out the form and our hospitality experts will create a custom solution for your property.
              </p>
              <ShivAiBadge variant="inline" />
            </div>
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
