'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Loader2 } from 'lucide-react';
import { subscribeToNewsletter } from '@/app/actions';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await subscribeToNewsletter(email);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error || 'Failed to subscribe. Please try again.');
    }
    setLoading(false);
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full border border-gray-300 dark:border-gray-700 px-4 py-2 h-12 text-base text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md disabled:opacity-50"
              />
              <Button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 px-6 h-12 text-sm w-full justify-center rounded-md">
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Mail className="w-5 h-5" />}
                {loading ? 'Subscribing...' : 'Subscribe'}
              </Button>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </form>
          ) : (
            <div className="space-y-2">
              <p className="text-green-600 dark:text-green-400 font-semibold">🎉 Thank you for subscribing!</p>
              <p className="text-sm text-gray-500">Check your inbox for a welcome message.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
