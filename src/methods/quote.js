const getQuotes = (client, id) => {
  const url = id ? `/quote/${id}` : '/quote';
  return client.get(url)
    .then(res => res)
    .catch(err => { throw err });
}

export { getQuotes };
