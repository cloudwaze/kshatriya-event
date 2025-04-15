/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable ESLint during build to prevent failing on warnings
  eslint: {
    // Only run ESLint on build if this is set to true 
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  output: 'export',
  // Repository name for GitHub Pages - comment out for local testing
  // basePath: '/kshatriya-event',
};

module.exports = nextConfig; 