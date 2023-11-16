import Container from '@/utils/container';
import Image from 'next/image';
import Link from 'next/link';
import { WORKS } from '@/data/landingpage';

export function Works() {
	return (
		<section id='works' className='works'>
			<Container>
				<div className='works__wrapper'>
					<h5 className='works--heading section--heading text-slate-100'>
						Featured Works
					</h5>
					<div className='works__main'>
						{WORKS.map(
							({
								id,
								image,
								alt,
								description,
								projectType,
								releaseYear,
								websiteName,
							}) => {
								return (
									<WorkCard
										key={id}
										id={id}
										image={image}
										alt={alt}
										description={description}
										projectType={projectType}
										releaseYear={releaseYear}
										websiteName={websiteName}
									/>
								);
							},
						)}
					</div>

					<Link href='#' className='works--link'>
						More Project 🚀
					</Link>
				</div>
			</Container>
		</section>
	);
}

const WorkCard = ({
	id,
	image,
	alt,
	description,
	projectType,
	releaseYear,
	websiteName,
}: any) => {
	return (
		<Link href={`/projects/${id}`} className='workcard'>
			<div className='workcard__wrapper'>
				<div className='workcard__imagediv'>
					<figure>
						<Image
							src={image}
							alt={alt}
							height={300}
							width={300}
							className='workcard--img'
						/>
					</figure>
				</div>
				<main className='workcard__main'>
					<h5>{websiteName}</h5>
					<div className='workcard__buttons'>
						<span>{releaseYear}</span>
						<p>{projectType}</p>
					</div>
					<p className='workcard--description'>{description}</p>
				</main>
			</div>
			<hr />
		</Link>
	);
};
