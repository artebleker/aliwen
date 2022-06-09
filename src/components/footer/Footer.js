import React from "react";
import { NavLink } from "react-router-dom";
import { FooterLegal, FooterNav } from "./FooterData";
import "./footer.css";
import {TiSocialInstagram, TiMail} from "react-icons/ti";
const Footer = () => {
  return (
    <div className="footer">
      <ul>
        {FooterNav.map((fN, index) => {
          return (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "footer-link active" : "footer-link"
                }
                to={fN.path}
              >
                {fN.title}
                {fN.icon}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul>
        {FooterLegal.map((fL, index) => {
          return (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "footer-link active" : "footer-link"
                }
                to={fL.path}
              >
                {fL.title}
                {fL.icon}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul>
        <li>
        <a target='_blank' rel='noreferrer' href="https://www.instagram.com/aliwen.nat/?hl=es-la">
              <TiSocialInstagram fontSize={42} color={'#738f78'}/>
            </a>
        </li>
        <li>
        <a target='_blank' rel='noreferrer' href='mailto:aliwen.nat@gmail.com'><TiMail fontSize={46} color={'#738f78'}/></a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
