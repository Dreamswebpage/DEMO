import cloudinary from '../../lib/cloudinary';
import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const file = req.files.file; // Assuming multer or similar for file handling
    const result = await cloudinary.uploader.upload(file.path);
    await pool.query('INSERT INTO user_certificates (user_id, proof_url) VALUES ($1, $2)', [req.body.userId, result.secure_url]);
    res.status(200).json({ url: result.secure_url });
  } else {
    res.status(405).end();
  }
}