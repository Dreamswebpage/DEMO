/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export for Netlify (if not using server-side rendering)
  output: 'export',
  // Add rewrites for Netlify functions if needed (e.g., for API routes)
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: '/.netlify/functions/:path*',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;