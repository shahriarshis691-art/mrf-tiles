import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Bundle the catalog; a native APK has no request-time Next.js server.
  env: { CATALOG_SOURCE: 'static' },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
