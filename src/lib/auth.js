import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import pool from './db';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const res = await pool.query('SELECT * FROM users WHERE email = $1', [credentials.email]);
        const user = res.rows[0];
        if (user && user.password === credentials.password) { // In production, hash passwords!
          return { id: user.id, email: user.email, role: user.role };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) token.role = user.role;
      return token;
    },
    session: ({ session, token }) => {
      session.user.role = token.role;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});