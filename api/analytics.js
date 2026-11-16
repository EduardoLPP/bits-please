import { createSign } from 'node:crypto';
import { cookieValue, verifySession } from '../lib/auth.js';
import { GA4_MEASUREMENT_ID } from '../src/analyticsConfig.js';

const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GA_BASE = 'https://analyticsdata.googleapis.com/v1beta';
const GSC_BASE = 'https://searchconsole.googleapis.com/webmasters/v3';
const json = (res, status, body) => {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.end(JSON.stringify(body));
};
const b64url = value => Buffer.from(value).toString('base64url');

function dateWindow(days) {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
  const value = type => Number(parts.find(part => part.type === type)?.value);
  const end = new Date(Date.UTC(value('year'), value('month') - 1, value('day') - 1));
  const start = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() - days + 1));
  const iso = date => date.toISOString().slice(0, 10);
  return { startDate: iso(start), endDate: iso(end) };
}

async function accessToken(credentials) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = b64url(JSON.stringify({
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/analytics.readonly https://www.googleapis.com/auth/webmasters.readonly',
    aud: TOKEN_URL,
    iat: now,
    exp: now + 3600
  }));
  const unsigned = `${header}.${claims}`;
  const signer = createSign('RSA-SHA256');
  signer.update(unsigned);
  const assertion = `${unsigned}.${signer.sign(credentials.private_key, 'base64url')}`;
  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion })
  });
  if (!response.ok) throw new Error('google-auth');
  return (await response.json()).access_token;
}

async function googlePost(url, token, body) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!response.ok) throw new Error('google-report');
  return response.json();
}

function gaMetrics(report) {
  const values = report.rows?.[0]?.metricValues?.map(item => Number(item.value)) || [];
  return { sessions: values[0] || 0, views: values[1] || 0, users: values[2] || 0, engagedSessions: values[3] || 0, engagementRate: values[4] || 0 };
}

async function getAnalytics(token, propertyId, window) {
  const base = `${GA_BASE}/properties/${encodeURIComponent(propertyId)}:runReport`;
  const period = { dateRanges: [window] };
  const [organicReport, dailyReport, articleReport] = await Promise.all([
    googlePost(base, token, { ...period, dimensions: [{ name: 'sessionDefaultChannelGroup' }], metrics: [{ name: 'sessions' }, { name: 'screenPageViews' }, { name: 'totalUsers' }, { name: 'engagedSessions' }, { name: 'engagementRate' }], dimensionFilter: { filter: { fieldName: 'sessionDefaultChannelGroup', stringFilter: { matchType: 'EXACT', value: 'Organic Search' } } } }),
    googlePost(base, token, { ...period, dimensions: [{ name: 'date' }], metrics: [{ name: 'sessions' }], dimensionFilter: { filter: { fieldName: 'sessionDefaultChannelGroup', stringFilter: { matchType: 'EXACT', value: 'Organic Search' } } }, orderBys: [{ dimension: { dimensionName: 'date' } }] }),
    googlePost(base, token, { ...period, dimensions: [{ name: 'pagePathPlusQueryString' }, { name: 'pageTitle' }], metrics: [{ name: 'screenPageViews' }, { name: 'sessions' }, { name: 'activeUsers' }], dimensionFilter: { filter: { fieldName: 'pagePath', stringFilter: { matchType: 'BEGINS_WITH', value: '/artigo/' } } }, orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }], limit: 10 })
  ]);
  return {
    status: 'connected',
    summary: gaMetrics(organicReport),
    daily: (dailyReport.rows || []).map(row => ({ date: row.dimensionValues[0].value, sessions: Number(row.metricValues[0].value) })),
    topArticles: (articleReport.rows || []).map(row => ({ path: row.dimensionValues[0].value, title: row.dimensionValues[1].value, views: Number(row.metricValues[0].value), sessions: Number(row.metricValues[1].value), users: Number(row.metricValues[2].value) }))
  };
}

