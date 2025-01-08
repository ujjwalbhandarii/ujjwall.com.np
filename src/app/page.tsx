import Link from 'next/link';
import Image from 'next/image';

import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

import { Container } from '@/components/utility';
import { sanitizeHtml } from '@/utils/sanitize-html';
import { SKILLS } from '@/constants/landing-page.constants';
import { SoialLinks } from '@/components/utils/socialLinks';
import { BottomAside } from '@/components/utils/bottomAside';
import { ABOUT_ME } from '@/constants/landing-page.constants';
import { Experience } from '@/components/section/experience';
import { ProjectsCard } from '@/components/utils/projectsCard';
import { Testimonials } from '@/components/section/testimonials';
import { WORKS_PAGINATED } from '@/constants/landing-page.constants';

export default function Home() {
  return (
    <>
      <Herosection />
      <About />
      <Experience />
      <Tools />
      <Works />
      <Testimonials />
      <NeedAWebDev />
    </>
  );
}

function Herosection() {
  return (
    <section className='herosection text-slate-50'>
      <Container>
        <div className='herosection__wrapper'>
          <div className='herosection__info'>
            <h1 className='herosection--h1'>Ujjwal Bhandari.</h1>
            <div className='herosection__more'>
              <div className='herosection__more__inside'>
                <figure>
                  <Image
                    width={10}
                    height={10}
                    loading='eager'
                    src='/assets/online.png'
                    alt='ujjwal bhandari is online for small to medium sized projects.'
                    title='Ujjwal Bhandari, is online for small to medium sized projects.'
                  />
                </figure>
                <span>Available for work & collaboration.</span>
              </div>
              <p className='herosection__more--paragraph'>
                I&apos;m a Full Stack Web Developer 🚀 and a freelancer with
                over a year of hands-on experience in Next.js, Nest.js, React,
                Prisma, PostgreSQL, and MongoDB. I excel in crafting dynamic
                applications and navigating the software development life cycle.
              </p>
              <p className='herosection__more--paragraph'>
                I&apos;m currently building
                <a
                  href='https://nepwonders.com/'
                  target='_blank'
                  aria-label='my current on going project redirect'
                >
                  Nepwonders.
                </a>
              </p>
            </div>
            <Link
              href='/contact'
              className='herosection--link'
            >
              Say Hello!
            </Link>
          </div>
          <SoialLinks />
          <div className='herosection__arrow text-lightGray dark:text-lightGray'>
            <MdKeyboardDoubleArrowDown />
          </div>
        </div>
        <div className='relative'>
          <BottomAside />
        </div>
      </Container>
    </section>
  );
}

function About() {
  const RenderAboutme = () => (
    <div
      className='about__content__group'
      dangerouslySetInnerHTML={{ __html: sanitizeHtml(ABOUT_ME) }}
    />
  );

  return (
    <section
      className='about'
      id='about'
    >
      <Container>
        <div className='about__wrapper'>
          <h2 className='about--heading section--heading'>About Me</h2>
          <main className='about__main'>
            <RenderAboutme />
            <div className='about__image'>
              <figure className='about--figure'>
                <Image
                  src='/assets/dp.jpg'
                  alt='ujjwal bhandari photo'
                  quality={100}
                  width={400}
                  height={500}
                  className='about--image'
                  title='Ujjwal Bhandari, Self-portrait.'
                  loading='lazy'
                />
                <div className='about__image-outlinefilled hover1'></div>
                <div className='about__image-outlineshade hover2'></div>
              </figure>
            </div>
          </main>
        </div>
      </Container>
    </section>
  );
}

function Tools() {
  return (
    <section className='bg-backgroundColorDarker'>
      <Container>
        <div className='md:py-30 flex flex-col items-center justify-center py-16 md:min-h-[25rem] lg:px-32'>
          <div className='mb-8 text-center'>
            <h2 className='section--heading'>Tools and Expertise</h2>
          </div>
          <div className='flex min-h-fit flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className='rounded border border-teal-300 bg-backgroundColorDark px-3 py-2 text-sm hover:bg-backgroundColorDarker md:px-8 md:text-base'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Works() {
  return (
    <section
      id='works'
      className='works'
    >
      <Container>
        <div className='works__wrapper'>
          <h2 className='works--heading section--heading'>Featured Works</h2>
          <div className='works__main'>
            {WORKS_PAGINATED.map((work) => (
              <ProjectsCard
                {...work}
                key={work.id}
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

const NeedAWebDev = () => {
  return (
    <section
      className='contact'
      id='contact'
    >
      <Container>
        <div className='contact__content'>
          <p>
            NEED A
            <br />
            WEB DEVELOPER?
            <br />
            LET'S BUILD SOMETHING!
          </p>
        </div>
        <div className='contact__button'>
          <Link
            href='/contact'
            className='text-slate-50'
          >
            Get In Touch
          </Link>
        </div>
      </Container>
    </section>
  );
};
