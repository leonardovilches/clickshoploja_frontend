import React from "react";
import PageLayout from "../components/PageLayout/PageLayout";
import Table from "../components/Main/Table/Table";
import { LiveContext, LiveContextProvider } from "../contexts/LiveContext";

function Live() {
  return (
    <LiveContextProvider>
      <PageLayout>
        <Table name="Live" context={LiveContext} />
      </PageLayout>
    </LiveContextProvider>
  );
}

export default Live;
