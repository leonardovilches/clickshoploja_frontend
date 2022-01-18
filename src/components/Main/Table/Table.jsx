import React from "react";
import "./Table.scss";
import Search from "./Search/Search";
import { ReactComponent as AddButton } from "../../../assets/add_button.svg";
import { ReactComponent as RemoveButton } from "../../../assets/remove_button.svg";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableCell/TableBody";

function Table({ children, name }) {
  const rows = [
    {
      name: "Jorge",
      email: "Jorgin",
      phone: "991"
    },
    {
      name: "Deni",
      email: "De",
      phone: "190"
    }
  ];

  const columns = [
    { id: "name", label: "Nome", width: "100px" },
    { id: "email", label: "Email", width: "50px" },
    { id: "phone", label: "Telefone", width: "50px" }
  ]


  return (
    <article className="container">
      <header className="header">
        <p className="header__title">{name}</p>
        <Search />
        <AddButton className="header__button-add" />
        <RemoveButton className="header__button-remove" />
      </header>
      <table className="table">
        <TableHead
          columns={columns}
        />
        <TableBody columns={columns} rows={rows} />
      </table>
    </article>
  );
}

export default Table;
