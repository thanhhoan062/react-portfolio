import React from 'react';
import pageLinks from '../../constants/links';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          Portfolio
        </a>
        <div className="justify-content-end" id="navbarDefault">
          <ul className="navbar-nav">
            {pageLinks.map((link) => {
              return (
                <li className="nav-item" key={link.id}>
                  <NavLink
                    className="nav-link"
                    to={link.url}
                    activestyle={{ color: '#bda38f' }}
                  >
                    {link.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
