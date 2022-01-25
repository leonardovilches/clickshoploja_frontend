import React from "react";
import "./Table.scss";
import Search from "./Search/Search";
import { ReactComponent as AddButton } from "../../../assets/add_button.svg";
import { ReactComponent as RemoveButton } from "../../../assets/remove_button.svg";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

function Table({ name, context }) {

  return (
    <article className="container">
      <header className="header">
        <p className="header__title">{name}</p>
        <Search />
        <AddButton className="header__button-add" />
        <RemoveButton className="header__button-remove" />
      </header>
      <table className="table scrollbar">
        <TableHead context={context} />
        <TableBody context={context} />
      </table>
    </article>
  );
}

export default Table;
