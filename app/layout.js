import { Poppins } from 'next/font/google';
import { Noto_Serif_Bengali } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';

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

export const metadata = {
  title: 'Siam Mehraf - Author | Storyteller',
  description:
    'Siam Mehraf (1998-Present) is a Bangladeshi Author, Screenwriter, Film-Maker and Novelist. He is Known for Chotushkon and Nefartiti.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${notoSerifBengali.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
