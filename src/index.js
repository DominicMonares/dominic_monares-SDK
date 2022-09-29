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
    books: () => book.getBooks(client),
    book: (id) => book.getBooks(client, id),
    bookChapters: (id) => book.getBookChapters(client, id),

    movies: () => movie.getMovies(client),
    movie: (id) => movie.getMovies(client, id),
    movieQuotes: (id) => movie.getMovieQuotes(client, id),

    characters: () => character.getCharacters(client),
    character: (id) => character.getCharacters(client, id),
    characterQuotes: (id) => character.getCharacterQuotes(client, id),

    quotes: () => quote.getQuotes(client),
    quote: (id) => quote.getQuotes(client, id),

    chapters: () => chapter.getChapters(client),
    chapter: (id) => chapter.getChapter(client, id)
  };
};

export default theOne;
