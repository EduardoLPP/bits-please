const checkedAt = '2026-11-18T08:18:07-03:00';
const terms = 'https://openai.com/policies/terms-of-use/';
const credit = 'Ilustração conceitual original gerada por IA com OpenAI ImageGen; não é captura de jogo nem arte oficial.';
const license = 'Output gerado conforme os Termos de Uso da OpenAI; titularidade sujeita à lei aplicável.';
const source = (label, url) => ({ label, url });
const amazonSearch = query => `https://www.amazon.com.br/s?k=${encodeURIComponent(query)}&tag=bitsplease-20`;
function draft({ visual, alts, scores, product, query, offer, ...post }) {
  const image = `/images/editorial-conceitual/2026-11-18/${visual}-cover.jpg`;
  const bodyImage = `/images/editorial-conceitual/2026-11-18/${visual}-body.jpg`;
  const affiliate = offer ? amazonSearch(offer.query) : undefined;
  const sources = offer
    ? [...post.sources, source('Amazon Brasil — produto recomendado', affiliate), ...(offer.source ? [offer.source] : [])]
    : post.sources;
  return {
    ...post, category: 'GAMES', section: post.section || 'NOTÍCIAS', status: 'draft',
    ...(offer ? { affiliate, productName: offer.productName, productPitch: offer.productPitch, affiliateLinkType: 'search' } : {}),
    sources,
    date: '18 nov 2026', read: `${Math.max(2, Math.ceil(post.body.split(/\s+/).length / 180))} min`,
    relevanceDate: '2026-11-18', relevanceUpdatedAt: checkedAt,
    relevanceScore: scores.reduce((a, b) => a + b, 0),
    relevanceBreakdown: Object.fromEntries(['timeliness', 'publicInterest', 'reach', 'sourceReliability', 'brazilUtility'].map((key, i) => [key, scores[i]])),
    relevanceReason: post.relevanceReason + ' Nenhum sinal publicado em 18/11 no fuso America/Sao_Paulo confirmado; componentes de atualidade e interesse do dia zerados.',
    relevanceSignals: post.sources.map(item => ({ ...item, sameDayVerified: false })),
    image, imageAlt: alts[0], imageSource: credit, imageSourceUrl: terms, imageLicense: license, imageLicenseUrl: terms,
    inlineImage: { image: bodyImage, alt: alts[1], credit, sourceUrl: terms, license, licenseUrl: terms },
    imageResearch: { query: `${post.tag} official press screenshots commercial use`, checkedAt, status: 'generated-contextual-ai-reviewed', generator: 'OpenAI ImageGen', sources: post.sources, assets: [image, bodyImage], notes: 'Busca individual sem par real com permissão comercial confirmado. Duas composições originais contextualizadas; prompts e revisão no relatório de 18/11.' },
    affiliateResearch: {
      product: offer?.productName || product,
      query: offer?.query || query,
      tag: 'bitsplease-20', checkedAt,
      status: offer ? 'tagged-amazon-search' : 'destination-unverified',
      notes: offer
        ? 'Busca Amazon Brasil com tag do portal; confirme plataforma, edição, preço e disponibilidade na página da loja. Nenhuma foto de produto foi adicionada.'
        : 'Busca realizada; destino exato Amazon Brasil não confirmado. Sem CTA nem preço presumido. Foto de produto é opcional.',
    },
    draftNotes: 'Duas artes conceituais de IA identificadas. ' + (offer
      ? 'Busca Amazon pertinente adicionada com tag do portal; conferir edição e disponibilidade.'
      : 'Falta oferta Amazon pertinente com destino verificado.') + ' ' + (post.draftNotes || ''),
  };
}

