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
