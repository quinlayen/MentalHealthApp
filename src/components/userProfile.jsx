

import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../actions/index";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";


class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone: "",

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
        <FormGroup controlId="phone" bsSize="large">
          <ControlLabel>Phone Number</ControlLabel>
          <FormControl
            autoFocus
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
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
    );
  }

  render() {
    if (this.state.newUser === null) {
      return <div className="Signup">{this.renderForm()}</div>;
    }
  }
}

//   render() {
//     return (
//       <div className="register_Container">
//         {/* <h1 className="register_title">Register</h1> */}
//         <div className="form_Register">
//           <Form onSubmit={this.handleRegister}>
//             {/* <div className="input_register" /> */}
//             <Input
//               type="text"
//               name="first_name"
//               value={this.state.first_name}
//               onChange={this.handleChange}
//               placeholder="First Name"
//             />
//             <Input
//               type="text"
//               name="last_name"
//               value={this.state.last_name}
//               onChange={this.handleChange}
//               placeholder="Last Name"
//             />
//             <Input
//               type="text"
//               name="phone"
//               value={this.state.phone}
//               onChange={this.handleChange}
//               placeholder="Phone Number"
//             />
//             <Input
//               type="text"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//               placeholder="Email"
//             />
//             <Input
//               type="text"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//               placeholder="Password"
//             />
//             <div className="register_button">
//               <button type="submit">Sign up</button>
//             </div>
//           </Form>
//         </div>
//       </div>
//     );
//   }
// }

const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: function(
      first_name,
      last_name,
      phone,
      email,
      password,
      user,
      redirectCallback
    ) {
      dispatch(
        register(
          first_name,
          last_name,
          phone,
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
)(UserProfile);









// import React, { Component } from 'react';

// class UserProfile extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <div className="card">
//               <div className="card-header">
//                 <H2>userName</H2>
//                 <div className="card-body">
//                   <div className="card-text"> email</div>
//                   <div className="card-text"> insurance</div>
//                   <div className="card-text"> phone number</div>
//                   <div className="card-text"> bio </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default UserProfile;
