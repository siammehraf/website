const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function getSlugsRecursive(folder, prefix = '') {
  const folderPath = path.join(process.cwd(), folder);
  if (!fs.existsSync(folderPath)) return [];

  let slugs = [];
  const items = fs.readdirSync(folderPath);

  items.forEach((item) => {
    const fullPath = path.join(folderPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      slugs = slugs.concat(getSlugsRecursive(path.join(folder, item), path.join(prefix, item)));
    } else if (item.endsWith('.md')) {
      const slug = path.join(prefix, item.replace(/\.md$/, ''));
      const fileContent = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContent);

      slugs.push({
        loc: `/${slug.replace(/\\/g, '/')}`,
        lastmod: stat.mtime.toISOString(),
        tags: data.tags || [],
      });
    }
  });

  return slugs;
}

// Recursively get all folders for listing pages
function getListingPages(folder, basePath = '') {
  const folderPath = path.join(process.cwd(), folder);
  if (!fs.existsSync(folderPath)) return [];

  let pages = [];
  const items = fs.readdirSync(folderPath);

  items.forEach((item) => {
    const fullPath = path.join(folderPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const pagePath = path.join(basePath, item).replace(/\\/g, '/');
      pages.push(`/${pagePath}`);
      pages = pages.concat(getListingPages(path.join(folder, item), path.join(basePath, item)));
    }
  });

  return pages;
}

module.exports = {
  siteUrl: 'https://siammehraf.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,

  additionalPaths: async () => {
    // Top-level static pages
    const staticPages = ['/', '/about', '/contact', '/films', '/books', '/portfolio', '/creative-timeline'].map(
      (loc) => ({
        loc,
        lastmod: new Date().toISOString(),
      })
    );

    // Markdown dynamic pages
    const bookSlugs = getSlugsRecursive('books');
    const reviewSlugs = getSlugsRecursive('review');
    const blogSlugs = getSlugsRecursive('blog');
    const writingsSlugs = getSlugsRecursive('writings');

    const allDynamicPages = [...bookSlugs, ...reviewSlugs, ...blogSlugs, ...writingsSlugs];

    // All listing pages automatically detected
    const categoryListingPages = [
      ...getListingPages('books'),
      ...getListingPages('review'),
      ...getListingPages('writings'),
      ...getListingPages('blog'),
      ...getListingPages('discussions'),
      ...getListingPages('thriller'),
    ].map((loc) => ({ loc, lastmod: new Date().toISOString() }));

    // Generate tag pages for SEO
    let tagPages = [];
    allDynamicPages.forEach((page) => {
      if (page.tags.length > 0) {
        page.tags.forEach((tag) => {
          tagPages.push({
            loc: `/tag/${encodeURIComponent(tag.replace(/\s+/g, '-').toLowerCase())}`,
            lastmod: page.lastmod,
          });
        });
      }
    });

    tagPages = tagPages.filter((tagPage, index, self) => index === self.findIndex((t) => t.loc === tagPage.loc));

    return [
      ...staticPages,
      ...categoryListingPages,
      ...allDynamicPages.map((p) => ({ loc: p.loc, lastmod: p.lastmod })),
      ...tagPages,
    ];
  },
};
