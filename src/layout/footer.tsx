import Link from 'next/link';
import Container from '@/utils/container';

export function Footer() {
	return (
		<footer className='bg-[#040516]'>
			<Container>
				<div className='flex items-center justify-center text-center py-10 text-slate-50 mt-10 gap-2 text-sm'>
					&copy;{' '}
					<div className='flex'>
						<p>Copyright 2024 −</p>
						<Link href='/' className='underline mx-2 underline-offset-4'>
							<strong className='cursor-pointer'>Ujjwal Bhandari</strong>
						</Link>
					</div>
				</div>
			</Container>
		</footer>
	);
}
