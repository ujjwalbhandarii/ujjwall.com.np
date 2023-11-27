'use client';

import { Button } from '@/shadcn/ui/button';
import Container from '@/utils/container';
import { signOut } from 'next-auth/react';

export default function DashboardPage() {
	const handelSignout = () => {
		signOut();
	};
	return (
		<>
			<Container>
				<div>
					<h1>DashboardPage</h1>
					<Button
						className='bg-purple-600 hover:bg-purple-700'
						onClick={handelSignout}
					>
						signout
					</Button>
				</div>
			</Container>
		</>
	);
}
