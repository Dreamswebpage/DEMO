import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ padding: '1rem', background: '#f0f0f0', textAlign: 'center' }}>
      <p>&copy; 2023 Your Site. <Link href="/terms">Terms</Link> | <Link href="/privacy">Privacy</Link></p>
      {/* AdSense link or banner can be added here */}
      <div>AdSense Placeholder</div>
    </footer>
  );
}