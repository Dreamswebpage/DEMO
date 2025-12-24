export default function AdminTable({ data, onApprove }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>User</th>
          <th>Certificate</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.user}</td>
            <td>{item.certificate}</td>
            <td>{item.status}</td>
            <td>
              {item.status === 'pending' && <button onClick={() => onApprove(item.id)}>Approve</button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}