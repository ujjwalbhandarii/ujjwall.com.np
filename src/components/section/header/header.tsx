'use client';

import { useState } from 'react';

import Toggler from './toggler';
import HeaderLogo from './headerLogo';
import HeaderLinks from './headerLinks';
import Container from '@/components/utils/container';

export default function Header() {
  const [show, setShow] = useState<Boolean>(false);

  return (
    <header className='header'>
      <Container>
        <div className='header__wrapper'>
          <HeaderLogo />
          <HeaderLinks
            show={show}
            setShow={setShow}
          />
          <Toggler
            show={show}
            setShow={setShow}
          />
        </div>
      </Container>
    </header>
  );
}
