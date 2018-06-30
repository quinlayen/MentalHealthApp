import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginAction } from "../actions/index";
import { bindActionCreators } from "redux";
import "../styles/userLoginForm.css";
import camp from "../styles/static/bemocs_rei_4th_of_july_dribbble.jpg";

class UserLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      submitted: false,
      type: "password"
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
      this.props.loginAction(this.state);
      // console.log("LOGGINED IN");
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="row">
        <div className="camp-img">
          <img src={camp} alt="campground" />
        </div>
        <div className="col">
          <div className="col-9">
            <h1 className="greeting">Welcome Back</h1>
          </div>
          <div className="login-form">
            <h2 className="login">Login</h2>
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
                  autoFocus
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
                <div className="pw-row">
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
                </div>
                {this.state.submitted &&
                  !this.state.password && (
                    <div className="help-block">Password is Required</div>
                  )}
              </div>
              <div className="form-group">
                <button className="btn btn-primary">Login</button>
                <small className="text-muted login"> Need an Account?</small>
                <Link to="/register" className="btn btn-link">
                  <strong>Register</strong>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginAction }, dispatch);
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserLoginForm)
);
