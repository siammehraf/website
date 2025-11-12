import { getAllFilms } from '@/lib/getAllFilms';
import Link from 'next/link';
import Image from 'next/image';

// SEO Metadata
export const metadata = {
  title: 'Films | Siam Mehraf',
  description: 'Explore all short films and creative video projects crafted by filmmaker Siam Mehraf.',
  keywords: [
    'Siam Mehraf films',
    'short films',
    'Bangladesh filmmaker',
    'indie films',
    'creative videos',
    'film portfolio',
  ],
  openGraph: {
    title: 'Films | Siam Mehraf',
    description: 'Browse all films created by filmmaker Siam Mehraf.',
    url: 'https://siammehraf.com/films',
    siteName: 'Siam Mehraf',
    fbAppId: '1356492322781777',
    images: [
      {
        url: 'https://siammehraf.com/og/films-page.png',
        width: 1200,
        height: 630,
        alt: 'Films by Siam Mehraf',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Films | Siam Mehraf',
    description: 'Explore all short films and creative video projects crafted by Siam Mehraf.',
    images: ['https://siammehraf.com/og/films-page.png'],
  },
};

export default function FilmsPage() {
  const films = getAllFilms();

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">🎬 My Films</h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {films.map((film) => (
          <div
            key={film.slug}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition">
            {film.poster && (
              <div className="w-full h-48 relative mb-4 rounded-md overflow-hidden">
                <Image src={film.poster} alt={film.title} fill style={{ objectFit: 'cover' }} sizes="100vw" />
              </div>
            )}

            <h2 className="text-xl font-semibold mb-2">{film.title}</h2>

            <p className="text-sm mb-4">{film.description || 'No description available.'}</p>

            <div className="flex flex-col gap-2 mt-4">
              <Link
                href={`/films/${film.slug}`}
                className="
                  px-4 py-2 border rounded-md text-center
                  hover:bg-gray-100
                  dark:hover:bg-gray-200
                  dark:hover:text-black
                ">
                About the Film
              </Link>

              <a
                href={film.imdb}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-4 py-2 border rounded-md text-center
                  hover:bg-gray-100
                  dark:hover:bg-gray-200
                  dark:hover:text-black
                ">
                IMDb
              </a>

              <a
                href={film.watch}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-4 py-2 border rounded-md text-center
                  hover:bg-gray-100
                  dark:hover:bg-gray-200
                  dark:hover:text-black
                ">
                Watch the Film
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
