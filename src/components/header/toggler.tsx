import { ModeToggle } from '@/shadcn/ui/darkMode';
import { HiOutlineBars3BottomRight } from 'react-icons/hi2';

export default function Toggler({ show, setShow }: HeaderPropsT) {
	return (
		<div className='header__togglers'>
			<ModeToggle />
			<HiOutlineBars3BottomRight
				className='header--svg text-slate-100 dark:text-slate-100'
				onClick={() => setShow(!show)}
			/>
		</div>
	);
}
