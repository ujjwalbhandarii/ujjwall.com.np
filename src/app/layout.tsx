import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NextTopLoader from 'nextjs-toploader';

import '@/styles/global.css';
import '@/styles/main.scss';

import Header from '@/components/header/header';
import { ThemeProvider } from '@/providers/themeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Ujjwal Bhandari - Full Stack Web Developer',
	description: "Hy, I'm ujjwal, a full stack web developer living in Butwal.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className} dark:bg-backgroundColorDark`}>
				<NextTopLoader
					easing='ease'
					color='#01e0c8'
					crawl={true}
					showSpinner={true}
				/>
				<ThemeProvider>
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
