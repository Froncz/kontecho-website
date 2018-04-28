import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import './Offer.css';

const Offer = ({ content: { oferta }}) => (
  <Scrollbars
    renderThumbHorizontal={() => <div className="thumb thumb--horizontal"/>}
    renderThumbVertical={() => <div className="thumb thumb--vertical"/>}
    className="content__overlay offer"
    style={{ position: window.innerWidth <= 768 ? 'fixed' : 'absolute' }}
  >
    <div className="inner">
      <h3>{oferta.tytul}</h3>
      <div>
        <p>
        {oferta.nasza_specjalnosc}
        </p>
        <hr />
        <p>{oferta.wsparcie}</p>
        <div className="offer__list">
          {oferta.zakres && oferta.zakres.map((title, key) => (
            <div
              key={key}
              className="offer__list-item"
            >
              {title}
            </div>
          ))}
        </div>
        <p>{oferta.uslugi}</p>
      </div>
    </div>
  </Scrollbars>
);

export default Offer;
