import React from "react";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import Table from "../Main/Table/Table";
import "./PageLayout.scss";

function PageLayout({ children }) {
  const [menuState, setMenuState] = React.useState(false);

  function toggleMenu() {
    setMenuState(!menuState);
  }

  return (
    <div className="page-layout">
      <Header toggleMenu={toggleMenu} />
      <Nav menuState={menuState} />
      <Main>{children}</Main>
    </div>
  );
}

export default PageLayout;
