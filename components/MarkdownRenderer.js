'use client';

import React, { useEffect, useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';
import { Button } from '@/components/ui/button';
import { Space_Mono } from 'next/font/google';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function MarkdownRenderer({ content, lang }) {
  const [copiedId, setCopiedId] = useState(null);
  const codeBlockCounter = useRef(0);

  useEffect(() => {
    setCopiedId(null);
    codeBlockCounter.current = 0; // reset on content change
  }, [content]);

  const components = {
    code({ node, inline, className, children, ...props }) {
      const codeText = String(children).replace(/\n$/, '');

      if (!inline) {
        const id =
          node.position?.start.line ??
          (() => {
            codeBlockCounter.current += 1;
            return codeBlockCounter.current;
          })();

        const handleCopy = () => {
          const textToCopy = codeText;

          if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard
              .writeText(textToCopy)
              .then(() => {
                setCopiedId(id);
                setTimeout(() => setCopiedId(null), 2500);
              })
              .catch(() => fallbackCopy());
          } else {
            fallbackCopy();
          }

          function fallbackCopy() {
            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;

            // Styling to avoid layout shifts
            textArea.style.position = 'fixed';
            textArea.style.top = '0';
            textArea.style.left = '0';
            textArea.style.width = '2em';
            textArea.style.height = '2em';
            textArea.style.padding = '0';
            textArea.style.border = 'none';
            textArea.style.outline = 'none';
            textArea.style.boxShadow = 'none';
            textArea.style.background = 'transparent';

            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
              const successful = document.execCommand('copy');
              if (successful) {
                setCopiedId(id);
                setTimeout(() => setCopiedId(null), 2500);
              } else {
                alert('Unable to copy');
              }
            } catch {
              alert('Unable to copy');
            } finally {
              if (textArea && textArea.parentNode) {
                textArea.parentNode.removeChild(textArea);
              }
            }
          }
        };

        return (
          <div className="relative my-6 rounded-xl bg-gray-100 dark:bg-[#155DFC] p-4 overflow-auto">
            <pre className="bg-transparent p-0 m-0 overflow-x-auto">
              <code
                className={`${spaceMono.className} ${className} whitespace-pre`}
                {...props}
                style={{ background: 'transparent', color: 'inherit' }}>
                {codeText}
              </code>
            </pre>
            <div className="absolute top-2 right-2 z-10">
              <Button className={spaceMono.className} onClick={handleCopy}>
                {copiedId === id ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          </div>
        );
      }

      return (
        <code className={`${spaceMono.className} ${className}`} {...props}>
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
