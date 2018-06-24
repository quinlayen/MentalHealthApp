import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBar from '../containers/searchBar';

import '../styles/home.css';

const Main = props => {
  return (
    <div className="container">
      <SearchBar history={props.history} />
    </div>
  );
};
export default Main;