export const dailyPosts20261118 = [
  draft({
    id: 'review-enshrouded-10-construcao-pesquisa', visual: 'enshrouded', section: 'REVIEWS', tag: 'Enshrouded · 1.0 · pesquisa',
    title: 'Review: Enshrouded 1.0 faz da construção uma forma de explorar',
    excerpt: 'Terreno modificável e circuitos para criações próprias dão personalidade ao RPG. Análise editorial baseada em pesquisa, sem teste próprio ou nota.',
    scores: [0, 0, 15, 14, 8], relevanceReason: 'Versão 1.0 recente e review especializada de novembro oferecem vitrine editorial verificável, sem números de popularidade presumidos.',
    alts: ['Construtor abre uma passagem em montanha junto de uma casa e névoa azul, em conceito de IA sobre Enshrouded.', 'Sala medieval com alavanca, placa de pressão e porta conectadas por luz, em conceito de IA sobre Sparkworks.'],
    product: 'Edição PC de Enshrouded ou controle compatível após confirmar suporte e oferta', query: 'site:amazon.com.br Enshrouded PC controle Xbox',
    body: `Esta análise de Enshrouded 1.0 é baseada em pesquisa; o Bits, Please não testou o jogo e não atribui nota. A Keen Games anunciou a versão completa em 15 de outubro de 2026. A review de PC Gamer publicada em 2 de novembro oferece um ponto de observação posterior ao lançamento, mais útil aqui do que impressões antigas do acesso antecipado.

O argumento mais forte é a relação entre construir e viajar. A crítica especializada descreve um mundo de voxels que permite modificar o terreno: abrir caminho também pode ser uma intervenção no cenário. Isso aproxima a construção da exploração, em vez de tratá-la apenas como uma pausa para decorar a base. É a liberdade mais interessante da proposta para quem gosta de resolver obstáculos criando algo.

A versão completa também traz Sparkworks. Segundo a explicação da Keen, alavancas e placas de pressão podem acionar saídas, como portas e armadilhas. Nossa leitura editorial é que esse sistema dá outra finalidade às construções: elas podem organizar pequenas situações interativas, e não apenas oferecer abrigo. A qualidade de cada criação dependerá do tempo e da disposição de quem constrói.

Esse perfil ajuda a decidir se o jogo combina com você. A descrição de PC Gamer aproxima Enshrouded tanto do RPG de ação quanto da sobrevivência com construção, com menos ênfase na punição constante. Quem quer descobrir lugares e trabalhar numa base tem razões para olhar com atenção; quem procura somente uma campanha guiada deve considerar quanto espaço pretende dar à criação livre.

Para quem já comprou o acesso antecipado no PC, a FAQ oficial confirma que não é necessário comprar novamente e que saves antigos são aceitos. A avaliação aqui se limita à proposta e à pesquisa sobre PC: não mede estabilidade, desempenho de consoles ou comportamento numa máquina brasileira. O veredito editorial é favorável à combinação de exploração e ferramentas criativas, sem transformar o teste de outro veículo em experiência nossa.`,
    sources: [source('Keen — lançamento 1.0', 'https://enshrouded.com/en-US/news/enshrouded-10-is-live-check-out-our-highlights-video'), source('Keen — Sparkworks', 'https://enshrouded.com/en-US/news/turn-your-build-into-an-adventure-with-sparkworks'), source('Keen — FAQ de saves e compra', 'https://enshrouded.com/en-US/news/enshrouded-launch-faq-early-access-reward-world'), source('PC Gamer — review PC de 2/11', 'https://www.pcgamer.com/games/survival-crafting/enshrouded-1-0-review/')],
  }),
  draft({
    id: 'game-pass-novembro-wave-2-planos-saidas', visual: 'gamepass', tag: 'Game Pass · novembro · segunda leva',
    title: 'Game Pass detalha segunda leva de novembro; Hela e Outlast têm planos diferentes',
    excerpt: 'Calendário vai até dezembro e distingue novidades de entradas no Premium. Veja por que a lista exige conferir o plano.',
    scores: [0, 0, 19, 14, 10], relevanceReason: 'Calendário oficial de 17/11 tem utilidade direta para assinantes e cobertura especializada localizada.',
    alts: ['Rato aventureiro em floresta sueca junto de calendário, em ilustração de IA inspirada na proposta de Hela.', 'Biblioteca com três portões e chaves diferentes, caixas e caminhão representam planos e saída de jogos, em arte de IA.'],
    product: 'Assinatura Game Pass com plano, duração e região Brasil confirmados', query: 'site:amazon.com.br Xbox Game Pass Ultimate código Brasil',
    offer: {
      query: 'console Xbox Series X Amazon Brasil', productName: 'Console Xbox Series X',
      productPitch: 'Um Xbox Series X permite acessar jogos do catálogo Game Pass anunciados para console, com uma assinatura elegível. Catálogo, plano e disponibilidade variam por região; confira as condições do jogo e da assinatura antes de comprar.',
    },
    body: `A segunda leva de novembro do Game Pass, anunciada no Xbox Wire em 17 de novembro, inclui jogos até 1º de dezembro. A informação mais útil não é a quantidade de nomes: é a distinção entre os planos e entre uma estreia e a ampliação de acesso a um jogo já disponível.

High on Life 2, Call of the Elder Gods e Roadside Research têm entrada no Premium marcada para 18 de novembro, somando-se ao acesso de Ultimate e PC Game Pass. Roadside Research continua identificado como Game Preview. A inclusão na assinatura não encerra esse estágio de desenvolvimento nem funciona como garantia de uma versão final.

Para dezembro, a Microsoft lista The Outlast Trials no dia 1º para Ultimate, Premium e PC Game Pass. Hela: of Mice & Magic aparece na mesma data para Ultimate e PC Game Pass, como lançamento no serviço. O Premium não está indicado para Hela nesse anúncio. Antes de assinar por causa de um título, confira a linha específica dele, a plataforma e a região da conta.

O movimento também tem saídas. Aliens: Dark Descent, Banishers: Ghosts of New Eden e Moving Out 2 estão entre os títulos previstos para deixar o catálogo em 30 de novembro. Nosso recorte prioriza esses exemplos; a lista integral está na fonte oficial. Disponibilidade temporária significa que terminar uma campanha pode pedir planejamento, sobretudo se o leitor não pretende comprar o jogo depois.

O comunicado é um calendário, não uma verificação do catálogo brasileiro em tempo real. Não confirmamos horário local de liberação nem preços de assinatura nesta matéria. A recomendação prática é abrir a página do jogo na própria conta e conferir plano e dispositivo antes de pagar: uma mudança de categoria pode tornar desnecessária uma assinatura mais cara.`,
    sources: [source('Xbox Wire — calendário e planos', 'https://news.xbox.com/en-us/2026/11/17/xbox-game-pass-november-2026-wave-2/'), source('XboxAchievements — cobertura localizada, leitura bloqueada por 403', 'https://www.xboxachievements.com/news/xbox-game-pass-november-2026-wave-two-hela-of-mice-and-magic/')],
    draftNotes: 'Confirmar disponibilidade brasileira; cobertura independente integral não acessível nesta checagem.',
  }),
  draft({
    id: 'mega-man-dual-override-cleanser-man-concurso', visual: 'megaman', tag: 'Mega Man · Dual Override · Cleanser Man',
    title: 'Mega Man: Dual Override apresenta Cleanser Man, chefe criado por fã',
    excerpt: 'Concurso retoma uma tradição de Mega Man 2. O novo Robot Master transforma limpeza em ameaça ambiental.',
    scores: [0, 0, 17, 14, 7], relevanceReason: 'Revelação oficial em evento, confirmada por Gematsu, amplia contexto de franquia conhecida; anúncio é de 15/11.',
    alts: ['Robô original com escova desgasta uma estátua enquanto limpa a praça, em conceito de IA sobre a pauta de Cleanser Man.', 'Mesa de desenhos de robôs e maquete de reciclagem representa concurso de fãs, em arte de IA.'],
    product: 'Mega Man 11 como antecedente da série, com plataforma e edição verificadas', query: 'site:amazon.com.br Mega Man 11 PS4',
    offer: {
      query: 'console Xbox Series X Amazon Brasil', productName: 'Console Xbox Series X',
      productPitch: 'Mega Man: Dual Override foi anunciado para Xbox Series X|S. Esta busca leva a um console da família compatível; o jogo não vem incluído e o anúncio ainda não confirma preço ou data exata.',
    },
    body: `A Capcom revelou Cleanser Man como vencedor do concurso de criação de chefes de Mega Man: Dual Override. O comunicado distribuído em 15 de novembro situa a apresentação no painel da empresa na TwitchCon de San Diego; Gematsu também registrou a revelação. O personagem será um dos Robot Masters enfrentados no novo jogo.

A ideia parte de uma contradição simples. Cleanser Man é obcecado por limpeza, mas sua intervenção causa danos a monumentos e obras de arte. Ao ser tratado como ameaça, toma uma instalação de processamento de resíduos e passa a poluir o ambiente. Essa é a descrição oficial do personagem, não um resumo de uma fase que tenhamos jogado.

O concurso também situa Dual Override numa tradição da franquia. A Capcom aponta Mega Man 2, de 1988, como origem dessa participação da comunidade no desenho dos chefes. Para entender a relação, vale olhar para o papel dos Robot Masters: eles dão identidade aos confrontos e ao tema visual de cada ameaça. O anúncio reforça essa continuidade de formato, sem esclarecer por si só a posição da história na cronologia.

Dual Override continua previsto para a primavera do hemisfério norte de 2027. No Brasil, essa janela corresponde ao outono, não à primavera local. O comunicado lista Switch 2, Switch, PS5, PS4, Xbox Series X|S, Xbox One e PC por Steam, Epic Games Store e Microsoft Store. Não há dia exato confirmado nessa revelação.

Ainda é cedo para dizer como o chefe vai funcionar em combate ou medir dificuldade. A novidade concreta é a escolha do desenho e sua incorporação ao elenco; desempenho, preço brasileiro e diferenças entre versões precisam de informação própria. Para acompanhar o jogo, o trailer serve como apresentação de conceito, sem substituir uma avaliação da versão final.`,
    sources: [source('Capcom — comunicado distribuído via Games Press', 'https://www.gamespress.com/en-US/Mega-Man-Dual-Override-Introduces-Boss-Design-Contest-Winner-Cleanser-'), source('Gematsu — revelação e plataformas', 'https://www.gematsu.com/2026/11/mega-man-dual-override-boss-design-contest-winner-cleanser-man-revealed')],
  }),
  draft({
    id: 'rivals-aether-ii-burnette-gratuita-dezembro', visual: 'rivals', tag: 'Rivals of Aether II · Burnette',
    title: 'Rivals of Aether II recebe Burnette em 1º de dezembro sem compra de personagem',
    excerpt: 'Oitava adição gratuita desde o lançamento também acompanha nova temporada ranqueada e evento.',
    scores: [0, 0, 11, 14, 7], relevanceReason: 'Atualização gratuita confirmada pelo estúdio e Gematsu; escopo menor que grandes franquias, sem presumir alcance por buscas.',
    alts: ['Escudo incandescente numa arena de plataformas, em conceito de IA inspirado no anúncio de Burnette.', 'Oito placas de torneio, medalha em brasa e bandeira representam atualização e temporada de Rivals, em arte de IA.'],
    product: 'Quadrinho Tales of Aether indicado pelo estúdio, com volume correto confirmado', query: 'site:amazon.com.br Tales of Aether Burnette',
    offer: {
      query: 'Steam Deck OLED console portátil Amazon Brasil', productName: 'Steam Deck OLED — portátil para jogos Steam',
      productPitch: 'Rivals of Aether II está disponível no Steam e aparece como Steam Deck Verified. Esta busca é pelo portátil compatível com a versão Steam; o jogo é vendido separadamente. Confirme modelo, armazenamento e vendedor.',
      source: source('SteamDB — status Steam Deck Verified', 'https://steamdb.info/app/2217000/config/'),
    },
    body: `Burnette, apresentada como The Scorched Shield, está prevista para chegar a Rivals of Aether II em 1º de dezembro. Aether Studios descreve a personagem como a oitava atualização gratuita de lutador desde o lançamento. Gematsu confirma a data e o modelo de distribuição: a adição não é anunciada como um novo personagem pago.

Gratuito, neste caso, descreve a atualização para o jogo. Não significa que Rivals of Aether II inteiro passou a ser distribuído sem custo, nem que todos os cosméticos futuros estejam incluídos. O anúncio também cita evento, nova temporada ranqueada e cosméticos, mas esses elementos não devem ser confundidos com o acesso à lutadora.

A história de Burnette tem ligação com Clairen. O texto oficial retoma uma relação de traição e perseguição e aponta Tales of Aether como leitura para conhecer mais desse contexto. É uma conexão útil para quem acompanha o universo, mas não uma exigência anunciada para entender os comandos ou entrar nas partidas.

O interesse competitivo está no efeito de um novo integrante sobre as escolhas do elenco. Ainda não há base nesta checagem para declarar Burnette forte demais, fraca ou favorita de torneios. Trailer e descrição de personagem ajudam a conhecer a proposta; equilíbrio exige examinar os ajustes completos e observar o jogo depois da atualização.

A versão mencionada na cobertura é de PC via Steam. Para o leitor brasileiro, a orientação é acompanhar as notas e o horário da atualização na plataforma usada, sem presumir lançamento simultâneo em consoles não anunciados nessa fonte. Quem já possui o jogo pode esperar os detalhes do patch antes de gastar com conteúdo que não seja a própria personagem.`,
    sources: [source('Aether Studios — anúncio no canal oficial Steam Community', 'https://steamcommunity.com/app/2217000/announcements/'), source('Aether Studios — anúncio individual', 'https://store.steampowered.com/news/app/2217000/view/675137336435016447'), source('Gematsu — data e atualização gratuita', 'https://www.gematsu.com/2026/11/rivals-of-aether-ii-adds-burnette-on-december-1')],
  }),
  draft({
    id: 'dragon-ball-fighterz-balanceamento-anunciado-sem-data', visual: 'fighterz', tag: 'Dragon Ball FighterZ · balanceamento',
    title: 'Dragon Ball FighterZ terá novo balanceamento; mudanças e data seguem em aberto',
    excerpt: 'Teaser confirma continuidade do suporte, mas ainda não sustenta previsões sobre personagens ou combos.',
    scores: [0, 0, 18, 11, 7], relevanceReason: 'Franquia ampla e anúncio coberto por imprensa especializada; vídeo primário não pôde ser lido integralmente.',
    alts: ['Dois lutadores originais de anime diante de uma balança de energia, em conceito de IA sobre equilíbrio competitivo.', 'Caderno de treino, comandos abstratos e cronômetro ilustram preparação para patch de luta, em arte de IA.'],
    product: 'Dragon Ball FighterZ com edição e plataforma exatas verificadas', query: 'site:amazon.com.br Dragon Ball FighterZ PS4',
    offer: {
      query: 'Dragon Ball FighterZ jogo PS5 Xbox Series Amazon Brasil', productName: 'Dragon Ball FighterZ — buscar edições na Amazon',
      productPitch: 'Busca pelo jogo desta matéria. Confira se a oferta é para PS5, Xbox Series, PS4, Xbox One, Switch ou PC e verifique edição e região antes de comprar.',
    },
    body: `Bandai Namco e Arc System Works anunciaram uma nova atualização de balanceamento para Dragon Ball FighterZ. A informação foi registrada por Gematsu em 15 de novembro e retomada por PlayStation Universe no dia seguinte. Até o material consultado, não há data de lançamento nem uma lista de mudanças para examinar.

Essa ausência limita o que podemos concluir. Um teaser de balanceamento confirma a intenção de alterar o jogo, mas não informa quais personagens ganharão ou perderão recursos. Também não permite prever que um combo conhecido vai deixar de funcionar ou que determinada equipe passará a dominar o competitivo.

Para quem joga com frequência, o documento decisivo será a nota completa da atualização. É nela que precisam aparecer alterações de comandos, propriedades de golpes e sistemas, quando existirem. Sem isso, vídeos curtos mostram uma apresentação da novidade, não uma comparação verificável entre a versão atual e a seguinte.

O jogo tem versões para PS5, Xbox Series, PS4, Xbox One, Switch e PC via Steam, conforme a relação de Gematsu. A existência dessas versões não confirma que o novo patch chegará no mesmo horário a todas. A página oficial da Bandai serve de referência para o produto, mas não foi usada aqui para preencher as lacunas do teaser com detalhes presumidos.

Nossa avaliação editorial é que vale acompanhar o anúncio sem reorganizar compras ou treinos por especulação. Quem pretende voltar deve conferir a versão instalada, o ambiente em que os amigos jogam e as notas quando forem publicadas. Não há teste próprio neste texto, nem promessa de melhora da conexão ou de equilíbrio definitivo: são questões que a atualização concreta terá de responder.`,
    sources: [source('Bandai Namco — página oficial do jogo', 'https://www.bandainamcoent.com/games/dragon-ball-fighterz'), source('Bandai Namco — teaser, acesso integral indisponível', 'https://www.youtube.com/watch?v=DyqwKbUaXH4'), source('Gematsu — anúncio sem data', 'https://www.gematsu.com/2026/11/dragon-ball-fighterz-balance-update-announced'), source('PlayStation Universe — cobertura', 'https://www.psu.com/news/dragon-ball-fighterz-to-receive-new-balance-patch-confirms-arc-system-works/')],
    draftNotes: 'Reabrir vídeo primário e conferir notas oficiais mais recentes antes da publicação.',
  }),
  draft({
    id: 'netcode-warriors-ps5-pc-2027-rollback', visual: 'netcode', tag: 'Netcode Warriors · PS5 · 2027',
    title: 'Netcode Warriors confirma PS5 e PC em 2027 com foco no duelo em arena',
    excerpt: 'Son Studios descreve rollback e salas com espectadores. Compatibilidade entre plataformas ainda precisa de confirmação.',
    scores: [0, 0, 7, 13, 7], relevanceReason: 'Anúncio confirmado por Steam e Gematsu, com utilidade de idioma; alcance conservador para projeto independente.',
    alts: ['Espadachins originais duelam num espaço digital com trilhas temporais, em conceito de IA sobre rollback.', 'Arena virtual vista de cima com dois combatentes e balcões de espectadores, em conceito de IA.'],
    product: 'Controle compatível com a plataforma escolhida, com modelo validado', query: 'site:amazon.com.br Netcode Warriors controle DualSense',
    offer: {
      query: 'console PlayStation 5 Amazon Brasil', productName: 'Console PlayStation 5',
      productPitch: 'Netcode Warriors foi anunciado para PS5 em 2027. Esta busca leva ao console da plataforma confirmada; o jogo não vem incluído e sua edição final ainda pode ter requisitos próprios.',
    },
    body: `Netcode Warriors está previsto para PS5 e PC via Steam em 2027, segundo anúncio da Son Studios coberto por Gematsu. A novidade é a confirmação do PlayStation 5; a página de PC já apresenta o projeto como um jogo de luta em arena com duelos entre dois participantes. Não foi divulgado um dia de lançamento nessa cobertura.

O foco online aparece na descrição oficial da Steam. O estúdio menciona rollback, partidas ranqueadas, encontros casuais e salas personalizadas com espectadores. São recursos anunciados para o produto, não resultados de um teste de conexão feito pelo Bits, Please. Ainda não há como avaliar a qualidade de partidas entre regiões a partir dessa lista.

Rollback também não deve ser lido como confirmação automática de cross-play. Uma técnica de compensação de rede e a possibilidade de jogar entre plataformas respondem a perguntas diferentes. Antes de comprar para enfrentar um amigo no outro aparelho, será necessário conferir se a Son Studios oferece essa conexão entre versões.

A Steam relaciona português brasileiro para interface e legendas, sem indicar dublagem no idioma. É uma informação relevante para acompanhar a apresentação da história e dos menus, mas continua sendo uma especificação de um jogo ainda não lançado. O mesmo cuidado vale para requisitos e funcionamento de controles: confirme a listagem final antes de escolher hardware para ele.

O material divulgado sustenta interesse na proposta de arena e nas ferramentas para treinar e assistir a partidas. Não sustenta uma recomendação de compra antecipada por desempenho, tamanho de comunidade ou equilíbrio do elenco. Para quem gosta do gênero, a atitude mais útil agora é acompanhar as demonstrações e esperar respostas sobre lançamento, conexão entre plataformas e condições da versão brasileira.`,
    sources: [source('Son Studios — página oficial Steam', 'https://store.steampowered.com/app/2823570/Netcode_Warriors/'), source('Gematsu — anúncio PS5 e janela', 'https://www.gematsu.com/2026/11/netcode-warriors-adds-ps5-version-launches-in-2027')],
  }),
  draft({
    id: 'machine-party-consoles-26-novembro', visual: 'machine', tag: 'Machine Party · consoles · novembro',
    title: 'Machine Party chega aos consoles em 26 de novembro com desafios para até quatro',
    excerpt: 'A coleção de minijogos de humor violento ganha versões de PS5, Xbox Series e Switch; não é uma estreia inédita no PC.',
    scores: [0, 0, 11, 14, 7], relevanceReason: 'Novo lançamento em consoles confirmado por publicadora e Gematsu; vendas só entram como declaração atribuída.',
    alts: ['Quatro figuras estilizadas atravessam plataforma industrial com engrenagens, em conceito de IA sobre Machine Party.', 'Quinze peças de desafios e quatro peões numa mesa industrial ilustram os minijogos, em arte de IA.'],
    product: 'Controle adicional compatível, após verificar modo local da versão comprada', query: 'site:amazon.com.br Machine Party controle Xbox',
    body: `Machine Party tem chegada anunciada para PS5, Xbox Series X|S, Nintendo Switch e Xbox no PC em 26 de novembro. O comunicado da Oro Interactive, distribuído em 16 de novembro, também foi coberto por Gematsu. O jogo já estava no PC via Steam: essas versões ampliam as plataformas, sem representar uma primeira estreia de toda a produção.

A proposta reúne quinze minijogos para dois a quatro participantes. O tom é de humor sombrio e violência estilizada, com situações que transformam competição de festa em ameaça industrial. O texto da publicadora descreve desafios de reação e decisão, com opção de percorrer a coleção ou selecionar favoritos. Não se trata de uma recomendação para crianças só porque o formato lembra jogos de festa.

O comunicado atribui a criação a Mike Klubnika e GDeavid e destaca a trilha industrial de Alex Peipman. Também afirma que a edição de Steam vendeu mais de 2,5 milhões de cópias. O número é uma declaração da publicadora, não uma auditoria independente nem um indicador de vendas futuras das versões de console.

A cobertura de Gematsu confirma o calendário e identifica 30 de julho como estreia no Steam. Esse histórico explica por que já existe material de PC circulando, mas uma captura dessa versão não demonstra como o jogo roda num Switch ou num PS5. Ainda precisamos de testes específicos para falar em resolução, estabilidade ou diferença de controles.

Para montar uma sessão com amigos, confira na loja da plataforma os modos disponíveis, o número de controles necessário e os requisitos de conta. Esta matéria não verificou a oferta brasileira de cada versão nem promete cross-play. O anúncio dá uma data para acompanhar; as condições exatas de uma compra no Brasil precisam ser checadas separadamente.`,
    sources: [source('Oro Interactive — comunicado via Games Press', 'https://www.gamespress.com/Machine-Party-Brings-Its-Violent-Party-Games-to-Consoles-on-November-2'), source('Gematsu — plataformas e calendário', 'https://www.gematsu.com/2026/11/machine-party-coming-to-ps5-xbox-series-and-switch-on-november-26'), source('Oro — postagem Steam, leitura indisponível', 'https://store.steampowered.com/news/app/4108000/view/674011436528174089')],
  }),
  draft({
    id: 'grammy-2027-cinco-trilhas-jogos-indicadas', visual: 'grammy', section: 'CULTURA POP', tag: 'Grammy 2027 · trilhas de jogos',
    title: 'Grammy 2027 indica trilhas de 007, Wolverine e mais três jogos',
    excerpt: 'Categoria reconhece composição musical, com janela de elegibilidade própria. A seleção inclui Ghost of Yōtei e uma expansão de Avatar.',
    scores: [0, 0, 18, 15, 6], relevanceReason: 'Lista primária completa confirmada por dois veículos especializados; indicações divulgadas em 16/11.',
    alts: ['Cinco estantes de partituras com motivos de espionagem, floresta, Japão e espaço ilustram trilhas indicadas, em arte de IA.', 'Mãos de maestro sobre partitura que se transforma em ambientes sonoros de jogo, em conceito de IA.'],
    product: 'Edição de um dos jogos indicados ou gravação da trilha exata, após validar pertinência e destino', query: 'site:amazon.com.br Grammy Ghost Yotei PS5',
    offer: {
      query: 'Avatar Frontiers of Pandora From the Ashes PS5 007 First Light PS5 Ghost of Yotei PS5 Marvels Wolverine PS5 Star Wars Zero Company PS5',
      productName: 'Jogos indicados ao Grammy 2027 — busca na Amazon',
      productPitch: 'Busca pelos jogos indicados citados na matéria, sem imagens de produto. A indicação é para a trilha; os resultados podem não incluir todos os títulos ou edições. Confirme jogo, plataforma e conteúdo antes de comprar.',
    },
    body: `A Recording Academy relaciona cinco trabalhos na disputa de trilha original para videogames e outras mídias interativas do Grammy 2027. Estão indicados Avatar: Frontiers of Pandora — From the Ashes, 007: First Light, Ghost of Yōtei, Marvel’s Wolverine e Star Wars: Zero Company. A lista oficial é confirmada pelas coberturas de Game Informer e VGC de 16 de novembro.

Os créditos merecem o mesmo espaço que os jogos. Avatar é associado a John Paesano; 007, a Joe Henson e Alexis Leon Smith; Ghost of Yōtei, a Toma Otowa; Wolverine, a David Fleming; e Star Wars: Zero Company, a Gordy Haab. A indicação reconhece o trabalho musical apresentado na categoria, não estabelece qual desses jogos é o melhor como experiência completa.

A página da Academia delimita gravações lançadas de 31 de agosto de 2025 a 28 de agosto de 2026. Essa janela própria ajuda a entender por que comparar diretamente a lista com premiações de jogos pode levar a conclusões erradas. Ano da cerimônia, período de elegibilidade e calendário de lançamento de um jogo não são a mesma coisa.

From the Ashes também exige precisão: o nome indicado é o da expansão de Avatar, e não uma indicação genérica para toda música produzida para a franquia. Game Informer chama atenção para a presença recorrente de Avatar nessa categoria; isso é contexto da cobertura especializada, não evidência de voto já decidido.

Para o leitor, a lista pode funcionar como roteiro de escuta: procurar os álbuns pelos créditos corretos permite comparar atmosferas e escolhas de instrumentação sem reduzir a discussão a franquias. Ainda não há vencedor anunciado nessa seleção. Tampouco atribuímos números de ouvintes ou popularidade às trilhas; indicação e desempenho comercial são informações distintas.`,
    sources: [source('Recording Academy — categoria e créditos 2027', 'https://www.grammy.com/awards/categories/best-score-soundtrack-for-video-games-and-other-interactive-media/2027/'), source('Game Informer — indicados e contexto', 'https://gameinformer.com/2026/11/16/2027-video-game-grammy-nominations-include-avatar-frontiers-of-pandora-for-the-third'), source('VGC — confirmação especializada', 'https://www.videogameschronicle.com/news/this-years-video-game-soundtrack-grammy-nominations-include-bond-star-wars-and-wolverine/')],
  }),
  draft({
    id: 'tarkov-nova-ia-primeiro-semestre-2027', visual: 'tarkov', tag: 'Escape from Tarkov · IA de inimigos · 2027',
    title: 'Tarkov planeja refazer IA dos inimigos no primeiro semestre de 2027',
    excerpt: 'Nikita Buyanov fala em sistema reformulado. Janela é uma previsão do estúdio, sem data ou resultado técnico demonstrado.',
    scores: [0, 0, 14, 12, 7], relevanceReason: 'Entrevista direta de 16/11 com responsável do estúdio; segunda cobertura deriva da mesma fala, sem confirmação autônoma.',
    alts: ['Patrulheiros em fábrica abandonada procuram cobertura por rotas diferentes, em conceito de IA sobre bots de Tarkov.', 'Maquete de armazém com rotas e cones de visão ilustra avaliação de comportamento de inimigos, em arte de IA.'],
    product: 'Headset PC pertinente à percepção de áudio, sem prometer vantagem', query: 'site:amazon.com.br Escape Tarkov headset PC',
    body: `Escape from Tarkov deve receber um sistema de inteligência artificial reformulado no começo de 2027, segundo Nikita Buyanov. Em entrevista a Insider Gaming, publicada em 16 de novembro, o responsável da Battlestate Games situou o plano entre o primeiro e o segundo trimestre. Isso cobre o primeiro semestre, sem estabelecer um mês ou dia de lançamento.

A fala trata do comportamento de personagens controlados pelo jogo. Não é um anúncio sobre geração de imagens ou ferramentas de produção. O interesse para quem joga está em como esses inimigos podem perceber ameaças e agir durante uma incursão, mas a entrevista não oferece especificações suficientes para antecipar cada mudança.

Insider Gaming apresenta a declaração como parte de uma conversa direta com Buyanov. A cobertura de iXBT também reproduz o plano, citando a mesma entrevista. São duas publicações sobre o assunto, mas a segunda não equivale a uma confirmação independente do cronograma: ambas dependem da previsão dada pelo estúdio.

Essa distinção importa na hora de avaliar promessas. Um sistema refeito pode mudar decisões, rotas e combates; só uma versão disponível e testada poderá mostrar se o efeito torna os encontros mais convincentes ou mais justos. Não há fundamento nessa fala para prometer redução de precisão dos bots, novos tipos de loot ou um ganho de desempenho no PC.

Nossa leitura editorial é que o anúncio deve ser acompanhado como direção de desenvolvimento. Quem está decidindo voltar a Tarkov não precisa tratar uma mudança de 2027 como recurso presente. Antes de gastar com edição ou equipamento por causa dela, vale esperar notas oficiais, escopo por modo e testes da versão efetivamente distribuída. Esta matéria não testou a nova IA e não declara resolvidos problemas relatados por jogadores.`,
    sources: [source('Insider Gaming — entrevista direta com Nikita Buyanov', 'https://insider-gaming.com/exclusive-escape-from-tarkov-new-ai-system-coming-2027/'), source('iXBT — cobertura derivada da entrevista', 'https://ixbt.games/en/news/2026/11/16/nikita-buianov-anonsiroval-soversenno-novyi-ii-dlia-escape-from-tarkov.html')],
  }),
  draft({
    id: 'monster-hunter-stories-3-xbox-pc-play-anywhere', visual: 'stories', tag: 'Monster Hunter Stories 3 · Xbox no PC · Play Anywhere',
    title: 'Monster Hunter Stories 3 tem chegada ao Xbox no PC marcada para hoje',
    excerpt: 'Anúncio da Capcom prevê Play Anywhere em 18 de novembro. Benefício não deve ser estendido a cópias de outras lojas.',
    scores: [0, 0, 17, 14, 10], relevanceReason: 'Data prevista para hoje em anúncio primário de outubro e cobertura especializada; evento hoje não equivale a notícia publicada hoje.',
    alts: ['Cavaleira e dragão originais atravessam ponte diante de portais abstratos com a mesma rota, em conceito de IA sobre continuidade de progresso.', 'Ovo de dragão e diário diante de três portais ligados por fita ilustram continuidade de progresso, em arte de IA.'],
    product: 'Edição digital Xbox elegível para Play Anywhere, com licença explicitamente confirmada', query: 'site:amazon.com.br Monster Hunter Stories 3 Xbox',
    offer: {
      query: 'console Xbox Series X Amazon Brasil', productName: 'Console Xbox Series X',
      productPitch: 'Monster Hunter Stories 3 tem versão anunciada para Xbox Series X|S. Esta busca leva a um console compatível; confirme a edição do jogo e a disponibilidade do benefício Play Anywhere na oferta. O jogo não vem incluído no console.',
    },
    body: `Monster Hunter Stories 3: Twisted Reflection tem lançamento no Xbox no PC previsto para 18 de novembro de 2026. A data foi anunciada por Toshiaki Matsuda, da equipe de relações públicas da Capcom, no Xbox Wire de 7 de outubro. Windows Central também cobriu a inclusão de Xbox Play Anywhere. Não confirmamos nesta checagem o horário de liberação da loja brasileira.

O benefício anunciado permite continuar entre Xbox Series X|S, PCs com Windows 11 e dispositivos portáteis compatíveis, com progresso, conteúdo adicional e conquistas compartilhados. A utilidade está em trocar de aparelho mantendo a mesma jornada. Isso descreve a edição elegível no ecossistema Xbox; não transforma uma compra no Steam ou em outra plataforma numa licença Xbox.

Também não é a primeira estreia do terceiro jogo. O comunicado já o descrevia como disponível no Xbox Series X|S quando anunciou a versão de PC da loja. A novidade de hoje é essa ampliação de distribuição e de continuidade entre dispositivos, não o lançamento mundial original de Twisted Reflection.

Para quem conhece apenas a série principal, Stories segue outra proposta: é um RPG por turnos centrado no vínculo entre Riders e monstros. O texto oficial situa Twisted Reflection como terceiro título, depois de Monster Hunter Stories e Monster Hunter Stories 2: Wings of Ruin. Essa relação ajuda a reconhecer o formato sem presumir uma continuidade narrativa obrigatória entre todas as aventuras.

Antes de comprar, confira a marca Play Anywhere na oferta exata e o que a edição inclui. Um disco ou código descrito apenas como Xbox não deve ser tratado por esta matéria como confirmação de todos os benefícios. Também não convertemos preços em dólar do comunicado em valores brasileiros. O anúncio dá a data e o recurso; licença, região e disponibilidade precisam estar claros na página de compra.`,
    sources: [source('Capcom no Xbox Wire — anúncio, data e benefícios', 'https://news.xbox.com/en-us/2026/10/07/monster-hunter-stories-3-xbox-px-xbox-play-anywhere-announce/'), source('Windows Central — cobertura do Play Anywhere', 'https://www.windowscentral.com/gaming/xbox/monster-hunter-stories-3-xbox-play-anywhere')],
    draftNotes: 'Conferir liberação efetiva e disponibilidade no Brasil antes de publicar como já disponível.',
  }),
];
