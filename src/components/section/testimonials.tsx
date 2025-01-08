'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Container } from '@/components/utility';
import { TESTIMONIALS } from '@/constants/landing-page.constants';

export function Testimonials() {
  return (
    <section className='bg-backgroundColorDarker'>
      <Container>
        <div className='py-20 md:px-10 md:py-40 lg:px-60'>
          <div className='text-right'>
            <h2 className='mb-2 inline-block text-right text-base font-bold text-lightGreenBlue md:text-2xl'>
              Things People Say.
            </h2>
          </div>
          <div className='border border-lightGreenBlue p-10 text-sm md:p-20 md:py-20 md:text-base'>
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
                      <p className='text-slate-300'>
                        {testimonial.testimonial}
                      </p>
                      <span className='mt-3 font-semibold text-lightGreenBlue'>
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
