import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FaClose from 'react-icons/lib/fa/close';

import AboutUs from '../AboutUs';
import Offer from '../Offer';
import Contact from '../Contact';

import logo from '../../images/logo.png';
import background from '../../images/background_mid.jpg';

import './Content.css';

class Content extends PureComponent {
  render() {
    const { location } = this.props;
    const pathname = location.pathname.substring(location.pathname.lastIndexOf("/") + 1, location.pathname.length);
    const overlay = pathname === 'oferta' || pathname === 'kontakt';
    let linkBack = '';

    if (pathname === 'oferta') {
      linkBack = location.pathname.substring(0, location.pathname.lastIndexOf("/oferta") + 1);
    }

    if (pathname === 'kontakt') {
      linkBack = location.pathname.substring(0, location.pathname.lastIndexOf("/kontakt") + 1);
    }

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
          {overlay && (
            <Link
              to={linkBack}
              className="content__close"
            >
              <img
                src={logo}
                alt="Kontecho"
              />
              <div>
                <FaClose />
              </div>
            </Link>
          )}
          {pathname === 'oferta' && <Offer />}
          {pathname === 'kontakt' && <Contact />}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default withRouter(Content);
