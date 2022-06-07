import React from "react";
import { NavLink } from "react-router-dom";
import { NavData } from "./NavData";
const NavBar = () => {
  return (
    <div>
      <div>
        <a href='https://www.instagram.com/aliwen.nat/?hl=es-la'>instagram</a>
        <a href='https://www.instagram.com/aliwen.nat/?hl=es-la'>mail</a>
      </div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={"/"}>
            Aliwen Logo
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {NavData.map((nav, index) => {
                return (
                  <>
                    {nav.dropdown ? (
                      <li key={index} className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href='#'
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {nav.title}
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdownMenuLink"
                        >
                          
                          {nav.dropdown.map((n, index) => {
                            return (
                              <li key={index}>
                                <NavLink className="dropdown-item" to={n.path}>
                                  {n.title}
                                </NavLink>
                              </li>
                            )
                          })}
                        </ul>
                      </li>
                    ) : (
                      <li key={index} className="nav-item">
                        <NavLink className="nav-link" to={nav.path}>
                          {nav.title}
                          {nav.icon}
                        </NavLink>
                      </li>
                    )}
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
