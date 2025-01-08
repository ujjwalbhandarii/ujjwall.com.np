import Link from 'next/link';

import { Container } from '@/components/utility';
import { ProjectsCard } from '@/components/utils/projectsCard';
import { WORKS_PAGINATED } from '@/constants/landing-page.constants';

export async function Works() {
  return (
    <section
      id='works'
      className='works'
    >
      <Container>
        <div className='works__wrapper'>
          <h2 className='works--heading section--heading'>Featured Works</h2>
          <div className='works__main'>
            {WORKS_PAGINATED.map(({ ...project }) => (
              <ProjectsCard
                {...project}
                key={project.id}
              />
            ))}
          </div>
          <Link
            href='/projects'
            className='works--link'
          >
            All Project 🚀
          </Link>
        </div>
      </Container>
    </section>
  );
}
