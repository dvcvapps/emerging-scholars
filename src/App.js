import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


function App() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">HOME</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">About</Nav.Link>
          <Nav.Link href="#pricing">Members</Nav.Link>

        </Nav>
        <Nav>
          <Nav.Link >
            DONATE
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default App;
