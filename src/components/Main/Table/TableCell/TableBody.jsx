import React from "react";
import "./TableBody.scss";

function TableBody({ columns, rows }) {
  return (
    <tbody className="body scrollbar">
      {(rows || []).map((row, index) => (
        <tr className="body__row">
          <td className="body__row__checkbox">
            <input type="checkbox" />
          </td>
          {(columns || []).map((column, index) => (
            <td className="body__row__text" key={index} style={{ width: column.width }}>
              {row[column.id]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
