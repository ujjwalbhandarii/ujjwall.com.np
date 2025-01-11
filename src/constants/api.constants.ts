const METHOD = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
} as const;

const CONTENT_TYPE = {
  JSON: 'application/json',
  GITHUB_JSON: 'application/vnd.github+json',
} as const;

const MDX_NOTFOUND = '404: Not Found';

const GITHUB_REPO = 'mdx';
const GITHUB_USERNAME = 'ujjwalbhandarii';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const BLOG_REQUEST_HEADERS = {
  'X-GitHub-Api-Version': '2022-11-28',
  'Accept': CONTENT_TYPE.GITHUB_JSON,
  'Authorization': `Bearer ${GITHUB_TOKEN}`,
  'User-Agent': 'Awesome-Octocat-App',
} as const;

const API = {
  BLOG: {
    GET_POST_METADATA: `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/git/trees/master?recursive=1`,
    GET_POST_BY_NAME: (fileName: string) =>
      `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${GITHUB_REPO}/master/${fileName}`,
  },
} as const;

export {
  API,
  METHOD,
  CONTENT_TYPE,
  MDX_NOTFOUND,
  GITHUB_TOKEN,
  GITHUB_REPO,
  GITHUB_USERNAME,
  BLOG_REQUEST_HEADERS,
};
