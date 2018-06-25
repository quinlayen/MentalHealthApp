import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './styles/App.css';
import UserRegistrationForm from './containers/userRegistrationForm';
import UserLoginForm from './containers/userLoginForm';
import Home from './components/home';
import NavBar from './components/navBar';
import NavDrawer from './components/navDrawer';
import ProviderList from './containers/providerList';
import ProviderDetail from './containers/providerDetail';
import { createStore } from 'redux';
import reducer from './reducers/index';
import navigatorImg from './styles/static/800x600.jpg';
import streamsImg from './styles/static/ocs_cropped.jpg';
import Background from './styles/static/background.png';

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
            <div className="row justify-content-center">
              <div className="col-*">
                <img
                  src={navigatorImg}
                  className="float-right"
                  alt="navigator"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-*">
                <Switch>
                  <Route exact path="/doctors/:id" component={ProviderDetail} />
                  <Route exact path="/doctors" component={ProviderList} />
                  <Route
                    exact
                    path="/register"
                    component={UserRegistrationForm}
                  />
                  <Route exact path="/login" component={UserLoginForm} />
                  <div className="main-box">
                    <Route exact path="/" component={Home} />
                    <Redirect from="/*" to="/" />
                  </div>
                </Switch>
              </div>
            </div>
            <div className="row justify-content-start">
              <div className="col-*">
                <img
                  src={streamsImg}
                  className="float-left"
                  alt="background-stream"
                />
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
