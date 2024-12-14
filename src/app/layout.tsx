import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { Viewport } from 'next';

import { Toaster } from 'react-hot-toast';
import NextTopLoader from 'nextjs-toploader';

import '@/styles/main.scss';
import '@/styles/global.css';

import { Footer } from '@/layout';
import Cursor from '@/components/utils/cursor';
import Header from '@/components/section/header/header';
import AuthProvider from '@/providers/authProvider';
import { WEBSITE_KEYWORDS } from '@/data/metadata';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
	colorScheme: 'dark',
	themeColor: '#0a0b1f',
	width: 'device-width',
	initialScale: 1,
};

export const metadata: Metadata = {
	metadataBase: new URL(process.env.WEBSITE_URL || 'https://www.ujjwall.com.np'),
	title: 'Ujjwal Bhandari - Full Stack Web Developer',
	description:
		'Ujjwal Bhandari is a passionate Full Stack Web Developer hailing from Butwal, Nepal. He specializes in Next.js, Nest.js & Node.js. Your can ping ujjwal for any web development work.',
	manifest: '/manifest.json',
	robots: 'index, archive',
	openGraph: {
		type: 'website',
		url: 'https://www.ujjwall.com.np',
		images: [
			'https://res.cloudinary.com/ujjwalbhandari/image/upload/v1701354184/ujjwalbhandarii.com.np/opengraph_a6fuqi.jpg',
		],
		title: 'Ujjwal Bhandari - Full Stack Web Developer',
		description:
			'Ujjwal Bhandari is a passionate Full Stack Web Developer hailing from Butwal, Nepal. He specializes in Next.js, Nest.js & Node.js. Your can ping ujjwal for any web development work.',
	},
	twitter: {
		site: '@ujjwalbhandarii',
		creator: 'ujjwal bhandari',
		title: 'Ujjwal Bhandari - Full Stack Web Developer',
		description:
			'Ujjwal Bhandari is a passionate Full Stack Web Developer hailing from Butwal, Nepal. He specializes in Next.js, Nest.js & Node.js. Your can ping ujjwal for any web development work.',
	},
	alternates: {
		canonical: 'https://www.ujjwall.com.np',
	},
	keywords: WEBSITE_KEYWORDS,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AuthProvider>
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
				</AuthProvider>
			</body>
		</html>
	);
}
