import Container from '@/utils/container';
import { WORKS } from '@/data/landingpage';
import ProjectsCard from '@/components/projectsCard';

export default function page() {
	return (
		<section className='projects'>
			<Container>
				<div className='projects__wrapper'>
					<div className='projects__heading'>
						<h2 className='projects--heading section--heading'>All projects</h2>
						<p>
							I'm a solo Web developer specializing in Next.js, NestJS, React, SCSS,
							Framer Motion, and Docker. Explore projects where seamless React
							interfaces meet robust NestJS servers, styled with SCSS, animated with
							Framer Motion, and containerized with Docker. Let's connect and turn your
							ideas into extraordinary online experiences!
						</p>
					</div>
					<main className='projects__main'>
						{WORKS.map(
							({
								id,
								imageUrl,
								alt,
								description,
								stackUsed,
								liveLink,
								websiteName,
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
					</main>
				</div>
			</Container>
		</section>
	);
}
