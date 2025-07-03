'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const writings = [
  {
    title: 'Var, Let & Const in JS',
    desc: 'Explained in Bengali with real examples.',
    image: '/hero-img.jpg',
    link: '/blog/js-var-let-const',
  },
  {
    title: 'Minimalism in Life & Code',
    desc: "Essays from an author's view on building things simply.",
    image: '/hero-img.jpg',
    link: '/blog/minimalism',
  },
];

const projects = [
  {
    title: 'VS Code Theme',
    desc: 'A beautiful dark theme inspired by forest tones.',
    image: '/hero-img.jpg',
    link: 'https://marketplace.visualstudio.com/items?itemName=siam.theme',
  },
  {
    title: 'Obsidian CSS Snippets',
    desc: 'Styled components for note-taking in Obsidian.',
    image: '/hero-img.jpg',
    link: '/projects/obsidian-css',
  },
];

const films = [
  {
    title: 'Shesh Chithi',
    desc: 'A short film exploring loss and memory.',
    image: '/hero-img.jpg',
    link: 'https://youtube.com/your-film',
  },
  {
    title: 'Scripted Reality',
    desc: 'Microfilm about digital identity, directed & acted by me.',
    image: '/hero-img.jpg',
    link: '/films/scripted-reality',
  },
];

function ShowcaseGrid({ data }) {
  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 400px)', // fixed width columns
        gap: '2rem', // consistent gap
        justifyContent: 'center', // center the grid block
      }}>
      {data.map((item, i) => (
        <article
          key={i}
          className="rounded-xl border border-border shadow-sm bg-card flex flex-col p-2"
          style={{ fontFamily: 'var(--font-poppins)', width: '400px' }} // fixed width matching column
        >
          <Link
            href={item.link}
            className="block relative aspect-video rounded-lg overflow-hidden mb-4"
            target="_blank"
            rel="noreferrer">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </Link>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground flex-grow">{item.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function WorkShowcase() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center">My Work</h2>

      <Tabs defaultValue="writing" className="space-y-6">
        <TabsList className="mx-auto flex justify-center gap-2">
          <TabsTrigger value="writing">📖 Writing</TabsTrigger>
          <TabsTrigger value="projects">💻 Projects</TabsTrigger>
          <TabsTrigger value="films">🎬 Films</TabsTrigger>
        </TabsList>

        <TabsContent value="writing">
          <ShowcaseGrid data={writings} />
        </TabsContent>
        <TabsContent value="projects">
          <ShowcaseGrid data={projects} />
        </TabsContent>
        <TabsContent value="films">
          <ShowcaseGrid data={films} />
        </TabsContent>
      </Tabs>
    </section>
  );
}
