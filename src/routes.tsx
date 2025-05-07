import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/app/dashboard";
import AppLayout from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignIn } from "./pages/auth/signIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "", element: <SignIn /> },
      { path: "sign-in", element: <SignIn /> },
    ],
  },
]);
