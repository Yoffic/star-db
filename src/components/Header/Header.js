import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <nav className="header d-flex">
      <h3><a href="/">StarDB</a></h3>
      <ul className="d-flex">
        <li className="active">
          <a href="/">People <span className="sr-only">(current)</span></a>
        </li>
        <li>
          <a href="/">Planets</a>
        </li>
        <li>
          <a href="/">Starships</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;