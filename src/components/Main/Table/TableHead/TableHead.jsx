import React, { useContext } from "react";
import "./TableHead.scss";

function TableHead({ context }) {

  const {columns} = useContext(context);

  return (
    <thead className="head">
      <tr className="head__row">
        <td className="head__row__checkbox">
          <input type="checkbox" />
        </td>
        {(columns || []).map((column, index) => (
          <td
            className="head__row__title"
            key={index}
            style={{ minWidth: column.width, textAlign: column.align }}
          >
            {column.label}
          </td>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
