import React, { Component } from "react";
import { connect } from "react-redux";
import { getDetails } from "../actions/index";
import { bindActionCreators } from "redux";

class ProviderDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { provider_id } = this.props.match.params.id;
    this.props.getDetails(provider_id);
  }

  render() {
    const { activeDoctor } = this.props;
    if (!activeDoctor) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>{activeDoctor.first_name}</h3>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDetails }, dispatch);
}

function mapStateToProps({ details }) {
  return { details };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProviderDetail);
