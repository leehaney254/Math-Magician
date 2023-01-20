import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <header className="navbar">
    <nav id="navDisplay">
      <p id="logo">Math Magicians</p>
      <ul id="links">
        <li>
          <NavLink data-testid="home-link" className="link" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink data-testid="calculator-link" className="link" to="/calculator">calculator</NavLink>
        </li>
        <li>
          <NavLink data-testid="quote-link" className="link" to="/quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
