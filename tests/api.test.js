import theOne from '../src';

const api = theOne(process.env.TOKEN);

describe('Book methods', () => {
  it('should return a list of all LotR books if no id provided', async () => {
    const books = await api.books();
    console.log('books ', books.data);
    expect(books.data.total).toBe(3);
  });


});

