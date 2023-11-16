import Container from '@/utils/container';
import Image from 'next/image';
import Link from 'next/link';

export function Works() {
	return (
		<section id='works' className='works'>
			<Container>
				<div className='works__wrapper'>
					<h5 className='works--heading section--heading text-slate-100'>
						Featured Works
					</h5>
					<div className='works__main'>
						<WorkCard />
						<WorkCard />
						<WorkCard />
						<WorkCard />
					</div>

					<Link href='#' className='works--link'>
						More Project 🚀
					</Link>
				</div>
			</Container>
		</section>
	);
}

const WorkCard = () => {
	return (
		<Link href='#' className='workcard'>
			<div className='workcard__wrapper'>
				<div className='workcard__imagediv'>
					<figure>
						<Image
							src='/dp.jpg'
							alt='project image'
							height={300}
							width={300}
							className='workcard--img'
						/>
					</figure>
				</div>
				<main className='workcard__main'>
					<h5>Lorem ipsum dolor sit amet.</h5>
					<div className='workcard__buttons'>
						<span>2020</span>
						<p>category type</p>
					</div>
					<p className='workcard--description'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
						nobis ipsam repellat a cupiditate eum facere officia unde voluptatibus
						provident?
					</p>
				</main>
			</div>
			<hr />
		</Link>
	);
};
