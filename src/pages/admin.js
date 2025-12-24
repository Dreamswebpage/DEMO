import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import AdminTable from '../components/AdminTable';

export default function Admin() {
  const { data: session } = useSession();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (session?.user.role === 'admin') {
      fetch('/api/admin-stats').then(res => res.json()).then(setData);
    }
  }, [session]);

  if (session?.user.role !== 'admin') return <p>Access denied</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Admin Panel</h1>
      <AdminTable data={data} onApprove={(id) => alert(`Approved ${id}`)} />
    </div>
  );
}