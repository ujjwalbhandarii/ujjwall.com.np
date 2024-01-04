import { SKILLS } from '@/data/landingpage';
import Container from '@/utils/container';

export default function Tools() {
	return (
		<section className='bg-backgroundColorDarker'>
			<Container>
				<div className='py-16 md:py-30 lg:px-28 min-h-[25rem] flex flex-col items-center justify-center'>
					<div className='text-center mb-8'>
						<h2 className='section--heading'>Tools and Expertise</h2>
					</div>
					<div className='flex flex-wrap justify-center gap-2 text-lg text-gray-800 min-h-fit'>
						{SKILLS.map((skill) => (
							<span
								key={skill}
								className='px-8 py-3 text-sm md:text-base rounded bg-backgroundColorDarker border border-lightGreenBlue'
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
