export function getAllFilms() {
  return [
    {
      slug: 'film-one',
      title: 'Film One',
      poster: '/films/film-one.jpg',
      description: 'A short emotional drama about choices.',
      longDescription: 'Full story of the film…',
      imdb: 'https://imdb.com/film-one',
      watch: 'https://youtube.com/watch?v=xxxxx',
    },
    {
      slug: 'film-two',
      title: 'Film Two',
      poster: '/films/film-two.jpg',
      description: 'A thriller shot in one night.',
      longDescription: 'Full details about film two…',
      imdb: 'https://imdb.com/film-two',
      watch: 'https://youtube.com/watch?v=yyyyy',
    },
  ];
}

export function getFilm(slug) {
  return getAllFilms().find((f) => f.slug === slug);
}
