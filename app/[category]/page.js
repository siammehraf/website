import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Head from 'next/head';

// Dynamic Metadata
export function generateMetadata({ params }) {
  const category = params.category;
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  const title = `${categoryName} | Siam Mehraf`;
  const description = `Explore all blog posts under the ${categoryName} category by Siam Mehraf.`;

  const url = `https://siammehraf.com/${category}`;
  const ogImage = 'https://siammehraf.com/og-default.jpg';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

// For static generation
export async function generateStaticParams() {
  const posts = getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return categories.map((category) => ({ category }));
}

// Capitalize helper
function capitalizeFirstLetter(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function CategoryPage({ params }) {
  const { category } = params;
  const posts = getAllPosts().filter((post) => post.category === category);

  if (posts.length === 0) return notFound();

  // JSON-LD for SEO - per post structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Category: ${capitalizeFirstLetter(category)}`,
    url: `https://siammehraf.com/${category}`,
    description: `All blog posts under the ${capitalizeFirstLetter(category)} category by Siam Mehraf.`,
    keywords: [
      'সিয়াম মেহরাফ',
      'সিয়াম মেহরাফ ওয়েবসাইট',
      'সিয়াম মেহরাফ ব্লগ',
      'সিয়াম মেহরাফ গল্পসমূহ',
      'সিয়াম মেহরাফ থ্রিলার',
      'সিয়াম মেহরাফ বই',
      'Siam Mehraf',
      'Siam Mehraf Website',
      'Siam Mehraf Blog',
      'Siam Mehraf Writings',
      'Siam Mehraf Thriller',
      'Siam Mehraf Books',
    ],
    hasPart: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://siammehraf.com/${post.category}/${post.subcategory}/${post.slug}`,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author || 'Siam Mehraf',
      },
      image: post.image || undefined,
      description: post.description || undefined,
    })),
  };

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Category: {capitalizeFirstLetter(category)}</h1>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.category}/${post.subcategory}/${post.slug}`}
              className="block border border-gray-200 rounded-lg p-4 hover:shadow-lg transition"
              lang={post.lang}>
              {post.image && (
                <div className="w-full h-48 relative mb-4 rounded-md overflow-hidden">
                  <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} sizes="100vw" />
                </div>
              )}

              <h2 lang={post.lang} className="text-xl font-semibold mb-2">
                {post.title}
              </h2>

              <p lang={post.lang} className="text-sm mb-2">
                {post.description || 'No description provided.'}
              </p>

              <span
                className="text-xs text-blue-500 uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                {post.category} / {post.subcategory}
              </span>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
