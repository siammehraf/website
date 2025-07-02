'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="px-6 sm:px-8 lg:px-12 mb-6">
      <Card className="max-w-sm mx-auto hover:shadow-lg transition-shadow rounded-lg">
        <CardContent className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Subscribe to My Newsletter</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Get updates on my latest writings, projects, and videos.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
    w-full md:flex-grow
    border border-gray-300 dark:border-gray-700
    px-4 py-2 h-12 text-base
    text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-blue-600
    rounded-md
  "
              />
              <Button
                type="submit"
                className="
                  flex items-center gap-2 px-6 h-12 text-sm w-full md:w-auto justify-center
                  rounded-md
                ">
                <Mail className="w-5 h-5" />
                Subscribe
              </Button>
            </form>
          ) : (
            <p className="text-green-600 dark:text-green-400 font-semibold">Thank you for subscribing!</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
