import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {

  const [menuState, setMenuState] = React.useState(false);

  function toggleMenu() {
    setMenuState(!menuState);
  }

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <Nav menuState={menuState} />
    </>

    // <BrowserRouter>

    //   <Routes>

    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
