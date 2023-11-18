import Container from '@/utils/container';

export default function ContactForm() {
	return (
		<section className='contactpage'>
			<Container>
				<div className='contactpage__wrapper'>
					<div className='contactpage__heading'>
						<h2 className='contactpage--heading'>Let&apos;s have a chat🙌.</h2>
						<h2 className='contactpage--heading'>fill the form.</h2>
					</div>

					<div className='contactpage__main'>
						<ContactForm />
						<div className='contactpage__info'>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
								repellendus.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
