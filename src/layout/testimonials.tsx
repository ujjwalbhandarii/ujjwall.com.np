'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/shadcn/ui/carousel';
import Container from '@/utils/container';

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
						<Carousel>
							<CarouselContent>
								<CarouselItem>
									<p className='text-slate-300'>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
										quas assumenda tenetur beatae a minus, perspiciatis ipsa sapiente
										praesentium unde amet neque eius sequi corrupti odio esse cumque
										nesciunt debitis minima fugit modi magnam ea! Maxime sunt id vero
										natus, fuga voluptate ipsum recusandae! Tempora quam molestias
										inventore voluptatum est!
									</p>
								</CarouselItem>
								<CarouselItem>
									<p className='text-slate-300'>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
										quas assumenda tenetur beatae a minus, perspiciatis ipsa sapiente
										praesentium unde amet neque eius sequi corrupti odio esse cumque
										nesciunt debitis minima fugit modi magnam ea! Maxime sunt id vero
										natus, fuga voluptate ipsum recusandae! Tempora quam molestias
										inventore voluptatum est!
									</p>
								</CarouselItem>
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
