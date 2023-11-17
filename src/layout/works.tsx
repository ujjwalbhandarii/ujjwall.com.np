import Container from '@/utils/container';
import Image from 'next/image';
import Link from 'next/link';
import { WORKS } from '@/data/landingpage';

export function Works() {
	return (
		<section id='works' className='works'>
			<Container>
				<div className='works__wrapper'>
					<h2 className='works--heading section--heading text-slate-100'>
						Featured Works
					</h2>
					<div className='works__main'>
						{WORKS.map(
							({
								id,
								image,
								alt,
								description,
								stackUsed,

								websiteName,
							}) => {
								return (
									<WorkCard
										key={id}
										id={id}
										image={image}
										alt={alt}
										description={description}
										stackUsed={stackUsed}
										websiteName={websiteName}
									/>
								);
							},
						)}
					</div>

					<Link href='/projects' className='works--link'>
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
	stackUsed,
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
					<p>{websiteName}</p>
					<div className='workcard__infos'>
						<span>Tech Stack</span>
						<div className='workcard__stackgroup'>
							{stackUsed.map((item: any) => {
								return <p key={item}>{item}</p>;
							})}
						</div>
					</div>
					<p className='workcard--description'>{description}</p>
				</main>
			</div>
			<hr />
		</Link>
	);
};
