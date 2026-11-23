const checkedAt = '2026-11-23T10:39:46-03:00';
const generatedAt = '2026-11-23T17:32:19-03:00';
const imageTerms = 'https://openai.com/policies/terms-of-use/';
const imageCredit = 'Ilustração conceitual original gerada por IA com OpenAI ImageGen; não é captura de jogo nem arte oficial.';
const imageLicense = 'Output gerado conforme os Termos de Uso da OpenAI; titularidade sujeita à lei aplicável.';
const mediaById = {
  'the-finals-grand-major-dreamhack-2026': {
    files: ['the-finals-cover.png', 'the-finals-body.png'],
    alts: ['Arena de esports iluminada em magenta e dourado, com silhuetas de jogadores em um cenário de combate destrutível.', 'Troféu abstrato de três coroas no palco de uma final de esports, diante de duas equipes e público iluminado.'],
    prompts: [
      'Create a wide editorial illustration for a monetized Brazilian gaming news site, cover image for a report about a major esports tournament in Stockholm for a destructible arena shooter. Scene: a dramatic futuristic esports arena, central glass-and-steel arena with a few abstract combatant silhouettes and bright overhead spotlights, a subtle Nordic city skyline visible beyond the venue. Compose as a clean magazine illustration, distinct strong silhouettes, restrained palette of magenta, charcoal, and warm gold, professional, readable at thumbnail size. Entirely original concept art, not a game screenshot, no recognizable characters, no game or event logos, no text, no watermark.',
      'Create a wide original editorial illustration for the body of a gaming news article about a major arena shooter esports final. Close, dynamic view of a tournament trophy shaped as an abstract three-crown structure on a stage, two opposing team silhouettes reflected in glass, luminous magenta-and-gold crowd lights. Magazine illustration, clean bold shapes, legible at thumbnail scale. No text, no logos, no recognizable game characters, not a screenshot, no watermark.',
    ],
  },
  'sea-of-thieves-update-392-arquivos-menores': {
    files: ['sea-of-thieves-cover.png', 'sea-of-thieves-body.png'],
    alts: ['Fortaleza de pedra em uma ilha tropical ao amanhecer, vista do convés de um navio pirata.', 'Mapa náutico e bússola sobre mesa de navio, junto a carga reorganizada e um objeto abstrato que remete a armazenamento digital.'],
    prompts: [
      'Create a wide editorial cover illustration for a monetized gaming news site about a pirate game\'s update restoring a legendary sea fort. A weathered stone fort on a small tropical island at early dawn, viewed from a low wooden ship deck, calm blue-green sea, warm lanterns and a single small sail in the distance. Painterly but crisp game-editorial art, distinctive composition, inviting rather than generic. No text, no logos, no recognizable characters, not a screenshot, no watermark.',
      'Create a wide original editorial illustration for the body of a news article about a pirate game\'s storage update. A nautical chart and compass on a ship\'s table beside a compact external drive-like abstract object, with a miniature sea route and a clearly smaller stack of cargo crates after a tidy reorganization. Warm lantern light, teal water visible through a porthole, restrained, elegant magazine art. No brand marks, no text, not a product photo, not a screenshot, no watermark.',
    ],
  },
  'phasmophobia-resonance-update-novembro-2026': {
    files: ['phasmophobia-cover.png', 'phasmophobia-body.png'],
    alts: ['Investigadores usam uma vara de radiestesia em um corredor de casa antiga, atraídos por um brilho espectral.', 'Uma xícara desliza sobre uma mesa de cozinha vazia enquanto fachos de lanterna convergem para uma porta escura.'],
    prompts: [
      'Create a wide original editorial illustration for a monetized Brazilian gaming news site about a cooperative ghost-hunting game\'s upcoming update. Three investigators in a decaying farmhouse corridor use a forked dowsing rod that gently bends toward a faint spectral glow near the floor; old wallpaper, flashlight beams, tense but readable scene, cool gray-blue palette with one amber light. Concept art, distinct silhouettes. No text, no logo, no gore, not a game screenshot, no watermark.',
      'Create a wide editorial illustration for the body of an article about a cooperative ghost-hunting update. An empty farmhouse kitchen where a ceramic cup has just slid across a scarred wooden table toward a dark doorway, three flashlight beams converge from off-frame, tiny spectral dust in the air, unsettling quiet and readable focal point, cold green-gray palette with a small warm highlight. Original concept art, no humans needed, no text, no logo, no gore, not a screenshot, no watermark.',
    ],
  },
  'darkest-dungeon-2-butcher-asylum-dlc-2027': {
    files: ['darkest-dungeon-ii-cover.png', 'darkest-dungeon-ii-body.png'],
    alts: ['Ringmaster em silhueta acima de uma arena gótica circular, onde pequenos aventureiros enfrentam monstros sob cortinas vermelhas.', 'Roleta ornamentada com amuletos e fichas diante de uma arena escura e de espectadores em silhueta.'],
    prompts: [
      'Create a wide cover illustration for a monetized gaming news site about an upcoming gothic roguelike arena expansion. A theatrical ringmaster silhouette stands high above a circular stone arena while tiny adventurers face a wave of shadowy monsters below; torn crimson curtains, candlelight, dramatic central staging, stylized ink-and-paint game editorial art, strong simple shapes. Do not depict any known game character or copy official art. No text, no logos, no gore, not a screenshot, no watermark.',
      'Create a wide editorial illustration for the body of an article about a tactical gothic arena DLC. Close view of an ornate prize wheel with abstract charms and tokens beside a battered round arena floor, blurred spectators in balcony shadows and one small hero silhouette preparing for the next bout. Restrained oxblood, parchment, charcoal palette, clean visual hierarchy. Original art, no words, no logos, no recognizable characters, not a screenshot, no watermark.',
    ],
  },
  'review-goat-simulator-3-ticket-dizzyworld-pesquisa': {
    files: ['goat-simulator-3-cover.png', 'goat-simulator-3-body.png'],
    alts: ['Cabra brincalhona atravessa um parque de diversões colorido com roda-gigante, montanha-russa e balões.', 'Cabra em carrinho de choque derrapa em um parque, com visitantes surpresos e montanha-russa ao fundo.'],
    prompts: [
      'Create a wide cover illustration for a review of a newly released comedic goat-themed amusement-park expansion. A mischievous ordinary goat in a bright but slightly chaotic coastal funfair, tilted teacups, roller coaster rails and colorful balloon clusters, lively physics-comedy energy, playful editorial illustration with polished shapes and readable thumbnail composition. Not the game\'s named character, no text, no logos, not a screenshot, no watermark.',
      'Create a wide editorial illustration for the body of a review based on research of a goat-themed amusement park expansion. A small goat rides a bumper car through a whimsical carnival, loose balloons, popcorn cart, coaster track overhead, a few surprised visitors at a safe distance. Dynamic playful movement, bright aqua and orange palette, polished graphic illustration, not the game\'s named character or game screenshot. No words, logos, watermark.',
    ],
  },
  'xbox-lancamentos-semana-23-27-novembro-2026': {
    files: ['xbox-week-cover.png', 'xbox-week-body.png'],
    alts: ['Portal luminoso se abre para quatro pequenos mundos de jogos: ilhas-fábrica, posto no deserto, quebra-cabeças com gatos e torre assombrada.', 'Mão organiza cartões de jogos sem texto sobre uma mesa digital, cada cartão com um gênero visual diferente.'],
    prompts: [
      'Create a wide editorial cover illustration for a Brazilian service article about this week\'s Xbox game releases. An illuminated console-shaped portal at center opens onto four clearly different miniature worlds—cozy floating factory islands, desert survival outpost, puzzle cats and a haunted tower—like a curated launch calendar, sophisticated gaming-magazine art, deep teal and lime accents. Avoid brand logos, text, numbers, product photography, screenshots, watermark.',
      'Create a wide editorial illustration for the body of a weekly game-release roundup. A hand arranging small blank game cards across a glowing calendar-like table, each card showing a different visual genre miniature (factory gears, desert dig site, cat puzzle, fantasy tower), warm desk light and cool digital reflections. Original editorial concept art, no legible text, no logos, no brand marks, not a screenshot, no watermark.',
    ],
  },
  'xbox-black-friday-ofertas-regiao-novembro-2026': {
    files: ['xbox-black-friday-cover.png', 'xbox-black-friday-body.png'],
    alts: ['Duas vitrines de jogos separadas por uma rota no Atlântico mostram que promoções digitais variam entre mercados.', 'Vitrines de jogos com seleções e iluminação diferentes representam ofertas regionais distintas, sem valores ou marcas.'],
    prompts: [
      'Create a wide cover illustration for an article about Xbox Black Friday deals and regional price differences. A game-shopping scene with a console controller in foreground and two contrasting storefront windows across a subtle Atlantic map: one bright with sale-colored light, one calm and without price tags, suggesting different markets. Elegant editorial infographic-like art without words, numbers, flags, logos or readable prices; no product brand, no watermark.',
      'Create a wide editorial illustration for the body of a Brazilian gaming article comparing regional Black Friday offers. A close view of two open storefront windows separated by an ocean route on a globe: one window has a festive game shelf and generic colorful discount stickers with no readable symbols, the other has a different assortment and neutral lighting. Communicate market-by-market variation without text, numbers, flags or brands. Sophisticated editorial art, no watermark.',
    ],
  },
  'gothic-3-classic-lancamento-plataformas-novembro-2026': {
    files: ['gothic-3-classic-cover.png', 'gothic-3-classic-body.png'],
    alts: ['Viajante medieval observa um vale amplo com cidade murada, ruínas, montanhas e tempestade distante.', 'Mapa de pergaminho com estradas de pedra reparadas ligando povoados medievais, junto à silhueta abstrata de um controle moderno.'],
    prompts: [
      'Create a wide cover illustration for an article about a classic open-world fantasy RPG arriving on modern consoles. A lone armored wanderer stands at the edge of a high mountain pass, looking down into a vast rugged medieval valley with a distant stone city and storm-lit peaks, grounded old-school European fantasy art, earthy greens and slate blue, atmospheric but clean silhouette. Original concept, not from any existing game, no text, no logos, no watermark.',
      'Create a wide editorial illustration for the body of an article about a classic RPG being reissued on consoles. A weathered parchment world map partly overlaid by a modern game controller silhouette and a repaired stone road leading between three medieval settlements; subtle contrast between old paper texture and modern light. Elegant editorial illustration, no recognizable map, no words, logos, or product branding, no watermark.',
    ],
  },
  'wuthering-waves-versao-4-0-data-dezembro-2026': {
    files: ['wuthering-waves-4-cover.png', 'wuthering-waves-4-body.png'],
    alts: ['Viajante solitário contempla costa de fantasia ao entardecer, com árvores incandescentes e rochedos flutuantes ao longe.', 'Sino de bronze e ondas sonoras luminosas transformam-se em brasas diante de um observatório costeiro em ruínas.'],
    prompts: [
      'Create a wide original editorial cover illustration for an article about Wuthering Waves version 4.0 and its new chapter. A lone traveler seen from behind on a windswept fantasy coastline at dusk, glowing ember-like trees and distant floating rock formations across the water, atmospheric wave patterns in sky, refined anime-inspired editorial painting without recognizable characters or copied designs. No text, no logos, no watermark.',
      'Create a wide editorial illustration for the body of an article about Wuthering Waves version 4.0 and its story chapter. Close view of a resonant bronze bell-like structure beside a luminous futuristic coastline; concentric sound-wave patterns become glowing embers and drift toward a distant ruined observatory, expressive anime-inspired editorial painting, original design, no recognizable characters, no text, no logos, no watermark.',
    ],
  },
  'review-007-first-light-pesquisa-2026': {
    files: ['007-first-light-cover.png', '007-first-light-body.png'],
    alts: ['Agente de inteligência anônimo observa uma cidade europeia chuvosa do telhado, com estação ferroviária iluminada ao fundo.', 'Corredor de museu oferece duas rotas discretas ao agente que estuda uma câmera de segurança.'],
    prompts: [
      'Create a wide cover illustration for a review of a modern cinematic spy-action game. A young anonymous intelligence agent in a dark tailored suit stands on a rain-slick European rooftop at blue hour, city lights and a train station below, one discreet earpiece and a small reflective gadget in hand, poised between observation and action. Sophisticated espionage magazine art, no resemblance to any known actor or franchise character, no gun aimed at viewer, no text, logos or watermark.',
      'Create a wide editorial illustration for the body of a research-based review of a stealth action game. A modern museum corridor with two possible routes around a security camera: a softly lit public hall and a narrow service passage, a tiny anonymous agent silhouette studying the choice from behind a stone sculpture. Elegant cinematic lighting, clean geometry, refined spy-thriller magazine illustration. No named character, no franchise marks, no text, no weapon emphasis, no screenshot, no watermark.',
    ],
  },
};

