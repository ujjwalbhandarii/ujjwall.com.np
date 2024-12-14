import { SKILLS } from '@/data/landingpage';
import Container from '@/components/utils/container';

export default function Tools() {
	return (
		<section className='bg-backgroundColorDarker'>
			<Container>
				<div className='py-16 md:py-30 lg:px-32 md:min-h-[25rem] flex flex-col items-center justify-center'>
					<div className='text-center mb-8'>
						<h2 className='section--heading'>Tools and Expertise</h2>
					</div>
					<div className='flex flex-wrap justify-center gap-2 text-lg text-gray-800 min-h-fit'>
						{SKILLS.map((skill) => (
							<span
								key={skill}
								className='px-3 md:px-8 py-2 text-sm md:text-base rounded bg-backgroundColorDark hover:bg-backgroundColorDarker border border-teal-300'
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
