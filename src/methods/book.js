import { createURL, createParams } from '../utils/urls';

const getBooks = (client, id, params) => {
  const url = createURL('book', id);
  const queryParams = params ? createParams(params) : '';
  return client.get(url + queryParams)
    .then(res => res)
    .catch(err => { throw err });
}

const getBookChapters = (client, id, params) => {
  const url = `/book/${id}/chapter`;
  const queryParams = params ? createParams(params) : '';
  return client.get(url + queryParams)
    .then(res => res)
    .catch(err => { throw err });
}

export { getBooks, getBookChapters };
