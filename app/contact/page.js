'use client';

import { useTheme } from '../../lib/themeContext';
import LeadForm from '../../components/LeadForm';
import ShivAiBadge from '../../components/ShivAiBadge';

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'India Office',
    lines: ['Shiv.AI Private Limited', 'Dehradun, India'],
    link: null
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Singapore Office',
    lines: ['Shiv.AI Private Limited', 'Singapore'],
    link: null
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    lines: ['Hospitality.is2@shivai.co.in', 'founders@shivai.co.in'],
    link: 'mailto:Hospitality.is2@shivai.co.in'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    title: 'WhatsApp',
    lines: ['+91 9953739262 (India)', '+65 87101444 (Singapore)'],
    link: 'https://wa.me/919953739262'
  }
];

const supportOptions = [
  {
    icon: (
      <svg className="w-10 h-10 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Sales Inquiry',
    description: 'Interested in IS2 for your business? Our team will provide a personalized demo and consultation.',
    cta: 'Talk to Sales',
    link: '#form'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Technical Support',
    description: 'Already an IS2 customer? Our support team is available to help with any technical issues.',
    cta: 'Get Support',
    link: 'mailto:support@is2.shivai.co.in'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Partnership',
    description: 'Interested in partnering with IS2? We work with resellers, agencies, and technology partners.',
    cta: 'Partner With Us',
    link: '#form'
  }
];

export default function ContactPage() {
  const { isDark } = useTheme();

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
            <span className="text-gold-500 text-sm font-semibold tracking-wider uppercase mb-4 block">Contact Us</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's <span className="text-gradient-gold">Connect</span>
            </h1>
            <p className={`text-lg md:text-xl mb-8 ${isDark ? 'text-silver-300' : 'text-silver-600'}`}>
              Have questions about IS2? Ready to transform your hospitality or tourism business?
              Our team in India and Singapore is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className={`py-12 ${isDark ? 'bg-zinc-900/50' : 'bg-silver-100'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {supportOptions.map((option, index) => (
              <a 
                key={index}
                href={option.link}
                className={`block p-8 rounded-2xl text-center transition-all hover:-translate-y-1 ${
                  isDark ? 'bg-zinc-800 border border-zinc-700 hover:border-gold-500/50' : 'bg-white border border-silver-200 hover:border-gold-500/50'
                }`}
              >
                <div className="flex justify-center mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>{option.description}</p>
                <span className="text-gold-500 font-semibold hover:text-gold-400 transition-colors">
                  {option.cta} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Send Us a <span className="text-gradient-gold">Message</span>
              </h2>
              <p className={`mb-8 ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <LeadForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Contact <span className="text-gradient-gold">Information</span>
              </h2>
              <p className={`mb-8 ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
                Reach out to us directly through any of these channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className={`flex gap-4 p-6 rounded-xl ${isDark ? 'bg-zinc-900 border border-zinc-800' : 'bg-silver-50 border border-silver-200'}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 text-gold-500">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{info.title}</h3>
                      {info.lines.map((line, lineIndex) => (
                        <p key={lineIndex} className={`text-sm ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
                          {info.link ? (
                            <a href={info.link} className="hover:text-gold-500 transition-colors">{line}</a>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className={`mt-8 p-6 rounded-xl ${isDark ? 'bg-zinc-900 border border-zinc-800' : 'bg-silver-50 border border-silver-200'}`}>
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDark ? 'bg-zinc-800 hover:bg-gold-500/20' : 'bg-silver-200 hover:bg-gold-500/20'}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDark ? 'bg-zinc-800 hover:bg-gold-500/20' : 'bg-silver-200 hover:bg-gold-500/20'}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDark ? 'bg-zinc-800 hover:bg-gold-500/20' : 'bg-silver-200 hover:bg-gold-500/20'}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.shivai.co.in" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDark ? 'bg-zinc-800 hover:bg-gold-500/20' : 'bg-silver-200 hover:bg-gold-500/20'}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </a>
                </div>
              </div>

              <ShivAiBadge variant="large" className="mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={`py-12 ${isDark ? 'bg-zinc-900' : 'bg-silver-100'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Visit Us at Our <span className="text-gradient-gold">Global Offices</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Rishikesh Office Map */}
            <div className="rounded-2xl overflow-hidden">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Rishikesh, India</h3>
                <p className={`text-sm ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
                  Rishikesh, Uttarakhand 249201, India
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.8!2d78.2619!3d30.0837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sRishikesh!2sUttarakhand%20249201%20India!5e0!3m2!1sen!2sin!4v1698000000000"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Marina Bay Office Map */}
            <div className="rounded-2xl overflow-hidden">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Marina Bay, Singapore</h3>
                <p className={`text-sm ${isDark ? 'text-silver-400' : 'text-silver-600'}`}>
                  Marina Bay, Singapore 018956
                </p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d103.7306!3d1.2816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sMarinaBay!2sSingapore%20018956!5e0!3m2!1sen!2ssg!4v1698000000000"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
