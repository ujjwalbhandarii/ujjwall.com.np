import lumbiniSandesh from '/public/works/lumbinisandesh.png';
import ujjwall from '/public/works/ujjwall.png';
import cpmUml from '/public/works/cpnuml.png';

export const HEROSECTION_DATA = {
	exploring: '{ Exploring the world of 0s & 1s. }',
};

export const ABOUT_ME =
	"<p>Greetings! I'm <strong>Ujjwal</strong>, a passionate CS Student &amp; a full stack web developer. My journey into the dynamic world of web development began in 2020, sparked by my early experiences with WordPress. Since then, I've been immersed in the exciting realm of creating digital wonders that come to life on the internet.</p><p>Beyond my academic pursuits, I am actively engaged as a Secretary at <strong>Code for Change</strong> Butwal, a volunteer organization dedicated to empowering IT enthusiasts by facilitating learning opportunities in cutting-edge technologies.</p><p>Let's build something extraordinary together!</p>";

export const WORKS = [
	{
		id: 'lumbini-sandesh',
		imageUrl: lumbiniSandesh,
		alt: 'lumbinisandesh website created by ujjwal bhandari',
		websiteName: 'Lumbini Sandesh News Portal',
		liveLink: 'https://lumbinisandesh.com/',
		stackUsed: ['Next.js', 'scss'],
		description:
			'Lumbini Sandesh, a dynamic and engaging news portal crafted with Next.js and styled with the elegance of SCSS. Named after the birthplace of Buddha, Lumbini Sandesh is more than just a news portal; it is a digital platform committed to delivering information with integrity. Our mission is to provide a reliable source of news while embracing the latest technologies for an immersive and accessible user experience.',
		isFeatured: true,
	},
	{
		id: 'cpn-uml',
		imageUrl: cpmUml,
		alt: 'cpnuml website created by ujjwal bhandari',
		websiteName: 'CPN UML Lumbini Offical Site',
		liveLink: 'https://cpnumllumbini.org/',
		stackUsed: ['Next.js', 'scss', 'bootstrap'],
		description:
			'The official website of the CPN UML Lumbini Provience. This platform is a testament to the commitment to transparency, communication, and engagement with the people of Lumbini. Explore the UML Party website to stay connected with the heartbeat of Lumbini Province political landscape. Engage with the party, understand our vision, and be a part of the democratic process that shapes the future of the province.',
		isFeatured: false,
	},
	{
		id: 'anushka-blog',
		imageUrl: '/works/anu.png',
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
		id: 'nepwonders-personalproject',
		imageUrl: '/works/nepwonders.png',
		alt: 'Nepwonders created by ujjwal bhandari',
		websiteName: 'Nepwonders - A complete ecosystem for tourist {launching soon}',
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
		imageUrl: ujjwall,
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
		imageUrl: '/works/ankit.png',
		alt: 'Ankit website created by ujjwal bhandari',
		websiteName: 'Personal portfolio for a friend',
		liveLink: 'https://ankitbhattarai.vercel.app/',
		stackUsed: ['React', 'context API'],
		description:
			'A vibrant portfolio website tailored for Ankit, a talented developer, designer, and YouTube creator. Built with React and empowered by the Context API, this dynamic platform seamlessly showcases Ankits skills. Users can effortlessly switch between dark and light modes for a personalized experience. Besides all, websited is tested with Jest and everything thing lightning fast.',
		isFeatured: false,
	},
];

export const EXPERIENCE = [
	{
		name: 'Butwal Web pvt. ltd.',
		year: 'Apr 2022 - Sep 2022',
		description:
			'During my enriching 5-6 month internship at Butwal Web Pvt Ltd, I got a chance to delved into the dynamic world of web development & gained valuable expertise in cutting-edge technologies. By using Next.js, React, and SCSS, I have crafted seamless and responsive web applications that marry functionality with aesthetics. My understanding of SEO principles improved that my creations not only look good but also perform exceptionally well in the digital landscape. Me and @ashish-acharya got chance to work together and build many real world projects. Lumbini Sandesh, Communist Party UML lumbini offical website, along with dashboard are the projects that we done so far during intern time peroid. I like to thank @krishnaneupane dai for all the support & mentoring.',
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
		name: 'Semicolon Tec.',
		year: 'Jan 2021 - Apr 2021',
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
	'Javascript',
	'Next.js',
	'Node js',
	'NestJs',
	'React',
	'Docker',
	'Prisma',
	'Sanity.io',
	'Web Sockets',
	'WooCommerce',
	'SCSS',
	'C++',
	'C',
	'python',
];

export const WORKS__PAGINATED = WORKS.slice(0, 3);
