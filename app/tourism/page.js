'use client';

import { useTheme } from '../../lib/themeContext';
import ServiceCard from '../../components/ServiceCard';
import FeatureCard from '../../components/FeatureCard';
import TourPackageCard from '../../components/TourPackageCard';
import DestinationCard from '../../components/DestinationCard';
import TestimonialCard from '../../components/TestimonialCard';
import FAQCard from '../../components/FAQCard';
import LeadForm from '../../components/LeadForm';
import ShivAiBadge from '../../components/ShivAiBadge';
import { useState } from 'react';

const tourismSegments = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Travel Agencies',
    description: 'Intelligent booking assistance, personalized itineraries, automated client communication, and travel insurance integration.',
    features: ['Smart Booking', 'Auto Itineraries', 'Client Portal', 'Travel Alerts'],
    link: '#contact'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Tour Operators',
    description: 'Group booking management, guide coordination, real-time tour updates, and multilingual support.',
    features: ['Group Management', 'Guide Coordination', 'Live Updates', 'Multi-language'],
    link: '/tour-operators'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Destination Marketing',
    description: 'Promote destinations with AI-driven content, visitor engagement bots, and comprehensive analytics.',
    features: ['Content AI', 'Visitor Bots', 'Tourism Analytics', 'Campaign Automation'],
    link: '#contact'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Adventure Tourism',
    description: 'Specialized booking systems for adventure activities, safety briefings, and equipment management.',
    features: ['Activity Booking', 'Safety AI', 'Equipment Tracking', 'Weather Alerts'],
    link: '#contact'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Corporate Travel',
    description: 'Business travel management, expense tracking, policy compliance, and traveler support.',
    features: ['Policy Compliance', 'Expense Management', 'Traveler Safety', 'Reporting'],
    link: '#contact'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Wellness Tourism',
    description: 'Wellness retreat bookings, spa appointments, holistic experience coordination.',
    features: ['Retreat Booking', 'Wellness Planning', 'Health Records', 'Follow-up Care'],
    link: '#contact'
  }
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Smart Itinerary Builder',
    description: 'AI creates personalized itineraries based on preferences, budget, and travel style.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'WhatsApp Integration',
    description: 'Instant booking confirmations, trip updates, and customer support via WhatsApp.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    title: 'Multi-language Support',
    description: 'Serve international travelers in their preferred language automatically.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Booking Analytics',
    description: 'Track conversion rates, popular destinations, and customer preferences.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Client CRM',
    description: 'Complete client profiles with travel history, preferences, and communication logs.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: 'Travel Alerts',
    description: 'Automated notifications for flight changes, weather, and travel advisories.'
  }
];

const tourPackages = [
  {
    image: '/images/golden-triangle.jpg',
    title: 'Golden Triangle Classic',
    location: 'Delhi - Agra - Jaipur',
    duration: '6 Days / 5 Nights',
    highlights: ['Taj Mahal at Sunrise', 'Amber Fort Elephant Ride', 'Old Delhi Food Walk', 'Traditional Haveli Stay'],
    price: 'Starting from ₹65,000'
  },
  {
    image: '/images/singapore-experience.jpg',
    title: 'Singapore Experience',
    location: 'Singapore',
    duration: '4 Days / 3 Nights',
    highlights: ['Marina Bay Sands', 'Sentosa Island', 'Night Safari', 'Gardens by the Bay'],
    price: 'Starting from ₹95,000'
  },
  {
    image: '/images/kerala-backwaters.jpg',
    title: 'Kerala Backwater Bliss',
    location: 'Kochi - Alleppey - Munnar',
    duration: '5 Days / 4 Nights',
    highlights: ['Houseboat Cruise', 'Tea Plantation Visit', 'Ayurvedic Spa', 'Kathakali Performance'],
    price: 'Starting from ₹48,000'
  }
];

