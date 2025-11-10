import AboutSection from '@/components/AboutSection';
import BooksShowcase from '@/components/BooksShowcase';
import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/HeroSection';
import LatestBlogSection from '@/components/latestblogsection';
import NewsletterSignup from '@/components/NewsletterSignup';
import SkillsChart from '@/components/SkillsChart';
import SkillsSection from '@/components/SkillsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WorkShowcase from '@/components/WorkShowcase';
import React from 'react';

// Home page metadata for SEO & social sharing
export const metadata = {
  title: 'Siam Mehraf | Author & Filmmaker',
  description:
    'Welcome to the official website of Siam Mehraf – explore books, films, projects, skills, and blog posts.',
  metadataBase: new URL('https://siammehraf.com'),
  alternates: {
    canonical: 'https://siammehraf.com',
  },
  openGraph: {
    title: 'Siam Mehraf | Author, Filmmaker, Web Developer',
    description: 'Explore books, films, projects, skills, and blog posts from Siam Mehraf.',
    url: 'https://siammehraf.com',
    type: 'website',
    siteName: 'Siam Mehraf',
    images: [
      {
        url: '/hero-img.jpg', // optional OG image for social sharing
        width: 1200,
        height: 630,
        alt: 'Siam Mehraf Homepage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siam Mehraf | Author & Filmmaker',
    description: 'Explore books, films, projects, skills, and blog posts from Siam Mehraf.',
    images: ['/og/homepage.png'],
  },
};

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <BooksShowcase />
      <AboutSection />
      <WorkShowcase />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
      <NewsletterSignup />
      <SkillsChart />
      <LatestBlogSection />
    </div>
  );
};

export default HomePage;
