import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function ProtectedLinks() {
  const { status } = useSession();

  if (status === 'authenticated') {
    return <Link href='/dashboard'>dashboard</Link>;
  }
}
