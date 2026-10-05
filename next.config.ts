import type { NextConfig } from 'next';

// Custom domain (sotreus.com) → basePath must be ''.
// Only set NEXT_PUBLIC_BASE_PATH=/repo-name if previewing on <user>.github.io/<repo>.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const config: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  poweredByHeader: false,
  reactStrictMode: true,
};
export default config;
