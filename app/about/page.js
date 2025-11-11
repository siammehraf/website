import React, { Suspense, lazy } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Button } from '@/components/ui/button';

// Lazy load AchievementCard component
const AchievementCard = lazy(() => import('@/components/AchievementCard'));

export const metadata = {
  title: 'About Me | Siam Mehraf',
  description: 'Learn more about Siam Mehraf, his journey, achievements, and creative work.',
};

const AboutPage = React.memo(function AboutPage() {
  // JSON-LD for AboutPage / Person schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Siam Mehraf',
    url: 'https://siammehraf.com/about',
    image: 'https://siammehraf.com/hero-img.jpg',
    description: 'Learn more about Siam Mehraf, his journey, achievements, and creative work.',
    jobTitle: 'Author, Filmmaker, Screenwriter, Novelist',
    keywords: [
      'সিয়াম মেহরাফ',
      'সিয়াম মেহরাফ ওয়েবসাইট',
      'সিয়াম মেহরাফ ব্লগ',
      'সিয়াম মেহরাফ গল্পসমূহ',
      'সিয়াম মেহরাফ থ্রিলার',
      'সিয়াম মেহরাফ বই',
      'Siam Mehraf',
      'Siam Mehraf Website',
      'Siam Mehraf Blog',
      'Siam Mehraf Writings',
      'Siam Mehraf Thriller',
      'Siam Mehraf Books',
      'Siam Mehraf About',
    ],
    sameAs: ['https://github.com/siammehraf', 'https://goodreads.com/siammehraf'],
  };

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <div className="bg-white dark:bg-[#0A0A0A] transition-colors duration-500">
        <section className="py-24 xl:mr-0 lg:mr-5 mx-0">
          <div className="max-w-7xl px-4 md:px-5 lg:px-5 mx-auto grid lg:grid-cols-2 gap-10 xl:gap-12 items-center">
            {/* Image block */}
            <div className="flex justify-center lg:justify-start">
              <div className="sm:w-[564px] w-full sm:h-[646px] h-[300px] bg-gray-100 dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">
                <Image
                  src="/hero-img.jpg"
                  alt="About Us image"
                  fill
                  sizes="(max-width: 640px) 100vw, 564px"
                  priority
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>

            {/* Text block */}
            <div className="flex flex-col items-center lg:items-start gap-10">
              <header className="w-full flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
                <h6 className="text-base text-[#1E2939] dark:text-[#F3F4F6] font-normal leading-relaxed">About Me</h6>
                <h2 className="text-4xl font-bold font-manrope text-blue-700 dark:text-[#155DFC] leading-normal transition-colors duration-500">
                  The Tale of My Achievement Story
                </h2>
                <p className="text-base font-normal text-gray-900 dark:text-gray-100 leading-relaxed max-w-xl">
                  My achievement story is a testament to dedication and perseverance. I&apos;ve overcome challenges,
                  celebrated milestones, and built a journey of continuous growth and success through hard work and
                  determination.
                </p>
              </header>

              <section className="w-full grid md:grid-cols-2 gap-6">
                <Suspense fallback={<div>Loading achievements...</div>}>
                  <AchievementCard
                    title="10+ Years"
                    description="Since the first word, I’ve wandered through silence and story—writing not just to be heard, but to touch the quiet places others often leave unread."
                    buttonLabel="Author Profile"
                    buttonLink="https://goodreads.com/siammehraf"
                  />
                  <AchievementCard
                    title="6+ Years of Coding"
                    description="I have been coding since 2019 and have completed several projects along the way, using various programming languages and frameworks."
                    buttonLabel="Github Profile"
                    buttonLink="https://github.com/siammehraf"
                  />
                  <AchievementCard title="26+ Awards" description="Our Dedication to Innovation Wins Understanding" />
                  <AchievementCard title="99% Happy Clients" description="Mirrors our Focus on Client Satisfaction." />
                </Suspense>
              </section>

              <button
                type="button"
                className="w-full sm:w-auto group flex items-center justify-center gap-2 px-4 py-2 rounded-lg shadow-sm bg-blue-700 dark:bg-[#155DFC] text-white transition duration-300 hover:bg-blue-600 dark:hover:bg-[#1c62ff]">
                <span className="text-sm font-medium leading-6 transition-transform group-hover:-translate-x-1">
                  Read More
                </span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M6.75 4.5l4.5 4.5-4.5 4.5" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
});

export default AboutPage;
