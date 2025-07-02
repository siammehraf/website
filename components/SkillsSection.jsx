'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skills = {
  'Web Development': ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  'Creative Tools': ['Photoshop', 'Illustrator', 'Premiere Pro', 'Audition', 'After Effects'],
  'Video & Editing': ['Filmora', 'CapCut', 'Directing', 'Script Writing', 'Acting'],
  'Marketing & Design': ['Graphic Design', 'Google Ads', 'Digital Marketing', '2D/3D Animation', 'Web Design'],
  'Productivity Tools': ['Microsoft Word', 'PowerPoint', 'Excel', 'Notion'],
};

export default function SkillsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Professional Skills</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items], i) => (
          <Card key={i} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, j) => (
                  <Badge key={j} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
