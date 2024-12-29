/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public/pwa',
  // disable: process.env.NODE_ENV === 'production' ? true : false,
});

module.exports = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
});
