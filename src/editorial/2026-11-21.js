const checkedAt = '2026-11-21T13:00:00-03:00';
const terms = 'https://openai.com/policies/terms-of-use/';
const credit = 'Ilustração conceitual original gerada por IA com OpenAI ImageGen; não é captura de jogo nem arte oficial.';
const license = 'Output gerado conforme os Termos de Uso da OpenAI; titularidade sujeita à lei aplicável.';
const amazonSearch = query => `https://www.amazon.com.br/s?k=${encodeURIComponent(query)}&tag=bitsplease-20`;
const source = (label, url) => ({ label, url });

function article({ id, tag, title, excerpt, body, imageSet, imageFolder = '2026-11-20', alts, prompts, scores, reason, signals, product, query, pitch, section = 'NOTÍCIAS', seoTitle, seoDescription, sources }) {
  const image = `/images/editorial-conceitual/${imageFolder}/${imageSet}-cover.png`;
  const bodyImage = `/images/editorial-conceitual/${imageFolder}/${imageSet}-body.png`;
  const affiliate = amazonSearch(query);
  const relevanceScore = scores.reduce((sum, value) => sum + value, 0);
  return {
    id, category: 'GAMES', section, status: 'published', tag, title, excerpt, body,
    date: '21 nov 2026', publishedAt: '2026-11-21', read: `${Math.max(3, Math.ceil(body.split(/\s+/).length / 175))} min`,
    seoTitle, seoDescription,
    relevanceDate: '2026-11-21', relevanceScore,
    relevanceBreakdown: { timeliness: scores[0], publicInterest: scores[1], reach: scores[2], sourceReliability: scores[3], brazilUtility: scores[4] },
    relevanceReason: reason, relevanceUpdatedAt: checkedAt,
    relevanceSignals: signals.map(({ label, url, sameDayVerified = false }) => ({ label, url, sameDayVerified })),
    image, imageAlt: alts[0], imageSource: credit, imageSourceUrl: terms, imageLicense: license, imageLicenseUrl: terms,
    inlineImage: { image: bodyImage, alt: alts[1], credit, sourceUrl: terms, license, licenseUrl: terms },
    imageResearch: {
      query: `${tag} official authorized images commercial reuse`, checkedAt,
      status: 'generated-contextual-ai-reviewed', generator: 'OpenAI ImageGen', assets: [image, bodyImage], prompts,
      notes: 'Pesquisa não encontrou duas imagens reais com permissão comercial de republicação confirmada. Foram usadas duas ilustrações conceituais originais, visualmente distintas e identificadas como IA; não representam capturas nem artes oficiais.',
    },
    affiliate, affiliateLinkType: 'search', productName: product, productPitch: pitch,
    affiliateResearch: {
      product, query, tag: 'bitsplease-20', checkedAt, status: 'tagged-amazon-search',
      notes: 'Busca pertinente na Amazon Brasil com tag do portal; a busca não confirma um anúncio específico, preço ou disponibilidade. Confira edição e compatibilidade no destino.',
    },
    sources: [...sources, source('Amazon Brasil — busca do produto relacionado', affiliate)],
  };
}

