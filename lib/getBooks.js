import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const booksDirectory = path.join(process.cwd(), 'posts', 'books');

export function getAllBooks() {
  const books = [];

  function readDirRecursive(dir) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        readDirRecursive(fullPath); // recurse into subfolder
      } else if (file.endsWith('.md')) {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        // Generate slug from filename if not present
        const slug = data.slug || file.replace(/\.md$/, '');

        books.push({
          ...data,
          content,
          slug,
        });
      }
    });
  }

  readDirRecursive(booksDirectory);

  // Optionally sort by date
  return books.sort((a, b) => new Date(b.date) - new Date(a.date));
}
