import Link from 'next/link';
import Image from 'next/image';

export default function HeaderLogo() {
	return (
		<Link href='/'>
			<figure className='header__image'>
				<Image
					className='header__image--img'
					src='/navlogo.png'
					alt='logo'
					height={25}
					width={25}
					title='Ujjwal Bhandari website navbar logo.'
					loading='eager'
				/>
			</figure>
			<h2 hidden>ujjwal bhandari</h2>
		</Link>
	);
}
