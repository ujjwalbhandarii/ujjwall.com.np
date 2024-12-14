import Link from 'next/link';

import { BsGithub } from 'react-icons/bs';
import { BsTwitch } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';

export default function HeroSocials() {
  return (
    <div className='herosection__social'>
      <div className='herosection__sociallinks'>
        <Link
          aria-label='ujjwalbhandari github account'
          href='https://github.com/ujjwalbhandarii'
          target='_blank'
        >
          <BsGithub />
        </Link>

        <Link
          aria-label='ujjwalbhandari twitch account'
          href='https://www.twitch.tv/ujjwalbhandari'
          target='_blank'
        >
          <BsTwitch />
        </Link>

        <Link
          aria-label='ujjwalbhandari linkedin'
          href='https://www.linkedin.com/in/ujjwalbhandarii/'
          target='_blank'
        >
          <BsLinkedin />
        </Link>

        <Link
          aria-label='ujjwal facebook account'
          href='https://www.facebook.com/ujjwalbhandariiii'
          target='_blank'
        >
          <BsFacebook />
        </Link>

        <Link
          aria-label='ujjwal bhandari instagram account'
          href='https://www.instagram.com/ujjwalbhandarri/'
          target='_blank'
        >
          <GrInstagram />
        </Link>
      </div>
    </div>
  );
}
