import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerAction } from "../actions/index";
import { bindActionCreators } from "redux";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class UserRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      method: "Text",
      contact: "",
      username: "",
      password: "",
      type: "input",
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
  }

  handleClickShowPassword(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      type: this.state.type === "input" ? "password" : "input"
    });
  }

  handleChange(event) {
    // console.log(this.state);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleRegister(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.registerAction(this.state);
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="col-3" />
        <div className="col-6">
          <form onSubmit={this.handleRegister}>
            <div
              className={
                "form-group" +
                (this.state.submitted && !this.state.first_name
                  ? " has-error"
                  : "")
              }
            >
              <ControlLabel>First Name</ControlLabel>
              <FormControl
                autoFocus
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleChange}
              />
              {this.state.submitted &&
                !this.state.first_name && (
                  <div className="help-block">First Name is Required</div>
                )}
            </div>
            <div
              className={
                "form-group" +
                (this.state.submitted && !this.state.last_name
                  ? " has-error"
                  : "")
              }
            >
              <ControlLabel>Last Name</ControlLabel>
              <FormControl
                name="last_name"
                value={this.state.last_name}
                onChange={this.handleChange}
              />
              {this.state.submitted &&
                !this.state.last_name && (
                  <div className="help-block">Last Name is Required</div>
                )}
            </div>
            <div
              className={
                "form-group" +
                (this.state.submitted && !this.state.username
                  ? " has-error"
                  : "")
              }
            >
              <ControlLabel>Username</ControlLabel>
              <FormControl
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
              <ControlLabel>Password</ControlLabel>
              <FormControl
                name="password"
                type={this.state.type}
                value={this.state.password}
                onChange={this.handleChange}
              />
              {this.state.submitted &&
                !this.state.password && (
                  <div className="help-block">Password is Required</div>
                )}
              <button
                className="btn btn-primary btn-sm"
                onClick={this.handleClickShowPassword}
              >
                {this.state.type === "input" ? "Hide" : "Show"}
              </button>
            </div>
            <div
              className={
                "form-group" +
                (this.state.submitted && !this.state.contact
                  ? " has-error"
                  : "")
              }
            >
              <ControlLabel>Preferred Contact</ControlLabel>
              <div className="input-group">
                <div className="input-group-prepend">
                  <select
                    onChange={this.handleChange}
                    value={this.state.method}
                    name="method"
                    className="custom-select"
                  >
                    <option value="Text">Text</option>
                    <option value="Call">Call</option>
                    <option disabled value="Email">
                      Email
                    </option>
                    <option disabled value="Chat">
                      Web-Chat
                    </option>
                  </select>
                </div>
              </div>
              <br />
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
                placeholder="Contact Information"
                name="contact"
                value={this.state.contact}
                onChange={this.handleChange}
              />
              {this.state.submitted &&
                !this.state.contact && (
                  <div className="help-block">Contact is Required</div>
                )}
            </div>
            <button className="btn btn-primary btn-sm" type="submit">
              Submit
            </button>
            <Link to={"/login"} className="btn btn-link">
              Login
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ registerAction }, dispatch);
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserRegistrationForm)
);
