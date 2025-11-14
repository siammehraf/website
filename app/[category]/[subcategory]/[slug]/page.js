import Image from 'next/image';
import { getPost, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import MarkdownClientWrapper from '@/components/MarkdownClientWrapper';
import Tags from '@/components/Tags';
import SocialShare from '@/components/SocialShare';
import Head from 'next/head';
import FontSizeControls from '@/components/ui/FontSizeControl';

export async function generateMetadata({ params }) {
  const { category, subcategory, slug } = params;

  try {
    const post = await getPost(category, subcategory, slug);

    return {
      title: `${post.title} | Siam Mehraf`,
      description: post.description || post.excerpt || post.title,
      openGraph: {
        title: `${post.title} | Siam Mehraf`,
        description: post.description || post.excerpt || post.title,
        images: post.image ? [post.image] : [],
        type: 'article',
        fbAppId: '1356492322781777',
        siteName: 'Siam Mehraf',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${post.title} | Siam Mehraf`,
        description: post.description || post.excerpt || post.title,
        images: post.image ? [post.image] : [],
      },
    };
  } catch {
    return {
      title: 'Post Not Found | Siam Mehraf',
    };
  }
}

export default async function BlogPostPage({ params }) {
  const { category, subcategory, slug } = params;

  let post;
  try {
    post = await getPost(category, subcategory, slug);
  } catch {
    return notFound();
  }

  // JSON-LD Schema for this post
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://siammehraf.com/${category}/${subcategory}/${slug}`,
    },
    headline: post.title,
    description: post.description || post.excerpt || post.title,
    image: post.image || undefined,
    author: {
      '@type': 'Person',
      name: post.author || 'Siam Mehraf',
      url: 'https://siammehraf.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Siam Mehraf',
      logo: {
        '@type': 'ImageObject',
        url: 'https://siammehraf.com/hero-img.jpg',
      },
    },
    datePublished: post.date,
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
  };

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

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
            <Image
              src={post.image}
              alt={post.title}
              width={1280}
              height={720}
              className="object-cover"
              priority={true}
            />
          </div>
        )}
        <FontSizeControls />
        <div id="post-content">
          <MarkdownClientWrapper content={post.content} lang={post.lang} />
        </div>

        <Tags tags={post.tags} />

        <SocialShare title={post.title} url={`https://siammehraf.com/${category}/${subcategory}/${slug}`} />
      </main>
    </>
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
