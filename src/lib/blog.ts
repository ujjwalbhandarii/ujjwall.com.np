import { compileMDX } from 'next-mdx-remote/rsc';

import {
  API,
  MDX_NOTFOUND,
  BLOG_REQUEST_HEADERS,
} from '@/constants/api.constants';
import { FILE, SORT } from '@/constants/utils.constants';
import { MDX_EXTENSION } from '@/constants/regex.constants';
import { COMPILE_MDX_DEFAULTS } from '@/constants/package-config.constants';

/**
 *Fetches the post by filename
 *
 * @param {string} fileName - The name of the post file (without extension)
 * @returns {Promise<BlogPostT | undefined>} - A promise that resolves to the blog post (BlogPostT)
 */
export async function getPostByName(
  fileName: string,
): Promise<BlogPostT | undefined> {
  const getPostByNameAPIRoute = API.BLOG.GET_POST_BY_NAME(fileName);

  const res = await fetch(getPostByNameAPIRoute, {
    headers: BLOG_REQUEST_HEADERS,
  });

  if (!res.ok) return undefined;

  const rawMDX = await res.text();

  if (rawMDX === MDX_NOTFOUND) return undefined;

  const { frontmatter, content } = await compileMDX<MDXT>({
    ...COMPILE_MDX_DEFAULTS,
    source: rawMDX,
  });

  const id = fileName.replace(MDX_EXTENSION.REPLACE, '');

  const meta = {
    id,
    date: frontmatter.date,
    tags: frontmatter.tags,
    title: frontmatter.title,
  } as BlogMetaT;

  return {
    meta,
    content,
  } as BlogPostT;
}

/**
 * Fetches all post metadata
 *
 * @returns {Promise<BlogMetaT[] | undefined>} - A Promise that resolves Blog posts metadata
 */
export async function getPosts(): Promise<BlogMetaT[] | undefined> {
  const getPostsMetaAPIRoute = API.BLOG.GET_POST_METADATA;

  const res = await fetch(getPostsMetaAPIRoute, {
    headers: BLOG_REQUEST_HEADERS,
  });

  if (!res.ok) return undefined;

  const repoFiles: GithubFiletreeT = await res.json();

  const files = repoFiles.tree
    .map((obj) => obj.path)
    .filter((path) => path.endsWith(FILE.MDX.EXTENSION));

  const posts: BlogMetaT[] = [];

  for (const file of files) {
    const post = await getPostByName(file);

    if (post) {
      const { meta } = post;
      posts.push(meta);
    }
  }

  const sortedPosts = posts.sort((a, b) =>
    a.date < b.date ? SORT.DESC : SORT.ASC,
  );

  return sortedPosts;
}
