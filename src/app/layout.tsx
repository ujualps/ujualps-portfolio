import type { Metadata } from 'next';
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider';
import { Cursor } from '@/components/cursor';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.talesofuj.com'),
  title: {
    default: 'Tales of UJ',
    template: '%s | Tales of UJ',
  },
  description:
    'Theyyam & portrait photography by Ujual P S — storytelling through the lens.',
  authors: [{ name: 'Ujual P S', url: 'https://www.talesofuj.com' }],
  creator: 'Ujual P S',
  verification: {
    google: '_HEE9JT44IOtnMICpSLqM2_1D6Yau122JOq_0bHWf4U',
  },
  openGraph: {
    siteName: 'Tales of UJ',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <Cursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
