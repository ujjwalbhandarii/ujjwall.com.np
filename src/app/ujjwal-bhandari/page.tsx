import Container from '@/utils/container';
import { Metadata } from 'next';

export const metadata: Metadata = {
	metadataBase: new URL('http://www.ujjwalbhandarii.com.np/ujjwal-bhandari'),
	title: 'Ujjwal Bhandari - about me',
	description:
		'Get in touch with Ujjwal to discuss your project or any development inquiries.',
};

export default function UjjwalBhandariPage() {
	return (
		<section>
			<Container>
				<div className='flex items-center justify-center flex-col max-w-2xl m-auto mt-10'>
					Greetings! Im
					<strong>
						<h1>Ujjwal bhandari</h1>
					</strong>
					, a passionate CS Student & a full stack web developer. My journey into the
					dynamic world of web development began in 2020, sparked by my early
					experiences with WordPress. Since then, Ive been immersed in the exciting
					realm of creating digital wonders that come to life on the internet. Beyond
					my academic pursuits, I am actively engaged as a Secretary at Code for
					Change Butwal, a volunteer organization dedicated to empowering IT
					enthusiasts by facilitating learning opportunities in cutting-edge
					technologies. Lets build something extraordinary together!
				</div>
			</Container>
		</section>
	);
}
