# Plan: Next.js IS2 Hospitality Website with Dual Theme

**TL;DR:** Build a Next.js website for IS2 Hospitality & Tourism (Powered by SHiV.Ai) using JavaScript + Tailwind CSS with a dark/light theme toggle in the navbar. The site showcases three hospitality verticals, AI capabilities powered by SHiV.Ai global AI service provider (India/Singapore-based), lead capture, and a modern card-based design. Dark mode features black backgrounds with gold accents; light mode uses white/silver. Navigation includes an AI tab linking to SHiV.Ai. All primary sections (features, verticals, case studies, benefits) are included as automated cards.

iMPORTANT : DONNOT ASK ANY QUESTIONS. JUST FOLLOW THE STEPS AND COMPLETE THE TASK. THEN ONLY STOP. DO NOT EXPLAIN ANYTHING. DO NOT REPEAT THE STEPS. JUST COMPLETE THE TASK.

## Steps

### 1. Initialize Next.js project
- Create `next.config.js` with Image optimization and API routes for lead capture
- Set up `package.json` with dependencies: `next`, `react`, `tailwindcss`, `autoprefixer`
- Create `tsconfig.json` (optional for JS but recommended for structure)
- Set up Tailwind CSS with dark mode class strategy in `tailwind.config.js`

### 2. Create layout & navigation structure
- Build `app/layout.js` (or `pages/_app.js` depending on App Router preference) with theme provider
- Create `components/Navbar.js` with:
  - Modern horizontal nav menu with service tabs
  - Theme toggle button (Dark/Light)
  - "AI" tab linking to `www.shivai.co.in` (Shiv.ai global AI service provider)
  - "Powered by Shiv.ai" logo/badge in navbar
  - Mobile-responsive hamburger menu
- Create `components/Footer.js` with:
  - Contact & links
  - "IS2  Hospitality & Tourism - Powered by Shiv.ai" branding
  - Shiv.ai description: Global AI service provider based in India/Singapore
  - Link to Shiv.ai website (www.shivai.co.in)

