import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <header className="navbar">
    <nav id="navDisplay">
      <p id="logo">Math Magicians</p>
      <ul id="links">
        <li>
          <NavLink className="link" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="link" to="/calculator">calculator</NavLink>
        </li>
        <li>
          <NavLink className="link" to="/quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
