import { getAllBooks } from '@/lib/getBooks';
import Link from 'next/link';
import Image from 'next/image';
import { Noto_Serif_Bengali, Poppins } from 'next/font/google';
import Head from 'next/head';

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

export const metadata = {
  title: 'Books | Siam Mehraf',
  description: 'Explore all books curated by Siam Mehraf with details, ratings, and purchase links.',
};

export default function BooksPage() {
  const books = getAllBooks();

  // JSON-LD structured data for all books
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Books by Siam Mehraf',
    url: 'https://siammehraf.com/books',
    numberOfItems: books.length,
    itemListElement: books.map((book, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Book',
        name: book.title,
        author: book.bookAuthor || book.author,
        url: `https://siammehraf.com/books/${book.slug}`,
        image: book.cover ? `https://siammehraf.com${book.cover}` : undefined,
        description: book.description || '',
        datePublished: book.publishYear || undefined,
        aggregateRating: book.ratingRokomari
          ? {
              '@type': 'AggregateRating',
              ratingValue: book.ratingRokomari,
              bestRating: '5',
              ratingCount: 1,
            }
          : undefined,
      },
    })),
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://siammehraf.com/books" />
        {books[0]?.cover && <meta property="og:image" content={`https://siammehraf.com${books[0].cover}`} />}
        <meta property="fb:app_id" content="1356492322781777" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        {books[0]?.cover && <meta name="twitter:image" content={`https://siammehraf.com${books[0].cover}`} />}

        {/* JSON-LD for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
        />
      </Head>

      <main className={`${notoSerifBengali.className} max-w-5xl mx-auto px-4 py-10`}>
        <h1 className="text-4xl font-bold text-center mb-10">📚 Published Books</h1>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {books.map((book) => (
            <article
              key={book.slug}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg transition text-center">
              {/* Cover */}
              {book.cover ? (
                <div className="mb-4 flex justify-center overflow-hidden rounded-xl">
                  <Image
                    src={book.cover}
                    alt={`Cover of ${book.title}`}
                    width={240}
                    height={360}
                    className="object-contain rounded-xl"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="bg-gray-200 h-60 flex items-center justify-center rounded-xl text-gray-500">
                  No Cover
                </div>
              )}

              {/* Info: Noto Serif Bengali */}
              <h2 className="text-xl font-semibold">{book.title}</h2>
              {book.subtitle && (
                <p className="text-sm mb-2" style={{ color: 'inherit' }}>
                  {book.subtitle}
                </p>
              )}
              <p className="text-sm mb-2" style={{ color: 'inherit' }}>
                লেখক - {book.bookAuthor || book.author}
              </p>
              <p className="mb-4 line-clamp-3" style={{ color: 'inherit' }}>
                {book.description}
              </p>

              {/* Ratings: Poppins */}
              <div className={`flex flex-wrap justify-center gap-2 mb-4 ${poppins.className}`}>
                {book.ratingRokomari && (
                  <span className="px-2 py-1 border rounded-sm text-sm">{`Rokomari: ${book.ratingRokomari}`}</span>
                )}
                {book.ratingGoodreads && (
                  <span className="px-2 py-1 border rounded-sm text-sm">{`Goodreads: ${book.ratingGoodreads}`}</span>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 mt-4 items-center">
                <Link
                  href={`/books/${book.slug}`}
                  className="px-4 py-2 w-48 text-center border rounded-md hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-black">
                  বইটি সম্পর্কে জানুন
                </Link>

                {(book.buyLinks?.rokomari || book.buyLinks?.goodreads) && (
                  <div className="flex flex-wrap justify-center gap-2">
                    {book.buyLinks?.rokomari && (
                      <a
                        href={book.buyLinks.rokomari}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 w-48 text-center border rounded-md hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-black">
                        রকমারিতে কিনুন
                      </a>
                    )}
                    {book.buyLinks?.goodreads && (
                      <a
                        href={book.buyLinks.goodreads}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 w-48 text-center border rounded-md hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-black">
                        গুডরিডসে দেখুন
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
