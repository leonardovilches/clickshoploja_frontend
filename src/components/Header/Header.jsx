import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Profile from "./Profile/Profile";
import { ReactComponent as ClickShopLogo } from "../../assets/logo.svg";

function Header({ toggleMenu }) {
  return (
    <header className="header">
      <input
        type="checkbox"
        id="menu"
        className="header__button-menu-toggle"
        onClick={toggleMenu}
      />
      <label for="menu" className="header__button-menu">
        <span className="header__button-menu-line line-1"></span>
        <span className="header__button-menu-line line-2"></span>
        <span className="header__button-menu-line line-3"></span>
      </label>
      <ClickShopLogo className="header__logo" />
      <Profile className="header__profile" />
    </header>
  );
}

export default Header;
