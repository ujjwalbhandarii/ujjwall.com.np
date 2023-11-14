import { HiOutlineBars3BottomRight } from 'react-icons/hi2';
import ThemeToggler from './themeToggler';

export default function Toggler({ show, setShow }: HeaderPropsT) {
	return (
		<div className='header__togglers'>
			<HiOutlineBars3BottomRight
				className='header--svg'
				onClick={() => setShow(!show)}
			/>
		</div>
	);
}