function draft({ id, title, tag, excerpt, body, scores, reason, signals, sources, section = 'NOTÍCIAS', imageQuery, imageCandidates = [], searchDate = '2026-11-23' }) {
  const media = mediaById[id];
  const image = `/images/editorial-conceitual/2026-11-23/${media.files[0]}`;
  const inlineImage = `/images/editorial-conceitual/2026-11-23/${media.files[1]}`;
  return {
    id, category: 'GAMES', section, status: 'draft', tag, title, excerpt,
    date: '23 nov 2026', publishedAt: '2026-11-23', read: `${Math.max(3, Math.ceil(body.split(/\s+/).length / 175))} min`,
    relevanceDate: '2026-11-23', relevanceScore: scores.reduce((sum, value) => sum + value, 0),
    relevanceBreakdown: { timeliness: scores[0], publicInterest: scores[1], reach: scores[2], sourceReliability: scores[3], brazilUtility: scores[4] },
    relevanceReason: reason, relevanceUpdatedAt: checkedAt,
    relevanceSignals: signals.map(({ label, url, sameDayVerified = false }) => ({ label, url, sameDayVerified })),
    image, imageAlt: media.alts[0], imageSource: imageCredit, imageSourceUrl: imageTerms, imageLicense, imageLicenseUrl: imageTerms,
    inlineImage: { image: inlineImage, alt: media.alts[1], credit: imageCredit, sourceUrl: imageTerms, license: imageLicense, licenseUrl: imageTerms },
    imageResearch: { query: imageQuery, imageSearchCheckedAt: `${searchDate}T10:39:46-03:00`, checkedAt: generatedAt, generatedAt, status: 'generated-contextual-ai-reviewed', generator: 'OpenAI ImageGen', assets: [image, inlineImage], prompts: media.prompts,
      referenceSources: sources.map(source => source.url), searchCandidates: imageCandidates,
      notes: 'A busca visual não encontrou um par real com permissão comercial confirmada. A pedido do usuário, foram geradas duas ilustrações conceituais originais para esta pauta, em composições distintas, sem reproduzir arte oficial ou capturas. Crédito e texto alternativo identificam a origem como IA.' },
    affiliateResearch: { product: null, query: null, tag: 'bitsplease-20', checkedAt, status: 'not-verified', notes: 'Ainda não foi confirmada uma oferta Amazon Brasil diretamente pertinente e um destino/tag válidos. Não inserir CTA antes dessa conferência.' },
    draftNotes: 'Imagens conceituais originais geradas por IA e identificadas como tais; não são fotos, capturas nem artes oficiais. Oferta Amazon Brasil diretamente pertinente e destino/tag ainda precisam de validação antes de publicar.',
    body, sources,
  };
}

