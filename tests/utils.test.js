import { createURL, createParams } from '../src/utils/urls';

describe('createURL', () =>{
  it('should return a proper url if no id provided', () => {
    expect(createURL('book')).toBe('/book');
  });

  it('should return a proper url if id provided', () => {
    expect(createURL('book', 1)).toBe('/book/1');
  });
});

describe('createParams', () => {
  it('should create proper queries for all values', () => {
    const params = {
      limit: 10,
      page: 2,
      offset: 5,
      asc: 'name',
      desc: 'name',
      match: { criteria: 'name', value: 'Frodo' },
      include: { criteria: 'name', value: 'Frodo,Gandalf' },
      exclude: { criteria: 'name', value: 'Frodo' },
      negateMatch: { criteria: 'name', value: 'Frodo,Gandalf' },
      regex: { criteria: 'name', value: /foot/i },
      negateRegex: { criteria: 'name', value: /foot/i },
      exists: 'name',
      doesntExist: 'name',
      lessThan: { criteria: 'budgetInMillions', value: '100' },
      lessEqual: { criteria: 'budgetInMillions', value: '100' },
      greaterThan: { criteria: 'budgetInMillions', value: '100' },
      greaterEqual: { criteria: 'budgetInMillions', value: '100' },
    };
    const result = '?limit=10&page=2&offset=5&sort=name:asc&sort=name:desc&name=Frodo&name=Frodo,Gandalf&name!=Frodo&name!=Frodo,Gandalf&name=/foot/i&name!=/foot/i&name&!name&budgetInMillions<100&budgetInMillions<=100&budgetInMillions>100&budgetInMillions>=100';
    expect(createParams(params)).toBe(result);
  });
});
