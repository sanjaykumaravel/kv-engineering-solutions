/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Note: Next manages SWC minification and the App Router availability in
  // recent versions. Removing explicit `swcMinify` and `experimental.appDir`
  // avoids warnings reported by newer Next releases.
  // If you need special experimental flags, add them here after checking
  // the Next.js docs for your version.
};

export default nextConfig;
