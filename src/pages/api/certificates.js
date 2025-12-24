import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const result = await pool.query('SELECT * FROM certificates');
    res.status(200).json(result.rows);
  } else if (req.method === 'POST') {
    // Assume admin auth check here
    const { title, platform, link, type } = req.body;
    await pool.query('INSERT INTO certificates (title, platform, link, type) VALUES ($1, $2, $3, $4)', [title, platform, link, type]);
    res.status(201).json({ message: 'Added' });
  } else {
    res.status(405).end();
  }
}