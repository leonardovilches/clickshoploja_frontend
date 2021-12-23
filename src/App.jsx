import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ClientList from "./components/ClientList/ClientList";

function App() {

return (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="Login" element={<p>Login</p>} />
      <Route path="Clientes/*" element={ <ClientList />} /> 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
