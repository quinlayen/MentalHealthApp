import React, { Component } from 'react';
import './App.css';
import UserRegistrationForm from './components/userRegistrationForm';
import NavBar from './components/navBar';
<<<<<<< HEAD
import ChatBox from './components/ChatBox';
=======
import SearchBar from './components/searchBar';
>>>>>>> development

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
<<<<<<< HEAD
        <ChatBox />
=======
        <SearchBar />
>>>>>>> development
        <UserRegistrationForm />
      </div>
    );
  }
}

export default App;
