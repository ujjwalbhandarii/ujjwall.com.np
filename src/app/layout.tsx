import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NextTopLoader from 'nextjs-toploader';

import '@/styles/main.scss';
import '@/styles/global.css';

import Cursor from '@/components/cursor';
import Header from '@/components/header/header';
import { ThemeProvider } from '@/providers/themeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Ujjwal Bhandari - Full Stack Web Developer',
	description:
		'A passionate Full Stack Web Developer hailing from Butwal, Nepal. Specializing in Next.js, Nest.js, Node.js, and leveraging technologies like Docker, Prisma, MongoDB, and Firebase to create robust and innovative web solutions. Dive into a showcase of skills and projects that define my commitment to excellence in web development.',
	openGraph: {
		title:
			'Ujjwal Bhandari - Full Stack Web Developer | Next.js | NestJs | Butwal, Nepal',
		description:
			'A passionate Full Stack Web Developer hailing from Butwal, Nepal. Specializing in Next.js, Nest.js, Node.js, and leveraging technologies like Docker, Prisma, MongoDB, and Firebase to create robust and innovative web solutions. Dive into a showcase of skills and projects that define my commitment to excellence in web development.',
		siteName: 'Ujjwal Bhandari - Full Stack Web developer',
		type: 'website',
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
		maximumScale: 1,
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
				</ThemeProvider>
			</body>
		</html>
	);
}
