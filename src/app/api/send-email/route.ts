import { Resend } from 'resend';
import { NextResponse } from 'next/server';

import { EmailTemplate } from '@/components/utils/emailTemplate';
import { contactFormSchema } from '@/schema/contact-form.schema';

const userEmail = process.env.USER_EMAIL as string;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  const result = await contactFormSchema.safeParseAsync({
    name,
    email,
    subject,
    message,
  });

  if (!result.success || result.error) {
    return NextResponse.json(
      { message: 'Input validation error', errors: result.error.errors },
      { status: 400 },
    );
  }

  // TODO - Type for Email Config according to resend "send" method payload
  // Payload type is not being exported by Resend libary. 🤮🤮🤮

  const EMAIL_CONFIG = {
    to: userEmail,
    subject: `New message from ${name}`,
    from: `${name} sends a message! <onboarding@resend.dev>`,
    react: EmailTemplate({ name, email, subject, message }),
  };

  try {
    await resend.emails.send(EMAIL_CONFIG);
    return NextResponse.json({ message: 'email sended' });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
