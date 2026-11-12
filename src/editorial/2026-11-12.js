// Lote pesquisado em 12/11. Rascunhos: não há duas imagens licenciadas
// e ofertas Amazon verificadas. Não promover ao carrossel por data de lançamento.
const assessedAt = '2026-11-12T07:43:00-03:00';
const source = (label, url) => ({ label, url });
const links = {
  pikmin: 'https://www.nintendo.com/us/whatsnew/nintendo-declares-november-1-pikmin-day-in-recognition-of-all-things-pikmin/',
  pikminReview: 'https://www.nintendolife.com/reviews/nintendo-switch-2/pikmin-4-nintendo-switch-2-edition-plus-dandori-academy',
  metaphor: 'https://asia.sega.com/metaphor/en/switch2/',
  metaphorReview: 'https://www.pcgamer.com/games/rpg/metaphor-refantazio-review/',
  sonic: 'https://picoparkgame.com/en/spp/',
  sonicInterview: 'https://www.gamesradar.com/games/sonic-the-hedgehog/is-this-gonna-be-a-sonic-game-even-takashi-iizuka-wasnt-sure-about-sonic-pico-park-at-first-but-segas-learned-a-lot-from-its-indie-collaborators/',
  warhammer: 'https://news.xbox.com/en-us/2026/11/10/warhammer-survivors-gloomspite-gitz/',
  warhammerReview: 'https://www.t3.com/tech/gaming/forget-gta-6-the-most-addictive-new-game-youll-play-this-month-costs-gbp6',
  fm: 'https://www.footballmanager.com/news/football-manager-27-launches-10-november',
  fmPatch: 'https://community.sports-interactive.com/forums/topic/612924-details-on-fm27-launch-patch-notes-and-first-post-launch-update/',
  fmInterview: 'https://www.fourfourtwo.com/products-kit/football-manager-27-serves-up-a-new-tactical-tweaks-feature-to-revolutionise-in-game-instructions',
  thronefall: 'https://www.gamespress.com/tr/Conquer-The-Mountain-in-Craaghelm-The-First-Expansion-for-Thronefall-C',
  thronefallStore: 'https://store.steampowered.com/app/4822240/Thronefall_Craaghelm/',
  plus: 'https://blog.playstation.com/2026/11/10/playstation-plus-game-catalog-for-november-death-stranding-2-on-the-beach-like-a-dragon-pirate-yakuza-in-hawaii-atomfall-dragon-quest-iii-hd-2d-remake-and-more/',
  plusReport: 'https://www.pushsquare.com/news/2026/11/10-ps-plus-extra-premium-games-for-november-2026-announced',
  cloud: 'https://news.xbox.com/en-us/2026/09/03/xbox-cloud-gaming-changes/',
  cloudReport: 'https://www.purexbox.com/news/2026/09/xbox-is-telling-some-people-they-dont-need-to-worry-about-cloud-gaming-time-limits',
  escape: 'https://presents.iam8bit.com/escape-academy-2.html',
  escapeReview: 'https://insider-gaming.com/reviews/escape-academy-2-back-2-school-review/',
  skyrim: 'https://elderscrolls.bethesda.net/en-US/news/skyrim-15-anniversary-creation-bundle',
  skyrimEdition: 'https://elderscrolls.bethesda.net/en-US/skyrim',
  gamepass: 'https://news.xbox.com/en-us/2026/11/03/xbox-game-pass-november-2026-wave-1/',
};

function draft({ id, title, excerpt, section = 'NOTÍCIAS', tag, body, sources, reach, reliability, usefulness, reason, imageQuery, imageSources, product, media, blockers = [] }) {
  const relevanceBreakdown = { timeliness: 0, publicInterest: 0, reach, sourceReliability: reliability, brazilUtility: usefulness };
  return {
    id, title, excerpt, category: 'GAMES', section, tag,
    date: '12 nov 2026', status: 'draft', read: `${Math.max(3, Math.ceil(body.split(/\s+/).length / 180))} min`,
    ...media,
    body, sources, relevanceDate: '2026-11-12', relevanceUpdatedAt: assessedAt,
    relevanceBreakdown, relevanceScore: Object.values(relevanceBreakdown).reduce((sum, value) => sum + value, 0),
    relevanceReason: `${reason} Avaliação provisória: nenhum sinal publicado em 12/11 com data e conteúdo integral confirmados nesta apuração; atualidade e interesse público do dia receberam zero. Não elegível como destaque diário enquanto permanecer em rascunho.`,
    relevanceSignals: sources.slice(0, 2).map(item => ({ ...item, sameDayVerified: false })),
    draftNotes: [media ? 'Capa e segunda imagem fornecidas para edição foram inseridas e conferidas visualmente como imagens do jogo. Faltam páginas de origem e autorização de uso comercial dessas imagens; oferta Amazon pertinente e destino com a tag bitsplease-20 conferidos.' : 'Faltam capa e segunda imagem distintas com correspondência visual e autorização comercial verificadas; oferta Amazon pertinente e destino com a tag bitsplease-20 conferidos.', ...blockers, 'Foto de produto é opcional e não bloqueia publicação.'].join(' '),
    imageResearch: { query: imageQuery, checkedAt: assessedAt, sources: imageSources, status: media ? 'visual-match-confirmed-commercial-permission-pending' : 'pending-commercial-permission-and-visual-verification' },
    affiliateResearch: { product, status: 'unverified-do-not-publish', tag: 'bitsplease-20', checkedAt: assessedAt },
  };
}

