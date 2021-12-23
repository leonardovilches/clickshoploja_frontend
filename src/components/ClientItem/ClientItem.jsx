import { IconButton, TableCell, TableRow } from "@material-ui/core";
import { Edit, Remove } from "@material-ui/icons";
import React from "react";

function ClientItem({ data, deleteItem, editItem }) {
  return (
    <TableRow>
      <TableCell>
        <IconButton
          onClick={() => {
            deleteItem(data.id);
          }}
        >
          <Remove />
        </IconButton>
        <IconButton
          onClick={() => {
            editItem(data.id);
          }}
        >
          <Edit />
        </IconButton>
      </TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.email}</TableCell>
      <TableCell>{data.instaUsername}</TableCell>
    </TableRow>
  );
}

export default ClientItem;
