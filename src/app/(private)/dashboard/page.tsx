import Link from 'next/link';
import Container from '@/utils/container';
import SignoutButton from '@/components/signout';

export default function DashboardPage() {
	return (
		<>
			<Container>
				<div className='text-center my-10'>
					<h2 className='text-lg'>DashboardPage</h2>
				</div>

				<div>
					<div className='flex justify-between mb-5'>
						<h1 className='mb-3'>All your projects</h1>
						<Link
							href='/dashboard/projects/create'
							className='underline underline-offset-4 hover:text-lightGreenBlue'
						>
							Create a Project-&gt;
						</Link>
					</div>
				</div>
				<SignoutButton />
			</Container>
		</>
	);
}
