import React, { Component } from 'react';
import './App.css';
import UserRegistrationForm from './components/userRegistrationForm';
import NavBar from './containers/navBar';
import NavDrawer from './containers/navDrawer'

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
