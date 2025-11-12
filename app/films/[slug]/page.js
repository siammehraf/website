import { getFilm, getAllFilms } from '@/lib/getAllFilms';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Generate static params for dynamic routes
export async function generateStaticParams() {
  const films = getAllFilms();
  return films.map((film) => ({ slug: film.slug }));
}

// SEO Metadata generation
export async function generateMetadata({ params }) {
  const film = getFilm(params.slug);
  if (!film) return {};

  const title = `${film.title} | Films by Siam Mehraf`;
  const description = film.longDescription?.slice(0, 150) + '...';

  return {
    title,
    description,
    keywords: [film.title, 'indie film', 'short film', 'Siam Mehraf', 'Bangladeshi filmmaker', 'creative films'],
    openGraph: {
      title,
      description,
      url: `https://siammehraf.com/films/${film.slug}`,
      siteName: 'Siam Mehraf',
      images: [
        {
          url: film.poster,
          width: 1200,
          height: 630,
          alt: film.title,
        },
      ],
      type: 'video.other',
      fbAppId: '1356492322781777',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [film.poster],
    },
  };
}

export default function FilmPage({ params }) {
  const film = getFilm(params.slug);

  if (!film) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">{film.title}</h1>

      {film.poster && (
        <div className="w-full max-h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image src={film.poster} alt={film.title} width={1200} height={700} style={{ objectFit: 'cover' }} />
        </div>
      )}

      <p className="mb-6 text-lg">{film.longDescription}</p>

      <div className="flex flex-col gap-3 mt-8">
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
    </main>
  );
}
