import { Metadata } from 'next';

import { Container } from '@/components/utility';
import { WORKS } from '@/constants/landing-page.constants';
import { ProjectsCard } from '@/components/utils/projectsCard';

export const metadata: Metadata = {
  title: 'Ujjwal Bhandari - Projects🚀',
  description:
    'Ujjwal Bhandari a solo Web developer specializing in Next.js, NestJS, React, SCSS, Framer Motion, and Docker. Explore projects where seamless React interfaces meet robust NestJS servers, styled with SCSS, animated with Framer Motion, and containerized with Docker. Lets connect and turn your ideas into extraordinary online experiences!',
  alternates: {
    canonical: 'https://www.ujjwall.com.np/projects',
  },
};

export default function page() {
  return (
    <section className='projects'>
      <Container>
        <div className='projects__wrapper'>
          <div className='projects__heading'>
            <h2 className='projects--heading section--heading'>All projects</h2>
            <p>
              <strong>Ujjwal</strong> is a solo Web developer specializing in
              Next.js, NestJS, React, SCSS, Framer Motion, and Docker. Explore
              projects where seamless React interfaces meet robust NestJS
              servers, styled with SCSS, animated with Framer Motion, and
              containerized with Docker. Let's connect and turn your ideas into
              extraordinary online experiences!
            </p>
          </div>
          <main className='projects__main'>
            {WORKS.map((work) => (
              <ProjectsCard
                {...work}
                key={work.id}
              />
            ))}
          </main>
        </div>
      </Container>
    </section>
  );
}
