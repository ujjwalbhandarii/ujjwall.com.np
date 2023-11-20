import lumbiniSandesh from '/public/works/lumbinisandesh.png';
import ujjwall from '/public/works/ujjwall.png';
import cpmUml from '/public/works/cpnuml.png';

export const HEROSECTION_DATA = {
	exploring: '{ Exploring the world of 0s & 1s. }',
};

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
		id: 'nepwonders-personalproject',
		imageUrl: '/works/nepwonders.png',
		alt: 'Nepwonders created by ujjwal bhandari',
		websiteName: 'Nepwonders - A complete ecosystem for tourist',
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

export const WORKS__PAGINATED = WORKS.slice(0, 3);
