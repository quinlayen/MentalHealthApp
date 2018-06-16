











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

import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../actions/index";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

// const contactOptions = [
//   {
//     value: "Call",
//     label: "Call"
//   },
//   {
//     value: "Email",
//     label: "Email"
//   },
//   {
//     value: "Text",
//     label: "Text"
//   },
//   {
//     value: "Web Chat",
//     label: "Web Chat"
//   }
// ];

class UserRegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone: "",
      // preferredContact: "",
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
)(UserRegistrationForm);
