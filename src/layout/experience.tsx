'use client';

import Container from '@/utils/container';
import { EXPERIENCE } from '@/data/landingpage';
import { useState } from 'react';
// import { Button } from '@/shadcn/ui/button';

export function Experience() {
	const [companyDisplay, setCompanyDisplay] = useState<string>(
		EXPERIENCE[0].name,
	);

	return (
		<section>
			<Container>
				<div className='py-20 md:py-40 xl:px-16 2xl:px-28'>
					<div className='text-center mb-8 md:mb-20'>
						<h2 className='section--heading'>Experience</h2>
					</div>
					<div className='flex flex-col md:flex-row gap-5 text-sm lg:text-base'>
						<div className='flex flex-col'>
							{EXPERIENCE.map((company) => (
								<button
									key={company.name}
									className={`border-l-2 bg-backgroundColorDarker border-lightGreenBlue px-5 py-3 lg:py-4 w-full md:w-[200px] lg:w-[250px] xl:w-[300px] font-bold ${
										companyDisplay === company.name ? 'text-lightGreenBlue border' : ''
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
									className={`flex-2 lg:ml-4 xl:ml-10 flex-col gap-1 text-darkGray flex ${
										companyDisplay !== company.name ? 'hidden' : ''
									}`}
									key={company.name + Math.random() * 100}
								>
									<span className='font-semibold mb-2 text-lightGreenBlue'>
										{company.year}
									</span>
									<p className='mb-2'>{company.description}</p>

									<span className='font-semibold underline underline-offset-4'>
										Key Learnings
									</span>
									<ul className='px-4 md:px-2 mb-2'>
										{company?.learnings?.map((learning) => (
											<li className='list-disc' key={learning}>
												<p>{learning}</p>
											</li>
										))}
									</ul>

									<h3 className='font-semibold underline underline-offset-4'>
										Tech Used
									</h3>
									<ul className='px-4 md:px-2'>
										{company?.techstackUsed?.map((tech) => (
											<li className='list-disc' key={tech}>
												<p>{tech}</p>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
					{/* <div className='my-6 flex justify-center items-center'>
						<Button className='px-6 md:px-10 py-4 md:py-6 text-sm md:text-base border border-lightGreenBlue hover:bg-lightGreenBlue hover:text-black transition'>
							Watch full Resume 🚀
						</Button>
					</div> */}
				</div>
			</Container>
		</section>
	);
}
