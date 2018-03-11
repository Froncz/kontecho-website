import React, { PureComponent } from 'react';

import background from '../../images/background_mid.jpg';

import './Content.css';

class Content extends PureComponent {
  render() {
    return (
      <div className="content">
        <div className="content__layer" />
        <img
          className="content__image"
          src={background}
          alt="Ochrona danych"
        />
        <div className="content__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Content;
