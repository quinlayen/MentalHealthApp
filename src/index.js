import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
require("dotenv").config();

// console.log(process.env.REACT_APP_BETTERDOC_KEY);
// console.log(process.env.REACT_APP_ACCOUNTSID);
// console.log(process.env.REACT_APP_AUTHTOKEN);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
