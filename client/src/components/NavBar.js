import React from 'react';
import '../stylesheets/navbar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return(
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/playoff-picture">Playoff Picture</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
