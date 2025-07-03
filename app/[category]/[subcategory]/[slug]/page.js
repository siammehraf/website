import Image from 'next/image';
import { getPost, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import MarkdownClientWrapper from '@/components/MarkdownClientWrapper'; // ✅ not MarkdownRenderer
import Tags from '@/components/Tags';

export default async function BlogPostPage({ params }) {
  const { category, subcategory, slug } = params;

  let post;
  try {
    post = await getPost(category, subcategory, slug);
  } catch {
    return notFound();
  }

  return (
    <main lang={post.lang} className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-center">{post.title}</h1>

      <p className="text-sm text-gray-500 mb-6 uppercase text-center flex justify-center items-center gap-2">
        <span style={{ fontFamily: 'var(--font-poppins)' }}>
          🗂 {category} / {subcategory}
        </span>
        <span className="mx-2">•</span>
        <time style={{ fontFamily: 'var(--font-poppins)' }}>
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </time>
      </p>

      {post.image && (
        <div className="w-full max-w-[700px] max-h-[400px] mx-auto mb-8 rounded-[20px] overflow-hidden">
          <Image src={post.image} alt={post.title} width={1280} height={720} className="object-cover" priority={true} />
        </div>
      )}

      {/* Render markdown content */}
      <MarkdownClientWrapper content={post.content} lang={post.lang} />

      {/* Render tags */}
      <Tags tags={post.tags} />
    </main>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    category: post.category,
    subcategory: post.subcategory,
    slug: post.slug,
  }));
}
