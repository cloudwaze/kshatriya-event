/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standard Next.js configuration for server-side rendering
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig; 