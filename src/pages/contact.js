export default function Contact() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contact</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}