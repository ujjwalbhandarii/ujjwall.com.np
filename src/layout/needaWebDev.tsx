import React from 'react';
import Link from 'next/link';
import Container from '@/utils/container';

export const NeedAWebDev = () => {
	return (
		<>
			<section className='contact' id='contact'>
				<Container>
					<div className='contact__content'>
						<h3>
							{CONTACT.first}
							<br />
							{CONTACT.second}
							<br />
							{CONTACT.third}
						</h3>
					</div>
					<div className='contact__button'>
						<Link href='#'>Get In Touch</Link>
					</div>
				</Container>
			</section>
		</>
	);
};

const CONTACT = {
	first: 'NEED A',

	second: 'WEB DEVELOPER?',

	third: "LET'S BUILD SOMETHING.",

	button: 'Get in Touch',
};
