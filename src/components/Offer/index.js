import React from 'react';

import './Offer.css';

const range = [
  'uzyskania świadectwa bezpieczeństwa przemysłowego',
  'uzyskania akredytacji bezpieczeństwa teleinformatycznego',
  'opracowania i wdrożenia polityki bezpieczeństwa',
  'opracowania i implementacji planu ochrony',
  'szkolenia z zakresu ochrony danych osobowych i informacji niejawnych'
]

const Offer = () => (
  <div className="content__overlay offer">
    <h3>Oferta</h3>
    <div>
      <p>
        Naszą specjalnością jest świadczenie usług konsultingowych i doradczych związanych z ochroną informacji niejawnych, danych osobowych oraz tajemnicy przedsiębiorstwa. Oferujemy usługi w zakresie doboru zabezpieczeń fizycznych, elektronicznych i bezpieczeństwa systemów teleinformatycznych.
      </p>
      <hr />
      <p>Udzielamy wsparcia w zakresie:</p>
      <div className="offer__list">
        {range.map((title, key) => (
          <div
            key={key}
            className="offer__list-item"
          >
            {title}
          </div>
        ))}
      </div>
      <p>Świadczymy usługi związane z utrzymaniem i instalacją systemów bezpieczeństwa.</p>
    </div>
  </div>
);

export default Offer;
