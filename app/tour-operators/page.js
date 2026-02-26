'use client';

import { useTheme } from '../../lib/themeContext';
import FeatureCard from '../../components/FeatureCard';
import BenefitCard from '../../components/BenefitCard';
import TestimonialCard from '../../components/TestimonialCard';
import FAQCard from '../../components/FAQCard';
import LeadForm from '../../components/LeadForm';
import ShivAiBadge from '../../components/ShivAiBadge';
import { useState } from 'react';

const tourOperatorFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Group Booking Management',
    description: 'Handle large group bookings with ease. Manage rooming lists, meal preferences, and special requirements.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Tour Guide Coordination',
    description: 'Assign guides, share tour details, and enable real-time communication between guides and operations.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'WhatsApp Broadcasts',
    description: 'Send tour updates, meeting points, and important information to entire groups via WhatsApp.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    title: 'Multi-language AI',
    description: 'Communicate with international tourists in their native language automatically.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: 'Real-time Updates',
    description: 'Send instant notifications about itinerary changes, weather alerts, and important updates.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Tour Analytics',
    description: 'Track tour performance, customer satisfaction, and identify opportunities for improvement.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Itinerary Builder',
    description: 'Create detailed day-by-day itineraries with timing, locations, and activity descriptions.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Feedback Collection',
    description: 'Automated post-tour feedback collection and review request system.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Emergency Support',
    description: 'AI-powered emergency assistance and escalation protocols for tourist safety.'
  }
];

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Save Operations Time',
    description: 'Automate repetitive tasks like sending updates, collecting info, and answering common questions.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Handle Larger Groups',
    description: 'Scale your operations without proportionally increasing staff.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Improve Tourist Experience',
    description: 'Deliver timely, relevant information that enhances the tour experience.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    title: 'Serve International Tourists',
    description: 'Break language barriers with automatic multi-language support.'
  }
];

const useCases = [
  {
    title: 'Pre-Tour Communication',
    description: 'Automatically send tour details, packing lists, meeting points, and collect required information from tourists before the tour begins.',
    icon: (
      <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'During Tour Support',
    description: 'Provide real-time assistance to tourists with questions about attractions, restaurants, shopping, and local tips through AI chat.',
    icon: (
      <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      </svg>
    )
  },
  {
    title: 'Post-Tour Follow-up',
    description: 'Automatically collect feedback, request reviews, share photo galleries, and nurture relationships for repeat bookings.',
    icon: (
      <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  }
];

const testimonials = [
  {
    quote: "Managing tour groups of 50+ people used to be chaotic. With IS2, we send updates to everyone instantly and answer questions automatically. It's a game-changer.",
    author: 'Michael Tan',
    role: 'Operations Director',
    company: 'Asia Pacific Tours',
    rating: 5,
    image: '/images/testimonial-tour-1.jpg'
  },
  {
    quote: "The multi-language feature is incredible. We serve tourists from China, Japan, and Europe - and the AI responds in their language perfectly.",
    author: 'Lakshmi Menon',
    role: 'Founder',
    company: 'Kerala Explorers',
    rating: 5,
    image: '/images/testimonial-tour-2.jpg'
  }
];

const faqs = [
  {
    question: 'Can IS2 handle multiple tour groups simultaneously?',
    answer: 'Yes! IS2 is designed to manage multiple concurrent tour groups. Each group can have its own communication channel, and your operations team gets a unified dashboard to monitor all groups.'
  },
  {
    question: 'How do guides access the system?',
    answer: 'Guides can access IS2 through a simple mobile interface or WhatsApp. They receive tour details, guest lists, and can communicate with operations in real-time.'
  },
  {
    question: 'Can tourists ask questions in their own language?',
    answer: 'Absolutely. Our AI automatically detects the language and responds accordingly. We support major languages including English, Hindi, Mandarin, Japanese, Korean, Spanish, French, German, and more.'
  },
  {
    question: 'What happens if there is an emergency during a tour?',
    answer: 'IS2 includes emergency protocols. Tourists can trigger emergency alerts, and the system immediately notifies guides, operations, and can even escalate to local emergency services if needed.'
  }
];

export default function TourOperatorsPage() {
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
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-4 block">Tour Operator Solutions</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI for <span className="text-gradient-gold">Tour Operators</span>
            </h1>
            <p className={`text-lg md:text-xl mb-8 ${isDark ? 'text-silver-300' : 'text-silver-600'}`}>
              Manage group tours seamlessly with AI-powered communication, guide coordination, 
              and multi-language support. Deliver exceptional tour experiences at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary text-lg px-8 py-4">
                Get Started
              </a>
              <a href="#features" className="btn-secondary text-lg px-8 py-4">
                See Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className={`py-20 ${isDark ? 'bg-zinc-900/50' : 'bg-silver-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Tour Journey</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              IS2 Throughout the <span className="text-gradient-gold">Tour Lifecycle</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              From pre-tour to post-tour, IS2 supports every stage of the tour experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className={`p-8 rounded-2xl ${isDark ? 'bg-zinc-800 border border-zinc-700' : 'bg-white border border-silver-200'}`}>
                <div className="mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className={`${isDark ? 'text-silver-400' : 'text-silver-600'}`}>{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Features</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Tour Operator <span className="text-gradient-gold">Features</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
              Everything you need to run efficient, memorable tours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourOperatorFeatures.map((feature, index) => (
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
              Why Tour Operators <span className="text-gradient-gold">Choose IS2</span>
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
              Trusted by <span className="text-gradient-gold">Tour Operators</span>
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
                Scale Your <span className="text-gradient-gold">Tour Operations</span>
              </h2>
              <p className={`text-lg mb-6 ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
                Ready to transform how you manage tours? Let us show you how IS2 can help you handle more groups with less effort.
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
