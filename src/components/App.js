import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Content from './Content';
import Logo from './Logo';
import Nav from './Nav';

import './App.css';

const App = (props) => (
  <Router>
    <div className="App">
      <Logo />
      <Route
        path="*"
        component={Content}
      />
      <Nav />
    </div>
  </Router>
);

export default App;
