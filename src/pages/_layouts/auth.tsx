import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div className="grid min-h-screen grid-cols-2">
        <div className="border-foreground/5 bg-muted text-muted-foreground flex h-full flex-col justify-between border-r p-10"></div>
        <div></div>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
