import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});

const contactOptions = [
  {
    value: 'Call',
    label: 'Call'
  },
  {
    value: 'Email',
    label: 'Email'
  },
  {
    value: 'Text',
    label: 'Text'
  },
  {
    value: 'Web Chat',
    label: 'Web Chat'
  }
];

class UserRegistrationForm extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  state = {
    fullName: '',
    preferredContact: '',
    city: '',
    password: '',
    showPassword: false
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    const { classes } = this.props;
    return(
    <div className={classes.root}>
      <TextField
        label="Name"
        id="Name"
        className={classNames(classes.margin, classes.textField)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">Full Name</InputAdornment>
          )
        }}
      />
      <TextField
        select
        label="Contact Preference"
        className={classNames(classes.margin, classes.textField)}
        value={this.state.contactOptions}
        onChange={this.handleChange('contactOptions')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              How Can We Reach You?
            </InputAdornment>
          )
        }}
      >
        {contactOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <FormControl className={classNames(classes.margin, classes.textField)}>
        <InputLabel htmlFor="adornment-password">Password</InputLabel>
        <InputAdornment
          id="adornment-password"
          type={this.state.showPassword ? 'text' : 'password'}
          value={this.state.password}
          onChange={this.handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                onClick={this.handleClickShowPassword}
                onMouseDown={this.handleMouseDownPassword}
              >
                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
    )
  }
}
InputAdornment.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserRegistrationForm);
