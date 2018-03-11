import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

import './Nav.css';

class Nav extends PureComponent {
  render() {
    return (
      <div className="nav">
        <Link to="oferta" className="nav-item">
          Oferta
        </Link>
        <Link to="kontakt" className="nav-item">
          Kontakt
        </Link>
      </div>
    );
  }
}

export default Nav;
