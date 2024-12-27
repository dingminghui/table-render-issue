import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import Home from "./pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "home",
        Component: Home,
      },
      {
        path: "/",
        element: <Navigate to="home" />,
      },
    ],
  },
]);
