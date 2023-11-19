'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

import { Input } from '@/shadcn/ui/input';
import { Textarea } from '@/shadcn/ui/textarea';
import { Label } from '@/shadcn/ui/label';

export type FormType = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = useForm<FormType>();

	const router = useRouter();

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
				reset();
				toast.success('The message has been submitted!');
				await new Promise((resolve) => setTimeout(resolve, 3000));
				router.push('/');
			}
		} catch (error) {
			new Error('error while sending email.');
		}
	}

	return (
		<form className='contactpage__form' onSubmit={handleSubmit(onSubmit)}>
			<div className='flex flex-col gap-4 md:flex-row'>
				<div className='grid w-full  items-center gap-1.5'>
					<Label htmlFor='name'>Your name</Label>
					<Input
						placeholder='John Doe..'
						className='bg-transparent'
						{...register('name')}
					/>
				</div>

				<div className='grid w-full items-center gap-1.5'>
					<Label htmlFor='email'>Your email address</Label>
					<Input
						placeholder='johndoe@example.com..'
						className='bg-transparent'
						type='email'
						{...register('email')}
					/>
				</div>
			</div>

			<div className='grid w-full  items-center gap-1.5'>
				<Label htmlFor='email'>Subject</Label>
				<Input
					placeholder='Looking for a freelancer..'
					className='bg-transparent'
					{...register('subject')}
				/>
			</div>

			<div className='grid w-full  items-center gap-1.5'>
				<Label htmlFor='email'>Your message</Label>
				<Textarea
					rows={12}
					placeholder='I saw your profile and I think you will be a perfect candidate for my project..'
					className='bg-transparent resize-none'
					{...register('message')}
				/>
			</div>

			<button className='contactpage__form--btn' disabled={isSubmitting}>
				{isSubmitting ? 'submitting..' : 'submit'}
			</button>
		</form>
	);
}
