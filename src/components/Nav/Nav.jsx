import React from "react";
import { ReactComponent as LivesIcon } from "../../assets/lives_icon.svg";
import { ReactComponent as EnterprisesIcon } from "../../assets/enterprises_icon.svg";
import "./Nav.scss";
import { useEffect } from "react";

function Nav({ menuState }) {
  const svgSize = 32;

  useEffect(() => {
    let sidebar = document.getElementById("sidebar");

    if (menuState) {
      sidebar.classList.add("expanded");
      sidebar.classList.remove("collapsed");
    } else {
      sidebar.classList.add("collapsed");
      sidebar.classList.remove("expanded");
    }
  }, [menuState]);

  function selectItem(evt) {
    let items = document.querySelectorAll(".menu__links__link");
    items.forEach((i) => {
      i.classList.remove("selected");
    });
    evt.currentTarget.classList.add("selected");
  }

  return (
    <nav className="menu collapsed" id="sidebar">
      <ul className="menu__links">
        <a href="###" className="menu__links__link" onClick={selectItem}>
          <figure className="menu__links__link__icon">
            <LivesIcon width={svgSize} height={svgSize} />
          </figure>
          <p className="menu__links__link__name" id="name">
            Lives
          </p>
          <span className="menu__links__link__tooltip">Lives</span>
        </a>
        <a href="##" className="menu__links__link" onClick={selectItem}>
          <figure className="menu__links__link__icon">
            <EnterprisesIcon width={svgSize} height={svgSize} />
          </figure>
          <p className="menu__links__link__name" id="name">
            Empresas
          </p>
          <span className="menu__links__link__tooltip">Empresas</span>
        </a>
      </ul>
    </nav>
  );
}

export default Nav;
