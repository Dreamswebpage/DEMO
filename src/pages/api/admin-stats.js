import pool from '../../lib/db';

export default async function handler(req, res) {
  const result = await pool.query('SELECT * FROM user_certificates WHERE status = $1', ['pending']);
  res.status(200).json(result.rows);
}