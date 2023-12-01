import Container from '@/utils/container';
import Link from 'next/link';

export default function NotFound() {
	return (
		<>
			<Container>
				<div className='flex flex-col items-center justify-center min-h-[78dvh] gap-1'>
					<h2 className='text-3xl'>Not Found!</h2>
					<p>Could not find requested resource</p>
					<Link
						href='/'
						className='border border-lightGreenBlue bg-transparent hover:bg-lightGreenBlue hover:text-slate-950 transition-all py-2 px-10 my-5'
					>
						Return Home
					</Link>
				</div>
			</Container>
		</>
	);
}
