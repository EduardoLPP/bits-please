import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { initialPosts, mockPostIds } from '../src/articles.js';
import { editorialUpdates } from '../src/editorialUpdates.js';
import { applyPublicationMedia } from '../src/editorial/publicationMedia.js';
import { applyAffiliateCatalog } from '../src/editorial/affiliateCatalog.js';

const siteUrl = (process.env.SITE_URL || 'https://bits-please.vercel.app').replace(/\/$/, '');
const distDir = resolve('dist');
const template = await readFile(resolve(distDir, 'index.html'), 'utf8');
const legacyPostIds = new Set(initialPosts.map(post => post.id));
const allPosts = applyAffiliateCatalog(applyPublicationMedia([...editorialUpdates, ...initialPosts]))
  .map(post => legacyPostIds.has(post.id) ? { ...post, status: 'published' } : post);
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

function safeUrl(value) {
  if (!value) return '';
  try {
    const url = new URL(value, `${siteUrl}/`);
    return url.protocol === 'https:' || url.protocol === 'http:' ? url.href : '';
  } catch {
    return '';
  }
}

function absoluteUrl(value) {
  return safeUrl(value) || new URL('/favicon.svg', `${siteUrl}/`).href;
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

function applySeo(html, { title, description, url, image, imageAlt, type = 'website', robots = 'index,follow', structuredData }) {
  let output = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
  output = replaceMeta(output, 'name', 'description', description);
  output = replaceMeta(output, 'name', 'robots', robots);
  output = replaceMeta(output, 'property', 'og:type', type);
  output = replaceMeta(output, 'property', 'og:site_name', 'Bits, Please');
  output = replaceMeta(output, 'property', 'og:locale', 'pt_BR');
  output = replaceMeta(output, 'property', 'og:title', title);
  output = replaceMeta(output, 'property', 'og:description', description);
  output = replaceMeta(output, 'property', 'og:url', url);
  output = replaceMeta(output, 'property', 'og:image', image);
  output = replaceMeta(output, 'property', 'og:image:alt', imageAlt || title);
  output = replaceMeta(output, 'name', 'twitter:card', 'summary_large_image');
  output = replaceMeta(output, 'name', 'twitter:title', title);
  output = replaceMeta(output, 'name', 'twitter:description', description);
  output = replaceMeta(output, 'name', 'twitter:image', image);
  output = replaceMeta(output, 'name', 'twitter:image:alt', imageAlt || title);
  output = replaceLink(output, 'canonical', url);
  return replaceStructuredData(output, structuredData);
}

function parseIsoDate(value) {
  const direct = String(value || '');
  if (/^\d{4}-\d{2}-\d{2}/.test(direct)) return direct.slice(0, 10);
  const match = direct.match(/(\d{1,2})\s+([a-záéíóúç]+)\s+(\d{4})/i);
  if (!match) return '';
  const months = { jan: '01', fev: '02', mar: '03', abr: '04', mai: '05', jun: '06', jul: '07', ago: '08', set: '09', out: '10', nov: '11', dez: '12' };
  const month = months[match[2].slice(0, 3).toLowerCase()];
  return month ? `${match[3]}-${month}-${match[1].padStart(2, '0')}` : '';
}

function publishedDate(post) {
  return parseIsoDate(post.publishedAt) || parseIsoDate(post.date) || parseIsoDate(post.updatedAt);
}

function modifiedDate(post) {
  return parseIsoDate(post.updatedAt) || publishedDate(post);
}

function isoDate(post) {
  return modifiedDate(post);
}

function withRootContent(html, content) {
  const emptyRoot = '<div id="root"></div>';
  if (!html.includes(emptyRoot)) throw new Error('O ponto de montagem do portal não foi encontrado no HTML.');
  return html.replace(emptyRoot, `<div id="root">${content}</div>`);
}

function safeExternalLink(label, value) {
  const href = safeUrl(value);
  return href
    ? `<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} ↗</a>`
    : escapeHtml(label);
}

function renderImageFigure(image, alt, className = 'article-inline-image', credit, sourceUrl, license, licenseUrl) {
  if (!image) return '';
  const caption = credit
    ? `<figcaption>Imagem: ${safeExternalLink(credit, sourceUrl)}${license ? ` · ${safeExternalLink(license, licenseUrl)}` : ''}</figcaption>`
    : '';
  return `<figure class="${escapeHtml(className)}"><img src="${escapeHtml(absoluteUrl(image))}" alt="${escapeHtml(alt || 'Imagem relacionada à matéria.')}" loading="lazy" decoding="async"/>${caption}</figure>`;
}

function renderStoryCard(post) {
  const url = `/artigo/${encodeURIComponent(post.id)}`;
  return `<a class="story" href="${url}"><span class="story-img"><img src="${escapeHtml(absoluteUrl(post.image))}" alt="${escapeHtml(post.imageAlt || post.title)}" loading="lazy" decoding="async"/></span><span class="story-copy"><small>${escapeHtml(post.section || post.category || 'GAMES')} · ${escapeHtml(post.date || '')}</small><b>${escapeHtml(post.title)}</b><em>${escapeHtml(post.excerpt || '')}</em></span></a>`;
}

function renderHomeFallback(posts) {
  const cards = posts.slice(0, 15).map(renderStoryCard).join('');
  return `<main id="inicio"><section class="about"><span class="kicker">GAMES · HARDWARE · CULTURA</span><h1>Bits, Please — notícias de games, consoles e PC gamer</h1><p>Notícias, reviews e guias com contexto e fontes para quem vive jogando.</p></section><section class="latest"><div class="section-heading"><div><span class="kicker">ATUALIZAÇÃO CONSTANTE</span><h2>Últimas notícias do universo gamer</h2></div></div><div class="latest-grid"><div class="latest-list">${cards}</div></div></section><nav class="category-strip" aria-label="Editorias">${categories.map(([slug, name]) => `<a href="/categoria/${slug}">${escapeHtml(name)}</a>`).join('')}</nav></main>`;
}

function renderCategoryFallback(name, description, posts) {
  return `<main class="latest"><header class="section-heading"><div><span class="kicker">EDITORIA</span><h1>${escapeHtml(name)}</h1><p>${escapeHtml(description)}</p></div></header><section class="latest-list" aria-label="Matérias de ${escapeHtml(name)}">${posts.map(renderStoryCard).join('')}</section></main>`;
}

function renderArticleFallback(post) {
  const published = publishedDate(post);
  const dateLabel = escapeHtml(post.date || published || '');
  const paragraphs = String(post.body || '').replace(/\r\n/g, '\n').split('\n').map(text => text.trim()).filter(Boolean);
  const body = [];
  let inlineRendered = false;
  paragraphs.forEach((paragraph, index) => {
    body.push(`<p>${escapeHtml(paragraph)}</p>`);
    if (index === 1 && post.inlineImage?.image) {
      body.push(renderImageFigure(post.inlineImage.image, post.inlineImage.alt, 'article-inline-image', post.inlineImage.credit, post.inlineImage.sourceUrl, post.inlineImage.license, post.inlineImage.licenseUrl));
      inlineRendered = true;
    }
  });
  if (!inlineRendered && post.inlineImage?.image) body.push(renderImageFigure(post.inlineImage.image, post.inlineImage.alt, 'article-inline-image', post.inlineImage.credit, post.inlineImage.sourceUrl, post.inlineImage.license, post.inlineImage.licenseUrl));
  for (const item of post.additionalImages || []) {
    body.push(renderImageFigure(item.image, item.alt, 'article-inline-image', item.credit, item.sourceUrl, item.license, item.licenseUrl));
  }
  if (post.affiliate && safeUrl(post.affiliate)) {
    const productImage = post.productImage?.image
      ? `<div class="product-visual"><img src="${escapeHtml(absoluteUrl(post.productImage.image))}" alt="${escapeHtml(post.productImage.alt || post.productName || 'Produto recomendado')}" loading="lazy" decoding="async"/><small>${safeExternalLink(post.productImage.credit || 'Origem da imagem', post.productImage.sourceUrl)}${post.productImage.license ? ` · ${safeExternalLink(post.productImage.license, post.productImage.licenseUrl)}` : ''}</small></div>`
      : '';
    body.push(`${post.productPitch ? `<p class="product-pitch">${escapeHtml(post.productPitch)}</p>` : ''}<div class="product-box product-box-featured ${productImage ? 'has-image' : 'text-only'}">${productImage}<div class="product-details"><b>${escapeHtml(post.affiliateLinkType === 'search' ? post.productName || 'Produto recomendado' : `Comprar ${post.productName || 'produto'}`)}</b><a class="button dark product-buy" href="${escapeHtml(safeUrl(post.affiliate))}" target="_blank" rel="sponsored noopener noreferrer">${post.affiliateLinkType === 'search' ? 'Ver opções na Amazon' : 'Ver na Amazon'} ↗</a></div></div><small class="disclosure">Como participante do Programa de Associados da Amazon, sou remunerado pelas compras qualificadas efetuadas.</small>`);
  } else if (post.officialLink && safeUrl(post.officialLink)) {
    body.push(`${post.officialLinkPitch ? `<p class="product-pitch">${escapeHtml(post.officialLinkPitch)}</p>` : ''}<div class="product-box product-box-featured text-only official-link"><div class="product-details"><small class="official-link-kicker">LINK OFICIAL · SEM COMISSÃO</small><b>${escapeHtml(post.officialLinkTitle || 'Página oficial relacionada à matéria')}</b><a class="button dark product-buy" href="${escapeHtml(safeUrl(post.officialLink))}" target="_blank" rel="noopener noreferrer">${escapeHtml(post.officialLinkLabel || 'Abrir página oficial')}</a></div></div><small class="disclosure">Este link leva a uma página oficial e não gera comissão para o Bits, Please.</small>`);
  }
  const sources = (post.sources || []).length
    ? `<section class="source-list"><h2>Fontes e referências</h2><ul>${post.sources.map(item => `<li>${safeExternalLink(item.label || item.url, item.url)}</li>`).join('')}</ul></section>`
    : '';
  const title = escapeHtml(post.title);
  const category = escapeHtml(post.section || post.category || 'GAMES');
  const readTime = escapeHtml(post.read || '');
  const publishedTime = published ? `<time datetime="${escapeHtml(published)}">${dateLabel}</time>` : dateLabel;
  return `<main class="article-page"><a class="back" href="/">← Voltar ao portal</a><article><header class="article-head"><span class="kicker">${category} · ${publishedTime}${readTime ? ` · ${readTime}` : ''}</span><h1>${title}</h1><p>${escapeHtml(post.excerpt || post.title)}</p></header><img class="article-cover" src="${escapeHtml(absoluteUrl(post.image))}" alt="${escapeHtml(post.imageAlt || post.title)}" fetchpriority="high" decoding="async"/>${post.imageSource ? `<p class="image-credit">Imagem: ${safeExternalLink(post.imageSource, post.imageSourceUrl)}${post.imageLicense ? ` · ${safeExternalLink(post.imageLicense, post.imageLicenseUrl)}` : ''}</p>` : ''}<div class="article-content">${body.join('')}${sources}</div></article></main>`;
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
const homepage = withRootContent(applySeo(template, {
  title: 'Bits, Please — Notícias de games, consoles e PC gamer',
  description: 'Notícias, reviews e guias de games, consoles e PC gamer, com contexto e fontes para quem vive jogando.',
  url: `${siteUrl}/`,
  image: absoluteUrl(publishedPosts.find(post => post.image)?.image),
  imageAlt: publishedPosts.find(post => post.image)?.imageAlt || 'Notícias de games, consoles e PC gamer',
  structuredData: websiteSchema,
}), renderHomeFallback(publishedPosts));
await writeFile(resolve(distDir, 'index.html'), homepage);

const sitemapUrls = [{ loc: `${siteUrl}/` }];

for (const [slug, name, description] of categories) {
  const matching = publishedPosts.filter(post => (post.section || post.category) === name);
  if (!matching.length) continue;
  const url = `${siteUrl}/categoria/${slug}`;
  const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: `${name} | Bits, Please`, description, url };
  const html = withRootContent(applySeo(template, {
    title: `${name} — Notícias e matérias | Bits, Please`,
    description,
    url,
    image: absoluteUrl(matching.find(post => post.image)?.image),
    imageAlt: matching.find(post => post.image)?.imageAlt || name,
    structuredData: schema,
  }), renderCategoryFallback(name, description, matching));
  const routeDir = resolve(distDir, 'categoria', slug);
  await mkdir(routeDir, { recursive: true });
  await writeFile(resolve(routeDir, 'index.html'), html);
  sitemapUrls.push({ loc: url });
}

for (const post of publishedPosts) {
  const url = `${siteUrl}/artigo/${encodeURIComponent(post.id)}`;
  const image = absoluteUrl(post.image);
  const seoTitle = post.seoTitle || `${post.title} | Bits, Please`;
  const seoDescription = post.seoDescription || post.excerpt || post.title;
  const published = publishedDate(post);
  const modified = modifiedDate(post);
  const images = [...new Set([post.image, post.inlineImage?.image, ...(post.additionalImages || []).map(item => item.image)].map(safeUrl).filter(Boolean))];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: seoDescription,
    ...(post.tag ? { keywords: post.tag } : {}),
    image: images.length ? images : [image],
    ...(published ? { datePublished: published } : {}),
    ...(modified ? { dateModified: modified } : {}),
    author: { '@type': 'Organization', name: 'Bits, Please', url: `${siteUrl}/#sobre` },
    publisher: { '@type': 'Organization', name: 'Bits, Please', url: `${siteUrl}/#sobre` },
    articleSection: post.section || post.category,
    inLanguage: 'pt-BR',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };
  const html = withRootContent(applySeo(template, {
    title: seoTitle,
    description: seoDescription,
    url,
    image,
    imageAlt: post.imageAlt || post.title,
    type: 'article',
    structuredData: schema,
  }), renderArticleFallback(post));
  const routeDir = resolve(distDir, 'artigo', post.id);
  await mkdir(routeDir, { recursive: true });
  await writeFile(resolve(routeDir, 'index.html'), html);
  sitemapUrls.push({ loc: url, lastmod: modified, image });
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${sitemapUrls.map(item => `  <url><loc>${escapeXml(item.loc)}</loc>${item.lastmod ? `<lastmod>${item.lastmod}</lastmod>` : ''}${item.image ? `<image:image><image:loc>${escapeXml(item.image)}</image:loc></image:image>` : ''}</url>`).join('\n')}\n</urlset>\n`;
await writeFile(resolve(distDir, 'sitemap.xml'), sitemap);

console.log(`SEO: geradas ${publishedPosts.length} páginas de matérias, ${sitemapUrls.length} URLs no sitemap.`);
