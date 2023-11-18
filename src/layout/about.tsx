import Container from '@/utils/container';

import Image from 'next/image';

export function About() {
	return (
		<section className='about bg-[#040516] dark:bg-[#040516]' id='about'>
			<Container>
				<div className='about__wrapper'>
					<h2 className='about--heading section--heading text-slate-100'>
						About Me
					</h2>
					<main className='about__main'>
						<div className='about__content'>
							<div
								className='about__content__group text-lightGray dark:text-lightGray'
								dangerouslySetInnerHTML={{ __html: data }}
							/>
						</div>
						<div className='about__image'>
							<figure className='about--figure'>
								<Image
									src='/dp.jpg'
									alt='ujjwal bhandari photo'
									quality={100}
									width={400}
									height={500}
									priority
									className='about--image'
								/>
								<div className='about__image-outlinefilled hover1 bg-lightGreenBlue dark:bg-lightGreenBlue'></div>
								<div className='about__image-outlineshade hover2 border-lightGreenBlue dark:border-lightGreenBlue'></div>
							</figure>
						</div>
					</main>
				</div>
			</Container>
		</section>
	);
}

const data =
	"<p>Greetings! I'm Ujjwal, a passionate CS Student &amp; a full stack web developer. My journey into the dynamic world of web development began in 2020, sparked by my early experiences with WordPress. Since then, I've been immersed in the exciting realm of creating digital wonders that come to life on the internet.</p><p>Beyond my academic pursuits, I am actively engaged as a Secretary at <strong>Code for Change</strong> Butwal, a volunteer organization dedicated to empowering IT enthusiasts by facilitating learning opportunities in cutting-edge technologies.</p><p>Let's build something extraordinary together!</p>";
