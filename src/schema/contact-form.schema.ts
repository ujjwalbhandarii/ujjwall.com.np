import { z } from 'zod';
import { FORM_ERROR } from '@/constants/error-messages';

const contactFormSchema = z.object({
  name: z.string().min(1, { message: FORM_ERROR.NAME.REQUIRED }),
  email: z.string().email({ message: FORM_ERROR.EMAIL.REQUIRED }),
  subject: z
    .string()
    .min(10, { message: FORM_ERROR.SUBJECT.MIN_LENGTH })
    .max(100, { message: FORM_ERROR.SUBJECT.MAX_LENGTH }),
  message: z
    .string()
    .min(20, { message: FORM_ERROR.MESSAGE.MIN_LENGTH })
    .max(500, { message: FORM_ERROR.MESSAGE.MAX_LENGTH }),
});

type ContactFormT = z.infer<typeof contactFormSchema>;

export { contactFormSchema };
export type { ContactFormT };
