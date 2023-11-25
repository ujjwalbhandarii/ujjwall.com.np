import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NextTopLoader from 'nextjs-toploader';

import '@/styles/main.scss';
import '@/styles/global.css';

import Cursor from '@/components/cursor';
import Header from '@/components/header/header';
import { Footer } from '@/layout';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('http://www.ujjwall.com.np'),
	title: 'Ujjwal Bhandari',
	description:
		'Ujjwal Bhandari is a passionate Full Stack Web Developer hailing from Butwal, Nepal. Specializing in Next.js, Nest.js & Node.js.',
	openGraph: {
		title: 'Ujjwal Bhandari - Full Stack Web Developer',
		description:
			'Ujjwal Bhandari is a passionate Full Stack Web Developer hailing from Butwal, Nepal. Specializing in Next.js, Nest.js & Node.js.',
	},
	twitter: {
		site: '@ujjwalbhandarii',
		creator: 'ujjwal bhandari',
		title: 'Ujjwal Bhandari - Full Stack Web Developer',
		description:
			'Ujjwal Bhandari is a passionate Full Stack Web Developer hailing from Butwal, Nepal. Specializing in Next.js, Nest.js, & Node.js.',
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
		'ujjwal',
		'bhandari',
		'ujwal',
		'ujju',
		'ujjwal from nepal',
		'ujjwal cs student',
		'developer in nepal',
	],
	themeColor: '#0a0b1f',
	viewport: {
		width: 'device-width',
		// initialScale: 1,
		// maximumScale: 6,
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
			<body className={`${inter.className} bg-backgroundColorDark`}>
				<NextTopLoader
					easing='ease'
					color='#01e0c8'
					crawl={true}
					showSpinner={true}
				/>
				<Toaster />
				<Header />
				<Cursor />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
