import { Poppins } from 'next/font/google';
import { Noto_Serif_Bengali } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/ui/BackToTopButton';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ['bengali'],
  weight: ['400', '700'],
  variable: '--font-noto-bengali',
  display: 'swap',
});

// Default metadata for the whole site
export const metadata = {
  title: 'Siam Mehraf - Author & Filmmaker',
  description:
    'Siam Mehraf (1998-Present) is a Bangladeshi Author, Screenwriter, Film-Maker and Novelist. Known for works like Chotushkon and Nefartiti.',
  metadataBase: new URL('https://siammehraf.com'),
  alternates: { canonical: 'https://siammehraf.com' },
  openGraph: {
    title: 'Siam Mehraf - Author | Filmmaker',
    description: 'Explore the works of Siam Mehraf – Author, Filmmaker, Screenwriter, and Novelist.',
    url: 'https://siammehraf.com',
    type: 'website',
    siteName: 'Siam Mehraf',
    images: [
      {
        url: '/hero-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Siam Mehraf Website',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siam Mehraf - Author | Storyteller',
    description: 'Explore the works of Siam Mehraf – Author, Filmmaker, Screenwriter, and Novelist.',
    images: ['/hero-img.jpg'],
  },
};

export default function RootLayout({ children }) {
  // ✅ Global JSON-LD Schema (Bengali + English Keywords)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Siam Mehraf',
    alternateName: [
      'সিয়াম মেহরাফ',
      'সিয়াম মেহরাফ ওয়েবসাইট',
      'সিয়াম মেহরাফ ব্লগ',
      'সিয়াম মেহরাফ গল্পসমূহ',
      'সিয়াম মেহরাফ থ্রিলার',
      'সিয়াম মেহরাফ বই',
      'Siam Mehraf',
      'Siam Mehraf Website',
      'Siam Mehraf Blog',
      'Siam Mehraf Writings',
      'Siam Mehraf Thriller',
      'Siam Mehraf Books',
    ],
    url: 'https://siammehraf.com',
    image: 'https://siammehraf.com/hero-img.jpg',
    jobTitle: 'Author, Filmmaker, Screenwriter, Novelist',
    description:
      'Siam Mehraf is a Bangladeshi author, screenwriter, filmmaker and novelist known for thriller stories and creative works.',
    sameAs: [
      'https://www.facebook.com/siammehraf',
      'https://www.instagram.com/siammehraf',
      'https://www.youtube.com/siammehraf',
      'https://www.goodreads.com/siammehraf',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Inject Global Schema */}
        <Script
          id="json-ld-global"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className={`${poppins.variable} ${notoSerifBengali.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
        <Footer />
        <BackToTopButton />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
