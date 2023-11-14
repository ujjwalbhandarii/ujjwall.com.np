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
				<div className='herosection__wrapper'>
					<main className='herosection__info'>
						<h3 className='herosection--h3 text-lightBlue dark:text-lightGreenBlue '>
							Hi, my name is
						</h3>
						<h1 className='herosection--h1'>Ujjwal Bhandari.</h1>
						<h5 className='herosection--h5 text-darkGray dark:text-lightGray'>
							{exploring}
						</h5>
					</main>

					<main className='herosection__more'>
						<p className='text-darkGray dark:text-lightGray'>
							I’m a{' '}
							<span className='text-lightBlue dark:text-lightGreenBlue'>
								Full Stack Web Developer.
							</span>
						</p>
						<p className='herosection__more--workingat text-darkGray dark:text-lightGray'>
							Currently working at
							<span className='text-lightBlue dark:text-lightGreenBlue'>_____</span>
						</p>
					</main>

					<div className='herosection__social'>
						<h6 className='herosection--h6'>Connect with me</h6>
						<div className='herosection__sociallinks'>
							<Link href='#'>
								<BsGithub />
							</Link>

							<Link href='#'>
								<BsTwitch />
							</Link>

							<Link href='#'>
								<BsLinkedin />
							</Link>

							<Link href='#'>
								<GrFacebook />
							</Link>

							<Link href='#'>
								<GrInstagram />
							</Link>
						</div>
					</div>

					<div className='herosection__arrow text-darkGray dark:text-lightGray'>
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
