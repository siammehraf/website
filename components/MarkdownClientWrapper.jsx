'use client';

import dynamic from 'next/dynamic';

const MarkdownRenderer = dynamic(() => import('./MarkdownRenderer'), {
  ssr: false,
  loading: () => <p className="text-center py-10 text-muted-foreground">Loading content…</p>,
});

export default function MarkdownClientWrapper({ content, lang }) {
  return <MarkdownRenderer content={content} lang={lang} />;
}
