'use client';

import { Input } from '@/shadcn/ui/input';
import { Textarea } from '@/shadcn/ui/textarea';

import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';

export type FormType = {
	name: string;
	email: string;
	subject: any;
	message: string;
};

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<FormType>();

	async function onSubmit(data: FormType) {
		try {
			const response = await fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				toast.success('your message has been sended!');
			}
		} catch (error) {
			new Error('error while sending email.');
		}
	}
	return (
		<form className='contactpage__form' onSubmit={handleSubmit(onSubmit)}>
			<Toaster />
			<div className='flex flex-col gap-4 md:flex-row'>
				<Input
					placeholder='your name..'
					className='bg-transparent'
					{...register('name')}
				/>
				<Input
					placeholder='your email..'
					className='bg-transparent'
					type='email'
					{...register('email')}
				/>
			</div>
			<Input
				placeholder='subject..'
				className='bg-transparent'
				{...register('subject')}
			/>
			<Textarea
				rows={12}
				placeholder='message..'
				className='bg-transparent resize-none'
				{...register('message')}
			/>
			<button className='contactpage__form--btn' disabled={isSubmitting}>
				{isSubmitting ? 'submitting..' : 'submit'}
			</button>
		</form>
	);
}
