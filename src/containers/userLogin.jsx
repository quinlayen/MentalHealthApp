import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../actions/index";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";


class UserLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      email: "",
      password: "",
    
   
      newUser: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleRegister(event) {
    event.preventDefault();
    if (this.state.email !== "" && this.state.password !== "") {
      this.props.register(this.state, () => {
        this.props.history.push("/");
      });
    }
  }

  renderForm() {
    return (
      <div className="container">
      <div className="row">
      <div className="col-2-md"/>
      <div className="col-8-md">
      <form onSubmit={this.handleRegister}>
       
       
        
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            autoFocus
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <button className="btn btn-primary btn-sm" type="submit">
          Submit
        </button>
      </form>
      </div>
      </div>
      </div>
    );
  }

  render() {
    if (this.state.newUser === null) {
      return <div className="Signup">{this.renderForm()}</div>;
    }
  }
}


const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: function(
     
      email,
      password,
      user,
      redirectCallback
    ) {
      dispatch(
        register(
          
          email,
          password,
          user,
          redirectCallback
        )
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginForm);