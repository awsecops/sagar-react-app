import React from "react";
import { TestPage } from "./src/test";

const Dashboard = React.lazy(() => import("./src/dashboard"));
const WorkManager = React.lazy(() => import("./src/work-manager"));

const PODDelivery = React.lazy(() => import("./src/pages/POD-Delivery"));

//child application routing
const routes = [
  {
    path: "/dashboard",
    component: Dashboard, //TODO
    exact: true
  },
  {
    path: "/work-manager",
    component: WorkManager, //TODO
    exact: true
  },
  {
    path: "/pod-deliveries",
    component: PODDelivery,
    exact: true
  }
];

export default routes;
