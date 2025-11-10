import { Poppins } from 'next/font/google';
import { Noto_Serif_Bengali } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/ui/BackToTopButton';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
        url: '/hero-img.jpg', // fallback OG image
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
  return (
    <html lang="en" suppressHydrationWarning>
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
