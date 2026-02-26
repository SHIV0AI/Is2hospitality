'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../lib/themeContext';
import ServiceCard from '../components/ServiceCard';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import StatCard from '../components/StatCard';
import PricingCard from '../components/PricingCard';
import CaseStudyCard from '../components/CaseStudyCard';
import TourPackageCard from '../components/TourPackageCard';
import DestinationCard from '../components/DestinationCard';
import IntegrationCard from '../components/IntegrationCard';
import BenefitCard from '../components/BenefitCard';
import FAQCard from '../components/FAQCard';
import UserTypeCard from '../components/UserTypeCard';
import ComparisonCard from '../components/ComparisonCard';
import LeadForm from '../components/LeadForm';
import ShivAiBadge from '../components/ShivAiBadge';

// Data
const hospitalityServices = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Hotels & Resorts',
    description: 'AI-powered guest experience, automated concierge, smart room service ordering, and real-time feedback systems.',
    features: ['24/7 AI Concierge', 'Smart Check-in/out', 'Room Service Bot', 'Guest Analytics'],
    link: '/hospitality'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Travel Agencies',
    description: 'Intelligent booking assistance, personalized itineraries, automated client communication, and travel insurance integration.',
    features: ['Smart Booking', 'Auto Itineraries', 'Client Portal', 'Travel Alerts'],
    link: '/tourism'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Tour Operators',
    description: 'Group booking management, guide coordination, real-time tour updates, and multilingual support for global tourists.',
    features: ['Group Management', 'Guide Coordination', 'Live Updates', 'Multi-language'],
    link: '/tour-operators'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
    title: 'Restaurants & Dining',
    description: 'Smart reservation systems, menu recommendations, dietary preference tracking, and customer loyalty programs.',
    features: ['Smart Reservations', 'Menu AI', 'Dietary Tracking', 'Loyalty System'],
    link: '/hospitality'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Destination Marketing',
    description: 'Promote destinations with AI-driven content, visitor engagement bots, and comprehensive tourism analytics.',
    features: ['Content AI', 'Visitor Bots', 'Tourism Analytics', 'Campaign Automation'],
    link: '/tourism'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
      </svg>
    ),
    title: 'Event Management',
    description: 'Conference and event booking, attendee management, real-time updates, and post-event analytics.',
    features: ['Event Booking', 'Attendee CRM', 'Live Updates', 'Post-Event Reports'],
    link: '/hospitality'
  }
];

const coreFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'AI Chat Assistant',
    description: 'Intelligent chatbot trained on your business data, handling inquiries 24/7 with human-like responses.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'WhatsApp Business',
    description: 'Automated WhatsApp messaging for bookings, confirmations, reminders, and customer support.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'CRM Integration',
    description: 'Complete guest and customer management with booking history, preferences, and automated follow-ups.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Analytics Dashboard',
    description: 'Real-time insights on bookings, revenue, guest satisfaction, and operational efficiency.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    title: 'Multi-language Support',
    description: 'Serve global guests in their preferred language with automatic translation and localization.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Secure & Compliant',
    description: 'Enterprise-grade security with GDPR compliance and data protection standards.'
  }
];

