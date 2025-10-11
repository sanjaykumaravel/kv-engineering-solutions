/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  // eslint: {
  //   ignoreDuringBuilds: true, // Temporarily skips ESLint on Vercel; lint locally with 'npm run lint'
  // },
};

module.exports = nextConfig;
