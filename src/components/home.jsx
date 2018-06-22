import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchBar from "../containers/searchBar";
import Background from "../styles/static/ocs_cropped_2.jpg";
import "../styles/home.css";

const Main = props => {
  //   console.log("did we get to main component", props);
  return (
    <div className="container">
      <img src={Background} className="bg" />

      <SearchBar history={props.history} />
    </div>
  );
};
export default Main;
