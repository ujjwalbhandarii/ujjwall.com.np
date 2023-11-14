import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/global.css';
import '@/styles/main.scss';

import Header from '@/components/header/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Ujjwal Bhandari - Full Stack Web developer.',
	description: "Hy, I'm ujjwal, a full stack web developer living in Butwal.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
