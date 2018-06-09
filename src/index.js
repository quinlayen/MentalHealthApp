import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, appMiddleware, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import reducers from "./reducers";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import createLogger from 'redux-logger';
require("dotenv").config();

// console.log(process.env.REACT_APP_BETTERDOC_KEY);
// console.log(process.env.REACT_APP_ACCOUNTSID);
// console.log(process.env.REACT_APP_AUTHTOKEN);

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, createLogger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