const tourPackages = [
  {
    image: '/images/heritage-tour.jpg',
    title: 'Heritage India Tour',
    location: 'Delhi - Agra - Jaipur',
    duration: '7 Days / 6 Nights',
    highlights: ['Taj Mahal Sunrise', 'Jaipur Palaces', 'Delhi Heritage Walk', 'Local Cuisine Experience'],
    price: 'Starting from ₹75,000'
  },
  {
    image: '/images/singapore-tour.jpg',
    title: 'Singapore Discovery',
    location: 'Singapore City & Sentosa',
    duration: '5 Days / 4 Nights',
    highlights: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island', 'Night Safari'],
    price: 'Starting from ₹1,25,000'
  },
  {
    image: '/images/kerala-tour.jpg',
    title: 'Kerala Backwaters',
    location: 'Kochi - Munnar - Alleppey',
    duration: '6 Days / 5 Nights',
    highlights: ['Houseboat Stay', 'Tea Plantations', 'Kathakali Show', 'Ayurvedic Spa'],
    price: 'Starting from ₹55,000'
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
    image: '/images/goa.jpg',
    name: 'Goa',
    country: 'India',
    tagline: 'Beach Paradise',
    attractions: 22
  },
  {
    image: '/images/himachal.jpg',
    name: 'Himachal Pradesh',
    country: 'India',
    tagline: 'Mountain Magic',
    attractions: 40
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

const integrations = [
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    name: 'WhatsApp Business',
    description: 'Direct customer communication'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.58-2.11-9.96-5.02-.42.72-.66 1.56-.66 2.46 0 1.68.85 3.16 2.14 4.02-.79-.02-1.53-.24-2.18-.6v.06c0 2.35 1.67 4.31 3.88 4.76-.4.1-.83.16-1.27.16-.31 0-.62-.03-.92-.08.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.83 2.1-6.15 2.1-.4 0-.8-.02-1.19-.07 2.19 1.4 4.78 2.22 7.57 2.22 9.07 0 14.02-7.52 14.02-14.02 0-.21 0-.42-.01-.63.96-.69 1.79-1.56 2.45-2.55-.88.39-1.83.65-2.82.77z"/>
      </svg>
    ),
    name: 'Social Media',
    description: 'Multi-platform engagement'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    name: 'Email Marketing',
    description: 'Automated campaigns'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    name: 'Booking Systems',
    description: 'OTA & PMS integration'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    name: 'Payment Gateways',
    description: 'Secure transactions'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    name: 'Analytics Tools',
    description: 'Google Analytics, Mixpanel'
  }
];

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Increase Revenue',
    description: 'Boost bookings and upsell opportunities through intelligent recommendations and automated follow-ups.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Save Time',
    description: 'Automate repetitive tasks like booking confirmations, reminders, and FAQs to focus on high-value activities.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Improve Guest Experience',
    description: 'Deliver personalized, instant responses that delight guests and build lasting relationships.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Scale Effortlessly',
    description: 'Handle unlimited inquiries simultaneously without adding staff or compromising quality.'
  }
];

const userTypes = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Hotel Owners',
    description: 'Boutique hotels to luxury chains looking to enhance guest experience and operational efficiency.',
    benefits: ['Automated guest services', 'Increased direct bookings', 'Better review management']
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Travel Agencies',
    description: 'Agency owners seeking to automate client communication and streamline booking processes.',
    benefits: ['24/7 client support', 'Automated itineraries', 'Lead capture & nurturing']
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Tour Operators',
    description: 'Operators wanting to manage group bookings, coordinate guides, and engage tourists effectively.',
    benefits: ['Group management', 'Real-time updates', 'Multi-language support']
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Tourism Boards',
    description: 'Government and private tourism bodies promoting destinations and engaging visitors.',
    benefits: ['Visitor engagement', 'Destination marketing', 'Tourism analytics']
  }
];

const faqs = [
  {
    question: 'What is IS2 Hospitality & Tourism?',
    answer: 'IS2 is an AI-powered technology platform specifically designed for the hospitality and tourism industry. Powered by Shiv.ai (www.shivai.co.in), we offer intelligent automation solutions including chatbots, CRM integration, WhatsApp business automation, and analytics dashboards tailored for hotels, travel agencies, tour operators, and tourism boards.'
  },
  {
    question: 'How does the AI chatbot work?',
    answer: 'Our AI chatbot is trained on your specific business data, including FAQs, service offerings, pricing, and policies. It can handle guest inquiries 24/7, make recommendations, assist with bookings, and seamlessly escalate complex issues to human staff when needed.'
  },
  {
    question: 'Can IS2 integrate with my existing booking system?',
    answer: 'Yes! IS2 is designed to integrate with major PMS (Property Management Systems), OTAs (Online Travel Agencies), CRM platforms, and booking engines. We support integrations with systems like Opera, Cloudbeds, Booking.com, Expedia, and many more.'
  },
  {
    question: 'Is my data secure with IS2?',
    answer: 'Absolutely. We follow enterprise-grade security standards including data encryption, secure API connections, and GDPR compliance. Your guest data and business information are protected with multiple layers of security.'
  },
  {
    question: 'How long does implementation take?',
    answer: 'Basic implementation can be completed in as little as 1-2 weeks. Full integration with existing systems and custom training typically takes 4-6 weeks depending on the complexity of your requirements.'
  },
  {
    question: 'Do you offer support in multiple languages?',
    answer: 'Yes, our platform supports multiple languages including English, Hindi, Mandarin, Malay, Tamil, and many more. This ensures you can serve international guests in their preferred language.'
  }
];

