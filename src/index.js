import axios from 'axios';

import { baseURL } from '../config/urls';
import * as book from './methods/book';
import * as movie from './methods/movie';
import * as character from './methods/character';
import * as quote from './methods/quote';
import * as chapter from './methods/chapter';

const theOne = (token) => {
  const client = axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return {
    books: (params) => book.getBooks(client, null, params),
    book: (id, params) => book.getBooks(client, id, params),
    bookChapters: (id, params) => book.getBookChapters(client, id, params),

    movies: (params) => movie.getMovies(client, null, params),
    movie: (id, params) => movie.getMovies(client, id, params),
    movieQuotes: (id, params) => movie.getMovieQuotes(client, id, params),

    characters: (params) => character.getCharacters(client, null, params),
    character: (id, params) => character.getCharacters(client, id, params),
    characterQuotes: (id, params) => character.getCharacterQuotes(client, id, params),

    quotes: (params) => quote.getQuotes(client, null, params),
    quote: (id, params) => quote.getQuotes(client, id, params),

    chapters: (params) => chapter.getChapters(client, null, params),
    chapter: (id, params) => chapter.getChapters(client, id, params)
  };
};

export default theOne;
