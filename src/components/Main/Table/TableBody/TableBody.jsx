import React, { useEffect, useContext } from "react";
import CheckboxCell from "./CheckboxCell/CheckboxCell";
import { ReactComponent as EditButton } from "../../../../assets/edit_button.svg";
import "./TableBody.scss";

function TableBody({ context }) {
  const { columns, rows, currentPage, nextPage } = useContext(context);

  useEffect(() => {
    document
      .getElementById("tableBody")
      .addEventListener("scroll", handleScroll);
  }, [currentPage]);

  function handleScroll() {
    const tableBody = document.getElementById("tableBody");
    if (tableBody.scrollTop >= 895 + currentPage * 1615) {
      tableBody.removeEventListener("scroll", handleScroll);
      nextPage();
    }
  }

  return (
    <tbody id="tableBody" className="body scrollbar">
      {(rows || []).map((row, index) => (
        <tr className="body__row">
          <CheckboxCell key={index} />
          {(columns || []).map((column, index) => (
            <td
              className="body__row__text"
              key={index}
              style={{ minWidth: column.width, textAlign: column.align }}
            >
              {row[column.id]}
            </td>
          ))}
          <td className="body__row__edit">
            <EditButton />
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
