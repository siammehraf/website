import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import { notFound } from 'next/navigation';
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

// Recursively find the markdown file by slug
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

function getBookBySlug(slug) {
  const booksDir = path.join(process.cwd(), 'posts', 'books');
  const filePath = findBookFile(booksDir, slug);
  if (!filePath) return null;

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return { ...data, content, slug };
}

// Generate static params for all books
export async function generateStaticParams() {
  const booksDir = path.join(process.cwd(), 'posts', 'books');
  const slugs = [];

  function readDirRecursive(dir) {
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
      const fullPath = path.join(dir, entry);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        readDirRecursive(fullPath);
      } else if (entry.endsWith('.md')) {
        slugs.push(entry.replace(/\.md$/, ''));
      }
    }
  }

  readDirRecursive(booksDir);
  return slugs.map((slug) => ({ slug }));
}

// SEO metadata
export async function generateMetadata({ params }) {
  const book = getBookBySlug(params.slug);
  if (!book) return { title: 'Book Not Found | Siam Mehraf' };

  return {
    title: `${book.title} | Siam Mehraf`,
    description: book.description || '',
    keywords: [
      book.title,
      book.bookAuthor || book.author,
      'Siam Mehraf',
      ...(book.genre || []),
      ...(book.tags || []),
      'Bangladesh books',
      'Bengali books',
    ],
    openGraph: {
      title: `${book.title} | Siam Mehraf`,
      description: book.description || '',
      type: 'book',
      url: `https://siammehraf.com/books/${book.slug}`,
      images: book.cover
        ? [{ url: `https://siammehraf.com${book.cover}`, width: 600, height: 900, alt: book.title }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${book.title} | Siam Mehraf`,
      description: book.description || '',
      images: book.cover ? [`https://siammehraf.com${book.cover}`] : [],
    },
  };
}

export default function BookPage({ params }) {
  const book = getBookBySlug(params.slug);

  if (!book) return notFound();

  return (
    <main className={`${notoSerifBengali.className} max-w-4xl mx-auto px-4 py-10`}>
      <h1 className="text-4xl font-bold text-center mb-4">{book.title}</h1>
      {book.subtitle && <p className="text-center text-gray-600 mb-4">{book.subtitle}</p>}
      <p className="text-center text-gray-600 mb-4">লেখক - {book.bookAuthor || book.author}</p>

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

      {/* Buy Links */}
      <div className="flex flex-col gap-3 items-center mb-6">
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
        {book.buyLinks?.amazon && book.buyLinks.amazon.length > 0 && (
          <a
            href={book.buyLinks.amazon}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border w-48 text-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-200 dark:hover:text-black">
            Amazon
          </a>
        )}
      </div>

      {/* Content */}
      <div className="mt-6 text-gray-800 text-justify whitespace-pre-wrap">{book.content}</div>
    </main>
  );
}
