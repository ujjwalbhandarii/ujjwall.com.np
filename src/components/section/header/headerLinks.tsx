import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';

import { HeaderTogglerT } from './header';
import { HEADER_LINKS } from '@/constants/landing-page.constants';

type HeaderLinksProps = HeaderTogglerT & {};

export default function HeaderLinks({ show, setShow }: HeaderLinksProps) {
  return (
    <div className={`header__group ${show ? 'show' : 'dontshow'}`}>
      <div className='header__togglers header__group__togglers'>
        <RxCross2
          className={`header--svg white ${show ? 'svgshow' : 'svghidden'}`}
          onClick={() => setShow(!show)}
        />
      </div>
      <ul className='header__links'>
        {HEADER_LINKS.map(({ id, name, href }) => (
          <li key={id}>
            <Link
              href={href}
              className='header--link'
              onClick={() => setShow(!show)}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
