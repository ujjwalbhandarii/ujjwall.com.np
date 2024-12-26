import { Metadata, Viewport } from 'next';

export const WEBSITE_KEYWORDS = [
  ...[
    'ujwal',
    'ujju',
    'ujjwal',
    'ujjwall',
    'bhandari',
    'arisnoodles',
    'Ujjwal Anushka',
    'web developer',
    'butwal startup',
    'ujjwall.com.np',
    'ujjwal bhandari',
    'ujjwalbhandarii',
    'ujjwal cs student',
    'ujjwal from nepal',
    'ujjwal freelancer',
    'developer in nepal',
    'butwal web developer',
    'ujjwalbhandari.com.np',
    'ujjwal tara school',
    'ujjwal in nepali',
    'ujjwal chaurasia',
    'ujjwal nigam',
    'ujjwal gamer',
    'ujjwal bank',
    'ujjwalbhandarii.com.np',
  ],

  // Add additional relevant keywords below
  'nest.js expert',
  'SEO optimization',
  'next.js developer',
  'node.js freelancer',
  'tailwind CSS specialist',
  'ujjwal sisu niketan academy',
  'full-stack developer portfolio',
];

export const VIEWPORT: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'dark',
  themeColor: '#0a0b1f',
  width: 'device-width',
};

export const BASEURL = process.env.WEBSITE_URL || 'https://www.ujjwall.com.np';
export const OPENGRAPH_IMAGE =
  'https://res.cloudinary.com/ujjwalbhandari/image/upload/v1701354184/ujjwalbhandarii.com.np/opengraph_a6fuqi.jpg';
export const SITE_TITLE = 'Ujjwal Bhandari - Full Stack Web Developer';
export const SITE_DESCRIPTION =
  'Ujjwal Bhandari is a passionate Full Stack Web Developer hailing from Butwal, Nepal. He specializes in Next.js, Nest.js & Node.js. Your can ping ujjwal for any web development work.';

export const METADATA: Metadata = Object.freeze({
  metadataBase: new URL(BASEURL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  manifest: '/manifest.json',
  robots: 'index, archive',
  openGraph: {
    type: 'website',
    url: BASEURL,
    images: OPENGRAPH_IMAGE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    site: '@ujjwalbhandarii',
    creator: 'ujjwal bhandari',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: '/meta/icon.png',
  },
  alternates: {
    canonical: BASEURL,
  },
  keywords: WEBSITE_KEYWORDS,
});
