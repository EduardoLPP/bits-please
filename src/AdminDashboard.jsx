import React, { useEffect, useMemo, useState } from 'react';

const number = value => new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 }).format(Number(value) || 0);
const percent = value => `${((Number(value) || 0) * 100).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%`;
const shortDate = value => value?.length === 8 ? `${value.slice(6, 8)}/${value.slice(4, 6)}` : value;
const connectionLabel = (status, loading) => loading ? '◌ CONSULTANDO' : status === 'connected' ? '● CONECTADO' : status === 'error' ? '⚠ REVISAR ACESSO' : status === 'setup' ? '○ FALTA CONFIGURAR' : '○ AGUARDANDO CONEXÃO';
const setupLabels = {
  GOOGLE_SERVICE_ACCOUNT_JSON: 'Conta técnica do Google com permissão somente de leitura',
};

function Stat({ label, value, note, accent = '' }) {
  return <article className={`metric-card ${accent}`}><span>{label}</span><strong>{value}</strong>{note && <small>{note}</small>}</article>;
}

function TrafficChart({ rows, mode = 'sessions' }) {
  if (!rows?.length) return <div className="analytics-empty">Ainda não há dados nesse período.</div>;
  const values = rows.map(row => Number(row[mode]) || 0);
  const max = Math.max(...values, 1);
  const width = 720, height = 180, left = 8, right = 8, top = 12, bottom = 26;
  const points = values.map((value, index) => {
    const x = left + (values.length < 2 ? 0 : index * (width - left - right) / (values.length - 1));
    const y = top + (height - top - bottom) * (1 - value / max);
    return `${x},${y}`;
  }).join(' ');
  return <div className="traffic-chart"><svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Gráfico diário de acessos orgânicos"><defs><linearGradient id="traffic-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#ff4fd8" stopOpacity=".27"/><stop offset="100%" stopColor="#ff4fd8" stopOpacity="0"/></linearGradient></defs><polygon points={`${left},${height - bottom} ${points} ${width - right},${height - bottom}`} fill="url(#traffic-fill)"/><polyline points={points} fill="none" stroke="#ff61dc" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"/>{values.map((value, index) => { const x = left + (values.length < 2 ? 0 : index * (width - left - right) / (values.length - 1)); const y = top + (height - top - bottom) * (1 - value / max); return <circle key={rows[index].date} cx={x} cy={y} r="3" fill="#53e3ff"/> })}</svg><div className="chart-caption"><span>{shortDate(rows[0].date)}</span><b>{number(values.reduce((sum, value) => sum + value, 0))} no período</b><span>{shortDate(rows.at(-1).date)}</span></div></div>;
}

function DataRows({ rows, kind = 'articles' }) {
  if (!rows?.length) return <div className="analytics-empty">Sem resultados para este período.</div>;
  return <div className="data-rows">{rows.map((row, index) => <div className="data-row" key={`${row.path || row.query}-${index}`}><strong className="data-rank">{String(index + 1).padStart(2, '0')}</strong><div className="data-main">{kind === 'queries' ? <b>{row.query}</b> : <><b>{row.title || row.path}</b>{row.title && <small>{row.path}</small>}</>}</div><div className="data-value"><b>{number(kind === 'queries' ? row.clicks : kind === 'pages' ? row.clicks : row.views)}</b><small>{kind === 'queries' || kind === 'pages' ? 'cliques' : 'visualizações'}</small></div>{(kind === 'queries' || kind === 'pages') && <div className="data-value data-secondary"><b>{number(row.impressions)}</b><small>impressões</small></div>}</div>)}</div>;
}

