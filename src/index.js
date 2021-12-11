import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/brooke.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);