import React, { PureComponent } from 'react';


import './Nav.css';

class Nav extends PureComponent {
  render() {
    return (
      <div className="nav">
        <div className="nav-item">
          Oferta
        </div>
        <div className="nav-item">
          Kontakt
        </div>
      </div>
    );
  }
}

export default Nav;
