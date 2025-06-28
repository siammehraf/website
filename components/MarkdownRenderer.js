'use client';

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';
import { Button } from '@/components/ui/button';
import { Space_Mono } from 'next/font/google';

const spaceMono = Space_Mono({
  subsets: ['latin'], // add 'bengali' if needed
  weight: ['400', '700'],
});

export default function MarkdownRenderer({ content, lang }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    setCopiedIndex(null);
  }, [content]);

  const components = {
    code({ node, inline, className, children, ...props }) {
      const codeText = String(children).replace(/\n$/, '');

      if (!inline) {
        const index = node.position?.start.line ?? 0;

        const handleCopy = () => {
          navigator.clipboard.writeText(codeText).then(() => {
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 1500);
          });
        };

        return (
          <div className="relative mb-6 rounded-xl bg-gray-100 dark:bg-[#155DFC] p-4 overflow-auto">
            <pre className="bg-transparent p-0 m-0 overflow-x-auto">
              <code
                className={`${className} ${spaceMono.className}`}
                {...props}
                style={{ background: 'transparent', color: 'inherit' }}>
                {codeText}
              </code>
            </pre>
            <div className="absolute top-2 right-2" style={{ fontFamily: 'inherit' }}>
              <Button onClick={handleCopy} className="font-inherit">
                {copiedIndex === index ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>
        );
      }

      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <article className={`prose prose-lg prose-blue max-w-none ${lang === 'bn' ? 'text-lg' : ''}`}>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]} components={components}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
