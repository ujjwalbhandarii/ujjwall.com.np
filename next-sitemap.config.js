/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.WEBSITE_URL || 'https://www.ujjwalbhandarii.com.np',
	generateRobotsTxt: true,
	generateIndexSitemap: false,
	exclude: [
		'/public/FiraCode',
		'/public/Tomato_Grotesk',
		'/public/works',
		'/public/bestCursor.png',
		'/public/dp.jpg',
		'/public/hover-white.png',
		'/public/navlogo.png',
		'/public/online.png',
		'/icon.png',
		'/dashboard',
		'/signup',
	],
};
