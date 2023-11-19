import { HiOutlineBars3BottomRight } from 'react-icons/hi2';

export default function Toggler({ show, setShow }: HeaderPropsT) {
	return (
		<div className='header__togglers'>
			<HiOutlineBars3BottomRight
				className='header--svg text-slate-100'
				onClick={() => setShow(!show)}
			/>
		</div>
	);
}
