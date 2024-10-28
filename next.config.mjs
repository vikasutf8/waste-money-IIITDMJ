/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEON_CONNECTION_STRING: process.env.NEON_CONNECTION_STRING,
    NEXT_PUBLIC_WEB3AUTH_CLIENT_ID : process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID,
    NEXT_PUBLIC_GEMINI_API_KEY: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
