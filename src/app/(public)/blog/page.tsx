import Container from '@/components/utils/container';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
	title: 'Ujjwal Bhandari - Blogs',
	description:
		'Ujjwal Bhandari blogs, where shares his daily learning and life improvements.',
	alternates: {
		canonical: 'https://www.ujjwall.com.np/blog',
	},
};

export default function Blogs() {
	return (
		<section className='contactpage'>
			<Container>
				<div className='contactpage__wrapper'>
					<h1 className='text-center mt-10'>
						This section is under build process and will be deployed once ready.
					</h1>
				</div>
			</Container>
		</section>
	);
}
