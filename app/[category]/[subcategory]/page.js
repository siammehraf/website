import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Capitalize first letter
function capitalizeFirstLetter(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Generate metadata dynamically per category/subcategory
export async function generateMetadata({ params }) {
  const { category, subcategory } = params;
  const title = `${capitalizeFirstLetter(subcategory)} | Siam Mehraf`;
  const description = `Explore all posts under ${capitalizeFirstLetter(category)} / ${capitalizeFirstLetter(
    subcategory
  )}.`;
  const url = `https://siammehraf.com/${category}/${subcategory}`;

  return {
    title,
    description,
    metadataBase: new URL('https://siammehraf.com'),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'Siam Mehraf Blog',
      images: [
        { url: '/og/default.png', width: 1200, height: 630, alt: title }, // optional dynamic OG image
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og/default.png'],
    },
  };
}

// Pre-render all category/subcategory pages
export function generateStaticParams() {
  const posts = getAllPosts();
  const combos = new Set();
  posts.forEach((post) => {
    combos.add(JSON.stringify({ category: post.category, subcategory: post.subcategory }));
  });
  return Array.from(combos).map((str) => JSON.parse(str));
}

export default function SubcategoryPage({ params }) {
  const { category, subcategory } = params;
  const posts = getAllPosts().filter((post) => post.category === category && post.subcategory === subcategory);

  if (posts.length === 0) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold mb-2">Category: {capitalizeFirstLetter(category)}</h1>
        <h2 className="text-xl font-medium">Subcategory: {capitalizeFirstLetter(subcategory)}</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${post.category}/${post.subcategory}/${post.slug}`}
            className="block border border-gray-300 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition"
            lang={post.lang}>
            {post.image && (
              <div className="w-full h-48 relative mb-4 rounded-md overflow-hidden">
                <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} sizes="100vw" />
              </div>
            )}

            <h2 lang={post.lang} className="text-xl font-semibold mb-2">
              {post.title}
            </h2>
            <p lang={post.lang} className="text-sm mb-2 opacity-80">
              {post.description || 'No description provided.'}
            </p>
            <span
              className="text-xs text-blue-600 dark:text-blue-400 uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
              {post.category} / {post.subcategory}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
