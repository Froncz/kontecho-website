import React from 'react';

import logo from '../../images/logo.png';

import './Logo.css';

const Logo = () => (
  <React.Fragment>
    <h1 className="logo">
      <img
        className="logo__image"
        src={logo}
        alt="Kontecho"
      />
    </h1>
    <div className="logo__layer-1" />
    <div className="logo__layer-2" />
  </React.Fragment>
);

export default Logo;
