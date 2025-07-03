'use client';

import dynamic from 'next/dynamic';
import styles from './MarkdownClientWrapper.module.css';

const MarkdownRenderer = dynamic(() => import('./MarkdownRenderer'), {
  ssr: false,
  loading: () => <p className="text-center py-10 text-muted-foreground">Loading content…</p>,
});

export default function MarkdownClientWrapper({ content, lang }) {
  return (
    <div className={`prose prose-lg prose-blue max-w-none ${styles.markdownContainer}`}>
      <MarkdownRenderer content={content} lang={lang} />
    </div>
  );
}
