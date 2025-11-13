'use client';

import Link from 'next/link';
import { Github, Linkedin, Youtube, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-900 text-gray-300 dark:text-gray-300 py-10 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand / Name */}
        <div className="text-lg font-semibold">© {new Date().getFullYear()} Siam Mehraf</div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/" className="hover:text-white dark:hover:text-black transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-white dark:hover:text-black transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-white dark:hover:text-black transition">
            Projects
          </Link>
          <Link href="/films" className="hover:text-white dark:hover:text-black transition">
            Films
          </Link>
          <Link href="/contact" className="hover:text-white dark:hover:text-black transition">
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-3">
          <a href="https://github.com/siammehraf" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Button
              variant="ghost"
              className="p-2 text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://linkedin.com/in/siammehraf" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Button
              variant="ghost"
              className="p-2 text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://youtube.com/@siammehraf" target="_blank" rel="noreferrer" aria-label="YouTube">
            <Button
              variant="ghost"
              className="p-2 text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </Button>
          </a>
          <a href="mailto:siammehraf@gmail.com" aria-label="Email">
            <Button
              variant="ghost"
              className="p-2 text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
}
