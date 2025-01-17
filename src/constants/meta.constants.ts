import { Metadata, Viewport } from 'next';

const VIEWPORT = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'dark',
  themeColor: '#0a0b1f',
  width: 'device-width',
} satisfies Viewport;

const BASEURL = process.env.WEBSITE_URL || 'https://www.ujjwall.com.np';
const OPENGRAPH_IMAGE =
  'https://res.cloudinary.com/ujjwalbhandari/image/upload/v1701354184/ujjwalbhandarii.com.np/opengraph_a6fuqi.jpg';

const HEADERS_META = {
  BLOG: {
    title: 'Ujjwal Bhandari - Blogs',
    description:
      'Ujjwal Bhandari blogs, where shares his daily learning and life improvements.',
  },
  HOME: {
    title: 'Ujjwal Bhandari - Full Stack Web Developer',
    description:
      'Ujjwal Bhandari is a passionate Full Stack Web Developer hailing from Butwal, Nepal. He specializes in Next.js, Nest.js & Node.js. Your can ping ujjwal for any web development work.',
    openGraph: {
      type: 'website',
      images: OPENGRAPH_IMAGE,
      title: 'Ujjwal Bhandari - Full Stack Web Developer',
      description:
        'Ujjwal Bhandari is a passionate Full Stack Web Developer hailing from Butwal, Nepal. He specializes in Next.js, Nest.js & Node.js. Your can ping ujjwal for any web development work.',
      url: BASEURL,
    },
  },
  CONTACT: {
    title: 'Ujjwal Bhandari - Contactme',
    description:
      'Get in touch with Ujjwal to discuss your project or any development inquiries.',
  },
} satisfies { [key: string]: Metadata };

const WEBSITE_KEYWORDS = [
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
  'nest.js expert',
  'SEO optimization',
  'next.js developer',
  'node.js freelancer',
  'tailwind CSS specialist',
  'ujjwal sisu niketan academy',
  'full-stack developer portfolio',
];

const METADATA = {
  ...HEADERS_META.HOME,
  robots: 'index, archive',
  manifest: '/manifest.json',
  keywords: WEBSITE_KEYWORDS,
  metadataBase: new URL(BASEURL),
  icons: {
    icon: '/meta/icon.png',
  },
  twitter: {
    site: '@ujjwalbhandarii',
    creator: 'ujjwal bhandari',
    title: HEADERS_META.HOME.title,
    description: HEADERS_META.HOME.description,
  },
} satisfies Metadata;

export {
  BASEURL,
  VIEWPORT,
  METADATA,
  HEADERS_META,
  OPENGRAPH_IMAGE,
  WEBSITE_KEYWORDS,
};
