import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import NavBar from "./components/navbar/navbar.jsx";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import UserLogin from "./components/login/login.jsx";
import SignUp from "./components/registration/registration.jsx";

render(
  <div>
    <NavBar />
    <Router>
      <UserLogin path="/"></UserLogin>
      <SignUp path="/signup"></SignUp>
    </Router>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
