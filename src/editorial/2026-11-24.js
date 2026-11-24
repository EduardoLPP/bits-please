const today = '2026-11-24';
const checkedAt = '2026-11-24T07:04:00-03:00';
const entry = (id, section, tag, title, excerpt, body, sources, relevanceScore = 0, relevanceReason = '', relevanceBreakdown = null) => ({
  id, category: 'GAMES', section, tag, title, excerpt,
  date: '24 nov 2026', publishedAt: today, read: '5 min',
  image: '', imageAlt: '', imageSource: '', imageSourceUrl: '', imageLicense: '', imageLicenseUrl: '',
  body, status: 'published',
  sources: sources.map(([label, url]) => ({ label, url })),
  ...(relevanceScore ? {
    relevanceDate: today, relevanceUpdatedAt: checkedAt, relevanceScore,
    relevanceBreakdown: relevanceBreakdown || { timeliness: 24, publicInterest: 18, reach: 15, sourceReliability: 14, brazilUtility: relevanceScore - 71 },
    relevanceReason, relevanceSignals: sources.slice(0, 2).map(([label, url]) => ({ label, url, sameDayVerified: false }))
  } : {})
});

export const dailyPosts20261124 = [
  entry('gothic-3-classic-review-20261124', 'REVIEWS', 'Gothic 3 Classic · review editorial · pesquisa',
    'Review editorial: Gothic 3 Classic leva a saga a novos consoles, mas a promessa de correções precisa de prova',
    'A edição de console inclui o Community Patch 1.75, interface para controle e melhorias técnicas. Esta análise é baseada em pesquisa e não atribui nota nem finge teste próprio.',
    `Esta é uma análise editorial baseada em pesquisa. Não testamos a edição lançada hoje e, portanto, não atribuímos nota nem tratamos a promessa de otimização como desempenho comprovado. Gothic 3 Classic chega em 24 de novembro ao PS5 e Xbox Series X|S; a página oficial lista a versão de Switch 2 para o início de 2027.\n\nO jogo leva o herói sem nome ao continente de Myrtana, dividido entre o rei Rhobar, rebeldes humanos e forças orcs. A estrutura amplia a liberdade em relação às aventuras anteriores: o jogador escolhe para quem trabalhar e como conduzir conflitos, num mundo aberto com centenas de personagens. Esse escopo é a ambição central do RPG e também o risco de ritmo e consistência que a crítica especializada já associava ao lançamento original.\n\nA edição atual integra o Community Patch 1.75, adapta interface e controles ao gamepad e promete otimização adicional. Isso é informação confirmada pelo publicador, não prova de estabilidade, taxa de quadros ou ausência de bugs. Para quem nunca jogou, vale esperar análises independentes da conversão; para fãs, o interesse está em revisitar Myrtana com correções acumuladas pela comunidade. A recomendação fica em suspenso até haver avaliação da edição de console.`,
    [['THQ Nordic — página oficial, recursos, plataformas e data', 'https://gothic3classic.thqnordic.com/US/ps5'], ['GamesRadar+ — calendário e contexto do lançamento', 'https://www.gamesradar.com/upcoming-ps5-games/'], ['TechRadar — contexto da série e lançamentos de console', 'https://www.techradar.com/gaming/the-legendary-rpg-series-that-inspired-the-witcher-is-finally-coming-to-xbox-and-playstation']],
    73, 'Gothic 3 Classic tem lançamento confirmado para hoje em PS5 e Xbox. A relevância vem do evento atual e do retorno de uma franquia de RPG conhecida; ainda não há avaliação independente da conversão publicada.', { timeliness: 27, publicInterest: 15, reach: 13, sourceReliability: 13, brazilUtility: 5 }),
  entry('phasmophobia-resonance-update-20261124', 'GAMES', 'Phasmophobia · atualização Resonance · Unity 6',
    'Phasmophobia recebe Resonance: o que muda com Unity 6, novas ferramentas e reconhecimento de voz',
    'A atualização prevista para 24 de novembro reúne mudança de motor, varas de radiestesia e melhorias de iluminação. As notas completas só saem no lançamento.',
    `Phasmophobia recebe hoje a atualização Resonance, que combina a migração para Unity 6 com recursos de investigação paranormal. A desenvolvedora confirmou varas de radiestesia, melhorias no reconhecimento de voz, iluminação revisada e correções. As notas completas foram prometidas para o lançamento, então detalhes de compatibilidade e eventuais problemas ainda precisam ser conferidos depois da instalação.\n\nA mudança de motor é o aspecto mais estrutural: a equipe descreve Resonance como uma etapa técnica importante na preparação para o caminho até a versão 1.0, prevista para o fim de 2027. Isso não significa que todo recurso planejado para esse marco chegou agora. A prévia de desenvolvimento separa o conteúdo incluído de itens adiados, e convém não confundir o roadmap com o pacote de hoje.\n\nPara grupos que jogam em plataformas diferentes, a orientação prática é aguardar as notas específicas da plataforma e a confirmação de disponibilidade regional antes de marcar uma sessão. A página oficial confirma lançamento em todas as plataformas, mas não detalha neste anúncio horário por região. Esta matéria será atualizada quando as notas completas permitirem distinguir mudanças efetivamente entregues de planos futuros.`,
    [['Kinetic Games — anúncio oficial no Steam', 'https://store.steampowered.com/oldnews/?appgroupname=Phasmophobia&appids=739630&feed=steam_community_announcements'], ['Kinetic Games — Development Preview #22', 'https://store.steampowered.com/oldnews/?appgroupname=Phasmophobia&appids=739630&feed=steam_community_announcements&headlines=0']],
    80, 'A desenvolvedora marcou Resonance para hoje em todas as plataformas. O evento atual e os recursos confirmados sustentam a pauta; as notas integrais ainda não estavam disponíveis na checagem das 7h de Brasília.', { timeliness: 28, publicInterest: 17, reach: 16, sourceReliability: 13, brazilUtility: 6 }),
  entry('gta-vi-playstation-launch-record-20261124', 'INDÚSTRIA', 'GTA VI · PlayStation · recorde de lançamento',
    'GTA VI bate recorde de estreia no PlayStation; Sony divulga alcance, horas jogadas e cautela sobre vendas',
    'A Sony informou mais de 39 milhões de jogadores únicos no PS5 em quatro dias. O dado mede jogadores, não cópias vendidas, e não inclui Xbox.',
    `A Sony chamou Grand Theft Auto VI de maior lançamento da história do PlayStation e informou que mais de 39 milhões de jogadores únicos experimentaram o jogo no PS5 entre 19 e 22 de novembro. A empresa também contabilizou 683 milhões de horas de jogo no console e disse que o título foi o primeiro jogo iniciado em 70% dos novos PS5 conectados pela primeira vez no período.\n\nEsses números são métricas de uso divulgadas pela plataforma, não vendas. Um jogador único pode não corresponder a uma cópia comprada individualmente, e a publicação não trouxe uma contagem equivalente para Xbox. Também não há base para transformar a média de horas em uma estimativa de unidades vendidas.\n\nO recorde ajuda a dimensionar a adoção dentro do ecossistema PlayStation e a concentração da estreia em poucos dias. Para o mercado brasileiro, a comparação mais útil virá quando Take-Two ou Rockstar publicarem dados de vendas por plataforma ou região. Até lá, a formulação correta é a da Sony: jogadores e atividade no PS5, com escopo e período definidos.`,
    [['PlayStation.Blog — comunicado de 23/11', 'https://blog.playstation.com/2026/11/23/thank-you-for-making-grand-theft-auto-vi-the-biggest-launch-in-playstation-history/'], ['Associated Press — cobertura independente dos números e contexto', 'https://apnews.com/article/15c69f76548ab5659bc3fe44a69756d8']],
    79, 'A Sony publicou números oficiais recentes sobre a estreia de GTA VI no PS5; a matéria restringe as conclusões à métrica e ao período divulgados.'),
  entry('gta-vi-xbox-cloud-guide-20261124', 'GUIAS', 'GTA VI · Xbox Cloud Gaming · Remote Play',
    'Como jogar GTA VI por streaming no Xbox One — e o que a nuvem não substitui',
    'O Xbox Cloud Gaming transmite a versão com configurações gráficas de Series S e exige uma cópia digital. Remote Play é outra coisa: transmite do seu próprio Series X|S.',
    `Grand Theft Auto VI pode ser transmitido pelo Xbox Cloud Gaming para Xbox One, segundo a Microsoft. A opção permite jogar sem possuir um console da geração atual, mas não elimina a compra do jogo: é necessária uma cópia adquirida na Xbox Store. Alguns planos Game Pass incluem até 15 horas mensais de jogo na nuvem; a Microsoft informa que é possível comprar tempo adicional.\n\nA diferença de imagem importa: quando transmitido pela nuvem, o jogo usa configurações gráficas equivalentes às do Xbox Series S. Não é uma versão nativa de Xbox One nem uma promessa de desempenho idêntico em qualquer conexão. Latência, estabilidade e qualidade dependem da rede e do dispositivo.\n\nRemote Play é um recurso separado. Ele transmite a partir do Xbox Series X|S que você já tem para celular, computador ou portátil compatível; não substitui o console por servidores na nuvem. Para escolher, pense primeiro no acesso: Cloud Gaming atende quem não tem console atual; Remote Play serve para continuar uma sessão do próprio console em outra tela.`,
    [['Xbox Wire — requisitos e diferenças entre nuvem e Remote Play', 'https://news.xbox.com/en-us/2026/11/23/grand-theft-auto-vi-xbox-cloud-and-remote-play/'], ['Xbox — página do Cloud Gaming', 'https://www.xbox.com/en-US/cloud-gaming']],
    77, 'A Microsoft publicou instruções recentes para jogar GTA VI via nuvem; o guia explica o requisito de compra e distingue streaming remoto de console.'),
  entry('gta-vi-first-patch-context-20261124', 'GAMES', 'GTA VI · atualização 01.002.002 · contexto',
    'Primeira atualização de GTA VI corrige falhas relatadas, mas Rockstar ainda precisa esclarecer distribuição e impacto',
    'Veículos especializados reportaram correções de travamentos, salvamento e clima na versão 01.002.002. A matéria separa notas publicadas de relatos de jogadores.',
    `A atualização 01.002.002 de Grand Theft Auto VI começou a chegar ao PS5 e Xbox Series X|S em 23 de novembro. Cobertura especializada atribuiu às notas da Rockstar correções para travamentos, salvamentos automáticos pouco confiáveis e chamadas que não disparavam; também foram citados ajustes no clima e em situações específicas de missões.\n\nO dado importante para o leitor é o limite da confirmação: os relatos de atualização e as notas foram reproduzidos por veículos especializados, mas não há aqui uma medição independente de estabilidade antes e depois. Experiências compartilhadas por jogadores podem ajudar a identificar problemas, porém não demonstram que todos foram resolvidos em todas as plataformas.\n\nQuem está no meio da campanha deve instalar a atualização quando estiver disponível e manter o salvamento sincronizado. Se um bloqueio persistir, vale registrar plataforma, versão e situação exata antes de concluir que o patch falhou. A Rockstar não anunciou neste material uma data para a próxima atualização nem uma lista de mudanças de desempenho.`,
    [['Eurogamer — cobertura da atualização e notas', 'https://www.eurogamer.net/gta-6-xbox-playstation-patch-autosave-vignette'], ['PC Gamer — cobertura dos ajustes de clima e primeiros relatos', 'https://www.pcgamer.com/games/grand-theft-auto/gta-6-players-swore-the-weather-system-w/'], ['Pure Xbox — versão Xbox e notas publicadas', 'https://www.purexbox.com/news/2026/11/gta-6-update-now-live-on-xbox-series-xs-includes-seven-official-fixes']],
    75, 'A cobertura especializada de 23/11 relata a primeira correção pós-lançamento; o texto evita atribuir eficácia sem teste comparativo.'),
  entry('diablo-iv-developer-stream-20261124', 'GUIAS', 'Diablo IV · transmissão de desenvolvedores · Twitch Drops',
    'Diablo IV faz transmissão de atualização hoje: horário no Brasil e como resgatar a recompensa',
    'A Blizzard marcou a apresentação para 16h em Brasília. Trinta minutos em uma transmissão elegível podem liberar um cosmético, com vínculo de contas e resgate manual.',
    `A Blizzard agendou para 24 de novembro, às 11h no horário do Pacífico, uma transmissão de desenvolvedores de Diablo IV sobre a próxima atualização. Isso corresponde a 16h em Brasília nesta data. A apresentação deve tratar da missão sazonal, de uma luta de chefe com dois adversários, de duas árvores War Plans, de itens Horádricos e de ajustes de classe. São tópicos anunciados, não conteúdo já liberado no jogo.\n\nA recompensa de Twitch Drops é o cosmético de adaga Noxoiect. Para obtê-lo, a Blizzard pede 30 minutos assistidos em qualquer canal da categoria Diablo IV com Drops habilitados durante a transmissão. O prazo informado termina em 25 de novembro às 11h do Pacífico.\n\nÉ necessário vincular Twitch e Battle.net, e o progresso não conta em abas inativas ou reprodução em segundo plano. Aplicativos Twitch de consoles e televisores não aceitam Drops, segundo a página de perguntas frequentes da Blizzard. Depois de completar o tempo, o jogador ainda precisa resgatar a recompensa no canal ou no inventário de Drops.`,
    [['Blizzard — horário, tópicos e instruções de Drops', 'https://news.blizzard.com/en-gb/article/24315746/join-our-next-developer-update-livestream?pubDate=20261120'], ['Blizzard — canais oficiais', 'https://www.diablo.com/en-us/']],
    77, 'A Blizzard transmite hoje uma apresentação sobre a próxima atualização de Diablo IV; a fonte oficial confirma o horário, os assuntos e o Drop. O valor editorial é limitado ao evento e à utilidade prática para participantes.', { timeliness: 25, publicInterest: 17, reach: 17, sourceReliability: 13, brazilUtility: 5 }),
  entry('steam-awards-2026-nominations-20261124', 'INDÚSTRIA', 'Steam Awards 2026 · indicações',
    'Steam Awards 2026: indicações ficam abertas até 30 de novembro; veja quem pode concorrer',
    'A Valve abriu as indicações e limita a elegibilidade por categoria aos jogos lançados na Steam após a Autumn Sale anterior, com exceção de Labor of Love.',
    `As indicações para o Steam Awards 2026 estão abertas até 30 de novembro, às 10h no horário do Pacífico. A página da Valve lista as categorias e informa que, salvo Labor of Love, só podem ser indicados jogos lançados na Steam depois da Autumn Sale do ano passado.\n\nA etapa atual é de nomeação, não de votação final. O participante escolhe títulos nas categorias disponíveis; a comunidade ainda não está escolhendo vencedores. A distinção evita confundir a abertura do processo com uma premiação já decidida.\n\nPara jogadores brasileiros, o processo é feito na página da Steam e depende do catálogo elegível na própria plataforma. A Valve anunciou que a votação final começa junto à Winter Sale, em 17 de dezembro. Como os horários são apresentados em horário do Pacífico, confira a contagem regressiva oficial antes do prazo se for participar no último dia.`,
    [['Valve — página oficial de indicações e regras', 'https://store.steampowered.com/steamawards/nominations/2026'], ['Valve — anúncio das indicações e calendário', 'https://store.steampowered.com/news/app/593110/view/685271070563893997']],
    0),
  entry('aion2-season2-roadmap-20261124', 'INDÚSTRIA', 'AION 2 · roadmap · temporada 2',
    'AION 2 agenda temporada 2 para dezembro e detalha Brawler e moradia; cronograma global pode mudar',
    'O roteiro da versão global prevê início em 16 de dezembro e novos recursos nos meses seguintes. A própria NC America diz que datas e ordem estão sujeitas a ajustes.',
    `A NC America divulgou em 23 de novembro um roteiro para a segunda temporada global de AION 2, marcada para 16 de dezembro. Entre os próximos conteúdos citados estão a classe corpo a corpo Brawler, que usa manoplas, e um sistema de moradia planejado para janeiro de 2027.\n\nA ressalva regional é essencial: o comunicado diz que datas e ordem de determinados conteúdos na versão global podem ser ajustadas conforme a experiência dos jogadores e as condições do serviço. Portanto, o roteiro não garante que todos os itens cheguem juntos nem que a versão global siga exatamente a sequência de outras regiões.\n\nPara quem acompanha o MMORPG, a notícia mais concreta é a data da temporada e a classe anunciada; o restante deve ser lido como planejamento. A empresa também relacionou o roteiro a mudanças após feedback de jogadores. Sem uma lista final de notas de atualização, não é correto antecipar como esses sistemas afetarão equilíbrio ou progressão.`,
    [['AION 2 — roteiro oficial reproduzido no portal da comunidade', 'https://aion2hub.me/en/news/notice-aion-2-season-2-roadmap-7rssa2'], ['Inven Global — contexto independente do anúncio', 'https://www.invenglobal.com/articles/29017/aion-2-addresses-player-feedback-and-reveals-season-2-roadmap']],
    0),
  entry('sea-of-remnants-xbox-beta-20261124', 'GAMES', 'Sea of Remnants · beta fechada · Xbox Insider',
    'Sea of Remnants terá beta fechada no Xbox Insider em dezembro; progresso será apagado após o teste',
    'A fase Dawnbreaker tem vagas limitadas e inscrição não garante acesso. A desenvolvedora prevê apagar progresso no encerramento, com recompensa comemorativa mantida.',
    `Sea of Remnants abrirá uma beta fechada chamada Dawnbreaker para participantes do Xbox Insider a partir de 3 de dezembro. O período divulgado vai até 18 de dezembro; o pré-download começa em 1º de dezembro. A participação é limitada, e a seleção ocorre no início do teste ou por sorteio, portanto entrar no programa não equivale a uma vaga garantida.\n\nA equipe informa que o progresso será apagado depois da beta, enquanto uma recompensa comemorativa poderá ser mantida para o lançamento. Xbox Series S está planejado para a versão de lançamento, mas não aparece como plataforma suportada nessa fase de teste.\n\nAntes de se inscrever, vale considerar que se trata de teste temporário e sujeito a mudanças. A descrição oficial apresenta Sea of Remnants como um jogo de estratégia por turnos com elementos roguelike. Não há anúncio nesta página sobre disponibilidade da beta no Brasil ou localização em português; confirme as condições mostradas no Xbox Insider local.`,
    [['Xbox Wire — anúncio do teste e condições', 'https://news.xbox.com/en-us/2026/11/23/sea-of-remnants-set-sail-for-the-dawnbreaker-closed-beta-on-xbox-insiders/'], ['Xbox Insider — página do programa', 'https://www.xbox.com/en-US/insider']],
    0),
  entry('dawn-of-war-iv-commander-edition-20261124', 'GAMES', 'Warhammer 40,000: Dawn of War IV · edições',
    'Dawn of War IV: Commander Edition antecipa acesso em três dias e inclui expansões futuras',
    'A edição especial prevê acesso antecipado em 30 de novembro, antes do lançamento de 3 de dezembro. As expansões descritas chegam somente em 2027.',
    `Warhammer 40,000: Dawn of War IV tem lançamento anunciado para 3 de dezembro de 2026. A Commander Edition oferece acesso antecipado três dias antes, em 30 de novembro, além da trilha sonora e duas expansões planejadas para 2027.\n\nA primeira expansão, Blood Ravens Story Prologue, está prevista para a primavera de 2027 e acompanha os Blood Ravens em Aurelia. A segunda, Aftermath, é esperada para o verão de 2027 e promete incluir uma nova facção. Essas janelas são planos do publicador, não datas específicas confirmadas.\n\nA decisão de compra depende de quanto o jogador valoriza acesso antecipado e conteúdo futuro. A inclusão de expansões não significa que estejam disponíveis no lançamento, e o material anunciado não basta para comparar o custo total com edições padrão ou passes ainda não detalhados. Antes de comprar, confira o conteúdo por plataforma e a data local na loja escolhida.`,
    [['King Art Games — anúncio no Steam', 'https://store.steampowered.com/news/app/2272360/view/696530069632321137'], ['THQ Nordic — notícias oficiais', 'https://thqnordic.com/news']],
    0)
];