export default function AdminDashboard({ posts, onNew, onEdit, onRemove }) {
  const [days, setDays] = useState(28);
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);
  const published = useMemo(() => posts.filter(post => post.status !== 'draft' && post.public !== false), [posts]);
  const drafts = posts.length - published.length;
  const withProducts = published.filter(post => post.affiliate).length;

  useEffect(() => {
    let current = true;
    setLoading(true);
    setLoadError('');
    fetch(`/api/analytics?days=${days}`, { credentials: 'same-origin', cache: 'no-store' })
      .then(async response => {
        const body = await response.json();
        if (!response.ok) throw new Error(body.error || 'Não foi possível carregar os relatórios.');
        return body;
      })
      .then(data => { if (current) setReport(data); })
      .catch(error => { if (current) setLoadError(error.message || 'Relatórios indisponíveis neste ambiente.'); })
      .finally(() => { if (current) setLoading(false); });
    return () => { current = false; };
  }, [days, refreshKey]);

  const ga = report?.services?.ga4;
  const gsc = report?.services?.searchConsole;
  const opportunities = gsc?.opportunities || [];
  const titleForPath = path => {
    try {
      const id = decodeURIComponent(new URL(path, 'https://bits-please.vercel.app').pathname.split('/').at(-1));
      return posts.find(post => post.id === id)?.title || path;
    } catch { return path; }
  };

  return <main className="admin-page admin-dashboard">
    <div className="admin-top"><div><span className="kicker">BITS, PLEASE · VISÃO DO PORTAL</span><h1>Dashboard</h1><p>Acompanhe o alcance orgânico, descubra os assuntos que atraem leitores e encontre oportunidades de SEO.</p></div><div className="admin-actions"><select aria-label="Período dos relatórios" value={days} onChange={event => setDays(Number(event.target.value))}><option value="7">Últimos 7 dias</option><option value="28">Últimos 28 dias</option><option value="90">Últimos 90 dias</option></select><button className="button pale" onClick={() => setRefreshKey(value => value + 1)} disabled={loading}>{loading ? 'Atualizando…' : 'Atualizar dados'}</button><button className="button dark" onClick={onNew}>＋ Nova matéria</button></div></div>

    <section className="editorial-snapshot" aria-label="Resumo editorial"><Stat label="Matérias publicadas" value={number(published.length)} note="visíveis no portal"/><Stat label="Em rascunho" value={number(drafts)} note="aguardando revisão" accent="metric-cyan"/><Stat label="Com produto recomendado" value={`${number(withProducts)} / ${number(published.length)}`} note="com botão de compra" accent="metric-pink"/><Stat label="Editorias ativas" value={number(new Set(published.map(post => post.section || post.category).filter(Boolean)).size)} note="categorias com conteúdo"/></section>

    <section className="analytics-section"><div className="analytics-heading"><div><span className="kicker">BUSCA DO GOOGLE</span><h2>Desempenho orgânico</h2><p>Cliques, impressões e posição média nos resultados de pesquisa. Os dados podem levar alguns dias para aparecer.</p></div><span className={`connection-pill ${gsc?.status === 'connected' ? 'is-connected' : gsc?.status === 'error' ? 'has-error' : ''}`}>{connectionLabel(gsc?.status, loading)}</span></div>
      {gsc?.status === 'connected' ? <><div className="metrics-grid"><Stat label="Cliques orgânicos" value={number(gsc.summary.clicks)} note="visitas originadas na busca" accent="metric-pink"/><Stat label="Impressões" value={number(gsc.summary.impressions)} note="exibições no Google"/><Stat label="CTR médio" value={percent(gsc.summary.ctr)} note="cliques ÷ impressões" accent="metric-cyan"/><Stat label="Posição média" value={Number(gsc.summary.position || 0).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} note="nas consultas do período"/></div><div className="analytics-columns"><article className="analytics-panel"><div className="panel-title"><h3>Cliques por dia</h3><span>SEARCH CONSOLE</span></div><TrafficChart rows={gsc.daily} mode="clicks"/></article><article className="analytics-panel"><div className="panel-title"><h3>Oportunidades de busca</h3><span>IMPRESSÕES ALTAS · CTR BAIXO</span></div>{opportunities.length ? <DataRows rows={opportunities.map(item => ({ ...item, title: titleForPath(item.path) }))} kind="pages"/> : <div className="analytics-empty">Nenhuma página com potencial de CTR identificada neste período.</div>}</article></div><div className="analytics-columns"><article className="analytics-panel"><div className="panel-title"><h3>Matérias com mais cliques</h3><span>PÁGINAS ORGÂNICAS</span></div><DataRows rows={gsc.topPages.map(item => ({ ...item, title: titleForPath(item.path) }))} kind="pages"/></article><article className="analytics-panel"><div className="panel-title"><h3>Consultas que trazem leitores</h3><span>TERMOS DE BUSCA</span></div><DataRows rows={gsc.topQueries} kind="queries"/></article></div></> : <div className="analytics-connect"><div className="connect-icon">⌕</div><div><h3>{gsc?.status === 'error' ? 'O Search Console precisa de atenção' : 'Conecte o Search Console para ver os dados reais'}</h3><p>{gsc?.message || 'O relatório mostra cliques, impressões, CTR, consultas de busca e páginas com oportunidade de melhorar o título ou a descrição.'}</p><small>Adicione a chave da conta técnica como segredo no Vercel; o site já está verificado no Search Console.</small></div></div>}
    </section>

    <section className="analytics-section"><div className="analytics-heading"><div><span className="kicker">COMPORTAMENTO DOS LEITORES</span><h2>Leitura no site</h2><p>Pessoas, sessões totais e busca orgânica, medidos pelo Google Analytics 4.</p></div><span className={`connection-pill ${ga?.status === 'connected' ? 'is-connected' : ga?.status === 'error' ? 'has-error' : ''}`}>{connectionLabel(ga?.status, loading)}</span></div>
      {ga?.status === 'connected' ? <>{!report?.trackingConfigured && <p className="tracking-warning">A tag do GA4 ainda não foi ativada; publique novamente o site para começar a registrar as próximas visitas.</p>}<div className="metrics-grid metrics-grid-audience"><Stat label="Pessoas" value={number(ga.summary.users)} note="usuários de todos os canais" accent="metric-cyan"/><Stat label="Sessões totais" value={number(ga.summary.sessions)} note="visitas de todos os canais"/><Stat label="Busca orgânica" value={number(ga.organic?.sessions)} note="sessões vindas de busca" accent="metric-pink"/><Stat label="Visualizações" value={number(ga.summary.views)} note="páginas vistas em todos os canais"/><Stat label="Engajamento" value={percent(ga.summary.engagementRate)} note={`${number(ga.summary.engagedSessions)} sessões engajadas`}/></div><div className="analytics-columns"><article className="analytics-panel"><div className="panel-title"><h3>Sessões orgânicas por dia</h3><span>GA4</span></div><TrafficChart rows={ga.daily} mode="sessions"/></article><article className="analytics-panel"><div className="panel-title"><h3>Matérias mais lidas</h3><span>VISUALIZAÇÕES</span></div><DataRows rows={ga.topArticles} kind="articles"/></article></div></> : <div className="analytics-connect"><div className="connect-icon">↗</div><div><h3>{ga?.status === 'error' ? 'O Google Analytics precisa de atenção' : 'Conecte o GA4 para acompanhar as leituras'}</h3><p>{ga?.message || 'O painel mostrará sessões orgânicas, engajamento e as matérias que recebem mais visualizações.'}</p><small>Adicione a chave da conta técnica como segredo no Vercel; a propriedade e a coleta já estão configuradas.</small></div></div>}
    </section>

    {report?.missing?.length > 0 && <section className="analytics-setup-guide"><div className="connect-icon">＋</div><div><span className="kicker">CONFIGURAÇÃO NECESSÁRIA</span><h2>Falta liberar o acesso aos dados do Google</h2><p>O painel já está preparado para buscar dados reais. Para ativar a conexão, faltam estes itens:</p><ul>{report.missing.map(name => <li key={name}>{setupLabels[name] || name}</li>)}</ul><div className="setup-links"><a href="https://console.cloud.google.com/" target="_blank" rel="noreferrer">Google Cloud ↗</a><a href="https://analytics.google.com/" target="_blank" rel="noreferrer">Google Analytics ↗</a><a href="https://search.google.com/search-console/" target="_blank" rel="noreferrer">Search Console ↗</a></div><small>A chave da conta técnica deve ser guardada como variável secreta no Vercel. Não cole a chave neste painel nem no chat.</small></div></section>}
    {(loading || loadError || (!report?.configured && !loading)) && <p className="analytics-footnote">{loading ? 'Atualizando relatórios…' : loadError ? `${loadError} Verifique se a função /api/analytics está disponível no ambiente publicado.` : 'A conexão ainda não está completa. Nenhum dado de exemplo é exibido; use a lista acima para concluir a configuração.'}</p>}

    <section className="manage-section"><div className="manage-heading"><div><span className="kicker">CONTEÚDO</span><h2>Gerenciar matérias</h2><p>Edite, publique ou remova artigos do portal.</p></div><span>{number(posts.length)} MATÉRIAS</span></div><div className="manage-list">{posts.map(post => <div className="manage-row" key={post.id}><img src={post.image} alt={post.imageAlt || post.title}/><div className="manage-info"><small>{post.section || post.category}</small><small className={post.status === 'draft' ? 'status-badge draft' : 'status-badge'}>{post.status === 'draft' ? 'RASCUNHO' : 'PUBLICADA'}</small><b>{post.title}</b><span>{post.date}</span>{post.draftNotes && <span className="draft-note">{post.draftNotes}</span>}</div><button className="button pale" onClick={() => onEdit(post)}>Editar</button><button className="button pale red" onClick={() => onRemove(post.id)}>Excluir</button></div>)}</div></section>
    <form method="post" action="/api/logout"><button className="button pale">Sair</button></form><a className="back" href="/">← Voltar ao portal</a>
  </main>;
}
