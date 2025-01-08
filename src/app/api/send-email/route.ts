import { Resend } from 'resend';
import { NextResponse } from 'next/server';

import { EmailTemplate } from '@/components/utils/emailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ message: 'Input field error' });
  }

  try {
    await resend.emails.send({
      from: `${name} sends a message! <onboarding@resend.dev>`,
      to: 'ujjwalbhandari14@gmail.com',
      subject: `New message from ${name}`,
      react: EmailTemplate({ name, email, subject, message }),
    });

    return NextResponse.json({ message: 'email sended' });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
