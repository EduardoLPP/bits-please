const checkedAt = '2026-11-16T09:34:00-03:00';
const imageBase = '/images/editorial-conceitual/';
const imageTerms = 'https://openai.com/policies/terms-of-use/';
const artCredit = 'Ilustração conceitual original gerada por IA; não é captura de jogo nem arte oficial.';
const artLicense = 'Output gerado conforme os Termos de Uso da OpenAI; titularidade sujeita à lei aplicável.';
const src = (label, url) => ({ label, url });
const amazonSearch = query => `https://www.amazon.com.br/s?k=${encodeURIComponent(query)}&tag=bitsplease-20`;

const visuals = {
  gta: ['week-release-cover.png', 'Calendário de lançamentos de jogos com cartões de controle, um controle de console e um portátil retrô sobre uma mesa.', 'week-release-body.png', 'Composição gráfica de calendário semanal e mundos pixelados distintos, sem reproduzir artes oficiais de GTA VI.'],
  wow: ['wow-forever-cover.png', 'Grupo de aventureiros de fantasia observa um porto medieval ao entardecer, em ilustração conceitual sobre um MMORPG.', 'wow-forever-body.png', 'Acampamento de fantasia em uma encosta com fogueira e personagens em silhueta, evocando convivência em um MMORPG.'],
  doom: ['doom-slaughter-cover.png', 'Gravura em vermelho e preto mostra uma arena infernal, um portal e símbolos de combate, em referência conceitual a Slaughter Mode.', 'doom-slaughter-body.png', 'Arena isométrica de combate com ondas de inimigos e pontos de controle, sem representar uma captura de DOOM.'],
  lol: ['league-new-dawn-cover.png', 'Mapa isométrico de arena MOBA com rotas, torres e um cristal central; ilustração conceitual, não é o mapa oficial de League of Legends.', 'league-new-dawn-body.png', 'Diagrama de rotas e objetivos de um MOBA em interface esquemática, sem usar personagens ou interface oficiais.'],
  bg3: ['baldurs-mods-cover.png', 'Mesa de RPG com mapa, cartas de personagem, vela e controle de console, em ilustração conceitual sobre mods de Baldur’s Gate 3.', 'baldurs-mods-body.png', 'Cartas e fichas de fantasia dispostas como um conjunto de opções de classe e aparência para uma campanha de RPG.'],
  helldivers: ['helldivers-update-cover.png', 'Cartaz conceitual de ficção científica com um soldado espacial em uma colina e uma nave no céu, sem logotipos oficiais.', 'helldivers-update-body.png', 'Diagrama de equipamento tático espacial com mochila, cinto utilitário e explosivo, em composição técnica própria.'],
  qssr: ['qssr-cover.png', 'Composição abstrata de pixels magenta e ciano se tornando mais nítidos, representando reconstrução de imagem em videogames.', 'qssr-body.png', 'Diagrama conceitual de imagem em baixa resolução reconstruída em alta resolução por processamento temporal.'],
  dreamlight: ['keepsake-sea-cover.png', 'Paisagem costeira em aquarela com ondas e pequenas ilhas, evocando uma expansão de aventura marítima.', 'keepsake-sea-body.png', 'Vista submarina em aquarela com recifes, cardumes e um caminho de luz sob a água.'],
  nocturnal: ['nocturnal-hotfix-cover.png', 'Mapa de plataforma 2D em carvão, com uma figura atravessando uma caverna escura iluminada por uma chama.', 'nocturnal-hotfix-body.png', 'Esquema de mapa de jogo em 2D com salas, ícones e um trecho iluminado, em estilo de quadro-negro.'],
  studio: ['black-forest-buyout-cover.png', 'Pequena equipe de desenvolvimento independente reunida em torno de uma mesa de trabalho em um estúdio de jogos.', 'black-forest-buyout-body.png', 'Estúdio independente representado como uma casa entre árvores, com trilhas que levam a projetos de jogos.'],
};

function makePost({ id, title, excerpt, tag, section = 'NOTÍCIAS', body, sources, visual, imageQuery, imageSources, imageNotes, product, affiliateQuery, affiliate, productName, productPitch, relatedOffers, directPublish = false, publicationDate, scores, reason, sameDaySourceUrls = [], draftNotes }) {
  const art = visuals[visual];
  const isPublic = Boolean(affiliate && productName);
  const scoreKeys = ['timeliness', 'publicInterest', 'reach', 'sourceReliability', 'brazilUtility'];
  return {
    id, category: 'GAMES', section, tag, title, excerpt,
    date: publicationDate || '16 nov 2026', publishedAt: isPublic ? '2026-11-16' : publicationDate === '19 nov 2026' ? '2026-11-19' : undefined, read: `${Math.max(3, Math.ceil(body.split(/\s+/).length / 180))} min`,
    body, sources,
    image: `${imageBase}${art[0]}`, imageAlt: art[1], imageSource: artCredit, imageSourceUrl: imageTerms, imageLicense: artLicense, imageLicenseUrl: imageTerms,
    inlineImage: { image: `${imageBase}${art[2]}`, alt: art[3], credit: artCredit, sourceUrl: imageTerms, license: artLicense, licenseUrl: imageTerms },
    imageResearch: {
      query: imageQuery, checkedAt, status: 'generated-contextual-ai-concept-reviewed',
      sources: [...imageSources.map(url => src('Referência visual pesquisada; não usada como imagem final', url)), src('Termos de Uso da OpenAI', imageTerms)],
      assets: [`${imageBase}${art[0]}`, `${imageBase}${art[2]}`],
      notes: `${imageNotes} A busca visual foi feita para esta pauta. As duas artes finais têm arquivos, enquadramentos e composições próprios; estão identificadas como ilustrações de IA e não imitam capturas ou artes oficiais.`,
    },
    affiliate: affiliate || undefined, productName: productName || undefined, productPitch: productPitch || undefined, relatedOffers,
    affiliateResearch: {
      product: product || 'Nenhum item pertinente confirmado', query: affiliateQuery, tag: 'bitsplease-20', checkedAt,
      status: isPublic ? 'destination-verified' : 'no-relevant-verified-offer',
      notes: isPublic ? 'Página exata da Amazon Brasil e correspondência do produto conferidas. Busca por imagem exata também foi feita, mas os resultados visuais não confirmaram uma fonte autorizada pelo programa; o CTA fica com nome e botão, sem foto inventada.' : 'Busca por oferta e imagem realizada sem oferta Amazon Brasil pertinente confirmada; não inserir produto genérico nem link de outro mercado.',
    },
    status: isPublic || directPublish ? 'published' : 'draft',
    ...(isPublic || directPublish ? {} : { draftNotes: draftNotes || 'Sem uma oferta Amazon Brasil pertinente verificada, este texto fica em rascunho.' }),
    relevanceDate: '2026-11-16', relevanceUpdatedAt: checkedAt,
    relevanceScore: scores.reduce((sum, value) => sum + value, 0),
    relevanceBreakdown: Object.fromEntries(scoreKeys.map((key, index) => [key, scores[index]])),
    relevanceReason: reason,
    relevanceSignals: sources.map(item => ({ ...item, sameDayVerified: sameDaySourceUrls.includes(item.url) })),
  };
}

