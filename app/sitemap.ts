import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://sotreus.com/' },
    { url: 'https://sotreus.com/privacy/' },
    { url: 'https://sotreus.com/terms/' },
  ];
}
