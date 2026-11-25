import React from 'react';
import './amazon-offer.css';

export function hasProductPhoto(photo) {
  return Boolean(photo?.image && photo.alt && photo.credit && photo.sourceUrl && photo.license && photo.licenseUrl);
}

export default function AmazonOffer({ article }) {
  if (!article.affiliate) {
    if (!article.officialLink) return null;
    return <aside className="amazon-offer official-link without-photo" aria-label="Link oficial sem comissão">
      <div className="amazon-offer-copy">
        <span className="amazon-offer-label">LINK OFICIAL · SEM COMISSÃO</span>
        <h2>{article.officialLinkTitle || 'Página oficial relacionada à matéria'}</h2>
        {article.officialLinkPitch && <p>{article.officialLinkPitch}</p>}
        <a className="amazon-offer-button" href={article.officialLink} target="_blank" rel="noreferrer noopener">
          {article.officialLinkLabel || 'Abrir página oficial'}
        </a>
        <small className="amazon-offer-disclosure">Este link leva a uma página oficial e não gera comissão para o Bits, Please.</small>
      </div>
    </aside>;
  }
  const photo = hasProductPhoto(article.productImage) ? article.productImage : null;
  const isSearch = article.affiliateLinkType === 'search';
  const relatedOffers = Array.isArray(article.relatedOffers) ? article.relatedOffers : [];
  return <aside className={`amazon-offer ${photo ? 'has-photo' : 'without-photo'}`} aria-label="Oferta e jogos relacionados">
    {photo && <figure className="amazon-offer-photo">
      <img src={photo.image} alt={photo.alt} loading="lazy" />
      <figcaption><a href={photo.sourceUrl} target="_blank" rel="noreferrer">{photo.credit} ↗</a> · <a href={photo.licenseUrl} target="_blank" rel="noreferrer">{photo.license}</a></figcaption>
    </figure>}
    <div className="amazon-offer-copy">
      <span className="amazon-offer-label">NA AMAZON</span>
      <h2>{article.productName || 'Produto relacionado à matéria'}</h2>
      {article.productPitch && <p>{article.productPitch}</p>}
      <a className="amazon-offer-button" href={article.affiliate} target="_blank" rel="noreferrer sponsored noopener">
        {isSearch ? 'Ver opções na Amazon' : 'Ver na Amazon'} <span aria-hidden="true">↗</span>
      </a>
      <small className="amazon-offer-disclosure">Como participante do Programa de Associados da Amazon, sou remunerado pelas compras qualificadas efetuadas.</small>
      {relatedOffers.length > 0 && <div className="amazon-offer-related">
        <h3>Jogos relacionados</h3>
        <ul>{relatedOffers.map((offer, index) => <li key={`${offer.productName}-${index}`}>
          <div>
            <strong>{offer.productName}</strong>
            {offer.productPitch && <p>{offer.productPitch}</p>}
          </div>
          <a className="amazon-offer-related-link" href={offer.external ? offer.href : offer.affiliate} target="_blank" rel={offer.external ? 'noreferrer noopener' : 'noreferrer sponsored noopener'}>
            {offer.linkLabel || (offer.external ? 'Abrir página do jogo' : 'Ver opções na Amazon')} <span aria-hidden="true">↗</span>
          </a>
        </li>)}</ul>
        {relatedOffers.some(offer => offer.affiliate) && <small className="amazon-offer-disclosure">Os links da Amazon acima podem gerar comissão para o Bits, Please, sem custo adicional para você.</small>}
      </div>}
    </div>
  </aside>;
}
