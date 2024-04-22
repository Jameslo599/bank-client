import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/pages/AccountHome";
import Bank from "./views/pages/Bank";
import Profile from "./views/pages/Profile";
import Security from "./views/pages/Security";
import Login from "./views/pages/Login";
import NotFound from "./views/pages/404";
import Forgot from "./views/pages/Forgot";
import SignUp from "./views/pages/SignUp";
import ResetPassword from "./views/pages/ResetPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/bank",
    element: <Bank />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/security",
    element: <Security />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },
  {
    path: "/reset-password/:username/:today/:hash",
    element: <ResetPassword />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>
);
