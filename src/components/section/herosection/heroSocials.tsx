import Link from 'next/link';

import { BsGithub } from 'react-icons/bs';
import { BsTwitch } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';

const SOCIAL_LINKS = [
  {
    icon: <BsGithub />,
    title: 'Ujjwal Bhandari Github',
    url: 'https://github.com/ujjwalbhandarii',
  },
  {
    icon: <GrInstagram />,
    title: 'Ujjwal Bhandari Instagram',
    url: 'https://www.instagram.com/ujjwalbhandarii/',
  },
  {
    icon: <BsTwitch />,
    title: 'Ujjwal Bhandari Twitch',
    url: 'https://www.twitch.tv/ujjwalbhandari',
  },
  {
    icon: <BsLinkedin />,
    title: 'Ujjwal Bhandari Linkedin',
    url: 'https://www.linkedin.com/in/ujjwalbhandarii/',
  },
  {
    icon: <BsFacebook />,
    title: 'Ujjwal Bhandari Facebook',
    url: 'https://www.facebook.com/ujjwalbhandariiii',
  },
];

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
