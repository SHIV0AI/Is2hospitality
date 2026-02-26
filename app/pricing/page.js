'use client';

import { useTheme } from '../../lib/themeContext';
import PricingCard from '../../components/PricingCard';
import FAQCard from '../../components/FAQCard';
import LeadForm from '../../components/LeadForm';
import ShivAiBadge from '../../components/ShivAiBadge';
import { useState } from 'react';

const pricingTiers = [
  {
    name: 'Starter',
    price: '₹15,000',
    period: 'per month',
    description: 'Perfect for small hotels and travel agencies getting started with AI automation.',
    features: [
      'AI Chatbot (1 channel - Website or WhatsApp)',
      'Up to 1,000 AI conversations/month',
      'Basic guest/client CRM',
      'Email support (business hours)',
      'Standard analytics dashboard',
      'WhatsApp business integration',
      '2 team members',
      '1 property/location'
    ],
    highlighted: false
  },
  {
    name: 'Professional',
    price: '₹35,000',
    period: 'per month',
    description: 'Ideal for growing businesses with multiple properties or higher volume needs.',
    features: [
      'AI Chatbot (unlimited channels)',
      'Up to 10,000 AI conversations/month',
      'Full CRM with preference tracking',
      'Priority support (24/7)',
      'Advanced analytics & custom reports',
      'WhatsApp + Facebook + Instagram',
      'Custom AI training & branding',
      'API access',
      '10 team members',
      '5 properties/locations'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large hotel chains and tourism organizations with complex requirements.',
    features: [
      'Unlimited AI conversations',
      'Dedicated account manager',
      'Custom AI model training',
      'On-premise deployment option',
      'SLA guarantees (99.9% uptime)',
      'White-label solution',
      'Multi-property dashboard',
      'Advanced integrations (PMS, OTA)',
      'Unlimited team members',
      'Unlimited properties'
    ],
    highlighted: false
  }
];

const comparisonFeatures = [
  { name: 'AI Conversations', starter: '1,000/month', professional: '10,000/month', enterprise: 'Unlimited' },
  { name: 'Channels', starter: '1 channel', professional: 'Unlimited', enterprise: 'Unlimited' },
  { name: 'Team Members', starter: '2', professional: '10', enterprise: 'Unlimited' },
  { name: 'Properties', starter: '1', professional: '5', enterprise: 'Unlimited' },
  { name: 'CRM', starter: 'Basic', professional: 'Full', enterprise: 'Enterprise' },
  { name: 'Analytics', starter: 'Standard', professional: 'Advanced', enterprise: 'Custom' },
  { name: 'Support', starter: 'Email (Business hours)', professional: '24/7 Priority', enterprise: 'Dedicated Manager' },
  { name: 'Integrations', starter: 'Basic', professional: 'Full', enterprise: 'Custom' },
  { name: 'White-label', starter: '✗', professional: '✗', enterprise: '✓' },
  { name: 'SLA', starter: '✗', professional: '✗', enterprise: '99.9%' }
];

const faqs = [
  {
    question: 'Can I change plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features are available immediately. When downgrading, the change takes effect at the start of your next billing cycle.'
  },
  {
    question: 'What happens if I exceed my conversation limit?',
    answer: 'We\'ll notify you when you\'re approaching your limit. You can upgrade to a higher plan or purchase additional conversations as needed. We won\'t cut off service unexpectedly.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! We offer a 14-day free trial of the Professional plan so you can experience all features before committing. No credit card required.'
  },
  {
    question: 'What\'s included in setup?',
    answer: 'All plans include initial setup assistance, AI training on your business data, and integration support. Enterprise plans include dedicated implementation resources.'
  },
  {
    question: 'Do you offer annual billing?',
    answer: 'Yes, we offer a 20% discount for annual billing on Starter and Professional plans. Enterprise plans are quoted individually.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts for Starter and Professional plans. Your service continues until the end of the current billing period.'
  }
];

export default function PricingPage() {
  const { isDark } = useTheme();
  const [openFaq, setOpenFaq] = useState(null);
  const [billingPeriod, setBillingPeriod] = useState('monthly');

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
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-4 block">Pricing Plans</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Simple, Transparent <span className="text-gradient-gold">Pricing</span>
            </h1>
            <p className={`text-lg md:text-xl mb-8 ${isDark ? 'text-silver-300' : 'text-silver-600'}`}>
              Choose the plan that fits your business. No hidden fees, no surprises.
              All plans include a 14-day free trial.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={billingPeriod === 'monthly' ? 'text-gold-500 font-semibold' : ''}>Monthly</span>
              <button 
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
                className={`relative w-14 h-7 rounded-full transition-colors ${isDark ? 'bg-zinc-700' : 'bg-silver-300'}`}
              >
                <span 
                  className={`absolute top-1 w-5 h-5 rounded-full bg-gold-500 transition-transform ${billingPeriod === 'annual' ? 'translate-x-8' : 'translate-x-1'}`} 
                />
              </button>
              <span className={billingPeriod === 'annual' ? 'text-gold-500 font-semibold' : ''}>
                Annual <span className="text-green-500 text-sm">(Save 20%)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className={`py-12 ${isDark ? 'bg-zinc-900/50' : 'bg-silver-100'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <PricingCard 
                key={index} 
                {...tier} 
                price={
                  billingPeriod === 'annual' && tier.price !== 'Custom' 
                    ? `₹${Math.round(parseInt(tier.price.replace('₹', '').replace(',', '')) * 0.8).toLocaleString('en-IN')}`
                    : tier.price
                }
                period={billingPeriod === 'annual' && tier.price !== 'Custom' ? 'per month (billed annually)' : tier.period}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Compare Plans</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Feature <span className="text-gradient-gold">Comparison</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${isDark ? 'border-zinc-700' : 'border-silver-200'}`}>
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-gold-500">Professional</th>
                  <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className={`border-b ${isDark ? 'border-zinc-800' : 'border-silver-100'}`}>
                    <td className={`py-4 px-4 ${isDark ? 'text-silver-300' : 'text-silver-700'}`}>{feature.name}</td>
                    <td className="py-4 px-4 text-center">{feature.starter}</td>
                    <td className={`py-4 px-4 text-center ${isDark ? 'bg-gold-500/5' : 'bg-gold-500/10'}`}>{feature.professional}</td>
                    <td className="py-4 px-4 text-center">{feature.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 ${isDark ? 'bg-zinc-900/50' : 'bg-silver-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Pricing <span className="text-gradient-gold">Questions</span>
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
                Need a <span className="text-gradient-gold">Custom Quote?</span>
              </h2>
              <p className={`text-lg mb-6 ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
                Have unique requirements? Running a large chain? Need custom integrations? 
                Let's discuss a solution tailored to your business.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className={isDark ? 'text-silver-300' : 'text-silver-700'}>14-day free trial on all plans</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className={isDark ? 'text-silver-300' : 'text-silver-700'}>No credit card required to start</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className={isDark ? 'text-silver-300' : 'text-silver-700'}>Cancel anytime, no lock-in</span>
                </div>
              </div>
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
