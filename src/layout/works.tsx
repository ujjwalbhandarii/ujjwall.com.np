import Link from 'next/link';
import Container from '@/utils/container';
import { WORKS__PAGINATED } from '@/data/landingpage';
import ProjectsCard from '@/components/projectsCard';

export async function Works() {
	return (
		<section id='works' className='works'>
			<Container>
				<div className='works__wrapper'>
					<h2 className='works--heading section--heading text-slate-100'>
						Featured Works
					</h2>
					<div className='works__main'>
						{WORKS__PAGINATED.map(
							({
								id,
								imageUrl,
								alt,
								description,
								stackUsed,
								websiteName,
								liveLink,
							}) => {
								return (
									<ProjectsCard
										key={id}
										imageUrl={imageUrl}
										alt={alt}
										description={description}
										stackUsed={stackUsed}
										websiteName={websiteName}
										liveLink={liveLink}
									/>
								);
							},
						)}
					</div>

					<Link href='/projects' className='works--link'>
						All Project 🚀
					</Link>
				</div>
			</Container>
		</section>
	);
}
