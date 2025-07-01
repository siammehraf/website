'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  useEffect(() => {
    // Disable scroll on mount
    document.body.style.overflow = 'hidden';
    return () => {
      // Restore scroll on unmount
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-extrabold">404</h1>
        <p className="text-2xl font-semibold">Page not found</p>
        <p className="text-sm text-muted-foreground">Sorry, we couldn’t find the page you’re looking for.</p>

        <Button asChild>
          <Link href="/" className="inline-flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18m-9-9l9 9-9 9" />
            </svg>
            Go back home
          </Link>
        </Button>
      </div>
    </div>
  );
}
