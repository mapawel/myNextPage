/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en',
  },
  experimental: {
    // scrollRestoration: true,
    outputStandalone: true,
  },
  images: {
    domains: ['media.graphassets.com'],
  },
};

module.exports = nextConfig;
