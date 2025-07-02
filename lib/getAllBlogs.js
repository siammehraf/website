import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

function getFilesRecursively(dir) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath));
    } else if (/\.(md|mdx)$/.test(file)) {
      results.push(filePath);
    }
  });

  return results;
}

export function getAllBlogs() {
  const files = getFilesRecursively(postsDirectory);

  const posts = files.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    const slug = path
      .relative(postsDirectory, filePath)
      .replace(/\\/g, '/') // Windows compatibility
      .replace(/\.(md|mdx)$/, '');

    return {
      slug,
      ...data,
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}
