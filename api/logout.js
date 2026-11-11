export default function handler(_req, res) {
  res.setHeader('Set-Cookie', 'bits_session=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0');
  res.setHeader('Cache-Control', 'no-store');
  return res.redirect(303, '/login');
}
