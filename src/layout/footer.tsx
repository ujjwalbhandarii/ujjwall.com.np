import Container from '@/utils/container';

export function Footer() {
	return (
		<footer className='footer'>
			<Container>
				<div className='footer__wrapper'>
					&copy;{' '}
					<span>
						Copyright 2023 − <strong> Ujjwal Bhandari </strong>
					</span>
				</div>
			</Container>
		</footer>
	);
}
