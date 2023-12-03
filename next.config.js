/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
	dest: 'public/manifest',
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