const pricingTiers = [
  {
    name: 'Starter',
    price: '₹15,000',
    period: 'per month',
    description: 'Perfect for small hotels and agencies getting started with AI',
    features: [
      'AI Chatbot (1 channel)',
      'Up to 1,000 conversations/month',
      'Basic CRM integration',
      'Email support',
      'Standard analytics',
      'WhatsApp integration'
    ],
    highlighted: false
  },
  {
    name: 'Professional',
    price: '₹35,000',
    period: 'per month',
    description: 'Ideal for growing businesses with multiple properties',
    features: [
      'AI Chatbot (unlimited channels)',
      'Up to 10,000 conversations/month',
      'Full CRM integration',
      'Priority support (24/7)',
      'Advanced analytics & reports',
      'WhatsApp + Facebook + Instagram',
      'Custom training & branding',
      'API access'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large chains and tourism boards with complex needs',
    features: [
      'Unlimited conversations',
      'Dedicated account manager',
      'Custom AI model training',
      'On-premise deployment option',
      'SLA guarantees',
      'White-label solution',
      'Multi-property dashboard',
      'Advanced integrations'
    ],
    highlighted: false
  }
];

const testimonials = [
  {
    quote: "IS2's AI chatbot has transformed our guest communication. We've seen a significant improvement in response times and guest satisfaction scores.",
    author: 'Hospitality Manager',
    role: 'Hotel Operations',
    company: 'Leading Hotel Chain',
    rating: 5,
    image: '/images/testimonial-1.jpg'
  },
  {
    quote: "The WhatsApp integration alone has been worth the investment. Our clients love the instant booking confirmations and real-time updates.",
    author: 'Travel Business Owner',
    role: 'Tourism Services',
    company: 'Travel & Tourism Business',
    rating: 5,
    image: '/images/testimonial-2.jpg'
  },
  {
    quote: "Managing group tours has never been easier. The multi-language support helps us cater to international tourists seamlessly.",
    author: 'Tourism Operations Lead',
    role: 'Tour Coordination',
    company: 'International Tour Operator',
    rating: 5,
    image: '/images/testimonial-3.jpg'
  }
];

const caseStudies = [
  {
    title: 'Luxury Hospitality Business Transformation',
    industry: 'Hospitality',
    challenge: 'High volume of repetitive guest inquiries overwhelming the front desk staff.',
    solution: 'Implemented AI chatbot with WhatsApp integration for 24/7 automated guest services.',
    results: ['Bookings increased', 'Faster response time', 'Higher guest satisfaction', 'Operational efficiency improved'],
    image: '/images/case-study-1.jpg'
  },
  {
    title: 'Tourism Business Digital Transformation',
    industry: 'Tourism',
    challenge: 'Manual itinerary creation and client communication taking too much time.',
    solution: 'Deployed IS2 automation for lead capture, itinerary generation, and client updates.',
    results: ['More inquiries handled', 'Conversion rate improved', 'Staff time saved', 'Client satisfaction increased'],
    image: '/images/case-study-2.jpg'
  }
];

export default function HomePage() {
  const { isDark } = useTheme();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-transparent" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gold-500/10 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* IS2 Logo */}
            <div className="mb-8 animate-fadeIn">
              <img 
                src="/images/is2-logo.png" 
                alt="IS2 - Hospitality & Tourism" 
                className="w-80 h-80 md:w-96 md:h-96 mx-auto object-contain drop-shadow-xl"
              />
            </div>
            <ShivAiBadge className="mx-auto mb-6 animate-fadeIn" />
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slideUp">
              <span className="text-gradient-gold">AI-Powered</span> Solutions for
              <br />
              <span className={isDark ? 'text-white' : 'text-black'}>Hospitality & Tourism</span>
            </h1>
            
            <p className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-slideUp ${isDark ? 'text-silver-300' : 'text-silver-600'}`} style={{ animationDelay: '0.1s' }}>
              Transform your guest experience with intelligent automation. From AI chatbots to WhatsApp integration, 
              IS2 helps hotels, travel agencies, and tour operators deliver exceptional service 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <a href="#contact" className="btn-primary text-lg px-8 py-4">
                Get Started
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#features" className="btn-secondary text-lg px-8 py-4">
                Learn More
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm animate-slideUp" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className={isDark ? 'text-silver-300' : 'text-silver-600'}>24/7 AI Support</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className={isDark ? 'text-silver-300' : 'text-silver-600'}>WhatsApp Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className={isDark ? 'text-silver-300' : 'text-silver-600'}>India & Singapore</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className={`w-6 h-6 ${isDark ? 'text-silver-500' : 'text-silver-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Hospitality & Tourism Services */}
      <section id="services" className={`py-20 ${isDark ? 'bg-zinc-900/50' : 'bg-silver-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Hospitality & Tourism <span className="text-gradient-gold">Verticals</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              Tailored AI solutions for every segment of the hospitality and tourism industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitalityServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Platform Features</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything You Need to <span className="text-gradient-gold">Succeed</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              A comprehensive suite of AI-powered tools designed specifically for hospitality and tourism
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages Showcase */}
      <section className={`py-20 ${isDark ? 'bg-zinc-900/50' : 'bg-silver-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Tourism Showcase</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient-gold">Tour Packages</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              Examples of how IS2 can help tour operators present and sell packages effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((pkg, index) => (
              <TourPackageCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Destination Marketing</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Popular <span className="text-gradient-gold">Destinations</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              Showcase destinations with AI-powered engagement and visitor information systems
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <DestinationCard key={index} {...dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className={`py-20 ${isDark ? 'bg-zinc-900/50' : 'bg-silver-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Integrations</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Seamless <span className="text-gradient-gold">Integrations</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              Connect IS2 with your existing tools and platforms for a unified experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <IntegrationCard key={index} {...integration} />
            ))}
          </div>
        </div>
      </section>

      {/* What Makes IS2 Different */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Why IS2</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What Makes Us <span className="text-gradient-gold">Different</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'} mb-2`}>
              Industry-specific AI solutions backed by Shiv.ai's expertise in India and Singapore
            </p>
            <p className="text-lg font-semibold text-gold-500 max-w-2xl mx-auto">
              IS2 gives economical, trusted AI-assisted solutions and more
            </p>
          </div>

          <ComparisonCard 
            title="IS2 vs Others"
            is2Features={[
              'AI-powered automations',
              'Economical solutions',
              'Trusted by 100+ businesses',
              'Industry-specific features',
              '24/7 support',
              'Real-time analytics',
              'Multi-language support',
              'Seamless integrations'
            ]}
            competitorFeatures={[
              'Limited automation',
              'Expensive setup',
              'Generic platforms',
              'Manual processes needed',
              'Business hours support only',
              'Basic reporting',
              'Limited language options',
              'Complex integrations'
            ]}
          />
        </div>
      </section>

      {/* Target Users */}
      <section className={`py-20 ${isDark ? 'bg-zinc-900/50' : 'bg-silver-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Who We Serve</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Built for <span className="text-gradient-gold">Your Business</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              IS2 is designed for hospitality and tourism businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userTypes.map((user, index) => (
              <UserTypeCard key={index} {...user} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">ROI & Benefits</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Drive Real <span className="text-gradient-gold">Results</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              See tangible improvements across your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-20 ${isDark ? 'bg-zinc-900/50' : 'bg-silver-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What Our <span className="text-gradient-gold">Clients Say</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              Hear from hospitality and tourism businesses transforming with IS2
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Case Studies</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Success <span className="text-gradient-gold">Stories</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              Real-world examples of IS2 driving transformation
            </p>
            <p className={`text-sm max-w-2xl mx-auto ${isDark ? 'text-silver-500' : 'text-silver-500'} mt-2`}>
              Discover how businesses transformed their operations with intelligent automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={`py-20 ${isDark ? 'bg-zinc-900/50' : 'bg-silver-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Pricing</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Choose Your <span className="text-gradient-gold">Plan</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              Flexible pricing to match your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <PricingCard key={index} {...tier} />
            ))}
          </div>
        </div>
      </section>

      {/* Shiv.ai Technology Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto p-8 md:p-12 rounded-3xl ${isDark ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-silver-200'}`}>
            <div className="text-center mb-8">
              <ShivAiBadge variant="large" className="mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Powered by <span className="text-gradient-gold">Shiv.ai</span>
              </h2>
              <p className={`text-lg ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
                Global AI Service Provider based in India and Singapore
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className={`text-center p-6 rounded-xl ${isDark ? 'bg-zinc-800' : 'bg-silver-100'}`}>
                <div className="text-gold-500 font-bold text-3xl mb-2">AI</div>
                <p className={`text-sm ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
                  Cutting-edge artificial intelligence and machine learning
                </p>
              </div>
              <div className={`text-center p-6 rounded-xl ${isDark ? 'bg-zinc-800' : 'bg-silver-100'}`}>
                <div className="text-gold-500 font-bold text-3xl mb-2">24/7</div>
                <p className={`text-sm ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
                  Round-the-clock support and system availability
                </p>
              </div>
              <div className={`text-center p-6 rounded-xl ${isDark ? 'bg-zinc-800' : 'bg-silver-100'}`}>
                <div className="text-gold-500 font-bold text-3xl mb-2">Global</div>
                <p className={`text-sm ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
                  Serving clients across India, Singapore, and beyond
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <a 
                href="https://www.shivai.co.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors"
              >
                Visit Shiv.ai
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Our Presence</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Offices in <span className="text-gradient-gold">India & Singapore</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              Global support with local expertise in key hospitality & tourism hubs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* India Office */}
            <div className={`rounded-2xl overflow-hidden ${isDark ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-silver-200'}`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.8!2d78.2619!3d30.0837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sRishikesh!2sUttarakhand%20249201%20India!5e0!3m2!1sen!2sin!4v1698000000000"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            <div className={`rounded-2xl overflow-hidden ${isDark ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-silver-200'}`}>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Rishikesh, India</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gold-500 mb-1">Address</p>
                      <p className={isDark ? 'text-silver-400' : 'text-silver-600'}>
                        Rishikesh, Uttarakhand 249201, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gold-500 mb-1">Timezone</p>
                      <p className={isDark ? 'text-silver-400' : 'text-silver-600'}>
                        IST (UTC+5:30)
                      </p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <a 
                      href="https://maps.google.com/?q=Rishikesh,+Uttarakhand,+India" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors font-medium"
                    >
                      View on Maps
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Singapore Office */}
            <div className={`rounded-2xl overflow-hidden ${isDark ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-silver-200'}`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d103.7306!3d1.2816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sMarinaBay!2sSingapore%20018956!5e0!3m2!1sen!2ssg!4v1698000000000"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Marina Bay, Singapore</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gold-500 mb-1">Address</p>
                      <p className={isDark ? 'text-silver-400' : 'text-silver-600'}>
                        Marina Bay, Singapore 018956
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gold-500 mb-1">Timezone</p>
                      <p className={isDark ? 'text-silver-400' : 'text-silver-600'}>
                        SGT (UTC+8:00)
                      </p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <a 
                      href="https://maps.google.com/?q=Marina+Bay,+Singapore" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors font-medium"
                    >
                      View on Maps
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 ${isDark ? 'bg-zinc-900/50' : 'bg-silver-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              Got questions? We've got answers.
            </p>
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

      {/* Contact / Lead Form Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Get Started</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to <span className="text-gradient-gold">Transform</span> Your Business?
              </h2>
              <p className={`text-lg mb-8 ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
                Join hospitality and tourism businesses already using IS2 to enhance guest experiences and streamline operations. 
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={isDark ? 'text-silver-300' : 'text-silver-700'}>Free consultation and demo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={isDark ? 'text-silver-300' : 'text-silver-700'}>Custom solution tailored to your needs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={isDark ? 'text-silver-300' : 'text-silver-700'}>Quick implementation - start in weeks</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={isDark ? 'text-silver-300' : 'text-silver-700'}>24/7 support from India & Singapore</span>
                </div>
              </div>

              <div className="mt-8">
                <ShivAiBadge variant="inline" />
              </div>
            </div>

            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`py-16 ${isDark ? 'bg-gradient-to-r from-zinc-900 to-zinc-800' : 'bg-gradient-to-r from-silver-200 to-silver-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Start Your <span className="text-gradient-gold">Digital Transformation</span> Today
            </h2>
            <p className={`text-lg mb-8 ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              Join the future of hospitality and tourism with IS2 and Shiv.ai
            </p>
            <a href="#contact" className="btn-primary text-lg px-8 py-4">
              Get Your Free Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
