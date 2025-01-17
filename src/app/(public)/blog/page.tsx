import { Metadata } from 'next';
import { Suspense } from 'react';

import { Blogs } from './_blogs';
import { getPosts } from '@/lib/blog';
import { Container } from '@/components/utility';
import { HEADERS_META } from '@/constants/meta.constants';

export const metadata: Metadata = HEADERS_META.BLOG;

export default async function BlogsPage() {
  const blogs = await getPosts();

  return (
    <section className='contactpage'>
      <Container>
        <div className='contactpage__wrapper'>
          <Suspense fallback={<>loading...</>}>
            <Blogs blogs={blogs} />
          </Suspense>
        </div>
      </Container>
    </section>
  );
}
