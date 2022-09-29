# The Lord of the Rings SDK
This SDK utilizes [The One API](https://the-one-api.dev/) and provides methods for easy queries.

## Installation
```
npm install dominicmonares-sdk
```

You will need to create an account with [The One API](https://the-one-api.dev/) in order to receive an API key. The API key must be stored in your .env file as TOKEN.

## Usage

Once initialized, you can use all methods through `theOne` object.
```
import theOne from 'dominic_monares-SDK';

const api = theOne(TOKEN);

const book = api.books(params);
```

`params` is an optional parameter used to define query parameters, based on [The One API's documentation](https://the-one-api.dev/documentation)
```
const params = {
  limit: Number, // limit results
  page: Number, // choose page to query
  offset: Number, // choose number of records to be skipped
  asc: String, // sort by key in ascending order
  desc: String, // sort by key in descending order 
  match: { criteria: String, value: String }, // select records where criteria (key) matches value
  include: { criteria: String, value: String }, // select records where criteria (keys) match values
  exclude: { criteria: String, value: String }, // select records where criteria (keys) don't match values
  negateMatch: { criteria: String, value: String }, // select records where criteria (key) doesn't match value
  regex: { criteria: String, value: Regex }, // select records where regex matches
  negateRegex: { criteria: String, value: Regex }, // select records where regex doesn't match
  exists: String, // check if key exists
  doesntExist: String, // check if key doesn't exist
  lessThan: { criteria: String, value: Number }, // select all values less than defined value
  lessEqual: { criteria: String, value: Number }, // select all values less than or equal to defined value
  greaterThan: { criteria: String, value: Number }, // select all values greater than defined value
  greaterEqual: { criteria: String, value: Number } // select all values greater than or equal to defined value
}
```

## Testing
After you've cloned the repo, install all dependencies:
```
npm install
```

Once installed, run:
```
npm test
```

## Building
```
npm run build
```
