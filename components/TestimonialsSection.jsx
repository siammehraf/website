'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Jonny Star',
    role: 'Writer & Collaborator',
    text: "Siam's storytelling is magical. His writing brings deep emotions alive — it's been a joy collaborating with him.",
    image: '/images/testimonial/jonny.jpg',
  },
  {
    name: 'Faysal Mahmud',
    role: 'Film Crew Member',
    text: 'Working with Siam on his short films was inspiring. He wears many hats — director, actor, editor — and nails them all.',
    image: '/images/testimonial/faysal.jpg',
  },
  {
    name: 'Abu Bakar Shaim',
    role: 'Web Design Client',
    text: 'Siam built our site with great UX and attention to detail. He’s not just a coder — he’s a creative problem solver.',
    image: '/images/testimonial/shaim.jpg',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">What Others Say</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow h-full">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover w-12 h-12"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-auto">“{t.text}”</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
