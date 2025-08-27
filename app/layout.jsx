import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactUs';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'UEK-Next.js App',
  description:
    'Profesjonalne projektowanie stron internetowych, optymalizacja SEO i content marketing. Budujemy marki online i zwiększamy zasięg. Sprawdź nasze usługi!',
  keywords: [
    'web design',
    'SEO',
    'projektowanie stron internetowych',
    'content marketing',
    'strony www',
    'optymalizacja SEO',
    'agencja marketingowa',
    'responsive design',
  ],
  authors: [{ name: 'TomDom' }],
  metadataBase: new URL('https://uek-next-js.vercel.app/'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl_PL">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}
