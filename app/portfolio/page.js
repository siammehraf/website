'use client';

import Image from 'next/image';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';

export default function ProjectPortfolio() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ id, title, description, tech, image, demoUrl }) => (
          <div
            key={id}
            className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow hover:shadow-lg transition-shadow">
            <div className="relative h-48 w-full">
              <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground mb-4">{description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {tech.map((tag) => (
                  <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild size="sm" variant="outline" className="w-full">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
