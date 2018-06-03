import React, { Component } from 'react';
import './App.css';
import UserRegistrationForm from './components/userRegistrationForm';
import SearchBar from './containers/searchBar';
import SendSms from './components/sms';
import NavBar from './containers/navBar';
import NavDrawer from './containers/navDrawer';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SearchBar />
        <NavDrawer />
        <UserRegistrationForm />
        <SendSms />
      </div>
    );
  }
}

export default App;
