'use client';

import { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '700'] });
const DEFAULT_SIZE = 18; // default font size in px

export default function FontSizeControls() {
  const [fontSize, setFontSize] = useState(DEFAULT_SIZE);

  useEffect(() => {
    const content = document.getElementById('post-content');
    if (content) {
      content.style.transition = 'font-size 0.2s, line-height 0.2s';
      content.style.fontSize = `${fontSize}px`;
      content.style.lineHeight = '1.7';

      content.querySelectorAll('*').forEach((el) => {
        el.style.fontSize = `${fontSize}px`;
        el.style.lineHeight = '1.7';
      });
    }
  }, [fontSize]);

  return (
    <div className={`flex gap-2 justify-end mt-6 select-none ${poppins.className}`}>
      <button
        onClick={() => setFontSize((s) => Math.max(DEFAULT_SIZE, s - 2))}
        className="
          w-10 h-10 flex items-center justify-center
          border border-current rounded-lg
          text-black dark:text-white
          transition
          hover:bg-black hover:text-white
          dark:hover:bg-white dark:hover:text-black
        "
        title="Decrease font size"
        disabled={fontSize <= DEFAULT_SIZE} // optional: disable button at minimum
      >
        <Minus size={18} />
      </button>

      <button
        onClick={() => setFontSize((s) => Math.min(30, s + 2))}
        className="
          w-10 h-10 flex items-center justify-center
          border border-current rounded-lg
          text-black dark:text-white
          transition
          hover:bg-black hover:text-white
          dark:hover:bg-white dark:hover:text-black
        "
        title="Increase font size">
        <Plus size={18} />
      </button>
    </div>
  );
}
