import process from 'process';
import * as dotenv from 'dotenv';

import theOne from '../src';

dotenv.config();

const api = theOne(process.env.TOKEN);

describe('Book methods', () => {
  it('should return a list of all LotR books if no id provided', async () => {
    const books = await api.books();
    const masterpieces = ['The Fellowship Of The Ring', 'The Two Towers', 'The Return Of The King'];
    expect(books.data.total).toBe(3);
    expect(books.data.docs.map(b => b.name)).toStrictEqual(masterpieces);
  });

  it('should return a specific book if id provided', async () => {
    const book = await api.book('5cf58077b53e011a64671583');
    const docs = book.data.docs;
    expect(book.data.total).toBe(1);
    expect(docs[0]['name']).toBe('The Two Towers');
  });

  it('should return all chapters from a specific book', async () => {
    const bookChapters = await api.bookChapters('5cf58080b53e011a64671584'); // RotK
    expect(bookChapters.data.total).toBe(19);
    expect(bookChapters.data.docs.pop().chapterName).toBe('The Grey Havens');
  });
});

describe('Movie methods', () => {
  it('should return a list of all LotR and Hobbit movies if no id provided', async () => {
    const movies = await api.movies();
    const docs = movies.data.docs;
    expect(movies.data.total).toBe(8);
    expect(docs[4]['name']).toBe('The Battle of the Five Armies');
  });

  it('should return a specific movie if id provided', async () => {
    const movie = await api.movie('5cd95395de30eff6ebccde58'); // The Unexpected Journey
    const docs = movie.data.docs;
    expect(movie.data.total).toBe(1);
    expect(docs[0]['name']).toBe('The Unexpected Journey');
  });

  it('should return all quotes from a specific movie', async () => {
    const movieQuotes = await api.movieQuotes('5cd95395de30eff6ebccde5c'); // FotR
    const docs = movieQuotes.data.docs;
    expect(movieQuotes.data.total).toBe(507);
    expect(docs[1]['dialog']).toBe('Who is she? This woman you sing of?');
    expect(docs[1]['movie']).toBe('5cd95395de30eff6ebccde5c');
  });
});

describe('Character methods', () => {
  it('should return a list of all characters with metadata', async () => {
    const characters = await api.characters();
    const docs = characters.data.docs;
    expect(characters.data.total).toBe(933);
    expect(docs[0]['name']).toBe('Adanel');
  });

  it('should return a specific character if id provided', async () => {
    const character = await api.character('5cd99d4bde30eff6ebccfbbe'); // Adanel
    const docs = character.data.docs;
    expect(character.data.total).toBe(1);
    expect(docs[0]['name']).toBe('Adanel');
  });

  it('should return all quotes from a specific character', async () => {
    const characterQuotes = await api.characterQuotes('5cd99d4bde30eff6ebccfea4');
    const docs = characterQuotes.data.docs;
    console.log('CHARQUOTES ', docs, characterQuotes.data.total);
    expect(characterQuotes.data.total).toBe(41);
    expect(docs[3]['dialog']).toBe('Save your pity and your mercy. I have no use for it!');
  });
});

describe('Quote methods', () => {
  it('should return a list of all movie quotes if no id provided', async () => {
    const quotes = await api.quotes();
    const docs = quotes.data.docs;
    expect(quotes.data.total).toBe(2390);
    expect(docs[0]['dialog']).toBe('Deagol!');
  });

  it('should return a specific quote if id provided', async () => {
    const quote = await api.quote('5cd96e05de30eff6ebcce7ed');
    const docs = quote.data.docs;
    expect(quote.data.total).toBe(1);
    expect(docs[0]['dialog']).toBe('Why?');
  });
});

describe('Chapter methods', () => {
  it('should return a list of all book chapters if no id provided', async () => {
    const chapters = await api.chapters();
    const docs = chapters.data.docs;
    expect(chapters.data.total).toBe(62);
    expect(docs[0]['chapterName']).toBe('A Long-expected Party');
  });

  it('should return one specific book chapter if id provided', async () => {
    const chapter = await api.chapter('6091b6d6d58360f988133b8d');
    const docs = chapter.data.docs;
    expect(chapter.data.total).toBe(1);
    expect(docs[0]['chapterName']).toBe('Three is Company');
  });
});
