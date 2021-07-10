/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import MainNavbar from './components/custom/MainNavbar';
import Footer from './components/Footer';

import Home from './screens/Home';
import Contact from './screens/Contact';
import BoardMembers from './screens/BoardMembers';
import Donate from './screens/Donate';

function App() {
  return (
    <Router basename="base">
      <MainNavbar />
      <Switch>
        <Route path="/contact">
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
