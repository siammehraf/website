'use client';
import { useEffect, useState } from 'react';
import MarkdownClientWrapper from './MarkdownClientWrapper';

export default function AnimatedMarkdownWrapper({ content, lang }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 50); // slight delay to trigger animation
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0px)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}>
      <MarkdownClientWrapper content={content} lang={lang} />
    </div>
  );
}
