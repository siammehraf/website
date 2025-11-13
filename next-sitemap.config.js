/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://siammehraf.com', // your live domain
  generateRobotsTxt: true, // optional but recommended
  changefreq: 'weekly',
  priority: 0.7,

  // Include dynamic pages manually
  additionalPaths: async (config) => [
    '/blog',
    '/writings',
    '/books/chotushkon',
    '/books/nefartiti',
    // Add all your dynamic pages here
  ],
};
