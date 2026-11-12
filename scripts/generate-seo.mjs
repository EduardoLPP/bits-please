import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { initialPosts, mockPostIds } from '../src/articles.js';
import { editorialUpdates } from '../src/editorialUpdates.js';

const siteUrl = (process.env.SITE_URL || 'https://bits-please.vercel.app').replace(/\/$/, '');
const distDir = resolve('dist');
const template = await readFile(resolve(distDir, 'index.html'), 'utf8');
const allPosts = [...editorialUpdates, ...initialPosts];
const categories = [
  ['noticias', 'NOTÍCIAS', 'Notícias de games, consoles e PC gamer: lançamentos, atualizações e bastidores.'],
  ['reviews', 'REVIEWS', 'Reviews de jogos com contexto, fontes e impressões editoriais.'],
  ['games', 'GAMES', 'Lançamentos, atualizações e histórias dos jogos que movimentam a comunidade.'],
  ['esports', 'ESPORTS', 'Notícias e contexto sobre competições, equipes e a cena competitiva.'],
  ['cultura-pop', 'CULTURA POP', 'Games, adaptações e cultura pop em diálogo.'],
  ['pc-gamer', 'PC GAMER', 'Hardware, desempenho e guias para jogar no PC.'],
];

function escapeHtml(value = '') {
  return String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function escapeXml(value = '') {
  return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
}

function absoluteUrl(value) {
  return new URL(value || '/favicon.svg', `${siteUrl}/`).href;
}

function replaceMeta(html, attribute, key, content) {
  const tag = `<meta ${attribute}="${escapeHtml(key)}" content="${escapeHtml(content)}"/>`;
  const start = html.indexOf(`<meta ${attribute}="${key}"`);
  if (start < 0) return html.replace('</head>', `${tag}</head>`);
  const end = html.indexOf('>', start);
  return `${html.slice(0, start)}${tag}${html.slice(end + 1)}`;
}

function replaceLink(html, rel, href) {
  const tag = `<link rel="${rel}" href="${escapeHtml(href)}"/>`;
  const start = html.indexOf(`<link rel="${rel}"`);
  if (start < 0) return html.replace('</head>', `${tag}</head>`);
  const end = html.indexOf('>', start);
  return `${html.slice(0, start)}${tag}${html.slice(end + 1)}`;
}

function replaceStructuredData(html, data) {
  const script = `<script id="seo-structured-data" type="application/ld+json">${JSON.stringify(data).replaceAll('<', '\\u003c')}</script>`;
  const pattern = /<script id="seo-structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/;
  return pattern.test(html) ? html.replace(pattern, script) : html.replace('</head>', `${script}</head>`);
}

function applySeo(html, { title, description, url, image, type = 'website', robots = 'index,follow', structuredData }) {
  let output = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
  output = replaceMeta(output, 'name', 'description', description);
  output = replaceMeta(output, 'name', 'robots', robots);
  output = replaceMeta(output, 'property', 'og:type', type);
  output = replaceMeta(output, 'property', 'og:site_name', 'Bits, Please');
  output = replaceMeta(output, 'property', 'og:title', title);
  output = replaceMeta(output, 'property', 'og:description', description);
  output = replaceMeta(output, 'property', 'og:url', url);
  output = replaceMeta(output, 'property', 'og:image', image);
  output = replaceMeta(output, 'property', 'og:image:alt', title);
  output = replaceMeta(output, 'name', 'twitter:card', 'summary_large_image');
  output = replaceMeta(output, 'name', 'twitter:title', title);
  output = replaceMeta(output, 'name', 'twitter:description', description);
  output = replaceMeta(output, 'name', 'twitter:image', image);
  output = replaceLink(output, 'canonical', url);
  return replaceStructuredData(output, structuredData);
}

function isoDate(post) {
  const direct = post.publishedAt || post.updatedAt || '';
  if (/^\d{4}-\d{2}-\d{2}/.test(direct)) return direct.slice(0, 10);
  const match = String(post.date || '').match(/(\d{1,2})\s+([a-záéíóúç]+)\s+(\d{4})/i);
  if (!match) return '';
  const months = { jan: '01', fev: '02', mar: '03', abr: '04', mai: '05', jun: '06', jul: '07', ago: '08', set: '09', out: '10', nov: '11', dez: '12' };
  const month = months[match[2].slice(0, 3).toLowerCase()];
  return month ? `${match[3]}-${month}-${match[1].padStart(2, '0')}` : '';
}

const publishedPosts = [...new Map(allPosts
  .filter(post => post?.id && post.status !== 'draft' && post.public !== false && !mockPostIds.has(post.id))
  .map(post => [post.id, post])).values()];

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Bits, Please',
  url: `${siteUrl}/`,
  inLanguage: 'pt-BR',
};
const homepage = applySeo(template, {
  title: 'Bits, Please — Notícias de games, consoles e PC gamer',
  description: 'Notícias, reviews e guias de games, consoles e PC gamer, com contexto e fontes para quem vive jogando.',
  url: `${siteUrl}/`,
  image: absoluteUrl(publishedPosts.find(post => post.image)?.image),
  structuredData: websiteSchema,
});
await writeFile(resolve(distDir, 'index.html'), homepage);

const sitemapUrls = [{ loc: `${siteUrl}/` }];

for (const [slug, name, description] of categories) {
  const matching = publishedPosts.filter(post => (post.section || post.category) === name);
  if (!matching.length) continue;
  const url = `${siteUrl}/categoria/${slug}`;
  const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: `${name} | Bits, Please`, description, url };
  const html = applySeo(template, {
    title: `${name} — Notícias e matérias | Bits, Please`,
    description,
    url,
    image: absoluteUrl(matching.find(post => post.image)?.image),
    structuredData: schema,
  });
  const routeDir = resolve(distDir, 'categoria', slug);
  await mkdir(routeDir, { recursive: true });
  await writeFile(resolve(routeDir, 'index.html'), html);
  sitemapUrls.push({ loc: url });
}

for (const post of publishedPosts) {
  const url = `${siteUrl}/artigo/${encodeURIComponent(post.id)}`;
  const image = absoluteUrl(post.image);
  const date = isoDate(post);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: [image],
    ...(date ? { datePublished: date, dateModified: date } : {}),
    author: { '@type': 'Organization', name: 'Bits, Please' },
    publisher: { '@type': 'Organization', name: 'Bits, Please' },
    articleSection: post.section || post.category,
    inLanguage: 'pt-BR',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };
  const html = applySeo(template, {
    title: `${post.title} | Bits, Please`,
    description: post.excerpt || post.title,
    url,
    image,
    type: 'article',
    structuredData: schema,
  });
  const routeDir = resolve(distDir, 'artigo', post.id);
  await mkdir(routeDir, { recursive: true });
  await writeFile(resolve(routeDir, 'index.html'), html);
  sitemapUrls.push({ loc: url, lastmod: date, image });
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${sitemapUrls.map(item => `  <url><loc>${escapeXml(item.loc)}</loc>${item.lastmod ? `<lastmod>${item.lastmod}</lastmod>` : ''}${item.image ? `<image:image><image:loc>${escapeXml(item.image)}</image:loc></image:image>` : ''}</url>`).join('\n')}\n</urlset>\n`;
await writeFile(resolve(distDir, 'sitemap.xml'), sitemap);

console.log(`SEO: geradas ${publishedPosts.length} páginas de matérias, ${sitemapUrls.length} URLs no sitemap.`);
