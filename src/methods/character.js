import { createURL, createParams } from '../utils/urls';

const getCharacters = (client, id, params) => {
  const url = createURL('character', id);
  const queryParams = params ? createParams(params) : '';
  return client.get(url + queryParams)
    .then(res => res)
    .catch(err => { throw err });
}

const getCharacterQuotes = (client, id, params) => {
  const url = `/character/${id}/quote`;
  const queryParams = params ? createParams(params) : '';
  return client.get(url + queryParams)
    .then(res => res)
    .catch(err => { throw err });
}

export { getCharacters, getCharacterQuotes };
