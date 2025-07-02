'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const writings = [
  {
    title: 'Var, Let & Const in JS',
    desc: 'Explained in Bengali with real examples.',
    image: '/blog-js.png',
    link: '/blog/js-var-let-const',
  },
  {
    title: 'Minimalism in Life & Code',
    desc: "Essays from an author's view on building things simply.",
    image: '/minimalism.png',
    link: '/blog/minimalism',
  },
];

const projects = [
  {
    title: 'VS Code Theme',
    desc: 'A beautiful dark theme inspired by forest tones.',
    image: '/vscode-theme.png',
    link: 'https://marketplace.visualstudio.com/items?itemName=siam.theme',
  },
  {
    title: 'Obsidian CSS Snippets',
    desc: 'Styled components for note-taking in Obsidian.',
    image: '/obsidian-snippet.png',
    link: '/projects/obsidian-css',
  },
];

const films = [
  {
    title: 'Shesh Chithi',
    desc: 'A short film exploring loss and memory.',
    image: '/shesh-chithi.png',
    link: 'https://youtube.com/your-film',
  },
  {
    title: 'Scripted Reality',
    desc: 'Microfilm about digital identity, directed & acted by me.',
    image: '/films/scripted-reality.png',
    link: '/films/scripted-reality',
  },
];

function ShowcaseGrid({ data }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {data.map((item, i) => (
        <a key={i} href={item.link} target="_blank" rel="noreferrer">
          <Card className="hover:shadow-md transition-shadow">
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={340}
              className="rounded-t-md object-cover w-full h-48"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
}

export default function WorkShowCase() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
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
