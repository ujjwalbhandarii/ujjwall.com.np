import Container from '@/utils/container';

import Image from 'next/image';

export function About() {
	return (
		<section className='about bg-[#07081c] dark:bg-[#07081c]' id='about'>
			<Container>
				<div className='about__wrapper'>
					<h5 className='about--heading text-slate-100'>About me</h5>
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
	"<p>Hello!</p><p>My name is ujjwal and currently I'm pursuing my bachelor's in computer science and information technology.</p><p>I enjoy creating things that live on the internet. My interest in web development started back in 2020 through wordpress. And creating internet things since then.</p><p>Also, I'm active as a secretary at <strong>Code for Change</strong> Butwal that is a volunteering organisation to help IT enthusiast to learn recent technology</p>";
