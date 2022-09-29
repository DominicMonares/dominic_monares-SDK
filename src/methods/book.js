import axios from 'axios';

const getBooks = (client, id) => {
  const url = id ? `/book/${id}` : '/book';
  return client.get(url)
    .then(res => res)
    .catch(err => { throw err });
}

const getBookChapters = (client, id) => {
  return client.get(`/book/${id}/chapter`)
    .then(res => res)
    .catch(err => { throw err });
}

export { getBooks, getBookChapters };
