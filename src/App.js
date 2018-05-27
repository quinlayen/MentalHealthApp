import React, { Component } from 'react';
import './App.css';
import UserRegistrationForm from './components/userRegistrationForm';
import NavBar from './components/navBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />,
        <UserRegistrationForm />
      </div>
    );
  }
}

export default App;
