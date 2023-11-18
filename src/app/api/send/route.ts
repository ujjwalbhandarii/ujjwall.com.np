import { EmailTemplate } from '@/components/email-template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	const body = await request.json();

	const { name, email, subject, message } = body;

	try {
		await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: ['infoujjwalbhandari@gmail.com'],
			subject: `New message from ${name}`,
			react: EmailTemplate({ name, email, subject, message }),
		});

		return NextResponse.json({ message: 'email sended' });
	} catch (error) {
		return NextResponse.json({ error });
	}
}
