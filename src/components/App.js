import React, { Component } from 'react';

import Content from './Content';
import Logo from './Logo';
import Nav from './Nav';
import AboutUs from './AboutUs';
import Offer from './Offer';
import Contact from './Contact';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Content>
          <AboutUs />
          <Offer />
          <Contact />
        </Content>
      </div>
    );
  }
}

export default App;
