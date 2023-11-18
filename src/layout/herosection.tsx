import Link from 'next/link';
import Image from 'next/image';

import Container from '@/utils/container';
import BottomAside from '@/components/bottomAside';

import { BsGithub } from 'react-icons/bs';
import { BsTwitch } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { GrFacebook } from 'react-icons/gr';
import { GrInstagram } from 'react-icons/gr';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

export function Herosection() {
	return (
		<section className='herosection'>
			<Container>
				<div className='herosection__wrapper text-slate-100'>
					<main className='herosection__info'>
						<strong>
							<h1 className='herosection--h1'>Ujjwal Bhandari.</h1>
						</strong>
						<div className='herosection__more'>
							<div className='herosection__more__inside'>
								<figure>
									<Image
										src='/online.png'
										alt='ujjwaal bhandari is online for small to medium sized projects.'
										width={10}
										height={10}
									/>
								</figure>
								<span>Available for small to large sized projects.</span>
							</div>
							<p className='herosection__more--paragraph'>
								A Full Stack Web Developer 🚀 with over a year of hands-on experience in
								Next.js, Nest.js, React, Prisma, PostgreSQL, and MongoDB. I excel in
								crafting dynamic applications and navigating the software development
								life cycle.
							</p>
							<p className='herosection__more--paragraph'>
								I&apos;m Currently building
								<a href='#' target='__blank'>
									Nepwonders.
								</a>
							</p>
						</div>

						<Link href='/contact' className='herosection--link'>
							Say hello
						</Link>
					</main>

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
								<GrFacebook />
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
