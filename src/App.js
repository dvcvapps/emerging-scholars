/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import {
  HashRouter as Router, Switch, Route, useLocation,
} from 'react-router-dom';

import MainNavbar from './components/custom/MainNavbar';
import MainFooter from './components/custom/MainFooter';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import BoardMembers from './pages/BoardMembers';
import Donate from './pages/Donate';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainNavbar />
      <Switch>
        <Route path="/about-us">
          <AboutUs />
        </Route>
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
      <MainFooter />
    </Router>
  );
}

export default App;
