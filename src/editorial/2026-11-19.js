const terms = 'https://openai.com/policies/terms-of-use/';
const imageCredit = 'Ilustração conceitual original gerada por IA com OpenAI ImageGen; não é captura de jogo nem arte oficial.';
const imageLicense = 'Output gerado conforme os Termos de Uso da OpenAI; titularidade sujeita à lei aplicável.';
const amazonSearch = query => `https://www.amazon.com.br/s?k=${encodeURIComponent(query)}&tag=bitsplease-20`;

export const dailyPosts20261119 = [
  {
    id: 'review-binding-of-isaac-repentance-plus-20261119',
    category: 'GAMES', section: 'REVIEWS', status: 'published',
    tag: 'The Binding of Isaac · Repentance+ · Switch 2 · PS5 · Xbox',
    title: 'Review: The Binding of Isaac: Repentance+ expande o cooperativo sem mudar o núcleo',
    excerpt: 'O relançamento reúne anos de conteúdo e inclui co-op local e online para até quatro jogadores. Esta análise é baseada em pesquisa e em reviews especializadas; o Bits, Please não fez teste próprio nem atribui nota.',
    date: '19 nov 2026', read: '5 min',
    relevanceDate: '2026-11-19', relevanceScore: 93,
    relevanceBreakdown: { timeliness: 30, publicInterest: 25, reach: 15, sourceReliability: 14, brazilUtility: 9 },
    relevanceReason: 'Lançamento de uma nova edição de console anunciado pela Nicalis e cruzado com a listagem oficial brasileira da Nintendo; duas reviews especializadas da edição Switch 2 foram consultadas, sem alegar teste próprio.',
    relevanceUpdatedAt: '2026-11-19T08:02:00-03:00',
    relevanceSignals: [
      { label: 'Nicalis via Games Press — lançamento e modos online', url: 'https://www.gamespress.com/en-US/ITS-DANGEROUS-TO-GO-ALONE-THE-BINDING-OF-ISAAC-REPENTANCE-HITS-NINTEND', sameDayVerified: true },
      { label: 'Nintendo Brasil — edição Switch 2, recursos e data', url: 'https://www.nintendo.com/pt-br/store/products/the-binding-of-isaac-repentance-plus-switch-2/', sameDayVerified: false },
    ],
    image: '/images/editorial-conceitual/2026-11-19/isaac-cover.png',
    imageAlt: 'Figura infantil original observa salas conectadas, portas, corações, chaves e itens em uma ilustração de fantasia roguelike.',
    imageSource: imageCredit, imageSourceUrl: terms, imageLicense, imageLicenseUrl: terms,
    inlineImage: {
      image: '/images/editorial-conceitual/2026-11-19/isaac-body.png',
      alt: 'Mapa de salas em estilo de jogo roguelike com portas, inimigos em silhueta, coração, chave e moeda.',
      credit: imageCredit, sourceUrl: terms, license: imageLicense, licenseUrl: terms,
    },
    imageResearch: {
      query: 'The Binding of Isaac Repentance+ Nintendo Nicalis official press screenshots 2026',
      checkedAt: '2026-11-19T08:02:00-03:00', status: 'generated-contextual-ai-reviewed', generator: 'OpenAI ImageGen',
      assets: ['/images/editorial-conceitual/2026-11-19/isaac-cover.png', '/images/editorial-conceitual/2026-11-19/isaac-body.png'],
      notes: 'Duas ilustrações conceituais originais foram geradas para a matéria. Não são capturas nem artes oficiais do jogo; crédito e termos estão publicados junto às imagens.',
    },
    body: `Esta é uma análise editorial baseada em pesquisa e em reviews de veículos especializados. O Bits, Please não testou The Binding of Isaac: Repentance+ e não atribui nota própria. A nova edição chegou a Nintendo Switch 2, PlayStation 5 e Xbox Series X|S em 19 de novembro de 2026. No Switch 2, a Nintendo Store brasileira lista uma edição digital; a Nicalis também anuncia opção física nessa plataforma.\n\nRepentance+ concentra centenas de adições e melhorias acumuladas desde a expansão Repentance de 2021. O núcleo segue o ciclo conhecido de Isaac: atravessar salas aleatórias, lidar com inimigos em combate twin-stick e adaptar a estratégia aos itens encontrados. A Nintendo informa mais de 700 itens, 34 personagens e mais de 330 tipos de inimigos. A escala favorece novas combinações por muitas partidas, mas também ajuda a explicar por que a curva de aprendizado pode ser dura para quem chega agora.\n\nA mudança mais concreta está no acesso à informação e no multiplayer. A opção de descrições de itens reduz a dependência de consultas externas, um ponto que reviews anteriores da série destacavam como atrito. O co-op permite até quatro pessoas localmente ou online, em todos os modos, segundo a Nicalis. Isso abre outra forma de jogar, mas não altera o desenho essencial de cada partida.\n\nAs avaliações da edição para Switch 2 publicadas por Noisy Pixel e WayTooManyGames convergem no valor do repertório e da rejogabilidade. Ambas apontam também que a quantidade de sistemas pode sobrecarregar iniciantes; a WayTooManyGames considera que o pacote oferece menos motivo para recompra a quem já possui o jogo e as expansões no Switch original. Esse é um comentário daquele veículo, não uma confirmação de política de upgrade para cada conta ou região.\n\nO quadro editorial é de uma versão mais completa e social de um roguelike que já se sustentava na variedade das partidas. Para fãs que querem cooperativo online e informações de itens integradas, as mudanças são concretas. Para quem já tem a coleção anterior ou espera um jogo simples de aprender, o volume de conteúdo não resolve sozinho a curva de entrada. Cross-save e crossplay entre plataformas foram anunciados pela publicadora como atualizações posteriores ao lançamento; não os tratamos como funções já disponíveis.`,
    affiliate: amazonSearch('Nintendo Switch 2 console'),
    affiliateLinkType: 'search', productName: 'Console Nintendo Switch 2',
    productPitch: 'A Nintendo Store Brasil lista Repentance+ para Switch 2. Esta busca é pelo console, não inclui o jogo; confirme modelo, vendedor e disponibilidade antes de comprar.',
    affiliateResearch: {
      product: 'Console Nintendo Switch 2',
      query: 'Nintendo Switch 2 console', tag: 'bitsplease-20',
      checkedAt: '2026-11-19T08:02:00-03:00', status: 'tagged-amazon-search',
      notes: 'Busca Amazon Brasil pelo console compatível; jogo não incluído. Modelo, estoque e condição precisam ser confirmados na página da loja.',
    },
    relatedOffers: [{ productName: 'The Binding of Isaac: Rebirth e expansões', affiliate: amazonSearch('The Binding of Isaac Rebirth Repentance Nintendo Switch'), affiliateLinkType: 'search', productPitch: 'Jogo anterior da série e suas expansões; confira plataforma, conteúdo e compatibilidade.' }],
    sources: [
      { label: 'Nintendo Brasil — produto, data, recursos, classificação e idioma', url: 'https://www.nintendo.com/pt-br/store/products/the-binding-of-isaac-repentance-plus-switch-2/' },
      { label: 'Nicalis via Games Press — plataformas, multiplayer, conteúdo e atualizações futuras', url: 'https://www.gamespress.com/en-US/ITS-DANGEROUS-TO-GO-ALONE-THE-BINDING-OF-ISAAC-REPENTANCE-HITS-NINTEND' },
      { label: 'Noisy Pixel — review de Switch 2 e limites para iniciantes', url: 'https://noisypixel.net/binding-of-isaac-repentance-plus-review/' },
      { label: 'WayTooManyGames — review de Switch 2 e valor para donos da edição anterior', url: 'https://waytoomany.games/2026/11/12/review-repentance-plus/' },
      { label: 'Amazon Brasil — console Nintendo Switch 2', url: amazonSearch('Nintendo Switch 2 console') },
    ],
  },
];
