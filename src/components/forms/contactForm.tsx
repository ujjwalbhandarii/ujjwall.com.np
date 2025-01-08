'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { toast } from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ErrorMessage } from '@/components/utility';
import { ROUTES } from '@/constants/routes.constants';
import { CONTENT_TYPE, METHOD } from '@/constants/api.constants';
import { contactFormSchema, ContactFormT } from '@/schema/contact-form.schema';

export function ContactForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormT>({
    resolver: zodResolver(contactFormSchema),
  });

  const router = useRouter();

  async function onSubmit(data: ContactFormT) {
    const config = {
      method: METHOD.POST,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': CONTENT_TYPE.JSON,
      },
    } satisfies RequestInit;

    try {
      const response = await fetch(ROUTES.API.SEND_EMAIL, config);
      if (response.ok) {
        reset();
        toast.success('The message has been submitted!');
        router.push('/');
      }
    } catch (error) {
      new Error('error while sending email.');
    }
  }

  return (
    <form
      className='contactpage__form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex flex-col gap-4 md:flex-row'>
        <div className='grid w-full items-center gap-1.5'>
          <Label htmlFor='name'>Your name</Label>
          <Input
            placeholder='John Doe..'
            className='bg-transparent'
            {...register('name')}
          />
          {errors.name && (
            <ErrorMessage message={errors.name.message as string} />
          )}
        </div>

        <div className='grid w-full items-center gap-1.5'>
          <Label htmlFor='email'>Your email address</Label>
          <Input
            placeholder='johndoe@example.com..'
            className='bg-transparent'
            type='email'
            {...register('email')}
          />
          {errors.email && (
            <ErrorMessage message={errors.email.message as string} />
          )}
        </div>
      </div>

      <div className='grid w-full items-center gap-1.5'>
        <Label htmlFor='email'>Subject</Label>
        <Input
          placeholder='Looking for a freelancer..'
          className='bg-transparent'
          {...register('subject')}
        />
        {errors.subject && (
          <ErrorMessage message={errors.subject.message as string} />
        )}
      </div>

      <div className='grid w-full items-center gap-1.5'>
        <Label htmlFor='email'>Your message</Label>
        <Textarea
          rows={12}
          className='resize-none bg-transparent'
          placeholder='I saw your profile and I think you will be a perfect candidate for my project..'
          {...register('message')}
        />
        {errors.message && (
          <ErrorMessage message={errors.message.message as string} />
        )}
      </div>

      <button
        disabled={isSubmitting}
        className='contactpage__form--btn'
      >
        {isSubmitting ? 'Submitting..' : 'Submit'}
      </button>
    </form>
  );
}
