const untestedReviewPattern = /não test(?:ou|amos|ei)|não jog(?:ou|amos|uei)|sem teste próprio|sem teste pr[oó]prio|não atribui nota/i;

export function labelResearchReview(post) {
  if ((post.section || '').toUpperCase() !== 'REVIEWS') return post;

  if (post.id === 'gta-v-review-retrospectiva') {
    return { ...post, title: 'Retrospectiva de GTA V: ainda vale a pena revisitar Los Santos?' };
  }

  if (!untestedReviewPattern.test(`${post.excerpt || ''} ${post.body || ''}`)) return post;

  let title = post.title
    .replace(/^Review editorial:\s*/i, 'Síntese de reviews: ')
    .replace(/^Review:\s*/i, 'Síntese de reviews: ')
    .replace(/^Review de ([^:]+):\s*/i, 'Síntese de reviews de $1: ');

  return title === post.title ? post : { ...post, title };
}
