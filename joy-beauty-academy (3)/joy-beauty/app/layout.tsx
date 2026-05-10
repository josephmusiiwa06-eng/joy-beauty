import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

export const metadata: Metadata = {
  title: {
    default: 'Joy Beauty Academy & Saloon | Cape Town',
    template: '%s | Joy Beauty Academy & Saloon',
  },
  description:
    'Cape Town\'s premier beauty academy and saloon. Nails, makeup, lashes, braiding, wigs, massage, hairdressing and more — located at 195 Voortrekker Road, Maitland.',
  keywords: [
    'beauty saloon cape town',
    'nail salon maitland',
    'makeup artist cape town',
    'braiding cape town',
    'eyelash extensions cape town',
    'joy beauty academy',
    'beauty school cape town',
    'swedish massage cape town',
  ],
  authors: [{ name: 'Joy Beauty Academy & Saloon' }],
  openGraph: {
    title: 'Joy Beauty Academy & Saloon | Cape Town',
    description:
      'Premier beauty academy and saloon in Maitland, Cape Town. Nails, makeup, lashes, braiding, wigs, massage & more.',
    type: 'website',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joy Beauty Academy & Saloon | Cape Town',
    description: 'Premier beauty academy and saloon in Maitland, Cape Town.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#050205',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-void text-cream antialiased overflow-x-hidden">
        <div className="grain-overlay" aria-hidden="true" />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
