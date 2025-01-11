import { compileMDX } from 'next-mdx-remote/rsc';

import {
  API,
  MDX_NOTFOUND,
  BLOG_REQUEST_HEADERS,
} from '@/constants/api.constants';
import { MDX_EXTENSION } from '@/constants/regex.constants';
import { COMPILE_MDX_DEFAULTS } from '@/constants/package-config.constants';

type Filetree = {
  tree: [
    {
      path: string;
    },
  ];
};

type MDX = {
  date: string;
  title: string;
  tags: string[];
};

export async function getPostByName(
  fileName: string,
): Promise<BlogPost | undefined> {
  const getPostByNameAPIRoute = API.BLOG.GET_POST_BY_NAME(fileName);

  const res = await fetch(getPostByNameAPIRoute, {
    headers: BLOG_REQUEST_HEADERS,
  });

  if (!res.ok) return undefined;

  const rawMDX = await res.text();

  if (rawMDX === MDX_NOTFOUND) return undefined;

  const { frontmatter, content } = await compileMDX<MDX>({
    ...COMPILE_MDX_DEFAULTS,
    source: rawMDX,
  });

  const id = fileName.replace(MDX_EXTENSION.REPLACE, '');

  return {
    meta: {
      id,
      date: frontmatter.date,
      tags: frontmatter.tags,
      title: frontmatter.title,
    },
    content,
  } as BlogPost;
}

export async function getPostsMeta(): Promise<BlogMeta[] | undefined> {
  const getPostsMetaAPIRoute = API.BLOG.GET_POST_METADATA;

  const res = await fetch(getPostsMetaAPIRoute, {
    headers: BLOG_REQUEST_HEADERS,
  });

  if (!res.ok) return undefined;

  const repoFiletree: Filetree = await res.json();

  const filesArray = repoFiletree.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith('.mdx'));

  const posts: BlogMeta[] = [];

  for (const file of filesArray) {
    const post = await getPostByName(file);

    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
