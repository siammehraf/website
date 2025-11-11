'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 px-6 sm:px-10 md:px-16 -mt-12">
      {/* Blurred background image overlay */}
      <div
        className="absolute inset-0 bg-[url('/your-blur-bg.jpg')] bg-cover bg-center opacity-10"
        aria-hidden="true"
      />

      {/* Hero Layout */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
        {/* Left: Text Content */}
        <div className="text-center md:text-left flex-1">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}>
            Hi, I’m Siam Mehraf —
            <br className="hidden sm:inline" />
            Author, Developer, Filmmaker.
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg sm:text-xl mb-8 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            Siam Mehraf is a Bangladeshi Author, Screenwriter, Film-Maker and Novelist. He is Known for Chotushkon &
            Nefartiti.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
              <Link href="/blog">Enter My Mind</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
              <Link href="/books">Turn My Pages</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
              <Link href="/films">Watch My Vision</Link>
            </Button>
          </motion.div>
        </div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="shrink-0 flex justify-center md:justify-end">
          <Image
            src="/hero-img.jpg"
            alt="Siam Mehraf"
            width={280}
            height={280}
            className="rounded-xl border-4 border-border shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
