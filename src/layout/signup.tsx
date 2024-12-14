'use client';

import Link from 'next/link';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { TSignUpSchema, signUpSchema } from '@/schema/signupSchema';

export default function Signup() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<TSignUpSchema>({
		resolver: zodResolver(signUpSchema),
	});

	const router = useRouter();

	async function onSubmit(data: TSignUpSchema) {
		try {
			const signningUp = await fetch('/api/signup', {
				method: 'POST',
				body: JSON.stringify({ data }),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const signUpResponse = await signningUp.json();

			if (!signningUp.ok) {
				toast.error(signUpResponse.message);
			}

			if (signningUp.ok) {
				toast.success('Account created🚀, redirecting to login page');
				await new Promise((resolve) => setTimeout(resolve, 4000));
				router.push('/admin');
			}
		} catch (error: any) {
			console.log('this is error' + error);
		}
	}

	return (
		<section className='login'>
			<div className='login__wrapper container'>
				<div className='login__right'>
					<div className='login__title'>
						<h2 className='login--heading mt-2'>Signup</h2>
					</div>
					<form className='login__form' onSubmit={handleSubmit(onSubmit)}>
						<div className='login__form__group'>
							<p>name</p>
							<Input className='text-black' placeholder='name' {...register('name')} />
							{errors.name && (
								<span className='form__error'>{`${errors.name.message}`}</span>
							)}
						</div>

						<div className='login__form__group'>
							<p>email</p>
							<Input
								className='text-black'
								placeholder='email'
								{...register('email')}
							/>
							{errors.email && (
								<span className='form__error'>{`${errors.email.message}`}</span>
							)}
						</div>

						<div className='login__form__group'>
							<p>password</p>
							<Input
								className='text-black'
								placeholder='password'
								{...register('password')}
							/>
							{errors.password && (
								<span className='form__error'>{`${errors.password.message}`}</span>
							)}
						</div>

						<div className='login__form__group'>
							<p>confirm password</p>
							<Input
								className='text-black'
								placeholder='confirm password'
								{...register('confirmPassword')}
							/>
							{errors.confirmPassword && (
								<span className='form__error'>{`${errors.confirmPassword.message}`}</span>
							)}
						</div>

						<div className='login__form__group'>
							<Button
								className='w-full bg-purple-700 hover:bg-purple-800 mt-2 disabled:bg-slate-600 text-slate-50 dark:hover:bg-slate-500'
								disabled={isSubmitting}
							>
								{isSubmitting ? 'Logging in..' : 'submit'}
							</Button>
						</div>
					</form>

					<div className='login__more'>
						<Link href='/admin/login' className='login--links'>
							Already have an account? Login
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
