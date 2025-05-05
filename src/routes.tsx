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
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/auth/sign-in", element: <SignIn /> }],
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/auth", element: <AuthLayout /> }],
  },
]);
