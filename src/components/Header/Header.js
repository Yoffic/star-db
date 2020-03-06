import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <nav className="header d-flex">
      <h3><NavLink to="/">StarDB</NavLink></h3>
      <ul className="d-flex">
        <li>
          <NavLink to="/people/" activeClassName='active'>People</NavLink>
        </li>
        <li>
          <NavLink to="/planets/" activeClassName='active'>Planets</NavLink>
        </li>
        <li>
          <NavLink to="/starships/" activeClassName='active'>Starships</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;