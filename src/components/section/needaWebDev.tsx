import React from 'react';
import Link from 'next/link';
import Container from '@/components/utils/container';

export const NeedAWebDev = () => {
  return (
    <>
      <section
        className='contact'
        id='contact'
      >
        <Container>
          <div className='contact__content'>
            <p>
              {CONTACT.first}
              <br />
              {CONTACT.second}
              <br />
              {CONTACT.third}
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
    </>
  );
};

const CONTACT = {
  first: 'NEED A',
  second: 'WEB DEVELOPER?',
  third: "LET'S BUILD SOMETHING!",
};
