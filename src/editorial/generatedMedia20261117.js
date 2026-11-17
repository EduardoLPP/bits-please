const base = '/images/editorial-conceitual/2026-11-17/';
const terms = 'https://openai.com/policies/terms-of-use/';
const credit = 'Ilustração conceitual original gerada por IA com OpenAI ImageGen; não é captura de jogo nem arte oficial.';
const license = 'Output gerado conforme os Termos de Uso da OpenAI; titularidade sujeita à lei aplicável.';
export const generatedMedia20261117 = {
  'xbox-black-friday-2026-calendario-regiao': ['xbox', 'Duas lojas conceituais separadas por um oceano, com bandeiras dos Estados Unidos e do Brasil e etiquetas sem preços.', 'Calendário, relógio e globo relacionam os fusos dos Estados Unidos e do Brasil à conferência de edições de jogos.'],
  'ffxiv-road-evercold-30-dias-condicoes': ['ffxiv', 'Viajante de fantasia retorna a uma cidade gelada através de um grande portão, ao lado de uma ampulheta.', 'Diário de aventureiro, ampulheta e sequência de selos representam o tempo contínuo da campanha de retorno.'],
  'nba-2k27-vice-city-season-3-gta-beneficios': ['nba', 'Quadra de basquete à beira-mar, com hotéis art déco, palmeiras e iluminação neon em uma cidade conceitual.', 'Quadra de basquete vista de cima, com recompensas de temporada e pulseiras conceituais de acesso.'],
  'review-star-wars-galactic-racer-pesquisa-2026': ['racer', 'Veículos futuristas disputam uma corrida sobre a água em um cânion, com vapor quente e respingos azuis.', 'Bancada conceitual de equipe de corrida com um speeder, rotas e detalhes do equilíbrio entre calor e resfriamento.'],
  'outer-worlds-2-side-effects-respec-dlc': ['outer', 'Laboratório espacial abandonado, amostra alienígena e nave à deriva em uma composição de ficção científica retrô.', 'Armário futurista contrapõe reorganização de habilidades de personagem e uma missão em um vale alienígena.'],
  'aphelion-game-pass-premium-17-novembro': ['aphelion', 'Astronauta usa uma corda para ajudar um companheiro em desníveis de um planeta congelado, perto de uma cápsula caída.', 'Mapa de expedição no gelo e cartão de acesso ilustram caminhos diferentes para a mesma aventura espacial.'],
  'nintendo-eshop-presentes-grupo-familiar-regiao': ['eshop', 'Árvore de grupo familiar com oito avatares e um presente digital enviado entre aparelhos portáteis conceituais.', 'Presente digital diante de uma barreira entre aparelhos em regiões marcadas com bandeiras do Brasil e da Malásia.'],
  'guild-saga-ps5-maio-2027-combate': ['guild', 'Batalha tática conceitual em ilha tropical com mandrágora, chuva e relâmpagos interagindo com poças de água.', 'Equipamentos de expedição e pedras de disciplinas mágicas cercam um pequeno cenário de combinações táticas.'],
  'candy-crush-xbox-25-game-on-musica': ['candy', 'Orquestra em um salão de doces conceitual, com acordeão, cordas, coro e trilhas musicais coloridas.', 'Quadro de oito pins conceituais de doces junto de um acordeão e notas musicais.'],
  'rangers-path-xbox-17-novembro-parque': ['ranger', 'Guarda de parque remove um galho de uma trilha enquanto visitantes aguardam, com torre de observação e cachoeira ao fundo.', 'Mãos com luvas registram sinais de cervos em um diário de campo, ao lado de binóculos, câmera e mapa de trilhas.'],
  'gta-vi-expectativa': [null, null, 'Fila de adultos aguarda uma estreia em uma cidade tropical conceitual, com cortina fechada diante de uma maquete urbana.', 'gta-expectativa-body'],
  'gta-vi-ps5-pre-vendas': [null, null, 'Dois consoles sem marca em uma balança diante de uma cidade tropical, com lupa e gráfico sem resultados.', 'gta-ps5-body'],
  'gta-v-relevancia-industria': [null, null, 'Três ambientes de épocas diferentes observam a mesma cidade pela janela, representando a permanência de um jogo entre gerações.', 'gta-industry-body'],
  'gta-v-review-retrospectiva': [null, null, 'Três peças de personagens seguem rotas diferentes em um mapa urbano fictício sobre uma mesa de planejamento cinematográfico.', 'gta-review-body'],
};

// Fill only missing slots, including drafts already stored in the admin browser.
export function completeGeneratedMedia20261117(post) {
  const visual = generatedMedia20261117[post.id];
  if (!visual) return post;
  const coverNeeded = !post.image && visual[0];
  const bodyNeeded = !post.inlineImage?.image;
  if (!coverNeeded && !bodyNeeded) return post;
  const cover = `${base}${visual[0]}-cover.jpg`;
  const body = `${base}${visual[3] || `${visual[0]}-body`}.jpg`;
  const notes = 'Imagens editoriais completadas com artes conceituais específicas e distintas, geradas com ImageGen e identificadas como IA. Prompts e revisão registrados no relatório visual de 17/11/2026. Nenhuma foto de produto foi gerada.';
  return {
    ...post,
    ...(coverNeeded ? { image: cover, imageAlt: visual[1], imageSource: credit, imageSourceUrl: terms, imageLicense: license, imageLicenseUrl: terms } : {}),
    ...(bodyNeeded ? { inlineImage: { image: body, alt: visual[2], credit, sourceUrl: terms, license, licenseUrl: terms } } : {}),
    imageResearch: { ...post.imageResearch, status: 'generated-contextual-ai-reviewed', checkedAt: '2026-11-17', generator: 'OpenAI ImageGen', assets: [...(post.image ? [post.image] : coverNeeded ? [cover] : []), ...(bodyNeeded ? [body] : [post.inlineImage.image])], notes: `${post.imageResearch?.notes || ''} ${notes}`.trim() },
    ...(post.status === 'draft' ? { draftNotes: `Duas imagens editoriais presentes; ilustrações geradas estão identificadas como IA. Falta confirmar oferta Amazon pertinente e destino com a tag do portal. Foto de produto é opcional. ${post.id === 'nintendo-eshop-presentes-grupo-familiar-regiao' ? 'Confirmar disponibilidade e regras no suporte brasileiro antes de tratar como tutorial local.' : ''} Pontuação diária conservadora preservada; sem sinal publicado hoje no fuso brasileiro confirmado.` } : {}),
  };
}
