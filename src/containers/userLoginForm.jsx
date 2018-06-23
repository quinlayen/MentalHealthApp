import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginAction } from "../actions/index";
import "../styles/userLoginForm.css";

class UserLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      submitted: false,
      type: "input"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("id")) {
      this.props.history.push("/login");
    }
  }

  handleClickShowPassword(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      type: this.state.type === "input" ? "password" : "input"
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleLogin(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.login(this.state, () => {
        console.log("LOGGINED IN");
        this.props.history.push("/");
      });
    }
  }

  render() {
    return (
      <div className="col-md-6 col-centered">
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="col-6">
          <h2>Login</h2>
          <form name="form" onSubmit={this.handleLogin}>
            <div
              className={
                "form-group" +
                (this.state.submitted && !this.state.username
                  ? " has-error"
                  : "")
              }
            >
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              {this.state.submitted &&
                !this.state.username && (
                  <div className="help-block">Username is Required</div>
                )}
            </div>
            <div
              className={
                "form-group" +
                (this.state.submitted && !this.state.password
                  ? " has-error"
                  : "")
              }
            >
              <label htmlFor="password">Password</label>
              <input
                type={this.state.type}
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <span onClick={this.handleClickShowPassword}>
                <button className="btn btn-primary btn-sm">
                  {this.state.type === "input" ? "Hide" : "Show"}
                </button>
              </span>
              {this.state.submitted &&
                !this.state.password && (
                  <div className="help-block">Password is Required</div>
                )}
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Login</button>
              <Link to="/register" className="btn btn-link">
                Register
              </Link>
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
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserLoginForm)
);
