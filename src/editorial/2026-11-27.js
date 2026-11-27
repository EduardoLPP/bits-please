const today = '2026-11-27';
const checkedAt = '2026-11-27T08:05:00-03:00';
const terms = 'https://openai.com/policies/terms-of-use/';
const root = '/images/editorial/2026-11-27/';
const art = (file, alt, prompt) => ({
  image: `${root}${file}`,
  alt: `Ilustração conceitual gerada por IA: ${alt}`,
  credit: 'Ilustração conceitual original gerada com OpenAI ImageGen — 27/11/2026',
  sourceUrl: terms,
  license: 'Saída gerada; titularidade do usuário conforme os Termos de Uso da OpenAI, sujeita à lei e a direitos de terceiros',
  licenseUrl: terms,
  prompt,
});
const makePost = (p) => {
  const cover = art(p.coverFile, p.coverAlt, p.coverPrompt);
  const inline = art(p.inlineFile, p.inlineAlt, p.inlinePrompt);
  const { prompt: coverPrompt, ...coverImage } = cover;
  const { prompt: inlinePrompt, ...inlineImage } = inline;
  return {
    id: p.id, category: 'GAMES', section: p.section || 'NOTÍCIAS', tag: p.tag,
    title: p.title, excerpt: p.excerpt, date: '27 nov 2026', publishedAt: today, read: p.read || '5 min',
    image: cover.image, imageAlt: cover.alt, imageSource: cover.credit,
    imageSourceUrl: cover.sourceUrl, imageLicense: cover.license, imageLicenseUrl: cover.licenseUrl,
    inlineImage, body: p.body, status: p.status || 'draft', ...(p.status === 'published' ? {} : { draftNotes: p.draftNotes || 'Rascunho editorial preparado; revisar fatos e confirmar o destino comercial antes de publicar.' }),
    affiliate: p.affiliate, affiliateLinkType: p.affiliateLinkType || 'search', productName: p.productName, productPitch: p.productPitch,
    affiliateResearch: p.affiliateResearch || { checkedAt, source: 'Amazon Brasil', tag: 'bitsplease-20', status: 'tagged-amazon-search', notes: 'Busca da Amazon Brasil preparada com a tag bitsplease-20. Resultados, edição, vendedor, preço e disponibilidade podem mudar; nenhum preço ou estoque foi afirmado.' },
    sources: [...p.sources, { label: p.affiliateSourceLabel || 'Amazon Brasil — busca etiquetada do produto relacionado', url: p.affiliate }, { label: 'OpenAI — Termos de Uso para saída gerada', url: terms }],
    imageResearch: { checkedAt, query: p.imageQuery, status: 'generated-contextual-ai-reviewed', generator: 'OpenAI ImageGen', method: 'Busca de imagens feita; não foi confirmado par real com permissão para uso comercial. Duas ilustrações conceituais originais e distintas geradas para esta pauta; não são capturas nem artes oficiais.', assets: [
      { file: cover.image, tool: 'OpenAI ImageGen', prompt: coverPrompt },
      { file: inline.image, tool: 'OpenAI ImageGen', prompt: inlinePrompt },
    ] },
    relevanceDate: today, relevanceUpdatedAt: checkedAt, relevanceScore: p.score,
    relevanceBreakdown: p.breakdown, relevanceReason: p.reason, relevanceSignals: p.signals,
  };
};

