import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Point this to your posts folder (even if inside public)
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

    // Make slug relative to postsDirectory
    const relativePath = path.relative(postsDirectory, filePath).replace(/\\/g, '/');
    const fileSlug = relativePath.replace(/\.(md|mdx)$/, '');

    // Infer category/subcategory from folder structure
    const parts = fileSlug.split('/');
    const category = parts[0] || 'uncategorized';
    const subcategory = parts[1] || 'general';

    // Clean URL slug: remove subcategory if 'general'
    const urlSlug = subcategory === 'general' ? [category, ...parts.slice(2)].join('/') : fileSlug;

    return {
      slug: fileSlug, // original relative path slug
      urlSlug, // clean URL slug for linking
      category,
      subcategory,
      image: data.image || '',
      description: data.description || '',
      lang: data.lang || 'bn',
      date: data.date ? new Date(data.date) : new Date(0),
      title: data.title || 'Untitled',
      author: data.author || 'Unknown',
    };
  });

  return posts.sort((a, b) => b.date - a.date); // latest first
}
