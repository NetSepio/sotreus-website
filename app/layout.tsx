import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import RevealObserver from '@/components/RevealObserver';
import './globals.css';

// Fonts are committed under app/fonts (SIL OFL) and self-hosted by next/font.
// next/font/google was dropped: its class hashes depend on whatever CSS Google
// serves at build time, which differed between the server and client compiles
// and left the HTML pointing at CSS classes that did not exist.
const serif = localFont({
  src: [
    { path: './fonts/instrument-serif-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/instrument-serif-latin-400-italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-instrument-serif',
  display: 'swap',
});
const sans = localFont({
  src: './fonts/Geist-Variable.woff2',
  weight: '100 900',
  variable: '--font-geist',
  display: 'swap',
});
const mono = localFont({
  src: './fonts/GeistMono-Variable.woff2',
  weight: '100 900',
  variable: '--font-geist-mono',
  display: 'swap',
});

const title = 'Sotreus — See the signals. Remember the encounters.';
const description =
  'Situational awareness, privately yours. A local-first Android app and Edge device that shows nearby radio activity, remembers encounters, and adds sky context.';

export const metadata: Metadata = {
  metadataBase: new URL('https://sotreus.com'),
  title,
  description,
  applicationName: 'Sotreus',
  authors: [{ name: 'NetSepio LLC' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://sotreus.com/',
    siteName: 'Sotreus',
    title,
    description,
    locale: 'en_US',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Sotreus — See the signals. Remember the encounters.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@netsepio',
    creator: '@netsepio',
    title,
    description,
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#0B0E13', colorScheme: 'dark' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'NetSepio LLC',
        url: 'https://sotreus.com',
        sameAs: ['https://x.com/netsepio'],
      },
      { '@type': 'WebSite', name: 'Sotreus', url: 'https://sotreus.com' },
    ],
  };
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        {children}
        <RevealObserver />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
