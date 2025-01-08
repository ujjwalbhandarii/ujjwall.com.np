import { ContactFormT } from '@/schema/contact-form.schema';

// TODO - Preetify the Email Template
export const EmailTemplate = ({
  email,
  name,
  message,
  subject,
}: ContactFormT) => (
  <div>
    <h1>Message from {name}</h1>
    <h2>email account: {email}</h2>
    <span>subject: {subject}</span>
    <p>message: {message}</p>
  </div>
);
