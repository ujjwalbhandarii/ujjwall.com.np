const AUTH_ROUTES = {
  LOGIN: '/auth/login',
};

const PUBLIC_ROUTES = {
  BLOG: '/blog',
  CONTACT: '/contact',
  PROJECTS: '/projects',
};

export const ROUTES = Object.freeze({
  HOME: '/',
  AUTH: AUTH_ROUTES,
  PUBLIC: PUBLIC_ROUTES,
});
