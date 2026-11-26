const today = '2026-11-26';
const checkedAt = '2026-11-26T10:07:00-03:00';
const terms = 'https://openai.com/policies/terms-of-use/';
const media = (file, alt, prompt) => ({
  image: `/images/editorial/2026-11-26/${file}.png`,
  alt: `Ilustração conceitual gerada por IA: ${alt}`,
  credit: 'Ilustração conceitual original gerada com OpenAI ImageGen — 26/11/2026',
  sourceUrl: terms,
  license: 'Saída gerada; titularidade do usuário conforme os Termos de Uso da OpenAI, sujeita à lei e a direitos de terceiros',
  licenseUrl: terms,
  prompt,
});
const coverPrompt = 'Myrtana como uma fronteira medieval de fantasia: viajante solitário visto de costas se aproxima de um portão de pedra danificado e casas iluminadas por tochas, montanhas ao fundo, paleta terrosa de verde e ocre, composição horizontal ampla, pintura editorial. Sem texto, logos, interface, personagens reconhecíveis ou fotorealismo.';
const bodyPrompt = 'Enquadramento fechado e distinto da capa: mãos ásperas desenrolam sobre uma mesa de taverna um mapa de fantasia com planícies verdes, montanhas nevadas e deserto abstratos, sem palavras; espada de ferro sem marca, caneca de madeira e vela. Paleta verde profunda e âmbar, pintura editorial. Sem texto, logo ou personagem reconhecível.';
const cover = media('gothic3-myrtana-cover', 'um viajante diante de uma aldeia murada em um vale de fantasia medieval', coverPrompt);
const inlineImage = media('gothic3-map-body', 'um mapa sem inscrições das três regiões fictícias sobre uma mesa de taverna', bodyPrompt);

