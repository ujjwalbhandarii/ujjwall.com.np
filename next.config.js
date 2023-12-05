/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
	dest: 'public',
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
	disable: process.env.NODE_ENV === 'development' ? true : false,
});
