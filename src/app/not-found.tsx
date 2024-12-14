import Container from '@/components/utils/container';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Container>
        <div className='flex min-h-[78dvh] flex-col items-center justify-center gap-1'>
          <h2 className='text-3xl'>Not Found!</h2>
          <p>Could not find requested resource</p>
          <Link
            href='/'
            className='my-5 border border-lightGreenBlue bg-transparent px-10 py-2 transition-all hover:bg-lightGreenBlue hover:text-slate-950'
          >
            Return Home
          </Link>
        </div>
      </Container>
    </>
  );
}
