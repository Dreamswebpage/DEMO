import pool from '../../lib/db';

export default async function handler(req, res) {
  const userId = req.query.userId; // From session
  const result = await pool.query('SELECT COUNT(*) as completed FROM user_certificates WHERE user_id = $1 AND status = $2', [userId, 'approved']);
  res.status(200).json({ completed: result.rows[0].completed, total: 10 }); // Hardcoded total
}