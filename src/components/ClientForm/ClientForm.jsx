import { Backdrop, Button, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import style from "./ClientForm.module.css";

function ClientForm({ defaultData, onSubmit, closeForm }) {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [instaUsername, setInstaUsername] = useState("");

  useEffect(() => {
    if (defaultData != undefined) {
      setId(defaultData.id);
      setName(defaultData.name);
      setEmail(defaultData.email);
      setInstaUsername(defaultData.instaUsername);
    }
  }, []);

  function sendData() {
    onSubmit({
      name,
      email,
      instaUsername,
      phoneNumbers: ["991179109"],
      addresses: [
        {
          city: "Mira",
          district: "Nova Tanabi",
          street: "Rua Paulo Sergio Machado",
          number: "8",
        },
      ],
    }, id);
    closeForm();
  }

  return (
    <Backdrop open={true} className={style.backdropZindex}>
      <div className={style.container}>
        <Typography variant="h4">Adicionar Cliente</Typography>
        <div className={style.inputsCont}>
          <TextField
            variant="outlined"
            label="Nome"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            label="Instagram"
            fullWidth
            value={instaUsername}
            onChange={(e) => {
              setInstaUsername(e.target.value);
            }}
          />
          <div className={style.buttonsCont}>
            <Button variant="contained" color="secondary" onClick={closeForm}>
              Cancelar
            </Button>
            <Button variant="contained" color="secondary" onClick={sendData}>
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </Backdrop>
  );
}

export default ClientForm;
