import type { Metadata } from 'next';

export function legalMetadata(path: string, title: string, description: string): Metadata {
  const url = `https://sotreus.com${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url,
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
  };
}

export const LEGAL_UPDATED = 'October 6, 2026';
export const SUPPORT_EMAIL = 'support@netsepio.com';
export const POSTAL_ADDRESS =
  'NetSepio LLC, Georgia, Tbilisi, Krtsanisi District, Nino and Ilia Nakashidzeebi Str., N1, (formerly Avlev), Bl. N3, Apt. N3.';
