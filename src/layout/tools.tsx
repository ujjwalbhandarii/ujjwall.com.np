import Container from '@/utils/container';

export default function Tools() {
	const SKILLS = [
		'HTML',
		'CSS',
		'Next.js',
		'Node js',
		'NestJs',
		'React',
		'Docker',
		'Prisma',
		'Sanity.io',
		'Web Sockets',
		'WooCommerce',
		'SCSS',
		'C++',
		'C',
		'python',
	];
	return (
		<section className='bg-backgroundColorDarker'>
			<Container>
				<div className='py-16 md:py-30 lg:px-28 flex flex-col items-center justify-center'>
					<div className='text-center mb-8'>
						<h2 className='section--heading'>Tools and Expertise</h2>
					</div>

					<ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800 min-h-fit'>
						{SKILLS.map((skill) => (
							<li key={skill}>
								<span className='px-8 py-4 rounded bg-backgroundColorDarker border border-lightGreenBlue'>
									{skill}
								</span>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</section>
	);
}
