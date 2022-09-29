const getCharacters = (client, id) => {
  const url = id ? `/character/${id}` : '/character';
  return client.get(url)
    .then(res => res)
    .catch(err => { throw err });
}

const getCharacterQuotes = (client, id) => {
  return client.get(`/character/${id}/quote`)
    .then(res => res)
    .catch(err => { throw err });
}

export { getCharacters, getCharacterQuotes };
