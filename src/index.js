import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import './styles/index.css';
import App from './App';
import ReduxThunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import createLogger from 'redux-logger';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faSearch,
  faPhone,
  faArrowAltCircleRight,
  faComments
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faSearch, faPhone, faArrowAltCircleRight, faComments);

// console.log(process.env.REACT_APP_BETTERDOC_KEY);
// console.log(process.env.REACT_APP_ACCOUNTSID);
// console.log(process.env.REACT_APP_AUTHTOKEN);

const createStoreWithMiddleware = applyMiddleware(
  ReduxThunk,
  ReduxPromise,
  createLogger
)(createStore);

ReactDOM.render(
  <AppContainer>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router>
        <App />
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);
registerServiceWorker();
