// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { register } from "../actions/index";
// // import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

// <div className="container">
// <div className="row">
// <form>
//   <div class="form-row">
//     <div class="form-group col-md-6">
//       <label for="inputEmail4">Email</label>
//       <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
//     </div>
//     <div class="form-group col-md-6">
//       <label for="inputPassword4">Password</label>
//       <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
//     </div>
//   </div>
//   <div class="form-group">
//     <label for="inputAddress">Address</label>
//     <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
//   </div>
//   <div class="form-group">
//     <label for="inputAddress2">Address 2</label>
//     <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
//   </div>
//   <div class="form-row">
//     <div class="form-group col-md-6">
//       <label for="inputCity">City</label>
//       <input type="text" class="form-control" id="inputCity">
//     </div>
//     <div class="form-group col-md-4">
//       <label for="inputState">State</label>
//       <select id="inputState" class="form-control">
//         <option selected>Choose...</option>
//         <option>...</option>
//       </select>
//     </div>
//     <div class="form-group col-md-2">
//       <label for="inputZip">Zip</label>
//       <input type="text" class="form-control" id="inputZip">
//     </div>
//   </div>
//   <div class="form-group">
//     <div class="form-check">
//       <input class="form-check-input" type="checkbox" id="gridCheck">
//       <label class="form-check-label" for="gridCheck">
//         Check me out
//       </label>
//     </div>
//   </div>
//   <button type="submit" class="btn btn-primary">Sign in</button>
// </form>
// </div>
// </div>

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import IconButton from '@material-ui/core/IconButton';
// import classNames from 'classnames';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// // import { Link } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
// import Input from '@material-ui/core/Input';

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     margin: 'normal'
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 1000,
//     marginTop: theme.spacing.unit,
//     marginBottom: theme.spacing.unit
//   },
//   menu: {
//     width: 200
//   }
// });

// const contactOptions = [
//   {
//     value: 'Call',
//     label: 'Call'
//   },
//   {
//     value: 'Email',
//     label: 'Email'
//   },
//   {
//     value: 'Text',
//     label: 'Text'
//   },
//   {
//     value: 'Web Chat',
//     label: 'Web Chat'
//   }
// ];

// // const LinkToSubmit = props => <Link to="/routing" {...props} />;

// class UserRegistrationForm extends Component {
//   state = {
//     fullName: '',
//     preferredContact: '',
//     password: '',
//     showPassword: false
//   };

//   handleChange = prop => event => {
//     this.setState({ [prop]: event.target.value });
//   };
//   handleMouseDownPassword = event => {
//     event.preventDefault();
//   };

//   handleClickShowPassword = () => {
//     this.setState({ showPassword: !this.state.showPassword });
//   };

//   render() {
//     const { classes } = this.props;

//     return (
//       <div className={classes.root}>
//         <form id="userRegForm" onSubmit={this.LinkToSubmit}>
//           <TextField
//             id="Name"
//             className={classNames(classes.margin, classes.textField)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">Full Name</InputAdornment>
//               )
//             }}
//           />
//           <TextField
//             select
//             label="Contact Preference"
//             className={classNames(classes.margin, classes.textField)}
//             value={this.state.contactOptions}
//             onChange={this.handleChange('contactOptions')}
//             input={
//               <Input
//                 preferredContact="preferredContact"
//                 id="preferred-contact"
//               />
//             }
//           >
//             {contactOptions.map(option => (
//               <MenuItem key={option.value} value={option.value}>
//                 {option.label}
//               </MenuItem>
//             ))}
//           </TextField>

//           <FormControl
//             className={classNames(classes.margin, classes.textField)}
//           >
//             <InputLabel htmlFor="adornment-password">Password</InputLabel>
//             <Input
//               id="adornment-password"
//               type={this.state.showPassword ? 'text' : 'password'}
//               value={this.state.password}
//               onChange={this.handleChange('password')}
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="Toggle password visibility"
//                     onClick={this.handleClickShowPassword}
//                     onMouseDown={this.handleMouseDownPassword}
//                   >
//                     {this.state.showPassword ? (
//                       <VisibilityOff />
//                     ) : (
//                       <Visibility />
//                     )}
//                   </IconButton>
//                 </InputAdornment>
//               }
//             />
//           </FormControl>
//           <Button>Submit</Button>
//         </form>
//       </div>
//     );
//   }
// }
// InputAdornment.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(UserRegistrationForm);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/index';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { Link } from "react-router-dom";

class UserRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      contact: "email",
      username: "",
      password: "",
      phone: "",
      // showPassword: false,
      newUser: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  // handleMouseDownPassword = event => {
  //   event.preventDefault();
  // };

  // handleClickShowPassword = () => {
  //   this.setState({ showPassword: !this.state.showPassword });
  // };

  handleChange(event) {
    console.log(this.state);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleRegister(event) {
    event.preventDefault();
    if (this.state.username !== "" && this.state.password !== "") {
      this.props.register(this.state, () => {
        this.props.history.push("/register");
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
        <FormGroup controlId="username" bsSize="large">
          <ControlLabel>Username (or Email)</ControlLabel>
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
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <div className="form-group">
          <ControlLabel>Preferred Contact</ControlLabel>
          <div className="input-group">
            <div className="input-group-prepend">
              <select
                onChange={this.handleChange}
                value={this.state.contact}
                name="contact"
                className="custom-select"
              >
                <option value="email">Email</option>
                <option value="call">Call</option>
                <option value="text">Text</option>
                <option value="chat">Web-Chat</option>
              </select>
            </div>
          </div>
        </div>
        <button className="btn btn-primary btn-sm" type="submit">
          Submit
        </button>
        <Link to={"/login"} className="btn btn-link">
          Login
        </Link>
      </form>
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
      first_name,
      last_name,
      contact,
      username,
      password,
      user,
      redirectCallback
    ) {
      dispatch(
        register(
          first_name,
          last_name,
          contact,
          username,
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
)(UserRegistrationForm);
