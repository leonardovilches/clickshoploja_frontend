import React from "react";
import "./Main.scss";

function Main(props) {
    console.log(props);
  return <main className="main">{props.children}</main>;
}

export default Main;