### 3. Set up theme system
- Create `lib/themeContext.js` or use Tailwind's built-in dark mode
- Configure `tailwind.config.js` with custom color palette:
  - Dark: `bg-black`, `text-white`, `accent-gold` (#D4AF37 or similar)
  - Light: `bg-white`, `text-black`, `accent-gold`
  - Secondary: silver (`#E8E8E8` dark mode, `#F0F0F0` light)

### 4. Create core pages
- `app/page.js` (Home) — hero section, 3 CTAs for hospitality & tourism verticals
- `app/hospitality.js` — Hospitality verticals (Luxury, Corporate, Scalable)
- `app/tourism.js` — Tourism solutions overview
- `app/tour-operators.js` — Tour operator packages & management tools
- `app/tour-packages.js` — Destination & tour package showcase
- `app/destination-management.js` — Destination marketing & coordination
- `app/travel-agencies.js` — Travel agency lead capture & booking management
- `app/features.js` — AI Chat Widget, WhatsApp, CRM, Analytics, Tourism-specific tools
- `app/pricing.js` — Subscription tiers for both Hospitality & Tourism
- `app/contact.js` — Lead capture form
- `app/tourism-case-studies.js` — Tourism operator success stories

### 5. Build reusable card components
- `components/ServiceCard.js` — showcase hospitality & tourism verticals/services
- `components/FeatureCard.js` — AI Chat, WhatsApp, CRM, Analytics, Tourism-specific features
- `components/TourPackageCard.js` — tour packages, destinations, itineraries
- `components/DestinationCard.js` — destination showcase with attractions, activities
- `components/TestimonialCard.js` — hotel, travel agency, tour operator testimonials
- `components/StatCard.js` — impact metrics (tours booked, destinations managed, etc.)
- `components/CaseStudyCard.js` — success stories from hospitality & tourism clients
- `components/PricingCard.js` — subscription tiers with features/benefits
- `components/IntegrationCard.js` — OTA platforms, payment gateways, tour booking systems
- `components/ComparisonCard.js` — IS2 vs competitors feature comparison
- `components/BenefitCard.js` — ROI/value proposition metrics
- `components/BlogCard.js` — resource articles and insights
- `components/FAQCard.js` — expandable Q&A sections
- All cards auto-responsive, theme-aware with Tailwind classes

### 6. Homepage sections (with card-based layouts)
- **Hero Banner:** Compelling tagline (\"IS2: Revolutionizing Hospitality & Tourism\") + 4 main CTA buttons (Browse Hospitality | Explore Tourism | For Travel Agencies | Join Network)
- **Market Insights:** StatCards showing hospitality & tourism industry trends (customizable with market data)
- **Hospitality & Tourism Verticals Showcase:** Multi-card layout covering:
  - **Hospitality Section:** Luxury, Corporate, Scalable verticals with ServiceCards
  - **Tourism Section:** Tour Operators, Destination Management, Travel Agencies with specialized cards
- **Core Features Grid:** 8+ FeatureCards (AI Chat Widget | WhatsApp Integration | Lead CRM | Analytics Dashboard | Booking Conversion | Revenue Optimization | Tour Package Management | Destination Marketing)
- **Tourism Highlights:** 
  - Featured Destinations carousel with DestinationCards
  - Popular Tour Packages showcase
  - Tourism marketplace integration
- **Integration Partners:** IntegrationCards for OTAs (Booking.com, Expedia, MakeMyTrip, Viator, GetYourGuide), Payment gateways (Razorpay, Stripe, PayPal), PMS & tour booking systems
- **What Makes IS2 Different:** ComparisonCard (IS2 Hospitality & Tourism vs generic platforms showing: Powered by Shiv.ai advanced AI, dual-vertical expertise, industry-specialized, multi-channel, scalable, affordable)
- **Target Users Grid:** 8+ UserCards (5-star Hotels | Boutique Resorts | Travel Agencies | Corporate Event Planners | Tour Operators | Destination Weddings | Adventure Companies | Travel Startups)
- **ROI & Benefits:** BenefitCards with key benefits (Lead Generation | Response Optimization | Booking Conversion | Cost Efficiency | Destination Visibility | Tourism Revenue Growth)
- **Testimonials Section:** 8-10 TestimonialCards from hotel managers, travel agency owners, tour operators, destination coordinators
- **Case Studies:** Template CaseStudyCards with placeholder structure (hospitality & tourism):
  - Template: Luxury Property achieved [RESULT] using IS2 [FEATURE]
  - Template: Travel Agency improved [METRIC] with IS2 CRM
  - Template: Tour Operator scaled operations with IS2 booking management
  - Template: Destination became top-ranked through IS2 tourism platform
  - Template: Adventure company increased bookings with AI chatbot
- **Pricing Tier Cards:** 3-4 PricingCards for both Hospitality & Tourism (Starter | Professional | Enterprise)
- **Shiv.ai Technology Showcase Section:** 
  - Highlight Shiv.ai as the AI backbone powering IS2 Hospitality & Tourism
  - Global AI provider (India/Singapore) with hospitality & tourism models
  - Proprietary NLP for travel/hospitality conversations
  - Multi-language support and intelligent guest/tourist engagement
  - Real-time API-driven integrations for both verticals
- **Feature Deep Dive Sections (Hospitality & Tourism):**
  - AI Chat Widget: Shiv.ai-powered hospitality & tourism-specific responses, multi-language, 24/7 support
  - WhatsApp Integration: Booking links, guest updates, tour confirmations, AI-assisted concierge
  - Lead Management: Lead scoring for hotels, travel agencies, tour operators, and destinations
  - Analytics: Conversion funnel, guest/tourist behavior, tourism metrics, competitor benchmarking
  - Tour Package Management: Itinerary planning, availability management, pricing automation
  - Destination Marketing: Visibility, attraction showcase, traveler engagement, reviews management
- **Blog/Resources Section:** 10+ BlogCards featuring:
  - "The Future of Hospitality & Tourism: AI Integration Trends 2026"
  - "How Hotels Are Using ChatBots to Increase Revenue"
  - "Tourism Industry Guide: Digital Transformation"
  - "Tour Operator Solutions: Streamline Your Business"
  - "Destination Marketing: Attract Global Travelers"
  - "Travel Agency Growth: Lead Generation Strategies"
  - "Corporate Housing Solutions: A Blue Ocean Opportunity"
  - "Destination Wedding Planning: Digital-First Approach"
  - "Adventure Tourism: Booking Management Best Practices"
  - "Travel Marketplace Integration: Expand Your Reach"
- **FAQ Section:** 12+ FAQCards covering both hospitality & tourism:
  - How does Shiv.ai power IS2 for both hospitality and tourism?
  - What tourism features does IS2 offer?
  - Can tour operators manage multiple destinations?
  - How do travel agencies integrate with IS2?
  - Tour package management and automation?
  - Destination marketing visibility and analytics?
  - Multi-language support for international tourism?
  - Can I integrate with Viator, GetYourGuide, or other tourism platforms?
  - How is guest/traveler data protected? (Compliance standards)
  - WhatsApp integration for tourism businesses?
  - ROI timeline for tourism operators?
  - Is IS2 available globally for tourism services?
- **Industry Comparisons:** ComparisonCards showing IS2 Hospitality & Tourism vs competitors for both hospitality & tourism segments
- **Trust/Social Proof Section:** Logo carousel (hospitality + tourism partners), certifications, awards, security badges
- **CTA Section:** Newsletter signup + "Get Started" button leading to `app/contact.js`

### 7. Lead capture & comprehensive contact form system
- **Multi-Step Contact Form** (`components/LeadForm.js`) with conditional fields:
  - **Step 1 - Basic Info:** First Name, Last Name, Email, Phone (with country code)
  - **Step 2 - Organization:** Company/Organization Name, Industry dropdown (Hotel | Resort | Travel Agency | Corporate | Event Planner | Tour Operator | Other)
  - **Step 3 - Specific Details (conditional based on industry):**
    - For Hotels/Resorts: Property name, Type/Category, Number of rooms, Current booking system
    - For Travel Agencies: Agency name, Types of properties managed, Current CRM in use
    - For Corporate: Company type, Properties/Accommodations needed, Industries served
    - For Tour Operators: Destinations covered, Service focus areas, Current booking platform
  - **Step 4 - Interest & Message:** Interested in (checkbox: AI Chat | WhatsApp | CRM | Analytics | Tour Management | Destination Marketing | All), Additional message, Budget range
  - **Success messaging:** Conditional thank-you page with next steps and WhatsApp contact option
- **Form Validation:**
  - Email verification with regex
  - Phone number formatting
  - Required field checks
  - Spam prevention (honeypot field)
- **API Route (`app/api/leads.js`):**
  - Store leads in JSON file (MVP) with timestamp, IP, source
  - Send confirmation email to user
  - Send admin notification to IS2 team
  - Optional: Webhook integration with external CRM (Notion, Airtable, or CRM API)
- **WhatsApp Integration in Form:**
  - "Need help now?" WhatsApp quick-contact button with pre-filled message
  - WhatsApp Business API integration for real-time lead routing
- **Lead Scoring System:**
  - Assign points based on industry (hotels = 10pts, resorts = 15pts, tour operators = 12pts, travel agencies = 11pts, destinations = 13pts)
  - Budget range multiplier (2x for high-budget, 3x for enterprise)
  - Engagement tracking (time spent on form, pages visited, tourism vs hospitality interests)
  - Flag hot leads for immediate follow-up
- **Post-Submit Actions:**
  - Auto-response email with onboarding timeline
  - Segment user into CRM workflow
  - Trigger automated email sequence (weekly product highlights, case studies, success metrics)

### 8. Styling & design system
- Create `styles/globals.css` with:
  - Custom Tailwind utilities (e.g., `.card-dark`, `.card-light`)
  - Gold gradient utilities for accents
  - Smooth transitions for theme switching
- Define component-level Tailwind classes for consistency across dark/light modes
- Ensure WCAG contrast ratios (gold on black/white passes AA standards)

### 9. Polish & optimization
- Add favicon & metadata in `app/layout.js` (IS2 branding)
- Optimize images: use Next.js `<Image>` component
- Set up SEO (meta descriptions, open graph tags)
- Mobile responsiveness: test all components at mobile/tablet/desktop
- Lazy load cards and sections for performance

### 10. Testing & deployment readiness
- Test theme toggle across all pages
- Verify lead form submits to API
- Test AI tab redirect to shiv.ai
- Check responsive design on mobile/tablet
- Performance audit (Lighthouse)

## Verification

- Run `npm run dev` to start the dev server
- Navigate to each page and confirm sections/cards render correctly
- Toggle dark/light theme in navbar—all colors should switch smoothly
- Submit a test lead via contact form—verify it's captured
- Click AI tab—verify redirect to shiv.ai works
- Check mobile responsiveness using browser DevTools

## Decisions

- **Tech Stack:** JavaScript + Tailwind CSS (no TypeScript for faster iteration; can add later)
- **Theme Implementation:** Tailwind's native dark mode using class strategy (requires manual navigation of dark/light mode state)
- **Card Architecture:** Reusable components for DRY code; each card type (Service, Feature, Testimonial, Case Study) is isolated
- **Lead Storage:** API route with file-based JSON for MVP (scale to database later if needed)
- **Routing:** Next.js App Router recommended (modern, cleaner); fallback to Pages Router if issues arise
- **Color Palette:** Gold (#D4AF37) as primary accent; pure black and pure white as extremes; silver (#E8E8E8/#F0F0F0) for secondary elements
- **Shiv.ai Branding:** Emphasize \"Powered by Shiv.ai\" throughout design as a key differentiator and trust signal

## Industry Context & Benefits (For Reference)

**Key Value Propositions (Hospitality & Tourism):**
- Shiv.ai-powered AI guest engagement and lead capture for both hospitality & tourism
- Multi-channel integration (Chat, WhatsApp, CRM, Analytics, Tour Management)
- Industry-specialized solutions for hospitality & tourism verticals
- Scalable architecture for single properties to large networks, destination networks, and tour operators
- Cost-effective automation for customer service backed by India/Singapore-based AI infrastructure
- Real-time lead management and scoring using Shiv.ai algorithms
- Tourism-specific features: tour package management, destination marketing, itinerary planning
- Multi-language support for global hospitality & travel audiences

**Success Metrics (To Be Updated with Client Data):**

*Hospitality Metrics:*
- Lead volume generated through website
- Response time improvements
- Booking conversion rates
- Guest satisfaction scores
- Cost per lead acquisition

*Tourism Metrics:*
- Tour package bookings generated
- Destination visibility and reach
- Traveler engagement metrics
- Tour operator lead quality
- Revenue impact from automated lead funnels

*Note: Create case study templates and success metric trackers. Fill with client data as you acquire customers.

## Project Structure

```
is2/
├── app/
│   ├── layout.js (with Shiv.ai branding)
│   ├── page.js (home - all hospitality & tourism sections)
│   ├── hospitality.js (hospitality verticals overview)
│   ├── luxury.js (luxury hospitality detail)
│   ├── corporate.js (corporate hospitality detail)
│   ├── scalable.js (scalable network detail)
│   ├── tourism.js (tourism solutions overview)
│   ├── tour-operators.js (tour operator specific features)
│   ├── tour-packages.js (featured destinations & packages)
│   ├── destination-management.js (destination marketing tools)
│   ├── travel-agencies.js (travel agency solutions)
│   ├── features.js (Shiv.ai-powered hospitality & tourism features)
│   ├── pricing.js (subscription tiers for both verticals)
│   ├── case-studies.js (hospitality case studies & impact)
│   ├── tourism-case-studies.js (tourism operator success stories)
│   ├── integrations.js (OTA platforms, PMS, payments, tour booking systems)
│   ├── blog.js (resources and industry insights)
│   ├── contact.js (main contact/lead capture form)
│   ├── faq.js (FAQ and help center)
│   └── api/
│       ├── leads.js (lead capture endpoint)
│       ├── newsletter.js (email subscription)
│       └── contact-message.js (direct contact messages)
├── components/
│   ├── Navbar.js (with theme toggle, Shiv.ai branding)
│   ├── Footer.js (with Shiv.ai attribution for both hospitality & tourism)
│   ├── ShivAiBadge.js (\"Powered by Shiv.ai\" badge component)
│   ├── ServiceCard.js (hospitality & tourism vertical showcase)
│   ├── FeatureCard.js (Shiv.ai-powered features)
│   ├── TourPackageCard.js (tour packages & itineraries)
│   ├── DestinationCard.js (destination showcase)
│   ├── TestimonialCard.js (guest/client/tour operator testimonials)
│   ├── StatCard.js (hospitality & tourism metrics)
│   ├── CaseStudyCard.js (success stories from both verticals)
│   ├── PricingCard.js (subscription tiers)
│   ├── IntegrationCard.js (OTA/PMS/Payment/Tour platforms)
│   ├── ComparisonCard.js (IS2 vs competitors for both verticals)
│   ├── BenefitCard.js (value proposition for hospitality & tourism)
│   ├── BlogCard.js (article cards for resources)
│   ├── FAQCard.js (expandable Q&A)
│   ├── LeadForm.js (multi-step contact form with tourism fields)
│   ├── NewsletterSignup.js (email subscription)
│   ├── UserTypeCard.js (target audience cards for both sectors)
│   ├── TrustBadge.js (certifications/awards/security)
│   ├── AnimatedCounter.js (statistics animation)
│   └── SectionDivider.js (visual section breaks)
├── lib/
│   ├── themeContext.js (theme provider & hooks)
│   ├── api-client.js (API call utilities)
│   ├── form-validation.js (form validation helpers)
│   └── analytics.js (event tracking)
├── styles/
│   ├── globals.css (base styles & theme variables for both verticals)
│   ├── cards.css (card component styles)
│   └── animations.css (transitions & keyframe animations)
├── public/
│   ├── favicon.ico (IS2 logo)
│   ├── logo.svg (IS2 Hospitality & Tourism logo - light & dark variants)
│   ├── shivai-logo.svg (Shiv.ai logo/badge)
│   ├── images/
│   │   ├── hero-banner.jpg
│   │   ├── hospitality-section.jpg
│   │   ├── luxury-vertical.jpg
│   │   ├── corporate-vertical.jpg
│   │   ├── scalable-vertical.jpg
│   │   ├── tourism-section.jpg
│   │   ├── tour-destinations.jpg
│   │   ├── shivai-technology.jpg
│   │   └── case-study-images/
│   └── icons/ (feature icons, integration logos, tourism attraction icons, Shiv.ai tech icons)
├── data/
│   ├── testimonials.json (hotel, travel agency, tour operator, destination testimonials)
│   ├── case-studies.json (hospitality & tourism case study templates)
│   ├── pricing-tiers.json (subscription plans for hospitality & tourism)
│   ├── integrations.json (OTA/PMS/payment/tour booking platforms)
│   ├── blog-posts.json (article metadata for both verticals)
│   ├── faqs.json (Q&A pairs for hospitality & tourism)
│   ├── tour-packages.json (featured destinations & packages)
│   └── team.json (team members for about section)
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── .env.local (environment variables for APIs)
└── .gitignore
```

## Implementation Priority (MVP Phase 1 - Hospitality & Tourism)

1. Initialize Next.js + Tailwind
2. Build Navbar + theme toggle (with Shiv.ai branding)
3. Create homepage with hero + hospitality verticals + tourism highlights
4. Build FeatureCards grid (AI Chat, WhatsApp, CRM, Tour Management)
5. Add tourism section showcase (destinations, tour operators, travel agencies)
6. Add lead capture form + API (with tourism-specific fields)
7. Deploy to Vercel or hosting platform

**Phase 2 (Post-MVP - Extended Coverage):**
- Individual hospitality detail pages (Luxury, Corporate, Scalable)
- Tourism detail pages (Tour Operators, Destination Management, Travel Agencies)
- Case studies & testimonials (both hospitality & tourism)
- Blog/resources section with industry insights
- Tour package listing and management
- Advanced CRM dashboard preview
- WhatsApp widget integration
- Analytics dashboard (hospitality & tourism metrics)
