import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import UserRegistrationForm from './components/userRegistrationForm';
import SearchBar from './components/searchBar';
import SendSms from './components/sms';
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
