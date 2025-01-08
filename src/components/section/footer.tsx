import Link from 'next/link';
import { Container } from '@/components/utility';

export function Footer() {
  return (
    <footer className='bg-[#040516]'>
      <Container>
        <div className='mt-10 flex items-center justify-center gap-2 py-10 text-center text-sm text-slate-50'>
          &copy;{' '}
          <div className='flex'>
            <p>Copyright 2024 −</p>
            <Link
              href='/'
              className='mx-2 underline underline-offset-4'
            >
              <strong className='cursor-pointer'>Ujjwal Bhandari</strong>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
