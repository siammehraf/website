import { NextResponse } from 'next/server';

/**
 * CUSTOMIZE YOUR LINKS HERE
 */
const LINKS = {
  facebook: 'https://facebook.com/siammehraf',
  youtube: 'https://youtube.com/@siammehraf',
  github: 'https://github.com/siammehraf',
  twitter: 'https://twitter.com/siammehraf',
  x: 'https://x.com/siammehraf',
  'book-collections':
    'https://siammehraf.notion.site/80ef552419e34f9ba2fde32dd8a05d4d?v=a662ba7ca0504887af4c724d62495451&pvs=74',
};

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // ✅ ALLOW ads.txt (VERY IMPORTANT)
  if (pathname === '/ads.txt') {
    return NextResponse.next();
  }

  const slug = pathname.replace('/', '');

  // If no match, do nothing
  if (!LINKS[slug]) return NextResponse.next();

  // Fast + SEO-friendly redirect
  return NextResponse.redirect(LINKS[slug], 308);
}
