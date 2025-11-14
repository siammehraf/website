'use client';

import dynamic from 'next/dynamic';
import { Poppins } from 'next/font/google';
import { useState, useEffect } from 'react';
import styles from './MarkdownClientWrapper.module.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '700'] });

const MarkdownRenderer = dynamic(() => import('./MarkdownRenderer'), { ssr: false });

export default function MarkdownClientWrapper({ content, lang }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true); // trigger animation immediately on mount
  }, []);

  return (
    <div
      className={`${poppins.className} prose prose-lg prose-blue max-w-none ${styles.markdownContainer}`}
      style={{
        minHeight: '450px', // reserve space to avoid footer jumps
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(10px)', // slight more distance feels natural
        transition: 'opacity 0.4s ease-out, transform 0.4s ease-out', // slower and smoother
        willChange: 'opacity, transform',
      }}>
      <MarkdownRenderer content={content} lang={lang} />
    </div>
  );
}
