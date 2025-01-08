import { cn } from '@/utils/cn';
import { ComponentProps } from 'react';

export function Container({
  children,
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn('container', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export const ErrorMessage = ({ message }: { message: string }) => (
  <span className='text-sm font-medium text-red-500'>{message}</span>
);
