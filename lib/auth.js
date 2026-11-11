import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';

export function signSession(secret, ttlSeconds = 8 * 60 * 60) {
  const payload = Buffer.from(JSON.stringify({ exp: Math.floor(Date.now() / 1000) + ttlSeconds, nonce: randomBytes(16).toString('base64url') })).toString('base64url');
  const signature = createHmac('sha256', secret).update(payload).digest('base64url');
  return `${payload}.${signature}`;
}

export function verifySession(token, secret) {
  if (!token || !secret) return false;
  const [payload, signature] = token.split('.');
  if (!payload || !signature) return false;
  const expected = createHmac('sha256', secret).update(payload).digest('base64url');
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
  try { return JSON.parse(Buffer.from(payload, 'base64url').toString()).exp > Date.now() / 1000; }
  catch { return false; }
}

export function cookieValue(req, name) {
  const pair = (req.headers.cookie || '').split(';').map(x => x.trim()).find(x => x.startsWith(`${name}=`));
  return pair ? decodeURIComponent(pair.slice(name.length + 1)) : '';
}

export function passwordMatches(input, expected) {
  if (!input || !expected) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}
