import React, { Component } from 'react';
// import axios from 'axios';
import classNames from "classnames";
import PropTypes from 'prop-types';
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SnackBar from '@material-ui/core/Snackbar';
import { bindActionCreators } from "redux";
import compose from "recompose/compose";
import { connect } from "react-redux";
import {tellTwilio} from '../actions/index';


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
      message: '',
      medium: 'sms',
      confirmationSnackbarOpen:false,
      snackbarDisabled: false,
      snackbarMessage: 'Loading...',
    };
    
    this.changeInput = this.changeInput.bind(this);
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



  changeInput (e) {
    // const recipient = e.target;
    // const message = e.value;
    // const name = target.name;
    // this.setState({[name] : value});
    console.log(e.target.value)
    this.setState( {[e.target.name]: e.target.value})
  }

  sendSms(e) {
    e.preventDefault();
    //recipient contains the recipient, message, and medium to send
    // const recipient= {recipient: this.state.recipient,
    // message: this.state.message,
    // medium: 'sms'};

    // axios.post('/api/send', {recipient}).then(response => 

    this.setState({confirmationSnackbarMessage: "Message Sent!", confirmationSnackbarOpen: true, processed: true})
     this.props.tellTwilio(this.state)
    //.catch(err => {
    //   console.log(err)
    //   console.log(recipient)
    //   return this.setState({confirmationSnackbarMessage:"Did not send message", confirmationSnackbarOpen:true})
    // })

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
      <form className={classes.root} noValidate autoComplete="off">
       <FormControl className={classNames(classes.margin, classes.textField)}>
        <TextField
          id="recipient"
          label="Recipient"
          name='recipient'
          className={classes.textField}
          value={this.state.recipient}
          onChange={this.changeInput}
          margin="normal"
        />
        <TextField
        name='message'
        label='Enter a Message'
        id='message'
        value={this.state.message}
        onChange={this.changeInput}
        />
        <Button onClick={this.sendSms}>Send Message</Button>
      </FormControl>
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



function mapDispatchToProps(dispatch) {
  return bindActionCreators({tellTwilio}, dispatch);
}
export default compose(withStyles(styles), connect(null, mapDispatchToProps))(SendSms);
