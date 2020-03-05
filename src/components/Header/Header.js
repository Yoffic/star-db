import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <nav className="header d-flex">
      <h3><Link to="/">StarDB</Link></h3>
      <ul className="d-flex">
        <li className="active">
          <Link to="/people">People <span className="sr-only">(current)</span></Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/starships">Starships</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;