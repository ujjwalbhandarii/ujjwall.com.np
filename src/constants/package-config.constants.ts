import rehypeSlug from 'rehype-slug';
import sanitizeHTML from 'sanitize-html';
import { MDXRemoteProps } from 'next-mdx-remote/rsc';
import { NextTopLoaderProps } from 'nextjs-toploader';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import { Video } from '@/components/ui/video';
import { Image } from '@/components/ui/image';
import rehypeHighlight from 'rehype-highlight';

const NEXTTOPLOADER_CONFIG = {
  crawl: true,
  easing: 'ease',
  color: '#01e0c8',
  showSpinner: true,
} satisfies NextTopLoaderProps;

const DEFAULT_SANITIZE_OPTION = {
  allowedTags: [
    'u',
    's',
    'p',
    'a',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'ul',
    'ol',
    'br',
    'li',
    'em',
    'tr',
    'th',
    'td',
    'img',
    'div',
    'sub',
    'sup',
    'col',
    'span',
    'tbody',
    'table',
    'iframe',
    'strong',
    'colgroup',
    'blockquote',
  ],
  allowedAttributes: {
    iframe: [
      'src',
      'width',
      'allow',
      'title',
      'height',
      'frameborder',
      'allowfullscreen',
    ],
    div: ['class'],
    pre: ['spellcheck'],
    img: ['src', 'alt'],
    a: ['href', 'rel', 'target'],
  },
} satisfies sanitizeHTML.IOptions;

const COMPILE_MDX_DEFAULTS = {
  source: '',
  components: {
    Video,
    Image,
  },
  options: {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [
        rehypeHighlight,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
          },
        ],
      ],
    },
  },
} satisfies MDXRemoteProps;

export { COMPILE_MDX_DEFAULTS, DEFAULT_SANITIZE_OPTION, NEXTTOPLOADER_CONFIG };
