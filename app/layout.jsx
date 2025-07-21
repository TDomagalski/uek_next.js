import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title:
    'Agencja Web Design & SEO | Projektowanie Stron WWW | Content Marketing',
  description:
    'Profesjonalne projektowanie stron internetowych, optymalizacja SEO i content marketing. Budujemy marki online i zwiększamy zasięg. Sprawdź nasze usługi!',
  keywords:
    'web design, SEO, projektowanie stron internetowych, content marketing, strony www, optymalizacja SEO, agencja marketingowa, responsive design',
  authors: [{ name: 'Agencja Web Design' }],

  openGraph: {
    title: 'Agencja Web Design & SEO - Buduj markę online',
    description:
      'Profesjonalne projektowanie stron internetowych, optymalizacja SEO i content marketing. Budujemy marki online i zwiększamy zasięg. Sprawdź nasze usługi!',
    type: 'website',
    locale: 'pl_PL',
    siteName: 'Agencja Web Design',
    images: [
      {
        url: '/top-bg.jpg',
        width: 1500,
        height: 990,
        alt: 'Agencja Web Design - projektowanie stron internetowych i SEO',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl_PL">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
