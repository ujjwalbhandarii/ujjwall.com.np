import Image from 'next/image';

import Container from '@/utils/container';
import { ABOUT_ME } from '@/data/landingpage';

export function About() {
	return (
		<section className='about' id='about'>
			<Container>
				<div className='about__wrapper'>
					<h2 className='about--heading section--heading'>About Me</h2>
					<main className='about__main'>
						<article>
							<div
								className='about__content__group'
								dangerouslySetInnerHTML={{ __html: ABOUT_ME }}
							/>
						</article>
						<div className='about__image'>
							<figure className='about--figure'>
								<Image
									src='/dp.jpg'
									alt='ujjwal bhandari photo'
									quality={100}
									width={400}
									height={500}
									className='about--image'
									title='Ujjwal Bhandari, Self-portrait.'
									loading='lazy'
								/>
								<div className='about__image-outlinefilled hover1'></div>
								<div className='about__image-outlineshade hover2'></div>
							</figure>
						</div>
					</main>
				</div>
			</Container>
		</section>
	);
}
