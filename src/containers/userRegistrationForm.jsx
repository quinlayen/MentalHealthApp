import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerAction } from "../actions/index";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class UserRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      method: "Email",
      contact: "",
      username: "",
      password: "",
      type: "input"
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
    console.log(this.state);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleRegister(event) {
    event.preventDefault();
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.register(this.state, () => {
        console.log("NEW CLIENT REGISTERED");
        this.props.history.push("/");
      });
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
        <div className="col -6">
          <form onSubmit={this.handleRegister}>
            <FormGroup controlId="first_name" bsSize="large">
              <ControlLabel>First Name</ControlLabel>
              <FormControl
                autoFocus
                name="first_name"
                value={this.state.first_name}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="last_name" bsSize="large">
              <ControlLabel>Last Name</ControlLabel>
              <FormControl
                autoFocus
                name="last_name"
                value={this.state.last_name}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="username" bsSize="large">
              <ControlLabel>Username</ControlLabel>
              <FormControl
                autoFocus
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                autoFocus
                name="password"
                type={this.state.type}
                value={this.state.password}
                onChange={this.handleChange}
              />
              <span onClick={this.handleClickShowPassword}>
                {this.state.type === "input" ? "Hide" : "Show"}
              </span>
            </FormGroup>
            <div className="form-group">
              <ControlLabel>Preferred Contact</ControlLabel>
              <div className="input-group">
                <div className="input-group-prepend">
                  <select
                    onChange={this.handleChange}
                    value={this.state.method}
                    name="method"
                    className="custom-select"
                  >
                    <option value="Email">Email</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Chat">Web-Chat</option>
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

  // render() {
  //   if (this.state.newUser === null) {
  //     return <div className="Signup">{this.renderForm()}</div>;
  //   }
  // }
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: function(user, redirectCallback) {
      dispatch(registerAction(user, redirectCallback));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserRegistrationForm)
);
