'use client';

import { ModeToggle } from '@/components/theme-btn';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button'; // <-- import Button

export default function MobileMenu() {
  return (
    <div className="md:hidden flex items-center gap-2">
      {/* Theme toggle button */}
      <ModeToggle />

      {/* Mobile menu dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild aria-label="Open menu">
          <Button variant="outline" size="icon">
            <Menu className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-48 ml-2">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/">Home</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/blogs">Writings</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/books">Books</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/about">About</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/contact">Contact</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
