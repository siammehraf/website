'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const books = [
  {
    title: 'Nefartiti',
    imageUrl: '/images/books/nefartiti.jpg',
    link: '#',
  },
  {
    title: 'Onno Boshonter Shopno',
    imageUrl: '/images/books/onno-boshonter-shopno.jpg',
    link: '#',
  },
  {
    title: 'Chotushkon',
    imageUrl: '/images/books/chotushkon.jpg',
    link: '#',
  },
];

export function SkillShowCase() {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 mt-4 w-full" style={{ lineHeight: 1.2 }}>
        Author&apos;s Journey
      </h1>
      <h6 className="text-base md:text-lg font-semibold text-center mb-4 mt-2 w-full" style={{ lineHeight: 1.2 }}>
        I have always been deeply attracted to stories and novels. As I continued writing, by late 2017, I realized that
        my main interest lies in the thriller genre. Because of this...
      </h6>

      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-xs"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent>
          {books.map((book, index) => (
            <CarouselItem key={index}>
              <div className="p-2">
                <Card className="overflow-hidden shadow-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <CardContent className="flex flex-col items-center justify-between p- gap-4">
                    <Image
                      src={book.imageUrl}
                      alt={book.title}
                      width={200}
                      height={300}
                      className="w-full object-cover rounded-md"
                      priority={index === 0}
                    />
                    <h3 className="text-center font-semibold text-zinc-800 dark:text-zinc-100">{book.title}</h3>
                    <Button asChild>
                      <a href={book.link} target="_blank" rel="noopener noreferrer">
                        View Book
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
