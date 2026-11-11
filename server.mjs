import { createServer } from 'node:http';
import { readFile, readFileSync, stat } from 'node:fs';
import { extname, resolve, sep } from 'node:path';
import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';
import { createServer as createViteServer } from 'vite';

const root = process.cwd();
const envPath = resolve(root, '.env.local');
try {
  for (const line of readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const match = line.match(/^([A-Z_]+)=(.*)$/);
    if (match && !process.env[match[1]]) process.env[match[1]] = match[2];
  }
} catch {}

if (!process.env.ADMIN_PASSWORD || !process.env.SESSION_SECRET) {
  console.error('Missing ADMIN_PASSWORD or SESSION_SECRET in .env.local');
  process.exit(1);
}

const sessions = new Map();
const secureEqual = (a, b) => {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
};
const sign = id => createHmac('sha256', process.env.SESSION_SECRET).update(id).digest('base64url');
const html = (message = '') => `<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Editor · Bits, Please</title><style>*{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:#090a12;color:#eef0ff;font:15px system-ui}main{width:min(390px,calc(100% - 32px));padding:30px;background:#111322;border:1px solid #383047}h1{font:700 26px system-ui;margin:22px 0 6px}p{font-size:13px;color:#a8adc2;margin:0 0 22px}label{font-size:12px;color:#c4c8d9}input{display:block;width:100%;padding:13px;margin:8px 0 15px;background:#090b16;border:1px solid #393b51;color:white}button{width:100%;padding:13px;border:0;background:linear-gradient(100deg,#ff4fd8,#836cff,#4ce2ff);font-weight:700;cursor:pointer}.logo{font:700 18px monospace;color:#ff4fd8}.logo b{color:#4ce2ff}.error{color:#ff7896;font-size:12px;min-height:18px}</style><main><div class="logo">&lt;bits, <b>please/&gt;</b></div><h1>Central editorial</h1><p>Área administrativa protegida.</p><form method="post" action="/auth/login"><label>Senha de acesso<input type="password" name="password" autocomplete="current-password" required autofocus></label><div class="error">${message}</div><button>Entrar no editor ↗</button></form></main></html>`;

const vite = await createViteServer({ server: { middlewareMode: true }, appType: 'spa' });
const server = createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const cookies = Object.fromEntries((req.headers.cookie || '').split(';').map(c => c.trim().split('=').map(decodeURIComponent)));
  const [sessionId, signature] = (cookies.bits_session || '.').split('.');
  const validSessionCookie = sessionId && signature && secureEqual(sign(sessionId), signature);
  const isAdminPath = url.pathname === '/admin' || url.pathname.startsWith('/admin/');

  if (url.pathname === '/login' && req.method === 'GET') {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' });
    return res.end(html());
  }
  if (url.pathname === '/auth/login' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; if (body.length > 4096) req.destroy(); });
    req.on('end', () => {
      const form = new URLSearchParams(body);
      if (!secureEqual(form.get('password') || '', process.env.ADMIN_PASSWORD)) {
        res.writeHead(401, { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' });
        return res.end(html('Senha incorreta. Tente novamente.'));
      }
      const id = randomBytes(32).toString('base64url');
      sessions.set(id, Date.now() + 8 * 60 * 60 * 1000);
      res.writeHead(303, { location: '/admin', 'set-cookie': `bits_session=${id}.${sign(id)}; HttpOnly; SameSite=Strict; Path=/; Max-Age=28800`, 'cache-control': 'no-store' });
      res.end();
    });
    return;
  }
  if ((url.pathname === '/logout' || url.pathname === '/api/logout') && req.method === 'POST') {
    sessions.delete(sessionId);
    res.writeHead(303, { location: '/login', 'set-cookie': 'bits_session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0' });
    return res.end();
  }
  if (isAdminPath) {
    const expiry = validSessionCookie ? sessions.get(sessionId) : undefined;
    if (!expiry || expiry < Date.now()) {
      sessions.delete(sessionId);
      res.writeHead(303, { location: '/login', 'cache-control': 'no-store' });
      return res.end();
    }
    res.setHeader('cache-control', 'no-store');
  }
  vite.middlewares(req, res, err => {
    if (err) { res.statusCode = 500; res.end('Internal server error'); }
  });
});

const port = Number(process.env.PORT || 5173);
server.listen(port, '127.0.0.1', () => console.log(`Bits, Please is ready at http://localhost:${port}`));
