import Container from '@/utils/container';
import Image from 'next/image';
import React from 'react';

export default function page() {
	let loop = [1, 2, , 3, 4, 35];

	return (
		<Container>
			<p className='text-center mt-10 mb-5'>this is about me.</p>
			<div className='grid grid-cols-3 gap-5'>
				{loop.map((item) => {
					return (
						<Image
							key={item}
							src='https://images.unsplash.com/photo-1699656861005-747d6b36b918?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							alt='image'
							height={500}
							width={1000}
							className='h-96 object-cover'
						/>
					);
				})}
			</div>
		</Container>
	);
}
