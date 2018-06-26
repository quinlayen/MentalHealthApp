import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBar from '../containers/searchBar';
import navigatorImg from '../styles/static/800x600.jpg';
import streamsImg from '../styles/static/ocs_cropped.jpg';

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
      <div className="row">
        <div className="info">
          <h1>INFO HERE</h1>
        </div>
      </div>
      <div className="row justify-content-start">
        <div className="col-*">
          <img
            src={streamsImg}
            className="float-left"
            alt="background-stream"
          />
        </div>
      </div>
    </div>
  );
};
export default Main;
