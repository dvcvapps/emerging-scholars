/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainNavbar from './components/custom/MainNavbar';
import Footer from './components/Footer';

import Home from './screens/Home';
import About from './screens/About';
import BoardMembers from './screens/BoardMembers';
import Donate from './screens/Donate';

function App() {
  return (
    <Router>
      <MainNavbar />
      <Switch>
        <Route path="/about">
          <About />
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
