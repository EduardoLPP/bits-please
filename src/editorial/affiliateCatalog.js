const affiliateTag = 'bitsplease-20';
const amazonItem = asin => `https://www.amazon.com.br/dp/${asin}?tag=${affiliateTag}`;
const amazonSearch = query => `https://www.amazon.com.br/s?k=${encodeURIComponent(query)}&tag=${affiliateTag}`;

const source = (label, url) => ({ label, url });
const item = (asin, productName, productPitch) => ({
  affiliate: amazonItem(asin),
  productName,
  productPitch,
  affiliateLinkType: 'product',
});
const search = (query, productName, productPitch) => ({
  affiliate: amazonSearch(query),
  productName,
  productPitch,
  affiliateLinkType: 'search',
});

const affiliateCatalog = {
  'fable-deepwood-gameplay-limites-previa': search(
    'controle sem fio Xbox Series X|S PC Microsoft',
    'Controle sem fio Xbox para Series X|S e PC',
    'Fable foi apresentado para Xbox e PC. Se você joga no computador, confira se o controle e a conexão escolhidos são compatíveis com a sua configuração; esta chamada é uma opção de acessório, não uma recomendação sobre o desempenho do jogo.'
  ),
  'game-awards-2026-indicados-calendario': search(
    'consoles de videogame PS5 Xbox Nintendo Switch 2',
    'Consoles para jogar os títulos indicados',
    'Os indicados ao The Game Awards podem sair em plataformas diferentes. Confira em qual console cada jogo está disponível antes de escolher um aparelho.'
  ),
  'wolfenstein-3-producao-machinegames-confirmada': search(
    'Wolfenstein jogos PlayStation Xbox PC',
    'Jogos da série Wolfenstein',
    'Enquanto Wolfenstein 3 não tem data ou plataformas anunciadas, a busca reúne jogos anteriores da série. Confira edição e compatibilidade com seu console ou PC.'
  ),
  'xbox-insider-fundos-guia-personalizacao': search(
    'controle sem fio Xbox Series X S Windows Microsoft',
    'Controle sem fio Xbox para Series X|S e Windows',
    'A matéria fala de novidades da interface Xbox. Para quem também joga no console ou no Windows, confira as versões do controle e a compatibilidade indicada no anúncio.'
  ),
  'skyrim-15-anos-creation-bundle-edicoes': search(
    'The Elder Scrolls V Skyrim Anniversary Edition PS5 Xbox Nintendo Switch',
    'The Elder Scrolls V: Skyrim — edições disponíveis',
    'O novo bundle de Creations não é uma edição nova do jogo. A busca reúne versões de Skyrim; confira plataforma, conteúdo incluído e se a oferta corresponde à Anniversary Edition.'
  ),
  'review-phantom-blade-zero-2026': search(
    'Phantom Blade Zero PS5',
    'Phantom Blade Zero para PlayStation 5',
    'A busca é pelo jogo analisado. A edição física de PS5 foi anunciada para 2027 e pode ainda não estar à venda; confira formato, edição e disponibilidade antes de comprar.'
  ),
  'black-forest-games-independente-third-signal-2026': search(
    'console PlayStation 5 Amazon Brasil',
    'Console PlayStation 5 compatível com Destroy All Humans! 2 – Reprobed',
    'O jogo da Black Forest Games tem versão para PS5. Esta busca é pelo console, não inclui o jogo; confira modelo, vendedor e disponibilidade antes de comprar.'
  ),
  'review-modern-warfare-4-pesquisa-2026': search(
    'Call of Duty Modern Warfare 4 PlayStation 5',
    'Call of Duty: Modern Warfare 4 para PlayStation 5',
    'A busca leva à edição de PS5 mencionada nesta análise. Confira plataforma, edição, vendedor e disponibilidade antes de finalizar a compra.'
  ),
  'game-pass-essential-oito-classicos-novembro-15': item(
    'B0DJTJDN73',
    'Turtle Beach Stealth Pivot — controle para PC e Xbox',
    'Para quem joga no PC ou no Xbox, este controle tem conexão sem fio no PC e pode ser usado com fio no Xbox. Confira a compatibilidade e o modo de conexão para o seu aparelho.'
  ),
  'path-of-exile-3300b-hotfix-recoup': item(
    'B09S3Y124Y',
    'Mouse Logitech G PRO X SUPERLIGHT',
    'Em Path of Exile no PC, o mouse é parte central da movimentação e do uso de habilidades. Esta é uma opção leve para quem prefere jogar com mouse; confira tamanho, conexão e versão na oferta.'
  ),
  'marathon-symbiosis-expedition-semana-gratuita': item(
    'B09S3Y124Y',
    'Mouse Logitech G PRO X SUPERLIGHT',
    'Para quem acompanha Marathon no PC, um mouse leve pode ser uma alternativa de controle para partidas de tiro. Confira a compatibilidade, o formato e a oferta antes de comprar.'
  ),
  'worlds-2026-blg-gen-g-titulo': item(
    'B09S3Y124Y',
    'Mouse Logitech G PRO X SUPERLIGHT',
    'League of Legends é jogado com mouse e teclado no PC. Este modelo é uma opção de mouse leve para quem joga o MOBA; a escolha depende do tamanho da mão e da pegada.'
  ),
  'dragon-quest-rpg-mobile-beta-2027': item(
    'B0C9QLR5DZ',
    'Machenike G5 Pro — controle compatível com Android',
    'Se o jogo chegar ao seu celular Android e você preferir comandos físicos, este controle tem conexão Bluetooth e suporte a Android segundo o anúncio. Confira compatibilidade com o modelo do aparelho.'
  ),
  'valhalla-new-game-plus-ps5-pro-2026': item(
    'B0GL96NJL5',
    'Controle sem fio DualSense Midnight Black',
    'A matéria trata da atualização no PS5 Pro. Este controle é um acessório compatível com PS5; ele não substitui o console Pro necessário para os recursos gráficos citados.'
  ),
  'arc-raiders-frozen-trail-17-milhoes-contexto': item(
    'B09S3Y124Y',
    'Mouse Logitech G PRO X SUPERLIGHT',
    'Para jogar ARC Raiders no PC, um mouse leve pode ser uma opção para quem prefere mirar com mouse e teclado. Confira a conexão e o formato antes de escolher.'
  ),
  'halo-campaign-evolved-firefight-quatro-jogadores': item(
    'B0DJTJDN73',
    'Turtle Beach Stealth Pivot — controle para PC e Xbox',
    'Firefight é uma atividade cooperativa. Este controle funciona sem fio no PC e com fio no Xbox; confirme a plataforma e a conexão adequadas para o seu grupo.'
  ),
  'doom-slaughter-mode-revelations-requisitos': item(
    'B0FGDK8DJM',
    'Monitor AOC AGON Q27G4F, QHD e 180 Hz',
    'Para quem joga DOOM no PC, este monitor combina resolução QHD com taxa de atualização de até 180 Hz. O resultado também depende do computador e das configurações do jogo.'
  ),
  'xbox-classicos-pc-25-jogos-conquistas': item(
    'B0DJTJDN73',
    'Turtle Beach Stealth Pivot — controle para PC e Xbox',
    'Vários clássicos da lista podem ser jogados no PC. Este controle conecta sem fio ao Windows; confira a compatibilidade específica do jogo e a conexão antes da compra.'
  ),
  'review-ocarina-of-time-switch-2-pesquisa': item(
    'B0HM5JW3ZC',
    'The Legend of Zelda: Ocarina of Time — edição para Nintendo Switch 2',
    'A oferta corresponde ao jogo analisado nesta matéria, para Nintendo Switch 2. Confira o idioma, a edição e os detalhes do vendedor na página do produto.'
  ),
  'where-winds-meet-hutuo-campanha-perspectivas': item(
    'B0GL96NJL5',
    'Controle sem fio DualSense Midnight Black',
    'Where Winds Meet também pode ser jogado no PS5. Este controle é um acessório para essa plataforma; confira os recursos e a compatibilidade no anúncio.'
  ),
  'marvel-rivals-temporada-11-horarios-brasil': item(
    'B0GL96NJL5',
    'Controle sem fio DualSense Midnight Black',
    'Para quem joga Marvel Rivals no PS5, este é um controle adicional compatível com o console. A matéria não recomenda uma vantagem competitiva específica.'
  ),
  'once-human-temporada-5-colossus-fusos': item(
    'B0GL96NJL5',
    'Controle sem fio DualSense Midnight Black',
    'A temporada também foi anunciada para PS5. Este controle é uma opção compatível com o console; confira a versão e a oferta atual.'
  ),
  'vindictus-defying-fate-ps5-2027-personagens': item(
    'B0GL96NJL5',
    'Controle sem fio DualSense Midnight Black',
    'Vindictus: Defying Fate está previsto para PS5. Este acessório serve para a plataforma anunciada; verifique a compatibilidade e a disponibilidade antes de comprar.'
  ),
  'pikmin-4-switch-2-dandori-academy-lancamento': item(
    'B0F6CY514C',
    'Nintendo Switch 2 Pro Controller',
    'Para jogar Pikmin 4 no Switch 2 em casa, este é o controle Pro da plataforma. Os novos comandos por microfone do jogo continuam dependendo do console.'
  ),
  'review-metaphor-refantazio-pesquisa-2026': item(
    'B0F6CY514C',
    'Nintendo Switch 2 Pro Controller',
    'A análise aborda a conversão de Metaphor: ReFantazio para Switch 2. Este controle é um acessório da plataforma, não uma melhoria de desempenho do jogo.'
  ),
  'sonic-pico-park-cooperativo-plataformas': item(
    'B0BVKYX2RL',
    'Controle PowerA Enhanced para Nintendo Switch e Switch 2',
    'PICO PARK funciona melhor quando cada pessoa tem um comando disponível. Este controle é uma opção para Switch e Switch 2; confira se a versão e a conexão atendem ao seu grupo.'
  ),
  'warhammer-survivors-primeiros-passos-gitz': item(
    'B0DJTJDN73',
    'Turtle Beach Stealth Pivot — controle para PC e Xbox',
    'Warhammer Survivors está disponível no PC e no Xbox. Este controle funciona sem fio no PC e com fio no Xbox; verifique qual conexão faz sentido para a sua plataforma.'
  ),
  'football-manager-27-patch-lancamento-proximas-correcoes': item(
    'B09S3Y124Y',
    'Mouse Logitech G PRO X SUPERLIGHT',
    'Football Manager no PC é jogado principalmente com mouse e teclado. Este modelo leve é uma opção para quem passa bastante tempo navegando pelos menus; escolha considerando sua pegada e tamanho de mão.'
  ),
  'thronefall-craaghelm-expansao-jogo-base': item(
    'B0DJTJDN73',
    'Turtle Beach Stealth Pivot — controle para PC e Xbox',
    'Thronefall chegou também ao Xbox. Este controle pode ser usado com fio no console e sem fio no PC; confira o modo de conexão anunciado para o aparelho.'
  ),
  'ps-plus-novembro-2026-calendario-regional': item(
    'B0B7CPSN2K',
    'WD_BLACK SN850X M.2 NVMe de 1 TB com dissipador',
    'Se a biblioteca do PS5 já ocupa o armazenamento interno, um SSD M.2 compatível pode ampliar o espaço para jogos instalados. Confira a capacidade, o dissipador e os requisitos do console.'
  ),
  'xbox-cloud-gaming-limites-brasil-assinantes': item(
    'B0DJTJDN73',
    'Turtle Beach Stealth Pivot — controle para PC e Xbox',
    'O controle é um dos acessórios usados para jogar no PC e no Xbox. Confirme se a conexão oferecida funciona com o dispositivo que você usa para acessar a nuvem.'
  ),
  'escape-academy-2-coop-sem-cronometro': item(
    'B0DJTJDN73',
    'Turtle Beach Stealth Pivot — controle para PC e Xbox',
    'Para jogar a campanha cooperativa no PC ou no Xbox, este controle é uma opção adicional. Confira se a plataforma e a conexão atendem às pessoas que vão jogar.'
  ),
  'review-minecraft-dungeons-ii-2026': search(
    'Minecraft Dungeons II Deluxe Edition Nintendo Switch 2',
    'Minecraft Dungeons II Deluxe Edition para Nintendo Switch 2',
    'A busca é pela edição Deluxe de Switch 2 citada na review. Compare plataforma, conteúdo da edição, vendedor e disponibilidade na Amazon.'
  ),
  'steam-deck-verified-selos': search(
    'Steam Deck OLED console portátil',
    'Steam Deck OLED',
    'Esta busca reúne ofertas do portátil citado na matéria. Compare a capacidade de armazenamento, a tela e a condição do aparelho antes de comprar.'
  ),
  'pc-portatil-escolher-sistema': search(
    'ASUS ROG Xbox Ally X console portátil Windows',
    'ASUS ROG Xbox Ally X — PC portátil com Windows',
    'Esta busca reúne o portátil com Windows discutido no guia. Compare modelo, memória, armazenamento, vendedor e garantia com as alternativas SteamOS.'
  ),
  'xbox-black-friday-2026-calendario-regiao': item(
    'B08DF248LD',
    'Controle sem fio Xbox Carbon Black para Series X|S',
    'Acessório oficial para jogar no Xbox Series X|S, Xbox One ou PC. Esta oferta da Amazon não faz parte da campanha americana de Black Friday; confira preço, vendedor e disponibilidade no Brasil.'
  ),
  'ffxiv-road-evercold-30-dias-condicoes': search(
    'Final Fantasy XIV Dawntrail',
    'Produtos de Final Fantasy XIV na Amazon',
    'Busca por itens de Final Fantasy XIV. Confira plataforma, edição, região e se o produto é jogo, expansão ou colecionável; esta compra não substitui nem concede a campanha gratuita de retorno.'
  ),
  'aphelion-game-pass-premium-17-novembro': item(
    'B0FH1FLQQG',
    'EA SPORTS FC 26 para Xbox Series X',
    'Jogo pago para Xbox Series X, vendido separadamente. Não inclui Aphelion nem acesso ao Game Pass; confira a edição e a plataforma antes de comprar.'
  ),
  'nintendo-eshop-presentes-grupo-familiar-regiao': item(
    'B0C8M2XYJV',
    'Controle PowerA com fio para Nintendo Switch e Switch 2',
    'A listagem indica compatibilidade com Nintendo Switch e Switch 2; o botão C do Switch 2 não funciona neste modelo. Confira vendedor e disponibilidade.'
  ),
  'guild-saga-ps5-maio-2027-combate': item(
    'B0GL96NJL5',
    'Controle DualSense Midnight Black para PS5',
    'Acessório para o PS5 anunciado para Guild Saga. A oferta é do controle, não do jogo; confira compatibilidade, vendedor e disponibilidade na Amazon.'
  ),
  'rangers-path-xbox-17-novembro-parque': item(
    'B08DF248LD',
    'Controle sem fio Xbox Carbon Black para Series X|S',
    'Acessório compatível com Xbox Series X|S. A oferta é do controle, não de Ranger’s Path; confira conexão, vendedor e disponibilidade na Amazon.'
  ),
  'nba-2k27-vice-city-season-3-gta-beneficios': item(
    'B0HCCL1361',
    'NBA 2K27 para PlayStation 5',
    'Oferta da edição para PS5. Confira vendedor, versão e disponibilidade atuais; o conteúdo da temporada Vice City e os benefícios de GTA+ seguem as condições anunciadas pela 2K.'
  ),
  'review-star-wars-galactic-racer-pesquisa-2026': item(
    'B0GZ5GFCDL',
    'Star Wars: Galactic Racer — Deluxe Edition para PS5',
    'Oferta da Deluxe Edition física para PS5. Confira quais extras estão incluídos e o vendedor; esta análise não avalia separadamente o conteúdo adicional da edição.'
  ),
  'outer-worlds-2-side-effects-respec-dlc': search(
    'The Outer Worlds 2 PS5 Premium Edition DLC',
    'The Outer Worlds 2 para PS5 — edições e DLC',
    'Busca direcionada na Amazon. Compare plataforma, edição Premium ou upgrade e o que está incluído antes de comprar; não confirmamos estoque, preço ou uma oferta exata do DLC.'
  ),
};

