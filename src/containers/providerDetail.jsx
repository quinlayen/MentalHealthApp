import React, { Component } from "react";
import { connect } from "react-redux";
import { getDetails } from "../actions/index";
import { bindActionCreators } from "redux";

class ProviderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { activeDoctor: null };
  }

  componentDidMount() {
    this.props.getDetails(this.props.match.params.id);
  }

  render() {
    this.props.doctors.map(doctor => {
      if (doctor.provider_id == this.props.details) {
        console.log("CHOSEN DOCTOR", doctor);
      }
    });
    return (
      <div>
        <h3>{this.props.first_name}</h3>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchDoctor }, dispatch);
// }

// function mapStateToProps({ details }, ownProps) {
//   return { details: details[ownProps.match.params.id] };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDetails }, dispatch);
}

function mapStateToProps({ doctors, details }) {
  return { doctors, details };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProviderDetail);
