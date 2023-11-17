import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NextTopLoader from 'nextjs-toploader';

import '@/styles/main.scss';
import '@/styles/global.css';

import Cursor from '@/components/cursor';
import Header from '@/components/header/header';
import { ThemeProvider } from '@/providers/themeProvider';
import { Footer } from '@/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('http://ujjwall.com.np'),
	title:
		'Ujjwal Bhandari - Full Stack Web Developer | Next.js | NestJs | Butwal, Nepal',
	description:
		'Ujjwal Bhandari is a passionate Full Stack Web Developer hailing from Butwal, Nepal. Specializing in Next.js, Nest.js, Node.js, and leveraging technologies like Docker, Prisma, MongoDB, and Firebase to create robust and innovative web solutions. Dive into a showcase of skills and projects that define my commitment to excellence in web development.',
	openGraph: {
		title:
			'Ujjwal Bhandari - Full Stack Web Developer | Next.js | NestJs | Butwal, Nepal',
		description:
			'Ujjwal Bhandari is a passionate Full Stack Web Developer hailing from Butwal, Nepal. Specializing in Next.js, Nest.js, Node.js, and leveraging technologies like Docker, Prisma, MongoDB, and Firebase to create robust and innovative web solutions. Dive into a showcase of skills and projects that define my commitment to excellence in web development.',
		type: 'website',
	},
	twitter: {
		site: '@ujjwalbhandarii',
		creator: 'ujjwal bhandari',
		title:
			'Ujjwal Bhandari - Full Stack Web Developer | Next.js | NestJs | Butwal, Nepal',
		description:
			'Ujjwal Bhandari is a passionate Full Stack Web Developer hailing from Butwal, Nepal. Specializing in Next.js, Nest.js, Node.js, and leveraging technologies like Docker, Prisma, MongoDB, and Firebase to create robust and innovative web solutions. Dive into a showcase of skills and projects that define my commitment to excellence in web development.',
	},

	keywords: [
		'ujjwal bhandari',
		'ujjwall',
		'ujjwalbhandarii',
		'bhandari',
		'ujjwall.com.np',
		'web developer',
		'butwal web developer',
		'butwal startup',
		'ujjwalbhandari.com.np',
		'ujjwal freelancer',
	],
	themeColor: '#0a0b1f',
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 6,
		userScalable: true,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className}  bg-backgroundColorDark dark:bg-backgroundColorDark`}
			>
				<NextTopLoader
					easing='ease'
					color='#01e0c8'
					crawl={true}
					showSpinner={true}
				/>
				<ThemeProvider>
					<Header />
					<Cursor />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
