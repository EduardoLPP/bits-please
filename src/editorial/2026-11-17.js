import { completeGeneratedMedia20261117 } from './generatedMedia20261117.js';
const checkedAt = '2026-11-17T07:48:00-03:00';
const source = (label, url) => ({ label, url });
const xboxRules = 'https://www.xbox.com/en-US/developers/rules';
const pass = 'https://news.xbox.com/pt-br/2026/11/03/xbox-game-pass-novembro-2026-wave-1/';
function draft({ scores, reason, imageQuery, imageNotes, product, affiliateQuery, ...post }) {
  return completeGeneratedMedia20261117({
    ...post, category: 'GAMES', section: post.section || 'NOTÍCIAS', status: 'draft',
    date: '17 nov 2026', read: `${Math.max(2, Math.ceil(post.body.split(/\s+/).length / 180))} min`,
    relevanceDate: '2026-11-17', relevanceUpdatedAt: checkedAt,
    relevanceScore: scores.reduce((sum, score) => sum + score, 0),
    relevanceBreakdown: Object.fromEntries(['timeliness', 'publicInterest', 'reach', 'sourceReliability', 'brazilUtility'].map((key, index) => [key, scores[index]])),
    relevanceReason: reason,
    relevanceSignals: post.sources.map(item => ({ ...item, sameDayVerified: false })),
    imageResearch: { query: imageQuery, checkedAt, status: 'no-commercial-pair-verified', sources: post.sources, notes: imageNotes, assets: [] },
    affiliateResearch: { product, query: affiliateQuery, checkedAt, tag: 'bitsplease-20', status: 'destination-unverified', notes: 'Busca individual realizada. Nenhum destino Amazon Brasil da oferta exata foi confirmado; resultados intermediários não validam ASIN, preço ou estoque. Foto de produto opcional.' },
    draftNotes: `Faltam duas imagens distintas, com correspondência e uso comercial verificados, e uma oferta Amazon pertinente com destino confirmado. Ilustrações conceituais contextualizadas de IA são alternativa autorizada, mas ainda não foram produzidas para este lote. ${post.draftNotes || ''} Sem sinal com publicação em 17/11 no fuso America/Sao_Paulo confirmado; componentes diários zerados.`,
  });
}

