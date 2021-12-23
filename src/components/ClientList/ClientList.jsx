import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { getClients, deleteClient, createClient, updateClient } from "../../api/client";
import ClientForm from "../ClientForm/ClientForm";
import ClientItem from "../ClientItem/ClientItem";

function ClientList() {
  const [data, setData] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [formMode, setFormMode] = useState("add");
  const [defaultData, setDefaultData] = useState({});
  const columns = [
    { id: "name", label: "Nome", minWidth: 150 },
    { id: "email", label: "Email", minWidth: 300 },
    { id: "instaUsername", label: "Instagram", minWidth: 200 },
  ];

  useEffect(() => {
    getList();
  }, []);

  function getList() {
    getClients()
      .then((res) => {
        console.log(data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteItem(id) {
    deleteClient(id)
      .then((res) => {
        console.log(res);
        getList();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function editItem(id) {
    setDefaultData(data.filter((item) => item.id === id)[0]);
    setFormMode("edit");
    openForm();
  }

  function editClient(data, id) {
    data = { ...data, id };
    updateClient(data)
    .then((res) => {
      console.log(res);
      getList();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function addItem() {
    setFormMode("add");
    openForm();
  }

  function addClient(data) {
    console.log(data);
    createClient(data)
    .then((res) => {
      console.log(res);
      getList();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function openForm() {
    setFormOpen(true);
  }

  function closeForm() {
    setFormOpen(false);
  }

  return (
    <>
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <IconButton onClick={addItem}>
                  <Add />
                </IconButton>
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              return (
                <ClientItem
                  data={row}
                  deleteItem={deleteItem}
                  editItem={editItem}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {formOpen &&
        (formMode === "add" ? (
          <ClientForm closeForm={closeForm} onSubmit={addClient} />
        ) : (
          <ClientForm closeForm={closeForm} defaultData={defaultData} onSubmit={editClient} />
        ))}
    </>
  );
}

export default ClientList;
