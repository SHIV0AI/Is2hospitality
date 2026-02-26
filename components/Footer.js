'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const hospitalityLinks = [
    { href: '/hospitality', label: 'Overview' },
    { href: '/hospitality#luxury', label: 'Luxury Hospitality' },
    { href: '/hospitality#corporate', label: 'Corporate Solutions' },
    { href: '/hospitality#scalable', label: 'Scalable Network' },
  ];

  const tourismLinks = [
    { href: '/tourism', label: 'Overview' },
    { href: '/tour-operators', label: 'Tour Operators' },
    { href: '/travel-agencies', label: 'Travel Agencies' },
    { href: '/destination-management', label: 'Destination Management' },
  ];

  const featureLinks = [
    { href: '/features#ai-chat', label: 'AI Chat Widget' },
    { href: '/features#whatsapp', label: 'WhatsApp Integration' },
    { href: '/features#crm', label: 'Lead CRM' },
    { href: '/features#analytics', label: 'Analytics Dashboard' },
  ];

  const companyLinks = [
    { href: '/pricing', label: 'Pricing' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-silver-100 dark:bg-zinc-950 border-t border-silver-200 dark:border-zinc-800">
      {/* Main Footer */}
      <div className="container-max mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
                <span className="text-black font-bold text-xl">IS2</span>
              </div>
              <div>
                <span className="text-xl font-bold text-black dark:text-white">IS2</span>
                <span className="text-sm block text-gold-500">Hospitality & Tourism</span>
              </div>
            </Link>
            <p className="text-silver-600 dark:text-silver-400 text-sm mb-6 leading-relaxed">
              IS2 Hospitality & Tourism Technology Division delivers AI-powered solutions for hotels, resorts, travel agencies, and tour operators worldwide.
            </p>
            
            {/* Powered by Shiv.ai */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-gold-500/10 border border-gold-500/20">
              <div className="w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gold-500">Powered by Shiv.ai</p>
                <p className="text-xs text-silver-600 dark:text-silver-400">Global AI Service Provider</p>
                <p className="text-xs text-silver-500">India/Singapore</p>
              </div>
            </div>

            <a
              href="https://www.shivai.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-gold-500 text-sm hover:text-gold-400 transition-colors"
            >
              Visit Shiv.ai
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Hospitality Links */}
          <div>
            <h3 className="text-black dark:text-white font-semibold mb-4">Hospitality</h3>
            <ul className="space-y-3">
              {hospitalityLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-silver-600 dark:text-silver-400 text-sm hover:text-gold-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tourism Links */}
          <div>
            <h3 className="text-black dark:text-white font-semibold mb-4">Tourism</h3>
            <ul className="space-y-3">
              {tourismLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-silver-600 dark:text-silver-400 text-sm hover:text-gold-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Links */}
          <div>
            <h3 className="text-black dark:text-white font-semibold mb-4">Features</h3>
            <ul className="space-y-3">
              {featureLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-silver-600 dark:text-silver-400 text-sm hover:text-gold-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-black dark:text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-silver-600 dark:text-silver-400 text-sm hover:text-gold-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-silver-200 dark:border-zinc-800">
        <div className="container-max mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-silver-500 text-sm">
              © {currentYear} IS2 Hospitality & Tourism. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-silver-500 text-sm hover:text-gold-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-silver-500 text-sm hover:text-gold-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
