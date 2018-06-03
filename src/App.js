import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import UserRegistrationForm from "./components/userRegistrationForm";
import NavBar from "./components/navBar";
import SearchBar from "./components/searchBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SearchBar />
        <Route exact path="/register" component={UserRegistrationForm} />
      </div>
    );
  }
}

export default App;
