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
	},
];

export const WORKS__PAGINATED = WORKS.slice(0, 3);
