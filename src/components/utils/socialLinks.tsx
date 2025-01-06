import Link from 'next/link';
import { SOCIAL_LINKS } from '@/constants/landingpage.constants';

export function SoialLinks() {
  return (
    <div className='herosection__social'>
      <div className='herosection__sociallinks'>
        {SOCIAL_LINKS.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
