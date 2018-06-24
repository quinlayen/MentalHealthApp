import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./styles/App.css";
import UserRegistrationForm from "./containers/userRegistrationForm";
import UserLoginForm from "./containers/userLoginForm";
//import SearchBar from "./containers/searchBar";
import SendSms from "./containers/sms";
import Home from "./components/home";
import NavBar from "./components/navBar";
//import NavDrawer from "./components/navDrawer";
import ProviderList from "./containers/providerList";
import ProviderDetail from "./containers/providerDetail";
import { createStore } from "redux";
import reducer from "./reducers/index";
import SendCall from "./containers/dialer";

const store = createStore(reducer);
// console.log(store.getState());
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/doctors/:id" component={ProviderDetail} />
            <Route exact path="/doctors" component={ProviderList} />
            <Route exact path="/register" component={UserRegistrationForm} />
            <Route exact path="/login" component={UserLoginForm} />
            <Route exact path="/" component={Home} />
            <Redirect from="/*" to="/" />
          </Switch>
          {/* <Route exact path="/" component={SearchBar} /> */}
          {/* <NavDrawer /> */}
          {/* <Route path="doctors/" component={SendSms} /> */}
          <SendSms />
          {/* <SendCall /> */}
        </div>
      </Router>
    );
  }
}

export default App;
