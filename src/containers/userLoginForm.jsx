import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginAction } from "../actions/index";

class UserLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("id")) {
      this.props.history.push("/login");
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleLogin(event) {
    event.preventDefault();

    this.props.login(this.state, () => {
      console.log("LOGGINED IN");
      this.props.history.push("/login");
    });
  }

  render() {
    return (
      <div className="login_Container">
        <div className="form_Container">
          <form onSubmit={this.handleLogin}>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
            <div className="buttons_login">
              <button type="submit">Login</button>
              <a href="/register">Register</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.users.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: function(user, redirectCallback) {
      dispatch(loginAction(user, redirectCallback));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginForm);
