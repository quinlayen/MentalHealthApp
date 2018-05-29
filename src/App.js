import React, { Component } from 'react';
import './App.css';
import UserRegistrationForm from './components/userRegistrationForm';
import NavBar from './components/navBar';
import NavDrawer from './components/navDrawer'

class App extends Component {
  constructor(props){
    super(props);
  }


  
  render() {
    return (
      <div>
        <NavBar getToggleButton={this.getToggleButton}/>,
        <NavDrawer />,
        <UserRegistrationForm />
      </div>
    );
  }
}

export default App;
