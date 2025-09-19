/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ Ignore ESLint errors during production builds (Vercel)
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
