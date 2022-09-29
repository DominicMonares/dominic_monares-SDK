const getMovies = (client, id) => {
  const url = id ? `/movie/${id}` : '/movie';
  return client.get(url)
    .then(res => res)
    .catch(err => { throw err });
}

const getMovieQuotes = (client, id) => {
  return client.get(`/movie/${id}/quote`)
    .then(res => res)
    .catch(err => { throw err });
}

export { getMovies, getMovieQuotes };
