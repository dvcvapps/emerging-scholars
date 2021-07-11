/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import MainNavbar from './components/custom/MainNavbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contact';
import BoardMembers from './pages/BoardMembers';
import Donate from './pages/Donate';

function App() {
  return (
    <Router>
      <MainNavbar />
      <Switch>
        <Route path="/contact-us">
          <Contact />
        </Route>
        <Route path="/donate">
          <Donate />
        </Route>
        <Route path="/board_members">
          <BoardMembers />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
