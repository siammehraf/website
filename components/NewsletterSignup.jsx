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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await subscribeToNewsletter(email);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error || 'Something went wrong.');
    }
    setLoading(false);
  };

  return (
    <div className="px-6 mb-6">
      <Card className="max-w-sm mx-auto">
        <CardContent className="p-6 text-center">
          <h2 className="text-xl font-bold mb-4">Subscribe to My Newsletter</h2>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="border p-2 rounded dark:bg-gray-800"
              />
              <Button type="submit" disabled={loading}>
                {loading ? <Loader2 className="animate-spin" /> : <Mail className="mr-2" />}
                {loading ? 'Subscribing...' : 'Subscribe'}
              </Button>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>
          ) : (
            <p className="text-green-600">🎉 Thanks for subscribing!</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
