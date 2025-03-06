import { config } from '@/utils/config';
import { Metadata, Viewport } from 'next';
import { ROUTES } from './routes.constants';

const VIEWPORT = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'dark',
  themeColor: '#0a0b1f',
  width: 'device-width',
} satisfies Viewport;

const OPENGRAPH_IMAGE =
  'https://res.cloudinary.com/ujjwalbhandari/image/upload/v1701354184/ujjwalbhandarii.com.np/opengraph_a6fuqi.jpg';

const HEADERS_META = {
  BLOG: {
    title: 'Ujjwal Bhandari - Blogs',
    description:
      'Ujjwal Bhandari blogs, where shares his daily learning and life improvements.',
    alternates: {
      canonical: config.siteUrl + ROUTES.PUBLIC.BLOG,
    },
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
      url: config.siteUrl,
    },
    alternates: {
      canonical: config.siteUrl,
    },
  },
  CONTACT: {
    title: 'Ujjwal Bhandari - Contactme',
    description:
      'Get in touch with Ujjwal to discuss your project or any development inquiries.',
    alternates: {
      canonical: config.siteUrl + ROUTES.PUBLIC.CONTACT,
    },
  },

  PEOJECTS: {
    title: 'Ujjwal Bhandari - Projects🚀',
    description:
      'Ujjwal Bhandari a solo Web developer specializing in Next.js, NestJS, React, SCSS, Framer Motion, and Docker. Explore projects where seamless React interfaces meet robust NestJS servers, styled with SCSS, animated with Framer Motion, and containerized with Docker. Lets connect and turn your ideas into extraordinary online experiences!',
    alternates: {
      canonical: config.siteUrl + ROUTES.PUBLIC.PROJECTS,
    },
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
  metadataBase: new URL(config.siteUrl),
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

export { VIEWPORT, METADATA, HEADERS_META, OPENGRAPH_IMAGE, WEBSITE_KEYWORDS };
