'use client';

import Container from '@/utils/container';
import { EXPERIENCE } from '@/data/landingpage';
import { useState } from 'react';

export function Experience() {
	const [companyDisplay, setCompanyDisplay] = useState<string>(
		EXPERIENCE[0].name,
	);

	return (
		<section>
			<Container>
				<div className='py-20 md:py-40 lg:px-28'>
					<div className='text-center mb-8 md:mb-20'>
						<h2 className='section--heading'>Experience</h2>
					</div>
					<div className='flex flex-col md:flex-row gap-5 text-sm md:text-base'>
						<div className='flex flex-col'>
							{EXPERIENCE.map((company) => (
								<button
									key={company.name}
									className={`border-l-2 border-lightGreenBlue px-10 py-2 md:py-4 w-full md:w-[250px] lg:w-[350px] font-bold ${
										companyDisplay === company.name
											? 'bg-lightGreenBlue text-black border'
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
									className={`flex-2 md:ml-10 flex-col gap-1 text-darkGray flex ${
										companyDisplay !== company.name ? 'hidden' : ''
									}`}
									key={company.name + Math.random() * 100}
								>
									<span className='font-medium mb-2 text-lightGreenBlue'>
										{company.year}
									</span>
									<p>{company.description}</p>

									<h3 className='font-medium mt-3'>Tech Used</h3>
									<ul className='px-4 md:px-2'>
										{company.techstackUsed.map((tech) => (
											<li className='list-disc' key={tech}>
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
