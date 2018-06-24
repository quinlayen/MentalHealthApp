import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/navBar.css';
import '../styles/searchBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
      currentUser: ''
    };
    this.changeUser = this.changeUser.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return props.users;
  }

  changeUser() {
    if (this.state.isLoggedIn === true) {
      return (this.state.currentUser = `Welcome: ${this.state.user.username}`);
    } else {
      return 'Login';
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top scrolling-navbar navbar-custom">
        <div className="container navbar-custom">
          <Link to="/" className="navbar-brand">
            <strong>FYW</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-7"
            aria-controls="navbarSupportedContent-7"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent-7">
            <ul className="navbar-nav mr-auto" />
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  {this.changeUser(() => {})}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(NavBar);
