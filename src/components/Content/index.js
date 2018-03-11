import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FaClose from 'react-icons/lib/fa/close';

import AboutUs from '../AboutUs';
import Offer from '../Offer';
import Contact from '../Contact';

import background from '../../images/background_mid.jpg';

import './Content.css';

class Content extends Component {
  render() {
    const { location } = this.props;

    return (
      <div className="content">
        <div className="content__layer" />
        <img
          className="content__image"
          src={background}
          alt="Ochrona danych"
        />
        <div className="content__content">
          <AboutUs />
        </div>
        <ReactCSSTransitionGroup
          transitionName="element"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {location.pathname !== '/' && (
            <Link
              to="/"
              className="content__close"
            >
              <FaClose />
            </Link>
          )}
          {location.pathname === '/oferta' && <Offer />}
          {location.pathname === '/kontakt' && <Contact />}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default withRouter(Content);
