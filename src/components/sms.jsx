import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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

class SendSms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: ''
    };
    // this.changeInput = this.changeInput.bind(this);
    // this.sendSms = this.sendSms.bind(this);
  }

  changeInput = prop => e => {
    this.setState({ [prop]: e.target.value });
  };

  sendSms = () => {
    fetch('/api/send', {
      method: 'POST',
      headers: {
        Accept: 'application/JSON',
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify({ recipient: this.state.recipient })
    })
      .then(response => {
        console.log(response);
        response.json(response);
      })
      .then(response => {
        response.json();
        console.log(response);
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="recipient"
          label="Recipient"
          className={classes.textField}
          value={this.state.recipient}
          onChange={this.changeInput('recipient')}
          margin="normal"
        />
        <Button onClick={this.sendSms}>Send Message</Button>
      </form>
    );
  }
}

TextField.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(SendSms);
