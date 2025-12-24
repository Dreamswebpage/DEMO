import { signIn } from 'next-auth/react';

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn('credentials', { email: e.target.email.value, password: e.target.password.value });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}