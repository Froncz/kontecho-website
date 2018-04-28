import React from 'react';

import logo_text from '../../images/logo_text_black.png';

import "./AboutUs.css";

const AboutUs = ({ content: { o_nas } }) => (
  <div className="about-us">
    <h2>
      <img
        className="about-us__image"
        src={logo_text}
        alt="Kontecho - Ochrona Danych"
      />
    </h2>
    <div className="about-us__text">
      <h3>
        {o_nas.podtytul}
      </h3>
      <div className="about-us__functions">
        <strong>
          {o_nas.doswiadczenie}
        </strong>
        <div>
          {o_nas.funkcje && o_nas.funkcje.map((title, key) => (
            <span key={key}>
              {title}
            </span>
          ))}
        </div>
      </div>
      <div className="about-us__certificates">
        {o_nas.certyfikaty}
      </div>
    </div>
  </div>
);

export default AboutUs;
