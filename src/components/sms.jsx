import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import 'whatwg-fetch';
import async from 'async';
import axios from 'axios';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SnackBar from '@material-ui/core/Snackbar';


const HOST = process.env.HOST || "http://localhost:8080/";

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
      recipient: '',
      confirmationSnackbarOpen:false,
      snackbarDisabled: false,
      snackbarMessage: 'Loading...',
    };
    
    // this.changeInput = this.changeInput.bind(this);
     this.sendSms = this.sendSms.bind(this);
  }

//  componentWillMount() {
//     async.series({
//         configs(callback) {
//           axios.get(HOST + 'api/config').then(res =>
//             callback(null, res.data.data)
//           )
//         },
//       }, (err,response) => {
//         err ? this.handleFetchError(err) : this.handleFetch(response)
//     })
 
//     }



  changeInput = prop => e => {
    // console.log(e.target.value)
    this.setState({ [prop]: e.target.value });
  };

  sendSms() {
    const recipient= {recipient: this.state.recipient,
    message: this.state.message}

    axios.post('/api/send', {recipient}).then(response => this.setState({confirmationSnackbarMessage: "Message Sent!", confirmationSnackbarOpen: true, processed: true})).catch(err => {
      console.log(err)
      console.log(recipient)
      return this.setState({confirmationSnackbarMessage:"Did not send message", confirmationSnackbarOpen:true})
    })
  }

  // sendSms = () => {
  //   fetch('/api/send', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/JSON',
  //       'Content-Type': 'application/JSON'
  //     },
  //     body: JSON.stringify({ recipient: this.state.recipient })
  //   })
  //     .then(response => {
  //       console.log(response);
  //       response.json(response);
  //     })
  //     .then(response => {
  //       response.json();
  //       console.log(response);
  //     });
  // };

  render() {
    const { classes } = this.props;
const {loading, confirmationSnackbarOpen, ...data} = this.state
    return (
      <div>
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
     
      
      <SnackBar 
      open={confirmationSnackbarOpen || loading}
      message ={loading ? 'Loading...' : data.confirmationSnackbarMessage || ''}
      autoHideDuration= {10000}
     
      />
      
      </div>
    );
  }
}

TextField.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(SendSms);