export const dailyPosts20261116 = [
  makePost({
    id: 'gta-vi-estreia-semana-preload-2026', section: 'GAMES', tag: 'GTA VI · lançamento · PS5 · Xbox Series', visual: 'gta',
    title: 'GTA VI: o que foi confirmado sobre o pré-download e a estreia de 19 de novembro',
    excerpt: 'Um registro das orientações oficiais de pré-carga, das plataformas anunciadas e do limite dos dados de pré-venda divulgados pela PlayStation.',
    body: `Esta matéria foi publicada em 16 de novembro, antes do lançamento de GTA VI, e reúne orientações divulgadas para a estreia de 19 de novembro de 2026. A janela de pré-download já terminou; os dados abaixo ajudam a entender o que foi informado pelas plataformas naquela semana.

A PlayStation anunciou que o pré-download ficaria disponível na PS Store a partir de 10 de novembro. A Rockstar também orientou compradores digitais de PS5 e Xbox Series X|S a baixar o jogo antes da abertura; o horário de liberação variava por plataforma e região.

Na publicação, a PlayStation chamou GTA VI de título mais pré-encomendado da história da PS Store. Esse dado é da própria plataforma: não revela o total de unidades, não representa vendas de Xbox e não permite calcular participação percentual por console. Um recorde em uma loja não equivale a uma comparação de pré-vendas entre plataformas.

A mesma publicação detalhou recursos de PS5, como áudio 3D, SSD e funções do DualSense. Essa é uma descrição oficial da fabricante, não um teste comparativo independente. Para o lançamento, a Rockstar listou PS5 e Xbox Series X|S; nas fontes consultadas à época, não havia data oficial para PC.

Para códigos de edições físicas, a PlayStation orientou que o resgate poderia ser feito assim que o código estivesse disponível. Antes de liberar espaço ou comprar armazenamento, a orientação continua a mesma: conferir o tamanho na página da plataforma, porque estimativas de terceiros não substituem os dados oficiais da loja.

Para números divulgados depois da estreia, consulte também a matéria do Bits, Please sobre os dados de jogadores únicos e horas jogadas informados pela PlayStation. A página da Amazon abaixo corresponde à edição de PS5; confira plataforma, edição e condições do anúncio. Esta matéria não compara o desempenho entre consoles.`,
    sources: [
      src('PlayStation Blog — pré-download, recorde da PS Store e recursos de PS5', 'https://blog.playstation.com/2026/11/10/pre-load-grand-theft-auto-vi-on-ps5-starting-today/'),
      src('Rockstar Support — perguntas sobre pré-download de GTA VI', 'https://support.rockstargames.com/articles/7nPqOA2uCbpEQHXx7KVrYd/grand-theft-auto-vi-pre-load-faq'),
      src('Rockstar Games — anúncio de pré-venda e plataformas', 'https://www.rockstargames.com/newswire/article/5171972o3ak5oa/pre-order-grand-theft-auto-vi-on-june-25'),
      src('Bits, Please — números oficiais divulgados após a estreia', '/artigo/gta-vi-playstation-launch-record-20261124'),
    ],
    imageQuery: 'GTA VI launch PS5 Rockstar official artwork and pre-load',
    imageSources: ['https://www.rockstargames.com/VI', 'https://blog.playstation.com/2026/11/10/pre-load-grand-theft-auto-vi-on-ps5-starting-today/'],
    imageNotes: 'Busca visual específica por GTA VI e pré-carga encontrou principalmente capas de lojas sem licença comercial clara. Foi usada arte conceitual editorial de calendário de lançamento, sem personagens ou logotipo do jogo.',
    product: 'Grand Theft Auto VI para PlayStation 5, ASIN B0H6KT2RWH', affiliateQuery: 'Amazon Brasil Grand Theft Auto VI PS5 B0H6KT2RWH',
    affiliate: 'https://www.amazon.com.br/dp/B0H6KT2RWH?tag=bitsplease-20', productName: 'Grand Theft Auto VI — edição para PlayStation 5',
    productPitch: 'A oferta é da edição de PS5. Confira a plataforma, a edição e os detalhes do vendedor na página da Amazon.',
    scores: [29, 25, 20, 15, 10], reason: 'Lançamento em três dias e pré-download oficial disponível; interesse alto, mas sem dados públicos de unidades que permitam comparar pré-vendas por console.',
  }),
  makePost({
    id: 'review-world-of-warcraft-forever-2026', section: 'REVIEWS', tag: 'World of Warcraft: Forever · análise baseada em pesquisa', visual: 'wow',
    title: 'Review: WoW Forever recupera a aventura em grupo, mas não abandona a lentidão',
    excerpt: 'O retorno ao nível 60 valoriza exploração e convivência, com melhorias de qualidade de vida. Missões repetitivas e ritmo deliberado seguem como barreiras para parte do público.',
    body: `Esta é uma análise editorial baseada em pesquisa e na review publicada por GamesRadar+. O Bits, Please não jogou World of Warcraft: Forever, não mediu desempenho e não atribui nota. A expansão/versão para PC foi lançada em 4 de novembro e está incluída na assinatura de World of Warcraft, conforme a Blizzard.

O ponto que sustenta a proposta é a volta a uma progressão mais pausada, com limite no nível 60 e expansão horizontal em vez de uma corrida constante para aumentar o nível máximo. GamesRadar destaca os encontros espontâneos entre jogadores, o sistema de fogueira, novas masmorras e ajustes de interface e de qualidade de vida. A review também menciona uma nova raça, Skyborne, e centenas de missões adicionadas ao mundo.

Essas mudanças não tentam converter o jogo em um MMO moderno de ritmo acelerado. O próprio formato depende de caminhar, aprender o mapa, conversar com outros jogadores e repetir atividades para obter itens. A crítica de GamesRadar relata momentos de coleta cansativa e observa que a interface de controle ainda pode perder precisão em trechos mais intensos, apesar do suporte a gamepad.

O resultado é mais convincente para quem sente falta de uma aventura compartilhada em que o caminho tenha peso. Para quem prefere progressão rápida, objetivos guiados e menos repetição, a mesma filosofia pode parecer uma sequência de atritos. O jogo não elimina os hábitos antigos: tenta dar a eles um contexto novo e algumas conveniências.

Veredito editorial: WoW Forever é uma recomendação de pesquisa para fãs de MMORPG que querem exploração lenta e interação social, desde que aceitem o trabalho de nivelar e coletar. A review de GamesRadar sustenta esse quadro com dezenas de horas de jogo; nós não tratamos essa experiência alheia como teste próprio. Para jogar no PC, um mouse leve é uma opção de controle precisa, embora o modelo abaixo tenha cinco botões e não seja um mouse MMO com grade lateral.`,
    sources: [
      src('Blizzard — resumo oficial de WoW Forever e calendário', 'https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap'),
      src('GamesRadar+ — review de World of Warcraft: Forever', 'https://www.gamesradar.com/games/world-of-warcraft/world-of-warcraft-forever-review/'),
      src('Blizzard — upgrades, assinatura e acesso ao Forever', 'https://news.blizzard.com/en-us/article/24301508/pre-purchase-world-of-warcraft-forever-upgrades-and-begin-your-next-journey-in-azeroth'),
    ],
    imageQuery: 'World of Warcraft Forever gameplay official 2026 review',
    imageSources: ['https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap', 'https://www.gamesradar.com/games/world-of-warcraft/world-of-warcraft-forever-review/'],
    imageNotes: 'Busca visual por cenários e personagens de WoW Forever. Os materiais encontrados não traziam licença comercial ampla; a arte de capa e a fogueira interna são composições diferentes e conceituais.',
    product: 'Logitech G PRO X SUPERLIGHT, ASIN B09S3Y124Y', affiliateQuery: 'Amazon Brasil Logitech G PRO X SUPERLIGHT B09S3Y124Y',
    affiliate: 'https://www.amazon.com.br/dp/B09S3Y124Y?tag=bitsplease-20', productName: 'Mouse Logitech G PRO X SUPERLIGHT',
    productPitch: 'Mouse para PC leve, com cinco botões; é uma alternativa simples para jogar com mouse e teclado, não um modelo MMO com muitos botões laterais.',
    scores: [24, 20, 19, 15, 8], reason: 'Review recente de um lançamento relevante, com uma análise independente completa e a página oficial confirmando data, plataforma e formato de assinatura.',
  }),
  makePost({
    id: 'doom-dark-ages-slaughter-mode-acesso-2026', tag: 'DOOM: The Dark Ages · Slaughter Mode · atualização', visual: 'doom',
    title: 'DOOM: The Dark Ages — como funciona o Slaughter Mode e quem tem acesso',
    excerpt: 'O modo de arenas com ondas aleatórias foi incluído em uma atualização, mas o acesso exige Revelations, Premium Edition ou Premium Upgrade.',
    body: `Slaughter Mode entra em DOOM: The Dark Ages em 16 de novembro. A Bethesda descreve uma sequência sem fim de arenas e ondas aleatórias, com inimigos, chefes e pontos de controle. A cada checkpoint, o jogador pode proteger os crânios coletados ou arriscar a sequência em troca de um multiplicador maior.

O conteúdo não é gratuito para qualquer pessoa que tenha o jogo-base. A atualização está incluída sem custo adicional para quem possui o DLC Revelations, a Premium Edition ou o Premium Upgrade. Se você comprou a edição padrão, confira a lista de conteúdo da sua biblioteca antes de procurar o modo; o anúncio da Bethesda vincula o acesso à propriedade de uma dessas opções.

As recompensas incluem visuais de Slayer, aparências de armas e ícones de perfil, além de faixas de Andrew Hulshult que podem ser usadas em Slaughter Mode e no Ripatorium. A página oficial também menciona desafios semanais. A estrutura de checkpoints muda a decisão dentro da partida: guardar o que já conquistou reduz o risco, enquanto continuar pode aumentar o retorno e apagar crânios ainda não protegidos se a tentativa acabar.

Isso dá ao modo um objetivo mais específico do que uma arena de sobrevivência tradicional: cada rodada apresenta uma escolha de risco e recompensa. A Bethesda ainda não publicou, no anúncio consultado, números de dificuldade, duração média ou desempenho por plataforma; não prometemos que um monitor ou componente específico aumente a taxa de quadros.

Quem joga no PC e está pensando em trocar de tela pode comparar as especificações do monitor abaixo — resolução QHD e 180 Hz — com a placa de vídeo e os jogos que realmente usa. A tela não é requisito para entrar no Slaughter Mode.`,
    sources: [
      src('Bethesda — Slaughter Mode chega em 16 de novembro', 'https://slayersclub.bethesda.net/en-US/news/doom-the-dark-ages-revelations-slaughter-mode-release-date'),
    ],
    imageQuery: 'DOOM The Dark Ages Revelations Slaughter Mode official arena image',
    imageSources: ['https://slayersclub.bethesda.net/en-US/news/doom-the-dark-ages-revelations-slaughter-mode-release-date', 'https://bethesda.net/en-US/game/doom-the-dark-ages'],
    imageNotes: 'Busca visual foi direcionada ao Slaughter Mode e à expansão. O material oficial encontrado é promocional e não declara licença comercial geral; usamos gravura e arena isométrica próprias, sem logotipo ou personagem identificável.',
    product: 'Monitor AOC AGON Q27G4F QHD 180 Hz, ASIN B0FGDK8DJM', affiliateQuery: 'Amazon Brasil monitor AOC AGON Q27G4F B0FGDK8DJM',
    affiliate: 'https://www.amazon.com.br/dp/B0FGDK8DJM?tag=bitsplease-20', productName: 'Monitor AOC AGON Q27G4F, QHD e 180 Hz',
    productPitch: 'Opção de monitor para montar ou atualizar um setup de PC. A taxa de atualização efetiva depende do hardware e do jogo; não é necessária para acessar o modo.',
    scores: [30, 21, 18, 15, 8], reason: 'Modo novo disponível hoje, com requisitos de acesso e recompensas confirmados no anúncio oficial da Bethesda.',
  }),
  makePost({
    id: 'league-new-dawn-contexto-revelacao-2027', tag: 'League of Legends · New Dawn · atualização', visual: 'lol',
    title: 'League of Legends: New Dawn é uma grande atualização, não um jogo separado',
    excerpt: 'A Riot promete uma reformulação para 2027 e uma apresentação completa em janeiro. O teaser ainda não define sistemas, data exata ou mudanças finais.',
    body: `A Riot revelou New Dawn como uma grande atualização para League of Legends, prevista para 2027. A divulgação veio acompanhada de um teaser e de uma promessa de apresentar os detalhes em janeiro. Por enquanto, a empresa não publicou uma lista completa das mudanças nem uma data de lançamento mais específica.

O ponto mais importante para interpretar a notícia é que New Dawn não foi anunciado como um jogo separado ou uma sequência independente. A liderança de League of Legends esclareceu que se trata de uma atualização ampla do jogo existente. Tratar o projeto como “League 2” cria uma expectativa que a Riot ainda não confirmou.

Isso deixa perguntas abertas sobre o que será renovado: a Riot ainda não apresentou, com detalhes verificáveis, como a atualização afetará a interface, mapas, itens, cliente, sistemas competitivos ou requisitos de hardware. Um teaser é um primeiro sinal de direção, não uma demonstração suficiente para avaliar o estado do jogo nem para prever como uma partida vai mudar.

Para quem joga no PC, a recomendação mais útil é acompanhar a apresentação de janeiro antes de trocar equipamento ou tomar decisões sobre a conta. A página oficial mantém o canal de notícias do jogo, e as informações sobre data e sistemas devem ser revisadas quando a Riot publicar os detalhes. Não há motivo para comprar componentes baseado apenas na palavra “reformulação”.

Se você procura um mouse para partidas de MOBA enquanto isso, o modelo abaixo é uma opção de cinco botões e baixo peso; não é um requisito de New Dawn nem uma indicação oficial da Riot.`,
    sources: [
      src('Riot Games — página oficial de New Dawn', 'https://www.leagueoflegends.com/en-us/new-dawn/'),
      src('Riot Games — teaser e previsão para 2027', 'https://www.leagueoflegends.com/en-us/news/?page=598'),
      src('4Gamer — janela de 2027 e teaser apresentado em novembro', 'https://www.4gamer.net/games/073/G007372/20261116012/'),
      src('Inven Global — anúncio de New Dawn no Worlds 2026', 'https://www.invenglobal.com/latest?c=video'),
      src('Riot Meddler — esclarecimento de que New Dawn não é um jogo separado', 'https://www.reddit.com/r/leagueoflegends/comments/1xxcqt5/riot_meddler_clarifying_new_dawn_changes/'),
    ],
    imageQuery: 'League of Legends New Dawn official teaser map client 2027',
    imageSources: ['https://www.riotgames.com/en/news?q=news', 'https://www.youtube.com/watch?v=vzHrjOMfHPY'],
    imageNotes: 'Busca visual específica pelo teaser de New Dawn. As imagens encontradas são materiais oficiais com personagens e marcas; a capa e o diagrama interno usam somente mapas MOBA esquemáticos, sem campeões ou interface copiados.',
    product: 'Logitech G PRO X SUPERLIGHT, ASIN B09S3Y124Y', affiliateQuery: 'Amazon Brasil Logitech G PRO X SUPERLIGHT mouse MOBA',
    affiliate: 'https://www.amazon.com.br/dp/B09S3Y124Y?tag=bitsplease-20', productName: 'Mouse Logitech G PRO X SUPERLIGHT',
    productPitch: 'Mouse leve de cinco botões para PC. É uma opção de controle, sem recurso especial ou compatibilidade exclusiva com League of Legends.',
    scores: [27, 21, 19, 13, 8], reason: 'Reformulação de um dos MOBAs de maior alcance, com apresentação completa marcada para janeiro; a janela e a natureza do projeto foram confirmadas por fontes atuais.',
    sameDaySourceUrls: ['https://www.4gamer.net/games/073/G007372/20261116012/'],
  }),
  makePost({
    id: 'baldurs-gate-3-14-mods-consoles-novembro-2026', tag: 'Baldur’s Gate 3 · mods · PS5 · Xbox Series', visual: 'bg3',
    title: 'Baldur’s Gate 3 recebe 14 novos mods aprovados para PS5 e Xbox',
    excerpt: 'A nova leva inclui classe, subclasses, armaduras e opções de aparência. Os mods passam pelo menu do jogo, mas o catálogo de console é curado pela Larian.',
    body: `Baldur’s Gate 3 recebeu uma nova leva de 14 mods para PS5 e Xbox Series X|S. A seleção inclui uma classe inspirada em Drizzt, espadas, duas subclasses, armaduras, roupas de acampamento e novas opções de aparência. De acordo com a cobertura do VGC, todos estão disponíveis pelo menu de mods na tela inicial.

O acesso integrado simplifica a instalação em comparação com o PC, mas não significa que qualquer mod esteja liberado. A Larian aprova o conteúdo que entra no catálogo de console, então a seleção é menor e pode diferir entre as plataformas. Para evitar confusão entre listas de PC e de console, confira o nome do mod dentro do gerenciador do próprio jogo.

A adição também mostra que o suporte de mods segue ativo mesmo depois do lançamento. A Larian abriu o sistema oficial no Patch 7, em 2024; desde então, criadores enviam conteúdo para revisão. A leva pode dar novo fôlego a campanhas já conhecidas, sobretudo para quem quer ajustar aparência ou testar regras diferentes, mas não altera a campanha base para todos os jogadores.

Antes de instalar vários mods em um save, leia as instruções exibidas no gerenciador e considere iniciar uma campanha separada. Modificações podem afetar compatibilidade de salvamentos e dependem do próprio conteúdo; a notícia não garante que qualquer combinação funcione sem problemas.

Para quem ainda não tem um console PlayStation e prefere jogar a versão de PS5, a oferta abaixo é um bundle de console com disco e dois jogos. O anúncio dos mods também vale para Xbox Series, então não é uma indicação de exclusividade.`,
    sources: [
      src('VGC — lista dos 14 novos mods e plataformas', 'https://www.videogameschronicle.com/news/baldurs-gate-3-approves-new-wave-of-console-mods/'),
      src('Larian — suporte oficial a mods', 'https://larian.com/support/faqs/official-mod-support_113'),
      src('Baldur’s Gate 3 — termos para criadores de mods', 'https://baldursgate3.game/mods/Larian_BG3_Modding_Terms.pdf'),
    ],
    imageQuery: 'Baldurs Gate 3 approved console mods PS5 Xbox November 2026',
    imageSources: ['https://www.videogameschronicle.com/news/baldurs-gate-3-approves-new-wave-of-console-mods/', 'https://larian.com/support/faqs/official-mod-support_113'],
    imageNotes: 'Busca visual por catálogo e gerenciador de mods de BG3 em consoles. As capturas encontradas não tinham autorização comercial explícita; as ilustrações próprias representam uma mesa de RPG e cartas de opções, em duas composições diferentes.',
    product: 'PlayStation 5 Slim com disco e dois jogos, ASIN B0CSPNDPKG', affiliateQuery: 'Amazon Brasil PlayStation 5 Slim Disk bundle B0CSPNDPKG',
    affiliate: 'https://www.amazon.com.br/dp/B0CSPNDPKG?tag=bitsplease-20', productName: 'PlayStation 5 Slim com leitor e dois jogos',
    productPitch: 'Bundle de PS5 para quem ainda não tem console. Baldur’s Gate 3 também recebe esses mods no Xbox Series X|S; confira o preço e a edição do bundle.',
    scores: [23, 18, 17, 14, 8], reason: 'Nova seleção concreta de 14 mods em um RPG de público amplo; a cobertura independente confirma quantidade, plataformas e tipos de conteúdo.',
  }),
  makePost({
    id: 'helldivers-2-update-dezembro-equipamentos-2026', tag: 'Helldivers 2 · atualização · dezembro', visual: 'helldivers',
    title: 'Helldivers 2 confirma mudanças de equipamento para a atualização de dezembro',
    excerpt: 'Mochilas de mobilidade poderão ser usadas com armas de duas mãos; gases deixam de reduzir velocidade. A Arrowhead também explica o que provavelmente não chega nessa atualização.',
    body: `A próxima atualização grande de Helldivers 2 está prevista para o início de dezembro e já tem um conjunto confirmado de mudanças. No diário de desenvolvimento de novembro, a Arrowhead diz que mochilas Jump, Hover e Warp poderão ser usadas enquanto o jogador carrega itens de duas mãos. O Hellbomb poderá ser armado ou recolhido do chão com uma interação longa, e nuvens de gás deixarão de reduzir a velocidade dos Helldivers.

O estúdio também lista um novo cinto utilitário para levar detonadores e controles remotos sem ocupar as mãos ou o espaço da mochila, novos enigmas em terminais e a possibilidade de tropas SEAF abrirem bunkers com o jogador. São ajustes que podem alterar combinações de equipamento e a leitura de objetivos, mas ainda não foram publicados em uma atualização disponível para jogar.

Há uma expectativa que vale conter: a Arrowhead diz que as correções de direção de Hellpod e ricochete de estratagemas continuam em testes internos e provavelmente não chegarão junto da grande atualização de dezembro. O diário também afirma que o calendário de conteúdo foi confuso ao misturar data de patch e janela em que os recursos entrariam no jogo. A própria equipe está tentando tornar o roteiro mais claro.

Isso separa promessa de conteúdo de prazo garantido. Os recursos listados estão previstos para a atualização, enquanto a equipe ainda pode ajustar o calendário. Um hotfix menor está previsto para esta semana, mas não deve ser confundido com o pacote de dezembro.

Para quem joga no PS5, o controle abaixo tem gatilhos adaptáveis e pode ser usado em outros títulos compatíveis; não muda as regras de equipamento nem é necessário para aproveitar os recursos da atualização.`,
    sources: [
      src('Arrowhead — diário de desenvolvimento de novembro no Steam', 'https://steamcommunity.com/app/553850/homecontent/'),
      src('PC Gamer — contexto sobre o anúncio de mods e do próximo hotfix', 'https://www.pcgamer.com/games/third-person-shooter/after-cracking-down-on-cheat-mods-in-helldivers-2-and-taking-another-steam-review-beating-arrowhead-plans-hotfix-that-should-allow-harmless-cosmetics/'),
    ],
    imageQuery: 'Helldivers 2 official November 2026 developer update gear and utility belt',
    imageSources: ['https://steamcommunity.com/app/553850/homecontent/'],
    imageNotes: 'Busca por imagens do diário de desenvolvimento e equipamentos de Helldivers 2. Como o material oficial não concede uma licença comercial geral, usamos um pôster conceitual espacial e um diagrama de equipamento, sem logos nem personagens do jogo.',
    product: 'Controle DualSense Midnight Black, ASIN B0GL96NJL5', affiliateQuery: 'Amazon Brasil DualSense Midnight Black B0GL96NJL5',
    affiliate: 'https://www.amazon.com.br/dp/B0GL96NJL5?tag=bitsplease-20', productName: 'Controle PlayStation DualSense Midnight Black',
    productPitch: 'Controle para jogar Helldivers 2 no PS5; também funciona em jogos compatíveis no PC. A recomendação é apenas para quem precisa de um controle.',
    scores: [22, 20, 18, 15, 8], reason: 'Roteiro de uma atualização futura em um jogo cooperativo de grande alcance; recursos confirmados e limitações de prazo consultados diretamente no diário dos desenvolvedores.',
  }),
  makePost({
    id: 'spider-man-2-qssr-ps5-update-2026', tag: 'Marvel’s Spider-Man 2 · QSSR · PS5', visual: 'qssr',
    title: 'Spider-Man 2 recebe QSSR no PS5: o que a atualização promete melhorar',
    excerpt: 'A Insomniac diz que o upscaling já está ativo nos modos Fidelidade e Desempenho. A promessa é de mais estabilidade e nitidez de imagem, sem uma medição independente publicada no anúncio.',
    body: `A atualização de Marvel’s Spider-Man 2 com Quick Spectral Super Resolution (QSSR) está disponível no PS5. Em publicação de 13 de novembro, a PlayStation afirma que a tecnologia já foi integrada aos modos Fidelidade e Desempenho do jogo. A Insomniac descreve ganhos de estabilidade e nitidez de imagem; o texto é uma declaração do estúdio, não um benchmark independente com números de resolução ou quadros por segundo.

QSSR é a tecnologia de reconstrução de imagem da PlayStation para o PS5. A Sony diz que ela compartilha a base do PSSR do PS5 Pro e foi criada para trazer recursos de upscaling também ao console que o jogador já possui. Isso não significa que o recurso seja exclusivo do Pro, nem que toda atualização com QSSR altere a taxa de quadros da mesma forma.

O anúncio cita ainda outros jogos que receberão suporte nas semanas seguintes. Para Spider-Man 2, o estúdio menciona os dois modos gráficos, mas não publica uma tabela comparativa antes/depois nem condições de captura. O leitor pode conferir a atualização na versão instalada e alternar os modos disponíveis; não é preciso trocar de console para receber o recurso.

A matéria se limita ao que foi comunicado. A palavra “nitidez” descreve o objetivo anunciado, não garante que toda cena pareça melhor em qualquer tela ou distância. Para avaliar o resultado, ainda faltam medições independentes de qualidade e desempenho feitas na versão final.

Se você ainda não tem PS5 e quer jogar Spider-Man 2, o pacote abaixo é uma opção de entrada; não é uma recomendação para quem já possui o console, e QSSR por si só não justifica um upgrade.`,
    sources: [
      src('PlayStation Blog — QSSR chega a Marvel’s Spider-Man 2', 'https://blog.playstation.com/2026/11/13/qssr-arrives-in-marvels-spider-man-2-control-resonant-arc-raiders-and-hell-let-loose-vietnam'),
    ],
    imageQuery: 'Marvel Spider-Man 2 QSSR update official PlayStation blog November 2026',
    imageSources: ['https://blog.playstation.com/2026/11/13/qssr-arrives-in-marvels-spider-man-2-control-resonant-arc-raiders-and-hell-let-loose-vietnam'],
    imageNotes: 'Busca visual específica pela atualização QSSR de Spider-Man 2. As capturas de jogo não trazem autorização comercial para o blog; a arte final usa um diagrama abstrato de reconstrução de pixels, sem personagem, traje ou interface oficial.',
    product: 'PlayStation 5 Slim com disco e dois jogos, ASIN B0CSPNDPKG', affiliateQuery: 'Amazon Brasil PlayStation 5 Slim B0CSPNDPKG',
    affiliate: 'https://www.amazon.com.br/dp/B0CSPNDPKG?tag=bitsplease-20', productName: 'PlayStation 5 Slim com leitor e dois jogos',
    productPitch: 'Bundle de PS5 indicado somente para quem ainda não possui o console. A atualização QSSR está no PS5 existente e não exige troca de aparelho.',
    scores: [25, 19, 18, 15, 8], reason: 'Atualização de imagem publicada há três dias para um jogo conhecido; os ganhos são apresentados como declaração da Insomniac, sem transformar a promessa em benchmark.',
  }),
  makePost({
    id: 'disney-dreamlight-keepsake-sea-lancamento-2026', tag: 'Disney Dreamlight Valley · The Keepsake Sea · expansão', visual: 'dreamlight',
    title: 'The Keepsake Sea: requisitos da expansão e diferença para a atualização grátis',
    excerpt: 'A expansão de Disney Dreamlight Valley exige o jogo-base, salvo a inclusão na Arcade Edition, e não faz parte da atualização gratuita de dezembro.',
    body: `The Keepsake Sea, expansão de Disney Dreamlight Valley lançada em 18 de novembro, leva a aventura para além da costa, com áreas submersas e a possibilidade de transformar o personagem em sereia ou tritão. A expansão exige o jogo-base e é vendida separadamente.

O anúncio oficial fala de uma estátua misteriosa na água e de um amigo perdido, que dá início à exploração. As edições padrão e Deluxe da expansão incluem quantidades diferentes de Moonstones e recompensas cosméticas. A exceção é o Disney Dreamlight Valley Arcade Edition: a Gameloft informou que seus donos receberiam o conteúdo da expansão sem compra adicional. A expansão não deve ser confundida com a atualização gratuita de dezembro.

No showcase de 2026, a Gameloft também anunciou uma atualização gratuita de Ohana para 9 de dezembro. Ela tem outro calendário e não é parte da compra de The Keepsake Sea. Separar essas datas ajuda a decidir se vale comprar a expansão agora ou esperar mais informações sobre as novidades gratuitas.

Para quem já joga, a pergunta prática é se a temática submarina e a nova história justificam comprar conteúdo adicional, já que a página da expansão exige a licença do jogo-base. Quem ainda não tem o jogo deve conferir a edição e a plataforma antes de comprar: a expansão não substitui o produto base.

Se você joga no Switch 2 e costuma manter muitos jogos digitais instalados, um cartão microSD Express pode ajudar com espaço, mas não é requisito específico desta expansão. Confira a capacidade e a compatibilidade do cartão com o console antes de escolher.`,
    sources: [
      src('Disney Dreamlight Valley — página oficial de The Keepsake Sea', 'https://disneydreamlightvalley.com/expansion/the-keepsake-sea'),
      src('Gameloft — destaques do showcase de 2026 e atualização Ohana', 'https://disneydreamlightvalley.com/news/2026ShowcaseHighlights'),
      src('Disney Dreamlight Valley — primeiro olhar da expansão', 'https://disneydreamlightvalley.com/news/firstlook-sep-9-2026'),
    ],
    imageQuery: 'Disney Dreamlight Valley The Keepsake Sea official expansion art underwater',
    imageSources: ['https://disneydreamlightvalley.com/expansion/the-keepsake-sea', 'https://disneydreamlightvalley.com/news/firstlook-sep-9-2026'],
    imageNotes: 'Busca visual específica pela expansão e por sua ambientação marinha. O site oficial oferece press kit, mas não foi localizada uma licença comercial aberta; as imagens finais são aquarela conceitual de costa e de recife submerso, com cenas distintas.',
    product: 'SanDisk microSD Express 256 GB para Nintendo Switch 2, ASIN B0DFQGVLYF', affiliateQuery: 'Amazon Brasil SanDisk microSD Express 256GB B0DFQGVLYF',
    affiliate: 'https://www.amazon.com.br/dp/B0DFQGVLYF?tag=bitsplease-20', productName: 'Cartão SanDisk microSD Express de 256 GB',
    productPitch: 'Acessório de armazenamento para quem joga no Switch 2 e precisa manter mais jogos digitais instalados. Não é necessário para comprar nem jogar a expansão.',
    scores: [28, 18, 15, 15, 8], reason: 'Expansão oficial chega em dois dias; a distinção entre DLC pago, exigência do jogo-base e atualização gratuita futura é útil ao leitor brasileiro.',
  }),
  makePost({
    id: 'nocturnal-2-hotfix-103-parry-mapa-2026', tag: 'Nocturnal 2 · hotfix 1.0.3 · PC', visual: 'nocturnal',
    title: 'Nocturnal 2 abre o mapa do capítulo final e ajusta a janela de parry',
    excerpt: 'O resumo de hotfixes de 15 de novembro confirma mapa e objetivos visíveis no capítulo final. A versão 1.0.2 também reduziu a invulnerabilidade do dash e melhorou a leitura de salas.',
    body: `Nocturnal 2 recebeu uma rodada de hotfixes que inclui a versão 1.0.3. No resumo publicado pela equipe no Steam em 15 de novembro, o parry passa de uma janela de 0,1 para 0,2 segundo e o mapa fica disponível no capítulo final, com os objetivos novamente visíveis. A atualização também corrige um ícone de estátua atribuído ao nível errado.

O resumo inclui alterações anteriores da versão 1.0.2: orientação e legibilidade melhores no capítulo final, menos vida para inimigos voadores e redução da invulnerabilidade do dash de 0,35 para 0,2 segundo. A equipe também corrigiu o mapa e outros problemas de travamento e login.

Uma nota específica da equipe afirma que assar a iluminação melhorou em 20 a 45 FPS o desempenho com o mapa aberto. Esse intervalo é descrito pelo desenvolvedor e depende do contexto de teste; não é uma medição independente replicada por nós nem uma promessa de ganho em todo PC. O changelog não informa configuração de máquina ou resolução para cada valor.

O ajuste de parry aumenta a janela de resposta, enquanto o dash fica menos invulnerável. São duas decisões de equilíbrio em direções diferentes, e a leitura do mapa no fim da campanha resolve uma questão prática de navegação. Se você chegou ao capítulo final, confira se a atualização está instalada e abra o mapa para localizar os objetivos. A equipe observa que um problema específico de salvamentos com o final verdadeiro exige rever os créditos para aplicar a correção.

O jogo tem suporte a controle e a equipe recomenda configurações específicas para Steam Deck. Para jogar no PC com controle, o DualSense abaixo é compatível com jogos de Steam que ofereçam suporte; recursos hápticos variam por título.`,
    sources: [
      src('Sunnyside Games — resumo oficial dos hotfixes 1.0.2 e 1.0.3', 'https://steamcommunity.com/app/2847780/allnews/'),
      src('Sunnyside Games — página de Nocturnal 2 no Steam', 'https://store.steampowered.com/app/2847780/Nocturnal_2/'),
    ],
    imageQuery: 'Nocturnal 2 official game screenshots map chapter final hotfix November 2026',
    imageSources: ['https://steamcommunity.com/app/2847780/allnews/', 'https://store.steampowered.com/app/2847780/Nocturnal_2/'],
    imageNotes: 'Busca visual por mapa e cenários de Nocturnal 2. As capturas do Steam não têm licença comercial aberta; a arte conceitual usa uma caverna 2D em carvão e um diagrama de mapa, com enquadramentos distintos.',
    product: 'Controle DualSense Midnight Black + cabo para PC, ASIN B0GL96NJL5', affiliateQuery: 'Amazon Brasil DualSense PC B0GL96NJL5',
    affiliate: 'https://www.amazon.com.br/dp/B0GL96NJL5?tag=bitsplease-20', productName: 'Controle PlayStation DualSense Midnight Black com cabo USB',
    productPitch: 'Controle com conexão para PC por Bluetooth ou cabo USB. É opcional e recursos de vibração variam conforme o jogo.',
    scores: [28, 12, 9, 15, 8], reason: 'Correções do desenvolvedor publicadas ontem mudam leitura de mapa e janela de parry; alcance menor que as pautas de grandes franquias.',
  }),
  makePost({
    id: 'black-forest-games-independente-third-signal-2026', tag: 'Indústria · Black Forest Games · Third Signal', visual: 'studio',
    directPublish: true, publicationDate: '19 nov 2026',
    title: 'Black Forest Games volta a ser independente e cofunda a Third Signal',
    excerpt: 'O estúdio alemão saiu da estrutura da THQ Nordic por meio de uma aquisição pela própria gestão. A parceria com a antiga controladora continua, segundo o anúncio.',
    body: `A Black Forest Games anunciou em 11 de novembro que está deixando a estrutura da THQ Nordic por meio de uma aquisição pela equipe de gestão. O estúdio passa a integrar a Third Signal, um grupo independente de desenvolvedoras. O comunicado diz que a operação foi acordada com a antiga controladora e que as duas partes manterão uma parceria de publicação e distribuição.

A mudança altera a estrutura empresarial, mas não significa que o estúdio tenha se afastado de todos os projetos ou relações comerciais anteriores. A própria Third Signal descreve uma continuidade de colaboração com a THQ Nordic. Os detalhes financeiros da transação não foram divulgados no comunicado consultado.

A Black Forest Games é conhecida por trabalhos como Giana Sisters: Twisted Dreams e os remakes de Destroy All Humans. A trajetória ajuda a entender por que uma separação pode ter significado para a equipe: ela passa a operar como estúdio independente, com um novo grupo ao redor, em vez de fazer parte de uma grande estrutura corporativa.

Isso ainda não nos diz quais jogos estão em produção, quais contratos futuros já existem ou como a mudança afetará cronogramas. O anúncio não promete um novo título nem revela uma janela de lançamento. Por isso, a consequência imediata é organizacional: novo grupo, liderança e relação de publicação, com continuidade comercial anunciada. A trajetória anterior pode ser revisitada em Destroy All Humans! e em sua sequência, mas esses jogos não antecipam o que a equipe independente fará a seguir.`,
    sources: [
      src('Third Signal / Games Press — anúncio de independência e aquisição pela gestão', 'https://www.gamespress.com/de/Black-Forest-Games-spins-out-of-THQ-Nordic-to-co-found-Third-Signal'),
      src('PC Gamer — contexto da saída e histórico do estúdio', 'https://www.pcgamer.com/gaming-industry/giana-sisters-developer-black-forest-games-buys-itself-out-of-embracer-some-of-the-best-games-of-the-last-decade-came-from-teams-of-fifty-not-five-hundred/'),
      src('Black Forest Games — catálogo oficial', 'https://black-forest-games.com/games/'),
    ],
    imageQuery: 'Black Forest Games Third Signal independent studio official press images',
    imageSources: ['https://www.gamespress.com/de/Black-Forest-Games-spins-out-of-THQ-Nordic-to-co-found-Third-Signal', 'https://black-forest-games.com/games/'],
    imageNotes: 'Busca visual pelo estúdio, comunicado e catálogo. As imagens corporativas localizadas não indicavam autorização aberta de uso comercial; a capa e a imagem interna representam uma equipe independente e uma casa de estúdio em ambientes diferentes.',
    affiliateQuery: 'Amazon Brasil jogos Black Forest Games Destroy All Humans Giana Sisters',
    relatedOffers: [
      { productName: 'Destroy All Humans! 2 – Reprobed', affiliate: amazonSearch('Destroy All Humans 2 Reprobed PS5 Xbox PC'), affiliateLinkType: 'search', productPitch: 'Jogo da Black Forest Games; confira plataforma, edição e disponibilidade.' },
      { productName: 'Destroy All Humans! (2020)', affiliate: amazonSearch('Destroy All Humans 2020 PS4 Xbox PC'), affiliateLinkType: 'search', productPitch: 'O remake anterior da franquia mencionada na matéria; confira plataforma e edição.' },
    ],
    scores: [20, 15, 13, 14, 7], reason: 'Mudança corporativa confirmada por comunicado do novo grupo e contextualizada por cobertura especializada; impacto em jogos futuros ainda não foi anunciado.',
  }),
];
