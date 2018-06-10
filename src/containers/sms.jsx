import React, { Component } from 'react';
// import axios from 'axios';
import classNames from "classnames";
import PropTypes from 'prop-types';
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SnackBar from '@material-ui/core/Snackbar';
import { bindActionCreators } from "redux";
import compose from "recompose/compose";
import { connect } from "react-redux";
import {tellTwilio} from '../actions/index';
import IconButton from '@material-ui/core/IconButton';



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

  changeInput (e) {
    // const recipient = e.target;
    // const message = e.value;
    // const name = target.name;
    // this.setState({[name] : value});
    console.log(e.target.value)
    this.setState( {[e.target.name]: e.target.value})
  }
handleClose = (e,reason) => {
        if (reason ==='clickaway') {
            return;
        }
        this.setState({confirmationSnackbarOpen: false})
    }
  sendSms(e) {
    e.preventDefault();
    this.props.tellTwilio(this.state)
    this.setState({confirmationSnackbarMessage: "Message Sent!", confirmationSnackbarOpen: true, processed: true})
 
//        if (this.props(!this.state.recipient)) {
// +    return this.setState({confirmationSnackbarMessage:"Did not send message", confirmationSnackbarOpen:true})
// +   }
   
  
  }
  
  render() {
    const { classes, onClose } = this.props;
const {loading, confirmationSnackbarOpen, ...data} = this.state
   
    return (
      <div>
      <form className={classes.root} noValidate autoComplete="off">
       <FormControl className={classNames(classes.margin, classes.textField)}>
       <h3>Send an SMS </h3>
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
      autoHideDuration= {4000}
      onClose={this.handleClose}
            action={[
          <IconButton key='close' aria-label="Close" className={classes.close} onClick={this.handleClose}>
          <CloseIcon />
          </IconButton>
      ]}
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
