import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { cookieValue, verifySession } from '../lib/auth.js';
import loginPage from './login-page.js';

export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (!verifySession(cookieValue(req, 'bits_session'), process.env.SESSION_SECRET)) return loginPage(req, res);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  try { res.status(200).end(readFileSync(resolve(process.cwd(), 'dist/index.html'))); }
  catch { res.status(503).end('Site build is not available yet.'); }
}
