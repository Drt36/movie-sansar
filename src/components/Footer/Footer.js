import React from "react";
import "./footer.css";
import { AiFillFacebook,AiFillYoutube,AiFillTwitterSquare } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <ul className="link-left">
        <h4 className="link-left__title">Quick Links</h4>
        <li className="link-left__list">
          <NavLink to={"/action"}>Action</NavLink>
        </li>
        <li className="link-left__list">
          <NavLink to={"/crime"}>Crime</NavLink>
        </li>
        <li className="link-left__list">
          <NavLink to={"/dramma"}>Dramma</NavLink>
        </li>
        <li className="link-left__list">
          <NavLink to={"/thriller"}>Thriller</NavLink>
        </li>
      </ul>
      <div className='link-center'>
        <p className="footer__copyright">
          &#169; 2021 copyright all right reserved{" "}
          <span className="highlight">Movie Sansar!</span>
        </p>
        <div className='social-links'>
            <AiFillFacebook/>
            <AiFillYoutube/>
            <AiFillTwitterSquare/>
        </div>
      </div>

      <ul className="link-right">
        <h4 className="link-right__title">Privacy & Policy</h4>
        <li className="link-right__list">
          <NavLink to={"/privacy"}>Privacy Policy</NavLink>
        </li>
        <li className="link-right__list">
          <NavLink to={"/terms"}>Terms Of Services</NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
