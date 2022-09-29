const createURL = (endpoint, id) => {
  if (id) {
    return `/${endpoint}/${id}`;
  } else {
    return `/${endpoint}`;
  }
}

let queryParams = '';
const createParams = (params) => {
  for (const p in params) {
    const paramVal = params[p];
    const criteria = paramVal.criteria;
    const value = paramVal.value;

    if (!queryParams) addToQuery('?');
    if (queryParams.length > 1) addToQuery('&');

    if (p === 'limit' || p === 'page' || p === 'offset') {
      addToQuery(`${p}=${paramVal}`);
    } else if (p === 'asc' || p === 'desc') {
      addToQuery(`sort=${paramVal}:${p}`);
    } else if (p === 'match' || p === 'include' || p === 'regex') {
      addToQuery(`${criteria}=${value}`);
    } else if (p === 'negateMatch' || p === 'exclude' || p === 'negateRegex') {
      addToQuery(`${criteria}!=${value}`);
    } else if (p === 'exists') {
      addToQuery(paramVal);
    } else if (p === 'doesntExist') {
      addToQuery(`!${paramVal}`);
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
  queryParams += newParam;
}

export { createURL, createParams };
