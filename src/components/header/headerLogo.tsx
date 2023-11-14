import Link from 'next/link';
import Image from 'next/image';

export default function HeaderLogo() {
	return (
		<Link href='/'>
			<figure className='header__image'>
				<Image
					className='header__image--img'
					src='/navlogo.webp'
					alt='logo'
					height={40}
					width={40}
					priority
				/>
			</figure>
		</Link>
	);
}
