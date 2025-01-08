const BASE_PATHS = {
  API: '/api',
  AUTH: '/auth',
};

const AUTH_ROUTES = {
  LOGIN: `${BASE_PATHS.AUTH}/login`,
};

const PUBLIC_ROUTES = {
  BLOG: '/blog',
  CONTACT: '/contact',
  PROJECTS: '/projects',
};

const API_ROUTES = {
  SEND_EMAIL: `${BASE_PATHS.API}/send-email`,
};

export const ROUTES = Object.freeze({
  HOME: '/',
  API: API_ROUTES,
  AUTH: AUTH_ROUTES,
  PUBLIC: PUBLIC_ROUTES,
});
