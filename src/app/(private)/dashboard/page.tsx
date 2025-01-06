import Link from 'next/link';
import { Container } from '@/components/utils/container';
import SignoutButton from '@/components/utils/signout';

export default function DashboardPage() {
  return (
    <>
      <Container>
        <div className='my-10 text-center'>
          <h2 className='text-lg'>DashboardPage</h2>
        </div>

        <div>
          <div className='mb-5 flex justify-between'>
            <h1 className='mb-3'>All your projects</h1>
            <Link
              href='/dashboard/projects/create'
              className='underline underline-offset-4 hover:text-lightGreenBlue'
            >
              Create a Project-&gt;
            </Link>
          </div>
        </div>
        <SignoutButton />
      </Container>
    </>
  );
}
