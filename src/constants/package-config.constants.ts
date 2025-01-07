import sanitizeHTML from 'sanitize-html';
import { NextTopLoaderProps } from 'nextjs-toploader';

export const NEXTTOPLOADER_CONFIG = {
  crawl: true,
  easing: 'ease',
  color: '#01e0c8',
  showSpinner: true,
} satisfies NextTopLoaderProps;

export const DEFAULT_SANITIZE_OPTION = {
  allowedTags: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'img',
    'ul',
    'ol',
    'li',
    'strong',
    'em',
    'u',
    's',
    'blockquote',
    'sub',
    'sup',
    'span',
    'p',
    'br',
    'a',
    'iframe',
    'table',
    'colgroup',
    'div',
    'col',
    'tbody',
    'tr',
    'th',
    'td',
  ],
  allowedAttributes: {
    a: ['href', 'rel', 'target'],
    pre: ['spellcheck'],
    img: ['src', 'alt'],
    iframe: [
      'src',
      'width',
      'height',
      'frameborder',
      'allowfullscreen',
      'allow',
      'title',
    ],
    div: ['class'],
  },
} satisfies sanitizeHTML.IOptions;
