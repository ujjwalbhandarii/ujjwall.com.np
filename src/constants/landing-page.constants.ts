import { ICONS } from './icons.constants';
import { ROUTES } from './routes.constants';

export const ABOUT_ME =
  "<p>Greetings! I'm <strong>Ujjwal</strong>, a passionate CS Student &amp; a full stack web developer. My journey into the dynamic world of web development began in 2020, sparked by my early experiences with WordPress. Since then, I've been immersed in the exciting realm of creating digital wonders that come to life on the internet.</p><p>Beyond my academic pursuits, I am actively engaged as a Secretary at <strong>Code for Change</strong> Butwal, a volunteer organization dedicated to empowering IT enthusiasts by facilitating learning opportunities in cutting-edge technologies.</p><p>Let's build something extraordinary together!</p>";

export const WORKS = [
  {
    id: 'airbnb-clone',
    imageUrl: '/assets/works/airbnb-clone.png',
    alt: 'Airbnb clone website created by ujjwal bhandari',
    websiteName: 'Airbnb Clone',
    liveLink: 'https://airbnb-clone-demo-fe.vercel.app/',
    stackUsed: ['Angular', 'NestJs', 'tailwind', 'prisma', 'mysql'],
    description:
      'A feature-rich replication of Airbnb, developed to experiment with and implement multiple backend services while striving for precision in recreating the user interface. Built using Angular, NestJS, Tailwind CSS, Prisma, and MySQL, this project showcases advanced full-stack development techniques. Although still in progress, the hosted version currently demonstrates the user interface.',
    isFeatured: true,
  },
  {
    id: 'lumbini-sandesh',
    imageUrl: '/assets/works/lumbinisandesh.png',
    alt: 'lumbinisandesh website created by ujjwal bhandari',
    websiteName: 'Lumbini Sandesh News Portal',
    liveLink: 'https://lumbinisandesh.com/',
    stackUsed: ['Next.js', 'scss'],
    description:
      'Lumbini Sandesh, a dynamic and engaging news portal crafted with Next.js and styled with the elegance of SCSS. Named after the birthplace of Buddha, Lumbini Sandesh is more than just a news portal; it is a digital platform committed to delivering information with integrity. Our mission is to provide a reliable source of news while embracing the latest technologies for an immersive and accessible user experience.',
    isFeatured: true,
  },
  {
    id: 'online-store',
    imageUrl: '/assets/works/woodmart-clone.png',
    alt: 'OnlineStore website created by ujjwal bhandari',
    websiteName: 'Woodmart Ecommerce Webapp',
    liveLink: 'https://woodmart-clone.vercel.app/',
    stackUsed: [
      'Next.js',
      'tailwind',
      'shadcn ui',
      'RTK query',
      'fakestore API',
    ],
    description:
      'A dynamic e-commerce platform I meticulously crafted to elevate the online shopping experience crafted with Next.js, RTK Query, Shadcn UI, and Tailwind CSS. Experience seamless navigation, sleek design, and efficient data fetching for a modern and visually captivating online shopping experience. {incomplete}',
    isFeatured: false,
  },
  {
    id: 'travlog',
    imageUrl: '/assets/works/travlog.png',
    alt: 'Travlog travelling website created by ujjwal bhandari',
    websiteName: 'Travlog Travelling Website',
    liveLink: 'https://travlog-seven.vercel.app/',
    stackUsed: ['Next.js', 'tailwind', 'shadcn ui', 'scss'],
    description:
      'A dynamic travel website designed to inspire wanderlust and simplify trip planning. Leveraging the power of Next.js 14, Shadcn UI, Tailwind CSS, and SCSS, I have created a visually stunning platform that seamlessly blends functionality with aesthetics. {incomplete}',
    isFeatured: false,
  },
  {
    id: 'anushka-blog',
    imageUrl: '/assets/works/anu.png',
    alt: 'anushka blog website created by ujjwal bhandari',
    websiteName: 'FullStack blog website',
    liveLink: 'https://anushkaa.vercel.app/',
    stackUsed: [
      'Next.js',
      'Auth.js',
      'mongoDB',
      'prisma',
      'shadcn-ui',
      'next-themes',
      'scss',
      'tailwind',
    ],
    description:
      'I had the pleasure of creating a dynamic and personalized blog website for my CA friend Anushka. The site, was built with Server-Side Rendering (SSR), not only boosting the page load but also ensures a server side security with seamless and secure user experience with Auth.js. Through the thoughtful integration of Next.js, the website achieves optimal performance and interactivity, while SCSS and shadcn-ui adds a touch of elegance to the user interface. The implementation of Auth.js guarantees a secure authentication process, enhancing user privacy.',
    isFeatured: true,
  },
  {
    id: 'cpn-uml',
    imageUrl: '/assets/works/cpnuml.png',
    alt: 'cpnuml website created by ujjwal bhandari',
    websiteName: 'CPN UML Lumbini Offical Site',
    liveLink: 'https://cpnumllumbini.org/',
    stackUsed: ['Next.js', 'scss', 'bootstrap'],
    description:
      'The official website of the CPN UML Lumbini Provience. This platform is a testament to the commitment to transparency, communication, and engagement with the people of Lumbini. Explore the UML Party website to stay connected with the heartbeat of Lumbini Province political landscape. Engage with the party, understand our vision, and be a part of the democratic process that shapes the future of the province.',
    isFeatured: false,
  },
  {
    id: 'nepwonders-personalproject',
    imageUrl: '/assets/works/nepwonders.png',
    alt: 'Nepwonders created by ujjwal bhandari',
    websiteName:
      'Nepwonders - A complete ecosystem for tourist {launching soon}',
    liveLink: 'https://nepwonders.com/',
    stackUsed: [
      'Next.js',
      'Nestjs',
      'Auth.js',
      'mongoDB',
      'prisma',
      'shadcn-ui',
      'scss',
    ],
    description:
      'Embark on a tech-infused journey through Nepal with our cutting-edge travel website, a collaborative venture between me and my friends. Harnessing the power of innovative technologies, we have curated an immersive digital experience for tourists seeking an exceptional adventure. Seamlessly navigate through our platform to uncover the technological marvels of Nepals beauty. { project on going }',
    isFeatured: true,
  },

  {
    id: 'ujjwall-protfolio',
    imageUrl: '/assets/works/ujjwall.png',
    alt: 'ujjwal bhandari protfolio website',
    liveLink: 'https://ujjwall.com.np',
    websiteName: 'My Protfolio Website',
    stackUsed: ['Next.js', 'scss', 'tailwind', 'shadcn-ui', 'framer-motion'],
    description:
      'Step into the digital showcase of my skills and creativity. My portfolio website, meticulously crafted with cutting-edge technologies, is a testament to my passion for web development and design',
    isFeatured: false,
  },

  {
    id: 'ankit-website',
    imageUrl: '/assets/works/ankit.png',
    alt: 'Ankit website created by ujjwal bhandari',
    websiteName: 'Personal portfolio for a friend',
    liveLink: 'https://ankitbhattarai.vercel.app/',
    stackUsed: ['React', 'context API'],
    description:
      'A vibrant portfolio website tailored for Ankit, a talented developer, designer, and YouTube creator. Built with React and empowered by the Context API, this dynamic platform seamlessly showcases Ankits skills. Users can effortlessly switch between dark and light modes for a personalized experience. Besides all, websited is tested with Jest and everything thing lightning fast.',
    isFeatured: false,
  },
];

