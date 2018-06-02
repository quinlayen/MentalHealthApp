import React, { Component } from 'react';
import './App.css';
import UserRegistrationForm from './components/userRegistrationForm';
import NavBar from './components/navBar';
import SearchBar from './components/searchBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SearchBar />
        <UserRegistrationForm />
      </div>
    );
  }
}

export default App;
