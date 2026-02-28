'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Loader2, AlertCircle } from 'lucide-react'; // Added AlertCircle for a subtle professional touch
import { subscribeToNewsletter } from '@/app/actions';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    // Manual validation to replace the browser tooltip
    if (!email.trim()) {
      setError('Please fill out this field.');
      return;
    }

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
            /* added noValidate to disable the browser's default grey bubble */
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 justify-center">
              <div className="flex flex-col gap-1.5">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(''); // Clears error immediately when user starts typing
                  }}
                  disabled={loading}
                  /* Added a subtle red border only when error exists */
                  className={`w-full border px-4 py-2 h-12 text-base text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md disabled:opacity-50 transition-colors ${
                    error ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  }`}
                />

                {/* Minimalist Error Display: Slides in smoothly without a shake */}
                {error && (
                  <div className="flex items-center gap-1.5 text-red-500 px-1 animate-in fade-in slide-in-from-top-1 duration-200">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <p className="text-sm font-medium leading-none">{error}</p>
                  </div>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 px-6 h-12 text-sm w-full justify-center rounded-md">
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Mail className="w-5 h-5" />}
                {loading ? 'Subscribing...' : 'Subscribe'}
              </Button>
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
