import Link from 'next/link';
import { Container } from '@/components/utils/container';
import { WORKS__PAGINATED } from '@/constants/landingpage.constants';
import ProjectsCard from '@/components/utils/projectsCard';

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
            {WORKS__PAGINATED.map(
              ({
                id,
                imageUrl,
                alt,
                description,
                stackUsed,
                websiteName,
                liveLink,
              }) => {
                return (
                  <ProjectsCard
                    key={id}
                    imageUrl={imageUrl}
                    alt={alt}
                    description={description}
                    stackUsed={stackUsed}
                    websiteName={websiteName}
                    liveLink={liveLink}
                  />
                );
              },
            )}
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
