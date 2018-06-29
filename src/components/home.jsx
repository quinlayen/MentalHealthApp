import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBar from '../containers/searchBar';
import navigatorImg from '../styles/static/800x600.jpg';
import streamsImg from '../styles/static/ocs_cropped.jpg';
import AddHome from './additionalhome';

import '../styles/home.css';

const Main = props => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-*">
          <img src={navigatorImg} className="float-right" alt="navigator" />
        </div>
      </div>
      <div className="search">
        <SearchBar history={props.history} />
      </div>
      <AddHome />
    </div>
  );
};
export default Main;
