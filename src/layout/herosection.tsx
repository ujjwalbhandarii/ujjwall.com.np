import Link from 'next/link';

import Container from '@/utils/container';
import BottomAside from '@/components/bottomAside';
import { HEROSECTION_DATA } from '@/data/landingpage';

import { BsGithub } from 'react-icons/bs';
import { BsTwitch } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { GrFacebook } from 'react-icons/gr';
import { GrInstagram } from 'react-icons/gr';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

export function Herosection() {
	const { exploring } = HEROSECTION_DATA;

	return (
		<section className='herosection'>
			<Container>
				<div className='herosection__wrapper text-slate-100'>
					<main className='herosection__info'>
						<h3 className='herosection--h3 text-lightGreenBlue dark:text-lightGreenBlue '>
							Hi, my name is
						</h3>
						<h1 className='herosection--h1'>Ujjwal Bhandari.</h1>
						<h5 className='herosection--h5 text-lightGray dark:text-lightGray'>
							{exploring}
						</h5>
					</main>

					<main className='herosection__more'>
						<p className='text-lightGray dark:text-lightGray'>
							I’m a{' '}
							<span className='text-lightGreenBlue dark:text-lightGreenBlue'>
								Full Stack Web Developer.
							</span>
						</p>
						<p className='herosection__more--workingat text-darkGray dark:text-lightGray'>
							Currently working at
							<span className='text-lightGreenBlue dark:text-lightGreenBlue'>
								Butwal Web Pvt Ltd.
							</span>
						</p>
					</main>

					<div className='herosection__social'>
						<h6 className='herosection--h6 '>Connect with me</h6>
						<div className='herosection__sociallinks'>
							<Link href='https://github.com/ujjwalbhandarii' target='_blank'>
								<BsGithub />
							</Link>

							<Link href='https://www.twitch.tv/ujjwalbhandari' target='_blank'>
								<BsTwitch />
							</Link>

							<Link
								href='https://www.linkedin.com/in/ujjwalbhandarii/'
								target='_blank'
							>
								<BsLinkedin />
							</Link>

							<Link href='https://www.facebook.com/ujjwalbhandariiii' target='_blank'>
								<GrFacebook />
							</Link>

							<Link href='https://www.instagram.com/ujjwalbhandarri/' target='_blank'>
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