const destinations = [
  {
    image: '/images/rajasthan.jpg',
    name: 'Rajasthan',
    country: 'India',
    tagline: 'Land of Kings',
    attractions: 35
  },
  {
    image: '/images/singapore.jpg',
    name: 'Singapore',
    country: 'Singapore',
    tagline: 'Garden City',
    attractions: 28
  },
  {
    image: '/images/himachal.jpg',
    name: 'Kerala',
    country: 'India',
    tagline: 'God\'s Own Country',
    attractions: 30
  },
  {
    image: '/images/goa.jpg',
    name: 'Goa',
    country: 'India',
    tagline: 'Beach Paradise',
    attractions: 22
  },
  {
    image: '/images/malaysia.jpg',
    name: 'Malaysia',
    country: 'Malaysia',
    tagline: 'Southeast Asian Gem',
    attractions: 45
  },
  {
    image: '/images/indonesia.jpg',
    name: 'Indonesia',
    country: 'Indonesia',
    tagline: 'Island Paradise',
    attractions: 50
  }
];

const testimonials = [
  {
    quote: "IS2 has streamlined our entire booking process. Our agents can now serve more clients while providing better personalized experiences.",
    author: 'Priya Sharma',
    role: 'Founder',
    company: 'Wanderlust Travel Agency',
    rating: 5,
    image: '/images/testimonial-travel-1.jpg'
  },
  {
    quote: "The automated itinerary builder alone has saved us countless hours. Clients love the personalized touch without the manual effort.",
    author: 'Mohammed Rashid',
    role: 'Operations Manager',
    company: 'Golden Sands Tours',
    rating: 5,
    image: '/images/testimonial-travel-2.jpg'
  }
];

const faqs = [
  {
    question: 'How can IS2 help my travel agency stand out?',
    answer: 'IS2 enables you to offer instant responses, personalized itineraries, and 24/7 support through AI - services that typically require a much larger team. This helps you compete with bigger agencies while maintaining the personal touch clients love.'
  },
  {
    question: 'Can IS2 integrate with GDS and booking platforms?',
    answer: 'Yes, IS2 integrates with major Global Distribution Systems (GDS) and booking platforms, allowing seamless inventory access and booking confirmation flows.'
  },
  {
    question: 'How does the multi-language feature work?',
    answer: 'Our AI automatically detects the language preferences of your clients and responds accordingly. It supports multiple languages including English, Hindi, Mandarin, Malay, Tamil, and many more.'
  },
  {
    question: 'Is IS2 suitable for small travel agencies?',
    answer: 'Absolutely! IS2 is designed to be scalable. Our Starter plan is perfect for small agencies looking to automate key processes without a large investment.'
  }
];

export default function TourismPage() {
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
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-4 block">Tourism Solutions</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI for <span className="text-gradient-gold">Travel & Tourism</span>
            </h1>
            <p className={`text-lg md:text-xl mb-8 ${isDark ? 'text-silver-300' : 'text-silver-600'}`}>
              Empower your tourism business with intelligent automation. From travel agencies to destination marketing, 
              IS2 helps you serve travelers better and grow your business faster.
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
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Tourism Segments</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Solutions for Every <span className="text-gradient-gold">Tourism Business</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              Tailored AI solutions for the diverse tourism industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourismSegments.map((segment, index) => (
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
              Tourism-Specific <span className="text-gradient-gold">Features</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              Tools designed specifically for travel and tourism businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages Showcase */}
      <section className={`py-20 ${isDark ? 'bg-zinc-900/50' : 'bg-silver-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Showcase</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Sample <span className="text-gradient-gold">Tour Packages</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              See how IS2 helps present and sell tour packages beautifully
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((pkg, index) => (
              <TourPackageCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Destinations</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Popular <span className="text-gradient-gold">Destinations</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              Showcase destinations with AI-powered visitor engagement
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <DestinationCard key={index} {...dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 ${isDark ? 'bg-zinc-900/50' : 'bg-silver-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Trusted by <span className="text-gradient-gold">Travel Businesses</span>
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
      <section className="py-20">
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
      <section id="contact" className={`py-20 ${isDark ? 'bg-zinc-900/50' : 'bg-silver-100'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Get Started</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Transform Your <span className="text-gradient-gold">Tourism Business</span>
              </h2>
              <p className={`text-lg mb-6 ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
                Ready to serve travelers better with AI? Fill out the form and our tourism technology experts will design a solution for your business.
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