export const dailyPosts20261127 = [
  makePost({
    id: 'silksong-cherry-time-horario-sea-of-sorrow-20261127',
    status: 'published',
    tag: 'Hollow Knight: Silksong · Cherry Time · agenda',
    title: 'Cherry Time: que horas começa a transmissão de Silksong no Brasil',
    excerpt: 'A apresentação da Team Cherry está marcada para esta sexta, com novidades gerais e uma atualização sobre a expansão Sea of Sorrow. O estúdio ainda não divulgou a data de lançamento do conteúdo.',
    body: `A Team Cherry marcou Cherry Time para esta sexta-feira, 27 de novembro. A apresentação promete “um monte de anúncios” e uma atualização sobre Hollow Knight: Silksong – Sea of Sorrow. O estúdio não antecipou quais serão os outros anúncios nem confirmou uma data de lançamento para a expansão.\n\nA página oficial informa 7h no horário do Pacífico e 10h no horário do leste dos Estados Unidos. Como os dois locais já estão no horário padrão nesta época do ano, isso corresponde a 12h em Brasília (UTC−3). A transmissão foi marcada para o canal oficial da Team Cherry no YouTube; o horário é uma conversão dos fusos publicados pelo estúdio.\n\nSea of Sorrow foi anunciada em dezembro de 2025 como a primeira expansão de Silksong. A descrição inicial prometeu áreas, chefes e ferramentas novas, e a Team Cherry a classificou como gratuita para quem possui o jogo. Isso é o que já está confirmado: o teaser não mostra conteúdo suficiente para descrever fases ou mecânicas, e a mensagem de hoje não garante que a expansão será lançada junto com a apresentação.\n\nA distinção entre “atualização” e “lançamento” importa. A transmissão pode trazer detalhes de desenvolvimento, uma janela ou uma data, mas até o início do evento não há base para afirmar que Sea of Sorrow estará disponível hoje. Para quem quer acompanhar, a opção é abrir o vídeo oficial ao meio-dia de Brasília e conferir as informações depois da exibição.\n\nO botão abaixo leva a uma busca pelo jogo em mídia física para Switch; a oferta, região e edição precisam ser verificadas na Amazon. Como participante do Programa de Associados da Amazon, sou remunerado pelas compras qualificadas efetuadas.`,
    coverFile: 'silksong-event-cover-v2.jpg', coverAlt: 'Mar salgado desabitado, farol antigo, recifes claros e fios de seda vermelhos levados pelo vento.',
    coverPrompt: 'Mar salgado desabitado com farol antigo, recifes de coral pálido, pontes de pedra quebradas e fios de seda vermelhos ao vento; aquarela e nanquim, azul ardósia e vermelho discreto, horizontal. Sem personagem ou imitação de arte oficial.',
    inlineFile: 'silksong-event-map-v2.jpg', inlineAlt: 'Mapa costeiro abstrato sobre bancada de marinheiro, com bússola e fio vermelho.',
    inlinePrompt: 'Vista angular de mapa costeiro abstrato em bancada de marinheiro, bússola de latão, fio vermelho e lanterna; gouache editorial, marinho e cobre. Sem pessoas, personagens, palavras, logos ou arte oficial.',
    imageQuery: 'Team Cherry Sea of Sorrow official press art commercial use; nautical metroidvania concept illustration',
    affiliate: 'https://www.amazon.com.br/s?k=Hollow+Knight+Silksong+Nintendo+Switch&tag=bitsplease-20',
    productName: 'Busca por Hollow Knight: Silksong para Nintendo Switch',
    productPitch: 'A busca é pelo jogo citado. Confira se a oferta é para a edição e região desejadas; a disponibilidade pode variar.',
    sources: [
      { label: 'Team Cherry — anúncio oficial de Cherry Time e fusos', url: 'https://www.teamcherry.com.au/' },
      { label: 'Team Cherry — postagem oficial com a transmissão marcada', url: 'https://bsky.app/profile/teamcherry.bsky.social/post/3n35gh4jhac2x' },
      { label: 'Team Cherry — Sea of Sorrow anunciada como expansão gratuita', url: 'https://www.teamcherry.com.au/blog/holiday2025' },
      { label: 'Nintendo Life — cobertura da apresentação publicada em 27/11', url: 'https://www.nintendolife.com/news/2026/11/team-cherry-special-presentation-will-share-hollow-knight-silksong-dlc-news-today' },
    ],
    score: 91, breakdown: { timeliness: 30, publicInterest: 22, reach: 19, sourceReliability: 14, brazilUtility: 6 },
    reason: 'A Team Cherry confirmou uma apresentação hoje e destacou uma atualização sobre a expansão de Silksong; a cobertura especializada de hoje confirma o interesse editorial. O horário brasileiro foi calculado a partir dos fusos oficiais.',
    signals: [
      { label: 'Nintendo Life — matéria sobre a transmissão publicada em 27/11', url: 'https://www.nintendolife.com/news/2026/11/team-cherry-special-presentation-will-share-hollow-knight-silksong-dlc-news-today', sameDayVerified: true },
      { label: 'Team Cherry — horários oficiais da transmissão e tópico de Sea of Sorrow', url: 'https://www.teamcherry.com.au/', sameDayVerified: false },
    ],
    draftNotes: 'Manter como rascunho até a transmissão: atualizar o texto com o que de fato for anunciado e retirar qualquer expectativa que não se confirme. O link Amazon é uma busca etiquetada, sem edição, estoque ou preço garantidos.',
  }),
  makePost({
    id: 'review-hollow-knight-silksong-pesquisa-20261127', section: 'REVIEWS',
    status: 'published',
    tag: 'Hollow Knight: Silksong · review editorial baseada em pesquisa',
    title: 'Review: Silksong transforma precisão e dificuldade em convite à exploração',
    excerpt: 'A continuação dá mais mobilidade a Hornet e constrói Pharloom em torno de combate exigente e caminhos que se cruzam. Síntese de reviews independentes; o Bits, Please não testou o jogo nem atribui nota.',
    body: `Esta é uma análise editorial baseada em reviews de veículos especializados. O Bits, Please não testou Hollow Knight: Silksong e não atribui nota própria. Team Cherry apresentou o jogo como uma aventura em um novo reino, com Hornet no centro, e confirmou o lançamento para PC, Switch, Switch 2, PlayStation e Xbox.\n\nA diferença de ritmo aparece logo na protagonista. Hornet se move com mais velocidade e alcança plataformas com um repertório mais amplo de saltos, investidas e ferramentas. PC Gamer e GamesRadar destacam que essa agilidade não torna Pharloom mais simples: os encontros exigem leitura dos padrões e precisão, e a punição por erro pode ser severa. A mobilidade abre opções, mas a margem para improvisar continua limitada durante muitas lutas.\n\nA exploração é o contraponto a esse rigor. As áreas verticais e os atalhos conectam vilarejos, rotas ocultas e arenas, enquanto os personagens e tarefas dão motivos para voltar a locais já visitados. As reviews da Eurogamer e do PC Gamer convergem no valor do mundo e no prazer de descobrir novas passagens; ambas também apontam que a escala pode alongar o percurso e que a dificuldade não combina com todo perfil de jogador.\n\nA principal ressalva editorial não é uma falha única, mas o tipo de compromisso que o jogo pede. Quem gosta de aprender chefes por tentativa, observar o mapa e retornar depois de adquirir uma habilidade encontrará um ciclo bem ajustado. Quem prefere progressão mais linear ou checkpoints generosos pode sentir que alguns obstáculos interrompem o interesse pela exploração. O primeiro Hollow Knight ajuda a contextualizar os sistemas, mas a sequência funciona como uma aventura própria, não como conteúdo adicional necessário para entendê-la.\n\nVeredito editorial: Silksong sustenta sua identidade com movimento elegante, combate atento e um mundo que recompensa a curiosidade. A dificuldade elevada e o ritmo de descoberta podem transformar o retorno a certas áreas em desgaste. A recomendação depende de o jogador gostar de persistir e de montar seu próprio mapa mental. A edição abaixo é uma busca pela versão de Switch; confirme plataforma, idioma e região. Como participante do Programa de Associados da Amazon, sou remunerado pelas compras qualificadas efetuadas.`,
    coverFile: 'silksong-review-cover-v2.jpg', coverAlt: 'Cidade subterrânea vertical de pedra, com torres, escadarias e estandartes de seda vermelhos.',
    coverPrompt: 'Cidade subterrânea vertical de pedra pálida com torres, escadarias, arcos e estandartes de seda carmim; viajante anônimo diminuto como escala, sem insetos ou máscara, composição horizontal, marfim e vinho. Arte original sem imitação de jogo.',
    inlineFile: 'silksong-review-foundry-v2.jpg', inlineAlt: 'Arena circular de uma fundição subterrânea, com sino mecânico suspenso sobre ponte estreita.',
    inlinePrompt: 'Arena circular abandonada em fundição subterrânea, grande sino mecânico suspenso sobre ponte estreita, estandartes vermelhos e plantas luminosas; sem combatentes ou personagens. Enquadramento fechado distinto, pedra, bordô e ouro. Arte original.',
    imageQuery: 'Hollow Knight Silksong official press kit screenshots commercial license',
    affiliate: 'https://www.amazon.com.br/s?k=Hollow+Knight+Silksong+Nintendo+Switch&tag=bitsplease-20',
    productName: 'Busca por Hollow Knight: Silksong para Nintendo Switch',
    productPitch: 'O CTA procura a edição de Switch analisada nesta matéria. Confira formato, região e vendedor antes da compra.',
    sources: [
      { label: 'Team Cherry — páginas oficiais do jogo e plataformas', url: 'https://www.teamcherry.com.au/games' },
      { label: 'Team Cherry — anúncio de lançamento', url: 'https://www.teamcherry.com.au/blog/silksong-available-now' },
      { label: 'PC Gamer — review e discussão sobre dificuldade e exploração', url: 'https://www.pcgamer.com/games/action/hollow-knight-silksong-review/' },
      { label: 'GamesRadar — review independente', url: 'https://www.gamesradar.com/games/action/hollow-knight-silksong-review/' },
      { label: 'Team Cherry — teaser da expansão gratuita Sea of Sorrow', url: 'https://www.teamcherry.com.au/blog/holiday2025' },
    ],
    score: 41, breakdown: { timeliness: 8, publicInterest: 10, reach: 17, sourceReliability: 5, brazilUtility: 1 },
    reason: 'O jogo tem público amplo e a Team Cherry volta a falar dele na apresentação de hoje; a review é baseada em análises independentes anteriores e não reivindica ser uma novidade de lançamento.',
    signals: [
      { label: 'Team Cherry — apresentação de 27/11 com atualização de Sea of Sorrow', url: 'https://www.teamcherry.com.au/', sameDayVerified: false },
    ],
    draftNotes: 'Review baseada em pesquisa, sem teste próprio. Manter em rascunho até revisão editorial e validação da busca Amazon para a edição local; arte de produto não incluída. A página de Eurogamer foi removida porque a URL referida não pôde ser confirmada nesta execução.',
  }),
  makePost({
    id: 'arkheron-acesso-antecipado-gratuito-friend-pass-20261127',
    status: 'published',
    tag: 'Arkheron · acesso antecipado · fim de semana gratuito',
    title: 'Arkheron abre acesso antecipado com fim de semana gratuito',
    excerpt: 'O jogo de combate PvP em equipes chega a Steam, PS5 e Xbox Series. A versão gratuita de estreia vale até 29 de novembro; depois, o modelo muda conforme a plataforma.',
    body: `Arkheron inicia o acesso antecipado nesta sexta-feira, 27 de novembro, com lançamento planejado para Steam, PlayStation 5 e Xbox Series X|S. A página do Steam identifica o lançamento para as 11h de Brasília (10h ET); no Xbox, o jogo aparece como Game Preview. São estágios de acesso antecipado, não a versão 1.0.\n\nA Bonfire Studios abriu uma janela gratuita de estreia até domingo, 29 de novembro. O Friend Pass oferece acesso integral aos modos competitivos Ascension e Spires durante o fim de semana. No Xbox Series, jogar multiplayer online ainda exige uma assinatura elegível de Game Pass; a oferta temporária do jogo não elimina essa condição da plataforma.\n\nDepois do fim de semana, o acesso deixa de ser universal. A página oficial informa preço de US$ 24,99 nos Estados Unidos e condições regionais diferentes; assinantes de Xbox Game Pass Ultimate e PC Game Pass terão acesso ao jogo no período de Game Preview indicado pelo estúdio. O valor em dólares não deve ser convertido em preço brasileiro: a loja local define o preço final e pode variar por plataforma.\n\nO jogo organiza partidas PvP em torno de equipes de três, itens que mudam as habilidades disponíveis e progressão por andares. O próprio estúdio diz que a experiência ainda precisa evoluir em legibilidade, matchmaking, estabilidade e equilíbrio. Isso torna o fim de semana gratuito uma forma de experimentar os modos e testar a conexão com amigos, sem assumir que conteúdo, balanceamento ou disponibilidade de servidores estejam finalizados.\n\nQuem pretende jogar em grupo deve confirmar que todos escolheram a plataforma e o Friend Pass corretos e observar a janela de domingo. O botão abaixo leva a uma busca de controles Xbox, um acessório compatível para quem joga no console; não é uma compra do jogo. Como participante do Programa de Associados da Amazon, sou remunerado pelas compras qualificadas efetuadas.`,
    coverFile: 'arkheron-early-access-cover.jpg', coverAlt: 'Três aventureiros em uma arena circular suspensa dentro de uma torre fantástica.',
    coverPrompt: 'Ilustração editorial original: três aventureiros genéricos em grande arena circular de pedra suspensa numa torre impossível, rivais ao longe e feixes de luz, ardósia e musgo. Não copiar arte de Arkheron nem fazer captura/UI/logotipo.',
    inlineFile: 'arkheron-tower-map.jpg', inlineAlt: 'Mapa abstrato de rotas visto de cima com três aventureiros e relíquias.',
    inlinePrompt: 'Vista superior original de três aventureiros minúsculos ao redor de um mapa de pedra luminoso com rotas ramificadas e relíquias abstratas, índigo, bronze e ciano. Ilustração editorial, não interface nem arte oficial.',
    imageQuery: 'Arkheron official press images commercial use permission; original fantasy arena editorial illustration',
    affiliate: 'https://www.amazon.com.br/s?k=controle+Xbox+sem+fio+Series+X%7CS&tag=bitsplease-20',
    productName: 'Busca por controle sem fio para Xbox Series X|S',
    productPitch: 'A busca é por um acessório para jogar Arkheron no Xbox, não pelo jogo. Confira modelo, compatibilidade e conexão.',
    sources: [
      { label: 'Bonfire Studios — aviso oficial de lançamento e plataformas', url: 'https://www.arkheron.com/en_US/news/earlyaccess_announcement/index.html' },
      { label: 'Steam — horários, conteúdo e planos de acesso antecipado', url: 'https://store.steampowered.com/app/3333850/Arkheron/' },
      { label: 'Bonfire Studios — abertura do fim de semana gratuito', url: 'https://www.arkheron.com/en_US/news/opening-weekend/' },
      { label: 'Xbox Wire — Arkheron em Game Preview', url: 'https://news.xbox.com/en-us/2026/11/20/next-week-on-xbox-new-games-for-november-23-to-27/' },
      { label: 'Games for Humans — cobertura independente da janela gratuita publicada em 27/11', url: 'https://gamesforhumans.net/news/arkheron-early-access-is-free-to-try-on-ps5-and-steam-through-nov-29' },
      { label: 'Creative Bloq — entrevista com o diretor de arte e contexto do jogo', url: 'https://www.creativebloq.com/features/arkherons-art-director-explains-why-making-a-beautiful-game-is-sometimes-about-knowing-what-to-leave-out' },
    ],
    score: 82, breakdown: { timeliness: 30, publicInterest: 20, reach: 14, sourceReliability: 13, brazilUtility: 5 },
    reason: 'O acesso antecipado e a janela gratuita começam hoje, com regras diferentes por plataforma. As páginas da desenvolvedora, Steam e Xbox confirmam os detalhes centrais; a cobertura independente de hoje esclarece o teste grátis.',
    signals: [
      { label: 'Steam — lançamento de Arkheron previsto para 27/11', url: 'https://store.steampowered.com/app/3333850/Arkheron/', sameDayVerified: true },
      { label: 'Games for Humans — janela gratuita publicada em 27/11', url: 'https://gamesforhumans.net/news/arkheron-early-access-is-free-to-try-on-ps5-and-steam-through-nov-29', sameDayVerified: true },
    ],
    draftNotes: 'Confirmar abertura efetiva e condições locais na loja Xbox/PSN/Steam antes de publicar. Fonte da desenvolvedora: preço citado é dos EUA, sem inferir conversão para o Brasil. CTA é uma busca etiquetada por acessório compatível.',
  }),
];
