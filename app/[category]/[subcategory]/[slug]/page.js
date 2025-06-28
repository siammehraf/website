import Image from 'next/image';
import { getPost, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default async function BlogPostPage({ params }) {
  const { category, subcategory, slug } = params;

  let post;
  try {
    post = getPost(category, subcategory, slug);
  } catch {
    return notFound();
  }

  return (
    <main lang={post.lang} className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2 text-center">{post.title}</h1>

      <p
        className="text-sm text-gray-500 mb-6 uppercase text-center"
        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
        🗂 {category} / {subcategory}
      </p>

      {post.image && (
        <div className="w-full max-w-[700px] max-h-[400px] mx-auto mb-8 rounded-[20px] overflow-hidden">
          <Image src={post.image} alt={post.title} width={1280} height={720} className="object-cover" priority={true} />
        </div>
      )}

      <MarkdownRenderer content={post.content} lang={post.lang} />
    </main>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    category: post.category,
    subcategory: post.subcategory,
    slug: post.slug,
  }));
}
