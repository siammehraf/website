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
import Head from 'next/head';

// Home page metadata for SEO & social sharing
export const metadata = {
  title: 'Siam Mehraf | Author & Filmmaker',
  description: 'Welcome to the official website of Siam Mehraf – explore books, films, projects, skills, and writings.',
  metadataBase: new URL('https://siammehraf.com'),
  alternates: {
    canonical: 'https://siammehraf.com',
  },
  openGraph: {
    title: 'Siam Mehraf | Author & Filmmaker',
    description: 'Explore books, films, projects, skills, and writings from Siam Mehraf.',
    url: 'https://siammehraf.com',
    type: 'website',
    siteName: 'Siam Mehraf',
    fbAppId: '1356492322781777',
    images: [
      {
        url: '/hero-img.jpg',
        width: 1200,
        height: 630,
        alt: 'Siam Mehraf Homepage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siam Mehraf | Author & Filmmaker',
    description: 'Explore books, films, projects, skills, and writings from Siam Mehraf.',
    images: ['/hero-img.jpg'],
  },
};

const HomePage = () => {
  // JSON-LD (Schema.org)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Siam Mehraf',
    url: 'https://siammehraf.com',

    // Updated SEO Keywords (Bengali + English)
    alternateName: [
      // Bengali Keywords
      'সিয়াম মেহরাফ',
      'সিয়াম মেহরাফ ওয়েবসাইট',
      'সিয়াম মেহরাফ ব্লগ',
      'সিয়াম মেহরাফ গল্পসমূহ',
      'সিয়াম মেহরাফ থ্রিলার',
      'সিয়াম মেহরাফ বই',

      // English Keywords
      'Siam Mehraf',
      'Siam Mehraf Website',
      'Siam Mehraf Blog',
      'Siam Mehraf Writings',
      'Siam Mehraf Thriller',
      'Siam Mehraf Books',
    ],

    description:
      'Official website of Siam Mehraf. Explore books, films, blog posts, stories, skills, and creative projects.',
    author: {
      '@type': 'Person',
      name: 'Siam Mehraf',
      url: 'https://siammehraf.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Siam Mehraf',
    },
  };

  return (
    <>
      <Head>
        <meta name="google-site-verification" content="5Ranh3fbqr3VUJnBys5iWmReNm9sFLinyG2OpgC85vE" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

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
    </>
  );
};

export default HomePage;