export const dailyPosts20261112 = [
  draft({
    id: 'pikmin-4-switch-2-dandori-academy-lancamento',
    title: 'Pikmin 4 no Switch 2: o que muda com Dandori Academy',
    excerpt: 'A edição tem lançamento marcado para 12 de novembro. Os novos desafios chegam aos poucos, um detalhe importante antes de pagar pelo upgrade.',
    tag: 'Pikmin 4 · Nintendo Switch 2 · upgrade', reach: 16, reliability: 14, usefulness: 9,
    reason: 'Data de lançamento confirmada em comunicado anterior da Nintendo; review independente identifica limites concretos do upgrade.',
    body: `Pikmin 4 – Nintendo Switch 2 Edition + Dandori Academy tem lançamento marcado para 12 de novembro de 2026. Para quem já conhece a campanha, o principal motivo para olhar a nova edição é a Academy, voltada a planejar rotas e recolher tesouros com eficiência. É uma ampliação de Pikmin 4, e o pacote precisa ser avaliado pelo que acrescenta à aventura que você já tem.

No comunicado de 2 de novembro, a Nintendo descreve desafios com tempo limitado, medalhas e exames nos fins de semana. A demo anunciada inclui a área inicial Sun-Speckled Terrace e duas fases da Academy. Esse é um caminho útil para descobrir se a busca por rotas melhores combina com o seu jeito de jogar antes de decidir pela compra.

A ressalva está na distribuição do conteúdo. Na avaliação da versão europeia, a Nintendo Life explica que as 72 fases previstas chegam ao longo de um ano, em grupos mensais. A quantidade anunciada, portanto, não representa 72 desafios novos disponíveis no primeiro dia. Para quem pretende jogar tudo de uma vez, esse calendário muda o valor percebido do pacote.

O veículo também relata imagem em 4K no modo TV, ausência de opção a 60 fps e falta de controle por mouse. São observações do teste europeu publicado pelo site, não medições feitas pelo Bits, Please. A nova função de comandos de voz para Oatchi pode ser simpática, mas a mesma avaliação descreve reconhecimento inconsistente; idioma e ambiente precisam ser considerados antes de tratá-la como motivo central de compra.

Nossa leitura editorial é que a Academy merece mais atenção de quem gosta de repetir desafios para melhorar resultados. Quem busca apenas uma campanha inédita deve ajustar a expectativa. Para o Brasil, ainda é necessário conferir preço, pacote de upgrade e idiomas na eShop da conta utilizada: os valores citados em reviews estrangeiras não confirmam a oferta brasileira.`,
    sources: [source('Nintendo — comunicado de 2/11 e demo', links.pikmin), source('Nintendo Life — teste da edição europeia', links.pikminReview)],
    imageQuery: 'Pikmin 4 Dandori Academy Nintendo official screenshots', imageSources: [links.pikmin, 'https://www.nintendo.co.jp/networkservice_guideline/en/index.html'], product: 'Pikmin 4 para Nintendo Switch e pacote de upgrade correspondente, sem confundir jogo base com DLC',
    blockers: ['Diretrizes gerais da Nintendo não confirmam autorização para este blog monetizado. Confirmar oferta e idiomas brasileiros.'],
  }),
  draft({
    id: 'review-metaphor-refantazio-pesquisa-2026',
    title: 'Review: Metaphor transforma a formação do grupo em estratégia',
    excerpt: 'O RPG da Atlus combina vínculos, disputa política e liberdade para montar equipes. Análise baseada em pesquisa das versões anteriores, sem teste do port para Switch 2 e sem nota.',
    section: 'REVIEWS', tag: 'Metaphor: ReFantazio · análise baseada em pesquisa', reach: 18, reliability: 14, usefulness: 8,
    media: {
      image: '/images/metaphor-refantazio-party.jpg',
      imageAlt: 'Protagonista de Metaphor: ReFantazio ao centro, acompanhado por Strohl, Gallica e Hulkenberg em uma cena de animação.',
      imageSource: 'Atlus / Sega · imagem fornecida para edição',
      imageSourceUrl: '',
      imageLicense: '',
      imageLicenseUrl: '',
      inlineImage: {
        image: '/images/metaphor-refantazio-key-art.webp',
        alt: 'Arte vertical de Metaphor: ReFantazio com o título do jogo, o protagonista e seus aliados diante de uma multidão e de um veículo fantástico.',
        credit: 'Atlus / Sega · imagem fornecida para edição',
        sourceUrl: '',
        license: '',
        licenseUrl: '',
      },
    },
    reason: 'Port para Switch 2 datado de 12/11 no site oficial; análise de PC de 2024 sustenta a discussão de design, sem validar o desempenho do port.',
    body: `Esta review é uma análise editorial baseada em pesquisa, sem teste próprio e sem nota. O lançamento de Metaphor: ReFantazio no Switch 2, datado de 12 de novembro de 2026 pela Atlus, oferece o gancho para revisitar o RPG. A avaliação de design considera o material oficial e a review de PC publicada pela PC Gamer em 7 de outubro de 2024. Não é uma avaliação técnica da nova conversão.

A aventura se passa em Euchronia, um reino em crise no qual a disputa pelo trono atravessa desigualdades entre seus povos. O objetivo narrativo envolve o destino de um príncipe e uma viagem com aliados. O interessante dessa proposta é ligar a construção do grupo ao projeto de transformação do mundo: recrutar pessoas e compreender seus conflitos tem uma função que vai além de completar uma lista de personagens.

Os Arquétipos dão forma mecânica a essa ideia. A Atlus descreve poderes despertados pelos personagens e novos caminhos de evolução ligados aos seguidores. No teste de PC, Lewis Parker destaca a liberdade de distribuir classes entre integrantes e combinar habilidades, a ponto de mudar toda a equipe para responder a um encontro específico. A dificuldade, nessa leitura, exige preparação e adaptação; acumular níveis não resume o sistema.

Há também dois ritmos de confronto. Inimigos mais fracos podem ser enfrentados diretamente durante a exploração, enquanto as batalhas em turnos concentram decisões mais elaboradas. A combinação dá ao projeto uma forma de poupar etapas repetitivas sem abandonar o combate tático. Essa é uma interpretação do desenho descrito nas fontes, não uma impressão de controle obtida por nós.

O compromisso de tempo merece atenção. A PC Gamer elogia a narrativa e as possibilidades de grupo, mas descreve uma introdução longa e problemas de desempenho em uma área urbana do PC usado no teste. Esse relato histórico não permite concluir como a versão atual roda no Switch 2, no PS5 ou em outro computador. Também não transforma o tempo de conclusão daquele jornalista numa duração garantida para todo jogador.

Nosso veredito editorial favorece quem gosta de experimentar equipes e aceita dedicar espaço a conversas e preparação. Para quem quer ação imediata, o ritmo inicial pode pesar. O port abre uma nova opção de plataforma; antes de escolhê-lo, vale procurar testes específicos de resolução, fluidez, bateria e legibilidade. A qualidade do RPG original e a qualidade da conversão são perguntas que exigem evidências próprias.`,
    sources: [source('Atlus — lançamento e sistemas do port', links.metaphor), source('PC Gamer — teste de PC de 7/10/2024', links.metaphorReview)],
    imageQuery: 'Metaphor ReFantazio official screenshots Atlus', imageSources: [links.metaphor, links.metaphorReview], product: 'Metaphor: ReFantazio na plataforma escolhida; oferta de PS5 não deve ser apresentada como edição de Switch 2',
    blockers: ['Falta teste independente específico do port para qualquer conclusão técnica sobre Switch 2. Busca de oferta de PS5 retornou intermediários, sem destino Amazon diretamente confirmado.'],
  }),
  draft({
    id: 'sonic-pico-park-cooperativo-plataformas', title: 'Sonic Pico Park troca a corrida solitária por trabalho em equipe',
    excerpt: 'A colaboração tem data de 12 de novembro e partidas para duas a oito pessoas. A proposta é um puzzle cooperativo, com plataformas que precisam ser conferidas antes de reunir o grupo.',
    tag: 'Sonic Pico Park · cooperação', reach: 18, reliability: 13, usefulness: 7,
    reason: 'Calendário oficial e entrevista com os responsáveis confirmam o projeto; nenhuma publicação de hoje foi validada integralmente.',
    body: `Sonic Pico Park junta os personagens da Sega à estrutura de puzzles cooperativos de PICO PARK. O site oficial informa lançamento em 12 de novembro de 2026 e suporte a duas a oito pessoas. A proposta pede que o grupo resolva obstáculos junto, em vez de tratar a velocidade individual como objetivo principal.

A página lista Nintendo Switch, Switch 2, PlayStation 5, Xbox Series X|S, Xbox One e Windows, incluindo Steam. Essa abrangência facilita encontrar uma versão para cada jogador, mas não confirma, por si só, compatibilidade entre plataformas. Antes de organizar uma sessão, confira na loja e na documentação da edição desejada quais combinações de jogadores são aceitas.

Em entrevista à GamesRadar durante o Summer Game Fest, os responsáveis explicaram que a colaboração nasceu da intenção de levar PICO PARK a um público maior, aproveitando o alcance de Sonic. Essa é a justificativa apresentada pelos criadores; não demonstra que o novo jogo terá determinado volume de vendas nem que todos os fãs do personagem gostarão da mudança de formato.

A escolha merece atenção de quem já tem companhia para jogar. Dividir tarefas, esperar outros participantes e coordenar movimentos são prioridades diferentes de perseguir o melhor tempo em uma fase tradicional. Nossa leitura é que o interesse está nessa mudança de dinâmica, sem concluir sobre variedade ou dificuldade antes de um teste.

Para leitores brasileiros, a decisão prática começa pelo tamanho do grupo, pela versão de cada pessoa e pelos requisitos de jogo online. Preço em reais, idiomas e funcionamento entre plataformas ainda precisam de conferência na região. Não há aqui teste próprio, promessa de cross-play ou indicação de que um segundo controle seja obrigatório em toda modalidade.`,
    sources: [source('PICO PARK — plataformas, participantes e data', links.sonic), source('GamesRadar — entrevista com os criadores', links.sonicInterview)],
    imageQuery: 'Sonic Pico Park official screenshots', imageSources: [links.sonic, 'https://picoparkgame.com/en/guidelines/'], product: 'Controle adicional compatível para jogar localmente, somente após confirmar a modalidade e a plataforma',
    blockers: ['Diretrizes PICO PARK restringem blogs a uso não comercial e alertam para direitos de terceiros; não cobrem automaticamente Sonic em portal monetizado.'],
  }),
  draft({
    id: 'warhammer-survivors-primeiros-passos-gitz', title: 'Warhammer Survivors: por que conhecer os inimigos importa',
    excerpt: 'O lançamento une os universos de Warhammer ao formato de sobrevivência em hordas. As dicas do estúdio mostram ameaças com movimentos e prioridades diferentes.',
    section: 'GAMES', tag: 'Warhammer Survivors · guia de entrada', reach: 16, reliability: 13, usefulness: 7,
    reason: 'Estúdio confirmou lançamento em 10/11 e publicou dicas; relato independente descreve experiência, mas não é sinal novo de hoje.',
    body: `Warhammer Survivors já foi apresentado como disponível no Xbox Series X|S e no Game Pass em um texto de 10 de novembro assinado por uma designer da Auroch Digital no Xbox Wire. A parceria com a poncle leva o formato de sobrevivência em hordas aos universos de Warhammer 40.000 e Age of Sigmar. Os dois cenários fazem parte da proposta, e isso ajuda a explicar a variedade de criaturas mostradas na divulgação.

O guia oficial sobre os Gloomspite Gitz dá uma pista útil para começar: observar como cada inimigo se move importa tanto quanto reconhecer seu tamanho. As tropas básicas tentam ocupar o campo em grande número, enquanto os cavaleiros de Squigs apresentam ameaças de deslocamento e aproximação diferentes. São orientações dos desenvolvedores, não estratégias que testamos.

Entre os exemplos apresentados estão inimigos que recebem apoio de aliados próximos e criaturas resistentes capazes de regenerar vida. Em termos práticos, isso sugere acompanhar o conjunto da horda, procurando identificar o que a torna mais perigosa. A orientação editorial é usar essas descrições como hipótese inicial e ajustar a prioridade conforme o personagem e as armas disponíveis.

A T3 publicou um relato próprio de contato com o jogo e destacou o apelo das sessões de sobrevivência. Esse entusiasmo pertence ao autor daquele texto. Ele oferece uma referência independente sobre a proposta, mas não substitui uma análise de equilíbrio, progressão prolongada ou desempenho em cada plataforma.

Antes de instalar, confira a ficha da versão e a elegibilidade do plano de assinatura utilizado. Ter acesso pelo serviço é diferente de adquirir uma licença permanente. Para um eventual acessório recomendado, o encaixe honesto seria um controle compatível com a plataforma em que você pretende jogar; não há motivo para comprar um periférico apenas por causa do lançamento.`,
    sources: [source('Auroch Digital no Xbox Wire — lançamento e inimigos', links.warhammer), source('T3 — relato de experiência do autor', links.warhammerReview)],
    imageQuery: 'Warhammer Survivors official screenshots', imageSources: [links.warhammer, 'https://store.steampowered.com/app/3669620/Warhammer_Survivors/'], product: 'Controle Xbox compatível para a edição de console ou PC',
    blockers: ['Capturas encontradas em busca incluem versão pré-alpha; não apresentá-las como estado atual. Microsoft não concede direitos sobre imagens de terceiros.'],
  }),
  draft({
    id: 'football-manager-27-patch-lancamento-proximas-correcoes', title: 'Football Manager 27: o que o patch de lançamento corrige e o que ficou para depois',
    excerpt: 'A Sports Interactive separa ajustes já anunciados de mudanças ainda em testes. A distinção evita tratar promessa de atualização como problema resolvido.',
    tag: 'Football Manager 27 · atualizações', reach: 16, reliability: 14, usefulness: 9,
    reason: 'Notas oficiais e entrevista técnica ajudam a orientar a decisão; não foi confirmada atualização publicada no dia 12.',
    body: `Football Manager 27 chegou ao calendário de novembro com uma lista de correções de lançamento e um segundo conjunto de melhorias ainda em desenvolvimento. A Sports Interactive marcou a estreia geral para 10 de novembro. Para quem decide quando começar uma carreira, vale separar o que consta no patch inicial do que continua como previsão.

Nas notas oficiais, a equipe lista correções de estabilidade, traduções, interface e situações específicas do motor de partidas. Entre os exemplos estão um bloqueio no relatório de adversário em resolução de 1280 × 720 e a câmera de replay presa no ângulo de escanteio. A precisão dessas descrições é útil: um ajuste localizado não equivale a declarar toda a interface ou toda a simulação corrigida.

A primeira atualização posterior ao lançamento estava prevista para mais adiante em novembro, com testes em andamento. A equipe mencionou comportamento defensivo, padrões ofensivos, opções de escala em monitores de 1080p e outros ajustes de interface. Como não foi apresentada ali uma data final nem uma confirmação de entrega, esses itens devem continuar sendo tratados como planejamento.

A entrevista da FourFourTwo com um desenvolvedor detalha a intenção dos novos ajustes táticos. Ela ajuda a entender o sistema, mas o objetivo de design declarado pelo estúdio e o resultado percebido em uma carreira longa são evidências diferentes. Ainda falta um acompanhamento independente adequado para concluir sobre os efeitos do patch no equilíbrio.

Antes de decidir atualizar ou iniciar um save, confira a versão instalada, faça uma cópia de segurança da carreira e leia a orientação específica da Sports Interactive. O texto não garante compatibilidade irrestrita de saves nem que todas as mudanças sejam aplicadas a partidas antigas. E a janela de teste gratuito anterior ao lançamento não deve ser anunciada como oferta ativa em 12 de novembro.`,
    sources: [source('Sports Interactive — notas e planos de atualização', links.fmPatch), source('Football Manager — data de lançamento', links.fm), source('FourFourTwo — entrevista sobre tática', links.fmInterview)],
    imageQuery: 'Football Manager 27 official screenshots', imageSources: [links.fm, links.fmPatch], product: 'Mouse compatível com o computador para navegação na interface; evitar atribuir recursos exclusivos de FM27 ao acessório',
    blockers: ['Falta acompanhar teste independente do patch e confirmar versão atual. Imagem encontrada na busca tem caminho datado de 2025; conferir versão antes de usar.'],
  }),
  draft({
    id: 'thronefall-craaghelm-expansao-jogo-base', title: 'Thronefall e Craaghelm: a estreia nos consoles não torna o DLC parte da assinatura',
    excerpt: 'A expansão acrescenta mapas e unidades, mas exige o jogo base. Confira separadamente o acesso a Thronefall e a compra do conteúdo adicional.',
    tag: 'Thronefall · Craaghelm · DLC', reach: 12, reliability: 12, usefulness: 9,
    reason: 'Comunicado e ficha do DLC confirmam escopo e dependência; cobertura de hoje encontrada na busca não pôde ser lida integralmente.',
    body: `Thronefall ganhou uma nova etapa com Craaghelm e a chegada ao PlayStation 5 e ao Xbox Series X|S. O comunicado da Mythwright marcou os lançamentos para 11 de novembro de 2026. Há duas decisões de acesso envolvidas: poder jogar Thronefall e ter direito à expansão. Uma não deve ser presumida a partir da outra.

Craaghelm foi anunciado como DLC pago que exige o jogo base. O pacote leva a defesa do reino para uma campanha de inspiração anã, com oito mapas, unidades, armas e modificadores adicionais. A página da expansão na Steam confirma que se trata de conteúdo adicional, o que torna importante ler a ficha da oferta antes de pagar.

O atrativo editorial está em mexer nas condições da defesa. O anúncio descreve terrenos com passagens bloqueadas, lava e plataformas móveis, além de novas forças para comandar. Isso pode exigir rever o investimento na economia e na proteção do reino. É uma interpretação da proposta; ainda não temos teste próprio para dizer se o conjunto mantém variedade ou equilíbrio até o fim.

A listagem do Xbox Game Pass inclui Thronefall. Ela não deve ser lida como confirmação automática de que Craaghelm está incluído no mesmo plano. Confira o nome completo do item e o que a página da assinatura efetivamente oferece. A mesma atenção vale para pacotes que reúnam jogo e expansão: compare o conteúdo antes de avaliar o preço.

O anúncio também cita Switch, mas calendário global de divulgação e disponibilidade em cada loja podem divergir. Para o Brasil, é necessário validar região, plataforma e itens do pacote. A pauta não apresenta desconto atual nem recomenda comprar o jogo duas vezes para obter o DLC; o objetivo é ajudar a distinguir acesso, propriedade e conteúdo adicional.`,
    sources: [source('Mythwright via Games Press — anúncio da expansão', links.thronefall), source('Steam — ficha de Craaghelm', links.thronefallStore), source('Xbox Wire — inclusão do jogo base', links.gamepass)],
    imageQuery: 'Thronefall Craaghelm screenshots', imageSources: [links.thronefall, links.thronefallStore], product: 'Controle compatível com a versão de console para quem ainda não possui um',
    blockers: ['Falta confirmação independente integral de disponibilidade regional e autorização do press kit. Não usar imagem de Thronefall base para representar um mapa específico de Craaghelm.'],
  }),
  draft({
    id: 'ps-plus-novembro-2026-calendario-regional', title: 'PS Plus de novembro: por que conferir a região antes de anotar as datas',
    excerpt: 'Death Stranding 2 lidera o anúncio internacional, mas parte do catálogo tem entrada escalonada. O calendário estrangeiro não confirma sozinho as datas brasileiras.',
    tag: 'PlayStation Plus · catálogo · região', reach: 20, reliability: 14, usefulness: 10,
    reason: 'Calendário oficial de 10/11 e checagem da Push Square identificam exceções regionais; não há novo anúncio de hoje confirmado.',
    body: `A Sony anunciou o catálogo de novembro do PlayStation Plus com Death Stranding 2: On the Beach entre os principais títulos. O post internacional de 10 de novembro aponta 17 de novembro como data geral, mas traz exceções. Anotar uma única data para toda a lista pode fazer o leitor procurar um jogo antes de ele aparecer na sua região.

No anúncio, Death Stranding 2 está identificado para PS5. Like a Dragon: Pirate Yakuza in Hawaii aparece para PS5 e PS4, com observação de entrada em 24 de novembro nos Estados Unidos, Reino Unido e Japão. Há ainda uma diferença de um dia para Hell Let Loose entre os mercados citados. Esses recortes fazem parte da informação e precisam acompanhar a data.

A Push Square também organiza a lista por etapas e explicita os países aos quais o cronograma se refere. A cobertura reforça que a distribuição não é uniforme, mas não serve como confirmação adicional do calendário brasileiro. Antes de apresentar todas essas datas como válidas aqui, é necessário conferir a publicação local ou a ficha do jogo na conta brasileira.

Outro cuidado é o plano. Catálogo de jogos e seleção mensal são benefícios diferentes; a presença em uma notícia sobre Extra ou Premium não significa resgate para todos os assinantes. O nome Premium no anúncio estrangeiro também não deve ser transplantado para uma oferta brasileira sem verificar quais benefícios estão disponíveis no país.

Para decidir se vale assinar ou comprar uma mídia física, comece pelo jogo que pretende jogar, pelo console e pelo período de acesso desejado. A assinatura dá acesso sob suas condições e enquanto o título estiver disponível. Uma recomendação de compra precisa explicar essa diferença, sem apresentar o catálogo como propriedade permanente nem sugerir que o preço de um controle faça parte da mensalidade.`,
    sources: [source('PlayStation Blog — anúncio internacional e exceções', links.plus), source('Push Square — calendário por mercados', links.plusReport)],
    imageQuery: 'PlayStation Plus November 2026 Death Stranding 2 official', imageSources: [links.plus], product: 'Death Stranding 2: On the Beach em mídia física para PS5, como alternativa à assinatura e apenas para console com leitor',
    blockers: ['Confirmar calendário brasileiro antes da publicação. Busca visual trouxe banners de teste de 2025: rejeitados por não corresponderem ao catálogo de novembro de 2026.'],
  }),
  draft({
    id: 'xbox-cloud-gaming-limites-brasil-assinantes', title: 'Xbox Cloud Gaming: os limites anunciados exigem atenção à conta e à região',
    excerpt: 'O anúncio prevê franquias de horas, mas há relatos de condições preservadas para assinantes existentes no Brasil. Confira a regra da sua conta antes de mudar o plano.',
    tag: 'Xbox Cloud Gaming · Brasil · assinatura', reach: 18, reliability: 12, usefulness: 10,
    reason: 'Mudança prevista para novembro tem utilidade local; exceções foram reportadas, mas falta confirmação oficial atualizada específica do Brasil.',
    body: `O anúncio de mudanças no Xbox Cloud Gaming prevê limites mensais de horas a partir de novembro. No texto de 3 de setembro, a Microsoft listou 15 horas para Ultimate, dez para Premium e cinco para Essential, com possibilidade de comprar tempo adicional. A própria empresa ressalvou que disponibilidade e condições podem variar por mercado.

Essa ressalva é decisiva para leitores brasileiros. Em 7 de setembro, a Pure Xbox relatou mensagens recebidas por assinantes de países que incluem o Brasil indicando manutenção de condições enquanto a assinatura recorrente continuasse ativa. Trata-se de cobertura sobre comunicações a clientes; não conseguimos confirmar uma regra oficial brasileira atualizada que permita prometer a mesma exceção para qualquer conta.

Por isso, não é correto dizer que todo assinante brasileiro passa automaticamente a ter 15 horas, nem assegurar que todos estão isentos. Data de adesão, plano e condições comunicadas à conta precisam ser conferidos. A notícia também não deve transformar uma possibilidade de compra de horas em um preço em reais ainda não apurado.

A orientação prática é abrir os detalhes da assinatura e o suporte oficial antes de cancelar, trocar de plano ou contratar tempo adicional. Verifique o que foi informado sobre renovação e limites, sem compartilhar credenciais ou mensagens pessoais em comentários públicos. Se a tela e o anúncio geral divergirem, a lacuna precisa ser esclarecida pelo suporte, não preenchida por uma suposição editorial.

O tema afeta o custo de usar a nuvem, mas comprar um controle novo não altera a franquia de horas. Uma eventual recomendação de periférico só faz sentido por compatibilidade com o aparelho utilizado. Não há teste de latência nesta matéria, e nenhum número de qualidade da conexão foi medido pelo Bits, Please.`,
    sources: [source('Xbox Wire — anúncio e ressalva de mercado', links.cloud), source('Pure Xbox — relatos sobre assinantes existentes', links.cloudReport)],
    imageQuery: 'Xbox cloud gaming hours November 2026 official', imageSources: [links.cloud, 'https://www.microsoft.com/en-us/legal/intellectualproperty/copyright/permissions'], product: 'Controle Xbox compatível com o dispositivo de streaming; não oferece horas adicionais',
    blockers: ['Confirmação oficial atualizada da regra brasileira e preços locais pendente. Não usar capturas de conta privada nem tratar relatos como garantia contratual.'],
  }),
  draft({
    id: 'escape-academy-2-coop-sem-cronometro', title: 'Escape Academy 2: cooperação e modo sem cronômetro abrem caminhos para os puzzles',
    excerpt: 'O campus vira parte da exploração, e o cronômetro é opcional. A proposta favorece jogar no próprio ritmo, embora a análise de PS5 aponte problemas fora das salas.',
    section: 'GAMES', tag: 'Escape Academy 2 · puzzle · co-op', reach: 11, reliability: 14, usefulness: 8,
    reason: 'Lançamento de 5/11, ficha da publicadora e teste de PS5 permitem discutir recursos e ressalvas; sem sinal novo do dia.',
    body: `Escape Academy 2: Back 2 School amplia a escola de enigmas com um campus explorável e uma opção que muda a relação com os desafios: o cronômetro pode ser desligado. A página da iam8bit Presents confirma lançamento em 5 de novembro de 2026 e modos de cooperação online e local em tela dividida.

O modo sem limite de tempo atende a uma necessidade simples. Nem todo mundo quer resolver uma pista sob pressão, especialmente quando joga com alguém que ainda está aprendendo a observar o ambiente. A opção permite concentrar a conversa no raciocínio. Isso não significa que todos os puzzles tenham a mesma dificuldade ou que o jogo ofereça uma solução automática.

A publicadora descreve o campus como parte dos enigmas, com passagens e segredos entre as salas. Na análise de PS5 publicada pela Insider Gaming, Andrew Highton elogia a variedade dos puzzles, mas critica aspectos da exploração e relata limitações técnicas. O contraste é útil: aumentar o espaço entre desafios pode mudar o ritmo, sem necessariamente melhorar o que já funcionava nas salas fechadas.

Essas observações pertencem ao teste de PS5 feito pelo veículo. Não medimos desempenho em PC, Xbox ou em versões atualizadas, e não podemos garantir que os mesmos problemas persistam ou tenham sido corrigidos. Antes de comprar por causa de uma review, confira a plataforma, a data do teste e a existência de patches posteriores.

Para jogar em dupla, combine primeiro a modalidade: dividir a mesma tela é diferente de usar duas máquinas pela internet. Confirme os requisitos da edição escolhida e os acessórios já disponíveis. Um controle adicional pode ser útil no uso local, mas só deve ser recomendado após checar a configuração aceita. A proposta merece atenção de quem gosta de discutir pistas; a decisão sobre compra deve considerar também as ressalvas técnicas.`,
    sources: [source('iam8bit Presents — modos e lançamento', links.escape), source('Insider Gaming — teste de PS5', links.escapeReview)],
    imageQuery: 'Escape Academy 2 Back 2 School screenshots', imageSources: [links.escape, 'https://app.box.com/s/drrmr1z6fwg81nlfdzko66b20ugovisd'], product: 'Segundo controle compatível para cooperação local na plataforma selecionada',
    blockers: ['Press kit oficial localizado, mas o conteúdo e as condições de uso não ficaram acessíveis na leitura; autorização ainda não confirmada.'],
  }),
  draft({
    id: 'skyrim-15-anos-creation-bundle-edicoes', title: 'Skyrim aos 15 anos: o novo bundle de Creations não é a Anniversary Edition',
    excerpt: 'A celebração reúne cinco conteúdos de criadores. O nome parecido exige cuidado para entender o que a compra da edição anterior realmente inclui.',
    section: 'CULTURA POP', tag: 'Skyrim · 15 anos · Creations', reach: 19, reliability: 11, usefulness: 8,
    reason: 'Bethesda publicou a celebração em 11/11; não atribuímos a ela data de hoje nem audiência ou vendas não apuradas.',
    body: `A Bethesda marcou os 15 anos de Skyrim com um Anniversary Creation Bundle, anunciado em 11 de novembro de 2026. O pacote reúne cinco Creations e foi apresentado para Xbox, PC e PlayStation. O nome lembra uma edição já conhecida do jogo, mas a semelhança não autoriza concluir que se trata da mesma compra.

Entre os conteúdos anunciados estão Legacy of Orsinium, Kaitryn Fair-Shadows, Legendary Dungeons: Dwarven Delves, Arquebus e Shadetree Lodge. A seleção mistura missões, companhia para a jornada, masmorras, armas e uma casa. A descrição vem da publicadora; não testamos compatibilidade, integração com outros mods ou qualidade dessas adições.

O comunicado informa que o bundle deixa o menu de Creations em 12 de dezembro. Isso descreve a janela anunciada para o pacote, sem confirmar aqui preço brasileiro ou destino individual de cada item depois dessa data. Também não significa que o jogo base deixará de funcionar quando a oferta sair do menu.

A Anniversary Edition é outro produto. Na página oficial, ela aparece como uma edição que reúne Skyrim, expansões e conteúdo do Creation Club. Comprar essa edição não deve ser apresentado como garantia de acesso a toda criação publicada no futuro. Antes de pagar por qualquer pacote, compare a lista efetiva de itens com o que já existe na sua biblioteca.

Para quem volta a um save antigo, a precaução prática é conferir os requisitos de cada conteúdo e manter uma cópia de segurança antes de alterar a instalação. Não há nesta matéria uma lista testada de combinações seguras. A celebração oferece um motivo para revisitar o mundo; a escolha de conteúdo precisa continuar baseada em compatibilidade, interesse e descrição da oferta, sem confundir nomes parecidos com direitos de acesso.`,
    sources: [source('Bethesda — bundle de 15 anos, 11/11/2026', links.skyrim), source('Bethesda — conteúdo da Anniversary Edition', links.skyrimEdition)],
    imageQuery: 'Skyrim Anniversary Creation Bundle 2026 official screenshots', imageSources: [links.skyrim, links.skyrimEdition], product: 'Skyrim Anniversary Edition na plataforma pertinente; não inclui automaticamente o novo bundle de Creations',
    blockers: ['Não encontrada confirmação independente especializada integral do pacote; apuração atual é oficial. Busca visual retornou embalagens antigas que não representam as cinco Creations de 2026.'],
  }),
];
