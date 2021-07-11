import React from 'react';
import { Link } from 'react-router-dom';

function MainNavbar(props) {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/board_members">Board Members</Link>
      <Link to="/donate">Donate</Link>
      <Link to="/contact-us">Contact Us</Link>
    </div>
  );
}

export default MainNavbar;
