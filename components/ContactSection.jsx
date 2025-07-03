'use client';

import { Button } from '@/components/ui/button';
import { Mail, Github, Youtube, Linkedin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
      <p className="text-muted-foreground mb-8">
        Whether it’s a creative collaboration, a dev project, or just a chat — I’d love to hear from you. Drop a message
        or connect via social.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <a href="mailto:siam.mehraf@email.com">
          <Button variant="outline">
            <Mail className="w-4 h-4 mr-2" />
            Email Me
          </Button>
        </a>
        <a href="https://github.com/siammehraf" target="_blank" rel="noreferrer">
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/siammehraf" target="_blank" rel="noreferrer">
          <Button variant="outline">
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
        </a>
        <a href="https://youtube.com/siammehraf" target="_blank" rel="noreferrer">
          <Button variant="outline">
            <Youtube className="w-4 h-4 mr-2" />
            YouTube
          </Button>
        </a>
      </div>

      {/* Optional Form */}
      <form action="https://formspree.io/f/YOUR_ID" method="POST" className="space-y-4 max-w-md mx-auto text-left">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full border rounded-lg px-4 py-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full border rounded-lg px-4 py-2"
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={5}
          required
          className="w-full border rounded-lg px-4 py-2"></textarea>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </section>
  );
}
