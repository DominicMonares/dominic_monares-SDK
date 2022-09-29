import axios from 'axios';

import * from '../config/urls';
import * from './methods/book';
import * from './methods/chapter';
import * from './methods/character';
import * from './methods/movie';
import * from './methods/quote';

const theOne = (token) => {
  const client = axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res)
    .catch(err => { throw `Error creating API instance: ${err}` });

  return {
    books: () => await getBooks(client),
    book: (id) => await getBooks(client, id),
    bookChapters: (id) => await getBookChapters(client, id),

    movies: () => await getMovies(client),
    movie: (id) => await getMovies(client, id),
    movieQuotes: (id) => await getMovieQuotes(client, id),

    characters: () => await getCharacters(client),
    character: (id) => await getCharacters(client, id),
    characterQuotes: (id) => await getCharacterQuotes(client, id),

    quotes: () => await getQuotes(client),
    quote: (id) => await getQuotes(client, id),

    chapters: () => await getChapters(client),
    chapter: (id) => await getChapter(client, id)
  };
};

export default theOne;
