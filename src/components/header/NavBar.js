import React from "react";
import { NavLink } from "react-router-dom";
import { NavData } from "./NavData";
import "./header.css";
import { TiSocialInstagram, TiMail } from "react-icons/ti";
import CartWidget from "../cart/CartWidget";
const NavBar = () => {
  return (
    <div>
      <div className="header-social-container ">
        <ul className="header-social">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/aliwen.nat/?hl=es-la"
            >
              <TiSocialInstagram fontSize={32} color={"#738f78"} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:aliwen.nat@gmail.com"
            >
              <TiMail fontSize={36} color={"#738f78"} />
            </a>
          </li>
        </ul>
      </div>
      <nav className="navbar navbar-expand-lg bg-light header-navbar ">
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
          <div className="collapse navbar-collapse dropdown-position" id="navbarNav"  >
            <ul className="navbar-nav "  >
              {NavData.map((nav, index) => {
                return (
                  <div key={index}>
                    {nav.dropdown ? (
                      <li className="nav-item dropdown ">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {nav.title}
                        </a>
                        <ul
                          className="dropdown-menu drop-props"
                          aria-labelledby="navbarDropdownMenuLink"
                        >
                          {nav.dropdown.map((n, index) => {
                            return (
                              <li key={index}>
                                <NavLink
                                  className={({ isActive }) =>
                                    isActive
                                      ? "dropdown-item active"
                                      : "dropdown-item"
                                  }
                                  to={n.path}
                                >
                                  {n.title}
                                </NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    ) : (
                      <li className="nav-item">
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                          }
                          to={nav.path}
                        >
                          {nav.title}
                          {nav.icon}
                        </NavLink>
                      </li>
                    )}
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        
        <CartWidget />
      
      </nav>
    </div>
  );
};

export default NavBar;
