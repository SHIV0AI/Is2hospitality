import './globals.css';
import { ThemeProvider } from '../lib/themeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'IS2 Hospitality & Tourism | Powered by Shiv.ai',
  description: 'IS2 Hospitality & Tourism Technology Division - AI-powered solutions for hotels, resorts, travel agencies, and tour operators. Powered by Shiv.ai, a global AI service provider based in India/Singapore.',
  keywords: 'hospitality, tourism, AI chatbot, hotel booking, travel agency, tour operators, Shiv.ai, IS2, CRM, WhatsApp integration',
  authors: [{ name: 'IS2 - Powered by Shiv.ai' }],
  openGraph: {
    title: 'IS2 Hospitality & Tourism | Powered by Shiv.ai',
    description: 'Revolutionizing hospitality and tourism with AI-powered solutions',
    type: 'website',
    locale: 'en_US',
    siteName: 'IS2 Hospitality & Tourism',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <ThemeProvider>
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
