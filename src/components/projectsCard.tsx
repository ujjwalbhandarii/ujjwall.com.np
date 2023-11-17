import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/shadcn/ui/button';

type Props = {
	imageUrl: any;
	alt: string;
	description: string;
	stackUsed: string[];
	websiteName: string;
	liveLink: string;
};

export default function ProjectsCard({
	imageUrl,
	alt,
	description,
	stackUsed,
	websiteName,
	liveLink,
}: Props) {
	return (
		<div className='workcard'>
			<div className='workcard__wrapper'>
				<div className='workcard__imagediv'>
					<figure>
						<Image
							src={imageUrl}
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
					<a
						href={liveLink}
						target='_blank'
						aria-label={alt}
						className='workcard--a'
					>
						Live link
					</a>
				</main>
			</div>
			<hr />
		</div>
	);
}
