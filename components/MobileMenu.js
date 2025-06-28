'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ModeToggle } from '@/components/theme-btn';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Import Button

export default function MobileMenu() {
  return (
    <div className="md:hidden flex items-center gap-2">
      {/* Theme toggle button */}
      <ModeToggle />

      {/* Menu toggle button */}
      <Sheet>
        <SheetTrigger asChild aria-label="Open menu">
          <Button variant="outline" size="icon">
            <Menu className="w-4 h-4" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="p-6 w-64 bg-background border-r border-border rounded-none">
          {/* Optional header */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Menu</h2>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
