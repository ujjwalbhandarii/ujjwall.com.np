import { Resend } from 'resend';
import { NextResponse } from 'next/server';

import { config } from '@/utils/config';
import { contactFormSchema } from '@/schema';
import { EmailTemplate } from '@/components/utils/emailTemplate';

export async function POST(request: Request) {
  if (!config.resendKey) {
    return NextResponse.json(
      { message: 'Email service not configured' },
      { status: 503 },
    );
  }

  const resend = new Resend(config.resendKey);
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
    to: config.userEmail,
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
