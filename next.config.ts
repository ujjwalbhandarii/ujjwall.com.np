import withPWA from 'next-pwa';
import type { NextConfig } from 'next';
import type { PWAConfig } from 'next-pwa';

const config = {
  reactStrictMode: true,
} satisfies NextConfig;

const pwaConfig = {
  dest: 'public/pwa',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
} satisfies PWAConfig;

const nextConfig = withPWA({
  ...pwaConfig,
})(config);

export default nextConfig;