const imageTerms = 'https://openai.com/policies/terms-of-use/';
const imageCredit = 'Ilustração conceitual original gerada com OpenAI ImageGen — 24/11/2026';
const makeImage = (file, alt, prompt) => ({
  image: `/images/editorial/2026-11-24/${file}`,
  alt: `Ilustração conceitual: ${alt}`,
  credit: imageCredit,
  sourceUrl: imageTerms,
  license: 'Saída gerada; titularidade do usuário conforme os Termos de Uso da OpenAI, sujeita à lei e a direitos de terceiros',
  licenseUrl: imageTerms,
  prompt
});
const enhancements = {
  'gothic-3-classic-review-20261124': {
    cover: makeImage('gothic-3-classic-cover.png', 'Viajante solitário observa uma cidade medieval sitiada e exércitos em lados opostos do vale.', 'Arte editorial conceitual de RPG de fantasia em mundo aberto: continente medieval em guerra, cidade sitiada distante, viajante sem nome visto de costas numa bifurcação, bandeiras de facções e silhuetas orcs, amanhecer nublado, composição horizontal. Não é captura nem arte oficial; sem personagens, logotipos, interface, texto ou marca-d’água.'),
    body: makeImage('gothic-3-classic-road-map.png', 'Mapa antigo, espada e bússola em primeiro plano apontam para estradas que atravessam um reino em conflito.', 'Ilustração conceitual editorial: mapa gasto, espada e bússola sobre marco de pedra, estradas ramificadas para uma região medieval contestada, fitas de facções, luz nublada, composição horizontal. Não é captura nem arte oficial; sem logotipos, interface, texto ou marca-d’água.'),
    affiliate: 'https://www.amazon.com.br/dp/B0FPGF9J2J?tag=bitsplease-20', affiliateLinkType: 'product',
    productName: 'PlayStation 5 Slim Digital 825 GB — pacote ASTRO BOT e Gran Turismo 7',
    productPitch: 'O PS5 roda Gothic 3 Classic. Este link é para o console digital de 825 GB listado pela Amazon com ASTRO BOT e Gran Turismo 7; não é para Gothic 3. Confira a composição do pacote, o vendedor e a disponibilidade antes de comprar.',
    affiliateResearch: { checkedAt: '2026-11-24T07:32:14-03:00', source: 'Amazon Brasil', asin: 'B0FPGF9J2J', verified: 'Página identifica PS5 Slim Digital 825 GB e pacote com ASTRO BOT e Gran Turismo 7.' }
  },
  'phasmophobia-resonance-update-20261124': {
    cover: makeImage('phasmophobia-resonance-cover.png', 'Casa rural abandonada à noite, com uma janela acesa em meio à chuva e neblina.', 'Ilustração conceitual editorial para notícia de atualização de investigação paranormal cooperativa: casa rural abandonada à meia-noite vista de um jardim chuvoso, janela acesa e neblina no gramado, paleta azul-cinza. Não é captura nem arte oficial; sem fantasma reconhecível, logotipo, interface, texto ou marca-d’água.'),
    body: makeImage('phasmophobia-tools.png', 'Investigadores usam uma haste de radiestesia e um sensor de áudio num corredor escuro.', 'Ilustração conceitual editorial de ferramentas de investigação paranormal: mãos com luvas seguram uma haste de radiestesia num corredor antigo, sensor de áudio sobre uma mesa lateral e poeira num feixe estreito de luz, composição horizontal. Não é captura nem arte oficial; sem interface, logotipo, texto ou marca-d’água.'),
    affiliate: 'https://www.amazon.com.br/dp/B0FPGF9J2J?tag=bitsplease-20', affiliateLinkType: 'product',
    productName: 'PlayStation 5 Slim Digital 825 GB — pacote ASTRO BOT e Gran Turismo 7',
    productPitch: 'Phasmophobia tem versão para PS5. O CTA é para o console compatível, não para o jogo; confira o pacote de 825 GB, o vendedor e a oferta na Amazon.',
    affiliateResearch: { checkedAt: '2026-11-24T07:32:14-03:00', source: 'Amazon Brasil', asin: 'B0FPGF9J2J', verified: 'Página identifica PS5 Slim Digital 825 GB.' }
  },
  'gta-vi-playstation-launch-record-20261124': {
    cover: makeImage('gta-vi-launch-record-cover.png', 'Grupo de amigos acompanha numa televisão uma cidade costeira neon, enquanto linhas abstratas conectam jogadores.', 'Ilustração editorial original sobre recorde de lançamento de jogo de mundo aberto no PlayStation: amigos reunidos diante de uma televisão com uma cidade costeira neon fictícia e linhas abstratas conectando silhuetas de jogadores, composição horizontal. Não é captura de GTA VI nem arte oficial; sem logos, personagens, interface, texto ou marca-d’água.'),
    body: makeImage('gta-vi-launch-record-detail.png', 'Mesa de análise com mapa urbano costeiro e linhas de atividade que convergem para a cidade ao anoitecer.', 'Ilustração conceitual editorial para análise de métricas de lançamento: mesa de redação com mapa de uma metrópole costeira refletido no vidro, silhuetas abstratas de jogadores e linhas de atividade, sem números ou rótulos, cidade iluminada à noite. Não é captura nem arte oficial; sem logos, interface, texto ou marca-d’água.'),
    affiliate: 'https://www.amazon.com.br/dp/B0H6KT2RWH?tag=bitsplease-20', affiliateLinkType: 'product',
    productName: 'Grand Theft Auto VI — PlayStation 5 (código para download em caixa)',
    productPitch: 'A matéria discute a estreia de GTA VI no PS5. A página Amazon é para a edição PS5 em formato de código para download, sem disco; confirme formato e disponibilidade antes de comprar.',
    affiliateResearch: { checkedAt: '2026-11-24T08:35:00-03:00', source: 'Amazon Brasil', asin: 'B0H6KT2RWH', verified: 'Página identifica Grand Theft Auto VI para PS5; informa código em caixa, sem disco.' }
  },
  'gta-vi-xbox-cloud-guide-20261124': {
    cover: makeImage('gta-vi-cloud-cover.png', 'Jogador usa controle diante de uma televisão com uma cidade costeira fictícia e símbolo abstrato de nuvem.', 'Ilustração conceitual editorial para guia de Xbox Cloud Gaming: sala aconchegante, jogador com controle, televisão exibindo uma cidade costeira neon genérica e nuvem luminosa sugerindo streaming. Não é captura de GTA VI nem arte oficial; sem marca de console, logotipo, interface, texto ou marca-d’água.'),
    body: makeImage('gta-vi-cloud-guide.png', 'Composição compara um fluxo de servidores em nuvem para uma tela portátil e Remote Play transmitido por um console doméstico.', 'Ilustração conceitual editorial que distingue cloud gaming de Remote Play: de um lado, ondas vindas de servidores alcançam uma tela portátil; do outro, um console doméstico transmite para laptop em outro cômodo, ambos com uma cidade costeira genérica. Sem marcas, interface real, texto ou marca-d’água.'),
    affiliate: 'https://www.amazon.com.br/s?k=console+Xbox+Series+S&tag=bitsplease-20', affiliateLinkType: 'search',
    productName: 'Xbox Series S — opções na Amazon Brasil',
    productPitch: 'O Series S roda GTA VI nativamente e oferece Xbox Cloud Gaming; esta busca é pelo console, não por uma cópia do jogo. Compare vendedor, estado, região, garantia e disponibilidade antes de comprar.',
    affiliateResearch: { checkedAt: '2026-11-24T07:32:14-03:00', source: 'Amazon Brasil', verified: 'Busca etiquetada por console Xbox Series S; nenhuma oferta individual foi fixada.' },
    sourcesExtra: [['Amazon Brasil — busca por console Xbox Series S', 'https://www.amazon.com.br/s?k=console+Xbox+Series+S&tag=bitsplease-20']]
  },
  'gta-vi-first-patch-context-20261124': {
    cover: makeImage('gta-vi-patch-cover.png', 'Notebook mostra um símbolo abstrato de atualização entre duas imagens de uma cidade costeira, uma ensolarada e outra chuvosa.', 'Ilustração editorial conceitual sobre avaliação de atualização de jogo: duas cenas de uma cidade costeira fictícia, tempo claro e tempestade, ferramentas de manutenção e um símbolo abstrato de atualização numa tela. Não é captura de GTA VI nem arte oficial; sem texto legível, logotipos, interface ou marca-d’água.'),
    body: makeImage('gta-vi-patch-detail.png', 'Pessoa revisa uma atualização de jogo num monitor enquanto uma cidade costeira chuvosa aparece refletida na tela.', 'Ilustração editorial original sobre primeiro patch de jogo: mãos de desenvolvedor revisam barra abstrata de atualização num monitor, reflexo de cidade costeira chuvosa e formas simples sugerindo correção de bugs, composição horizontal. Sem texto legível, marcas, interface real ou marca-d’água.'),
    affiliate: 'https://www.amazon.com.br/dp/B0H6KT2RWH?tag=bitsplease-20', affiliateLinkType: 'product',
    productName: 'Grand Theft Auto VI — PlayStation 5 (código para download em caixa)',
    productPitch: 'A oferta encontrada é GTA VI para PS5 em formato de código para download, sem disco. Confira o formato, plataforma e disponibilidade antes de comprar.',
    affiliateResearch: { checkedAt: '2026-11-24T08:35:00-03:00', source: 'Amazon Brasil', asin: 'B0H6KT2RWH', verified: 'Página identifica Grand Theft Auto VI para PS5; informa código em caixa, sem disco.' }
  },
  'diablo-iv-developer-stream-20261124': {
    cover: makeImage('diablo-iv-stream-cover.png', 'Adaga sobre um pedestal de pedra numa sala de transmissão, com um portal para um covil de fantasia sombria ao fundo.', 'Ilustração conceitual editorial para notícia de transmissão de desenvolvedores de RPG de fantasia sombria: adaga prateada sobre pedestal, covil demoníaco abstrato ao fundo e luzes discretas de estúdio ao vivo. Não é arte oficial de Diablo IV; sem personagens reconhecíveis, logotipos, texto, interface ou marca-d’água.'),
    body: makeImage('diablo-iv-two-bosses.png', 'Dois chefes sombrios ocupam lados opostos de uma arena circular com artefatos mágicos no chão.', 'Ilustração conceitual editorial de arena de fantasia sombria com duas silhuetas de chefes frente a frente e aventureiros ao longe, artefatos mágicos brilhando no piso circular, composição horizontal. Não é captura nem arte oficial de Diablo IV; sem personagens identificáveis, logo, interface, texto ou marca-d’água.'),
    affiliate: 'https://www.amazon.com.br/dp/B0FPGF9J2J?tag=bitsplease-20', affiliateLinkType: 'product',
    productName: 'PlayStation 5 Slim Digital 825 GB — pacote ASTRO BOT e Gran Turismo 7',
    productPitch: 'Diablo IV está disponível para PS5. O link leva ao console, não ao jogo; confira o pacote, o vendedor e a disponibilidade na Amazon.',
    affiliateResearch: { checkedAt: '2026-11-24T07:32:14-03:00', source: 'Amazon Brasil', asin: 'B0FPGF9J2J', verified: 'Página identifica PS5 Slim Digital 825 GB.' }
  },
  'steam-awards-2026-nominations-20261124': {
    cover: makeImage('steam-awards-cover.png', 'Jogadores avaliam pequenos mundos de jogos numa mesa comunitária de indicações, com troféu abstrato ao centro.', 'Ilustração editorial original sobre indicações comunitárias a prêmio de jogos para PC: mesa iluminada, pessoas considerando pequenos dioramas de mundos de jogo e cartões de votação sem texto, composição horizontal. Sem marca Steam ou Valve, sem personagens conhecidos, sem watermark.'),
    body: makeImage('steam-awards-voting.png', 'Grupo de jogadores posiciona fichas em mundos de jogos em miniatura, simbolizando indicações e votação final.', 'Ilustração editorial conceitual sobre diferença entre indicar e votar num prêmio de jogos: grupo diverso escolhe fichas ao lado de dioramas de jogos abstratos, ambiente acolhedor, composição horizontal. Sem texto, marcas, personagens conhecidos ou watermark.'),
    affiliate: 'https://www.amazon.com.br/s?k=Steam+Deck+console+portatil&tag=bitsplease-20', affiliateLinkType: 'search',
    productName: 'Steam Deck — busca por console portátil para jogos Steam',
    productPitch: 'O Steam Deck é um PC portátil projetado para a biblioteca Steam. Esta busca é por hardware para jogar títulos da plataforma; a compatibilidade de cada jogo varia e deve ser conferida antes da compra.',
    affiliateResearch: { checkedAt: '2026-11-24T07:32:14-03:00', source: 'Amazon Brasil', verified: 'Busca etiquetada por Steam Deck/console portátil; produto importado pode variar por vendedor.' },
    sourcesExtra: [['Amazon Brasil — busca por Steam Deck', 'https://www.amazon.com.br/s?k=Steam+Deck+console+portatil&tag=bitsplease-20']]
  },
  'aion2-season2-roadmap-20261124': {
    cover: makeImage('aion2-brawler-cover.png', 'Lutadora de fantasia com manoplas observa uma cidade elevada entre nuvens ao nascer do sol.', 'Ilustração conceitual editorial sobre classe Brawler em MMORPG: lutadora com manoplas simples numa varanda de pedra, cidade fantástica elevada entre nuvens ao amanhecer, composição horizontal. Não é arte oficial de AION 2; sem personagens, símbolos, logotipos, interface, texto ou marca-d’água.'),
    body: makeImage('aion2-housing-roadmap.png', 'Pequena casa com jardim numa ilha flutuante acima das nuvens, com cidade fantástica ao longe.', 'Ilustração conceitual editorial sobre sistema de moradia em MMORPG: ilha flutuante com casa de madeira, jardim e canal de água, cidade fantástica e montanhas distantes, clima sereno, composição horizontal. Não é arte oficial de AION 2; sem logos, símbolos, interface, texto ou marca-d’água.'),
    affiliate: 'https://www.amazon.com.br/s?k=notebook+gamer+Windows&tag=bitsplease-20', affiliateLinkType: 'search',
    productName: 'Notebook gamer com Windows — opções na Amazon Brasil',
    productPitch: 'O roteiro global de AION 2 é para PC Windows; este CTA busca notebooks para jogos nessa plataforma, não o jogo. Confira os requisitos oficiais e as especificações do modelo antes de comprar.',
    affiliateResearch: { checkedAt: '2026-11-24T07:32:14-03:00', source: 'Amazon Brasil', verified: 'Busca etiquetada por notebook gamer Windows; não foi fixado um modelo sem requisitos confirmados.' },
    sourcesExtra: [['Amazon Brasil — busca por notebook gamer Windows', 'https://www.amazon.com.br/s?k=notebook+gamer+Windows&tag=bitsplease-20']]
  },
  'sea-of-remnants-xbox-beta-20261124': {
    cover: makeImage('sea-of-remnants-cover.png', 'Navio à vela cruza entre ilhas enevoadas ao amanhecer, visto da costa.', 'Ilustração conceitual editorial para beta de jogo roguelike naval por turnos: navio à vela envelhecido navega entre ilhas enevoadas ao amanhecer, tripulação em silhuetas pequenas, composição horizontal. Não é arte oficial de Sea of Remnants; sem personagens, logos, texto, interface ou marca-d’água.'),
    body: makeImage('sea-of-remnants-beta-detail.png', 'Navegadora estuda um mapa de ilhas e marcadores de rota no convés de um navio.', 'Ilustração conceitual editorial sobre beta de jogo naval: navegadora observa mapa com ilhas e marcadores de rota sobre mesa no convés, mar agitado e porto ao longe, luz de tempestade se abrindo, composição horizontal. Não é arte oficial; sem interface, logotipos, texto ou marca-d’água.'),
    affiliate: 'https://www.amazon.com.br/s?k=console+Xbox+Series+X&tag=bitsplease-20', affiliateLinkType: 'search',
    productName: 'Xbox Series X — opções na Amazon Brasil',
    productPitch: 'O teste Dawnbreaker anunciado é para Xbox Series X; esta busca é pelo console compatível, não pelo jogo. Confirme vendedor, região, garantia e se o modelo atende à fase beta antes de comprar.',
    affiliateResearch: { checkedAt: '2026-11-24T07:32:14-03:00', source: 'Amazon Brasil', verified: 'Busca etiquetada por console Xbox Series X; nenhuma oferta individual foi fixada.' },
    sourcesExtra: [['Amazon Brasil — busca por console Xbox Series X', 'https://www.amazon.com.br/s?k=console+Xbox+Series+X&tag=bitsplease-20']]
  },
  'dawn-of-war-iv-commander-edition-20261124': {
    cover: makeImage('dawn-of-war-iv-cover.png', 'Tropas futuristas de armadura avançam em direção a uma catedral em ruínas sob céu alaranjado.', 'Ilustração conceitual editorial para estratégia de ficção científica sombria: soldados futuristas em armaduras vermelho e dourado avançam contra catedral gótica destruída sob céu enfumaçado, silhueta de máquina de guerra ao longe. Não é arte oficial de Warhammer 40,000; sem insígnias reconhecíveis, personagens, logotipo, texto, interface ou marca-d’água.'),
    body: makeImage('dawn-of-war-iv-editions.png', 'Mapa de campanha concluído ao lado de duas caixas lacradas com símbolos abstratos e uma ampulheta.', 'Ilustração editorial conceitual sobre edições de jogo e expansão futura: mapa de campanha de estratégia sci-fi, duas caixas lacradas com símbolos abstratos e ampulheta, ambiente de batalha em tons escuros. Não reproduz iconografia protegida, personagens, logos, interface, texto ou watermark.'),
    affiliate: 'https://www.amazon.com.br/s?k=notebook+gamer+Windows&tag=bitsplease-20', affiliateLinkType: 'search',
    productName: 'Notebook gamer com Windows — opções na Amazon Brasil',
    productPitch: 'Dawn of War IV foi anunciado para PC Windows via Steam; não há console anunciado. Esta busca é por hardware PC compatível, não pelo jogo; compare os requisitos oficiais com cada modelo antes de comprar.',
    affiliateResearch: { checkedAt: '2026-11-24T07:32:14-03:00', source: 'Amazon Brasil', verified: 'Busca etiquetada por notebook gamer Windows; nenhum modelo foi recomendado sem comparar requisitos.' },
    sourcesExtra: [['Amazon Brasil — busca por notebook gamer Windows', 'https://www.amazon.com.br/s?k=notebook+gamer+Windows&tag=bitsplease-20']]
  }
};

