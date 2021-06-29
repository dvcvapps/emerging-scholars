import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainNavbar from './components/MainNavbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './screens/Home.jsx';
import About from './screens/About.jsx';
import BoardMembers from './screens/BoardMembers.jsx';
import Donate from './screens/Donate.jsx';

function App() {
  return (
    <Router>
        <MainNavbar/>
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
        <Footer/>
    </Router>
  );
}

export default App;
