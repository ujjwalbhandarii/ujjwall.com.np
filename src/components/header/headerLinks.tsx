import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';

import { HEADER_LINKS } from '@/data/header';

type TheaderLink = (typeof HEADER_LINKS)[0];

export default function HeaderLinks({ show, setShow }: HeaderPropsT) {
	return (
		<div className={`header__group ${show ? 'show' : 'dontshow'}`}>
			<div className='header__togglers header__group__togglers'>
				<RxCross2
					className={`header--svg white ${show ? 'svgshow' : 'svghidden'}`}
					onClick={() => setShow(!show)}
				/>
			</div>
			<ul className='header__links'>
				{HEADER_LINKS.map(({ id, name, href }: TheaderLink) => {
					return (
						<li key={id}>
							<Link
								href={href}
								className='header--link text-slate-900 dark:text-slate-100 hover:text-lightBlue hover:dark:text-lightGreenBlue'
								onClick={() => setShow(!show)}
							>
								{name}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
