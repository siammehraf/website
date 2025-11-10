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

// Load markdown file by slug
function getBookBySlug(slug) {
  const booksDir = path.join(process.cwd(), 'posts/books');
  const filePath = path.join(booksDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return { ...data, content, slug };
}

// Generate static params for SSG
export async function generateStaticParams() {
  const booksDir = path.join(process.cwd(), 'posts/books');
  if (!fs.existsSync(booksDir)) return [];

  const files = fs.readdirSync(booksDir).filter((f) => f.endsWith('.md'));

  return files.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}

export async function generateMetadata({ params }) {
  const book = getBookBySlug(params.slug);
  if (!book) return { title: 'Book Not Found | Siam Mehraf' };

  return {
    title: `${book.title} | Siam Mehraf`,
    description: book.description || '',
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
      <div className="flex flex-col gap-3 items-center">
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
      <div className="mt-6 text-gray-800">
        <pre className="whitespace-pre-wrap">{book.content}</pre>
      </div>
    </main>
  );
}
