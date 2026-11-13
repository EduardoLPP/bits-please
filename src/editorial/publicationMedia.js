const conceptCredit = 'Ilustração conceitual simplificada gerada com ImageGen; não é captura nem arte oficial.';
const conceptDir = '/images/editorial-conceitual/';

const art = {
  'wolfenstein-3-producao-machinegames-confirmada': {
    cover: 'wolfenstein-3-cover-simple.png',
    coverAlt: 'Silhueta conceitual simplificada de um combatente genérico diante de formas vermelhas e escuras.',
    body: '/images/wolfenstein-wordmark-user-supplied.jpg',
    bodyAlt: 'Wordmark de Wolfenstein fornecido pelo usuário, em branco sobre fundo vermelho.',
    bodyCredit: 'Imagem fornecida pelo usuário; usada com autorização expressa.',
    userImage: true,
  },
  'halo-campaign-evolved-firefight-quatro-jogadores': {
    cover: 'halo-firefight-cover-simple.png', coverAlt: 'Silhuetas de combatentes em uma composição gráfica simples sobre fundo claro.',
    body: 'halo-firefight-body-simple.png', bodyAlt: 'Silhuetas simplificadas de uma equipe em uma arena de combate.',
  },
  'doom-slaughter-mode-revelations-requisitos': {
    cover: 'doom-slaughter-cover-simple.png', coverAlt: 'Ilustração conceitual gráfica de um combate infernal em poucos blocos de cor.',
    body: 'doom-slaughter-body-simple.png', bodyAlt: 'Silhueta de um combatente diante de formas abstratas e cores quentes.',
  },
  'xbox-classicos-pc-25-jogos-conquistas': {
    cover: 'xbox-classics-cover-simple.png', coverAlt: 'Formas simples que representam jogos clássicos acessíveis em um computador.',
    body: 'xbox-classics-body-simple.png', bodyAlt: 'Ilustração conceitual de um controle diante de formas geométricas de jogos.',
  },
  'xbox-insider-fundos-guia-personalizacao': {
    cover: 'xbox-insider-cover-simple.png', coverAlt: 'Composição minimalista de cores e formas para representar a personalização de uma interface de console.',
    body: 'xbox-insider-body-simple.png', bodyAlt: 'Formas abstratas de fundo em uma composição gráfica simples.',
  },
  'review-ocarina-of-time-switch-2-pesquisa': {
    cover: 'ocarina-cover-simple.png', coverAlt: 'Silhueta de um aventureiro diante de uma paisagem fantástica simplificada.',
    body: 'ocarina-body-simple.png', bodyAlt: 'Ilustração conceitual de uma aventura fantástica em formas e cores planas.',
  },
  'where-winds-meet-hutuo-campanha-perspectivas': {
    cover: 'where-winds-cover-simple.png', coverAlt: 'Silhueta de um viajante diante de montanhas e um sol em uma composição plana.',
    body: 'where-winds-body-simple.png', bodyAlt: 'Paisagem conceitual de rio e montanhas em formas simples.',
  },
  'marvel-rivals-temporada-11-horarios-brasil': {
    cover: 'marvel-rivals-cover-simple.png', coverAlt: 'Duas silhuetas de heróis em oposição, desenhadas com grandes blocos de cor.',
    body: 'marvel-rivals-body-simple.png', bodyAlt: 'Três silhuetas genéricas em uma arena gráfica de cores fortes.',
  },
  'once-human-temporada-5-colossus-fusos': {
    cover: 'once-human-cover-simple.png', coverAlt: 'Silhueta abstrata de uma criatura gigante acima de pequenos viajantes.',
    body: 'once-human-body-simple.png', bodyAlt: 'Combatente genérico diante de uma criatura colossal em formas planas.',
  },
  'vindictus-defying-fate-ps5-2027-personagens': {
    cover: 'vindictus-cover-simple.png', coverAlt: 'Silhueta de um herói diante de uma paisagem de fantasia simplificada.',
    body: 'vindictus-body-simple.png', bodyAlt: 'Duas silhuetas em confronto diante de ruínas em tons quentes.',
  },
  'pikmin-4-switch-2-dandori-academy-lancamento': {
    cover: 'pikmin4-cover-simple.png', coverAlt: 'Pequeno explorador e formas vegetais coloridas em uma ilustração simples.',
    body: 'pikmin4-body-simple.png', bodyAlt: 'Figuras vegetais coloridas carregam uma folha grande em uma ilustração plana.',
  },
  'football-manager-27-patch-lancamento-proximas-correcoes': {
    cover: 'fm27-cover-simple.png', coverAlt: 'Silhueta de um técnico observando um campo e um quadro tático simplificado.',
    body: 'fm27-body-simple.png', bodyAlt: 'Quadro tático com poucas formas de jogadores em um campo de futebol.',
  },
  'ps-plus-novembro-2026-calendario-regional': {
    cover: 'psplus-cover-simple.png', coverAlt: 'Controle e cartões de jogos representados por formas geométricas simples.',
    body: 'psplus-body-simple.png', bodyAlt: 'Ícones geométricos de entretenimento em uma composição plana.',
  },
  'escape-academy-2-coop-sem-cronometro': {
    cover: 'escape-academy-2-cover-simple.png', coverAlt: 'Duas silhuetas observam uma porta com formas de quebra-cabeça.',
    body: 'escape-academy-2-body-simple.png', bodyAlt: 'Dois jogadores resolvem juntos um enigma de porta e chave.',
  },
  'review-red-dead-redemption-2-2026': {
    cover: 'rdr2-cover-simple.png', coverAlt: 'Silhueta genérica de um viajante a cavalo em uma paisagem de fronteira.',
    body: 'rdr2-body-simple.png', bodyAlt: 'Duas silhuetas genéricas junto a uma fogueira sob o céu noturno.',
  },
  'review-phantom-blade-zero-2026': {
    cover: 'phantom-blade-cover-simple.png', coverAlt: 'Silhueta de um espadachim diante de uma grande forma vermelha.',
    body: 'phantom-blade-body-simple.png', bodyAlt: 'Espada e arcos de movimento em uma composição gráfica minimalista.',
  },
};

