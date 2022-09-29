const createURL = (endpoint, id) => {
  if (id) {
    return `/${endpoint}/${id}`;
  } else {
    return `/${endpoint}`;
  }
}

const createParams = (params) => {
  let queryParams = '';
  for (const p in params) {
    const paramVal = params[p];

    if (paramVal.criteria) {
      const criteria = paramVal.criteria;
      const value = paramVal.value;
    }

    if (!queryParams) addToQuery('?');
    if (queryParams.length > 1) addToQuery('&');

    if (p === 'limit' || p === 'page' || p === 'offset') {
      addToQuery(`${p}=${paramVal}`);
    } else if (p === 'asc' || p === 'desc') {
      addToQuery(`sort=${paramVal}:${p}`);
    } else if (p === 'match' || p === 'include') {
      addToQuery(`${criteria}=${value}`);
    } else if (p === 'negateMatch' || p === 'exclude' || p === 'regex' || p === 'negateRegex') {
      addToQuery(`${criteria}!=${value}`);
    } else if (p === 'exists') {
      addToQuery(`${criteria}?${value}`);
    } else if (p === 'doesntExist') {
      addToQuery(`${criteria}?!${value}`);
    } else if (p === 'lessThan') {
      addToQuery(`${criteria}<${value}`);
    } else if (p === 'lessEqual') {
      addToQuery(`${criteria}<=${value}`);
    } else if (p === 'greaterThan') {
      addToQuery(`${criteria}>${value}`);
    } else if (p === 'greaterEqual') {
      addToQuery(`${criteria}>=${value}`);
    }
  }

  return queryParams;
}

const addToQuery = (newParam) => {
  queryParams.concat(newParam);
}

export { createURL, createParams };
