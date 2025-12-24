export default function ProgressBar({ completed, total }) {
  const percentage = (completed / total) * 100;
  return (
    <div>
      <p>Completed: {completed}/{total} certificates</p>
      <div style={{ width: '100%', background: '#ddd', height: '20px' }}>
        <div style={{ width: `${percentage}%`, background: '#4caf50', height: '100%' }}></div>
      </div>
    </div>
  );
}