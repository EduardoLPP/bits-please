// Lote de pesquisa: nenhuma exceção de publicação de lotes anteriores se aplica.
const checkedAt = '2026-11-15T15:42:00-03:00';
const source = (label, url) => ({ label, url });
const xbox = 'https://news.xbox.com/en-us/2026/11/03/xbox-game-pass-november-2026-wave-1/';
const rules = 'https://www.xbox.com/en-us/developers/rules';
function draft({ scores, imageQuery, imageSources, imageNotes, product, affiliateQuery, reason, ...post }) {
  return {
    ...post, category: 'GAMES', section: post.section || 'NOTÍCIAS', status: 'draft',
    date: '15 nov 2026', read: `${Math.max(2, Math.ceil(post.body.split(/\s+/).length / 180))} min`,
    relevanceDate: '2026-11-15', relevanceUpdatedAt: checkedAt,
    relevanceScore: scores.reduce((sum, score) => sum + score, 0),
    relevanceBreakdown: Object.fromEntries(['timeliness', 'publicInterest', 'reach', 'sourceReliability', 'brazilUtility'].map((key, index) => [key, scores[index]])),
    relevanceReason: reason,
    relevanceSignals: post.sources.map(item => ({ ...item, sameDayVerified: false })),
    imageResearch: { query: imageQuery, checkedAt, status: 'searched-not-cleared', sources: imageSources, notes: imageNotes },
    affiliateResearch: { product, query: affiliateQuery, tag: 'bitsplease-20', checkedAt, status: 'destination-unverified', notes: 'Busca realizada; destino Amazon Brasil e pertinência da oferta exata não confirmados. Não inserir CTA a partir de intermediário ou oferta estrangeira. Foto do produto é opcional.' },
    draftNotes: `Faltam duas imagens reais distintas com correspondência visual, crédito, origem e licença comercial verificados, além de oferta Amazon pertinente com destino/tag conferidos. ${post.draftNotes || ''} Não foi confirmado sinal publicado em 15/11 no fuso de São Paulo; os dois componentes diários da pontuação ficam zerados. A foto do produto é opcional.`,
  };
}
export const dailyPosts20261115 = [
  draft({
    id: 'review-modern-warfare-4-pesquisa-2026', section: 'REVIEWS', tag: 'Modern Warfare 4 · análise baseada em pesquisa',
    title: 'Review: Modern Warfare 4 ganha força quando abre espaço para escolhas',
    excerpt: 'Campanha cinematográfica e DMZ sustentam a nova edição, mas a liberdade é desigual. Análise baseada em pesquisa, sem teste próprio e sem nota.',
    scores: [0, 0, 20, 15, 8], reason: 'Lançamento de 23/10 confirmado pela Activision e duas reviews especializadas abertas. Franquia estabelecida e avaliação útil, sem novidade publicada hoje confirmada.',
    body: `Esta análise de Call of Duty: Modern Warfare 4 é baseada em pesquisa. O Bits, Please não testou o jogo e não atribui nota. A Activision informa lançamento em 23 de outubro de 2026; consultamos as reviews de PC Gamer e GamesRadar para distinguir a proposta oficial das impressões de quem jogou.

A campanha combina a guerra na península coreana com a trajetória de Captain Price. A apresentação oficial promete confrontos em vários países, mas a questão editorial mais interessante é como essas sequências deixam o jogador agir. A GamesRadar elogia a intensidade dos tiroteios e destaca Stranded como uma missão que oferece espaço para recolher equipamento e escolher objetivos. Também aponta que essa liberdade não define a campanha inteira e considera menos convincente o arco de Price.

O multiplayer dá outro motivo para observar a estrutura das partidas. Na avaliação de PC Gamer, Frontline melhora a leitura do combate ao tornar mais previsível de onde vêm os adversários. Essa é uma observação daquele veículo sobre a versão analisada, sem garantia de que todas as listas e mapas mantenham o mesmo ritmo ao longo das temporadas.

DMZ é a terceira parte do pacote. A descrição da Activision apresenta incursões para coletar recursos e extrair; a GamesRadar destaca o ciclo de risco e recompensa. Nossa leitura é que esse formato atende a quem prefere construir uma situação ao longo de uma partida, em vez de procurar apenas eliminações rápidas.

O veredito editorial é favorável para quem busca um FPS com propostas diferentes dentro da mesma compra, aceitando uma campanha ainda bastante dirigida. Quem espera liberdade constante deve considerar a ressalva. Esta review não mede desempenho, latência ou qualidade das versões de console; tampouco transforma especificações promocionais em benchmark. Antes de comprar, confira a plataforma e o conteúdo da edição, pois Warzone, campanha e DMZ não são nomes intercambiáveis.`,
    sources: [source('Activision — data, plataformas e modos', 'https://www.callofduty.com/modernwarfare4'), source('PC Gamer — review de 27/10, observações de Frontline', 'https://www.pcgamer.com/games/call-of-duty/call-of-duty-modern-warfare-4-review/'), source('GamesRadar — review, campanha e DMZ', 'https://www.gamesradar.com/games/call-of-duty/call-of-duty-modern-warfare-4-review/')],
    imageQuery: 'Modern Warfare 4 2026 official screenshot', imageSources: ['https://news.blizzard.com/en-us/article/24272112/announcing-call-of-duty-modern-warfare-4', 'https://www.activisionblizzard.com/legal/terms-of-use'], imageNotes: 'Localizadas artes oficiais e capturas em veículos. Os termos gerais consultados limitam cópia a uso pessoal/não comercial; não equivalem a licença de imprensa para este portal.',
    product: 'Modern Warfare 4, edição PS5', affiliateQuery: 'site.amazon.com.br Modern Warfare 4 PS5',
  }),
  draft({
    id: 'game-pass-essential-oito-classicos-novembro-15', tag: 'Game Pass Essential · catálogo',
    title: 'Game Pass Essential tem oito clássicos previstos para 15 de novembro',
    excerpt: 'Banjo, Perfect Dark e Viva Piñata estão na lista oficial. Só Halo: Spartan Assault aparece também para PC nesse grupo.',
    scores: [0, 0, 18, 15, 10], reason: 'Calendário de 3/11 confirmado em Xbox Wire e Pure Xbox; o evento ocorre hoje, mas não foi encontrada publicação nova de hoje em horário brasileiro verificável.',
    body: `O calendário do Xbox Wire reserva oito jogos para o Game Pass Essential em 15 de novembro de 2026. O grupo inclui Banjo-Kazooie, Banjo-Tooie, Banjo-Kazooie: Nuts & Bolts, Gears of War: Judgment, Halo: Spartan Assault, Perfect Dark, Viva Piñata e Viva Piñata: Trouble in Paradise. A lista foi anunciada em 3 de novembro; a data de entrada não transforma esses títulos em lançamentos novos.

Há uma diferença prática para quem joga no computador. Nesse grupo, Halo: Spartan Assault é listado para nuvem, console e PC. Os outros sete aparecem para nuvem e console. Isso impede concluir que a chegada ao plano libera instalação no PC para toda a seleção. A cobertura de Pure Xbox reproduz essa separação por plataforma.

Para o assinante brasileiro, a checagem útil acontece na página de cada jogo e na conta que será usada para jogar. Acesso por nuvem, instalação local e compra são caminhos diferentes. Esta matéria não confirma horários individuais de liberação no Brasil nem promete que um código de assinatura comprado em outra região possa ser resgatado na conta brasileira.

A seleção oferece estilos bem diferentes. Os três Banjo não devem ser tratados como três versões do mesmo jogo, e Perfect Dark nessa lista não é o anúncio de um projeto novo. A utilidade do pacote depende do que o leitor quer revisitar e do aparelho disponível, não apenas do número de nomes.

Também não há motivo para comprar novamente um título já pertencente à biblioteca só porque ele aparece no calendário da assinatura. Confira primeiro a licença existente, o plano ativo e a opção de instalação. O catálogo é acesso enquanto as condições do serviço permitirem; não representa propriedade permanente de todos esses jogos.`,
    sources: [source('Xbox Wire — calendário oficial de 3/11', xbox), source('Pure Xbox — jogos, plataformas e planos', 'https://www.purexbox.com/news/2026/11/10plus-game-pass-titles-are-confirmed-for-xboxs-25th-anniversary-week')],
    imageQuery: 'Banjo Kazooie Game Pass Essential 2026', imageSources: [xbox, rules], imageNotes: 'Busca feita; artes de jogos separados e banners de outras ondas não comprovam a seleção. Regras gerais Xbox exigem permissão para promover empreendimento comercial. Nenhum par aprovado.',
    product: 'Assinatura Game Pass Essential para conta brasileira', affiliateQuery: 'site.amazon.com.br Xbox Game Pass assinatura',
  }),
  draft({
    id: 'fable-deepwood-gameplay-limites-previa', tag: 'Fable · Playground Games',
    title: 'Fable mostra Deepwood; quatro minutos ainda não definem o RPG inteiro',
    excerpt: 'O novo trecho apresenta combate e uma investigação em Albion. A data oficial continua sendo 23 de fevereiro de 2027.',
    scores: [0, 0, 18, 14, 7], reason: 'Página oficial brasileira confirma data e identidade do reboot; PC Gamer abriu discussão sobre o vídeo de 12/11. Sem anúncio de hoje validado.',
    body: `O novo vídeo de Fable acompanha uma missão em Deepwood, com exploração, conversa e combinações de combate. A cobertura de PC Gamer, publicada em 12 de novembro, descreve o trecho de quatro minutos e questiona o tom mais sombrio escolhido para apresentar Albion. A página oficial brasileira mantém 23 de fevereiro de 2027 como data de lançamento.

É preciso separar o que o vídeo mostra daquilo que ainda depende do jogo completo. Uma passagem com armas, ataques à distância e magia confirma que esses elementos fazem parte da apresentação; não demonstra variedade de inimigos por dezenas de horas, desempenho estável ou consequência duradoura para cada escolha. Não fizemos um teste próprio dessa versão.

O projeto é o retorno da franquia sob a Playground Games, em forma de reboot. A referência aos Fable anteriores ajuda a entender a expectativa por humor e uma vida cotidiana que exista além das missões. Isso não autoriza tratar a nova aventura como continuação narrativa direta de Fable III. A posição dessa história deve seguir o que o estúdio efetivamente anuncia.

Há uma comparação útil com o material oficial da gamescom: o Xbox Wire publicou uma demonstração de dezoito minutos centrada em Bowerstone. O vídeo recente de Deepwood e a apresentação mais longa não são a mesma missão nem o mesmo recorte. Somar esses materiais ajuda a formular perguntas melhores, mas ainda não substitui uma análise do lançamento.

Nossa leitura editorial é que a identidade de Fable dependerá da relação entre aventura, moradores e consequências, não só do aspecto de uma floresta. Para quem planeja jogar, vale acompanhar uma demonstração mais extensa e as condições da plataforma escolhida. Nenhum preço ou benefício de pré-venda na Amazon Brasil foi confirmado para esta matéria.`,
    sources: [source('Fable — página oficial brasileira', 'https://www.fablethegame.com/pt-BR'), source('PC Gamer — leitura do vídeo de 12/11', 'https://www.pcgamer.com/games/rpg/new-4-minute-fable-gameplay-trailer-shows-a-game-that-doesnt-look-much-like-fable/'), source('Xbox Wire — demonstração anterior de Bowerstone', 'https://news.xbox.com/en-us/2026/08/28/fable-watch-brand-new-quest-gameplay-from-gamescom-2026/amp/')],
    imageQuery: 'Fable 2026 quest screenshot', imageSources: ['https://www.fablethegame.com/pt-BR', rules], imageNotes: 'Resultados incluem capturas de janeiro com data antiga de lançamento. Não servem como prova de Deepwood. Licença comercial específica não confirmada.',
    product: 'Fable na plataforma exata da oferta', affiliateQuery: 'site.amazon.com.br Fable jogo 2027',
  }),
  draft({
    id: 'path-of-exile-3300b-hotfix-recoup', tag: 'Path of Exile · patch 3.30.0b',
    title: 'Path of Exile corrige recuperação de vida e corrupção de Imbued Gems',
    excerpt: 'O hotfix de 3.30.0b tem duas correções específicas. O patch anterior também pede reinício do cliente para aplicar mudanças locais.',
    scores: [0, 0, 16, 15, 9], reason: 'Notas primárias abertas e reprodução comunitária consultada. Fórum mostra horas diferentes conforme a renderização; não é possível certificar publicação em 15/11 em São Paulo.',
    body: `O hotfix de Path of Exile 3.30.0b corrige dois problemas: modificadores de dano recebido recuperado como vida que não estavam recuperando vida, e a perda do efeito de suporte de Imbued Gems ao aplicar dupla corrupção. As notas oficiais da Grinding Gear Games descrevem correções de funcionamento; não anunciam uma reformulação geral do equilíbrio.

Essa distinção importa para quem avalia uma build. Se a sustentação dependia daquela recuperação de vida, o comportamento anterior podia não corresponder ao que o modificador descrevia. A correção não basta para declarar que uma combinação se tornou a melhor da liga. É necessário conferir os outros requisitos e a versão efetivamente usada.

O patch 3.30.0b anterior ao hotfix também mexe em situações concretas: Covetous Shrines deixam de aumentar em 20% o dano recebido, Gwennen ganha um aviso sobre a devolução de itens e portais de retorno de Beyond Bosses recebem correção de interação. São mudanças em contextos distintos, que não devem ser comprimidas em uma promessa de aumento de recompensa para todo o jogo.

A GGG informa que aquele patch foi aplicado sem reiniciar os servidores, mas que as alterações do cliente exigem reinício do programa. Fechar e abrir o jogo é, portanto, uma verificação mais sensata do que presumir que a sessão antiga recebeu tudo automaticamente. A reprodução das notas na comunidade ajuda a acompanhar relatos; comentários de jogadores não substituem a lista oficial de correções.

Não testamos builds nem taxas de saque. Se um problema continuar, compare a versão e o caso com as notas correspondentes antes de atribuí-lo a uma mudança de balanceamento. Esta pauta trata do primeiro Path of Exile; ela não descreve um patch de Path of Exile 2.`,
    sources: [source('GGG — hotfix de recuperação de vida e gemas', 'https://www.pathofexile.com/forum/view-thread/4015085'), source('GGG — patch 3.30.0b e reinício do cliente', 'https://www.pathofexile.com/forum/view-thread/4014963'), source('Comunidade — reprodução do hotfix, sem validação de desempenho', 'https://www.reddit.com/r/pathofexile/comments/1xwn5ow/3300b_hotfix_life_recoup_imbued_gems/')],
    imageQuery: 'Path of Exile Covens Umbra screenshot', imageSources: ['https://www.pathofexile.com/forum/view-forum/patch-notes'], imageNotes: 'Galerias e notas não fornecem um par de imagens com licença comercial confirmada. Não usar arte de PoE 2 para este patch.',
    product: 'Mouse para jogar Path of Exile no PC; modelo ainda sem recomendação validada', affiliateQuery: 'site.amazon.com.br Path of Exile mouse Logitech',
  }),
  draft({
    id: 'marathon-symbiosis-expedition-semana-gratuita', tag: 'Marathon · Symbiosis',
    title: 'Marathon terá PvE permanente e uma semana gratuita em dezembro',
    excerpt: 'Symbiosis está marcada para 8/12. A semana aberta termina em 15/12; o evento Crew Up continua depois e passa a exigir o jogo.',
    scores: [0, 0, 16, 15, 9], reason: 'Bungie e PC Gamer confirmam o plano de dezembro; informações de 10/11, sem novo sinal publicado hoje.',
    body: `A Bungie marcou Symbiosis, próxima atualização de Marathon, para 8 de dezembro de 2026. O anúncio apresenta Expedition como a primeira fase de um modo PvE permanente. A mudança oferece uma alternativa cooperativa ao foco em extração com adversários humanos, mas o conteúdo ainda deve ser avaliado quando estiver disponível.

A atualização também terá uma semana aberta, de 8 a 15 de dezembro. A Bungie diz que participantes poderão acessar o conteúdo de Symbiosis e conservar itens e progressão se comprarem o jogo depois. Isso é um período de experimentação, não um anúncio de conversão definitiva para um modelo gratuito.

Há outro calendário envolvido. Crew Up começa junto da atualização e continua até 22 de dezembro. Depois do fim da semana aberta, será necessário possuir uma licença de Marathon para continuar no evento. As tarefas cooperativas exigem pelo menos outro participante com o código do evento resgatado; não convém prometer que todas as recompensas possam ser obtidas sozinho.

A cobertura de PC Gamer também destaca Limbo, espaço social com área para testar armas, e o teste de Team Deathmatch. É importante preservar as categorias: o PvE é anunciado como permanente, enquanto o novo modo de confronto entre equipes chega em beta. Nenhuma dessas descrições garante que o balanceamento esteja concluído.

Para quem se afastou por causa da pressão do PvP, a semana aberta é a oportunidade mais direta de conferir a proposta sem antecipar uma compra. Esta matéria não oferece teste próprio, estimativa de desempenho ou horário de encerramento convertido para o Brasil sem confirmação. Confira ainda as exigências da plataforma usada antes de planejar uma sessão com amigos.`,
    sources: [source('Bungie — semana aberta, Crew Up e exigências', 'https://www.bungie.net/7/en/News/Article/symbiosis_open_play_week_crew_up'), source('PC Gamer — Expedition, Limbo e Team Deathmatch', 'https://www.pcgamer.com/games/fps/bungie-drops-gameplay-trailer-for-marathons-co-op-pve-roguelite-mode-and-swanky-new-social-space/')],
    imageQuery: 'Marathon Symbiosis Limbo screenshot', imageSources: ['https://www.bungie.net/7/en/News/Article/symbiosis_open_play_week_crew_up', 'https://help.bungie.net/hc/en-us/articles/360049201911-Intellectual-Property-and-Trademarks'], imageNotes: 'Bungie publica imagens do evento; política geral de conteúdo de fãs não libera automaticamente o uso comercial. Capturas do lançamento não comprovam Expedition.',
    product: 'Marathon PS5 ou controle DualSense Marathon, conforme pertinência e destino', affiliateQuery: 'site.amazon.com.br Marathon PS5 jogo', draftNotes: 'Destino candidato B0GJFVK6QV retornou 503; não há CTA validado.',
  }),
  draft({
    id: 'game-awards-2026-indicados-calendario', section: 'CULTURA POP', tag: 'The Game Awards · calendário',
    title: 'The Game Awards: anúncio dos indicados está previsto para 17 de novembro',
    excerpt: 'A revelação dos candidatos antecede a cerimônia de 10/12. Elegibilidade não significa indicação confirmada.',
    scores: [0, 0, 20, 12, 8], reason: 'Site oficial confirma cerimônia e janela dos indicados; Nintendo Life confirma 17/11. Nenhuma lista final ou publicação nova de hoje foi validada.',
    body: `O anúncio dos indicados ao The Game Awards 2026 está previsto para 17 de novembro, segundo a cobertura de Nintendo Life. A cerimônia principal será em 10 de dezembro, no Peacock Theater, em Los Angeles, como informa o site oficial. São dois momentos diferentes: primeiro se conhece a seleção; depois, os vencedores.

A página oficial consultada ainda apresenta os indicados como uma divulgação de meados de novembro. Por isso, esta matéria não antecipa candidatos nem transforma previsões de jornalistas em resultado. Até a revelação, uma montagem com capas de jogos continua sendo uma projeção, mesmo que pareça um cartaz oficial.

Outra distinção útil é entre elegibilidade e indicação. Um jogo cumprir o prazo de lançamento permite que seja considerado nas condições do prêmio; não significa que já conquistou uma vaga. A notícia de Nintendo Life discute justamente a proximidade de lançamentos importantes com o período de seleção. O leitor deve buscar a lista publicada pela organização antes de iniciar qualquer votação.

Para acompanhar do Brasil, o caminho mais confiável é abrir a transmissão indicada no domínio oficial e verificar o horário no anúncio atualizado. Não reproduzimos uma conversão de horário a partir de posts que divergem sobre o fuso. Essa checagem evita confundir a programação dos indicados com a do evento de dezembro.

Nossa avaliação editorial é que a seleção será mais interessante quando lida por categoria e pelos critérios de cada prêmio. Uma ausência não prova fracasso comercial, assim como uma indicação não substitui uma review. Não usamos tráfego presumido, apostas ou votação informal como dado de popularidade. Também não há produto obrigatório para assistir: qualquer recomendação de acessório precisaria justificar uma necessidade concreta do leitor.`,
    sources: [source('The Game Awards — cerimônia e janela dos indicados', 'https://thegameawards.com/'), source('Nintendo Life — anúncio previsto para 17/11', 'https://www.nintendolife.com/news/2026/11/the-game-awards-2026-nominees-to-be-announced-next-week-zelda-and-gta-6-eligible')],
    imageQuery: 'The Game Awards 2026 event', imageSources: ['https://thegameawards.com/'], imageNotes: 'Busca trouxe cartazes de 2024/2025 e outro prêmio, Gayming Awards. Rejeitados por evento/ano incorretos; nenhum par autorizado de 2026 confirmado.',
    product: 'Acessório para acompanhar transmissão somente se houver utilidade concreta', affiliateQuery: 'site.amazon.com.br The Game Awards headset', draftNotes: 'Encaixe de produto ainda não demonstrado; não inserir headset genérico só para cumprir requisito.',
  }),
  draft({
    id: 'worlds-2026-blg-gen-g-titulo', section: 'ESPORTS', tag: 'League of Legends · Worlds 2026',
    title: 'Bilibili Gaming vence Gen.G por 3 a 1 e conquista Worlds 2026',
    excerpt: 'BLG fecha a final em Brooklyn e conquista seu primeiro título mundial. A confirmação da Riot foi lida por um espelho do perfil oficial.',
    scores: [0, 0, 20, 11, 8], reason: 'Título confirmado em espelho do perfil oficial e relato independente aberto. O post é de 15/11 00h01 UTC, equivalente a 14/11 21h01 em São Paulo; não pontua como sinal de hoje.',
    body: `A Bilibili Gaming venceu Gen.G por 3 a 1 na final de Worlds 2026, disputada em 14 de novembro no Barclays Center, em Brooklyn. O relato de LoLNow confirma o placar e o primeiro título mundial da organização. A mensagem de campeão do perfil LoL Esports também pôde ser lida por um espelho público; o acesso direto à publicação no X estava indisponível nesta checagem.

A conquista encerra a campanha da BLG no principal torneio de League of Legends. O guia oficial da Riot situava a final em Brooklyn e as fases anteriores de mata-mata em Allen, no Texas. Não se trata de um resultado do First Stand, outro evento do calendário: fotos e troféus de março não ilustram automaticamente esta decisão.

O resultado ganha contexto na passagem pelo mata-mata. Segundo LoLNow, a equipe fechou a série após um quarto jogo de 43 minutos, com uma disputa decisiva pelo Barão. Esta matéria não reconstrói cada luta nem atribui decisões táticas a jogadores a partir de um placar isolado. Para uma análise de draft ou execução, é necessário rever a transmissão completa.

Há ainda um detalhe de data que muda a leitura do noticiário. A mensagem de campeão aparece no espelho às 00h01 UTC de 15 de novembro. Em São Paulo, isso corresponde às 21h01 de 14 de novembro. Ela confirma o título, mas não é uma publicação de domingo no horário brasileiro.

Para o público que não acompanhou ao vivo, o melhor ponto de partida é a gravação dos canais oficiais, em vez de cortes que omitem a ordem das partidas. Não publicamos recorde de audiência, receita, buscas ou alcance social: esses números exigem fonte e metodologia próprias e não podem ser deduzidos da importância de uma final mundial.`,
    sources: [source('Riot — guia oficial e local da final', 'https://lolesports.com/en-US/news/worlds-2026-primer'), source('LoL Esports — publicação original, acesso direto indisponível', 'https://x.com/lolesports/status/2121755546487566426'), source('Espelho consultado da mensagem oficial, com horário UTC', 'https://teapawt.net/lolesports/status/2121755546487566426'), source('LoLNow — resultado da final', 'https://lolnow.gg/worlds-2026-final-blg-beat-gen-g/')],
    imageQuery: 'Bilibili Gaming Worlds 2026 trophy', imageSources: ['https://lolnow.gg/worlds-2026-final-live-gen-g-vs-blg/', 'https://lolesports.com/en-US/news/worlds-2026-primer'], imageNotes: 'Galeria de LoLNow tem capturas atribuídas à Riot, sem licença de reutilização comercial comprovada. Resultado de busca do First Stand foi rejeitado; nenhum par aprovado.',
    product: 'Mouse para jogar League of Legends, sem alegar uso por atletas', affiliateQuery: 'site.amazon.com.br League of Legends mouse',
  }),
  draft({
    id: 'dragon-quest-rpg-mobile-beta-2027', tag: 'Dragon Quest RPG · iOS e Android',
    title: 'Novo Dragon Quest para celular prevê beta em dezembro e estreia em 2027',
    excerpt: 'The Cursed Tree and the Chosen Isle aposta em turnos e exploração. Elegibilidade regional do teste precisa de confirmação antes da inscrição.',
    scores: [0, 0, 18, 12, 6], reason: 'Gematsu abriu detalhes e site oficial foi consultado, mas o conteúdo textual do site é limitado e regras regionais do beta não foram confirmadas. Sem sinal de hoje.',
    body: `Dragon Quest RPG: The Cursed Tree and the Chosen Isle é o novo projeto da Square Enix com a WFS para iOS e Android. A apresentação detalhada pela Gematsu em 10 de novembro aponta lançamento em 2027 e um teste fechado de 8 a 15 de dezembro, com inscrições previstas até 23 de novembro. A disponibilidade desse teste para contas brasileiras ainda precisa ser confirmada.

A proposta combina exploração, batalhas por turnos e desenvolvimento de uma base. O material de apresentação menciona habilidades Fast Strike e pep powers. Isso oferece uma direção para o combate, mas não permite concluir como será o equilíbrio, quanto tempo cada sessão exigirá ou quais limites serão impostos pela monetização.

O título deve ser situado como um projeto próprio para celular dentro da franquia. O anúncio consultado não o apresenta como Dragon Quest XII, nem como conversão de um dos remakes HD-2D. A familiaridade de monstros e sistemas não basta para afirmar continuidade narrativa com um capítulo numerado. Também não há confirmação consultada de uma versão para consoles.

A página oficial em inglês alerta que vídeos e imagens mostram conteúdo ainda em produção. Essa ressalva importa tanto para o texto quanto para a escolha de capturas: interfaces, cenas e recursos promocionais podem mudar. Não há teste próprio do Bits, Please, e esta notícia não funciona como review antecipada.

Antes de se inscrever, confira no formulário oficial país aceito, sistema operacional, condições de participação e tratamento dos dados fornecidos. Não deduza acesso global da existência de uma página em inglês. Para o Brasil, ainda faltam confirmação regional, requisitos e calendário local; por isso, não publicamos preço, oferta afiliada ou promessa de participação garantida no beta.`,
    sources: [source('Square Enix — página oficial e aviso de conteúdo em produção', 'https://dqrpg.dragonquest.com/en/'), source('Gematsu — anúncio, estúdio, plataformas e beta', 'https://www.gematsu.com/2026/11/dragon-quest-rpg-the-cursed-tree-and-the-chosen-isle-unveiled'), source('Square Enix — diretrizes específicas do projeto', 'https://www.dragonquest.jp/guideline/dqrpg/')],
    imageQuery: 'Dragon Quest Cursed Tree Chosen Isle', imageSources: ['https://dqrpg.dragonquest.com/en/', 'https://www.dragonquest.jp/guideline/dqrpg/'], imageNotes: 'Diretrizes abertas: imagens em blogs são permitidas para uso não comercial; exceções para monetização de vídeos em plataformas não liberam portal comercial. Não aprovado.',
    product: 'Produto diretamente útil ao novo jogo móvel; nenhum encaixe confirmado', affiliateQuery: 'site.amazon.com.br Dragon Quest III Switch', draftNotes: 'A busca por outro Dragon Quest não valida produto pertinente ao novo jogo. Conferir beta/região e não criar CTA para um jogo diferente.',
  }),
  draft({
    id: 'valhalla-new-game-plus-ps5-pro-2026', tag: 'Assassin’s Creed Valhalla · atualização',
    title: 'Valhalla recebe New Game Plus; melhorias de PSSR ficam no PS5 Pro',
    excerpt: 'A atualização gratuita reúne mudanças de progressão e opções para revisitar a campanha. Recursos gráficos precisam ser separados por console.',
    scores: [0, 0, 18, 15, 9], reason: 'Ubisoft no PS Blog e GamesRadar confirmam atualização de 5/11. Utilidade para quem retorna ao jogo, sem recência fabricada em 15/11.',
    body: `Assassin’s Creed Valhalla recebeu uma atualização gratuita que acrescenta New Game Plus, mudanças de progressão e ajustes de qualidade de vida. No PlayStation Blog de 5 de novembro, a Ubisoft também detalha a integração de uma versão aprimorada de PSSR no PS5 Pro. As duas frentes não devem ser confundidas: voltar à campanha com progresso preservado é diferente de receber uma melhoria gráfica exclusiva de um aparelho.

A cobertura de GamesRadar destaca o novo modo e lembra que é necessário salvar o jogo depois da atualização para liberar a opção de New Game Plus. Portanto, se o recurso não aparecer, a primeira checagem é a versão instalada e a existência de um save elegível. Um arquivo antigo sem novo salvamento não prova, sozinho, que a função está ausente da conta.

O comunicado da Ubisoft lista ainda opção de progressão modificada, novo cálculo de poder, dois troféus e sincronização com o Animus Hub. Cada recurso responde a uma parte da experiência. Não faz sentido apresentar esse conjunto como uma expansão de história ou presumir que ele inclua todos os conteúdos pagos anteriores.

Na parte visual, a explicação da empresa associa o PSSR aprimorado ao PS5 Pro. Esta matéria não extrapola essa promessa ao PS5 base, a outros consoles ou ao PC. Também não oferece comparação de resolução e estabilidade medida pelo Bits, Please: não realizamos teste próprio da atualização.

Para quem já tem Valhalla, a decisão prática é atualizar a cópia existente e conferir os requisitos da opção desejada. Comprar outra edição apenas por causa do patch não é uma conclusão sustentada por essas fontes. Antes de uma compra, confira plataforma, licença existente e conteúdo incluído, especialmente quando o anúncio mistura jogo base e expansões.`,
    sources: [source('Ubisoft no PlayStation Blog — recursos e PSSR', 'https://blog.playstation.com/2026/11/05/assassins-creed-valhalla-new-update-brings-new-game-upgraded-pssr-support-for-ps5-pro-today/'), source('GamesRadar — New Game Plus e condição de salvamento', 'https://www.gamesradar.com/games/assassin-s-creed/assassins-creed-valhalla-gets-new-game-plus-a-stash-inventory-and-extended-progression-mode-in-the-most-requested-update/'), source('Ubisoft — notas na Steam, página sem texto recuperável', 'https://store.steampowered.com/news/app/2208920/view/667255402825515702?l=english')],
    imageQuery: 'Assassin Creed Valhalla New Game Plus 2026', imageSources: ['https://blog.playstation.com/2026/11/05/assassins-creed-valhalla-new-update-brings-new-game-upgraded-pssr-support-for-ps5-pro-today/'], imageNotes: 'Busca trouxe interfaces de Odyssey/Shadows e saves modificados. Não usar como captura da atualização de Valhalla. Permissão comercial de duas imagens ainda não confirmada.',
    product: 'Assassin’s Creed Valhalla PS5, apenas para quem não possui o jogo', affiliateQuery: 'site.amazon.com.br Assassins Creed Valhalla PS5',
  }),
  draft({
    id: 'arc-raiders-frozen-trail-17-milhoes-contexto', tag: 'ARC Raiders · Frozen Trail',
    title: 'ARC Raiders passa de 17 milhões de cópias, segundo a Nexon',
    excerpt: 'Relatório de 10/11 relaciona a continuidade do jogo à atualização Frozen Trail. Vendas acumuladas não representam jogadores simultâneos.',
    scores: [0, 0, 18, 15, 7], reason: 'Número vem de relatório primário datado de 10/11; conteúdo de Frozen Trail tem confirmação independente. Não é recorde divulgado hoje nem medida de tráfego do portal.',
    body: `ARC Raiders vendeu mais de 17 milhões de unidades, segundo a carta de resultados da Nexon publicada em 10 de novembro de 2026. O documento relaciona a continuidade do jogo a Frozen Trail, atualização lançada em 8 de outubro. O número é de vendas acumuladas informado pela empresa, não de pessoas conectadas ao mesmo tempo.

A distinção evita uma leitura inflada do tamanho do serviço. Cópias vendidas, jogadores ativos e pico simultâneo são medidas diferentes. A Nexon diz que houve retorno de jogadores e entrada de novos compradores, mas esse trecho não fornece uma contagem detalhada de ativos para cada plataforma. Não completamos essa lacuna com estimativas.

Frozen Trail amplia o jogo de extração com uma região gelada. A cobertura de Vandal, publicada antes da atualização, detalha Pendola Pass, novos inimigos, armas e uma grande nave ARC que pode ser abordada. São elementos de conteúdo, não evidência de que problemas de equilíbrio ou desempenho tenham sido resolvidos.

O interesse editorial está no desafio de manter uma comunidade depois do lançamento. Um mapa novo pode oferecer rotas e conflitos diferentes; para avaliar se isso muda a rotina de longo prazo, seria necessário acompanhar partidas, progressão e atualizações posteriores. A leitura financeira da publicadora é uma fonte legítima sobre seus resultados, mas também expressa o ponto de vista da empresa.

Para quem pensa em começar, o dado de vendas demonstra alcance comercial, sem garantir que o formato seja adequado a qualquer pessoa. O jogo gira em torno de incursões e extração, com risco associado ao equipamento levado. Esta matéria não contém teste próprio de Frozen Trail, benchmark nem recomendação de compra baseada apenas na quantidade de cópias. Confirme edição, plataforma e regras de acesso antes de decidir.`,
    sources: [source('Nexon — carta de resultados de 10/11/2026, página 4', 'https://pdf.irpocket.com/C3659/xoA3/DnNg/CsIh/QcuY.pdf'), source('Vandal — mapa e conteúdo de Frozen Trail', 'https://vandal.elespanol.com/noticia/2026267022/arc-raiders-detalla-frozen-trail-su-mayor-actualizacion-nuevo-mapa-enemigos-armas-y-una-enorme-nave-arc/')],
    imageQuery: 'ARC Raiders Frozen Trail screenshots', imageSources: ['https://vandal.elespanol.com/noticia/2026267022/arc-raiders-detalla-frozen-trail-su-mayor-actualizacion-nuevo-mapa-enemigos-armas-y-una-enorme-nave-arc/', 'https://www.arcraiders.com/news'], imageNotes: 'Busca trouxe também Cold Snap e capturas de usuários. Neve não comprova Frozen Trail. Site oficial de notícias não abriu; licença de imprensa não validada.',
    product: 'ARC Raiders na edição e plataforma corretas', affiliateQuery: 'site.amazon.com.br ARC Raiders',
  }),
];
