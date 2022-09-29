import { createURL, createParams } from '../utils/urls';

const getMovies = (client, id, params) => {
  const url = createURL('movie', id);
  const queryParams = params ? createParams(params) : '';
  return client.get(url + queryParams)
    .then(res => res)
    .catch(err => { throw err });
}

const getMovieQuotes = (client, id, params) => {
  const url = `/movie/${id}/quote`;
  const queryParams = params ? createParams(params) : '';
  return client.get(url + queryParams)
    .then(res => res)
    .catch(err => { throw err });
}

export { getMovies, getMovieQuotes };
