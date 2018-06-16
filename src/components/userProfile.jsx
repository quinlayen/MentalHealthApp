import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <H2>userName</H2>
                <div className="card-body">
                  <div className="card-text"> email</div>
                  <div className="card-text"> insurance</div>
                  <div className="card-text"> phone number</div>
                  <div className="card-text"> bio </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
