import React from 'react';
import { Button } from '@/components/ui/button';

const AchievementCard = React.memo(function AchievementCard({ title, description, buttonLabel, buttonLink }) {
  return (
    <article className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A0A0A] transition-colors duration-300 hover:border-gray-400 dark:hover:border-gray-500 flex flex-col gap-3">
      <h4 className="text-2xl font-bold font-manrope text-gray-900 dark:text-gray-100">{title}</h4>
      <p className="text-base text-gray-900 dark:text-gray-100">{description}</p>
      {buttonLabel && buttonLink && (
        <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="mt-auto self-start">
          <Button>{buttonLabel}</Button>
        </a>
      )}
    </article>
  );
});

AchievementCard.displayName = 'AchievementCard';

export default AchievementCard;
