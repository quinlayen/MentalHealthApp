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
        <p>So many of us know that we need some help, but just making that first call can seem impossible.  Its so important for you to know though, that people care.  Let us help you find your way.</p>

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
