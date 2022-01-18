import React from "react";
import "./TableHead.scss";

function TableHead({ children, columns }) {
  return (
    <thead className="head">
      <tr className="head__row">
          <td className="head__row__checkbox">
            <input type="checkbox" />
          </td>
        {(columns || []).map((column, index) => (
          <td className="head__row__title" key={index} style={{width: column.width}}>
            {column.label}
          </td>
        ))}
      </tr>
    </thead>
  );
}

export default TableHead;
