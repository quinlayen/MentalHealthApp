import React, { Component } from 'react';
// import axios from 'axios';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SnackBar from '@material-ui/core/Snackbar';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { tellTwilio } from '../actions/index';
import CloseIcon from '@material-ui/icons/Close';

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

class SendCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: '',
      medium: 'call',
      confirmationSnackbarOpen: false,
      snackbarDisabled: false,
      snackbarMessage: 'Loading...'
    };
    this.changeInput = this.changeInput.bind(this);
    this.sendCall = this.sendCall.bind(this);
  }
  changeInput(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  sendCall(e) {
    e.preventDefault();
    this.props.tellTwilio(this.state);
    this.setState({ confirmationSnackbarMessage: 'Dialing...', confirmationSnackbarOpen: true, processed: true });
  }

  handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ confirmationSnackbarOpen: false });
  };

  render() {
    const { classes, onClose } = this.props;
    const { loading, confirmationSnackbarOpen, ...data } = this.state;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col"/>
              <div className="col-2">
        <form className={classes.root} noValidate autoComplete="off">
          <FormControl className={classNames(classes.margin, classes.textField)}>
            <h3>Make a Call </h3>
            <TextField
              id="recipient"
              label="Recipient"
              name="recipient"
              className={classes.textField}
              value={this.state.recipient}
              onChange={this.changeInput}
              margin="normal"
            />
            <Button onClick={this.sendCall}>Call this Number</Button>
          </FormControl>
        </form>

        <SnackBar
          open={confirmationSnackbarOpen || loading}
          message={loading ? 'Loading...' : data.confirmationSnackbarMessage || ''}
          autoHideDuration={4000}
          onClose={this.handleClose}
          action={[
            <IconButton key="close" aria-label="Close" className={classes.close} onClick={this.handleClose}>
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
      </div>
      </div>
      </div>
    );
  }
}

TextField.propTypes = {
  classes: PropTypes.object.isRequired
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ tellTwilio }, dispatch);
}
export default compose(
  withStyles(styles),
  connect(
    null,
    mapDispatchToProps
  )
)(SendCall);
