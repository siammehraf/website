import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Head from 'next/head';
import { Noto_Serif_Bengali, Poppins } from 'next/font/google';

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ['bengali'],
  weight: ['400', '700'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// Find markdown file by slug
function findBookFile(dir, slug) {
  const entries = fs.readdirSync(dir);
  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      const found = findBookFile(fullPath, slug);
      if (found) return found;
    } else if (entry.endsWith('.md') && entry.replace(/\.md$/, '') === slug) {
      return fullPath;
    }
  }
  return null;
}

// Get book data
function getBookBySlug(slug) {
  const booksDir = path.join(process.cwd(), 'posts', 'books');
  const filePath = findBookFile(booksDir, slug);
  if (!filePath) return null;

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  return { ...data, content, slug };
}

// Generate metadata dynamically
export async function generateMetadata({ params }) {
  const book = getBookBySlug(params.slug);
  if (!book) return { title: 'Book Not Found | Siam Mehraf' };

  const title = `${book.title} | Siam Mehraf`;
  const description = book.description || '';
  const imageUrl = book.cover ? `https://siammehraf.com${book.cover}` : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'book',
      url: `https://siammehraf.com/books/${book.slug}`,
      images: imageUrl ? [{ url: imageUrl, width: 600, height: 900, alt: book.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default function BookPage({ params }) {
  const book = getBookBySlug(params.slug);
  if (!book) return notFound();

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    author: book.bookAuthor || book.author,
    description: book.description || '',
    url: `https://siammehraf.com/books/${book.slug}`,
    image: book.cover ? `https://siammehraf.com${book.cover}` : undefined,
    datePublished: book.publishYear || undefined,
    aggregateRating: book.ratingRokomari
      ? {
          '@type': 'AggregateRating',
          ratingValue: book.ratingRokomari,
          bestRating: '5',
          ratingCount: 1,
        }
      : undefined,
  };

  return (
    <>
      <Head>
        <title>{book.title} | Siam Mehraf</title>
        <meta name="description" content={book.description || ''} />
        <meta property="og:title" content={`${book.title} | Siam Mehraf`} />
        <meta property="og:description" content={book.description || ''} />
        <meta property="og:type" content="book" />
        <meta property="og:url" content={`https://siammehraf.com/books/${book.slug}`} />
        {book.cover && <meta property="og:image" content={`https://siammehraf.com${book.cover}`} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${book.title} | Siam Mehraf`} />
        <meta name="twitter:description" content={book.description || ''} />
        {book.cover && <meta name="twitter:image" content={`https://siammehraf.com${book.cover}`} />}

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }} />
      </Head>

      <main className={`${notoSerifBengali.className} max-w-4xl mx-auto px-4 py-10`}>
        {/* Title and author */}
        <h1 className="text-4xl font-bold text-center mb-4">{book.title}</h1>
        {book.subtitle && <p className="text-center mb-4">{book.subtitle}</p>}
        <p className="text-center mb-4">লেখক - {book.bookAuthor || book.author}</p>

        {/* Cover */}
        {book.cover && (
          <div className="mb-6 flex justify-center">
            <Image
              src={book.cover}
              alt={book.title}
              width={300}
              height={450}
              className="rounded-xl object-contain"
              unoptimized
            />
          </div>
        )}

        {/* Ratings */}
        <div className={`flex justify-center flex-wrap gap-2 mb-6 ${poppins.className}`}>
          {book.ratingRokomari && (
            <span className="px-2 py-1 border rounded-sm text-sm">Rokomari: {book.ratingRokomari}</span>
          )}
          {book.ratingGoodreads && (
            <span className="px-2 py-1 border rounded-sm text-sm">Goodreads: {book.ratingGoodreads}</span>
          )}
        </div>

        {/* Buy Buttons */}
        <div className="flex flex-col items-center gap-2 mb-6">
          {(book.buyLinks?.rokomari || book.buyLinks?.goodreads || book.buyLinks?.amazon) && (
            <div className="flex flex-wrap justify-center gap-2">
              {book.buyLinks?.rokomari && (
                <a
                  href={book.buyLinks.rokomari}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border w-48 text-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-black">
                  রকমারিতে কিনুন
                </a>
              )}
              {book.buyLinks?.goodreads && (
                <a
                  href={book.buyLinks.goodreads}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border w-48 text-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-black">
                  গুডরিডসে দেখুন
                </a>
              )}
              {book.buyLinks?.amazon && (
                <a
                  href={book.buyLinks.amazon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border w-48 text-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-black">
                  Amazon
                </a>
              )}
            </div>
          )}
        </div>

        {/* Book content */}
        <div className="mt-6 text-justify whitespace-pre-wrap">{book.content}</div>
      </main>
    </>
  );
}
