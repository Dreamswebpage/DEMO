import { useState } from 'react';

export default function UploadForm({ onUpload }) {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert('Select a file');
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch('/api/upload', { method: 'POST', body: formData });
    if (res.ok) onUpload();
    else alert('Upload failed');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept=".pdf,.jpg,.png" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Upload Proof</button>
    </form>
  );
}