'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, CheckCircle } from 'lucide-react';

//Form Uses https://formspree.io/forms //

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      {!submitted ? (
        <form
          action="https://formspree.io/f/xjkrlqpy" // ← replace YOUR_FORM_ID
          method="POST"
          className="w-full space-y-6"
          onSubmit={() => setSubmitted(true)}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>

          <Button type="submit" className="w-full flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" /> Send Message
          </Button>
        </form>
      ) : (
        <div className="text-center">
          <CheckCircle className="mx-auto text-green-500 w-12 h-12 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Thank you!</h2>
          <p className="text-muted-foreground">Your message has been sent. I’ll get back to you soon.</p>
        </div>
      )}
    </main>
  );
}
