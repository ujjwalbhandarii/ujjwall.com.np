import Link from 'next/link';

import Container from '@/utils/container';
import { HEROSECTION_DATA } from '@/data/landingpage';

import { BsGithub } from 'react-icons/bs';
import { BsTwitch } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { GrFacebook } from 'react-icons/gr';
import { GrInstagram } from 'react-icons/gr';

export function Herosection() {
	const { exploring } = HEROSECTION_DATA;

	return (
		<section className='herosection'>
			<Container>
				<div className='herosection__wrapper'>
					<main className='herosection__info'>
						<h3 className='herosection--h3'>Hi, my name is</h3>
						<h1 className='herosection--h1'>Ujjwal Bhandari.</h1>
						<h5 className='herosection--h5'>{exploring}</h5>
					</main>

					<main className='herosection__more'>
						<p>
							I’m a <span>Full Stack Web Developer.</span>
						</p>
						<p>
							Currently working at
							<span>Butwal Web Pvt. Ltd.</span>
						</p>
					</main>

					<main className='herosection__social'>
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
					</main>
				</div>
			</Container>
		</section>
	);
}
