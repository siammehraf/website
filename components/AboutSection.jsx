'use client';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const roles = [
  {
    emoji: '📚',
    title: 'Author & Storyteller',
    description: 'Writing fiction, blogs, and essays in both Bengali and English. Exploring ideas through words.',
  },
  {
    emoji: '💻',
    title: 'Web Developer',
    description:
      'Built 10+ websites using HTML, CSS, JavaScript, React, and Next.js. Created themes, tools & code snippets.',
  },
  {
    emoji: '🎬',
    title: 'Filmmaker & Editor',
    description: 'Directed, scripted, and edited multiple short films. Also act, produce and create YouTube content.',
  },
];

export default function AboutSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">What I Do</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {roles.map((role, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="text-4xl mb-4">{role.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
              <p className="text-muted-foreground text-sm">{role.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
