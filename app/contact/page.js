'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, CheckCircle } from 'lucide-react';
import Head from 'next/head';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact | Siam Mehraf',
    url: 'https://siammehraf.com/contact',
    description:
      'Get in touch with Siam Mehraf. Send your questions, feedback, or messages directly through this contact form.',
    keywords: [
      'Siam Mehraf',
      'সিয়াম মেহরাফ',
      'Contact',
      'সিয়াম মেহরাফ যোগাযোগ',
      'Siam Mehraf Contact',
      'Message',
      'Contact Form',
    ],
    sameAs: [
      'https://www.facebook.com/siammehraf',
      'https://www.twitter.com/siammehraf',
      'https://www.instagram.com/siammehraf',
      'https://www.linkedin.com/in/siammehraf',
      'https://www.youtube.com/@siammehraf',
    ],
  };

  return (
    <>
      <Head>
        {/* Standard Meta */}
        <title>Contact | Siam Mehraf</title>
        <meta
          name="description"
          content="Get in touch with Siam Mehraf. Send your questions, feedback, or messages directly through this contact form."
        />
        <meta
          name="keywords"
          content="Siam Mehraf, সিয়াম মেহরাফ, Contact, সিয়াম মেহরাফ যোগাযোগ, Siam Mehraf Contact, Message, Contact Form"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact | Siam Mehraf" />
        <meta
          property="og:description"
          content="Get in touch with Siam Mehraf. Send your questions, feedback, or messages directly through this contact form."
        />
        <meta property="og:url" content="https://siammehraf.com/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Siam Mehraf" />
        <meta
          name="twitter:description"
          content="Get in touch with Siam Mehraf. Send your questions, feedback, or messages directly through this contact form."
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 2) }} />
      </Head>

      <main className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

        {!submitted ? (
          <form
            action="https://formspree.io/f/xjkrlqpy"
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
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

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
    </>
  );
}
