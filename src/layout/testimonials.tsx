'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Container from '@/components/utils/container';
import { TESTIMONIALS } from '@/data/landingpage';

export default function Testimonials() {
	return (
		<section className='bg-backgroundColorDarker'>
			<Container>
				<div className='py-20 md:py-40 md:px-10 lg:px-60'>
					<div className='text-right'>
						<h2 className='text-right inline-block text-base md:text-2xl mb-2 font-bold text-lightGreenBlue'>
							Things People Say.
						</h2>
					</div>
					<div className='border border-lightGreenBlue p-10 md:py-20 md:p-20 text-sm md:text-base'>
						<Carousel
							plugins={[
								Autoplay({
									delay: 5000,
								}),
							]}
						>
							<CarouselContent>
								{TESTIMONIALS.map((testimonial) => (
									<CarouselItem key={testimonial.author}>
										<div className='text-center'>
											<p className='text-slate-300'>{testimonial.testimonial}</p>
											<span className='mt-3 text-lightGreenBlue font-semibold'>
												{testimonial.author}
											</span>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious />
							<CarouselNext />
						</Carousel>
					</div>
				</div>
			</Container>
		</section>
	);
}
