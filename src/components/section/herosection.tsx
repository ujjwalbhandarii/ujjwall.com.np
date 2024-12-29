import Link from 'next/link';
import Image from 'next/image';

import Container from '@/components/utils/container';
import BottomAside from '@/components/utils/bottomAside';

import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import HeroSocials from '@/components/section/herosection/heroSocials';

export function Herosection() {
  return (
    <section className='herosection text-slate-50'>
      <Container>
        <div className='herosection__wrapper'>
          <div className='herosection__info'>
            <strong>
              <h1 className='herosection--h1'>Ujjwal Bhandari.</h1>
            </strong>
            <div className='herosection__more'>
              <div className='herosection__more__inside'>
                <figure>
                  <Image
                    src='/assets/online.png'
                    alt='ujjwal bhandari is online for small to medium sized projects.'
                    width={10}
                    height={10}
                    title='Ujjwal Bhandari, is online for small to medium sized projects.'
                    loading='eager'
                  />
                </figure>
                <span>Available for work & collaboration.</span>
              </div>
              <article>
                <p className='herosection__more--paragraph'>
                  I&apos;m a Full Stack Web Developer 🚀 and a freelancer with
                  over a year of hands-on experience in Next.js, Nest.js, React,
                  Prisma, PostgreSQL, and MongoDB. I excel in crafting dynamic
                  applications and navigating the software development life
                  cycle.
                </p>
              </article>
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
          <HeroSocials />
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
