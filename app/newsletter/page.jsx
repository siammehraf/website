'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Loader2, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react'; // Added AlertCircle
import { subscribeToNewsletter } from '@/app/actions';

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    // 1. Minimalist manual validation
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
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 px-6 py-12 transition-colors duration-300">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 p-8 md:p-16">
        {!submitted ? (
          <>
            <header className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl mb-8 transform -rotate-3 transition-transform hover:rotate-0">
                <Mail className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
                Join My Newsletter!
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mx-auto">
                Join 100+ readers. I share occasional insights on productivity, business, and living a more intentional
                life. No fluff, just the best stuff I've found.
              </p>
            </header>

            {/* 2. Added noValidate to disable browser tooltip */}
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  disabled={loading}
                  /* 3. Subtle conditional border matching your theme */
                  className={`w-full px-6 py-4 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all disabled:opacity-50 text-lg ${
                    error ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                  }`}
                />

                {/* 4. Minimalist Error Message */}
                {error && (
                  <div className="flex items-center gap-2 text-red-500 dark:text-red-400 px-2 animate-in fade-in slide-in-from-top-1 duration-200">
                    <AlertCircle className="w-4 h-4" />
                    <p className="text-sm font-medium leading-none">{error}</p>
                  </div>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-16 bg-slate-900 dark:bg-blue-600 hover:bg-black dark:hover:bg-blue-500 text-white text-lg font-bold rounded-2xl transition-all flex items-center justify-center gap-3 group active:scale-[0.98]">
                {loading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    Subscribe for free!
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>No spam. Ever.</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Join 100+ friendly readers.</span>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500 py-10">
            <div className="mx-auto w-20 h-20 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Check your inbox!</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                🎉 Thank you for subscribing! Check your inbox for a welcome message.
              </p>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
              Back to form
            </button>
          </div>
        )}
      </div>

      <footer className="mt-8">
        <a
          href="/"
          className="text-sm text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 underline underline-offset-4 transition-colors">
          Back to home
        </a>
      </footer>
    </main>
  );
}
