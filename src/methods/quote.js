import { createURL, createParams } from '../utils/urls';

const getQuotes = (client, id, params) => {
  const url = createURL('quote', id);
  const queryParams = params ? createParams(params) : '';
  return client.get(url + queryParams)
    .then(res => res)
    .catch(err => { throw err });
}

export { getQuotes };
