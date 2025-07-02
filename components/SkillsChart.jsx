'use client';

import { useState } from 'react';
import { skills } from '@/data/skills';

export default function SkillsChart() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Gather all categories + add "All"
  const categories = ['All', ...skills.map((s) => s.category)];

  // Filter skills by category or show all
  const filteredSkills =
    selectedCategory === 'All'
      ? skills.flatMap((s) => s.items)
      : skills.find((s) => s.category === selectedCategory)?.items || [];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills & Tools</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-md font-semibold transition 
              ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              }`}
            onClick={() => setSelectedCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredSkills.map(({ name, level }) => (
          <div key={name} className="rounded-lg border border-gray-300 dark:border-gray-700 p-5 shadow-sm">
            <div className="flex justify-between mb-2 font-medium">
              <span>{name}</span>
              <span>{level}%</span>
            </div>

            {/* Proficiency Bar */}
            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
              <div
                className="bg-blue-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
