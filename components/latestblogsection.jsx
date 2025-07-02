import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getAllBlogs } from '@/lib/getAllBlogs';

export default function LatestBlogs() {
  const posts = getAllBlogs().slice(0, 3);

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-foreground">📰 Latest Blogs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(({ slug, title, description, image, date, lang }) => {
          const isBengali = lang === 'bn';

          return (
            <article
              key={slug}
              lang={lang}
              className="rounded-xl border border-border shadow-sm overflow-hidden bg-card flex flex-col"
              style={{ fontFamily: 'var(--font-poppins)' }} // default Poppins for the whole card
            >
              <Link
                href={`/${slug}`}
                lang={lang}
                className="block relative aspect-video rounded-md overflow-hidden mb-4">
                <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
              </Link>

              <div className="p-6 flex flex-col flex-grow">
                <h3
                  lang={lang}
                  className="text-xl font-semibold text-foreground mb-2"
                  style={isBengali ? { fontFamily: 'var(--font-noto-bengali)' } : undefined}>
                  {title}
                </h3>

                <p
                  lang={lang}
                  className="text-muted-foreground flex-grow"
                  style={isBengali ? { fontFamily: 'var(--font-noto-bengali)' } : undefined}>
                  {description}
                </p>

                <div
                  className="mt-4 flex justify-between items-center"
                  style={{ fontFamily: 'var(--font-poppins)', color: 'inherit' }} // force Poppins font here always
                >
                  <time className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {new Date(date).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                  <Button asChild size="sm" variant="default" style={{ fontFamily: 'var(--font-poppins)' }}>
                    <Link href={`/${slug}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
