'use client';

import Image from 'next/image';
import Link from 'next/link';
import { books } from '@/data/books';
import { Button } from '@/components/ui/button';

export default function BooksShowcase() {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-foreground">📚 My Books</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <div
            key={index}
            className="rounded-xl border border-border shadow-sm p-4 flex flex-col items-center text-center bg-card">
            {book.cover ? (
              <Image
                src={book.cover}
                alt={book.title}
                width={200}
                height={300}
                className="rounded-md shadow-md mb-4 object-cover"
              />
            ) : (
              <div className="w-[200px] h-[300px] bg-muted rounded-md mb-4 flex items-center justify-center text-muted-foreground text-sm">
                No Image
              </div>
            )}

            <h3 className="text-xl font-semibold mb-2 text-foreground">{book.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{book.description}</p>
            <Button asChild variant="default" size="sm">
              <Link href={book.link}>Read More</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
