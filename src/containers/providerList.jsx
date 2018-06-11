import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import { fetchDoctors } from '../actions/index';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

// const styles = theme => ({
//   root: {
//     width: '100%',
//     maxWidth: '360px',
//     backgroundColor: theme.palette.background.paper
//   }
// });

class ProviderList extends Component {
  constructor(props) {
    super(props);
  }

  renderDoctors(doctorData) {
    return (
      <li className="list-group-item" key={doctorData.provider_id}>
        <div className="card">
          <div className="card-header">
            <a href="#">
              {' '}
              <h2>
                {' '}
                {doctorData.first_name} {doctorData.last_name}
              </h2>
            </a>
          </div>
          <img className="card-img-top img-thumbnail" src={doctorData.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-text">{doctorData.specialties}</h5>
            <p className="card-text">{doctorData.insurance}</p>
            <div className="card-text-right">Phone: {doctorData.phone}</div>
            <div className="card-text-right">Email: {doctorData.email}</div>
            <a href="#" class="btn btn-primary">
              Send a Message
            </a>
          </div>
        </div>
      </li>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col=10">
            <ul className="list-group list-group-flush">{this.props.doctors.map(this.renderDoctors)}</ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ doctors }) {
  return { doctors };
}

export default connect(mapStateToProps)(ProviderList);
