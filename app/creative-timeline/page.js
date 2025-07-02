'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CreativeTimeline } from '@/data/creativetimeline';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      {/* About Section */}
      <section className="mb-20 flex flex-col md:flex-row items-center gap-10">
        <Image
          src="/hero-img.jpg"
          alt="Siam Mehraf"
          width={220}
          height={220}
          className="rounded-xl shadow-md border border-border"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Hi, I’m Siam Mehraf</h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            I’m an author, creative developer, and visual storyteller. I build websites, write books, make short films,
            and love blending creativity with code. My journey spans writing, web development, video editing, marketing,
            and more.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section>
        <h2 className="text-3xl font-bold mb-12 text-center">My Creative Timeline</h2>
        <div className="relative border-l-2 border-muted pl-12">
          {CreativeTimeline.map((event, index) => (
            <motion.div
              key={index}
              className="relative mb-12 flex items-center gap-3"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}>
              {/* Dot */}
              <div className="w-4 h-4 rounded-full bg-blue-600 border-2 border-background flex-shrink-0" />

              {/* Year */}
              <time className="text-sm text-muted-foreground font-medium min-w-[50px]">{event.year}</time>

              {/* Title + Description */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{event.title}</h3>
                <p className="text-muted-foreground text-base">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
