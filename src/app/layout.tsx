import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Toaster } from 'react-hot-toast';
import NextTopLoader from 'nextjs-toploader';

import '@/styles/main.scss';
import '@/styles/global.css';

import { Footer } from '@/layout';
import Cursor from '@/components/cursor';
import Header from '@/components/header/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Ujjwal Bhandari - Full Stack Web Developer',
	description:
		'Ujjwal Bhandari is a passionate Full Stack Web Developer hailing from Butwal, Nepal. Specializing in Next.js, Nest.js & Node.js.',
	robots: 'index, archive',
	openGraph: {
		type: 'website',
		url: 'https://www.ujjwalbhandarii.com.np',
		images: [
			'https://res.cloudinary.com/ujjwalbhandari/image/upload/v1701354184/ujjwalbhandarii.com.np/opengraph_a6fuqi.jpg',
		],
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
	alternates: {
		canonical: 'https://www.ujjwalbhandarii.com.np',
	},
	keywords: [
		'ujwal',
		'ujju',
		'ujjwal',
		'ujjwall',
		'bhandari',
		'bhandari',
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
		'ujjwal in nepali ',
		'ujjwal chaurasia',
		'ujjwal sisu niketan academy',
		'ujjwal thapa',
		'ujjwal nigam',
		'ujjwal gamer',
		'ujjwal shrestha',
		'ujjwal tara school photos',
		'ujjwal bikram thapa',
		'ujjwal bhattarai',
		'ujjwal basnet',
		'ujjwal bank',
		'ujjwal bhavishya',
		'ujjwal bhai',
		'ujjwal bank share price',
		'ujjwal bhandari singer',
		'ujjwal singh bhandari',
	],
	themeColor: '#0a0b1f',
	viewport: {
		width: 'device-width',
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
			<head>
				<meta
					name='google-site-verification'
					content='2ydghVUQrcFLZ3__AjBT7Zf4eNhd0Xh9XUx2ionqVpM'
				/>
			</head>
			<body className={`${inter.className} bg-backgroundColorDark`}>
				<div className='page'>
					<Header />
					<main>{children}</main>
					<Footer />
				</div>
				<Cursor />
				<Toaster />
				<NextTopLoader
					easing='ease'
					color='#01e0c8'
					crawl={true}
					showSpinner={true}
				/>
			</body>
		</html>
	);
}
