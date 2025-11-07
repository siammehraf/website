import { getAllBlogs } from '@/lib/getAllBlogs';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Blog | Siam Mehraf',
  description: 'Siam Mehraf Blog',
};

export default function BlogPage() {
  const posts = getAllBlogs();

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">📚 My Blog</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${post.urlSlug}`}
            className="block border border-gray-200 rounded-lg p-4 hover:shadow-lg transition"
            lang={post.lang}>
            {post.image && (
              <div className="w-full h-48 relative mb-4 rounded-md overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="100vw"
                  priority={false}
                />
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
              {post.category}
              {post.subcategory !== 'general' ? ` / ${post.subcategory}` : ''}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
