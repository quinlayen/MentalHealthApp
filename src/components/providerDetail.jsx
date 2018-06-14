import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDoctor } from "../actions/index";
import { bindActionCreators } from "redux";

class ProviderDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const { provider_id } = this.props.match.params;
    this.props.fetchDoctor(this.props.provider_id);
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
  return bindActionCreators({ fetchDoctor }, dispatch);
}

function mapStateToProps({ details }, ownProps) {
  return { details: details[ownProps.match.params.id] };
}

// function mapStateToProps({ details }) {
//   return { details };
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProviderDetail);

// export default ProviderDetail;
