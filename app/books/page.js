import { getAllBooks } from '@/lib/getBooks';
import Link from 'next/link';
import Image from 'next/image';
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

export const metadata = {
  title: 'Books | Siam Mehraf',
  description: 'Explore all books curated by Siam Mehraf with details, ratings, and purchase links.',
};

export default function BooksPage() {
  const books = getAllBooks();

  return (
    <main className={`${notoSerifBengali.className} max-w-5xl mx-auto px-4 py-10`}>
      <h1 className="text-4xl font-bold text-center mb-10">📚 My Books</h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {books.map((book) => (
          <div
            key={book.slug}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg transition text-center">
            {/* Cover */}
            {book.cover ? (
              <div className="mb-4 flex justify-center overflow-hidden rounded-xl">
                <Image
                  src={book.cover}
                  alt={book.title}
                  width={240}
                  height={360}
                  className="object-contain rounded-xl"
                  unoptimized
                />
              </div>
            ) : (
              <div className="bg-gray-200 h-60 flex items-center justify-center rounded-xl text-gray-500">No Cover</div>
            )}

            {/* Info */}
            <h2 className="text-xl font-semibold">{book.title}</h2>
            {book.subtitle && <p className="text-sm text-gray-600 mb-2">{book.subtitle}</p>}
            <p className="text-sm text-gray-600 mb-2">লেখক - {book.bookAuthor || book.author}</p>
            <p className="text-gray-700 mb-4 line-clamp-3">{book.description}</p>

            {/* Ratings */}
            <div className={`flex flex-wrap justify-center gap-2 mb-4 ${poppins.className}`}>
              {book.ratingRokomari && (
                <span className="px-2 py-1 border rounded-sm text-sm">{`Rokomari: ${book.ratingRokomari}`}</span>
              )}
              {book.ratingGoodreads && (
                <span className="px-2 py-1 border rounded-sm text-sm">{`Goodreads: ${book.ratingGoodreads}`}</span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2 mt-4 items-center">
              <Link
                href={`/books/${book.slug}`}
                className="px-4 py-2 w-48 text-center border rounded-md hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-black">
                বইটি সম্পর্কে জানুন
              </Link>

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
          </div>
        ))}
      </div>
    </main>
  );
}
