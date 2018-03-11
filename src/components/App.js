import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Content from './Content';
import Logo from './Logo';
import Nav from './Nav';

import './App.css';

const App = (props) => {
  return (
    <Router>
      <div className="App">
        <Logo />
        <Content />
        <Nav />
      </div>
    </Router>
  );
}

export default App;
