import React, { Component } from 'react';
import './App.css';
import UserRegistrationForm from './components/userRegistrationForm';
import NavBar from './components/navBar';
import ChatBox from './components/ChatBox';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ChatBox />
        <UserRegistrationForm />
      </div>
    );
  }
}

export default App;
