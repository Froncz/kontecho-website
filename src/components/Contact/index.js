import React from 'react';
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';
import FaEnvelopeSquare from 'react-icons/lib/fa/envelope-square';
import FaMap from 'react-icons/lib/fa/map';

import logo_text from '../../images/logo_text_black.png';

import './Contact.css';

const Contact = () => (
  <div className="content__overlay contact">
    <h3>Kontakt</h3>
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
          <strong>Tomasz Puta</strong>
          <div>
            <a href="https://goo.gl/maps/DcxqKyzDs8s">
              <FaMap />
              <div>
                <span>ul. Żytnia 26/64</span>
                <span>08-110 Siedlce</span>
              </div>
            </a>
            <div>
              <div>
                <a href="tel:+48604105315">
                  <FaPhoneSquare />
                  tel. 604105315
                </a>
                <a href="mailto:biuro@kontecho.pl">
                  <FaEnvelopeSquare />
                  biuro@kontecho.pl
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
