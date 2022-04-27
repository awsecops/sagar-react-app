import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import "antd/dist/antd.css";
import "./src/App.css";

const LoginPage = React.lazy(() => import("./src/pages/LoginPage"));
const WelcomePage = React.lazy(() => import("./src/pages/welcomepage"));
const ResetPasswordPage = React.lazy(() => import("./src/pages/resetpasswordpage"));
const ChangePasswordPage = React.lazy(() => import("./src/pages/changepasswordpage"));

//child application routing
const routes = [
  {
    path: "/welcome",
    component: WelcomePage,
    exact: true
  },
  {
    path: "/login",
    component: LoginPage,
    exact: true
  },
  {
    path: "/resetpassword",
    component: ResetPasswordPage,
    exact: true
  },
  {
    path: "/changepassword",
    component: ChangePasswordPage,
    exact: true
  },
  {
    path: "/",
    component: LoginPage,
    exact: true
  }
];

export default routes;
