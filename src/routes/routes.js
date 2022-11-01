/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Home from "../components/general/Home";
export default [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
  },
  {
    path: "/login",
    component: () => <Login />,
  },
  {
    path: "/register",
    component: () => <Register />,
  },
];
