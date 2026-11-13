// Pesquisa de 13/11/2026. Nenhuma permissão do lote anterior se aplica aqui.
const assessedAt = '2026-11-13T07:38:00-03:00';
const s = (label, url) => ({ label, url });
const links = {
  bethesda: 'https://bethesda.net/en-US/news/xbox-25-id-software-machinegames-news',
  recap: 'https://news.xbox.com/en-us/2026/11/12/xbox-25th-anniversary-news-recap/',
  wolfReport: 'https://twistedvoxel.com/wolfenstein-3-development-machinegames-xbox/',
  halo: 'https://www.halowaypoint.com/news/firefight-update-winter-2026',
  doomReport: 'https://twistedvoxel.com/doom-the-dark-ages-slaughter-mode/',
  classics: 'https://news.xbox.com/en-us/2026/11/12/25-original-xbox-games-now-available-on-PC/',
  classicsReport: 'https://beebom.com/xbox-25th-anniversary-celebration-brings-star-wars-kotor-classics-to-pc/',
  insider: 'https://news.xbox.com/en-us/2026/11/12/xbox-insiders-january-2027-console-features-1/amp/',
  insiderReport: 'https://www.windowscentral.com/gaming/xbox/xbox-customization-dynamic-backgrounds-movable-guide',
  zelda: 'https://www.nintendo.com/pt-br/whatsnew/chegou-a-hora-jogue-the-legend-of-zelda-ocarina-of-time-renascido-exclusivamente-para-o-nintendo-switch-2/',
  zeldaReview: 'https://www.nintendolife.com/reviews/nintendo-switch-2/the-legend-of-zelda-ocarina-of-time',
  zeldaReview2: 'https://www.gamesradar.com/games/the-legend-of-zelda/the-legend-of-zelda-ocarina-of-time-remake-review/',
  winds: 'https://www.wherewindsmeetgame.com/news/official/1109devletter.html',
  windsReport: 'https://pandromeda.com/gaming/where-winds-meet-hutuo-release-date-whats-new-in-the-update',
  rivals: 'https://www.marvelrivals.com/gameupdate/20261111/41548_1319332.html',
  rivalsReport: 'https://gamebeacon.co/marvel-rivals-season-11-roadmap-balance-changes-guide/',
  once: 'https://blog.playstation.com/2026/11/12/once-human-season-5-gameplay-showcases-co-op-colossus-boss-battle-live-november-18/',
  onceToday: 'https://blog.es.playstation.com/2026/11/13/un-vistazo-en-profundidad-a-la-batalla-cooperativa-contra-el-coloso-en-la-temporada-5-de-once-human-disponible-el-18-de-noviembre/',
  onceReport: 'https://www.pocketgamer.com/once-human/dissonant-resonance-announced/',
  vindictus: 'https://blog.playstation.com/2026/11/12/vindictus-defying-fate-comes-to-ps5-next-year/',
  vindictusReport: 'https://www.gematsu.com/2026/11/vindictus-defying-fate-confirmed-for-ps5-cinematic-trailer-teaser',
};
function draft({ id, title, excerpt, section = 'NOTÍCIAS', tag, body, sources, scores, reason, signals = [], imageQuery, imageSources, product, affiliateQuery, blockers = [] }) {
  const relevanceBreakdown = Object.fromEntries(['timeliness', 'publicInterest', 'reach', 'sourceReliability', 'brazilUtility'].map((key, i) => [key, scores[i]]));
  return {
    id, title, excerpt, section, category: 'GAMES', tag, body, sources,
    date: '13 nov 2026', status: 'draft', read: `${Math.max(2, Math.ceil(body.split(/\s+/).length / 180))} min`,
    relevanceDate: '2026-11-13', relevanceUpdatedAt: assessedAt, relevanceBreakdown,
    relevanceScore: scores.reduce((a, b) => a + b, 0), relevanceReason: reason,
    relevanceSignals: signals.length ? signals : sources.map(item => ({ ...item, sameDayVerified: false })),
    imageResearch: { query: imageQuery, checkedAt: assessedAt, sources: imageSources, status: 'searched-not-cleared', notes: 'Busca de imagens executada. Resultados e galerias não equivalem a licença comercial. Nenhum par de arquivos foi aprovado visualmente e licenciado para esta matéria.' },
    affiliateResearch: { product, query: affiliateQuery, checkedAt: assessedAt, tag: 'bitsplease-20', status: 'destination-unverified', notes: 'Busca executada; não houve confirmação de destino Amazon Brasil para produto exato e pertinente. Resultados intermediários e ofertas estrangeiras não foram convertidos em CTA. Foto do produto é opcional.' },
    draftNotes: ['Faltam duas imagens distintas com correspondência visual, origem, crédito e licença comercial confirmados, e uma oferta Amazon pertinente com destino/tag conferidos.', ...blockers, 'A ausência de foto do produto não bloqueia publicação.'].join(' '),
  };
}
export const dailyPosts20261113 = [
  draft({
    id: 'wolfenstein-3-producao-machinegames-confirmada',
    title: 'Wolfenstein 3 está em produção; data e plataformas seguem em aberto',
    excerpt: 'Bethesda confirma o projeto da MachineGames e o retorno de Brian Bloom e Debra Wilson. O anúncio ainda não permite planejar a compra ou avaliar o combate.',
    tag: 'Wolfenstein 3 · MachineGames', scores: [25, 21, 17, 15, 6],
    reason: 'Comunicado primário da Bethesda datado de 13/11 confirma uma sequência de franquia estabelecida, com cobertura independente do mesmo dia. Sem data, plataformas ou números de público, não recebe pontuação máxima.',
    signals: [{ ...s('Bethesda — confirmação em 13/11', links.bethesda), sameDayVerified: true, sourceDate: '2026-11-13' }, { ...s('Twisted Voxel — cobertura em 13/11', links.wolfReport), sameDayVerified: true, sourceDate: '2026-11-13' }],
    body: `Wolfenstein 3 está em produção na MachineGames. A Bethesda confirmou o projeto em comunicado de 13 de novembro de 2026, depois dos anúncios do FanFest do Xbox em Seattle. Brian Bloom e Debra Wilson voltarão aos papéis de BJ Blazkowicz e Grace Walker.

O anúncio resolve a dúvida sobre a continuidade da série, mas deixa as decisões de compra para depois. Na cobertura de 13 de novembro, a Twisted Voxel observa que ainda não foram apresentados data de lançamento, gameplay ou detalhes da história. O material consultado também não estabelece a lista de plataformas. Ser um projeto de um estúdio do Xbox não basta para preencher essa informação.

Essa diferença entre confirmação e apresentação importa. Um nome e o retorno de atores não permitem avaliar o ritmo da campanha, o desenho dos confrontos ou a qualidade técnica. Também não dizem quanto falta para o jogo chegar. Tratar produção como sinônimo de lançamento próximo criaria uma expectativa que as fontes não sustentam.

Nossa leitura editorial é que o anúncio já oferece um motivo concreto para acompanhar a franquia, sem exigir uma aposta antecipada do leitor. Quem quiser conhecer os jogos anteriores deve conferir a edição e a compatibilidade do título escolhido; ele não será uma prévia técnica de Wolfenstein 3. Para a sequência, os próximos marcos úteis são uma apresentação de jogabilidade e a confirmação de plataformas. Até lá, qualquer recomendação de hardware específico seria prematura.`,
    sources: [s('Bethesda — anúncio e elenco', links.bethesda), s('Twisted Voxel — confirmação e lacunas', links.wolfReport)],
    imageQuery: 'Wolfenstein 3 MachineGames official announcement 2026', imageSources: [links.bethesda],
    product: 'Wolfenstein II: The New Colossus, apenas como jogo anterior e na edição explicitada', affiliateQuery: 'Wolfenstein II The New Colossus PS4 Amazon Brasil',
  }),
  draft({
    id: 'halo-campaign-evolved-firefight-quatro-jogadores',
    title: 'Halo: Campaign Evolved terá Firefight para quatro jogadores',
    excerpt: 'A atualização gratuita foi anunciada para o inverno do hemisfério norte. O Halo Fest terá mais detalhes em dezembro; a data de lançamento ainda não foi fixada.',
    tag: 'Halo · Firefight · cooperação', scores: [0, 0, 19, 14, 8],
    reason: 'Modo cooperativo confirmado pela Halo Studios e repercutido de forma independente. A página primária exibe data relativa e não sustenta um sinal publicado em 13/11; componentes do dia ficam zerados.',
    body: `Halo: Campaign Evolved vai receber Firefight em uma atualização gratuita. A Halo Studios descreve um modo cooperativo de sobrevivência para quatro pessoas, com ondas de inimigos, novos mapas e armas para enfrentar os ataques em equipe.

A janela anunciada é o inverno do hemisfério norte. Para quem acompanha do Brasil, isso não significa o inverno brasileiro: o comunicado se refere ao calendário do estúdio nos Estados Unidos. Não foi fornecido um dia de lançamento. Os visitantes do FanFest em Seattle tiveram a primeira oportunidade de experimentar a novidade; mais informações estão previstas para o Halo Fest, em 12 e 13 de dezembro, também em Seattle.

O que está em jogo aqui é ampliar as razões para voltar a Campaign Evolved. Uma campanha tem encontros com progressão definida; sobreviver a ondas oferece outro tipo de objetivo, baseado em coordenação e repetição. Essa é uma leitura da proposta anunciada, não uma avaliação de equilíbrio feita pelo Bits, Please. Ainda não testamos o modo.

A notícia não confirma que jogar online será gratuito em todas as condições. Atualização sem cobrança adicional e requisitos de acesso ao multijogador são questões diferentes, que dependem da plataforma e da oferta utilizada. Antes de combinar uma sessão, vale aguardar a documentação final sobre acesso, compatibilidade entre plataformas e funcionamento das partidas. Também não há base, neste anúncio, para prometer quantidade de mapas ou desempenho. A cobertura da Twisted Voxel confirma o contexto da atualização, mas não substitui essas respostas.`,
    sources: [s('Halo Studios — anúncio de Firefight', links.halo), s('Twisted Voxel — contexto dos anúncios', links.wolfReport)],
    imageQuery: 'Halo Campaign Evolved Firefight official screenshots', imageSources: [links.halo], product: 'Halo: Campaign Evolved na edição/plataforma correspondente', affiliateQuery: 'Halo Campaign Evolved Xbox Amazon Brasil',
  }),
  draft({
    id: 'doom-slaughter-mode-revelations-requisitos',
    title: 'Slaughter Mode chega a DOOM em 16 de novembro, com uma exigência de edição',
    excerpt: 'O modo de sobrevivência será liberado sem custo adicional para quem tem Revelations, Premium Edition ou Premium Upgrade. A edição base sozinha não aparece entre as elegíveis.',
    tag: 'DOOM: The Dark Ages · Revelations', scores: [24, 20, 18, 15, 8],
    reason: 'Bethesda publicou em 13/11 a data de 16/11 e a exigência de edição. A utilidade de evitar a compra errada justifica prioridade; não há teste próprio nem sinal de recorde de público.',
    signals: [{ ...s('Bethesda — data e edições, 13/11', links.bethesda), sameDayVerified: true, sourceDate: '2026-11-13' }],
    body: `Slaughter Mode chega a DOOM: The Dark Ages em 16 de novembro de 2026. A Bethesda informa que o novo desafio não terá cobrança adicional para quem possui Revelations, a Premium Edition ou o Premium Upgrade. O jogo base, isoladamente, não consta dessa lista de acesso.

O formato anunciado coloca o jogador em rodadas progressivas, com inimigos, chefes e arenas escolhidos de forma aleatória. A proposta é continuar enfrentando o combate e acumular recompensas conforme a tentativa avança. Isso oferece uma alternativa à repetição da campanha, mas ainda não permite concluir se a variedade vai se sustentar depois de muitas partidas.

Há contexto independente anterior ao anúncio da data. Em reportagem de 3 de outubro, a Twisted Voxel descreveu a proposta de sobrevivência sem fim e um sistema de recordes pessoais. Na apresentação acompanhada pelo veículo, o modo não teria placar global por não usar um backend. É um relato daquela apresentação, que deve ser conferido nas notas finais de lançamento antes de virar promessa de funcionalidade.

Para o leitor brasileiro, o cuidado imediato é com o pacote comprado. Uma oferta barata da edição padrão não deve ser apresentada como acesso automático ao novo modo. Confira a expansão ou a edição incluída, a plataforma e a região antes de pagar. O Bits, Please não testou Slaughter Mode e não atribui nota à atualização. Nossa avaliação, neste momento, é que a informação mais útil do anúncio está nas condições de acesso, não em uma previsão sobre sua longevidade.`,
    sources: [s('Bethesda — lançamento e elegibilidade', links.bethesda), s('Twisted Voxel — apresentação de outubro', links.doomReport)],
    imageQuery: 'DOOM Dark Ages Revelations Slaughter Mode official screenshots', imageSources: [links.bethesda, links.doomReport], product: 'DOOM: The Dark Ages Premium ou Revelations, sem confundir com a edição base', affiliateQuery: 'DOOM Dark Ages Premium Revelations Amazon Brasil',
  }),
  draft({
    id: 'xbox-classicos-pc-25-jogos-conquistas',
    title: 'Xbox amplia clássicos no PC para 25 jogos; conquistas chegam a quatro',
    excerpt: 'KOTOR, Morrowind e TimeSplitters estão na expansão do programa. Windows 11 é obrigatório, e a lista de jogos no Game Pass é menor que o catálogo completo.',
    tag: 'Xbox · PC · clássicos', scores: [0, 0, 18, 15, 9],
    reason: 'Fonte primária de 12/11 e confirmação independente; sem usar a data de rastreamento como publicação do dia. Requisitos e limites regionais tornam a pauta útil, mas não validam destaque diário.',
    body: `O programa Xbox Backward Compatibility no PC passou de quatro para 25 jogos em 12 de novembro de 2026. São 21 adições, entre elas The Elder Scrolls III: Morrowind, Star Wars: Knights of the Old Republic e os dois TimeSplitters da lista oficial. O anúncio exige Windows 11 e limita a disponibilidade a mercados atendidos.

As conquistas têm um alcance mais estreito: KOTOR, KOTOR II, BLiNX e Conker são os quatro títulos contemplados inicialmente. Segundo a Microsoft, elas também chegam quando esses jogos são executados no Xbox One e nos consoles Series, com a atualização de sistema necessária. Não são conquistas para todos os 25 jogos.

Outro detalhe evita confusão com a assinatura. A relação oficial marca seis títulos como disponíveis também no Game Pass: Morrowind, Grabbed by the Ghoulies e os quatro que abriram o programa. A Beebom confirma essa distinção. Estar no catálogo de retrocompatibilidade não significa estar incluído em qualquer plano de assinatura.

O interesse editorial está na facilidade de acesso, mas a compra ainda pede atenção. A versão da loja, a região da conta e os requisitos continuam relevantes. A Microsoft anunciou suporte a mouse e teclado para todos os jogos da seleção e melhorias para os quatro iniciais; isso não é um teste de desempenho em cada computador. Quem já conhece Morrowind ou KOTOR no PC deve verificar qual edição está sendo oferecida, em vez de presumir que todas as versões compartilham saves, recursos e conquistas. Não fizemos essa comparação técnica.`,
    sources: [s('Xbox Wire — lista e requisitos', links.classics), s('Beebom — catálogo e assinatura', links.classicsReport)],
    imageQuery: 'Xbox backward compatibility PC 25 games November 2026', imageSources: [links.classics], product: 'Controle Xbox compatível com Windows 11, como opção de comando e não requisito obrigatório', affiliateQuery: 'controle Xbox Windows 11 Amazon Brasil', blockers: ['Confirmar ofertas do catálogo na loja brasileira antes de recomendar aquisição.'],
  }),
  draft({
    id: 'xbox-insider-fundos-guia-personalizacao',
    title: 'Xbox testa fundos rotativos e Guia à direita para Insiders',
    excerpt: 'As opções começam pelo grupo Alpha Skip-Ahead. A atualização também muda a organização das licenças digitais obtidas a partir de discos.',
    tag: 'Xbox Insider · interface', scores: [0, 0, 15, 14, 8],
    reason: 'Teste oficial com confirmação da Windows Central; data relativa da cobertura não foi convertida em evidência absoluta do dia em São Paulo. Atualidade e interesse do dia zerados por cautela.',
    body: `O Xbox está testando novas opções de personalização com participantes do Alpha Skip-Ahead, um dos grupos do programa Insider. O anúncio não representa uma liberação para todos os consoles. A Microsoft diz que pretende ampliar o acesso com o tempo, sem fixar um calendário público para cada grupo.

Uma das mudanças permite marcar fundos dinâmicos como favoritos e alterná-los automaticamente. O usuário pode escolher a troca ao entrar na conta ou em intervalos de hora, dia e semana. Para salvar um favorito, o caminho descrito é Configurações, Geral, Personalização, Meu plano de fundo e a seleção de fundos dinâmicos; a ação usa o botão X. Os nomes podem variar conforme a tradução do sistema.

Também será possível escolher se o Guia aparece à esquerda ou à direita da tela. É uma alteração pequena, mas que muda a navegação de quem abre esse painel com frequência. A terceira frente organiza em uma categoria separada os jogos com licenças digitais obtidas de discos, com opção para voltar à organização anterior e ocultar o ícone correspondente.

A Windows Central confirma as três mudanças e o acesso inicial restrito. Nossa leitura é que elas oferecem mais controle sobre uma interface usada diariamente, sem exigir a compra de um console novo. Participar de um teste, porém, não garante que a opção apareça imediatamente na conta. Se o menu não estiver disponível, confira o grupo e a versão do sistema; não há razão, com base neste anúncio, para restaurar o console ou refazer sua biblioteca.`,
    sources: [s('Xbox Wire — opções e grupo inicial', links.insider), s('Windows Central — confirmação independente', links.insiderReport)],
    imageQuery: 'Xbox Insider November 2026 rotating backgrounds guide', imageSources: [links.insider], product: 'Controle Xbox Series para navegação; sem sugerir compra para desbloquear o teste', affiliateQuery: 'controle Xbox Series X Amazon Brasil', blockers: ['Capturas de produto beta não são automaticamente cobertas pela permissão geral da Microsoft para screenshots.'],
  }),
  draft({
    id: 'review-ocarina-of-time-switch-2-pesquisa',
    title: 'Review: Ocarina of Time no Switch 2 renova a aventura, mas limita a rejogada',
    excerpt: 'Controles atualizados e nova apresentação aproximam o clássico de novos jogadores. A ausência de Master Quest pesa para veteranos. Análise baseada em pesquisa, sem teste próprio ou nota.',
    section: 'REVIEWS', tag: 'Zelda · Switch 2 · análise baseada em pesquisa', scores: [0, 0, 20, 15, 8],
    reason: 'Lançamento recente confirmado pela Nintendo Brasil em 5/11 e reviews especializadas do remake específico. Boa vitrine editorial comprovada pela cobertura, sem inventar audiência ou sinal publicado em 13/11.',
    body: `Esta é uma análise editorial baseada em pesquisa, sem teste próprio e sem nota. O objeto é o remake de The Legend of Zelda: Ocarina of Time lançado para Nintendo Switch 2 em 5 de novembro de 2026, conforme o anúncio da Nintendo Brasil. Não estamos avaliando a versão de Nintendo 64 nem a edição de 3DS.

A proposta continua centrada em Link e Navi, na exploração de Hyrule e em masmorras atravessadas em duas eras. Esse formato oferece uma aventura com direção mais definida que a liberdade associada aos Zeldas de mundo aberto recentes. Nossa leitura é que isso ajuda quem procura uma jornada guiada por desafios encadeados, mas pede outra expectativa de quem quer improvisar soluções em espaços muito amplos.

O argumento do remake está em tornar essa estrutura mais confortável. A Nintendo Life destaca a câmera e os comandos modernizados, o salto acionado por botão e o acesso mais direto a itens. As Iron Boots no direcional, por exemplo, reduzem a necessidade de abrir menus no Water Temple. São observações do teste do veículo, não sensações de controle obtidas pelo Bits, Please.

A GamesRadar elogia a renovação visual, os diálogos com voz e os ajustes nos puzzles. Há, porém, um limite apontado pelas duas reviews: a ausência de Master Quest e a restrição a um arquivo de save. Para veteranos, isso diminui as opções de desafio e de manter percursos paralelos. Não existe confirmação, nas fontes usadas, de que uma atualização vá resolver essas questões.

O veredito editorial favorece quem quer conhecer essa aventura com controles atuais ou revisitar sua estrutura sem o atrito das versões antigas. Para quem busca uma campanha radicalmente diferente, as melhorias podem não justificar a recompra. Não concluímos desempenho, bateria ou legibilidade no portátil sem teste específico. Antes da compra, confira a edição de Switch 2 e os idiomas da oferta brasileira.`,
    sources: [s('Nintendo Brasil — lançamento local', links.zelda), s('Nintendo Life — teste do remake', links.zeldaReview), s('GamesRadar — segunda review do remake', links.zeldaReview2)],
    imageQuery: 'Ocarina of Time Switch 2 2026 official screenshots', imageSources: [links.zelda, links.zeldaReview], product: 'The Legend of Zelda: Ocarina of Time para Switch 2, não cartucho de 3DS ou assinatura N64', affiliateQuery: 'Zelda Ocarina Time Switch 2 Amazon Brasil',
  }),
  draft({
    id: 'where-winds-meet-hutuo-campanha-perspectivas',
    title: 'Where Winds Meet marca Hutuo para 13 de novembro e muda o foco da campanha',
    excerpt: 'A carta dos desenvolvedores apresenta uma história contada por múltiplas perspectivas em torno do rio Hutuo. O horário de liberação no Brasil ainda precisa ser confirmado.',
    tag: 'Where Winds Meet · Hutuo', scores: [0, 0, 14, 13, 7],
    reason: 'A carta oficial de 9/11 agenda conteúdo para hoje, mas não é publicação de hoje. Não confundir data do evento com data do sinal; componentes do dia permanecem zerados.',
    body: `Where Winds Meet tem a abertura de Hutuo marcada para 13 de novembro de 2026. A informação está na carta da versão 2.4 publicada em 9 de novembro, que apresenta a região como a terceira de Hidden Mountain. O texto consultado não fornece um horário que permita confirmar a disponibilidade para uma conta brasileira neste momento.

O centro do conteúdo é a campanha Hutuo River, construída por várias perspectivas. Em vez de acompanhar apenas um caminho de combate, a descrição oficial passa por pedidos de reforço, incursões para obter suprimentos e tentativas de ajudar soldados cercados. As linhas narrativas convergem na ponte de Zhongdu.

O interesse está em mostrar o custo da guerra para pessoas que não controlam seu resultado. A carta também descreve a possibilidade de voltar ao rio e encontrar vestígios deixados pelos personagens. Trata-se da intenção narrativa do estúdio, ainda não de uma conclusão nossa sobre a qualidade da escrita ou das missões.

A cobertura da Pandromeda confirma a data global e situa a atualização no primeiro aniversário do jogo. O veículo cita números de jogadores atribuídos à empresa, mas não precisamos deles para recomendar atenção à pauta e não os usamos como medição independente de público ativo. Também não presumimos que o calendário de todo conteúdo de aniversário seja idêntico ao de Hutuo.

Para quem pretende voltar, a decisão prática é conferir as notas da atualização e o acesso à região no próprio servidor antes de reunir o grupo. Não há base para prometer tempo de campanha, desempenho ou uma lista completa de recompensas a partir da apresentação narrativa.`,
    sources: [s('Everstone / NetEase — carta 2.4', links.winds), s('Pandromeda — contexto da atualização', links.windsReport)],
    imageQuery: 'Where Winds Meet Hutuo official screenshots', imageSources: [links.winds], product: 'Controle compatível com a plataforma do leitor, apenas após conferir suporte; o jogo é gratuito', affiliateQuery: 'Where Winds Meet controle PC Amazon Brasil',
  }),
  draft({
    id: 'marvel-rivals-temporada-11-horarios-brasil',
    title: 'Marvel Rivals: temporada 11 tem manutenção às 6h no horário de Brasília',
    excerpt: 'As notas da versão 20261113 anunciam Nightcrawler e uma janela estimada de duas horas. Twitch Drops começam mais tarde; o fim da manutenção não é garantido pelo relógio.',
    tag: 'Marvel Rivals · temporada 11', scores: [0, 0, 19, 15, 10],
    reason: 'Notas oficiais publicadas em 11/11 para atualização de 13/11. A conversão de horários é útil, mas não constitui um novo sinal publicado hoje; não afirmar servidores reabertos sem status ao vivo.',
    body: `A temporada 11 de Marvel Rivals tem manutenção anunciada para 13 de novembro de 2026 às 9h UTC, o equivalente a 6h no horário de Brasília. A NetEase estima duas horas de interrupção. Isso aponta para cerca de 8h como referência de duração, sem garantir que os servidores reabram exatamente nesse horário.

As notas da versão 20261113, publicadas em 11 de novembro, apresentam Nightcrawler como novo herói e o evento narrativo The Acts of Kurt Wagner. O passe The Incursion traz dez conjuntos de trajes. A chegada de um personagem e de cosméticos não deve ser confundida com uma avaliação sobre equilíbrio competitivo: o Bits, Please não testou o patch e não está recomendando uma composição de equipe.

Para acompanhar recompensas, há outro horário importante. O período de Twitch Drops começa às 12h UTC de 13 de novembro, ou 9h em Brasília, e termina às 9h UTC de 11 de dezembro, ou 6h em Brasília. Confira no canal e na conta vinculada quais condições precisam ser cumpridas; apenas abrir uma transmissão não deve ser apresentado como garantia de receber todos os itens.

A GameBeacon acompanha o calendário da temporada e distingue o conteúdo inicial do que chega nas semanas seguintes. Nossa recomendação é consultar as notas oficiais antes de gastar moeda em um pacote ou planejar uma sessão ranqueada. Download disponível, manutenção encerrada e recompensas habilitadas são etapas diferentes. Se o jogo continuar indisponível depois da estimativa, procure um aviso atualizado da operação; o relógio, sozinho, não confirma falha no seu equipamento.`,
    sources: [s('NetEase — notas oficiais e horários UTC', links.rivals), s('GameBeacon — calendário e contexto', links.rivalsReport)],
    imageQuery: 'Marvel Rivals season 11 Nightcrawler official images', imageSources: [links.rivals], product: 'Headset com microfone compatível com a plataforma para comunicação da equipe', affiliateQuery: 'Marvel Rivals headset PC Amazon Brasil',
  }),
  draft({
    id: 'once-human-temporada-5-colossus-fusos',
    title: 'Once Human transforma música em ameaça na temporada 5; atenção ao fuso',
    excerpt: 'Dissonant Resonance terá um confronto cooperativo para quatro jogadores. O PlayStation Blog usa 18 de novembro no Pacífico, enquanto a divulgação global cita dia 19.',
    tag: 'Once Human · Dissonant Resonance', scores: [22, 18, 13, 14, 8],
    reason: 'Apresentação primária espanhola datada de 13/11 detalha evento próximo, com cobertura especializada anterior. A divergência de datas exige fuso e horário final, reduzindo a confiança para serviço ao leitor brasileiro.',
    signals: [{ ...s('PlayStation Blog ES — apresentação em 13/11', links.onceToday), sameDayVerified: true, sourceDate: '2026-11-13', sourceTimeZone: 'not-disclosed', note: 'Data civil exibida; horário de publicação e conversão para São Paulo não informados pela página.' }],
    body: `Once Human prepara Dissonant Resonance, sua quinta temporada, com uma criatura que transforma a paisagem sonora em parte do combate. O Sky Living-Machine Colossus foi inspirado em um órgão de catedral. Segundo a apresentação da Starry Studio, publicada no PlayStation Blog, o gigante reage à ação dos jogadores em vez de funcionar apenas como cenário.

O mundo terá quatro zonas associadas a alegria, raiva, tristeza e medo. Inimigos deixam notas musicais, que podem ser atingidas e reunidas para purificar partituras e obter benefícios. Quando o colosso desce, abre-se caminho para um confronto cooperativo de quatro participantes. Esses são sistemas descritos pelo desenvolvedor; ainda não medimos sua clareza visual, acessibilidade ou dificuldade.

A data pede cuidado. A publicação espanhola de 13 de novembro especifica 18 de novembro no horário do Pacífico, inclusive para PS5. A cobertura da Pocket Gamer sobre o anúncio anterior usa 19 de novembro. Sem um horário oficial final confirmado nesta apuração, não tratamos a diferença como adiamento nem convertemos o lançamento em uma hora exata para o Brasil. Uma atualização mundial pode atravessar datas civis diferentes.

Nossa leitura é que a mistura de tiro, composição e cooperação oferece um gancho mais específico do que simplesmente adicionar um chefe maior. O que ainda falta saber é como as pistas sonoras serão comunicadas a diferentes jogadores e equipamentos. Um headset pode ajudar na comunicação, mas este anúncio não prova que um modelo caro seja necessário, nem substitui a verificação de recursos de acessibilidade. Antes de organizar o grupo, confira o calendário do servidor e o aviso de manutenção.`,
    sources: [s('Starry Studio / PlayStation Blog EN — sistemas', links.once), s('PlayStation Blog ES — data com fuso, 13/11', links.onceToday), s('Pocket Gamer — anúncio anterior para 19/11', links.onceReport)],
    imageQuery: 'Once Human Dissonant Resonance Colossus season 5', imageSources: [links.once, links.onceToday], product: 'Headset com microfone compatível com a plataforma, sem prometer vantagem ou exigência técnica', affiliateQuery: 'Once Human headset PC Amazon Brasil', blockers: ['Confirmar horário final e disponibilidade regional antes de publicar um serviço de lançamento.'],
  }),
  draft({
    id: 'vindictus-defying-fate-ps5-2027-personagens',
    title: 'Vindictus: Defying Fate confirma PS5 em 2027 e apresenta estilos de combate',
    excerpt: 'Lann aposta em esquivas; Fiona, em escudo e contra-ataques. O projeto mantém uma jornada centrada no solo e prepara conteúdo multijogador separado.',
    tag: 'Vindictus: Defying Fate · PS5 · PC', scores: [0, 0, 12, 15, 6],
    reason: 'Anúncio oficial de 12/11 e confirmação da Gematsu sustentam PS5/PC em 2027. Trailer previsto para hoje não foi tratado como vídeo já lançado nem como publicação de hoje.',
    body: `Vindictus: Defying Fate chegará ao PS5 em 2027, ao lado da versão de PC via Steam, segundo a confirmação da Nexon acompanhada pela Gematsu. A apresentação do diretor Dongseok Oh no PlayStation Blog explica a proposta de combate e de mundo, mas não fixa um dia de lançamento.

O RPG de ação usa fantasia medieval inspirada na mitologia celta e coloca humanos e Fomors em conflito. Para decidir se vale acompanhar, o ponto mais concreto está nos personagens. Lann depende de esquivas e de abrir espaço para responder ao inimigo. Fiona trabalha com escudo, bloqueios e contra-ataques. São abordagens diferentes dentro da proposta, não apenas mudanças de aparência.

O diretor explica que as armas servem de ponto de partida para construir os heróis. Também menciona fabricação de armamento e personalização visual. Nossa leitura é que escolher um personagem tende a ser uma escolha de estilo de combate; ainda não podemos avaliar progressão, equilíbrio ou variedade de equipamentos com base nessa apresentação.

Há um limite importante para quem procura uma aventura em grupo. O texto descreve a jornada como essencialmente solitária e diz que a equipe prepara conteúdo multijogador para ameaças maiores. Isso não confirma uma campanha inteira em cooperação nem o número de participantes. A Gematsu também registrou um trailer cinematográfico previsto para 13 de novembro; sem verificá-lo como lançado, não o usamos como evidência de gameplay atual.

Para o Brasil, preço, idiomas e detalhes finais da versão de PS5 permanecem pontos a conferir. A página de lista de desejos não equivale a uma oferta de compra. Neste estágio, acompanhar as próximas apresentações é uma decisão mais bem sustentada do que escolher antecipadamente uma edição ou acessório para o jogo.`,
    sources: [s('Nexon / PlayStation Blog — design e limites do multiplayer', links.vindictus), s('Gematsu — plataformas, 2027 e teaser', links.vindictusReport)],
    imageQuery: 'Vindictus Defying Fate official PS5 screenshots', imageSources: [links.vindictus, links.vindictusReport], product: 'Edição de Vindictus: Defying Fate para PS5 quando houver oferta; não inventar pré-venda', affiliateQuery: 'Vindictus Defying Fate PS5 Amazon Brasil',
  }),
];
