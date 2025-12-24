import { useEffect, useState } from 'react';
import CertificateCard from '../components/CertificateCard';
import AdSlot from '../components/AdSlot';

export default function Home() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetch('/api/certificates').then(res => res.json()).then(setCertificates);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Certificate Hub</h1>
      <AdSlot adClient={process.env.ADSENSE_PUBLISHER_ID} adSlot="1234567890" />
      {certificates.map(cert => <CertificateCard key={cert.id} {...cert} />)}
      <p><a href="/login">Login to track your progress!</a></p>
      <AdSlot adClient={process.env.ADSENSE_PUBLISHER_ID} adSlot="0987654321" />
    </div>
  );
}