export const dailyPosts20261123 = [
  draft({
    id: 'the-finals-grand-major-dreamhack-2026', section: 'ESPORTS', tag: 'THE FINALS · Grand Major · DreamHack Stockholm',
    title: 'THE FINALS leva seu Grand Major de US$ 150 mil a DreamHack Stockholm',
    excerpt: 'O campeonato está marcado para 27 a 29 de novembro, com transmissão ao vivo e itens cosméticos ligados à audiência. Veja o que foi confirmado e o que ainda falta para entender a competição.',
    scores: [22, 18, 16, 12, 7], reason: 'A cobertura independente foi publicada em 23/11 e o torneio começa nesta semana. O prêmio e as datas constam também nos canais oficiais; alcance e utilidade brasileira são moderados porque não há equipe brasileira confirmada nas fontes consultadas.',
    signals: [
      { label: 'Kropp Gaming — matéria publicada em 23/11 sobre o Grand Major', url: 'https://gaming.kroppmedia.com.au/news/the-finals-grand-major-2026-dreamhack-stockholm/', sameDayVerified: true },
      { label: 'DreamHack — página oficial do Grand Major 2026', url: 'https://dreamhack.com/stockholm/the-finals/' },
      { label: 'THE FINALS — anúncio oficial de programação e premiação', url: 'https://store.steampowered.com/news/posts/?appgroupname=Nordic+Games&enddate=1795197608&feed=steam_community_announcements' },
    ],
    sources: [
      { label: 'DreamHack — The Grand Major 2026', url: 'https://dreamhack.com/stockholm/the-finals/' },
      { label: 'THE FINALS / Steam — programação, transmissão e prêmio', url: 'https://store.steampowered.com/news/posts/?appgroupname=Nordic+Games&enddate=1795197608&feed=steam_community_announcements' },
      { label: 'Kropp Gaming — reportagem independente de 23/11', url: 'https://gaming.kroppmedia.com.au/news/the-finals-grand-major-2026-dreamhack-stockholm/' },
    ], imageQuery: 'THE FINALS Grand Major DreamHack Stockholm 2026', imageCandidates: ['https://dreamhack.com/blog/2025/05/20/the-finals-major-at-dreamhack-stockholm/'],
    body: `O Grand Major 2026 de THE FINALS será disputado de 27 a 29 de novembro, dentro da DreamHack Stockholm. Embark chama o torneio de principal evento competitivo anual do jogo e anunciou uma premiação total de US$ 150 mil. A competição presencial terá transmissão pelo canal oficial de THE FINALS na Twitch, com itens cosméticos para espectadores durante os três dias. O prêmio é o valor divulgado pela organizadora; não equivale a um dado independente sobre audiência ou tamanho da comunidade.\n\nO formato tem duas etapas. Dezesseis equipes entram em The Promotion; depois, The Throne coloca uma equipe para defender a posição contra quatro desafiantes. O título fica com o primeiro time que conquistar três coroas. As partidas começam ao meio-dia no horário CET de 27/11, equivalente a 8h em Brasília. A página oficial também lista os horários e recompensas vinculados à transmissão.\n\nHá uma diferença entre acompanhar o torneio e participar das ativações dentro do jogo. A audiência pode desbloquear cosméticos; o evento também tem previsões Pick’Ems, com prazo até 26/11, e pacotes de itens pagos vinculados às equipes. Nenhuma dessas opções é necessária para assistir. O conteúdo exato das recompensas e as regras de elegibilidade devem ser consultados nos canais oficiais antes do evento.\n\nO Brasil não aparece nas fontes consultadas como sede ou região participante de uma vaga específica, então não atribuímos representante brasileiro ao campeonato. Para quem acompanha o cenário, o principal dado prático é o horário de abertura e a estrutura final: a disputa começa cedo no horário de Brasília e termina com uma série até três coroas. A relevância do Major também vem de THE FINALS ter um evento internacional organizado num festival presencial, não de métricas de público que não foram divulgadas.`
  }),
  draft({
    id: 'sea-of-thieves-update-392-arquivos-menores', tag: 'Sea of Thieves · atualização 3.9.2 · armazenamento',
    title: 'Sea of Thieves reduz o espaço instalado, mas exige baixar o jogo inteiro uma vez',
    excerpt: 'A atualização 3.9.2 encolhe o pacote em todas as plataformas compatíveis. A mudança melhora atualizações futuras, mas o primeiro download é completo; os tamanhos variam bastante entre dispositivos.',
    scores: [19, 14, 17, 13, 8], reason: 'A matéria independente é de 23/11 e retoma uma mudança técnica recém-lançada. As notas oficiais da Rare detalham os tamanhos por plataforma, informação útil para quem joga no Brasil, sem tratar a redução como tamanho de download igual para todos.',
    signals: [
      { label: 'Kropp Gaming — reportagem publicada em 23/11', url: 'https://gaming.kroppmedia.com.au/news/sea-of-thieves-november-update-smaller-install-old-boot-fort/', sameDayVerified: true },
      { label: 'Rare — notas da versão 3.9.2 e tamanhos oficiais', url: 'https://www.seaofthieves.com/release-notes' },
      { label: 'Massively Overpowered — cobertura independente de 20/11', url: 'https://massivelyop.com/2026/11/20/sea-of-thieves-launches-its-ensmallened-install-size-custom-seas-updates-and-quality-of-life-features/' },
    ],
    sources: [
      { label: 'Rare — notas oficiais da atualização 3.9.2', url: 'https://www.seaofthieves.com/release-notes' },
      { label: 'Rare — calendário de novembro de 2026', url: 'https://www.seaofthieves.com/news/this-month-november-2026' },
      { label: 'Kropp Gaming — reportagem publicada em 23/11', url: 'https://gaming.kroppmedia.com.au/news/sea-of-thieves-november-update-smaller-install-old-boot-fort/' },
      { label: 'Massively Overpowered — cobertura independente', url: 'https://massivelyop.com/2026/11/20/sea-of-thieves-launches-its-ensmallened-install-size-custom-seas-updates-and-quality-of-life-features/' },
    ], imageQuery: 'Sea of Thieves Season 21 update Old Boot Fort 2026', imageCandidates: ['https://www.seaofthieves.com/release-notes/1.4.0'],
    body: `A atualização 3.9.2 de Sea of Thieves reorganiza os arquivos do jogo para reduzir o espaço ocupado. A Rare informa tamanhos de instalação diferentes conforme plataforma: 56,4 GB no Xbox Series X, 26,3 GB no Series S, 57,4 GB no PS5 e 53,2 GB no Steam. Esses números são os tamanhos publicados nas notas, não uma estimativa de quanto cada jogador precisará baixar em cada conexão.\n\nO custo imediato da mudança é uma reinstalação completa única. Depois dela, a Rare diz que os downloads das atualizações seguintes também serão menores. Quem tem franquia limitada de internet ou conexão lenta deve planejar esse primeiro download antes de iniciar uma sessão. A redução do espaço instalado não significa que o pacote da atualização inicial seja igualmente pequeno.\n\nA versão traz também novidades para Custom Seas, o conjunto de ferramentas de personalização: Free Camera e Spawn Menu recebem opções adicionais, e Old Boot Fort volta como local lendário. O evento Renown Rally, listado pela Rare de 20 a 23 de novembro, oferece Renown em dobro durante o período anunciado. A hora final depende do fuso usado pela página oficial.\n\nA pauta é relevante para quem precisa administrar armazenamento e downloads, mas a redução não altera o espaço disponível no console ou no PC por si só. Confira o tamanho informado pela plataforma e reserve espaço para o processo de reinstalação. A Rare não publicou, nas notas consultadas, uma garantia de redução idêntica para todas as configurações de idioma ou versões de sistema.`
  }),
  draft({
    id: 'phasmophobia-resonance-update-novembro-2026', tag: 'Phasmophobia · Resonance · Unity 6',
    title: 'Phasmophobia recebe Resonance em 24 de novembro com migração para Unity 6',
    excerpt: 'A atualização gratuita acrescenta varas de radiestesia e recursos de reconhecimento de voz. A Kinetic Games promete mudanças técnicas e correções, mas só divulgará as notas completas no lançamento.',
    scores: [23, 17, 16, 14, 8], reason: 'O update está previsto para amanhã (24/11), confirmado pela desenvolvedora e coberto por publicação especializada em 22/11. A proximidade justifica a atualidade; benefícios de desempenho continuam sendo expectativa do estúdio, não resultado independente medido.',
    signals: [
      { label: 'Kinetic Games — anúncio oficial de Resonance', url: 'https://kineticgames.co.uk/news/resonance-releasedate' },
      { label: 'Kropp Gaming — reportagem de 22/11', url: 'https://gaming.kroppmedia.com.au/news/phasmophobia-resonance-update-november-24-ghost-voice-commands/' },
      { label: 'PC Gamer — cobertura independente sobre atualização e caridade', url: 'https://www.pcgamer.com/games/horror/phasmophobia-raises-over-usd200-000-for-charity-in-the-annual-ghost-hunts-for-hearts-collaboration-with-the-american-heart-association/' },
    ],
    sources: [
      { label: 'Kinetic Games — data, recursos e notas da atualização', url: 'https://kineticgames.co.uk/news/resonance-releasedate' },
      { label: 'Kinetic Games — índice oficial de notícias e previews', url: 'https://www.kineticgames.co.uk/news' },
      { label: 'Kropp Gaming — reportagem de 22/11', url: 'https://gaming.kroppmedia.com.au/news/phasmophobia-resonance-update-november-24-ghost-voice-commands/' },
      { label: 'PC Gamer — contexto independente de desenvolvimento', url: 'https://www.pcgamer.com/games/horror/phasmophobia-raises-over-usd200-000-for-charity-in-the-annual-ghost-hunts-for-hearts-collaboration-with-the-american-heart-association/' },
    ], imageQuery: 'Phasmophobia Resonance update November 2026 Kinetic Games official image', imageCandidates: ['https://kineticgames.co.uk/news/resonance-releasedate'],
    body: `Resonance, a próxima atualização gratuita de Phasmophobia, está marcada para 24 de novembro. A Kinetic Games confirmou lançamento para PC em Acesso Antecipado pelo Steam, PlayStation 5, PS VR2 e Xbox Series X|S. O estúdio ainda não publicou as notas completas; por isso, os recursos abaixo são os anunciados, não uma avaliação de como funcionam na versão final.\n\nA principal mudança de interação deixa investigadores pedir ao fantasma que use portas e interruptores ou arremesse objetos próximos. As frases compatíveis estarão no Journal do jogo. O update acrescenta Dowsing Rods para localizar o osso, com precisão maior nas versões de nível superior, e muda o mapa do Sound Sensor para ajudar a distinguir sons contínuos de ocorrências isoladas.\n\nO jogo também migra para Unity 6. A desenvolvedora associa a troca a melhorias de iluminação e estabilidade e promete correções de erros. Isso é uma expectativa comunicada pela empresa; sem notas finais e testes comparativos independentes, não há base para afirmar ganho medido de desempenho em PC ou consoles. O anúncio ainda cita mais opções gráficas, ajustes de realidade virtual e acessibilidade para daltonismo.\n\nPara jogadores no Brasil, a atualização gratuita elimina a necessidade de comprar um DLC para ter esses recursos, mas não confirma mudanças em preço, localização ou requisitos. O horário exato de liberação e a lista final de correções devem ser conferidos no lançamento. Se a sessão depende de voz, vale aguardar as notas e testar as frases indicadas no Journal, pois o reconhecimento depende das configurações e da plataforma.`
  }),
  draft({
    id: 'darkest-dungeon-2-butcher-asylum-dlc-2027', tag: 'Darkest Dungeon II · The Butcher’s Asylum · DLC',
    title: 'Darkest Dungeon II transforma o circo da Ringmaster em arena no DLC Butcher’s Asylum',
    excerpt: 'O conteúdo pago chega no primeiro trimestre de 2027 e adiciona um modo curto de arena, uma nova heroína jogável e um sistema que recompensa agradar à plateia.',
    scores: [17, 14, 15, 14, 6], reason: 'O trailer foi divulgado em 21/11 e ganhou cobertura especializada em 22/11. A página da Steam confirma conteúdo, idioma e janela, mas ainda não traz preço nem data exata; a nota evita tratá-los como definidos.',
    signals: [
      { label: 'Red Hook — trailer e anúncio na página oficial da Steam', url: 'https://store.steampowered.com/news/posts/?appgroupname=Amazing+Adventures+The+Lost+Tomb%E2%84%A2&enddate=1795250910&feed=steam_community_announcements' },
      { label: 'Steam — página oficial do DLC, janela e recursos', url: 'https://store.steampowered.com/app/4328940/Darkest_Dungeon_II_The_Butchers_Asylum/' },
      { label: 'Kropp Gaming — cobertura de 22/11', url: 'https://gaming.kroppmedia.com.au/news/darkest-dungeon-2-butchers-asylum-dlc-trailer-2027/' },
    ],
    sources: [
      { label: 'Red Hook Studios — anúncio e trailer', url: 'https://store.steampowered.com/news/posts/?appgroupname=Amazing+Adventures+The+Lost+Tomb%E2%84%A2&enddate=1795250910&feed=steam_community_announcements' },
      { label: 'Steam — página do DLC', url: 'https://store.steampowered.com/app/4328940/Darkest_Dungeon_II_The_Butchers_Asylum/' },
      { label: 'Kropp Gaming — matéria sobre o trailer', url: 'https://gaming.kroppmedia.com.au/news/darkest-dungeon-2-butchers-asylum-dlc-trailer-2027/' },
    ], imageQuery: 'Darkest Dungeon II Butcher Asylum official art', imageCandidates: ['https://store.playstation.com/pl-pl/product/EP2483-PPSA19591_00-0015011924226920'],
    body: `The Butcher’s Asylum é um DLC pago para Darkest Dungeon II previsto para o primeiro trimestre de 2027. O trailer completo foi divulgado em 21 de novembro, e a página da Steam descreve uma arena independente em que o jogador monta um grupo e enfrenta combinações de inimigos em sequência. A expansão exige o jogo-base e ainda não tem preço nem dia exato de lançamento anunciados.\n\nO modo novo gira em torno da plateia. Um medidor acompanha sua reação: cumprir as exigências do público pode conceder efeitos positivos, enquanto decepcioná-lo fortalece os adversários. Entre as rodadas, a equipe gira uma roleta com modificadores, amuletos e jinxes que mudam o próximo confronto. O formato é de partidas curtas, com avanço até a derrota do grupo, segundo a descrição oficial.\n\nA novidade mais visível é a Ringmaster, vilã que apareceu em The Butcher’s Circus, do primeiro Darkest Dungeon. Ela passa a ser uma heroína jogável e, depois de desbloqueada na arena, poderá ser usada nos outros modos. A Red Hook descreve seu estilo como ligado a sangramento e risco elevado; isso é uma apresentação promocional, não uma conclusão sobre equilíbrio ou força competitiva.\n\nO DLC deve interessar a quem já gosta do combate por turnos e quer outro ciclo de partidas, mas ainda faltam informações práticas para uma decisão de compra: preço, data final e disponibilidade regional. A página da Steam lista interface e legendas em português brasileiro. Versões de console estão previstas depois da estreia no PC, sem calendário individual confirmado nas fontes abertas.`
  }),
  draft({
    id: 'review-goat-simulator-3-ticket-dizzyworld-pesquisa', section: 'REVIEWS', tag: 'Goat Simulator 3 · Ticket to Dizzyworld · análise baseada em pesquisa',
    title: 'Review: Ticket to Dizzyworld encontra novas formas de caos em Goat Simulator 3',
    excerpt: 'A expansão recém-lançada amplia a caixa de areia com parque temático, atrações e cooperação para até quatro pessoas. Esta análise é baseada em pesquisa e em impressões publicadas, sem teste próprio ou nota.',
    scores: [20, 13, 15, 12, 7], reason: 'É conteúdo lançado em 19/11 e a cobertura de primeiras impressões saiu no mesmo período. O texto é identificado como pesquisa: não atribui experiência ao Bits, Please, não extrapola a análise da expansão para outras plataformas e não inventa nota.',
    signals: [
      { label: 'Coffee Stain — anúncio e plataformas da expansão', url: 'https://www.goatsimulator3.com/de/' },
      { label: 'Windows Central — primeiras impressões com teste de co-op', url: 'https://www.windowscentral.com/gaming/move-over-gta-6-the-second-biggest-game-of-the-year-is-out-now-goat-simulator-3-ticket-to-dizzyworld' },
      { label: 'Steam — página e data de lançamento da expansão', url: 'https://store.steampowered.com/app/4882180/Goat_Simulator_3__Ticket_to_Dizzyworld/' },
    ],
    sources: [
      { label: 'Coffee Stain North — site oficial e data/plataformas', url: 'https://www.goatsimulator3.com/de/' },
      { label: 'Steam — expansão Ticket to Dizzyworld', url: 'https://store.steampowered.com/app/4882180/Goat_Simulator_3__Ticket_to_Dizzyworld/' },
      { label: 'Windows Central — primeiras impressões da expansão', url: 'https://www.windowscentral.com/gaming/move-over-gta-6-the-second-biggest-game-of-the-year-is-out-now-goat-simulator-3-ticket-to-dizzyworld' },
      { label: 'GamesRadar+ — análise do jogo-base, não da expansão', url: 'https://www.gamesradar.com/goat-simulator-3-review/' },
    ], imageQuery: 'Goat Simulator 3 Ticket to Dizzyworld official screenshots', imageCandidates: ['https://www.windowscentral.com/gaming/move-over-gta-6-the-second-biggest-game-of-the-year-is-out-now-goat-simulator-3-ticket-to-dizzyworld'],
    body: `Esta análise editorial é baseada em pesquisa e em primeiras impressões publicadas; o Bits, Please não testou Ticket to Dizzyworld e não atribui nota. A expansão de Goat Simulator 3 saiu em 19 de novembro de 2026 para PC, PS5, PS4, Xbox Series X|S e Xbox One. A página oficial indica planos futuros para Switch 2, sem data.\n\nO conteúdo leva Pilgor a um parque de diversões e, de acordo com a lista de recursos publicada pela Coffee Stain e o relato do Windows Central, acrescenta uma área ampla, atrações, desafios, itens e cosméticos. O Windows Central descreve sessões cooperativas de até quatro pessoas e situações físicas absurdas, como usar brinquedos e balões para interagir com visitantes. Isso é uma impressão de uma sessão da equipe do veículo, não experiência nossa nem garantia de que todas as atrações tenham o mesmo resultado em cada plataforma.\n\nO ponto forte parece ser a variedade de brinquedos para experimentar em grupo: montanha-russa, carrinhos de choque e minijogos aproveitam o humor físico do jogo-base. A limitação é que a cobertura acessível consultada é uma primeira impressão entusiasmada, não uma review independente completa que avalie duração, desempenho, bugs e diferença entre solo e cooperação. Também não encontramos preço regional confirmado na loja brasileira durante esta pesquisa.\n\nA recomendação editorial é condicional. Quem já tem Goat Simulator 3 e procura mais atividades para jogar em grupo pode considerar a expansão depois de conferir preço e plataforma. Quem espera uma campanha narrativa ou uma avaliação técnica robusta deve esperar análises completas e a confirmação da oferta local. Não trate uma expansão como jogo-base: a compra exige Goat Simulator 3.`
  }),
  draft({
    id: 'xbox-lancamentos-semana-23-27-novembro-2026', tag: 'Xbox · lançamentos da semana · 23 a 27 de novembro',
    title: 'Xbox concentra os lançamentos da semana entre 23 e 27 de novembro',
    excerpt: 'A lista oficial mistura jogos de estreia imediata, como The Spotter: Dig or Die, com títulos chegando até sexta. Datas e disponibilidade podem mudar, e o catálogo do Xbox não garante lançamento simultâneo no Brasil.',
    scores: [18, 12, 15, 13, 8], reason: 'O guia da Xbox Wire foi publicado em 20/11 e cobre a semana corrente. É uma pauta útil de serviço, mas foi pontuada abaixo de notícias de hoje porque a fonte oficial não publicou o guia em 23/11 e o calendário inclui títulos menores.',
    signals: [
      { label: 'Xbox Wire Brasil — agenda de 23 a 27/11 publicada em 20/11', url: 'https://news.xbox.com/pt-br/2026/11/20/proxima-semana-em-xbox-novos-jogos-para-23-a-27-de-novembro/' },
      { label: 'Xbox Wire — agenda em inglês e ressalva sobre datas', url: 'https://news.xbox.com/en-us/2026/11/20/next-week-on-xbox-new-games-for-november-23-to-27/' },
    ],
    sources: [
      { label: 'Xbox Wire Brasil — jogos de 23 a 27 de novembro', url: 'https://news.xbox.com/pt-br/2026/11/20/proxima-semana-em-xbox-novos-jogos-para-23-a-27-de-novembro/' },
      { label: 'Xbox Wire — agenda completa em inglês', url: 'https://news.xbox.com/en-us/2026/11/20/next-week-on-xbox-new-games-for-november-23-to-27/' },
    ], imageQuery: 'Xbox games November 23 27 2026 official screenshots', imageCandidates: ['https://news.xbox.com/pt-br/2026/11/20/proxima-semana-em-xbox-novos-jogos-para-23-a-27-de-novembro/'],
    body: `A agenda oficial da Xbox Wire para 23 a 27 de novembro reúne lançamentos em console, PC e Play Anywhere. Entre os títulos listados para segunda-feira estão Jaden Industries: Cozy Automation Puzzler e The Spotter: Dig or Die. Ao longo da semana, a lista inclui Storage Hunter Simulator, Cat Mirror, Sokobear Goo, Machine Party e Arkheron em Game Preview. A Microsoft alerta que datas podem mudar.\n\nA seleção mistura gêneros e portes diferentes. Jaden Industries combina quebra-cabeças e cadeias de produção em ilhas; The Spotter: Dig or Die alterna escavação e defesa contra ondas de inimigos. No fim da semana, Arkheron entra como prévia de jogo PvP em equipe, enquanto Machine Party traz minijogos competitivos. São descrições oficiais dos produtos, não recomendações baseadas em teste.\n\nO guia da Microsoft é útil para descobrir datas, mas não resolve disponibilidade brasileira. Valores exibidos na versão norte-americana não devem ser convertidos diretamente para reais, e a presença no artigo não significa que cada jogo já esteja liberado em todas as lojas ou regiões. Verifique a ficha local do Xbox ou a plataforma de PC no dia do lançamento, inclusive se o título está disponível por compra separada ou assinatura.\n\nComo a agenda contém muitos jogos independentes, vale filtrar por gênero e plataforma em vez de tratar a lista inteira como lançamentos de mesmo alcance. O rascunho destaca apenas datas confirmadas no material da Xbox Wire e evita inferir desempenho, qualidade ou audiência a partir do texto promocional.`
  }),
  draft({
    id: 'xbox-black-friday-ofertas-regiao-novembro-2026', tag: 'Xbox · Black Friday · ofertas por região',
    title: 'Black Friday do Xbox: nova leva de ofertas foi prevista para 23/11, mas a lista dos EUA não vale para o Brasil',
    excerpt: 'A Microsoft anunciou uma nova leva para 23 de novembro na campanha dos EUA, sem confirmar os mesmos descontos no Brasil. Confira a loja brasileira antes de decidir.',
    scores: [17, 14, 18, 14, 9], reason: 'A campanha anuncia uma atualização para 23/11 e inclui franquias de grande alcance. A fonte deixa claro que descontos variam por mercado; não há preço brasileiro confirmado neste rascunho, então a utilidade foi limitada e a pauta não recomenda compras específicas.',
    signals: [
      { label: 'Xbox Wire — página oficial da campanha e atualização prevista para 23/11', url: 'https://news.xbox.com/en-us/2026/11/16/xbox-black-friday-sale-2026/' },
      { label: 'Xbox Brasil — loja para conferir ofertas locais', url: 'https://www.xbox.com/pt-BR/games/all-games' },
    ],
    sources: [
      { label: 'Xbox Wire — campanha Black Friday, duração e restrição regional', url: 'https://news.xbox.com/en-us/2026/11/16/xbox-black-friday-sale-2026/' },
      { label: 'Xbox Brasil — catálogo local, sem presumir paridade de preço', url: 'https://www.xbox.com/pt-BR/games/all-games' },
    ], imageQuery: 'Xbox Black Friday sale 2026 official campaign artwork',
    body: `A campanha Black Friday do Xbox começou em 19 de novembro e, segundo o Xbox Wire, recebe uma leva adicional de ofertas em 23/11. O comunicado descreve a página consultada como exclusiva dos Estados Unidos e orienta que preços e descontos variam conforme mercado e varejista. A campanha dos EUA termina em 2 de dezembro; essa data não confirma o prazo da loja brasileira.\n\nEntre os exemplos citados na página norte-americana estão descontos em Forza Horizon 6, Gears of War: E-Day, NBA 2K27, Madden NFL 27 e Final Fantasy VII Remake Intergrade. Esses percentuais e edições não devem ser apresentados como ofertas do Brasil. A Microsoft também divulga acessórios e personalização de controles, novamente com elegibilidade e condições regionais.\n\nPara quem compra no Brasil, o caminho seguro é conferir a loja local com a conta e região corretas, comparar a edição e verificar se o desconto aparece no checkout antes de pagar. O calendário da campanha pode servir como alerta de que novas promoções serão adicionadas, mas não substitui a checagem de preço final, impostos ou disponibilidade. O catálogo internacional não garante que a oferta seja replicada localmente.\n\nEste guia não recomenda um produto específico porque não foi confirmada uma oferta Amazon Brasil diretamente ligada à pauta nem um preço Xbox Brasil no momento da pesquisa. A matéria permanece em rascunho até a verificação de descontos locais e do CTA. Não usamos porcentagens da loja dos EUA para estimar preços brasileiros.`
  }),
  draft({
    id: 'gothic-3-classic-lancamento-plataformas-novembro-2026', tag: 'Gothic 3 Classic · THQ Nordic · RPG',
    title: 'Gothic 3 Classic chega a PS5 e Xbox em 24 de novembro; versão de Switch 2 fica para depois',
    excerpt: 'A THQ Nordic lista a edição clássica para consoles atuais, enquanto fontes recentes divergem sobre Switch 2. O texto separa o calendário confirmado nos consoles da geração atual da janela ainda incerta para o portátil.',
    scores: [20, 13, 16, 13, 6], reason: 'O lançamento está marcado para amanhã e o interesse deriva de uma franquia de RPG estabelecida. A janela de PS5 e Xbox aparece nas páginas oficiais; Switch 2 não deve ser incluído como versão de 24/11 sem confirmação primária atualizada.',
    signals: [
      { label: 'THQ Nordic — ficha de jogos com data de 24/11 para PS5 e Xbox', url: 'https://thqnordic.com/games' },
      { label: 'Embracer — calendário corporativo de lançamentos', url: 'https://embracer.com/wp-content/uploads/2026/11/Embracer-Group-publishes-Interim-Report-Q2-July%E2%80%93September-2026-Cash-EBIT-increased-to-SEK-203-million-261111.pdf' },
      { label: 'GamesRadar+ — calendário independente de lançamentos', url: 'https://www.gamesradar.com/upcoming-ps5-games/' },
    ],
    sources: [
      { label: 'THQ Nordic — página de catálogo e data de lançamento', url: 'https://thqnordic.com/games' },
      { label: 'THQ Nordic — site oficial de Gothic 3 Classic', url: 'https://gothic3classic.thqnordic.com/US/nsw2' },
      { label: 'Embracer Group — relatório e calendário de lançamentos', url: 'https://embracer.com/wp-content/uploads/2026/11/Embracer-Group-publishes-Interim-Report-Q2-July%E2%80%93September-2026-Cash-EBIT-increased-to-SEK-203-million-261111.pdf' },
      { label: 'GamesRadar+ — calendário PS5', url: 'https://www.gamesradar.com/upcoming-ps5-games/' },
    ], imageQuery: 'Gothic 3 Classic THQ Nordic official artwork', imageCandidates: ['https://gothic3classic.thqnordic.com/'],
    body: `Gothic 3 Classic está anunciado para 24 de novembro de 2026 em PlayStation 5 e Xbox Series X|S. A data aparece no catálogo da THQ Nordic e no calendário corporativo da Embracer. A descrição oficial promete otimizações e recursos de qualidade de vida; isso não equivale a um teste independente do desempenho da conversão.\n\nA disponibilidade de Switch 2 precisa de uma checagem adicional. Materiais anteriores da editora listaram a plataforma, mas a página atual de jogos consultada destaca PS5 e Xbox para 24/11, enquanto uma nota recente reproduzida por comunidades indica adiamento no Switch 2. Como não localizamos um comunicado oficial acessível que esclareça essa divergência, este texto não afirma que a versão portátil sairá amanhã.\n\nGothic 3 é um RPG de mundo aberto lançado originalmente em 2006. A reedição completa a sequência de relançamentos de Gothic e Gothic II em consoles atuais. Para leitores que não conhecem a série, o material da THQ descreve um mundo de fantasia em que o protagonista pode escolher alianças e explorar diferentes regiões; detalhes de mudanças técnicas específicas precisam ser confirmados nas notas finais da edição.\n\nAntes de comprar, confira a loja da sua plataforma e a edição indicada. Ainda não confirmamos preço brasileiro, conteúdo exato das melhorias nem autorização de uso comercial das artes promocionais. Por isso, a matéria continua em rascunho, sem oferta Amazon e sem afirmar compatibilidade de Switch 2 até que uma fonte primária atualizada resolva o ponto.`
  }),
  draft({
    id: 'wuthering-waves-versao-4-0-data-dezembro-2026', tag: 'Wuthering Waves · versão 4.0 · Embers of the Everbright',
    title: 'Wuthering Waves marca a versão 4.0 para 22 de dezembro',
    excerpt: 'A atualização apresentará o capítulo Embers of the Everbright. A data foi divulgada por Kuro Games com o fuso UTC+8; para o Brasil, a publicação precisa confirmar o horário local e os detalhes de conteúdo em canais oficiais.',
    scores: [15, 14, 15, 12, 7], reason: 'A nova versão é um marco anunciado há poucos dias e tem cobertura independente, mas não foi publicada hoje. O cronograma de dezembro reduz a urgência; personagens, horário brasileiro e detalhes completos ainda não devem ser tratados como fechados.',
    signals: [
      { label: 'Kuro Games — canais oficiais para a versão 4.0', url: 'https://wutheringwaves.kurogames.com/en/main/news' },
      { label: 'Inven Global — notícia de 18/11 com data e fuso publicados', url: 'https://labs.invenglobal.com/articles/28789/wuthering-waves-version-40-launches-december-22nd-with-embers-of-the-everbright' },
    ],
    sources: [
      { label: 'Kuro Games — notícias oficiais de Wuthering Waves', url: 'https://wutheringwaves.kurogames.com/en/main/news' },
      { label: 'Inven Global — data de lançamento e contexto da versão 4.0', url: 'https://labs.invenglobal.com/articles/28789/wuthering-waves-version-40-launches-december-22nd-with-embers-of-the-everbright' },
    ], imageQuery: 'Wuthering Waves Version 4.0 official art',
    body: `Kuro Games anunciou que Wuthering Waves terá a versão 4.0 em 22 de dezembro de 2026, no fuso UTC+8, com um novo capítulo chamado Embers of the Everbright. A data foi divulgada em novembro e repercutida por veículos especializados. O horário exato e a equivalência para o calendário brasileiro ainda não foram confirmados; por causa da diferença de fuso, o dia local pode mudar conforme a hora de liberação.\n\nA cobertura da Inven Global informa que o estúdio promete mais detalhes sobre personagens e conteúdo pelos canais oficiais nas semanas seguintes. Até que a página de atualização ou o programa de transmissão oficial liste esses dados, não tratamos personagens citados em comentários de comunidade como confirmação. A versão 4.0 também não deve ser confundida com uma janela de lançamento no Brasil separada da distribuição global.\n\nPara quem acompanha o jogo gratuito, a notícia serve principalmente para planejamento: a atualização chega perto do fim do ano e inicia um novo capítulo de história. Ainda não há, nas fontes consultadas, tamanho do download, horário brasileiro, requisitos de manutenção, mudanças de sistema ou detalhes completos de banner. A disponibilidade de compras internas pode variar por plataforma e região.\n\nA pauta permanece em rascunho porque falta uma oferta Amazon Brasil que ajude diretamente a acompanhar esta atualização e duas imagens reais com direitos de uso comercial confirmados. O texto não transforma uma data divulgada em calendário de banners nem presume que o conteúdo antecipado por redes sociais esteja confirmado.`
  }),
  draft({
    id: 'review-007-first-light-pesquisa-2026', section: 'REVIEWS', tag: '007 First Light · análise baseada em pesquisa',
    title: 'Review: 007 First Light aproxima o agente jovem do cinema de espionagem',
    excerpt: 'A aventura de IO Interactive combina furtividade, gadgets e cenas de ação, mas as análises divergem sobre liberdade e ritmo. Esta leitura editorial é baseada em reviews especializadas; não fizemos teste próprio e não atribuímos nota.',
    scores: [8, 9, 18, 14, 7], reason: 'O jogo é um lançamento de 2026 com franquia de grande alcance, mas a janela de atualidade já passou. A análise comparativa continua útil para leitores que consideram o jogo; reviews de PC Gamer, GamesRadar e IGN sustentam a leitura sem alegar teste local.',
    signals: [
      { label: 'IO Interactive — anúncio oficial de lançamento', url: 'https://ioi.dk/007firstlightgame/news/2026/007-first-light-launches-globally' },
      { label: 'PC Gamer — review pós-lançamento', url: 'https://www.pcgamer.com/games/action/007-first-light-review/' },
      { label: 'GamesRadar+ — review pós-lançamento', url: 'https://www.gamesradar.com/games/action/007-first-light-review/' },
    ],
    sources: [
      { label: 'IO Interactive — lançamento mundial e premissa', url: 'https://ioi.dk/007firstlightgame/news/2026/007-first-light-launches-globally' },
      { label: 'PC Gamer — review e críticas ao ritmo/execução', url: 'https://www.pcgamer.com/games/action/007-first-light-review/' },
      { label: 'GamesRadar+ — review e leitura da fantasia Bond', url: 'https://www.gamesradar.com/games/action/007-first-light-review/' },
      { label: 'IGN — review da versão de PS5', url: 'https://www.ign.com/articles/007-first-light-review' },
      { label: 'IO Interactive — FAQ de plataformas e disponibilidade', url: 'https://ioi.dk/?panel=007firstlightgame%2Ffaq' },
    ], imageQuery: '007 First Light official game images',
    body: `Esta é uma análise editorial baseada em pesquisa e em reviews publicadas após o lançamento; o Bits, Please não jogou 007 First Light e não atribui nota. IO Interactive lançou a aventura em maio de 2026 para PC, PS5 e Xbox Series X|S. A versão de Switch 2 tem uma data posterior anunciada oficialmente para março de 2027.\n\nO consenso entre as análises consultadas é que o jogo combina infiltração, gadgets e ação cinematográfica para contar uma origem alternativa do jovem Bond. GamesRadar e IGN são mais favoráveis ao equilíbrio entre a fantasia de espionagem e o espetáculo; PC Gamer aponta execução irregular, comparações incômodas com outros jogos e ritmo menos inspirado. Essa divergência importa: as fontes avaliam a mesma proposta, mas valorizam aspectos diferentes da liberdade e da encenação.\n\nA força de IO Interactive está em construir espaços com opções de abordagem, marca que as reviews reconhecem mesmo num jogo mais linear do que Hitman. A campanha aposta em cenas de cinema e em um Bond ainda em formação, não numa adaptação de um filme específico. Em contrapartida, quem procura os mapas abertos e a liberdade sistêmica de Hitman pode sentir a estrutura mais guiada. Não comparamos desempenho entre plataformas sem testes equivalentes.\n\nVeredito editorial: 007 First Light parece uma recomendação consistente para fãs de espionagem que querem uma campanha narrativa e aceitam uma experiência mais dirigida. A leitura é menos segura para quem espera uma sandbox extensa ou quer avaliar desempenho de PC por configuração. A oferta e a edição brasileira devem ser verificadas antes da compra; aqui não citamos preço, estoque ou nota agregada.`
  }),
];
