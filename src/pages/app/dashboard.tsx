import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

const Dashboard = () => {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors />
    </HelmetProvider>
  );
};

export default Dashboard;
