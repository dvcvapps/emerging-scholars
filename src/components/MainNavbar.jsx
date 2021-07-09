import React from 'react';
import { Link } from 'react-router-dom';

function MainNavbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/board_members">Board Members</Link>
      <Link to="/donate">Donate</Link>
    </div>
  );
}

export default MainNavbar;
