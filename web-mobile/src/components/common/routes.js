import React from "react";

const Dashboard = React.lazy(() => import("./Dashboard"));

export const routes = [
  {
    path: "/dashboard",
    exact: true,
    name: "Dashboard",
    component: DefaultLayout
  }
];
