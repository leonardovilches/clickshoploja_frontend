import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={style.container}>
      <nav className={style.navButtons}>
        <Link to="/clientes" className={style.buttons}>
          Clientes
        </Link>
        <Link to="/Login" className={style.buttons}>
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Header;