export const dailyPosts20261124WithMedia = dailyPosts20261124.map(post => {
  const data = enhancements[post.id];
  if (!data) return post;
  const { cover, body, sourcesExtra = [], ...offer } = data;
  const { prompt: coverPrompt, ...coverImage } = cover;
  const { prompt: bodyPrompt, ...inlineImage } = body;
  return {
    ...post,
    image: coverImage.image,
    imageAlt: coverImage.alt,
    imageSource: coverImage.credit,
    imageSourceUrl: coverImage.sourceUrl,
    imageLicense: coverImage.license,
    imageLicenseUrl: coverImage.licenseUrl,
    inlineImage,
    imageResearch: {
      checkedAt: '2026-11-24T07:20:00-03:00',
      method: 'Ilustrações conceituais originais geradas individualmente com OpenAI ImageGen; não são capturas, fotos reais ou artes oficiais. Arquivos distintos, com prompts registrados.',
      assets: [
        { file: cover.image, tool: 'OpenAI ImageGen', prompt: coverPrompt },
        { file: body.image, tool: 'OpenAI ImageGen', prompt: bodyPrompt }
      ]
    },
    ...offer,
    sources: [...post.sources, { label: 'OpenAI — Termos de Uso para saída gerada', url: imageTerms }, ...sourcesExtra.map(([label, url]) => ({ label, url })), { label: `Amazon Brasil — ${offer.productName}`, url: offer.affiliate }]
  };
});

// Keep the exported name imported by the editorial pipeline, with media and offer data applied.