export const dailyPosts20261117 = [
  draft({
    id: 'xbox-black-friday-2026-calendario-regiao', tag: 'Xbox · Black Friday · região',
    title: 'Black Friday do Xbox tem calendário anunciado; ofertas dos EUA não confirmam preços no Brasil',
    excerpt: 'Campanha americana começa em 19 de novembro no horário do Pacífico. Confira região, edição e licença antes de comparar descontos.',
    scores: [0, 0, 19, 14, 10],
    reason: 'Anúncio primário de 16/11, com condições regionais explícitas; amplo alcance e utilidade de compra. Sem sinal novo de 17/11 confirmado.',
    body: `A Microsoft anunciou a campanha de Black Friday do Xbox para 19 de novembro a 2 de dezembro de 2026. O texto do Xbox Wire, publicado no dia 16, fala em mais de dois mil jogos e descontos de até 80%. Esses números descrevem a campanha anunciada pela empresa; não significam que todo jogo receberá o desconto máximo.

Há uma ressalva que muda a leitura para brasileiros: a publicação informa expressamente que os descontos listados são dos Estados Unidos. A seleção inclui Forza Horizon 6, Gears of War: E-Day, Madden NFL 27 e NBA 2K27, mas os percentuais americanos não confirmam preço em reais ou disponibilidade na conta brasileira.

O horário também pede atenção. A abertura anunciada é às 21h PST de 19 de novembro, equivalente a 2h de 20 de novembro em São Paulo. Essa conversão descreve o início informado para a campanha americana; não estabelece um horário brasileiro de promoção. O comunicado ainda prevê ofertas adicionais a partir do dia 23.

Na hora de comparar, coloque lado a lado a edição exata e o conteúdo incluído. Uma Premium Edition pode reunir extras diferentes de um pacote padrão; um complemento pode exigir o jogo base. Confira também se o item comprado é para console ou computador e se já está acessível pela assinatura que você mantém.

A recomendação editorial é esperar a condição local aparecer antes de tratar a campanha como oportunidade concreta. Não confirmamos preço, estoque ou menor valor histórico no Brasil. O anúncio é útil para organizar a pesquisa de compras, mas ainda não sustenta uma lista de melhores ofertas brasileiras.`,
    sources: [source('Xbox Wire — campanha, horário e restrição aos EUA', 'https://news.xbox.com/en-us/2026/11/16/xbox-black-friday-sale-2026/')],
    imageQuery: 'Xbox Black Friday 2026 official', imageNotes: 'Busca devolveu banners de 2021 a 2025 e preços mexicanos. Rejeitados como representação da campanha atual. Artes do comunicado localizadas; regras gerais Xbox não confirmam licença deste portal monetizado.',
    product: 'Jogo ou acessório da campanha com oferta brasileira exata', affiliateQuery: 'site.amazon.com.br Xbox Game Pass Premium',
  }),
  draft({
    id: 'ffxiv-road-evercold-30-dias-condicoes', tag: 'Final Fantasy XIV · retorno · assinatura',
    title: 'Final Fantasy XIV oferece até 30 dias de retorno: veja quem pode participar',
    excerpt: 'Campanha exige licença registrada, ausência de tempo de jogo e pelo menos 150 dias desde o fim do último período. Não é uma oferta geral para novos jogadores.',
    scores: [0, 0, 18, 14, 9], reason: 'Condições oficiais abertas e confrontadas com cobertura de retorno; campanha iniciada em 16/11, sem nova publicação de hoje confirmada.',
    body: `A campanha The Road to Evercold oferece até 30 dias de acesso gratuito a jogadores que se afastaram de Final Fantasy XIV. A Square Enix exige que o participante tenha comprado e registrado o jogo, que todas as contas de serviço registradas estejam sem tempo de jogo e que tenham passado pelo menos 150 dias desde o fim da assinatura mais recente ou do período gratuito aplicável.

Não se trata de trinta dias para qualquer pessoa que crie uma conta. A página oficial separa essa ação do teste gratuito e apresenta requisitos de elegibilidade. Antes de planejar o retorno, consulte as regras na conta de serviço que você realmente usa.

O calendário norte-americano vai de 16 de novembro de 2026, à meia-noite PST, a 14 de janeiro de 2027, às 6h59 PST. Em São Paulo, esses marcos correspondem a 5h e 11h59, respectivamente. O período da campanha e o tempo individual de acesso são coisas diferentes: o contador começa no primeiro login e segue correndo, mesmo fora do jogo.

Há ainda um produto separado, Tales of Adventure: Winter’s Prelude, para avançar trechos da história. Ele não é o benefício gratuito de login. A Square Enix informa exigências próprias, incluindo conclusão de Endwalker; comprar esse item sem conferir personagem, expansão registrada e nível pode frustrar o objetivo do retorno.

Nossa leitura é que a campanha serve melhor a quem já sabe quando poderá jogar. Recuperar acesso à conta e atualizar o cliente antes de organizar sessões evita desperdiçar parte da janela. Não testamos o processo de reativação e não confirmamos oferta Amazon Brasil de tempo de jogo ou expansão compatível com cada região.`,
    sources: [source('Square Enix — elegibilidade e calendário PST', 'https://na.finalfantasyxiv.com/evercoldcampaign/'), source('Warp Pipes — contador de tempo e contexto da campanha', 'https://warppipes.com/en/articles/video-game-news-digest-2026-11-17')],
    imageQuery: 'Final Fantasy XIV Road Evercold free login', imageNotes: 'Resultados misturam campanhas antigas de 96 horas e artes de Evercold. Não usar banner de fevereiro/maio para benefício de novembro. Par com licença comercial não confirmado.',
    product: 'Expansão ou tempo de jogo FFXIV compatível com região da conta', affiliateQuery: 'site.amazon.com.br Final Fantasy XIV Dawntrail',
  }),
  draft({
    id: 'nba-2k27-vice-city-season-3-gta-beneficios', tag: 'NBA 2K27 · Vice City · temporada 3',
    title: 'NBA 2K27 leva Vice City às quadras em 27 de novembro',
    excerpt: 'Temporada terá parque temático e edição digital com Bam Adebayo. Acesso via GTA+ tem plataformas e prazo específicos.',
    scores: [0, 0, 20, 15, 8], reason: 'Comunicado 2K de 16/11 confirmado por Shacknews. Cruzamento de franquias de grande alcance; nenhum sinal publicado hoje confirmado.',
    body: `NBA 2K27 receberá uma temporada inspirada em Vice City a partir de 27 de novembro. A parceria entre 2K e Rockstar foi anunciada em 16 de novembro e inclui um parque temático em The City, roupas e recompensas ligadas ao universo de GTA. A Shacknews confirmou o anúncio a partir do comunicado da publicadora.

A temporada 3 vai até 15 de janeiro de 2027. O cenário de basquete terá quadras à beira da praia, hotéis em tons pastel e iluminação neon. Isso é conteúdo temático dentro de NBA 2K27; não equivale a acesso a GTA VI nem demonstra funções compartilhadas entre os dois jogos.

Uma Vice City Edition digital coloca Bam Adebayo na capa e será oferecida durante essa janela para PS5, Xbox Series X|S, Switch 2 e PC. O comunicado lista conteúdo adicional, como o Pro Pass da temporada. Não confirmamos preço brasileiro, e o preço em dólares divulgado pela 2K não deve ser convertido em promessa de oferta local.

O benefício de GTA+ é mais restrito: assinantes em PS5 e Xbox Series X|S poderão jogar a Standard Edition de NBA 2K27 sem custo adicional durante o período informado. A presença de Switch 2 e PC na edição digital não estende automaticamente a esses aparelhos o benefício de GTA+.

Para quem já possui o jogo, a decisão é conferir o que a temporada disponibiliza e o que pertence ao passe pago antes de comprar outra edição. Para novos jogadores, vale separar acesso temporário por assinatura de uma licença comprada. Nenhuma dessas condições justifica prometer propriedade permanente depois de encerrado o benefício.`,
    sources: [source('2K Newsroom — temporada, edição e GTA+', 'https://newsroom.2k.com/news/vice-city-comes-to-nbar-2k27-in-season-3'), source('Shacknews — confirmação do anúncio', 'https://canary.shacknews.com/article/151367/nba-2k27-gta-6-vice-city')],
    imageQuery: 'NBA 2K27 Vice City season 3', imageNotes: 'Key art na 2K localizada. Não usar capas de NBA 2K26 ou representar a edição padrão como Vice City Edition. Permissão comercial para par final não confirmada.',
    product: 'NBA 2K27 para PS5, edição explicitamente identificada', affiliateQuery: 'site.amazon.com.br NBA 2K27 PS5',
  }),
  draft({
    id: 'review-star-wars-galactic-racer-pesquisa-2026', section: 'REVIEWS', tag: 'Star Wars: Galactic Racer · análise baseada em pesquisa',
    title: 'Review: Star Wars Galactic Racer faz da velocidade uma decisão de risco',
    excerpt: 'Estrutura de corridas encadeadas e controle de calor sustentam a proposta. Análise baseada em pesquisa, sem teste próprio e sem nota.',
    scores: [0, 0, 20, 15, 8], reason: 'Lançamento de outubro com reviews detalhadas de PC e PS5 e vitrine editorial ampla. Não é título obscuro; não há sinal novo do dia confirmado.',
    body: `Esta review de Star Wars: Galactic Racer é uma análise editorial baseada em pesquisa. O Bits, Please não testou o jogo e não atribui nota. Consultamos a página brasileira de PS5 e as avaliações de PC Gamer e GamesRadar; as experiências descritas por esses veículos pertencem aos respectivos autores.

Lançado em 6 de outubro de 2026 para PC, PS5 e Xbox Series X|S, o jogo da Fuse Games procura uma identidade além de recriar a corrida de A Ameaça Fantasma. Na avaliação de PC Gamer, a cultura de pilotos e rivais situa a competição entre O Retorno de Jedi e O Despertar da Força. O interesse está em correr por esse universo, sem exigir que cada disputa seja uma visita a uma cena conhecida do cinema.

O sistema de aceleração concentra a escolha mais interessante. PC Gamer descreve um impulso moderado com recarga e outro mais potente que pode superaquecer. Água, calor e efeitos de pista interferem nesse equilíbrio. Nossa leitura é que essa camada dá à velocidade uma consequência legível: arriscar mais pode custar a continuidade da corrida.

As provas encadeadas e melhorias aproximam a campanha de uma estrutura roguelite. GamesRadar elogia a combinação e a sensação de velocidade, mas aponta perda de fôlego no fim da campanha e vontade de ver mais planetas e pistas. A ressalva ajuda a calibrar expectativa de variedade, sem transformar duração em medida automática de qualidade.

O veredito editorial favorece quem sente falta de corrida arcade e aceita aprender sistemas ao longo de tentativas. Quem procura um simulador ou precisa de competição local deve conferir os modos disponíveis na versão atual antes de comprar. Não extrapolamos observações de PC para desempenho no PS5, não medimos quadros por segundo e não tratamos recursos prometidos para futuras atualizações como já entregues.`,
    sources: [source('PlayStation Store Brasil — edição PS5', 'https://store.playstation.com/pt-br/concept/10014146/'), source('PC Gamer — análise da versão PC', 'https://www.pcgamer.com/games/racing/star-wars-galactic-racer-review/'), source('GamesRadar — análise e limitações da campanha', 'https://www.gamesradar.com/games/racing/star-wars-galactic-racer-review/')],
    imageQuery: 'Star Wars Galactic Racer gameplay', imageNotes: 'Capturas nas reviews localizadas, creditadas à Secret Mode. Crédito não é licença de reprodução. Site do jogo não abriu; nenhum par comercial aprovado ou baixado.',
    product: 'Star Wars: Galactic Racer, edição PS5', affiliateQuery: 'site.amazon.com.br Star Wars Galactic Racer PS5',
  }),
  draft({
    id: 'outer-worlds-2-side-effects-respec-dlc', tag: 'The Outer Worlds 2 · expansão · atualização',
    title: 'The Outer Worlds 2 separa expansão paga de mudança gratuita no personagem',
    excerpt: 'Side Effects Guaranteed chega em 2 de dezembro. Redistribuição de atributos virá também para quem não comprar a expansão.',
    scores: [0, 0, 17, 14, 9], reason: 'Detalhamento da Obsidian em 10/11; cobertura independente localizada, mas página retornou restrição de acesso. Sem novidade publicada hoje.',
    body: `The Outer Worlds 2 receberá Side Effects Guaranteed em 2 de dezembro de 2026. A Obsidian apresenta o conteúdo como a primeira parte de uma expansão narrativa em dois capítulos. O segundo está previsto para a primavera de 2027 no calendário do hemisfério norte; não há dia confirmado nessa apresentação.

A diferença prática é que nem tudo anunciado depende de comprar o DLC. Junto ao lançamento, uma atualização para todos permitirá redistribuir a construção do personagem. Também haverá uma opção de partida personalizada para ajustar pontos de habilidade por nível. O anúncio separa essas funções do novo arco pago, sem exigir que o leitor compre a expansão para reorganizar o personagem.

Side Effects Guaranteed leva a história a Elysium Valley e envolve uma disputa pelo futuro da organização Sub Rosa. A publicadora descreve cinco armas, novos benefícios e defeitos, além de aumento do limite de nível para 36. São características anunciadas; não fizemos uma avaliação da campanha nem da utilidade de cada arma.

O ponto de entrada pode facilitar a vida de quem já terminou o jogo. A história é acionada antes do ponto sem retorno, mas haverá uma opção no menu para começar diretamente com um personagem de nível 27 e distribuir habilidades. Isso evita presumir que todos precisarão refazer uma campanha completa para conhecer o conteúdo.

Para planejar a compra, confira se a edição que você possui já inclui a expansão. A Obsidian cita Premium Edition e Premium Edition Upgrade entre os caminhos de acesso. Não confirmamos preço brasileiro ou oferta Amazon correspondente. Como as decisões do primeiro capítulo terão efeitos no seguinte, a conclusão desse arco ainda depende de conteúdo futuro.`,
    sources: [source('Obsidian no PlayStation Blog — conteúdo pago e atualização para todos', 'https://blog.playstation.com/2026/11/10/the-outer-worlds-2s-first-dlc-arrives-december-2/'), source('Steam — comunicados do jogo', 'https://steamcommunity.com/app/1449110/announcements/?l=latam')],
    imageQuery: 'Outer Worlds 2 Side Effects Guaranteed', imageNotes: 'Artes do jogo base e trailer da expansão encontrados. Não confundir cenas antigas com Elysium Valley. Licença de uso comercial do par ainda não confirmada.',
    product: 'The Outer Worlds 2, edição que identifique corretamente o conteúdo incluso', affiliateQuery: 'site.amazon.com.br Outer Worlds 2 PS5',
  }),
  draft({
    id: 'aphelion-game-pass-premium-17-novembro', tag: 'Aphelion · Game Pass Premium · Brasil',
    title: 'Aphelion chega ao Game Pass Premium; a data não é a estreia do jogo',
    excerpt: 'Calendário brasileiro distingue a entrada no Premium do acesso já disponível no Ultimate e PC Game Pass.',
    scores: [0, 0, 15, 15, 10], reason: 'Calendário brasileiro oficial de 3/11 confirma mudança de plano em 17/11. Evento de hoje não equivale a sinal publicado hoje; pontuação diária zero.',
    body: `Aphelion está no calendário de 17 de novembro para o Game Pass Premium. A publicação brasileira do Xbox Wire usa a expressão “agora no Game Pass Premium” e informa que o jogo já estava disponível no Ultimate e no PC Game Pass. Portanto, a novidade é a ampliação do acesso por plano, não um lançamento inédito do título.

Essa distinção evita uma compra ou troca de assinatura desnecessária. Se você já tinha acesso pelo plano anterior, a entrada no Premium não representa uma nova versão, campanha adicional ou atualização técnica. O calendário lista nuvem, Xbox Series X|S, portátil e PC; ele não anuncia uma edição nativa para Xbox One.

Desenvolvido pela Don’t Nod, Aphelion é uma aventura de ficção científica em terceira pessoa. A sinopse oficial acompanha Ariane e Thomas após um pouso forçado em um planeta congelado. O material também destaca colaboração com a Agência Espacial Europeia. Isso descreve o projeto e sua proposta; não é uma certificação de realismo de cada situação apresentada pelo jogo.

A cobertura de Windows Central reproduz a data no contexto da seleção de novembro. O texto brasileiro é a referência mais direta para interpretar o plano, porque a mesma data em uma lista internacional pode parecer um lançamento comum quando a observação sobre acesso anterior desaparece.

Antes de mudar de plano, confira a opção de jogar na conta brasileira e no aparelho pretendido. Instalar no PC, transmitir pela nuvem e jogar no console são formas de acesso diferentes. Não medimos desempenho, não verificamos liberação minuto a minuto e não confirmamos horário local para a mudança do catálogo. A informação útil é o plano contemplado, com a região devidamente identificada.`,
    sources: [source('Xbox Wire Brasil — plano e plataformas', pass), source('Windows Central — calendário da seleção', 'https://www.windowscentral.com/gaming/xbox/xbox-game-pass-is-stacking-november-with-warhammer-vampire-survivors-chaos-football-manager-and-more')],
    imageQuery: 'Aphelion Game Pass', imageNotes: 'Capturas e artes da aventura localizadas. Não usar fotografia astronômica de afélio ou banner genérico de Game Pass. Licença específica de duas imagens não confirmada.',
    product: 'Assinatura Game Pass Premium para região brasileira', affiliateQuery: 'site.amazon.com.br Aphelion jogo',
  }),
  draft({
    id: 'nintendo-eshop-presentes-grupo-familiar-regiao', tag: 'Nintendo eShop · presentes digitais · região',
    title: 'Nintendo anuncia presentes digitais na eShop; confirmação brasileira ainda exige cuidado',
    excerpt: 'Página da Malásia descreve envio a membros do grupo familiar no Switch e Switch 2. Não há confirmação regional brasileira nas fontes abertas.',
    scores: [0, 0, 20, 12, 8], reason: 'Nintendo Malásia exibe 17/11, mas sem horário para converter ao fuso brasileiro e sem confirmação local. Grande alcance; confiabilidade regional reduzida.',
    body: `A Nintendo publicou em seu site da Malásia uma nova função para presentear integrantes do grupo familiar com produtos digitais da eShop. A página traz a data de 17 de novembro de 2026 e cita Nintendo Switch e Switch 2. Como a fonte é regional, ela não basta para afirmar que a mesma função já está disponível em toda conta brasileira.

O procedimento descrito começa na página do produto dentro da eShop do aparelho. O comprador marca a opção de presente, escolhe uma pessoa do grupo familiar e conclui a compra. O envio é imediato, segundo a página; por isso, o recurso não deve ser tratado como agendamento para aniversário ou outra data futura.

O anúncio exige sistema na versão 23.5.0 ou superior e informa que jogos, DLCs e pacotes de melhoria elegíveis poderão participar. “Elegível” é a palavra decisiva: alguns produtos ficam de fora. Contas supervisionadas não podem enviar presentes, e há limite para compras desse tipo em determinado período.

Grupo familiar também não deve ser confundido com uma promessa de compartilhamento irrestrito da biblioteca. A função descrita envolve uma compra enviada a um destinatário. Não encontramos nessa página autorização para presentear qualquer conta fora do grupo ou para contornar restrições de região.

Para brasileiros, o passo útil é verificar suporte regional e a presença da opção no produto desejado antes de comprar saldo. Não confirmamos disponibilidade na eShop brasileira, limites numéricos de envio ou compatibilidade de cartões estrangeiros. A data visível na página não tem horário, portanto também não certifica o instante de publicação em São Paulo.`,
    sources: [source('Nintendo Malásia — função e restrições', 'https://www.nintendo.com/my/news/article/5VaB0ZpbJUMepFqbUq5tMi'), source('Warp Pipes — contexto regional anterior', 'https://warppipes.com/en/articles/video-game-news-digest-2026-11-17')],
    imageQuery: 'Nintendo eShop gifting family 2026', imageNotes: 'Capturas de grupos familiares não demonstram disponibilidade brasileira. Diretrizes Nintendo de compartilhamento não autorizam automaticamente portal comercial. Sem par aprovado.',
    product: 'Saldo Nintendo eShop brasileiro, somente após verificar aplicação regional', affiliateQuery: 'site.amazon.com.br Nintendo eShop Brasil cartao',
    draftNotes: 'Confirmar disponibilidade e regras no suporte brasileiro; não promover a tutorial local antes dessa checagem.',
  }),
  draft({
    id: 'guild-saga-ps5-maio-2027-combate', tag: 'Guild Saga: Vanished Worlds · PS5 · RPG tático',
    title: 'Guild Saga chega ao PS5 em maio de 2027 com foco em combinações de habilidades',
    excerpt: 'RPG tático permite misturar disciplinas e usar clima e superfícies. Dia exato e desempenho no console ainda não foram apresentados.',
    scores: [0, 0, 9, 14, 7], reason: 'Anúncio do desenvolvedor de 13/11 e comunicado de imprensa abertos. Alcance moderado, sem presumir métricas de popularidade ou interesse de hoje.',
    body: `Guild Saga: Vanished Worlds tem lançamento anunciado para PS5 em maio de 2027. A Ocelot Technologies apresentou a versão no PlayStation Blog em 13 de novembro; o comunicado distribuído à imprensa situa a chegada ao console junto da versão 1.0 no Steam. Ainda falta um dia exato para marcar no calendário.

O RPG tático leva um personagem recém-chegado à Heroes Guild ao arquipélago Respite. A descrição do estúdio coloca exploração, companheiros e conflitos locais ao lado das batalhas por turnos. É uma apresentação do jogo em desenvolvimento, sem teste próprio desta versão de console pelo Bits, Please.

O elemento mais concreto é a liberdade para combinar disciplinas. O exemplo oficial usa uma invocação de mandrágora, chuva para fortalecê-la e eletricidade nas poças para afetar quem pisa ali. A ideia é fazer clima e superfícies entrarem na decisão tática, em vez de funcionarem apenas como decoração.

O comunicado de imprensa descreve a edição completa com conteúdo acumulado no acesso antecipado do PC, incluindo regiões e atividades adicionais. A formulação não comprova que cada captura existente na internet represente a versão final de PS5; materiais antigos continuam pertencendo a builds anteriores.

Nossa leitura editorial é que vale acompanhar uma demonstração mais longa para entender se as combinações têm consequências interessantes em encontros diferentes. Quantidade de habilidades, por si só, não mede equilíbrio. Até haver avaliação da versão final, não é adequado prometer fluidez, interface confortável no controle ou duração de campanha. Preço brasileiro, idiomas finais e oferta Amazon pertinente também não foram confirmados nesta apuração.`,
    sources: [source('Ocelot no PlayStation Blog — mecânicas e janela', 'https://blog.playstation.com/2026/11/13/guild-saga-vanished-worlds-brings-tactical-adventure-to-ps5-in-may-2027/'), source('Comunicado da Ocelot distribuído via Games Press — versão completa', 'https://www.gamespress.com/Tactical-adventure-Guild-Saga-Vanished-Worlds-launches-on-PS5-in-May-2')],
    imageQuery: 'Guild Saga Vanished Worlds PS5', imageNotes: 'Busca encontrou captura Steam 0.4.3 e artes oficiais. Não atribuir captura de acesso antecipado à versão final PS5. Reutilização comercial do par não confirmada.',
    product: 'Guild Saga na plataforma exata, se houver oferta oficial pertinente', affiliateQuery: 'site.amazon.com.br Guild Saga Vanished Worlds',
  }),
  draft({
    id: 'candy-crush-xbox-25-game-on-musica', tag: 'Candy Crush Saga · Xbox 25 anos · música',
    title: 'Candy Crush celebra os 25 anos do Xbox com pins e novas versões de temas clássicos',
    excerpt: 'Game On reúne oito franquias e seis arranjos musicais. Temporada segue até 6 de dezembro, segundo o anúncio oficial.',
    scores: [0, 0, 18, 15, 6], reason: 'Anúncio King de 12/11 confirmado por Windows Central. Franquias amplas, mas sem novidade publicada em 17/11 nem dados de adesão.',
    body: `A temporada Game On de Candy Crush Saga reúne referências de oito franquias para celebrar os 25 anos do Xbox. Halo, Fallout, Sea of Thieves, Forza, DOOM, Banjo-Kazooie, Crash Bandicoot e Spyro aparecem na coleção de pins e nos elementos visuais apresentados pela King. O anúncio oficial informa que a temporada vai até 6 de dezembro de 2026 em iOS e Android.

Os pins são obtidos ao progredir pelos níveis, segundo a explicação da empresa. Personagens de Candy Crush recebem roupas inspiradas nessas séries, ao lado de símbolos conhecidos. Essa colaboração não transforma o jogo em um novo Halo ou Fallout: o encontro acontece na apresentação e nas recompensas da temporada.

A música tem um recorte próprio. Seis temas foram rearranjados no estilo de Candy Crush, com participação de orquestra, coro e acordeão. A lista musical inclui Halo, Fallout, Sea of Thieves, Forza, DOOM e Banjo-Kazooie. Oito franquias visuais não significam oito faixas; são conjuntos diferentes dentro da ação.

A Windows Central também acompanhou a colaboração e destacou sua distribuição em lojas de aplicativos. Para esta matéria, o prazo e as plataformas móveis seguem o comunicado da King. Não verificamos o evento em uma conta brasileira e não afirmamos que toda conta recebe as mesmas tarefas ou recompensas simultaneamente.

O interesse editorial está em ouvir como temas reconhecíveis mudam ao entrar em outro jogo. Isso pode ser acompanhado sem tratar itens colecionáveis como obrigação de compra. Não confirmamos oferta Amazon diretamente útil para essa pauta, nem dados de participação que permitam chamar a temporada de sucesso comercial.`,
    sources: [source('King no Xbox Wire — franquias, faixas e prazo', 'https://news.xbox.com/en-us/2026/11/12/candy-crush-saga-game-on-halo-fallout-sea-of-thieves-xbox-25/'), source('Windows Central — cobertura da colaboração', 'https://www.windowscentral.com/gaming/xbox/xbox-25-candy-crush')],
    imageQuery: 'Candy Crush Game On Xbox 25', imageNotes: 'Resultados incluem Soda Saga e campanhas de 2024/2025; rejeitados como representação do evento. Artes oficiais da temporada localizadas, sem licença comercial confirmada.',
    product: 'Nenhum produto diretamente útil confirmado; não usar acessório aleatório', affiliateQuery: 'site.amazon.com.br Candy Crush Saga',
  }),
  draft({
    id: 'rangers-path-xbox-17-novembro-parque', tag: 'Ranger’s Path · Xbox Series · simulação',
    title: 'Ranger’s Path chega ao Xbox com a rotina de cuidar de um parque nacional',
    excerpt: 'Calendário oficial marca 17 de novembro e Xbox Play Anywhere. Proposta envolve trilhas, visitantes e registro de animais.',
    scores: [0, 0, 9, 14, 7], reason: 'Calendário Xbox de 13/11 e seleção independente de 16/11 confirmam a data. Estreia de hoje, sem sinal publicado hoje confirmado.',
    body: `Ranger’s Path: National Park Simulator está no calendário oficial de Xbox para 17 de novembro de 2026. A publicação do Xbox Wire identifica o título com Xbox Play Anywhere e apresenta uma rotina de manutenção e atendimento em Faremont National Park. A seleção semanal da Meristation também lista a chegada em 17 de novembro.

O parque é o local de trabalho do jogador. A descrição oficial cita recuperar trilhas, recolher lixo, consertar placas, ajudar visitantes e documentar animais. Entre as interrupções da rotina aparecem avistamentos de fauna e buscas por pessoas desaparecidas. O contraste entre tarefas tranquilas e chamados é a proposta anunciada, sem avaliação nossa de variedade ao longo de uma campanha.

A presença de Play Anywhere merece ser conferida na oferta digital exata. Não é prudente atribuir o mesmo benefício a qualquer caixa, código estrangeiro ou anúncio de revendedor só porque o nome do jogo coincide. A matéria não confirma uma licença comprada na Amazon nem uma edição física com acesso em dois aparelhos.

Também vale separar o lançamento de console das imagens de acesso antecipado do PC. A pesquisa visual encontrou materiais antigos e uma captura identificada com versão anterior. Eles ajudam a reconhecer o cenário, mas não comprovam desempenho, interface ou recursos na versão final do Xbox.

Para quem procura uma simulação menos centrada em construir cidades ou dirigir máquinas, a rotina de conservação oferece um recorte diferente. A recomendação ainda depende de análise do jogo completo e da plataforma escolhida. Não testamos a versão final, não medimos desempenho e não confirmamos preço brasileiro. O calendário estabelece a chegada; a qualidade da execução exige outra apuração.`,
    sources: [source('Xbox Wire — calendário, Play Anywhere e atividades', 'https://news.xbox.com/en-us/2026/11/13/next-week-on-xbox-new-games-for-november-16-to-20/'), source('Meristation — calendário independente', 'https://as.com/meristation/noticias/los-lanzamientos-de-videojuegos-mas-destacados-de-la-semana-del-16-al-22-de-noviembre-de-2026-para-ps5-switch-2-pc-steam-y-xbox-series-f202611-n/')],
    imageQuery: 'Rangers Path National Park Simulator Xbox November 2026', imageNotes: `Capturas de acesso antecipado e arte da astragon localizadas. Não certificar build de Xbox por imagens antigas de PC. Regras gerais consultadas: ${xboxRules}; não licenciam propriedade de terceiros.`,
    product: 'Ranger’s Path em edição brasileira compatível', affiliateQuery: 'site.amazon.com.br Rangers Path National Park Simulator',
  }),
];
