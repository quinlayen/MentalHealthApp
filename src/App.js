import React, { Component } from "react";
import "./App.css";
import userRegistrationForm from './components/userRegistrationForm'


class App extends Component {
  render() {
    return <div>
      <NavBar />,
      <UserRegistration />

      </div>
  }
}

export default App;
