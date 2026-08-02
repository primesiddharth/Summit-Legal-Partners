import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import ScrollToTop from '@/components/site/ScrollToTop';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://summitlegalpartners.in'),
  title: {
    default: 'Summit Legal Partners | Premium Law Firm in Hyderabad',
    template: '%s | Summit Legal Partners',
  },
  description:
    'Summit Legal Partners is a premier law firm in Banjara Hills, Hyderabad offering expert counsel in Corporate Law, Civil Litigation, Criminal Defense, Family Law, Real Estate, IP, Taxation & Arbitration.',
  keywords: [
    'law firm Hyderabad',
    'Indian law firm',
    'corporate lawyers Hyderabad',
    'civil litigation India',
    'criminal defense lawyer',
    'family law attorney',
    'real estate lawyer Hyderabad',
    'intellectual property India',
    'taxation lawyer',
    'arbitration mediation India',
  ],
  authors: [{ name: 'Summit Legal Partners' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Summit Legal Partners | Premium Law Firm in Hyderabad',
    description:
      'Premier law firm in Banjara Hills, Hyderabad. Expert counsel across corporate, litigation, criminal, family, property, IP, taxation & arbitration law.',
    siteName: 'Summit Legal Partners',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Summit Legal Partners | Premium Law Firm in Hyderabad',
    description:
      'Premier law firm in Banjara Hills, Hyderabad delivering trusted legal counsel across India.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans`}
        style={{ overflowX: 'hidden' }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
