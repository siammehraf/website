import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          {/* Image Col - Move to top on mobile */}
          <div className="order-1 md:order-2 relative ms-0 md:ms-4">
            <img className="w-full rounded-md" src="/hero-img.jpg" alt="Hero Image" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>

            {/* SVG*/}
            <div className="absolute bottom-0 start-0">
              {/* ... SVG ... */}
              {/* (SVG omitted for brevity) */}
            </div>
            {/* End SVG*/}
          </div>
          {/* End Col */}

          <div className="order-2 md:order-1 mt-6 text-center md:text-left">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              <span className="block">Hey there</span>
              <span className="block">
                I am <span className="text-[#155DFC]">Siam Mehraf</span>
              </span>
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
              Siam Mehraf is a Bangladeshi Author, Screenwriter, Film-Maker and Novelist. He is Known for Chotushkon &
              Nefartiti.
            </p>
            {/* Buttons */}
            <div className="mt-7 grid gap-3 w-full sm:inline-flex mb-4">
              <Link
                href="/about-me"
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Know About Me!
                <svg
                  className="shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                Contact Siam Mehraf!
              </Link>
            </div>
            {/* End Buttons */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </>
  );
};

export default HeroSection;
