import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, appMiddleware, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
require("dotenv").config();

// console.log(process.env.REACT_APP_BETTERDOC_KEY);
// console.log(process.env.REACT_APP_ACCOUNTSID);
// console.log(process.env.REACT_APP_AUTHTOKEN);

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
<App />
</Provider>
, document.getElementById("root"));
registerServiceWorker();
