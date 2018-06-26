import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getDetails } from '../actions/index';
import '../styles/providerList.css';

class ProviderList extends Component {
  renderDoctors(doctorData) {
    return (
      <li className="list-inline-item" key={doctorData.provider_id}>
        <div className="card" style={{ width: 18 + 'em' }}>
          <div className="card-header">
            <Link to={'doctors/' + doctorData.provider_id}>
              <h2>
                {doctorData.first_name} {doctorData.last_name}
              </h2>
            </Link>
          </div>
          <img
            className="card-img-top img-thumbnail"
            src={doctorData.image}
            alt="Card image cap"
          />
          <div className="card-body">
            <h4 className="card-text">{doctorData.location}</h4>
            <h5 className="card-text">{doctorData.type}</h5>
            <p className="card-text">{doctorData.specialties}</p>
          </div>
        </div>
      </li>
    );
  }

  render() {
    return (
      <div className="container">
        <ul className="list-inline">
          {this.props.doctors.map(this.renderDoctors)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ doctors }) {
  return { doctors };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDetails }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProviderList);
