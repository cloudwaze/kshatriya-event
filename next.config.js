/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable ESLint during build to prevent failing on warnings
  eslint: {
    // Only run ESLint on build if this is set to true 
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,  // Required for static export
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
  },
  output: 'export',
  // Repository name for GitHub Pages
  basePath: '/kshatriya-event',
};

module.exports = nextConfig; 