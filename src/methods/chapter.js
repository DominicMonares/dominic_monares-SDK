const getChapters = (client, id) => {
  const url = id ? `/chapter/${id}` : '/chapter';
  return client.get(url)
    .then(res => res)
    .catch(err => { throw err });
}

export { getChapters };
