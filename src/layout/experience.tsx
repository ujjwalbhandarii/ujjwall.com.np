import { EXPERIENCE } from '@/data/landingpage';
import Container from '@/utils/container';

export function Experience() {
	return (
		<section>
			<Container>
				<div className='py-20 md:py-40 lg:px-28'>
					<div className='text-center mb-8 md:mb-20'>
						<h2 className='section--heading'>Experience</h2>
					</div>
					<div className='flex flex-col md:flex-row gap-5'>
						<div className='flex flex-col'>
							{EXPERIENCE.map((company) => (
								<button
									key={company.name}
									className='border-b-2 border-l-2 border border-lightGreenBlue px-10 py-4 w-full md:w-[250px] lg:w-[350px] font-bold'
								>
									{company.name}
								</button>
							))}
						</div>

						<div className='flex-2 md:ml-10 flex flex-col gap-1 w-full text-darkGray'>
							<span className='font-medium mb-2 text-lightGreenBlue'>
								{EXPERIENCE[0].year}
							</span>
							<p>{EXPERIENCE[0].description}</p>

							<h3 className='font-medium mt-3'>Tech Used</h3>
							<ul className='px-4 md:px-2'>
								{EXPERIENCE[0].techstackUsed.map((tech) => (
									<li className='list-disc' key={tech}>
										<p>{tech}</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
