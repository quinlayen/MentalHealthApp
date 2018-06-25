import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDetails, pushNotifs, openModal } from '../actions/index';
import { bindActionCreators } from 'redux';
import '../styles/providerDetail.css';
import ContactModal from './contactModal'




class ProviderDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('props in the providerDetail', props)
    return props.modalToggle;
}


  render() {
    console.log('state after rendering',this.state)
    return this.props.doctors.map(doctorData => {
      if (doctorData.provider_id == this.props.match.params.id) {
        return (

          // Provider Details page
          <div>
            <div key = {doctorData.provider_id} className="container">
              <div className="row">
              <br />
              <br />
              <br />
              <img src={doctorData.image} alt="" />
              <h2>
                {doctorData.first_name} {doctorData.last_name}
              </h2>
               <div className="body-left">
                <h5>{doctorData.specialties}</h5>
                <p>{doctorData.insurance}</p>
                </div>
                <div className="body-right">
                <h5>Phone: {doctorData.phone}</h5>
                <br />
                <section>{doctorData.bio}</section>
                </div>
              <button type="button" className="btn btn-primary" onClick={this.props.openModal} >
                Please Help Me
              </button>
              </div>
          </div>

            {!this.state.isHidden && <ContactModal/>}
          
          
          </div>
        );
      }
    });
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDetails, pushNotifs, openModal }, dispatch);
}

function mapStateToProps({ doctors, details, modalToggle }) {
  return { doctors, details, modalToggle};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProviderDetail);
