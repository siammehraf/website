import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPost(category, subcategory, slug) {
  const fullPath = path.join(postsDirectory, category, subcategory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    title: data.title || slug,
    description: data.description || '',
    image: data.image || null,
    category,
    subcategory,
    slug,
    content,
    lang: data.lang || 'en',
    date: data.date || null,
    tags: data.tags || [], // <-- Added this line to return tags
  };
}

export function getAllPosts() {
  const categories = fs.readdirSync(postsDirectory);
  const posts = [];

  categories.forEach((category) => {
    const subcategories = fs.readdirSync(path.join(postsDirectory, category));
    subcategories.forEach((subcategory) => {
      const files = fs.readdirSync(path.join(postsDirectory, category, subcategory));

      files.forEach((file) => {
        const slug = file.replace(/\.md$/, '');
        const post = getPost(category, subcategory, slug);
        posts.push(post);
      });
    });
  });

  return posts;
}
