'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  if (!visible) return null;

  return (
    <Button
      onClick={scrollToTop}
      variant="outline"
      className="
    fixed bottom-8 right-8 z-50 rounded-lg p-2 w-10 h-10 flex items-center justify-center
    bg-background/60 dark:bg-background/30 backdrop-blur-sm
    text-foreground border border-border shadow-md
    hover:bg-accent/80 dark:hover:bg-accent/60 hover:text-accent-foreground transition-colors
  "
      aria-label="Back to top">
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
}
