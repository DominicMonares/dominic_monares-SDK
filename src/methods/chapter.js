import { createURL, createParams } from '../utils/urls';

const getChapters = (client, id, params) => {
  const url = createURL('chapter', id);
  const queryParams = params ? createParams(params) : '';
  return client.get(url + queryParams)
    .then(res => res)
    .catch(err => { throw err });
}

export { getChapters };
