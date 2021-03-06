import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1 className="nav__logo">Movie Sansar</h1>
      <div className="nav-wrapper">
        <ul className="nav__menu">
          <li className="nav_item">
            <NavLink exact to={"/"}>
              Home
            </NavLink>
          </li>
          <li id="movies" className="nav_item">
            Movies <BsChevronDown />
            <ul className="nav__submenu">
              <li className="nav__subitem">
                <NavLink to={"/movies/action"}>Action</NavLink>
              </li>
              <li className="nav__subitem">
                <NavLink to={"/movies/crime"}>Crime</NavLink>
              </li>
              <li className="nav__subitem">
                <NavLink to={"/movies/drama"}>Dramma</NavLink>
              </li>
              <li className="nav__subitem">
                <NavLink to={"/movies/thriller"}>Thriller</NavLink>
              </li>
            </ul>
          </li>
          <li className="nav_item">
            <NavLink to={"/watchlist/all"}>Watchlist</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