export const dailyPosts20261126 = [{
  id: 'gothic-3-classic-review-pesquisa-20261126',
  category: 'GAMES', section: 'REVIEWS',
  tag: 'Gothic 3 Classic · review editorial baseada em pesquisa',
  title: 'Review: Gothic 3 Classic preserva um mundo que ainda dá vontade de explorar',
  excerpt: 'A edição de console adapta interface e inclui o Community Patch 1.75, mas relatos de falhas no lançamento pedem cautela. Esta análise resume reviews independentes; o Bits, Please não testou o jogo nem atribui nota.',
  date: '26 nov 2026', publishedAt: today, read: '6 min',
  image: cover.image, imageAlt: cover.alt, imageSource: cover.credit,
  imageSourceUrl: cover.sourceUrl, imageLicense: cover.license, imageLicenseUrl: cover.licenseUrl,
  inlineImage, body: `Esta é uma análise editorial baseada em reviews e informações públicas; o Bits, Please não testou Gothic 3 Classic e não atribui nota própria. A versão para PS5 e Xbox Series X|S chegou em 24 de novembro de 2026. A edição de Switch 2 foi adiada para o início de 2027, segundo a cobertura independente consultada.\n\nO argumento mais forte continua sendo Myrtana. A review de VanFLIP descreve uma aventura em que tarefas pequenas conectam personagens e lugares, fazendo o mundo parecer mais vivido do que sua idade sugere. A liberdade para percorrer regiões e escolher a quem apoiar é parte da identidade do RPG de 2006: o herói sem nome chega a um continente em guerra e pode favorecer facções rivais.\n\nA edição de console traz mudanças concretas. A página da PlayStation Store lista o Community Patch 1.75 integrado, interface e controles adaptados a gamepad e melhorias de jogabilidade. A THQ Nordic apresenta o lançamento como a forma mais otimizada de jogar o original. Isso não transforma o relançamento em remake: trata-se do mesmo RPG, com uma camada de adaptação e correções.\n\nA recepção inicial recomenda cautela. Reviews de lançamento destacam a persistência do mundo e as conveniências da interface, mas apontam que o combate e problemas técnicos envelheceram pior. A imprensa alemã relatou bugs e uma correção após a estreia; relatos de usuários são evidência anedótica, então não permitem medir a frequência dos problemas nem afirmar que todas as plataformas se comportam igual.\n\nVeredito editorial: Gothic 3 Classic parece mais atraente para quem valoriza exploração aberta, facções e sistemas de RPG do que para quem espera combate moderno ou acabamento uniforme. O Community Patch 1.75 e os controles adaptados são melhorias relevantes, mas ainda não há base para prometer uma experiência sem falhas. A busca abaixo procura o jogo para PS5 na Amazon Brasil; a disponibilidade e a edição precisam ser confirmadas na página da loja.`,
  status: 'draft',
  draftNotes: 'Manter em rascunho até confirmar oferta pertinente e verificável na Amazon Brasil. Busca etiquetada preparada como fallback; não foi localizada uma página de produto brasileiro confirmada. A análise não inclui teste próprio nem nota.',
  affiliate: 'https://www.amazon.com.br/s?k=Gothic+3+Classic+PS5&tag=bitsplease-20', affiliateLinkType: 'search',
  productName: 'Busca por Gothic 3 Classic para PS5 na Amazon Brasil',
  productPitch: 'A busca é pelo jogo tratado nesta análise; confira edição, região, formato e disponibilidade antes de comprar.',
  affiliateResearch: { checkedAt, source: 'Amazon Brasil', verified: 'Busca etiquetada preparada para a edição de PS5; nenhum anúncio de produto brasileiro foi confirmado. Não afirmar preço, estoque ou edição.' },
  sources: [
    { label: 'THQ Nordic — anúncio de lançamento e plataformas', url: 'https://thqnordic.com/news/vice-city-has-its-problems-but-have-you-seen-myrtana-gothic-3-classic-is-out-now-on-consoles' },
    { label: 'PlayStation Store — recursos e data da edição de PS5', url: 'https://store.playstation.com/en-us/product/EP4389-PPSA26879_00-GOTHIC3CLASSICWW/' },
    { label: 'VanFLIP — review da edição de console', url: 'https://vanflip.com/2026/11/gothic-3-classic-review/' },
    { label: 'Stadion Gaming — análise editorial e limites da versão de console', url: 'https://www.stadiongaming.eu/en/news/gothic-3-classic-review-a-cult-rpg-at-a-cheeky-console-price' },
    { label: 'GameStar — problemas reportados após o lançamento', url: 'https://www.gamestar.de/artikel/gothic-3-classic-release-bugs%2C3463878.html' },
    { label: 'Amazon Brasil — busca etiquetada, sem oferta confirmada', url: 'https://www.amazon.com.br/s?k=Gothic+3+Classic+PS5' },
    { label: 'OpenAI — Termos de Uso para saída gerada', url: terms },
  ],
  imageResearch: { checkedAt, method: 'Busca de imagens feita; não foi confirmada autorização comercial para um par de imagens reais. Duas ilustrações conceituais originais foram geradas individualmente; não são capturas nem artes oficiais.', assets: [
    { file: cover.image, tool: 'OpenAI ImageGen', prompt: coverPrompt },
    { file: inlineImage.image, tool: 'OpenAI ImageGen', prompt: bodyPrompt },
  ] },
  relevanceDate: today, relevanceUpdatedAt: checkedAt, relevanceScore: 58,
  relevanceBreakdown: { timeliness: 20, publicInterest: 12, reach: 10, sourceReliability: 12, brazilUtility: 4 },
  relevanceReason: 'Lançamento recente em consoles, com análise independente disponível e relatos iniciais de falhas que ajudam o leitor a decidir se deve esperar por correções. A disponibilidade de Switch 2 tem data diferente e não foi apresentada como lançamento atual.',
  relevanceSignals: [
    { label: 'THQ Nordic — lançamento em 24/11 para PS5 e Xbox Series', url: 'https://thqnordic.com/news/vice-city-has-its-problems-but-have-you-seen-myrtana-gothic-3-classic-is-out-now-on-consoles', sameDayVerified: false },
    { label: 'GameStar — relatos de falhas publicados em 26/11', url: 'https://www.gamestar.de/artikel/gothic-3-classic-release-bugs%2C3463878.html', sameDayVerified: true },
    { label: 'PlayStation Store — ficha de PS5 e descrição do Community Patch 1.75', url: 'https://store.playstation.com/en-us/product/EP4389-PPSA26879_00-GOTHIC3CLASSICWW/', sameDayVerified: false },
  ],
}];