const publishWithoutProductPhoto = new Set([
  'ps5-ssd-m2-escolha-instalacao',
  'monitor-gamer-hz-vrr-guia',
  'pc-gamer-equilibrar-cpu-gpu',
  'retrocompatibilidade-preservacao-games',
]);

export function applyAffiliateCatalog(posts) {
  return posts.map(post => {
    const offer = affiliateCatalog[post.id];
    const sources = offer
      ? [...(post.sources || []).filter(entry => !/Amazon Brasil — produto recomendado/.test(entry.label)), source('Amazon Brasil — produto recomendado', offer.affiliate)]
      : post.sources;
    const approval = post.id === 'review-red-dead-redemption-2-2026'
      ? {
          mode: 'direct-user-publication',
          explicitUserAuthorization: true,
          authorizationDate: '2026-11-16',
          authorizationBasis: 'O usuário enviou as imagens de Red Dead Redemption 2 e pediu que fossem usadas nesta matéria.',
          coverImage: post.image,
          bodyImage: post.inlineImage?.image,
          additionalImages: (post.additionalImages || []).map(image => image.image),
        }
      : post.publicationApproval;

    const next = {
      ...post,
      ...(offer || {}),
      ...(offer ? { affiliateResearch: {
        ...(post.affiliateResearch || {}),
        tag: affiliateTag,
        status: offer.affiliateLinkType === 'search' ? 'tagged-amazon-search' : 'amazon-brazil-product-link',
        checkedAt: post.relevanceDate === '2026-11-17' ? '2026-11-17' : '2026-11-16',
        notes: offer.affiliateLinkType === 'search'
          ? 'Busca Amazon Brasil com tag do portal; resultados, edição, preço e estoque precisam ser confirmados na página da loja. Foto do produto é opcional.'
          : 'Link direto Amazon Brasil conferido para o produto e a plataforma indicados. Preço e disponibilidade podem mudar; foto do produto é opcional.',
      } } : {}),
      ...(sources ? { sources } : {}),
      ...(approval ? { publicationApproval: approval } : {}),
    };

    if (publishWithoutProductPhoto.has(post.id)) {
      next.status = 'published';
      delete next.draftNotes;
    }
    if (post.id === 'review-red-dead-redemption-2-2026') {
      next.status = 'published';
      delete next.draftNotes;
    }
    if (offer && next.draftNotes) {
      next.draftNotes = next.draftNotes.replace(
        'Falta confirmar oferta Amazon pertinente e destino com a tag do portal.',
        offer.affiliateLinkType === 'search'
          ? 'Busca Amazon pertinente adicionada com a tag do portal; conferir edição, preço e disponibilidade.'
          : 'Oferta Amazon pertinente adicionada com link direto e a tag do portal.'
      );
    }
    return next;
  });
}
