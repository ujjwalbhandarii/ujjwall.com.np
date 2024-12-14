'use client';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

export default function SignoutButton() {
	const handelSignout = () => signOut();

	return (
		<Button className='bg-purple-600 hover:bg-purple-700' onClick={handelSignout}>
			signout
		</Button>
	);
}
