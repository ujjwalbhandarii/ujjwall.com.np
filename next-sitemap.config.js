/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.WEBSITE_URL || 'https://www.ujjwall.com.np',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: [
    '/public/fonts',
    '/public/assets/works',
    '/public/assets/bestCursor.png',
    '/public/assets/dp.jpg',
    '/public/assets/hover-white.png',
    '/public/assets/navlogo.png',
    '/public/assets/online.png',
    '/assets/icon.png',
    '/dashboard',
    '/signup',
    '/dashboard/projects/create',
  ],
};