export const dailyPosts20261121 = [
  article({
    id: 'gta-vi-recorde-vendas-estimativa-rockstar-20261121',
    tag: 'GTA VI · vendas de estreia · Take-Two',
    title: 'GTA VI: Rockstar estima US$ 3,79 bilhões em vendas no primeiro dia',
    excerpt: 'A empresa também informou 32,5 milhões de unidades vendidas antes do lançamento. Os números são estimativas corporativas, sem detalhamento por plataforma ou auditoria independente divulgada.',
    imageSet: 'gta-vi-sales', imageFolder: '2026-11-21',
    alts: [
      'Cidade costeira noturna em tons de neon sob colunas ascendentes de luz, ilustração conceitual para a estimativa de vendas de lançamento de GTA VI.',
      'Horizonte de uma cidade litorânea ao amanhecer com colunas translúcidas de diferentes alturas, metáfora visual para um recorde comercial.',
    ],
    prompts: [
      'Wide landscape editorial illustration, 16:9. A fictional coastal American city at night viewed from a high rise, restrained neon and traffic trails, overlaid with elegant abstract ascending columns made of light to evoke a record-setting video game launch. Sophisticated gaming-business magazine art, cinematic, no text, no logos, no recognizable Grand Theft Auto characters, no trademark imagery, avoid numerical labels, not a screenshot.',
      'Wide landscape editorial illustration, 16:9. Abstract data visualization embodied as glowing light columns rising over a fictional Vice City-inspired coastal skyline at dawn, economic milestone and retail launch concept, high-end newspaper technology illustration, clean and cinematic, no text, no numbers, no logos, no identifiable game characters, not a screenshot.',
    ],
    scores: [30, 25, 20, 12, 7],
    reason: 'A Rockstar comunicou um marco global com alto alcance; os valores seguem identificados como estimativas da própria empresa, e a publicação de hoje da AP/CNN Brasil adiciona contexto independente.',
    signals: [
      { label: 'Take-Two/SEC — comunicado e nota metodológica das estimativas', url: 'https://www.sec.gov/Archives/edgar/data/946581/000162828026075217/exhibit9918k.htm' },
      { label: 'Associated Press — cobertura publicada em 21/11', url: 'https://apnews.com/article/15c69f76548ab5659bc3fe44a69756d8', sameDayVerified: true },
      { label: 'CNN Brasil — reportagem publicada em 21/11', url: 'https://www.cnnbrasil.com.br/pop/gta-6-bate-recorde-e-se-torna-o-maior-lancamento-da-historia/', sameDayVerified: true },
    ],
    product: 'Grand Theft Auto VI para PlayStation 5', query: 'Grand Theft Auto VI PS5',
    pitch: 'Busca pela edição de PS5 mencionada no comunicado de lançamento. Confira versão, vendedor e disponibilidade na Amazon Brasil.',
    seoTitle: 'GTA VI: Rockstar estima US$ 3,79 bi em vendas no 1º dia',
    seoDescription: 'Take-Two atribui a GTA VI US$ 3,79 bilhões em vendas de varejo estimadas no primeiro dia e 32,5 milhões de unidades pré-lançamento.',
    body: `A Rockstar Games informou na sexta-feira, 20 de novembro, que Grand Theft Auto VI alcançou US$ 3,79 bilhões em vendas de varejo no primeiro dia. O comunicado foi protocolado pela controladora Take-Two junto à SEC e define o valor como estimativa da companhia até o fim de 19 de novembro, no mundo todo. A empresa descreveu o lançamento como o maior da história do entretenimento.

O comunicado não apresenta auditoria independente dos cálculos, e a cifra não é o valor líquido recebido pela publicadora. O texto usa “retail sales” e não abre a conta por plataforma, formato, região, impostos ou participação de varejistas. A Rockstar também informou 32,5 milhões de unidades vendidas antes da estreia, outro dado corporativo e separado do cálculo de vendas do primeiro dia.

A Associated Press registrou que a Sensor Tower havia estimado US$ 2,36 bilhões em receita e cerca de 24,6 milhões de unidades, mas não reconciliou os métodos nem o escopo com o comunicado da Take-Two. Por isso, os números devem ser lidos como estimativas de fontes diferentes, e não somados ou tratados como medidas equivalentes.

O dado mais sólido para o público é a escala: poucos lançamentos de jogos chegam a ser comparados com grandes estreias de cinema em um único dia. Ainda falta uma divulgação financeira detalhada da Take-Two que permita separar vendas a consumidores, vendas digitais, unidades físicas e o valor contabilizado pela editora. Até lá, US$ 3,79 bilhões continua sendo a estimativa divulgada pela própria empresa, não um balanço independente.`
    ,sources: [
      source('Take-Two/SEC — vendas de varejo estimadas e unidades pré-lançamento', 'https://www.sec.gov/Archives/edgar/data/946581/000162828026075217/exhibit9918k.htm'),
      source('Associated Press — contexto e estimativa independente da Sensor Tower', 'https://apnews.com/article/15c69f76548ab5659bc3fe44a69756d8'),
      source('CNN Brasil — repercussão local', 'https://www.cnnbrasil.com.br/pop/gta-6-bate-recorde-e-se-torna-o-maior-lancamento-da-historia/'),
    ],
  }),
  article({
    id: 'super-smash-bros-melee-25-anos-japao-20261121',
    tag: 'Super Smash Bros. Melee · 25 anos · GameCube',
    title: 'Super Smash Bros. Melee completa 25 anos de lançamento no Japão',
    excerpt: 'A HAL Laboratory registra 21 de novembro de 2001 como a estreia japonesa do jogo de GameCube. A data marca o aniversário local, não o lançamento mundial.',
    imageSet: 'melee', imageFolder: '2026-11-21',
    alts: [
      'Controle com fio diante de um televisor CRT que exibe lutadores geométricos abstratos em uma arena, ilustração nostálgica para o aniversário de Melee.',
      'Grupo de amigos joga em uma sala do início dos anos 2000 diante de um console cúbico roxo e uma partida abstrata em tela de tubo.',
    ],
    prompts: [
      'Wide landscape editorial illustration, 16:9. Close editorial still life of a worn black wired game controller beside a CRT television, on screen a stylized abstract melee arena with small colored geometric fighter silhouettes, nostalgic early-2000s tournament atmosphere, no legible text, no logos, no recognizable game characters, not an official game screenshot.',
      'Wide landscape editorial illustration, 16:9. A nostalgic early-2000s living room with a CRT television showing a completely abstract colorful arena of tiny non-identifiable fighter silhouettes, four players gathered around a purple cube-shaped game console with wired controllers, warm documentary lighting, retro gaming magazine art, no text, no brand logos, no recognizable copyrighted characters, not a screenshot.',
    ],
    scores: [29, 22, 18, 11, 7],
    reason: 'A data comemorativa acontece hoje no Japão e foi conferida na ficha da própria desenvolvedora; a reportagem de Nintendo Life também foi publicada hoje.',
    signals: [
      { label: 'HAL Laboratory — título, plataforma, publicadora e data japonesa', url: 'https://www.hallab.co.jp/works/detail/000732/' },
      { label: 'Nintendo Life — aniversário de 25 anos publicado hoje', url: 'https://www.nintendolife.com/news/2026/11/anniversary-super-smash-bros-melee-has-now-been-duking-it-out-for-25-years', sameDayVerified: true },
    ],
    product: 'Super Smash Bros. Ultimate para Nintendo Switch', query: 'Super Smash Bros Ultimate Nintendo Switch',
    pitch: 'Busca por um jogo posterior da série para Switch; não é a edição original de Melee para GameCube.',
    seoTitle: 'Super Smash Bros. Melee faz 25 anos no Japão',
    seoDescription: 'Melee foi lançado no Japão em 21 de novembro de 2001 para GameCube. Veja o que a data de aniversário representa para a série.',
    body: `Super Smash Bros. Melee completa 25 anos neste sábado, 21 de novembro, considerando a estreia japonesa. A HAL Laboratory, que participou do desenvolvimento, registra essa data em sua página oficial da obra e lista o Nintendo GameCube como plataforma e a Nintendo como publicadora.

A distinção regional importa: a efeméride de hoje não corresponde ao aniversário mundial. A Nintendo Life observa que Melee atravessou a geração do GameCube e segue com uma cena competitiva ativa. A reportagem cita mais de sete milhões de cópias vendidas no mundo e o título de jogo mais vendido da plataforma, com base em dados históricos da Nintendo.

Melee foi a segunda entrada da série, após Super Smash Bros. no Nintendo 64. A continuação levou a proposta de luta entre personagens de diferentes franquias Nintendo para a geração seguinte. O aniversário também funciona como uma lembrança de como jogos associados a uma plataforma antiga podem manter vida cultural muito depois de seu ciclo comercial original.

Não há anúncio de lançamento de Melee em um catálogo atual da Nintendo associado à efeméride. O gancho de 25 anos é, portanto, uma celebração histórica e uma oportunidade de revisitar a série, não uma confirmação de relançamento. Para quem quer jogar hoje em Switch, a busca abaixo é pelo sucessor Super Smash Bros. Ultimate; a edição original continua ligada ao GameCube.`
    ,sources: [
      source('HAL Laboratory — data japonesa, GameCube e Nintendo como publicadora', 'https://www.hallab.co.jp/works/detail/000732/'),
      source('Nintendo Life — aniversário, vendas e contexto competitivo', 'https://www.nintendolife.com/news/2026/11/anniversary-super-smash-bros-melee-has-now-been-duking-it-out-for-25-years'),
    ],
  }),
  article({
    id: 'horror-game-awards-2026-vencedores-20261121',
    tag: 'The Horror Game Awards 2026 · vencedores',
    title: 'Hellraiser: Revival leva jogo do ano; Resident Evil Requiem vence quatro prêmios',
    excerpt: 'A quinta edição dos Horror Game Awards, realizada em Londres em 20 de novembro, premiou também Tenebris Somnia, Silent Hill: Townfall e REANIMAL.',
    imageSet: 'horror-awards',
    alts: [
      'Palco conceitual de premiação de jogos de terror com troféu iluminado e silhuetas abstratas, sem personagens reconhecíveis.',
      'Cerimônia de terror vista de uma plateia diante de um palco roxo, com troféus e luzes abstratas.',
    ],
    prompts: [
      'Palco de uma premiação de jogos de terror com troféu central em forma abstrata, névoa baixa e luzes violeta, vermelho e azul. Silhuetas genéricas, sem logos, sem texto, sem personagens ou monstros reconhecíveis.',
      'Visão lateral de uma cerimônia de premiação de jogos de terror, plateia em silhueta e vários troféus geométricos sob iluminação violeta. Composição editorial, sem marcas ou texto legível.',
    ],
    scores: [27, 21, 17, 13, 6],
    reason: 'A cerimônia ocorreu ontem e o resultado ganhou cobertura independente publicada hoje; a relação completa foi conferida em duas publicações especializadas.',
    signals: [
      { label: 'The Escapist — resultados publicados em 21/11', url: 'https://www.escapistmagazine.com/hellraiser-revival-takes-game-of-the-year-as-resident-evil-requiem-wins-the-most-awards/', sameDayVerified: true },
      { label: 'Bloody Disgusting — lista completa de vencedores', url: 'https://bloody-disgusting.com/video-games/3976498/hellraiser-revival-wins-game-of-the-year-at-the-horror-game-awards-2026/' },
      { label: 'Horror Game Awards — data e indicados da edição', url: 'https://www.thehorrorgameawards.com/news/one-week-to-go' },
    ],
    product: 'Resident Evil Requiem para Xbox Series X', query: 'Resident Evil Requiem Xbox Series X',
    pitch: 'Busca pela edição de Xbox do jogo premiado em quatro categorias; confirme a plataforma e a edição antes de comprar.',
    seoTitle: 'Horror Game Awards 2026: Hellraiser ganha jogo do ano',
    seoDescription: 'Veja os vencedores dos Horror Game Awards 2026: Hellraiser: Revival levou jogo do ano, enquanto Resident Evil Requiem venceu quatro categorias.',
    body: `Clive Barker’s Hellraiser: Revival ganhou o prêmio de jogo do ano na quinta edição do The Horror Game Awards, realizada em Londres em 20 de novembro. O resultado põe o título da Saber Interactive à frente de Resident Evil Requiem, que terminou a noite com o maior número de troféus. As listas foram publicadas por Bloody Disgusting e The Escapist.

Resident Evil Requiem recebeu quatro prêmios: escolha dos jogadores, melhor narrativa, terror mais acessível e jogo mais assustador. Hellraiser: Revival também venceu melhor atuação, pela volta de Doug Bradley ao papel de Pinhead. REANIMAL, que liderou as indicações com dez, venceu melhor terror multiplayer novo.

Tenebris Somnia ganhou melhor terror independente e direção de arte; seu estúdio, Saibot Studios, também recebeu melhor desenvolvedora indie. Silent Hill: Townfall levou a escolha da crítica, enquanto o remake de Silent Hill foi reconhecido como o jogo de terror mais aguardado. O compositor Akira Yamaoka recebeu o prêmio por contribuição à carreira.

Os resultados mostram como a premiação distribuiu reconhecimento entre lançamentos e projetos independentes, em vez de concentrar todos os prêmios em um único jogo. O prêmio de júri e a escolha dos jogadores também ficaram separados: Hellraiser levou a principal categoria, e Resident Evil Requiem venceu a votação popular. Isso descreve o resultado desta cerimônia, não uma previsão dos próximos prêmios da indústria.`
    ,sources: [
      source('Bloody Disgusting — vencedores e categorias', 'https://bloody-disgusting.com/video-games/3976498/hellraiser-revival-wins-game-of-the-year-at-the-horror-game-awards-2026/'),
      source('The Escapist — apuração publicada no dia seguinte à cerimônia', 'https://www.escapistmagazine.com/hellraiser-revival-takes-game-of-the-year-as-resident-evil-requiem-wins-the-most-awards/'),
      source('The Horror Game Awards — programação e indicados', 'https://www.thehorrorgameawards.com/news/one-week-to-go'),
    ],
  }),
  article({
    id: 'xenoblade-chronicles-3-update-3-0-switch-2-20261121',
    tag: 'Xenoblade Chronicles 3 · atualização 3.0.0 · Switch 2',
    title: 'Xenoblade Chronicles 3 recebe atualização que prepara a edição de Switch 2',
    excerpt: 'A versão 3.0.0 já está disponível. No Switch original, a Nintendo informa que não há mudanças; a edição de Switch 2 chega em 3 de dezembro.',
    imageSet: 'xenoblade',
    alts: [
      'Paisagem de fantasia com uma espada monumental sobre montanhas e um vale luminoso, arte conceitual de Xenoblade Chronicles 3.',
      'Duas pessoas transferem dados entre consoles diante de um cenário de fantasia abstrato, ilustração sobre compatibilidade e continuidade do jogo salvo.',
    ],
    prompts: [
      'Paisagem de fantasia com uma espada colossal cravada numa montanha, nuvens e um vale iluminado ao fundo; composição original de RPG, sem personagens, sem logotipos ou texto.',
      'Dois consoles genéricos vistos de frente, uma linha luminosa conecta os aparelhos e um ícone abstrato de arquivo salvo passa entre eles; fundo de fantasia inspirado em RPG, sem marcas nem interface oficial.',
    ],
    scores: [24, 19, 15, 13, 8],
    reason: 'A atualização entrou no ar em 19/11 e a próxima edição tem data marcada para 3/12; a nota oficial esclarece compatibilidade, ausência de mudanças no Switch e preservação de dados salvos.',
    signals: [
      { label: 'Nintendo Support — notas oficiais da versão 3.0.0', url: 'https://support.nintendo.com/jp/switch/software_support/az3ha/300/index.html' },
      { label: 'Nintendo Life — resumo do patch e conteúdo da edição de Switch 2', url: 'https://www.nintendolife.com/news/2026/11/xenoblade-chronicles-3-version-3-0-0-is-now-live-here-are-the-patch-notes' },
    ],
    product: 'Xenoblade Chronicles 3 para Nintendo Switch', query: 'Xenoblade Chronicles 3 Nintendo Switch',
    pitch: 'Busca pela edição de Switch que recebe a atualização. A edição de Switch 2 é um produto separado; confirme versão e compatibilidade.',
    seoTitle: 'Xenoblade Chronicles 3: update 3.0 prepara Switch 2',
    seoDescription: 'Atualização 3.0.0 de Xenoblade Chronicles 3 adiciona compatibilidade com a edição de Switch 2, marcada para 3 de dezembro.',
    body: `Xenoblade Chronicles 3 recebeu a versão 3.0.0 em 19 de novembro, antes da chegada da edição de Switch 2, prevista para 3 de dezembro. A nota de suporte da Nintendo diz que o patch torna o jogo compatível com essa edição. No Nintendo Switch original, a empresa registra que nenhuma mudança foi feita.

Isso significa que a atualização não anuncia uma expansão de conteúdo para quem continuar no console atual. O propósito descrito é preparar a compatibilidade com a nova versão. A Nintendo também informa que os dados salvos do jogo continuam utilizáveis, um detalhe relevante para quem pretende migrar de plataforma ou atualizar a edição.

A edição de Switch 2 terá recursos próprios, como um novo herói e um modo adicional chamado Heroes’ Vault, segundo o resumo de Nintendo Life sobre as informações da Nintendo. A publicação também cita resolução 4K no modo de TV e desempenho a 60 quadros por segundo. Esses extras pertencem à edição futura e não devem ser confundidos com o conteúdo do patch 3.0.0 no Switch original.

Para quem já tem o jogo, a ação prática é instalar a atualização normalmente e aguardar a edição de dezembro caso queira os recursos adicionais. A Nintendo ainda não detalhou nesta nota o preço de upgrade para a loja brasileira. Por isso, não usamos preço convertido ou presumimos que uma oferta em outro país valha para o Brasil.`
    ,sources: [
      source('Nintendo Support — atualização, compatibilidade e dados salvos', 'https://support.nintendo.com/jp/switch/software_support/az3ha/300/index.html'),
      source('Nintendo Life — conteúdo da edição de Switch 2', 'https://www.nintendolife.com/news/2026/11/xenoblade-chronicles-3-version-3-0-0-is-now-live-here-are-the-patch-notes'),
    ],
  }),
  article({
    id: 'zenless-zone-zero-versao-3-4-robin-kafka-20261121',
    tag: 'Zenless Zone Zero · versão 3.4 · Honkai: Star Rail',
    title: 'Zenless Zone Zero 3.4 chega em 2 de dezembro com Robin grátis',
    excerpt: 'A atualização também estreia Sunbringer e inicia o crossover com Honkai: Star Rail. Kafka entra na busca limitada em 1º de janeiro.',
    imageSet: 'zzz',
    alts: [
      'Cidade noturna estilizada com arranha-céus e luzes rosa e azuis, ilustração conceitual para a próxima versão de Zenless Zone Zero.',
      'Vista aérea de uma rua urbana com cartazes abstratos, bilhetes luminosos e cruzamento colorido em arte conceitual de ação urbana.',
    ],
    prompts: [
      'Ilustração horizontal de anime urbana noturna com arranha-céus estilizados, reflexos de neon rosa e azul e uma silhueta pequena ao longe; cenário original, sem personagens, logotipos ou texto.',
      'Vista superior de uma rua movimentada de cidade futurista, cruzamentos, bilhetes e sinais luminosos abstratos, paleta violeta e azul, sem texto legível, personagens ou interface oficial.',
    ],
    scores: [24, 20, 14, 11, 8],
    reason: 'A HoYoverse divulgou ontem a data e o conteúdo da versão, que inclui personagem de colaboração gratuita e estreia em menos de duas semanas; serve a jogadores brasileiros em várias plataformas.',
    signals: [
      { label: 'Zenless Zone Zero — comunicado oficial da versão 3.4', url: 'https://zenless.hoyoverse.com/en-us/news/167400?catchSpider=1' },
      { label: 'Gematsu — resumo da atualização e plataformas', url: 'https://www.gematsu.com/2026/11/zenless-zone-zero-version-3-4-update-the-finality-of-the-day-launches-december-2' },
    ],
    product: 'Controle sem fio DualSense para PS5', query: 'Controle DualSense PS5',
    pitch: 'Acessório para jogar a versão de PS5. Zenless Zone Zero é gratuito e também está disponível em outras plataformas; o controle não inclui o jogo.',
    seoTitle: 'Zenless Zone Zero 3.4: Robin grátis e data de lançamento',
    seoDescription: 'A versão 3.4 de Zenless Zone Zero chega em 2 de dezembro: Robin será obtida por login, Sunbringer estreia e Kafka chega em janeiro.',
    body: `A HoYoverse marcou a versão 3.4 de Zenless Zone Zero, “The Finality of the Day”, para 2 de dezembro. O destaque de acesso é Robin, personagem de colaboração com Honkai: Star Rail, que poderá ser resgatada ao entrar no jogo durante o período do evento. A produtora também confirmou Sunbringer, uma nova agente Void Hunter e a primeira agente da classe Enchainer.

O crossover não coloca todos os personagens no mesmo banner ao mesmo tempo. Robin e Sunbringer aparecem no início da atualização; Kafka, também de Honkai: Star Rail, chega à busca limitada a partir de 1º de janeiro, segundo a página oficial de benefícios. Essa diferença de calendário é importante para quem planeja recursos dentro do jogo.

O título “The Finality of the Day” acompanha o novo capítulo de história em Roscaelifer e o combate descrito pela HoYoverse como uma etapa final da narrativa local. A atualização também acrescenta eventos e recompensas, enquanto versões anteriores do jogo continuam gratuitas para baixar nas plataformas disponíveis.

A data de 2 de dezembro é global e não veio acompanhada de uma mudança regional anunciada para o Brasil. Jogadores podem acompanhar a página oficial para os horários e detalhes da manutenção mais perto do lançamento. Como Robin depende do período do evento, quem pretende resgatá-la deve conferir as datas dentro do jogo após a atualização.`
    ,sources: [
      source('Zenless Zone Zero — calendário de benefícios e personagens', 'https://zenless.hoyoverse.com/en-us/news/167400?catchSpider=1'),
      source('Zenless Zone Zero — resumo oficial da transmissão', 'https://zenless.hoyoverse.com/en-us/news/167399'),
      source('Gematsu — data, história, crossover e plataformas', 'https://www.gematsu.com/2026/11/zenless-zone-zero-version-3-4-update-the-finality-of-the-day-launches-december-2'),
    ],
  }),
  article({
    id: 'persona-atlus-intervalo-jogos-principais-20261121',
    tag: 'Persona · Atlus · Kazuhisa Wada',
    title: 'Atlus quer encurtar o intervalo entre futuros jogos principais de Persona',
    excerpt: 'O produtor Kazuhisa Wada descreveu mudanças internas de produção e compartilhamento de conhecimento. A entrevista não anunciou data para Persona 6 nem para outro jogo.',
    imageSet: 'persona',
    alts: [
      'Livros e cadernos organizados em uma linha do tempo sobre uma mesa, ilustração editorial sobre a continuidade da série Persona.',
      'Relógios de estação e plataformas se conectam por trilhos em uma cidade estilizada, metáfora visual para intervalos entre lançamentos.',
    ],
    prompts: [
      'Still life editorial de cadernos e livros de arte originais organizados sobre uma linha do tempo abstrata, paleta azul escura e vermelha, sem capas reconhecíveis, texto ou logotipos.',
      'Estação ferroviária noturna estilizada com relógios sem números e trilhos convergindo em várias plataformas, metáfora para reduzir intervalos de produção; sem marcas ou texto.',
    ],
    scores: [22, 18, 14, 13, 8],
    reason: 'Entrevista de 20/11 publicada pelo canal oficial de relações com investidores da Sega Sammy e repercutida por veículo especializado; a ausência de data foi preservada para evitar especulação.',
    signals: [
      { label: 'Sega Sammy — entrevista oficial com Kazuhisa Wada', url: 'https://www.segasammy.co.jp/ja/ir/individual/interviews/segasammania002_part2/' },
      { label: 'Noisy Pixel — resumo sobre os intervalos de lançamentos', url: 'https://noisypixel.net/persona-atlus-shorten-gaps-future-mainline-games-kazuhisa-wada/' },
    ],
    product: 'Persona 5 Royal para Nintendo Switch', query: 'Persona 5 Royal Nintendo Switch',
    pitch: 'Jogo anterior da série para Switch. A busca não representa pré-venda ou anúncio de Persona 6.',
    seoTitle: 'Persona: Atlus quer reduzir intervalo entre jogos principais',
    seoDescription: 'Kazuhisa Wada diz que a Atlus trabalha para encurtar o intervalo entre jogos principais de Persona, mas não anuncia datas.',
    body: `Kazuhisa Wada, produtor geral da série Persona, afirmou que a Atlus trabalha para encurtar o tempo entre futuros jogos principais. A declaração apareceu em entrevista publicada pela Sega Sammy em 20 de novembro, como parte de sua série institucional SegaSammyMania. O texto não apresenta cronograma ou data para Persona 6.

Wada descreve medidas de processo: melhorar a colaboração entre áreas da Atlus, usar ferramentas de gestão e compartilhamento de informações e registrar conhecimentos que antes dependiam da memória de equipes específicas. A intenção é tornar o desenvolvimento mais sustentável e reduzir diferenças de decisão entre departamentos e gerações de profissionais.

O produtor situa esses planos no contexto de uma franquia que atravessa várias décadas. Em vez de anunciar uma equipe, janela ou novo jogo, a conversa trata de como preservar experiência interna e organizar a produção futura. Isso é uma sinalização de prioridade, não uma promessa de lançamentos em ciclos regulares.

A repercussão de Noisy Pixel destaca que Wada falou sobre o horizonte posterior a Persona 6. Mesmo assim, não há no texto oficial uma estimativa de quantos anos os próximos intervalos poderão durar, nem confirmação de uma data de lançamento para a próxima entrada principal. O dado novo é a direção que a Atlus diz querer seguir, não um calendário de lançamentos.`
    ,sources: [
      source('Sega Sammy — entrevista oficial com o produtor geral de Persona', 'https://www.segasammy.co.jp/ja/ir/individual/interviews/segasammania002_part2/'),
      source('Noisy Pixel — síntese da entrevista e das mudanças organizacionais', 'https://noisypixel.net/persona-atlus-shorten-gaps-future-mainline-games-kazuhisa-wada/'),
    ],
  }),
  article({
    id: 'dnd-beyond-optimizely-incidente-seguranca-20261121',
    tag: 'D&D Beyond · Optimizely · segurança',
    title: 'D&D Beyond afirma que dados de pagamento não foram afetados por malware',
    excerpt: 'O site carregou código malicioso durante uma falha no serviço Web Experimentation da Optimizely em 16/11. A investigação continua e a empresa diz que avisará usuários se alguma ação for necessária.',
    imageSet: 'dnd',
    alts: [
      'Notebook com página abstrata de jogo de fantasia protegido por um escudo luminoso, ilustração sobre segurança do D&D Beyond.',
      'Mesa de RPG vista de cima com um laptop, dados e miniaturas, enquanto um escudo abstrato destaca proteção de conta e pagamentos.',
    ],
    prompts: [
      'Ilustração editorial horizontal de um notebook em uma mesa de RPG com página abstrata de fantasia e escudo de segurança luminoso sobre a tela; sem texto legível, marcas ou dados pessoais.',
      'Mesa de RPG vista de cima com dados poliédricos, miniaturas genéricas, laptop aberto com interface abstrata e um símbolo de escudo; conceito de proteção de dados, sem logos nem texto.',
    ],
    scores: [18, 20, 14, 12, 8],
    reason: 'A pauta é de segurança de conta com declaração do produtor executivo e relatório técnico da Optimizely; a exposição ocorreu em 16/11, então a atualidade fica abaixo das notícias de hoje.',
    signals: [
      { label: 'Optimizely — status e escopo do incidente em Web Experimentation', url: 'https://status.optimizely.com/' },
      { label: 'Optimizely — relatório técnico corrigido do incidente', url: 'https://pages.optimizely.com/rs/947-RKE-048/images/Security%20Incident%20Report%20-%20Optimizely%20Web%20Experimentation%20-%20Nov%2017%202026.pdf' },
      { label: 'God is a Geek — declaração de D&D Beyond e limite de dados de pagamento', url: 'https://godisageek.com/2026/11/dnd-beyond-optimizely-breach/' },
    ],
    product: 'Dungeons & Dragons Player’s Handbook', query: 'Dungeons Dragons Player Handbook 2024',
    pitch: 'Livro de regras para jogar Dungeons & Dragons presencialmente; a busca não é pelo serviço digital D&D Beyond.',
    seoTitle: 'D&D Beyond: pagamentos não afetados por incidente da Optimizely',
    seoDescription: 'D&D Beyond diz que pagamentos ficaram fora do incidente de script malicioso da Optimizely; investigação e possíveis notificações continuam.',
    body: `D&D Beyond confirmou que seu site carregou código malicioso durante o incidente de segurança da Optimizely em 16 de novembro. O produtor executivo Brian Perry disse que os pagamentos eram processados por um provedor externo que não foi alcançado pelo ataque. A equipe removeu a integração da Optimizely e segue revisando a situação.

Segundo a declaração reproduzida por God is a Geek, a empresa entrará em contato diretamente se a investigação concluir que algum jogador precisa agir. D&D Beyond não informou quantos usuários acessaram páginas afetadas, quais regiões foram envolvidas ou se tipos específicos de dados de conta foram expostos. Portanto, a afirmação sobre pagamentos não deve ser ampliada para dizer que nenhuma informação de usuário foi afetada.

A Optimizely explicou que uma falha no fluxo de cadastro do produto Web Experimentation permitiu que terceiros inserissem JavaScript em projetos de alguns clientes. A empresa afirma ter detectado e interrompido a entrega do código no mesmo dia, corrigido a falha e removido scripts injetados. O episódio envolveu esse produto específico, não todos os serviços da Optimizely.

O ponto confirmado para usuários de D&D Beyond é restrito: o site foi afetado pelo carregamento do script, a empresa diz que pagamentos foram tratados por uma via separada e a revisão ainda não acabou. Se algum usuário precisar tomar uma medida, a declaração promete contato direto; a empresa não publicou um chamado geral de ação para toda a base.`
    ,sources: [
      source('Optimizely — status do incidente e contenção', 'https://status.optimizely.com/'),
      source('Optimizely — relatório técnico atualizado em 20/11', 'https://pages.optimizely.com/rs/947-RKE-048/images/Security%20Incident%20Report%20-%20Optimizely%20Web%20Experimentation%20-%20Nov%2017%202026.pdf'),
      source('God is a Geek — confirmação de D&D Beyond', 'https://godisageek.com/2026/11/dnd-beyond-optimizely-breach/'),
    ],
  }),
  article({
    id: 'fallout-wasteland-full-of-cats-bethesda-devcats-20261121',
    tag: 'Fallout · A Wasteland Full of Cats · Devcats',
    title: 'Bethesda confirma A Wasteland Full of Cats em parceria com Devcats',
    excerpt: 'O projeto descrito como aventura aconchegante ajudará uma campanha de adoção e resgate animal. Bethesda promete apresentar mais detalhes, mas ainda não informou plataformas ou lançamento.',
    imageSet: 'wasteland-cats',
    alts: [
      'Gato alaranjado em um abrigo improvisado dentro de uma paisagem pós-apocalíptica, ilustração conceitual de Fallout sem personagens ou elementos oficiais.',
      'Dois gatos resgatados sob uma estrutura de metal em meio a ruínas cobertas de plantas, cena conceitual de exploração pós-apocalíptica.',
    ],
    prompts: [
      'Ilustração horizontal original de um gato laranja em uma pequena área segura dentro de ruínas pós-apocalípticas, objetos antigos e vegetação, tom acolhedor e lúdico; sem símbolos, logos ou personagens de Fallout.',
      'Dois gatinhos encontram abrigo sob uma estrutura metálica entre ruínas e plantas que voltam a crescer, arte editorial aconchegante, sem armas, texto, marcas ou elementos oficiais.',
    ],
    scores: [19, 15, 13, 13, 10],
    reason: 'Bethesda confirmou a colaboração em 19/11 e a notícia ganhou cobertura em veículos especializados; sem data, plataformas ou preço confirmados, o texto fica limitado ao que foi anunciado.',
    signals: [
      { label: 'Fallout/Bethesda — confirmação da parceria, via Shacknews', url: 'https://www.shacknews.com/article/151446/bethesda-devcats-dallas-pets-alive-wasteland-full-of-cats' },
      { label: 'PC Gamer — registro australiano e gênero estimado', url: 'https://www.pcgamer.com/games/fallout/a-new-fallout-game-has-been-rated-in-australia-and-its-a-hidden-object-game/' },
    ],
    product: 'Fallout 4 para PlayStation 5', query: 'Fallout 4 PS5',
    pitch: 'Busca por outro jogo da série Fallout já lançado. A pesquisa não é uma pré-venda de A Wasteland Full of Cats.',
    seoTitle: 'Fallout: Bethesda confirma A Wasteland Full of Cats',
    seoDescription: 'A Bethesda confirmou A Wasteland Full of Cats, aventura desenvolvida pela brasileira Devcats em colaboração com Dallas Pets Alive.',
    body: `A Bethesda confirmou A Wasteland Full of Cats, projeto feito pela Devcats, estúdio brasileiro conhecido por jogos de objetos escondidos da série A Building Full of Cats. A parceria também inclui a organização Dallas Pets Alive, que atua com adoção e resgate de animais. O anúncio foi feito pelos canais de Fallout em 19 de novembro.

A descrição da Bethesda apresenta uma aventura aconchegante na Wasteland: o jogador ajudará a encontrar os gatos desaparecidos de Fofiño, visitará locais conhecidos e usará um aparelho chamado Pip-Kitty para descobrir segredos e resolver mistérios. A empresa diz que o projeto apoiará uma campanha para animais necessitados, mas ainda não divulgou como a contribuição será calculada.

Um registro de classificação na Austrália apontou elementos de quebra-cabeças e objetos escondidos; isso combina com os jogos anteriores da Devcats, mas o estúdio ainda não divulgou uma apresentação completa. Bethesda promete mais detalhes em breve. Plataformas, preço e janela de lançamento continuam sem confirmação pública.

O encontro entre uma franquia de ficção pós-apocalíptica e um jogo de busca visual muda o tom habitual de Fallout, mas o projeto é descrito pela própria publicadora como aventura inspirada no universo, não como um novo RPG principal. A busca abaixo é por Fallout 4, um jogo já lançado da série, e não pelo título novo.`
    ,sources: [
      source('Shacknews — confirmação e descrição oficial de Bethesda', 'https://www.shacknews.com/article/151446/bethesda-devcats-dallas-pets-alive-wasteland-full-of-cats'),
      source('PC Gamer — registro australiano e contexto da Devcats', 'https://www.pcgamer.com/games/fallout/a-new-fallout-game-has-been-rated-in-australia-and-its-a-hidden-object-game/'),
    ],
  }),
  article({
    id: 'god-of-war-sons-of-sparta-ps4-review-pesquisa-20261121',
    tag: 'God of War: Sons of Sparta · PS4 · review baseada em pesquisa',
    title: 'God of War: Sons of Sparta chegou ao PS4; o que dizem as reviews',
    excerpt: 'A edição de PS4 saiu em 16/11. Esta análise reúne avaliações da versão de PS5 publicadas por GameSpot e Game Informer; o Bits, Please não testou a versão de PS4.',
    section: 'REVIEWS', imageSet: 'god-of-war',
    alts: [
      'Dois jovens guerreiros espartanos em uma plataforma lateral diante de uma paisagem antiga, ilustração conceitual sem personagens oficiais.',
      'Guerreiro adolescente solitário observa um desfiladeiro e uma trilha entre montanhas, cena conceitual de aventura 2D.',
    ],
    prompts: [
      'Ilustração horizontal de dois jovens guerreiros espartanos originais em uma plataforma lateral diante de montanhas antigas, combate sugerido sem sangue, estilo aventura 2D, sem capacetes ou personagens reconhecíveis, logos ou texto.',
      'Um jovem guerreiro espartano original caminha sozinho por um desfiladeiro rochoso com ruínas ao longe, composição de plataforma 2D, sem arte oficial, texto ou personagens reconhecíveis.',
    ],
    scores: [15, 18, 15, 12, 12],
    reason: 'A versão de PS4 chegou em 16/11 e o tema é atual para jogadores brasileiros; o resumo distingue as reviews especializadas de PS5 da versão que não foi testada pelo portal.',
    signals: [
      { label: 'PlayStation Blog — PS4 e modos Hermes/Erebus', url: 'https://blog.playstation.com/2026/02/13/god-of-war-sons-of-sparta-what-you-need-to-know/' },
      { label: 'GameSpot — review da versão de PS5', url: 'https://www.gamespot.com/reviews/god-of-war-sons-of-sparta-review-the-mildly-amusing-adventures-of-teen-kratos/1900-6418466/' },
      { label: 'Game Informer — review da versão de PS5', url: 'https://gameinformer.com/review/god-of-war-sons-of-sparta/fighting-in-the-shade-of-greater-games' },
    ],
    product: 'God of War: Sons of Sparta para PS4', query: 'God of War Sons of Sparta PS4',
    pitch: 'Busca pela versão de PS4. As avaliações citadas foram feitas na versão de PS5 e não comprovam desempenho ou diferenças técnicas no PS4.',
    seoTitle: 'God of War Sons of Sparta no PS4: o que dizem as reviews',
    seoDescription: 'Sons of Sparta chegou ao PS4 em 16 de novembro. Veja a síntese das reviews de PS5, sem atribuir as avaliações à versão de PS4.',
    body: `God of War: Sons of Sparta chegou ao PlayStation 4 em 16 de novembro, nove meses após a estreia original no PS5. Esta análise editorial é baseada em pesquisa de reviews especializadas da versão de PS5. O Bits, Please não testou o jogo nem a nova versão de PS4, e não atribui nota própria.

O jogo é uma aventura 2D de ação com estrutura metroidvania, ambientada na juventude de Kratos e de seu irmão Deimos. A PlayStation confirma que dois modos chegaram junto da edição de PS4: Hermes, focado em speedrun, e Erebus, no qual tanto o jogador quanto os inimigos caem com um golpe. Esses modos também estão disponíveis no PS5.

GameSpot destaca que o combate se torna mais interessante com a combinação de lança e habilidades mágicas, mas considera rígida a movimentação e a exploração. Game Informer também elogia o retrato dos irmãos e alguns momentos da história, enquanto critica o ritmo, o deslocamento e a repetição da campanha. As duas avaliações apontam uma aventura longa para o gênero, embora tenham ênfases diferentes sobre o que funciona.

Como as análises consultadas foram feitas no PS5, elas não permitem concluir como a versão de PS4 roda ou se há diferenças técnicas. Para quem joga nessa plataforma, a chegada amplia o acesso a uma campanha 2D da série e aos dois modos extras; a recomendação editorial é considerar os limites apontados pelos críticos e procurar avaliações específicas do PS4 antes de decidir pela compra.`
    ,sources: [
      source('PlayStation Blog — data do PS4 e modos adicionais', 'https://blog.playstation.com/2026/02/13/god-of-war-sons-of-sparta-what-you-need-to-know/'),
      source('GameSpot — review de PS5', 'https://www.gamespot.com/reviews/god-of-war-sons-of-sparta-review-the-mildly-amusing-adventures-of-teen-kratos/1900-6418466/'),
      source('Game Informer — review de PS5', 'https://gameinformer.com/review/god-of-war-sons-of-sparta/fighting-in-the-shade-of-greater-games'),
    ],
  }),
  article({
    id: 'stellar-blade-blood-rain-ia-processo-shift-up-20261121',
    tag: 'Stellar Blade: Blood Rain · Shift Up · inteligência artificial',
    title: 'Shift Up diz que Stellar Blade: Blood Rain segue processo “feito à mão”',
    excerpt: 'O diretor Kim Hyung-tae afirma que a equipe ainda usa IA em tarefas intermediárias, mas revisa o resultado final com artistas humanos. A fala veio após críticas a um vídeo promocional.',
    imageSet: 'stellar-blade',
    alts: [
      'Artista humano desenha um personagem em uma mesa digitalizadora diante de modelos e anotações, ilustração editorial sobre autoria em jogos.',
      'Sequência de quadros e modelos tridimensionais em uma bancada de produção, representando etapas de criação e revisão humana.',
    ],
    prompts: [
      'Ilustração editorial horizontal de uma artista humana trabalhando em design de personagem num monitor, ao lado de folhas e miniaturas originais, estúdio de jogo contemporâneo, sem interface legível, logos ou personagens existentes.',
      'Painel de produção com quadros de storyboard abstratos, malha 3D e amostras de textura em uma mesa de artistas, enfatizando revisão humana, sem texto, marca ou personagem reconhecível.',
    ],
    scores: [18, 15, 12, 12, 11],
    reason: 'A entrevista foi publicada durante a cobertura da G-CON em 19/11 e repercutida em 20/11; a pauta distingue a frase sobre o processo criativo do uso de IA em tarefas intermediárias.',
    signals: [
      { label: 'GamesRadar — entrevista e contexto da controvérsia do vídeo', url: 'https://www.gamesradar.com/games/action/stellar-blade-blood-rain-is-handmade-from-start-to-finish-after-ai-music-video-backlash-shift-up-boss-says-but-uh-the-devs-are-still-using-ai/' },
      { label: 'Inven Global — entrevista com Kim Hyung-tae e Shinji Mikami', url: 'https://www.invenglobal.com/articles/28842/handmade-from-start-to-finish-kim-hyung-tae-and-shinji-mikami-on-game-design-and-ai' },
      { label: 'AUTOMATON West — cobertura de G-CON sobre IA na produção', url: 'https://automaton-media.com/en/news/from-i-wish-ai-could-vanish-entirely-to-development-is-no-longer-feasible-without-it-shinji-mikami-and-hyung-tae-kim-share-views-on-ai/' },
    ],
    product: 'Stellar Blade para PlayStation 5', query: 'Stellar Blade PS5',
    pitch: 'Busca pelo jogo anterior da franquia para PS5, não pela sequência Blood Rain.',
    seoTitle: 'Stellar Blade: Shift Up detalha uso de IA em Blood Rain',
    seoDescription: 'Kim Hyung-tae diz que Blood Rain é feito com revisão humana, embora a Shift Up use IA em tarefas intermediárias de produção.',
    body: `Kim Hyung-tae, diretor da Shift Up, descreveu “feito à mão do início ao fim” como um novo princípio para Stellar Blade: Blood Rain. A frase surgiu após críticas a um vídeo promocional com uso de IA. Em entrevista a Inven Global durante a G-CON, Kim também reconheceu que a equipe continua usando ferramentas de IA em algumas tarefas intermediárias.

Entre os exemplos citados estão aplicação de desgaste em texturas, redução de polígonos para desempenho, testes de iluminação e organização de arquivos. Segundo o relato, artistas revisam o material antes que ele chegue ao resultado final. A declaração, portanto, não significa que o estúdio tenha eliminado IA do processo; ela distingue ferramentas auxiliares da apresentação final do jogo.

Kim argumentou que o objetivo seria usar essas ferramentas para apoiar qualidade, e não apenas acelerar a produção ou reduzir prazos. GamesRadar também contextualiza que a empresa enfrentou reação negativa pelo vídeo musical anterior e diz que Shift Up passou a enfatizar autoria humana no conteúdo visível.

Até o momento, a conversa trata do processo de produção, não mostra ativos finais de Blood Rain nem responde como cada recurso será creditado ao público. A matéria se limita ao que os entrevistados disseram e não tenta inferir se modelos generativos foram treinados com material autorizado. Blood Rain é o projeto futuro; o botão abaixo leva ao Stellar Blade original para PS5.`
    ,sources: [
      source('Inven Global — entrevista com os diretores durante a G-CON', 'https://www.invenglobal.com/articles/28842/handmade-from-start-to-finish-kim-hyung-tae-and-shinji-mikami-on-game-design-and-ai'),
      source('GamesRadar — contexto e detalhes das tarefas citadas', 'https://www.gamesradar.com/games/action/stellar-blade-blood-rain-is-handmade-from-start-to-finish-after-ai-music-video-backlash-shift-up-boss-says-but-uh-the-devs-are-still-using-ai/'),
      source('AUTOMATON West — cobertura da conversa sobre IA na indústria', 'https://automaton-media.com/en/news/from-i-wish-ai-could-vanish-entirely-to-development-is-no-longer-feasible-without-it-shinji-mikami-and-hyung-tae-kim-share-views-on-ai/'),
    ],
  }),
];
