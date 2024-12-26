import type { Metadata } from 'next';
import type { Viewport } from 'next';
import { Inter } from 'next/font/google';

import { Toaster } from 'react-hot-toast';
import NextTopLoader from 'nextjs-toploader';

import '@/styles/main.scss';
import '@/styles/global.css';

import { Footer } from '@/components/section';
import Cursor from '@/components/utils/cursor';
import Header from '@/components/section/header/header';
import AuthProvider from '@/components/lib/AuthProvider';
import { METADATA, VIEWPORT } from '@/constants/meta.constants';

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
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Footer />
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
