import { createContext, useEffect, useState } from "react";
import { getLives } from "../api/live";

export const LiveContext = createContext();

export function LiveContextProvider({ children }) {
  const [rows, setRows] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getData();
  }, [currentPage]);

  function getData() {
    getLives(currentPage).then((lives) => {
      setTotalPages(lives.data.totalPages);
      setRows([...rows, ...rowsFormat(lives.data.content)]).catch((err) => {
        console.log(err);
      });
    });
  }

  function nextPage() {
    if (currentPage <= totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function rowsFormat(rows) {
    const formatedRows = rows.map((live) => {
      live.date = new Date(live.date).toLocaleString();
      if (live.liveStatus === "PENDING") {
        live.liveStatus = "Pendente";
      } else if (live.liveStatus === "OPENED") {
        live.liveStatus = "Aberta";
      } else if (live.liveStatus === "CLOSED") {
        live.liveStatus = "Encerrada";
      }
      return live;
    });

    return formatedRows;
  }

  const columns = [
    { id: "id", label: "ID", width: "25px", align: "center" },
    { id: "date", label: "Data", width: "200px", align: "left" },
    { id: "commission", label: "Comissão", width: "80px", align: "center" },
    { id: "cardTax", label: "Taxa de Cartão", width: "150px", align: "center" },
    {
      id: "shippingTax",
      label: "Taxa de Envio",
      width: "150px",
      align: "center",
    },
    { id: "liveStatus", label: "Status", width: "80px", align: "center" },
  ];

  return (
    <LiveContext.Provider
      value={{
        rows,
        columns,
        currentPage,
        getData,
        nextPage,
      }}
    >
      {children}
    </LiveContext.Provider>
  );
}
