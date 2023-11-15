import React from 'react';
import Link from 'next/link';
import Container from '@/utils/container';

export const NeedAWebDev = () => {
	return (
		<>
			<section className='contact' id='contact'>
				<Container>
					<div className='contact__content'>
						<h6>
							{CONTACT.first}
							<br />
							{CONTACT.second}
							<br />
							{CONTACT.third}
						</h6>
					</div>
					<div className='contact__button'>
						<Link href='#' className='text-slate-100'>
							Get In Touch
						</Link>
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
