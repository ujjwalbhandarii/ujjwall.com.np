import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';

import { HeaderTogglerT } from './header';
import { HEADER_LINKS } from '@/constants/landing-page.constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';

type HeaderLinksProps = HeaderTogglerT & {};

export default function HeaderLinks({ show, setShow }: HeaderLinksProps) {
  const pathname = usePathname();
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
              className={cn(
                'header--link px-4 py-2 text-slate-100',
                pathname === href && 'bg-white/10',
              )}
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
