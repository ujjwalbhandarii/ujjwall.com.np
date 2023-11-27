import { z } from 'zod';

export const signUpSchema = z
	.object({
		name: z.string().min(1, 'please enter a user name'),
		email: z.string().email(),
		password: z.string().min(8, 'Password must be at least 8 characters'),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords must match',
		path: ['confirmPassword'],
	});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
