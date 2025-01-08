const METHOD = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
} as const;

const CONTENT_TYPE = {
  JSON: 'application/json',
} as const;

export { METHOD, CONTENT_TYPE };
