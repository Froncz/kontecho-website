import React from 'react';
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';
import FaEnvelopeSquare from 'react-icons/lib/fa/envelope-square';
import FaMap from 'react-icons/lib/fa/map';
import { Scrollbars } from 'react-custom-scrollbars';

import logo_text from '../../images/logo_text_black.png';

import './Contact.css';

const Contact = ({ content: { kontakt }}) => (
  <Scrollbars
    renderThumbHorizontal={() => <div className="thumb thumb--horizontal"/>}
    renderThumbVertical={() => <div className="thumb thumb--vertical"/>}
    className="content__overlay contact"
    style={{ position: window.innerWidth <= 768 ? 'fixed' : 'absolute' }}
  >
    <div className="inner">
      <h3>{kontakt.tytul}</h3>
      <div className="contact__form">
        <div className="contact__company-info">
          <div className="contact__company">
            <img
              className="contact__image"
              src={logo_text}
              alt="Kontecho - Ochrona Danych"
            />
          </div>
          <div className="contact__info">
            <strong>{kontakt.nazwa}</strong>
            <div>
              <a href="https://goo.gl/maps/DcxqKyzDs8s">
                <FaMap />
                <div>
                  <span>{kontakt.adres1}</span>
                  <span>{kontakt.adres2}</span>
                </div>
              </a>
              <div>
                <div>
                  <a href={`tel:+48${kontakt.numer}`}>
                    <FaPhoneSquare />
                    tel. {kontakt.numer}
                  </a>
                  <a href="mailto:biuro@kontecho.pl">
                    <FaEnvelopeSquare />
                    {kontakt.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Scrollbars>
);

export default Contact;
