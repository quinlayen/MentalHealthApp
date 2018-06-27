import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getDetails } from '../actions/index';
import '../styles/providerList.css';
import archway from '../styles/static/bemocs_rei_4_dribbble.jpg';

class ProviderList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.doctorHeading = this.doctorHeading.bind(this);
  // }

  renderDoctors(doctorData) {
    console.log(doctorData, 'in render doctors');
    return (
      <li className="list-inline-item" key={doctorData.provider_id}>
        <div className="card card-list" style={{ width: 18 + 'em' }}>
          <div className="card-header">
            <Link to={'doctors/' + doctorData.provider_id}>
              <div className="alert alert-danger" role="alert">
                <h2 className="alert-link">
                  {doctorData.first_name} {doctorData.last_name}
                </h2>
              </div>

              <img
                className="card-img-top img-thumbnail"
                src={doctorData.image}
                alt="provider"
              />
            </Link>
          </div>
          <div className="card-body">
            <h5 className="card-text">
              {doctorData.location}
              <small className="text-muted"> {doctorData.type}</small>
            </h5>
            <p className="card-text">{doctorData.specialties}</p>
          </div>
        </div>
      </li>
    );
  }

  // doctorHeading(doctorData) {
  //   return (
  //     <h2 className="results" key={doctorData.provider_id}>
  //       {doctorData.type} in {doctorData.location}
  //     </h2>
  //   );
  // }

  render() {
    console.log(this.props.doctorData);
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
