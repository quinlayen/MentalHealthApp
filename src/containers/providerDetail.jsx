import React, { Component } from "react";
import { connect } from "react-redux";
import { getDetails } from "../actions/index";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

class ProviderDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.doctors.map(doctorData => {
      if (doctorData.provider_id == this.props.match.params.id) {
        return (
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="card">
                  <div className="card-header">
                    <h2>
                      {doctorData.first_name} {doctorData.last_name}
                    </h2>
                  </div>
                  <img
                    className="card-img-top img-thumbnail"
                    src={doctorData.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-text">{doctorData.specialties}</h5>
                    <p className="card-text">{doctorData.insurance}</p>
                    <br/>
                    <h5 className="card-text-right">
                      Phone: {doctorData.phone}
                    </h5>
                    <br/>
                    <div className="card-text-right">
                      About Me: {doctorData.bio}
                    </div>

                    <Link to={"/register"} className="btn btn-primary">
                      I'm Interested
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  }
}

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
