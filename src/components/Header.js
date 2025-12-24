import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f0f0f0' }}>
      <Link href="/">Home</Link>
      <nav>
        <Link href="/about">About</Link> | <Link href="/contact">Contact</Link>
        {session ? (
          <>
            <Link href="/student-dashboard">Dashboard</Link> | 
            {session.user.role === 'admin' && <Link href="/admin">Admin</Link>} | 
            <button onClick={() => signOut()}>Logout</button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}