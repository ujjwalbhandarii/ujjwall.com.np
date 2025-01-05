'use client';

import { useState } from 'react';

import Container from '@/components/utils/container';
import { EXPERIENCE } from '@/constants/landingpage';

export function Experience() {
  const [companyDisplay, setCompanyDisplay] = useState<string>(
    EXPERIENCE[0].name,
  );

  return (
    <section>
      <Container>
        <div className='py-20 md:py-40 xl:px-16 2xl:px-28'>
          <div className='mb-8 text-center md:mb-20'>
            <h2 className='section--heading'>Experience</h2>
          </div>
          <div className='flex flex-col gap-5 text-sm md:flex-row lg:text-base'>
            <div className='flex flex-col'>
              {EXPERIENCE.map((company) => (
                <button
                  key={company.name}
                  className={`w-full border-l-2 border-lightGreenBlue bg-backgroundColorDarker px-5 py-3 font-bold md:w-[200px] lg:w-[250px] lg:py-4 xl:w-[300px] ${
                    companyDisplay === company.name
                      ? 'border text-lightGreenBlue'
                      : ''
                  }`}
                  onClick={() => setCompanyDisplay(company.name)}
                >
                  {company.name}
                </button>
              ))}
            </div>

            <div className='w-full'>
              {EXPERIENCE.map((company) => (
                <div
                  className={`flex-2 flex flex-col gap-1 text-darkGray lg:ml-4 xl:ml-10 ${
                    companyDisplay !== company.name ? 'hidden' : ''
                  }`}
                  key={company.name + Math.random() * 100}
                >
                  <span className='mb-2 font-semibold text-lightGreenBlue'>
                    {company.year}
                  </span>
                  <p className='mb-2'>{company.description}</p>

                  <span className='font-semibold underline underline-offset-4'>
                    Key Learnings
                  </span>
                  <ul className='mb-2 px-4 md:px-2'>
                    {company?.learnings?.map((learning) => (
                      <li
                        className='list-disc'
                        key={learning}
                      >
                        <p>{learning}</p>
                      </li>
                    ))}
                  </ul>

                  <h3 className='font-semibold underline underline-offset-4'>
                    Tech Used
                  </h3>
                  <ul className='px-4 md:px-2'>
                    {company?.techstackUsed?.map((tech) => (
                      <li
                        className='list-disc'
                        key={tech}
                      >
                        <p>{tech}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
