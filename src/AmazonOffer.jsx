import React from 'react';
import './amazon-offer.css';

export function hasProductPhoto(photo) {
  return Boolean(photo?.image && photo.alt && photo.credit && photo.sourceUrl && photo.license && photo.licenseUrl);
}

export default function AmazonOffer({ article }) {
  if (!article.affiliate) return null;
  const photo = hasProductPhoto(article.productImage) ? article.productImage : null;
  const isSearch = article.affiliateLinkType === 'search';
  return <aside className={`amazon-offer ${photo ? 'has-photo' : 'without-photo'}`} aria-label="Produto na Amazon">
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
    </div>
  </aside>;
}
