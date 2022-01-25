import React from "react";
import "./CheckboxCell.scss";

function CheckboxCell() {
  const [selected, setSelected] = React.useState(true);

  function handleSelected() {
    setSelected(!selected);
  }

  return (
    <td className="checkbox">
      <input type="checkbox" checked={selected} onClick={handleSelected} />
    </td>
  );
}

export default CheckboxCell;
