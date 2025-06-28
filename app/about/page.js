import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  return (
    <div className="bg-white dark:bg-[#0A0A0A] transition-colors duration-700">
      <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            {/* Photo block moved above text block on mobile */}
            <div className="order-1 lg:order-none w-full lg:justify-start justify-center items-start flex">
              <div className="sm:w-[564px] w-full sm:h-[646px] h-[300px] bg-gray-100 dark:bg-gray-800 rounded-3xl sm:border border-gray-200 dark:border-gray-700 relative transition-colors duration-700">
                <Image
                  className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src="/hero-img.jpg"
                  alt="about Us image"
                  fill
                  sizes="(max-width: 640px) 100vw, 564px"
                  priority
                  style={{ objectFit: 'cover', borderRadius: '1.5rem' }}
                />
              </div>
            </div>
            <div className="order-2 lg:order-none w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 className="text-[#1E2939] dark:text-[#F3F4F6] text-base font-normal leading-relaxed">About Me</h6>
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-4xl font-bold font-manrope leading-normal lg:text-start text-center text-blue-700 dark:text-blue-400 transition-colors duration-700">
                      The Tale of My Achievement Story
                    </h2>
                    <p className="text-base font-normal leading-relaxed lg:text-start text-center text-gray-900 dark:text-gray-100 transition-colors duration-700">
                      My achievement story is a testament to dedication and perseverance. I&apos;ve overcome challenges,
                      celebrated milestones, and built a journey of continuous growth and success through hard work and
                      determination.
                    </p>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex bg-white dark:bg-[#0A0A0A]">
                      <h4 className="text-2xl font-bold font-manrope leading-9 text-gray-900 dark:text-gray-100 transition-colors duration-700">
                        10+ Years
                      </h4>
                      <p className="text-base font-normal leading-relaxed text-gray-900 dark:text-gray-100 transition-colors duration-700">
                        Since the first word, I’ve wandered through silence and story—writing not just to be heard, but
                        to touch the quiet places others often leave unread.
                      </p>
                      <div className="flex flex-wrap items-center gap-2 md:flex-row">
                        <a href="https://goodreads.com/siammehraf" target="_blank" rel="noopener noreferrer">
                          <Button>Author Profile</Button>
                        </a>
                      </div>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex bg-white dark:bg-[#0A0A0A]">
                      <h4 className="text-2xl font-bold font-manrope leading-9 text-gray-900 dark:text-gray-100 transition-colors duration-700">
                        6+ Years of Coding
                      </h4>
                      <p className="text-base font-normal leading-relaxed text-gray-900 dark:text-gray-100 transition-colors duration-700">
                        I have been coding since 2019 and have completed several projects along the way, using various
                        programming languages and frameworks.
                      </p>
                      <div className="flex flex-wrap items-center gap-2 md:flex-row">
                        <a href="https://github.com/siammehraf" target="_blank" rel="noopener noreferrer">
                          <Button>Github Profile</Button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div className="w-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex bg-white dark:bg-[#0A0A0A]">
                      <h4 className="text-2xl font-bold font-manrope leading-9 text-gray-900 dark:text-gray-100 transition-colors duration-700">
                        26+ Awards
                      </h4>
                      <p className="text-base font-normal leading-relaxed text-gray-900 dark:text-gray-100 transition-colors duration-700">
                        Our Dedication to Innovation Wins Understanding
                      </p>
                    </div>
                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex bg-white dark:bg-[#0A0A0A]">
                      <h4 className="text-2xl font-bold font-manrope leading-9 text-gray-900 dark:text-gray-100 transition-colors duration-700">
                        99% Happy Clients
                      </h4>
                      <p className="text-base font-normal leading-relaxed text-gray-900 dark:text-gray-100 transition-colors duration-700">
                        Mirrors our Focus on Client Satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="sm:w-fit w-full group px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex bg-blue-700 dark:bg-blue-400 text-white dark:text-gray-900">
                <span className="px-1.5 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out text-white dark:text-gray-900">
                  Read More
                </span>
                <svg
                  className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none">
                  <path
                    d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