export const WORKS_PAGINATED = WORKS.slice(0, 5);

export const EXPERIENCE = [
  {
    id: 'intuji-pvt-ltd',
    name: 'Intuji Pvt. Ltd.',
    year: 'Jul 2024 - now',
    description:
      'My responsibilities involved building dynamic, responsive web applications using cutting-edge technologies such as Angular, NestJS, React, and Node.js. I gained a deeper understanding of full-stack development, while collaborating closely with a talented team to deliver robust, scalable solutions. Additionally, I leveraged Storybook for component-driven development and UI consistency across projects.',
    learnings: [
      'Enhanced understanding of Angular framework, including component architecture, services, and state management.',
      'Developed RESTful APIs using NestJS and implemented secure, scalable backend systems.',
      'Improved frontend UI design and consistency using Storybook for reusable component documentation.',
      'Gained hands-on experience in full-stack development, integrating frontend and backend efficiently.',
      'Refined skills in React for building dynamic and responsive interfaces.',
      'Improved Node.js proficiency for building server-side applications.',
      'Gained practical knowledge of testing strategies for both frontend and backend applications.',
    ],
    techstackUsed: ['Angular', 'NestJS', 'React', 'Storybook', 'Node.js'],
  },
  {
    id: 'butwal-web-pvt-ltd',
    name: 'Butwal Web pvt. ltd.',
    year: 'Apr 2023 - Oct 2023',
    description:
      'During my enriching 5-6 month internship at Butwal Web Pvt Ltd, I got a chance to delved into the dynamic world of web development & gained valuable expertise in cutting-edge technologies. By using Next.js, React, and SCSS, I have crafted seamless and responsive web applications that marry functionality with aesthetics. My understanding of SEO principles improved. Me and @ashish-acharya got chance to work together and build many real world projects. Lumbini Sandesh, Communist Party UML lumbini offical website, along with dashboard are the projects that we done so far during intern time peroid. We are sharpened and blossomed by @krishna-neupane dai, who provides us with guidance and assistance.',
    learnings: [
      'Got to know ins and out of Nextjs 13 version specially app router.',
      'Improvement in code quality with the use of preetier, eslint and husky.',
      'Utilized opinionated SCSS 7 to 1 styling pattern along with BEM implementation for maintainable and scalable Sass.',
      'Knowlege about scalable and dynamic components for webapps.',
      'Improvement in API and data handling.',
      'Improved Understanding in SEO along with sitemaps, canonical links, keywords, meta tags.',
    ],
    techstackUsed: ['Next.js', 'SCSS', 'tailwind'],
  },
  {
    id: 'semicolon-tec',
    name: 'Semicolon Tec.',
    year: 'Jun 2021 - Apr 2021',
    description:
      'During my enriching 3 month internship at Semicolon Tec., I delved into the dynamic world of web development, gaining valuable expertise in cutting-edge technologies. Proficient in Next.js, React, and SCSS, I have crafted seamless and responsive web applications that marry functionality with aesthetics. My understanding of SEO principles ensures that my creations not only look good but also perform exceptionally well in the digital landscape.',

    learnings: [
      'React core and basic concepts like hooks & states.',
      'Improvement in designing with css.',
      'Improvement in javascript.',
    ],
    techstackUsed: ['React', 'CSS', 'flask'],
  },
];

