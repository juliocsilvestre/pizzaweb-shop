import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <h1>Autenticação</h1>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
