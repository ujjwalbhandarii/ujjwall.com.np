'use client';

import { Input } from '@/shadcn/ui/input';
import { Textarea } from '@/shadcn/ui/textarea';

export default function ContactForm() {
	const handleclick = () => {
		alert('working in feature!');
	};
	return (
		<form className='contactpage__form'>
			<div className='flex flex-col gap-4 md:flex-row'>
				<Input placeholder='your name..' className='bg-transparent' />
				<Input placeholder='your email..' className='bg-transparent' type='email' />
			</div>
			<Input placeholder='subject..' className='bg-transparent' />
			<Textarea
				rows={12}
				placeholder='message..'
				className='bg-transparent resize-none'
			/>
			<button className='contactpage__form--btn' onClick={handleclick}>
				Submit
			</button>
		</form>
	);
}
