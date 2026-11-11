import { passwordMatches, signSession } from '../lib/auth.js';

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method not allowed');
  const password = typeof req.body?.password === 'string' ? req.body.password : '';
  if (!passwordMatches(password, process.env.ADMIN_PASSWORD)) {
    res.setHeader('Cache-Control', 'no-store');
    return res.redirect(303, '/login?error=1');
  }
  const token = signSession(process.env.SESSION_SECRET);
  res.setHeader('Set-Cookie', `bits_session=${encodeURIComponent(token)}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=28800`);
  res.setHeader('Cache-Control', 'no-store');
  return res.redirect(303, '/admin');
}
