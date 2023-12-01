import Container from '@/utils/container';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	metadataBase: new URL('https://www.ujjwalbhandarii.com.np/blog'),
	title: 'Ujjwal Bhandari - blogs',
	description:
		'Ujjwal Bhandari blogs, where shares his daily learning and life improvements.',
	alternates: {
		canonical: 'https://www.ujjwalbhandarii.com.np/blog',
	},
};

export default function Blogs() {
	return (
		<section className='contactpage'>
			<Container>
				<div className='contactpage__wrapper'>
					<h1 className='text-center mt-10'>Comming soon.🚀</h1>
				</div>
			</Container>
		</section>
	);
}
