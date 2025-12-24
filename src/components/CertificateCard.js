export default function CertificateCard({ title, platform, link, type }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
      <h3>{title}</h3>
      <p>Platform: {platform} | Type: {type}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button>Visit to Complete</button>
      </a>
    </div>
  );
}