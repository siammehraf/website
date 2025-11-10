import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const booksDirectory = path.join(process.cwd(), 'posts/books');

export function getAllBooks() {
  if (!fs.existsSync(booksDirectory)) return [];

  const files = fs.readdirSync(booksDirectory).filter((f) => f.endsWith('.md'));

  const books = files.map((filename) => {
    const filePath = path.join(booksDirectory, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);

    return {
      ...data,
      slug: filename.replace(/\.md$/, ''), // use filename as slug
    };
  });

  // Sort by date descending (optional)
  return books.sort((a, b) => new Date(b.date) - new Date(a.date));
}
