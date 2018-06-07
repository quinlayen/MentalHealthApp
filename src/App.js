import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import UserRegistrationForm from './components/userRegistrationForm';
import SearchBar from './containers/searchBar';
import SendSms from './containers/sms';
import NavBar from './containers/navBar';
import NavDrawer from './containers/navDrawer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SearchBar />
        <Route exact path="/register" component={UserRegistrationForm} />
        <NavDrawer />
        <SendSms />
      </div>
    );
  }
}

export default App;
