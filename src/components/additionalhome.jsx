import React, { Component } from 'react';
import streamsImg from '../styles/static/ocs_cropped.jpg';
import reveal from './reveal';
import '../styles/home.css';

class AddHome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="add-home-container">
        <div className="row">
          <div className="info">
            <h1>INFO HERE</h1>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-*">
            <img
              src={streamsImg}
              className="float-left"
              alt="background-stream"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default reveal(AddHome);
