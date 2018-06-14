import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles/App.css";
import UserRegistrationForm from "./components/userRegistrationForm";
import SearchBar from "./containers/searchBar";
import SendSms from "./containers/sms";
import NavBar from "./containers/navBar";
import NavDrawer from "./containers/navDrawer";
import ProviderList from "./containers/providerList";
import ProviderDetail from "./components/providerDetail";
import { createStore } from "redux";
import reducer from "./reducers/index";
import SendCall from "./containers/dialer";

const store = createStore(reducer);
console.log(store.getState());

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
<div className = "background">
          <Route exact path="/" component={SearchBar} />
          <Route exact path="/doctors" component={ProviderList} />
          <Route exact path="/doctors/:id" component={ProviderDetail} />
          <Route path="/register" component={UserRegistrationForm} />
          <NavDrawer />
          <Route path="doctors/" component={SendSms} />
          <SendCall />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
