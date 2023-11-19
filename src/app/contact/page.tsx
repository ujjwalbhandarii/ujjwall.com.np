import Container from '@/utils/container';
import ContactForm from '@/components/contactForm';
import FAQs from '@/components/faq';

export default function ContactFormPage() {
	return (
		<section className='contactpage text-slate-50'>
			<Container>
				<div className='contactpage__wrapper'>
					<div className='contactpage__heading'>
						<h2 className='contactpage--heading'>Let&apos;s have a chat🙌.</h2>

						<p>
							Get in touch with me to discuss your project or any development
							inquiries. I&apos;m here to bring your ideas to life and provide tailored
							solutions for your website needs. Whether you have questions, want a
							quote, or just want to say hello, I&apos;m ready to connect!
						</p>
					</div>

					<div className='contactpage__main'>
						<ContactForm />
						<div className='contactpage__info'>
							<FAQs />
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