export const SKILLS = [
  'HTML',
  'CSS',
  'SCSS',
  'Tailwind CSS',
  'TypeScript',
  'Javascript',
  'Storybook',
  'Vitest',
  'Next.js',
  'Node js',
  'NestJs',
  'PostgreSQL',
  'MySQL',
  'React',
  'Docker',
  'Prisma',
  'Redis',
  'TypeORM',
  'Redux',
  'Zustand',
  'GraphQL',
  'radix-ui',
  'Express',
  'Web Sockets',
  'WooCommerce',
  'C++',
  'C',
  'MongoDB',
  'Axios',
  'Chart.js',
  'SEO',
];

export const TESTIMONIALS = [
  {
    testimonial:
      'Working with Ujjwal was a game-changer! A full-stack wizard who turned our ideas into a sleek and powerful website. Timely, talented, and terrific!',
    author: 'Sarah L.',
    company: '',
  },
  {
    testimonial:
      'Ujjwal made our web project a breeze. A true full-stack maestro, delivering a seamless blend of functionality and style. Highly recommended!',
    author: 'Alex M.',
    company: '',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: ICONS.SOCIAL.github,
    title: 'Ujjwal Bhandari Github',
    url: 'https://github.com/ujjwalbhandarii',
  },
  {
    icon: ICONS.SOCIAL.instagram,
    title: 'Ujjwal Bhandari Instagram',
    url: 'https://www.instagram.com/ujjwalbhandarii/',
  },
  {
    icon: ICONS.SOCIAL.twitch,
    title: 'Ujjwal Bhandari Twitch',
    url: 'https://www.twitch.tv/ujjwalbhandari',
  },
  {
    icon: ICONS.SOCIAL.linkedin,
    title: 'Ujjwal Bhandari Linkedin',
    url: 'https://www.linkedin.com/in/ujjwalbhandarii/',
  },
  {
    icon: ICONS.SOCIAL.facebook,
    title: 'Ujjwal Bhandari Facebook',
    url: 'https://www.facebook.com/ujjwalbhandariiii',
  },
];

export const FAQ_QUESTIONS = [
  {
    id: 'open-for-work',
    question: 'Is <strong>ujjwal</strong> open for work or colloboration?',
    answer:
      "Yes, I'm open. Please fill the above form for further discussion. 🙌😀",
  },
  {
    id: 'tech-i-use',
    question: 'Technology I use',
    answer:
      'Next.js, Nodejs, NestJs, Prisma, MongoDB, SCSS, Tailwind, Shadcn-ui',
  },
  {
    id: 'current-edu-level',
    question: 'Current education level?',
    answer:
      'Bachlor in Computer Science and Information Technology. (6th sem running)',
  },
  {
    id: 'prefered-working-hours',
    question: 'Perfered working hour?',
    answer: '9am - 3pm or 5pm - 11pm',
  },
];

export const HEADER_LINKS = [
  {
    id: 'home-page',
    name: 'Home',
    href: ROUTES.HOME,
  },
  {
    id: 'contact-page',
    name: 'Contact',
    href: ROUTES.PUBLIC.CONTACT,
  },
];
