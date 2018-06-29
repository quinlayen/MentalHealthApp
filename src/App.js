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
// import UserProfile from "./components/userProfile";
import Home from "./components/home";
import NavBar from "./components/navBar";
import NavDrawer from "./components/navDrawer";
import ProviderList from "./containers/providerList";
import ProviderDetail from "./containers/providerDetail";
import { createStore } from "redux";
import reducer from "./reducers/index";

import Background from "./styles/static/background.png";

const store = createStore(reducer);
// console.log(store.getState());
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <img src={Background} className="bg" alt="background" />
          <NavBar />
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="main-box">
                  <Switch>
                    <Route
                      exact
                      path="/doctors/:id"
                      component={ProviderDetail}
                    />
                    <Route exact path="/doctors" component={ProviderList} />
                    <Route
                      exact
                      path="/register"
                      component={UserRegistrationForm}
                    />
                    <Route exact path="/login" component={UserLoginForm} />
                    {/* <Route exact path="/profile" component={UserProfile} /> */}
                    <Route exact path="/" component={Home} />
                    <Redirect from="/*" to="/" />
                  </Switch>
                </div>
              </div>
            </div>

            {/* <Route exact path="/" component={SearchBar} /> */}
            <NavDrawer />
            {/* <Route path="doctors/" component={SendSms} /> */}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