async function getSearchConsole(token, siteUrl, window) {
  const endpoint = `${GSC_BASE}/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`;
  const query = body => googlePost(endpoint, token, { ...window, type: 'web', dataState: 'final', rowLimit: 250, ...body });
  const [dailyReport, pageReport, queryReport, totalsReport] = await Promise.all([
    query({ dimensions: ['date'], rowLimit: 1000 }),
    query({ dimensions: ['page'], rowLimit: 100 }),
    query({ dimensions: ['query'], rowLimit: 20 }),
    query({})
  ]);
  const daily = (dailyReport.rows || []).map(row => ({ date: row.keys[0], clicks: row.clicks, impressions: row.impressions }));
  const totals = daily.reduce((sum, row) => ({ clicks: sum.clicks + row.clicks, impressions: sum.impressions + row.impressions }), { clicks: 0, impressions: 0 });
  const pages = (pageReport.rows || []).map(row => ({ path: row.keys[0], clicks: row.clicks, impressions: row.impressions, ctr: row.ctr, position: row.position }));
  const queries = (queryReport.rows || []).map(row => ({ query: row.keys[0], clicks: row.clicks, impressions: row.impressions, ctr: row.ctr, position: row.position }));
  const totalRow = totalsReport.rows?.[0] || {};
  return {
    status: 'connected',
    summary: { clicks: totalRow.clicks ?? totals.clicks, impressions: totalRow.impressions ?? totals.impressions, ctr: totalRow.ctr ?? (totals.impressions ? totals.clicks / totals.impressions : 0), position: totalRow.position || 0 },
    daily,
    topPages: pages.filter(row => new URL(row.path, 'https://bits-please.vercel.app').pathname.startsWith('/artigo/')).sort((a, b) => b.clicks - a.clicks).slice(0, 10),
    opportunities: pages.filter(row => row.impressions >= 10 && row.position <= 20 && row.ctr < 0.04).sort((a, b) => b.impressions - a.impressions).slice(0, 5),
    topQueries: queries.sort((a, b) => b.clicks - a.clicks).slice(0, 10)
  };
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'GET') return json(res, 405, { error: 'Método não permitido.' });
  const authenticated = req.adminAuthenticated === true || verifySession(cookieValue(req, 'bits_session'), process.env.SESSION_SECRET);
  if (!authenticated) return json(res, 401, { error: 'Acesso não autorizado.' });

  const days = [7, 28, 90].includes(Number(new URL(req.url, 'https://site.invalid').searchParams.get('days'))) ? Number(new URL(req.url, 'https://site.invalid').searchParams.get('days')) : 28;
  const window = dateWindow(days);
  let credentials;
  try { credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON || 'null'); } catch {}
  const required = ['GOOGLE_SERVICE_ACCOUNT_JSON', 'GA4_PROPERTY_ID', 'GSC_SITE_URL'];
  const missing = required.filter(name => !process.env[name]);
  if (!credentials?.client_email || !credentials?.private_key) {
    if (!missing.includes('GOOGLE_SERVICE_ACCOUNT_JSON')) missing.unshift('GOOGLE_SERVICE_ACCOUNT_JSON');
    return json(res, 200, {
      configured: false,
      trackingConfigured: Boolean(GA4_MEASUREMENT_ID),
      days,
      window,
      required,
      missing,
      services: {
        ga4: { status: 'setup', message: 'O acesso de leitura do GA4 ainda não foi configurado neste site.' },
        searchConsole: { status: 'setup', message: 'O acesso de leitura do Search Console ainda não foi configurado neste site.' }
      }
    });
  }

  let token;
  try { token = await accessToken(credentials); }
  catch { return json(res, 200, { configured: true, days, window, services: { ga4: { status: 'error', message: 'Não foi possível autenticar no Google. Confira as credenciais do serviço.' }, searchConsole: { status: 'error', message: 'Não foi possível autenticar no Google. Confira as credenciais do serviço.' } } }); }

  const [ga4, searchConsole] = await Promise.all([
    process.env.GA4_PROPERTY_ID ? getAnalytics(token, process.env.GA4_PROPERTY_ID, window).catch(() => ({ status: 'error', message: 'Confira o ID da propriedade GA4 e dê acesso de leitor à conta de serviço.' })) : Promise.resolve({ status: 'setup', message: 'Adicione GA4_PROPERTY_ID para consultar sessões orgânicas e páginas mais vistas.' }),
    process.env.GSC_SITE_URL ? getSearchConsole(token, process.env.GSC_SITE_URL, window).catch(() => ({ status: 'error', message: 'Confira a propriedade GSC_SITE_URL e dê acesso de leitura à conta de serviço no Search Console.' })) : Promise.resolve({ status: 'setup', message: 'Adicione GSC_SITE_URL para consultar cliques, impressões, CTR e posição no Google.' })
  ]);
  return json(res, 200, { configured: true, days, window, trackingConfigured: Boolean(GA4_MEASUREMENT_ID), missing, services: { ga4, searchConsole } });
}
