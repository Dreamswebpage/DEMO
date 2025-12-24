import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import UploadForm from '../components/UploadForm';
import ProgressBar from '../components/ProgressBar';
import AdSlot from '../components/AdSlot';

export default function StudentDashboard() {
  const { data: session } = useSession();
  const [progress, setProgress] = useState({ completed: 0, total: 10 });

  useEffect(() => {
    if (session) {
      fetch('/api/user-progress').then(res => res.json()).then(setProgress);
    }
  }, [session]);

  if (!session) return <p>Please login</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Student Dashboard</h1>
      <ProgressBar {...progress} />
      <UploadForm onUpload={() => window.location.reload()} />
      <AdSlot adClient={process.env.ADSENSE_PUBLISHER_ID} adSlot="1122334455" />
    </div>
  );
}