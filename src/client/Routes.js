import React from "react";
import Home from "./pages/Home";
import UserList, { loadData } from "./pages/UserList";

export default [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    ...UserList,
    path: "/users",
  },
];
