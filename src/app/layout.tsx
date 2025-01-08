import type { Metadata } from 'next';
import type { Viewport } from 'next';
import { Inter } from 'next/font/google';

import { Toaster } from 'react-hot-toast';
import NextTopLoader from 'nextjs-toploader';

import '@/styles/main.scss';
import '@/styles/global.css';

import Cursor from '@/components/utils/cursor';
import { Footer } from '@/components/section/footer';
import Header from '@/components/section/header/header';
import { METADATA, VIEWPORT } from '@/constants/meta.constants';
import { NEXTTOPLOADER_CONFIG } from '@/constants/package-config.constants';

const inter = Inter({ subsets: ['latin'] });
export const viewport: Viewport = VIEWPORT;
export const metadata: Metadata = METADATA;

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
        <Footer />
        <Cursor />
        <Toaster />
        <NextTopLoader {...NEXTTOPLOADER_CONFIG} />
      </body>
    </html>
  );
}
