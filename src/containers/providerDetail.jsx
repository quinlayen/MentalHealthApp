import React, { Component } from "react";
import { connect } from "react-redux";
import { getDetails, pushNotifs, tellTwilio } from "../actions/index";
import { bindActionCreators } from "redux";
import "../styles/providerDetail.css";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@material-ui/core/IconButton";
import SnackBar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
// import PropTypes from "prop-types";
// import TextField from "@material-ui/core/TextField";

class ProviderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      contact: "",
      method: "",
      confirmationSnackbarOpen: false,
      snackbarDisabled: false,
      snackbarMessage: "Loading..."
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    return props.users;
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ confirmationSnackbarOpen: false });
  };

  sendMessage(event) {
    event.preventDefault();

    console.log("PERSON MAKING CONTACT", this.props.users.user);
    // console.log("PHONE NUMBER", this.props.users.user);
    this.setState(
      {
        confirmationSnackbarMessage:
          "Thank you for your interest! The doctor has been contacted, and they should contact you shortly.",
        confirmationSnackbarOpen: true,
        processed: true,
        method: this.props.users.user.method,
        contact: this.props.users.user.contact
      },
      () => {
        this.props.tellTwilio(this.state);
      }
    );
  }

  render() {
    const { onClose } = this.props;
    const { loading, confirmationSnackbarOpen, ...data } = this.state;

    return this.props.doctors.map(doctorData => {
      if (doctorData.provider_id == this.props.match.params.id) {
        return (
          <div key="doctor" className="body">
            <div className="card-columns">
              <div className="card card-detail-picture">
                <img src={doctorData.image} className="doc-image" alt="" />
              </div>

              <div className="card card-detail">
                <h1>
                  {doctorData.first_name} {doctorData.last_name}
                </h1>
                <div className="body-left">
                  <h5>{doctorData.specialties}</h5>
                  <p>Insurance: {doctorData.insurance}</p>
                </div>
                <div className="body-right">
                  <h5>
                    <FontAwesomeIcon icon="phone" /> {doctorData.phone}
                  </h5>
                </div>

                <section>{doctorData.bio}</section>
                <div className="button-bank">
                  {/* <Link to="/register">
                    <button className="btn-detail btn-primary btn-sm-1">
                      I'm Interested
                    </button>
                  </Link> */}
                  <button
                    key="message"
                    className="btn-detail btn-primary btn-sm-1"
                    onClick={this.sendMessage}
                  >
                    I'm Interested
                  </button>

                  <SnackBar
                    open={confirmationSnackbarOpen || loading}
                    message={
                      loading
                        ? "Loading..."
                        : data.confirmationSnackbarMessage || ""
                    }
                    autoHideDuration={10000}
                    onClose={this.handleClose}
                    action={[
                      <IconButton
                        key="close"
                        aria-label="Close"
                        onClick={this.handleClose}
                      >
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
    });
  }
}

// TextField.propTypes = {
//   classes: PropTypes.object.isRequired
// };

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDetails, pushNotifs, tellTwilio }, dispatch);
}

function mapStateToProps({ doctors, details, users }) {
  return { doctors, details, users };
}
window.sr = ScrollReveal();
window.sr.reveal("button-bank");
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProviderDetail);
