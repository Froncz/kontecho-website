import React from 'react';

import logo_text from '../../images/logo_text_black.png';

import "./AboutUs.css";

const functions = [
  "Oficera Bezpieczeństwa",
  "Pełnomocnika do spraw ochrony informacji niejawnych",
  "Administratora bezpieczeństwa informacji",
  "Inspektora bezpieczeństwa teleinformatycznego",
  "Inspektora bezpieczeństwa fizycznego"
];

const AboutUs = () => (
  <div className="about-us">
    <h2>
      <img
        className="about-us__image"
        src={logo_text}
        alt="Kontecho - Ochrona Danych"
      />
    </h2>
    <div className="about-us__text">
      <h3>Ochroną informacji i zabezpieczeniami zajmuję się od ponad 10 lat.</h3>
      <div className="about-us__functions">
        <div>Dotychczasowe doświadczenie zdobyłem w obszarze administracji rządowej i biznesie pełniąc funkcje:</div>
        {functions.map((title, key) => (
          <span key={key}>
            {title}
          </span>
        ))}
      </div>
      <div className="about-us__certificates">
        Posiadam niezbędne szkolenia i certyfikaty.
      </div>
    </div>
  </div>
);

export default AboutUs;
