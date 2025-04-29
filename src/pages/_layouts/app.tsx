import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <h1>Cabeçalho</h1>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
