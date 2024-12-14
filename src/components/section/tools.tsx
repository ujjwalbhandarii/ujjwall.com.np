import { SKILLS } from '@/constants/landingpage';
import Container from '@/components/utils/container';

export default function Tools() {
  return (
    <section className='bg-backgroundColorDarker'>
      <Container>
        <div className='md:py-30 flex flex-col items-center justify-center py-16 md:min-h-[25rem] lg:px-32'>
          <div className='mb-8 text-center'>
            <h2 className='section--heading'>Tools and Expertise</h2>
          </div>
          <div className='flex min-h-fit flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className='rounded border border-teal-300 bg-backgroundColorDark px-3 py-2 text-sm hover:bg-backgroundColorDarker md:px-8 md:text-base'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
