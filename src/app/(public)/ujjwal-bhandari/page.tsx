import Container from '@/components/utils/container';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Ujjwal Bhandari - Aboutme',
  description:
    'Ujjwal Bhandari is a fullstack web developer hailing from Butwal, Nepal.',
  alternates: {
    canonical: 'https://www.ujjwall.com.np/ujjwal-bhandari',
  },
};

export default function UjjwalBhandariPage() {
  return (
    <section>
      <Container>
        <article className='mt-10 py-10 text-center md:mt-20 md:px-[10rem]'>
          Greetings! Im
          <strong className='mx-1'>Ujjwal</strong>, a passionate CS Student & a
          full stack web developer. My journey into the dynamic world of web
          development began in 2020, sparked by my early experiences with
          WordPress. Since then, I've been immersed in the exciting realm of
          creating digital wonders that come to life on the internet. Beyond my
          academic pursuits, I am actively engaged as a Secretary at Code for
          Change Butwal, a volunteer organization dedicated to empowering IT
          enthusiasts by facilitating learning opportunities in cutting-edge
          technologies.
        </article>

        <div className='my-5 text-center'>
          <h1 className='mb-5'>
            Some photo's of
            <strong className='mx-1'>Ujjwal Bhandari</strong>.
          </h1>

          <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4'>
            <Image
              src='https://res.cloudinary.com/ujjwalbhandari/image/upload/v1701366368/ujjwalbhandarii.com.np/ujjwal%20images/githubfieldday_owjpre.jpg'
              alt='Ujjwal Bhandari image'
              width={400}
              height={400}
              className='aspect-square w-full object-cover'
              title='Ujjwal Bhandari, image'
            />

            <Image
              src='https://res.cloudinary.com/ujjwalbhandari/image/upload/v1701365993/ujjwalbhandarii.com.np/ujjwal%20images/linkedin_photo_cfamoh.jpg'
              alt='Ujjwal Bhandari image'
              width={400}
              height={400}
              className='aspect-square w-full object-cover'
              title='Ujjwal Bhandari, image'
            />

            <Image
              src='https://res.cloudinary.com/ujjwalbhandari/image/upload/v1701366367/ujjwalbhandarii.com.np/ujjwal%20images/meinbike_otmf97.jpg'
              alt='Ujjwal Bhandari image'
              width={400}
              height={400}
              className='aspect-square w-full object-cover'
              title='Ujjwal Bhandari, image'
            />

            <Image
              src='https://res.cloudinary.com/ujjwalbhandari/image/upload/v1701366367/ujjwalbhandarii.com.np/ujjwal%20images/inmarriage_mdkyk1.jpg'
              alt='Ujjwal Bhandari image'
              width={400}
              height={400}
              className='aspect-square w-full object-cover'
              title='Ujjwal Bhandari, image'
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