export function applyPublicationMedia(posts) {
  return posts.map(post => {
    const visual = art[post.id];
    if (!visual) return post;

    const cover = `${conceptDir}${visual.cover}`;
    const body = visual.userImage ? visual.body : `${conceptDir}${visual.body}`;
    const approval = {
      mode: 'direct-user-publication',
      explicitUserAuthorization: true,
      authorizationDate: '2026-11-13',
      authorizationBasis: 'O usuário autorizou expressamente revisar, ilustrar e publicar os rascunhos.',
      coverImage: cover,
      bodyImage: body,
      imageRightsUnverified: Boolean(visual.userImage),
      affiliateOfferUnverified: true,
    };
    const { draftNotes, pendingInlineImage, ...reviewedPost } = post;

    return {
      ...reviewedPost,
      image: cover,
      imageAlt: visual.coverAlt,
      imageSource: conceptCredit,
      imageSourceUrl: '',
      imageLicense: '',
      imageLicenseUrl: '',
      inlineImage: {
        image: body,
        alt: visual.bodyAlt,
        credit: visual.bodyCredit || conceptCredit,
        sourceUrl: '',
        license: '',
        licenseUrl: '',
      },
      additionalImages: [],
      pendingInlineImage: undefined,
      imageResearch: {
        query: `Ilustração conceitual simples para ${post.title}; criada para a matéria com ImageGen.`,
        checkedAt: '2026-11-13T08:59:00-03:00',
        status: 'simple-ai-concept-created-and-user-authorized',
        sources: [{ label: 'Imagem conceitual original criada com ImageGen; não representa captura nem arte oficial.' }],
        notes: 'Formas gráficas simplificadas, silhuetas claras e paleta contida, conforme preferência do usuário. A imagem fornecida para Wolfenstein permanece identificada como tal.',
      },
      publicationApproval: approval,
      affiliate: undefined,
      productName: undefined,
      productPitch: undefined,
      productImage: undefined,
      editorialPendingNotes: 'Publicado por autorização expressa. Nenhum botão de compra foi mantido sem oferta e destino afiliado confirmados. A arte conceitual está identificada na matéria.',
      date: '13 nov 2026',
      publishedAt: '2026-11-13',
      status: 'published',
    };
  });
}
